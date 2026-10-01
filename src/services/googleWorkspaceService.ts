import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  User, 
  signOut 
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Target Admin Email for WisataBromo.co
export const ADMIN_TARGET_EMAIL = 'wisatabromo.co@gmail.com';

// Google Workspace Scopes configured for Calendar, Gmail, Sheets, Drive
export const WORKSPACE_SCOPES = [
  'https://www.googleapis.com/auth/calendar.events',
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.compose',
  'https://mail.google.com/',
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive'
];

// Initialize Firebase App safely (singleton)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Provider with all required scopes
const provider = new GoogleAuthProvider();
WORKSPACE_SCOPES.forEach(scope => provider.addScope(scope));
provider.setCustomParameters({
  prompt: 'select_account'
});

// In-Memory Token Caching (Strict requirement: Never store OAuth tokens in localStorage/sessionStorage)
let cachedAccessToken: string | null = null;
let isSigningIn = false;

// Listen to Auth State
export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // Token not in memory; trigger fresh sign-in if needed
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

// Google Sign-In with Popup
export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    if (!credential?.accessToken) {
      throw new Error('Gagal memperoleh OAuth Access Token dari Google.');
    }

    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Sign-in Google Workspace error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = (): string | null => {
  return cachedAccessToken;
};

export const googleLogout = async () => {
  await signOut(auth);
  cachedAccessToken = null;
};

export interface BookingPayload {
  bookingCode: string;
  tripDate: string;
  fullName: string;
  whatsappNumber: string;
  email: string;
  packageTitle: string;
  paxCount: number;
  wnaCount: number;
  pickupAddress: string;
  paymentMethod: string;
  paymentProofName: string;
  paymentProofDataUrl?: string; // Base64 data URL of the transfer proof image/file
  grandTotal: number;
  downPayment: number;
  specialNotes?: string;
  includeDocumentation?: boolean;
  includeDrone?: boolean;
}

export interface WorkspaceSyncResult {
  calendar: { success: boolean; eventId?: string; eventLink?: string; error?: string };
  gmail: { success: boolean; messageId?: string; recipient: string; error?: string };
  sheets: { success: boolean; spreadsheetId?: string; spreadsheetUrl?: string; rowAppended?: number; error?: string };
  drive?: { success: boolean; fileId?: string; webViewLink?: string; error?: string };
}

/**
 * 0. Upload Bukti Transfer ke Google Drive
 */
export const uploadProofToGoogleDrive = async (
  booking: BookingPayload,
  accessToken: string
): Promise<{ success: boolean; fileId?: string; webViewLink?: string; error?: string }> => {
  if (!booking.paymentProofDataUrl || !booking.paymentProofDataUrl.includes('base64,')) {
    return { success: false, error: 'Tidak ada file bukti transfer untuk diunggah.' };
  }

  try {
    const parts = booking.paymentProofDataUrl.split('base64,');
    const headerPart = parts[0];
    const base64Data = parts[1];

    let mimeType = 'image/jpeg';
    const match = headerPart.match(/:(.*?);/);
    if (match && match[1]) {
      mimeType = match[1];
    }

    const extMatch = booking.paymentProofName?.match(/\.([0-9a-z]+)$/i);
    const ext = extMatch ? extMatch[1] : (mimeType.includes('pdf') ? 'pdf' : 'jpg');
    const cleanName = booking.fullName.replace(/[^a-zA-Z0-9]/g, '_');
    const fileName = `Bukti_Transfer_${booking.bookingCode}_${cleanName}.${ext}`;

    // Convert base64 to Blob
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const fileBlob = new Blob([byteArray], { type: mimeType });

    const metadata = {
      name: fileName,
      description: `Bukti transfer DP 30% untuk reservasi ${booking.bookingCode} a/n ${booking.fullName} (${booking.packageTitle})`,
      mimeType: mimeType
    };

    const formData = new FormData();
    formData.append(
      'metadata',
      new Blob([JSON.stringify(metadata)], { type: 'application/json' })
    );
    formData.append('file', fileBlob);

    const uploadRes = await fetch(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: formData
      }
    );

    if (!uploadRes.ok) {
      const errData = await uploadRes.json();
      throw new Error(errData.error?.message || `HTTP ${uploadRes.status} Drive Upload Error`);
    }

    const driveData = await uploadRes.json();
    return {
      success: true,
      fileId: driveData.id,
      webViewLink: driveData.webViewLink || `https://drive.google.com/file/d/${driveData.id}/view`
    };
  } catch (err: any) {
    console.error('Error uploading transfer proof to Google Drive:', err);
    return { success: false, error: err.message || 'Gagal mengunggah bukti transfer ke Google Drive' };
  }
};

/**
 * 1. Synchronize Booking to Google Calendar
 */
export const syncBookingToGoogleCalendar = async (
  booking: BookingPayload, 
  accessToken: string,
  driveLink?: string
): Promise<{ success: boolean; eventId?: string; eventLink?: string; error?: string }> => {
  try {
    // Determine event start & end time
    // Bromo trips usually start at midnight 00:00 WIB and conclude around 12:00 WIB
    const startDateStr = booking.tripDate;
    const startDateTime = `${startDateStr}T00:30:00+07:00`;
    const endDateTime = `${startDateStr}T13:00:00+07:00`;

    const summary = `Bromo Trip [${booking.bookingCode}]: ${booking.fullName} - ${booking.packageTitle} (${booking.paxCount} Pax)`;
    const description = [
      `✦ RESERVASI WISATABROMO.CO ✦`,
      `Kode Booking: ${booking.bookingCode}`,
      `Nama Pemesan: ${booking.fullName}`,
      `No WhatsApp: ${booking.whatsappNumber}`,
      `Email: ${booking.email}`,
      `Paket Wisata: ${booking.packageTitle}`,
      `Jumlah Peserta: ${booking.paxCount} Orang (WNA: ${booking.wnaCount} Orang)`,
      `Lokasi Penjemputan: ${booking.pickupAddress}`,
      `Total Biaya: Rp ${booking.grandTotal.toLocaleString('id-ID')}`,
      `DP Transfer (30%): Rp ${booking.downPayment.toLocaleString('id-ID')}`,
      `Metode Bayar: ${booking.paymentMethod.toUpperCase()}`,
      `Status Bukti Transfer: ${booking.paymentProofName ? `Terlampir (${booking.paymentProofName})` : 'Belum diunggah'}`,
      driveLink ? `Link Bukti Transfer di Google Drive: ${driveLink}` : null,
      booking.specialNotes ? `Catatan: ${booking.specialNotes}` : null,
      `---------------------------------`,
      `Kontak Hotline: +62 812 2229 0318`,
      `Website: https://wisatabromo.co`
    ].filter(Boolean).join('\n');

    const eventPayload = {
      summary,
      description,
      location: `${booking.pickupAddress}, Kawasan Bromo Tengger Semeru`,
      start: {
        dateTime: startDateTime,
        timeZone: 'Asia/Jakarta'
      },
      end: {
        dateTime: endDateTime,
        timeZone: 'Asia/Jakarta'
      },
      colorId: '9', // Blueberry / Blue color
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 24 * 60 }, // 1 day before
          { method: 'popup', minutes: 180 }      // 3 hours before
        ]
      }
    };

    const res = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventPayload)
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.error?.message || `HTTP ${res.status} Calendar Error`);
    }

    const data = await res.json();
    return {
      success: true,
      eventId: data.id,
      eventLink: data.htmlLink
    };
  } catch (err: any) {
    console.error('Error syncing to Google Calendar:', err);
    return { success: false, error: err.message || 'Gagal menambahkan event ke Google Calendar' };
  }
};

/**
 * 2. Send Booking Confirmation & Transfer Proof Attachment via Gmail
 */
export const sendBookingEmailViaGmail = async (
  booking: BookingPayload,
  accessToken: string,
  driveLink?: string
): Promise<{ success: boolean; messageId?: string; recipient: string; error?: string }> => {
  try {
    const toEmail = ADMIN_TARGET_EMAIL;
    const ccEmail = booking.email;
    const subject = `[BOOKING MASUK & BUKTI TRANSFER] ${booking.bookingCode} - ${booking.fullName} (${booking.packageTitle})`;

    // Process attachment from Base64 Data URL if available
    let attachmentBase64 = '';
    let attachmentMime = 'image/jpeg';
    let attachmentFilename = booking.paymentProofName || 'bukti-transfer.jpg';

    if (booking.paymentProofDataUrl && booking.paymentProofDataUrl.includes('base64,')) {
      const parts = booking.paymentProofDataUrl.split('base64,');
      const headerPart = parts[0];
      attachmentBase64 = parts[1];
      const match = headerPart.match(/:(.*?);/);
      if (match && match[1]) {
        attachmentMime = match[1];
      }
    }

    const boundary = `====_NextPart_${Date.now()}====`;
    
    // Build HTML email body
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
        <div style="background: #102a56; padding: 24px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px;">NOTIFIKASI RESERVASI & BUKTI TRANSFER</h2>
          <p style="margin: 4px 0 0 0; color: #ffc928; font-size: 13px; font-weight: bold;">WisataBromo.co - PT Global Travel Healing</p>
        </div>
        
        <div style="padding: 24px; color: #334155; line-height: 1.6;">
          <div style="background: #eaf2ff; border-left: 4px solid #3d72fe; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 14px; font-weight: bold; color: #102a56;">Kode Booking: ${booking.bookingCode}</p>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #475569;">Tanggal Trip: <strong>${booking.tripDate}</strong></p>
          </div>

          <h3 style="font-size: 15px; color: #102a56; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px;">Detail Pemesan & Wisatawan</h3>
          <table style="width: 100%; font-size: 13px; border-collapse: collapse; margin-bottom: 18px;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 160px;">Nama Lengkap</td><td style="font-weight: bold;">${booking.fullName}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">WhatsApp</td><td style="font-weight: bold;"><a href="https://wa.me/${booking.whatsappNumber.replace(/[^0-9]/g, '')}">${booking.whatsappNumber}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Email</td><td>${booking.email}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Paket Wisata</td><td style="font-weight: bold; color: #3d72fe;">${booking.packageTitle}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Jumlah Peserta</td><td>${booking.paxCount} Orang ${booking.wnaCount > 0 ? `(${booking.wnaCount} WNA)` : ''}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Lokasi Penjemputan</td><td>${booking.pickupAddress}</td></tr>
            ${booking.specialNotes ? `<tr><td style="padding: 6px 0; color: #64748b;">Catatan Khusus</td><td>${booking.specialNotes}</td></tr>` : ''}
          </table>

          <h3 style="font-size: 15px; color: #102a56; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px;">Rincian Pembayaran & Bukti Transfer</h3>
          <table style="width: 100%; font-size: 13px; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 160px;">Total Biaya Paket</td><td style="font-weight: bold;">Rp ${booking.grandTotal.toLocaleString('id-ID')}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">DP Ditransfer (30%)</td><td style="font-weight: bold; color: #059669; font-size: 14px;">Rp ${booking.downPayment.toLocaleString('id-ID')}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Metode Transfer</td><td style="font-weight: bold;">${booking.paymentMethod.toUpperCase()}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Nama File Bukti</td><td>${booking.paymentProofName || 'bukti-transfer'}</td></tr>
          </table>

          ${driveLink ? `
            <div style="text-align: center; margin-bottom: 20px;">
              <a href="${driveLink}" target="_blank" style="display: inline-block; padding: 12px 24px; background: #3d72fe; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 13px; box-shadow: 0 2px 4px rgba(61,114,254,0.3);">
                📁 Buka Bukti Transfer di Google Drive &rarr;
              </a>
            </div>
          ` : ''}

          <div style="background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 14px; text-align: center;">
            <p style="margin: 0 0 6px 0; font-size: 12px; color: #64748b;">Lampiran Bukti Transfer telah disematkan pada pesan email ini${driveLink ? ' dan disimpan secara permanen di Google Drive' : ''}.</p>
            <p style="margin: 0; font-size: 11px; color: #94a3b8;">Email ini dibuat secara otomatis oleh sistem reservasi WisataBromo.co</p>
          </div>
        </div>
      </div>
    `;

    // Construct MIME message (RFC 2822)
    const mimeLines = [
      `To: ${toEmail}`,
      ccEmail ? `Cc: ${ccEmail}` : '',
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      '',
      `--${boundary}`,
      `Content-Type: text/html; charset="UTF-8"`,
      `Content-Transfer-Encoding: 7bit`,
      '',
      htmlBody,
      ''
    ];

    // If attachment exists, add attachment part
    if (attachmentBase64) {
      mimeLines.push(
        `--${boundary}`,
        `Content-Type: ${attachmentMime}; name="${attachmentFilename}"`,
        `Content-Transfer-Encoding: base64`,
        `Content-Disposition: attachment; filename="${attachmentFilename}"`,
        '',
        attachmentBase64,
        ''
      );
    }

    mimeLines.push(`--${boundary}--`);

    // Base64URL encode the entire raw MIME string
    const rawMime = mimeLines.filter(line => line !== null).join('\r\n');
    const encodedRaw = btoa(unescape(encodeURIComponent(rawMime)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ raw: encodedRaw })
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.error?.message || `HTTP ${res.status} Gmail Error`);
    }

    const data = await res.json();
    return {
      success: true,
      messageId: data.id,
      recipient: toEmail
    };
  } catch (err: any) {
    console.error('Error sending email via Gmail:', err);
    return { success: false, recipient: ADMIN_TARGET_EMAIL, error: err.message || 'Gagal mengirim email via Gmail' };
  }
};

/**
 * 3. Append Booking Data into Google Sheets
 */
export const appendBookingToGoogleSheet = async (
  booking: BookingPayload,
  accessToken: string,
  driveLink?: string
): Promise<{ success: boolean; spreadsheetId?: string; spreadsheetUrl?: string; rowAppended?: number; error?: string }> => {
  try {
    // Check if we have an existing spreadsheet ID stored in localStorage or find it on Drive
    let spreadsheetId = localStorage.getItem('wisatabromo_sheets_id');

    if (!spreadsheetId) {
      // Search Drive for existing "Data Booking WisataBromo.co"
      const searchRes = await fetch(
        "https://www.googleapis.com/drive/v3/files?q=name='Data Booking WisataBromo.co' and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false",
        {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      );

      if (searchRes.ok) {
        const searchData = await searchRes.json();
        if (searchData.files && searchData.files.length > 0 && searchData.files[0]?.id) {
          spreadsheetId = searchData.files[0].id as string;
          localStorage.setItem('wisatabromo_sheets_id', spreadsheetId);
        }
      }
    }

    // If still no spreadsheet, create a new one
    if (!spreadsheetId) {
      const createRes = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          properties: {
            title: 'Data Booking WisataBromo.co'
          },
          sheets: [
            {
              properties: {
                title: 'Data Booking',
                gridProperties: {
                  frozenRowCount: 1
                }
              },
              data: [
                {
                  startRow: 0,
                  startColumn: 0,
                  rowData: [
                    {
                      values: [
                        { userEnteredValue: { stringValue: 'Timestamp' } },
                        { userEnteredValue: { stringValue: 'Kode Booking' } },
                        { userEnteredValue: { stringValue: 'Tanggal Trip' } },
                        { userEnteredValue: { stringValue: 'Nama Pemesan' } },
                        { userEnteredValue: { stringValue: 'No WhatsApp' } },
                        { userEnteredValue: { stringValue: 'Email' } },
                        { userEnteredValue: { stringValue: 'Paket Wisata' } },
                        { userEnteredValue: { stringValue: 'Pax (Org)' } },
                        { userEnteredValue: { stringValue: 'WNA (Org)' } },
                        { userEnteredValue: { stringValue: 'Lokasi Penjemputan' } },
                        { userEnteredValue: { stringValue: 'Total Biaya (Rp)' } },
                        { userEnteredValue: { stringValue: 'DP 30% (Rp)' } },
                        { userEnteredValue: { stringValue: 'Metode Bayar' } },
                        { userEnteredValue: { stringValue: 'Bukti Transfer' } },
                        { userEnteredValue: { stringValue: 'Status Reservasi' } },
                        { userEnteredValue: { stringValue: 'Catatan Khusus' } }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        })
      });

      if (!createRes.ok) {
        const errData = await createRes.json();
        throw new Error(errData.error?.message || `HTTP ${createRes.status} Sheets Creation Error`);
      }

      const createData = await createRes.json();
      if (!createData.spreadsheetId) {
        throw new Error('Gagal mendapatkan ID spreadsheet yang baru dibuat');
      }
      spreadsheetId = createData.spreadsheetId as string;
      localStorage.setItem('wisatabromo_sheets_id', spreadsheetId);
    }

    const finalSpreadsheetId = spreadsheetId as string;

    // Prepare row values
    const nowTimestamp = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
    const paymentProofCell = driveLink 
      ? `=HYPERLINK("${driveLink}", "${booking.paymentProofName || 'Lihat Bukti Transfer'}")`
      : (booking.paymentProofName || 'Terlampir');

    const rowValues = [
      nowTimestamp,
      booking.bookingCode,
      booking.tripDate,
      booking.fullName,
      booking.whatsappNumber,
      booking.email,
      booking.packageTitle,
      booking.paxCount,
      booking.wnaCount,
      booking.pickupAddress,
      booking.grandTotal,
      booking.downPayment,
      booking.paymentMethod.toUpperCase(),
      paymentProofCell,
      'DP Terkirim (Menunggu Verifikasi)',
      booking.specialNotes || '-'
    ];

    // Append to sheet (Auto-discover first sheet tab or use "Data Booking")
    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${finalSpreadsheetId}/values/A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    
    const appendRes = await fetch(appendUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        values: [rowValues]
      })
    });

    if (!appendRes.ok) {
      const errData = await appendRes.json();
      throw new Error(errData.error?.message || `HTTP ${appendRes.status} Sheets Append Error`);
    }

    const appendData = await appendRes.json();
    return {
      success: true,
      spreadsheetId: finalSpreadsheetId,
      spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${finalSpreadsheetId}/edit`,
      rowAppended: appendData.updates?.updatedRows || 1
    };
  } catch (err: any) {
    console.error('Error appending booking to Google Sheets:', err);
    return { success: false, error: err.message || 'Gagal menyimpan data ke Google Sheets' };
  }
};

/**
 * 4. Master Unified Sync: Google Drive (Upload Bukti) + Google Calendar + Gmail + Google Sheets
 */
export const syncAllToGoogleWorkspace = async (
  booking: BookingPayload,
  accessToken: string
): Promise<WorkspaceSyncResult> => {
  // 1. If proof exists, upload to Google Drive first to get a permanent shareable webViewLink
  let driveRes: { success: boolean; fileId?: string; webViewLink?: string; error?: string } = {
    success: false
  };

  if (booking.paymentProofDataUrl && booking.paymentProofDataUrl.includes('base64,')) {
    try {
      driveRes = await uploadProofToGoogleDrive(booking, accessToken);
    } catch (e: any) {
      console.warn('Drive upload failed, continuing with email and calendar:', e);
      driveRes = { success: false, error: e.message };
    }
  }

  const driveLink = driveRes.webViewLink;

  // 2. Concurrently sync to Calendar, Gmail, and Sheets
  const [calRes, gmailRes, sheetRes] = await Promise.all([
    syncBookingToGoogleCalendar(booking, accessToken, driveLink),
    sendBookingEmailViaGmail(booking, accessToken, driveLink),
    appendBookingToGoogleSheet(booking, accessToken, driveLink)
  ]);

  return {
    calendar: calRes,
    gmail: gmailRes,
    sheets: sheetRes,
    drive: driveRes
  };
};
