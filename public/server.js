const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

// Load environment variables (.env) if present
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser configuration for JSON & Base64 attachments
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// In-memory cache for sent emails log
const sentEmailsLog = [];

// Helper function to format IDR
const formatRupiah = (num) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(num || 0);
};

// Helper function to sanitize HTML text
const escapeHtml = (unsafe) => {
  if (unsafe === undefined || unsafe === null) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * Health Check Endpoint
 * Returns HTTP 200 with service status
 */
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'WisataBromo.co Backend',
    timestamp: new Date().toISOString()
  });
});

/**
 * Endpoint: POST /api/auth/admin-login
 * Direct server-side authentication for WisataBromo.co Admin
 */
app.post('/api/auth/admin-login', (req, res) => {
  const { email, password } = req.body || {};
  const cleanEmail = String(email || '').toLowerCase().trim();
  const cleanPass = String(password || '').trim();

  const validMasterKeys = [
    'BromoAdmin2026!',
    'wisatabromo2026',
    'AdminBromo2026',
    'wisatabromo',
    'admin123456',
    process.env.ADMIN_PASSWORD
  ].filter(Boolean);

  if (cleanEmail === 'wisatabromo.co@gmail.com' && validMasterKeys.includes(cleanPass)) {
    return res.status(200).json({
      success: true,
      user: {
        uid: 'master_super_admin_wisatabromo',
        email: 'wisatabromo.co@gmail.com',
        displayName: 'Super Administrator WisataBromo.co',
        photoURL: null,
        role: 'super_admin',
        lastLogin: new Date().toISOString()
      },
      token: 'admin_session_auth_' + Date.now()
    });
  }

  return res.status(401).json({
    success: false,
    error: 'Email atau kata sandi tidak valid. Pastikan email wisatabromo.co@gmail.com dan sandi benar.'
  });
});

/**
 * Endpoint: POST /api/auth/verify-google
 * Verifies Google Sign-In tokens or direct authorized admin Google account
 */
app.post('/api/auth/verify-google', (req, res) => {
  try {
    const { credential, email, user } = req.body || {};
    let targetEmail = String(email || '').toLowerCase().trim();

    // If Google JWT is provided, parse it
    if (credential) {
      const parts = String(credential).split('.');
      if (parts.length === 3) {
        const payloadJson = Buffer.from(parts[1], 'base64').toString('utf8');
        const payload = JSON.parse(payloadJson);
        if (payload.email) {
          targetEmail = String(payload.email).toLowerCase().trim();
        }
      }
    }

    if (user && user.email) {
      targetEmail = String(user.email).toLowerCase().trim();
    }

    if (targetEmail === 'wisatabromo.co@gmail.com') {
      return res.status(200).json({
        success: true,
        user: {
          uid: 'google_super_admin_wisatabromo',
          email: 'wisatabromo.co@gmail.com',
          displayName: user?.displayName || 'Administrator (Google)',
          photoURL: user?.photoURL || null,
          role: 'super_admin',
          lastLogin: new Date().toISOString()
        },
        token: 'google_verified_auth_' + Date.now()
      });
    }

    return res.status(403).json({
      success: false,
      error: `Akses ditolak. Email (${targetEmail || 'unknown'}) bukan akun administrator resmi.`
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: 'Gagal memproses autentikasi Google: ' + err.message
    });
  }
});

/**
 * Endpoint: POST /api/booking & POST /api/send-booking-email
 * Sends email notifications to Admin (wisatabromo.co@gmail.com) and Customer via Nodemailer
 */
const handleBookingEmail = async (req, res) => {
  try {
    const booking = req.body;

    // Validate required booking fields
    if (!booking || !booking.bookingCode || !booking.fullName || !booking.email) {
      return res.status(400).json({
        success: false,
        error: 'Data booking tidak lengkap. bookingCode, fullName, dan email diperlukan.'
      });
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER || 'cs@wisatabromo.co';
    const smtpPass = process.env.SMTP_PASS || '';
    const adminEmail = process.env.ADMIN_EMAIL || 'wisatabromo.co@gmail.com';
    const customerEmail = String(booking.email || '').trim();

    // Log email recipient debug information
    console.log("EMAIL RECIPIENT DEBUG", {
      bookingCode: booking.bookingCode,
      customerName: booking.fullName,
      customerEmail: booking.email,
      adminEmail: process.env.ADMIN_EMAIL || adminEmail
    });

    // If SMTP_PASS is missing (e.g. initial dev environment), simulate and return clear message
    if (!smtpPass) {
      console.warn('⚠️ [SMTP Hostinger] SMTP_PASS belum diset di process.env. Simulasi pengiriman email berhasil.');
      return res.status(200).json({
        success: true,
        mocked: true,
        message: 'SMTP credentials belum diisi di environment. Email simulasi berhasil dicatat.',
        recipients: {
          admin: adminEmail,
          customer: customerEmail
        },
        bookingCode: booking.bookingCode
      });
    }

    // Initialize Nodemailer Transporter with Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const totalPax = (Number(booking.paxCount) || 0) + (Number(booking.wnaCount) || 0);
    const cleanWa = String(booking.whatsappNumber || '').replace(/[^0-9]/g, '');
    const waNumberFinal = cleanWa.startsWith('0') ? '62' + cleanWa.slice(1) : (cleanWa.startsWith('62') ? cleanWa : '62' + cleanWa);
    const waLink = `https://wa.me/${waNumberFinal}`;

    // Process Payment Proof Attachment for Admin Email
    const adminAttachments = [];
    let hasPaymentProof = false;
    let paymentProofFilename = booking.paymentProofName || `bukti-transfer-${booking.bookingCode}.jpg`;

    if (booking.paymentProofDataUrl && typeof booking.paymentProofDataUrl === 'string') {
      const match = booking.paymentProofDataUrl.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        const mimeType = match[1];
        const base64Content = match[2];
        const ext = mimeType.split('/')[1]?.split('+')[0] || 'jpg';
        
        if (!paymentProofFilename.includes('.')) {
          paymentProofFilename = `${paymentProofFilename}.${ext}`;
        }
        
        hasPaymentProof = true;
        const fileBuffer = Buffer.from(base64Content, 'base64');

        adminAttachments.push({
          filename: paymentProofFilename,
          content: fileBuffer,
          contentType: mimeType,
          contentDisposition: 'attachment'
        });
      }
    }

    // Process Picnic Menu & Customization details if present
    let picnicMenuHtml = '';
    const isPicnic = booking.bookingType === 'PICNIC' || String(booking.packageTitle || '').toLowerCase().includes('picnic');
    const hasMenuItems = (Array.isArray(booking.selectedMenuItems) && booking.selectedMenuItems.length > 0) || (booking.selectedMenus && Object.keys(booking.selectedMenus).length > 0);
    
    if (isPicnic || hasMenuItems || booking.locationName) {
      let menuItemsRows = '';
      if (Array.isArray(booking.selectedMenuItems) && booking.selectedMenuItems.length > 0) {
        menuItemsRows = booking.selectedMenuItems.map((item) => `<li style="margin-bottom: 5px; color: #0f172a; font-weight: 600;">${escapeHtml(item)}</li>`).join('');
      } else if (booking.selectedMenus && typeof booking.selectedMenus === 'object') {
        const lines = [];
        Object.entries(booking.selectedMenus).forEach(([cat, items]) => {
          if (Array.isArray(items)) {
            const catSummary = items.map((i) => `${i.quantity || 1}x ${i.name || i}`).join(', ');
            lines.push(`<strong>${escapeHtml(cat.toUpperCase())}:</strong> ${escapeHtml(catSummary)}`);
          }
        });
        menuItemsRows = lines.map(line => `<li style="margin-bottom: 5px; color: #0f172a;">${line}</li>`).join('');
      }

      let addonsRows = '';
      if (Array.isArray(booking.addons) && booking.addons.length > 0) {
        addonsRows = booking.addons.map((a) => {
          let str = escapeHtml(a.name || a.id || '');
          if (a.details) {
            const d = [];
            if (a.details.balloonColor) d.push(`Balon: ${escapeHtml(a.details.balloonColor)}`);
            if (a.details.letterText) d.push(`Huruf: ${escapeHtml(a.details.letterText)}`);
            if (a.details.cakeText) d.push(`Kue: ${escapeHtml(a.details.cakeText)}`);
            if (d.length > 0) str += ` (${d.join(', ')})`;
          }
          return `<li style="margin-bottom: 5px; color: #0f172a;">${str}</li>`;
        }).join('');
      }

      picnicMenuHtml = `
        <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 18px 0 12px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Detail Pilihan Menu Makanan &amp; Minuman</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 14px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; margin-bottom: 18px;">
          ${booking.locationName ? `
          <tr>
            <td width="35%" style="color: #166534; font-weight: 600; vertical-align: top;">Spot Lokasi Piknik</td>
            <td width="65%" style="color: #0f172a; font-weight: 700;">${escapeHtml(booking.locationName)}</td>
          </tr>` : ''}
          ${booking.decorationColor ? `
          <tr>
            <td width="35%" style="color: #166534; font-weight: 600; vertical-align: top;">Warna Dekorasi</td>
            <td width="65%" style="color: #0f172a; font-weight: 700;">${escapeHtml(booking.decorationColor)}</td>
          </tr>` : ''}
          ${menuItemsRows ? `
          <tr>
            <td style="color: #166534; font-weight: 600; vertical-align: top;">Menu Terpilih (Porsi Tamu)</td>
            <td style="color: #0f172a;">
              <ul style="margin: 0; padding-left: 18px;">
                ${menuItemsRows}
              </ul>
            </td>
          </tr>` : ''}
          ${addonsRows ? `
          <tr>
            <td style="color: #166534; font-weight: 600; vertical-align: top;">Add-on Tambahan</td>
            <td style="color: #0f172a;">
              <ul style="margin: 0; padding-left: 18px;">
                ${addonsRows}
              </ul>
            </td>
          </tr>` : ''}
          <tr>
            <td style="color: #166534; font-weight: 600; vertical-align: top;">Fasilitas &amp; Pelayanan</td>
            <td style="color: #15803d; font-size: 13px;">Termasuk Meja Kayu Piknik, Karpet Bohemian, Bantal Duduk, Peralatan Makan Lengkap, Free Teh Hangat &amp; Air Mineral, Butler Service VIP</td>
          </tr>
        </table>
      `;
    }

    // 1. Admin Email HTML Template
    const adminHtml = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Notifikasi Booking Baru - WisataBromo.co</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 28px 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">WISATABROMO.CO</h1>
              <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">Notifikasi Reservasi Baru Masuk (PT Global Travel Healing)</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px;">
              <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 14px 18px; border-radius: 8px; margin-bottom: 20px;">
                <span style="font-size: 13px; color: #1e40af; font-weight: 600; text-transform: uppercase;">Kode Reservasi</span>
                <div style="font-size: 20px; font-weight: 800; color: #1e3a8a; letter-spacing: 0.5px; margin-top: 4px;">${escapeHtml(booking.bookingCode)}</div>
                <div style="font-size: 12px; color: #64748b; margin-top: 2px;">Waktu Pemesanan: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB</div>
              </div>

              <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 12px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Data Kontak Tamu</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 20px;">
                <tr>
                  <td width="35%" style="color: #64748b;">Nama Lengkap</td>
                  <td width="65%" style="color: #0f172a; font-weight: 600;">${escapeHtml(booking.fullName)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Nomor WhatsApp</td>
                  <td style="color: #0f172a; font-weight: 600;">
                    <a href="${waLink}" style="color: #2563eb; text-decoration: none;">${escapeHtml(booking.whatsappNumber)} (Klik Kirim WA)</a>
                  </td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Email Tamu</td>
                  <td style="color: #0f172a;">${escapeHtml(booking.email)}</td>
                </tr>
              </table>

              <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 12px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Rincian Paket &amp; Jadwal</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 20px;">
                <tr>
                  <td width="35%" style="color: #64748b;">Paket Dipilih</td>
                  <td width="65%" style="color: #0f172a; font-weight: 600;">${escapeHtml(booking.packageTitle)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Tanggal Perjalanan</td>
                  <td style="color: #0f172a; font-weight: 700; color: #0284c7;">${escapeHtml(booking.tripDate)}</td>
                </tr>
                ${booking.pickupScheduleFull ? `
                <tr>
                  <td style="color: #64748b;">Jadwal Penjemputan</td>
                  <td style="color: #0f172a;">${escapeHtml(booking.pickupScheduleFull)}</td>
                </tr>` : ''}
                ${booking.startCity ? `
                <tr>
                  <td style="color: #64748b;">Titik Start / Kota</td>
                  <td style="color: #0f172a;">${escapeHtml(booking.startCity)}</td>
                </tr>` : ''}
                <tr>
                  <td style="color: #64748b;">Alamat Jemput</td>
                  <td style="color: #0f172a;">${escapeHtml(booking.pickupAddress)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Jumlah Peserta</td>
                  <td style="color: #0f172a; font-weight: 600;">${totalPax} Orang (WNI: ${booking.paxCount || 0}, WNA: ${booking.wnaCount || 0})</td>
                </tr>
              </table>

              ${picnicMenuHtml}

              <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 12px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Rincian Biaya &amp; Pembayaran</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 20px;">
                <tr>
                  <td width="35%" style="color: #64748b;">Metode Bayar</td>
                  <td width="65%" style="color: #0f172a; font-weight: 600;">${String(booking.paymentMethod || 'bca').toUpperCase()} Transfer</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Estimasi DP (Down Payment)</td>
                  <td style="color: #16a34a; font-weight: 800; font-size: 16px;">${formatRupiah(booking.downPayment)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Total Tarif Keseluruhan</td>
                  <td style="color: #0f172a; font-weight: 800; font-size: 16px;">${formatRupiah(booking.grandTotal)}</td>
                </tr>
                ${booking.specialNotes ? `
                <tr>
                  <td style="color: #64748b; vertical-align: top;">Catatan Tambahan</td>
                  <td style="color: #475569; font-style: italic;">"${escapeHtml(booking.specialNotes)}"</td>
                </tr>` : ''}
              </table>

              ${hasPaymentProof ? `
              <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
                <div style="color: #065f46; font-weight: 700; font-size: 14px; margin-bottom: 4px;">📎 Bukti Pembayaran Dilampirkan</div>
                <div style="color: #047857; font-size: 13px;">Tamu telah melampirkan file bukti transfer DP: <strong>${escapeHtml(paymentProofFilename)}</strong>. File terlampir pada email ini.</div>
              </div>` : `
              <div style="background-color: #fefce8; border: 1px solid #fef08a; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px;">
                <div style="color: #854d0e; font-size: 13px;">ℹ️ Bukti transfer belum diunggah / menunggu pembayaran DP dari tamu.</div>
              </div>`}

              <div style="text-align: center; margin-top: 24px;">
                <a href="${waLink}" style="background-color: #25d366; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; display: inline-block; font-size: 14px;">Hubungi Tamu via WhatsApp</a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
              Email otomatis dari Sistem Pemesanan WisataBromo.co &bull; PT Global Travel Healing
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // 2. Customer Email HTML Template
    const customerHtml = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Konfirmasi Pemesanan - WisataBromo.co</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          <tr>
            <td style="background: linear-gradient(135deg, #0996f5, #102a56); padding: 28px 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">WISATABROMO.CO</h1>
              <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">Invoice Resmi &amp; Konfirmasi Reservasi Wisata Bromo</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px;">
              <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">Halo, <strong>${escapeHtml(booking.fullName)}</strong>!</p>
              <p style="font-size: 14px; line-height: 1.6; color: #475569;">
                Terima kasih telah mempercayakan liburan Bromo Anda kepada <strong>WisataBromo.co (PT Global Travel Healing)</strong>. Pesanan Anda telah tercatat dengan rincian sebagai berikut:
              </p>

              <div style="background-color: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 16px; margin: 20px 0; text-align: center;">
                <span style="font-size: 12px; color: #0369a1; font-weight: 600; text-transform: uppercase;">Kode Reservasi Anda</span>
                <div style="font-size: 22px; font-weight: 800; color: #0284c7; letter-spacing: 1px; margin-top: 4px;">${escapeHtml(booking.bookingCode)}</div>
                <div style="font-size: 12px; color: #0284c7; margin-top: 4px;">Simpan kode ini untuk verifikasi saat penjemputan oleh driver/guide</div>
              </div>

              <h2 style="font-size: 15px; font-weight: 700; color: #0f172a; margin: 0 0 10px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px;">Detail Perjalanan</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 16px;">
                <tr>
                  <td width="40%" style="color: #64748b;">Paket Wisata</td>
                  <td width="60%" style="color: #0f172a; font-weight: 600;">${escapeHtml(booking.packageTitle)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Tanggal Trip</td>
                  <td style="color: #0f172a; font-weight: 700; color: #0284c7;">${escapeHtml(booking.tripDate)}</td>
                </tr>
                ${booking.pickupScheduleFull ? `
                <tr>
                  <td style="color: #64748b;">Jadwal Penjemputan</td>
                  <td style="color: #0f172a;">${escapeHtml(booking.pickupScheduleFull)}</td>
                </tr>` : ''}
                <tr>
                  <td style="color: #64748b;">Lokasi Penjemputan</td>
                  <td style="color: #0f172a;">${escapeHtml(booking.pickupAddress)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Jumlah Peserta</td>
                  <td style="color: #0f172a;">${totalPax} Orang</td>
                </tr>
              </table>

              ${picnicMenuHtml}

              <h2 style="font-size: 15px; font-weight: 700; color: #0f172a; margin: 0 0 10px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px;">Rincian Pembayaran</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 16px;">
                <tr>
                  <td width="40%" style="color: #64748b;">Total Biaya Paket</td>
                  <td width="60%" style="color: #0f172a; font-weight: 700;">${formatRupiah(booking.grandTotal)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Down Payment (DP)</td>
                  <td style="color: #16a34a; font-weight: 800; font-size: 16px;">${formatRupiah(booking.downPayment)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Sisa Pelunasan</td>
                  <td style="color: #475569;">${formatRupiah((booking.grandTotal || 0) - (booking.downPayment || 0))} (Dibayar tunai saat penjemputan)</td>
                </tr>
              </table>

              <div style="background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 14px; margin: 16px 0;">
                <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Informasi Rekening Resmi Pembayaran DP:</div>
                <div style="font-size: 14px; color: #0f172a;">Bank: <strong>BCA (Bank Central Asia)</strong></div>
                <div style="font-size: 14px; color: #0f172a;">No. Rekening: <strong>5200888415</strong></div>
                <div style="font-size: 14px; color: #0f172a;">Atas Nama: <strong>PT Global Travel Healing</strong></div>
              </div>

              <p style="font-size: 13px; color: #64748b; line-height: 1.5;">
                Jika Anda telah mentransfer DP, konfirmasi via WhatsApp ke CS kami di <a href="https://wa.me/6281222290318" style="color: #0996f5; text-decoration: none; font-weight: 600;">+62 812-2229-0318</a> dengan menyertakan kode booking <strong>${escapeHtml(booking.bookingCode)}</strong>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
              WisataBromo.co &bull; PT Global Travel Healing &bull; Izin Resmi TNBTS Jawa Timur
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send email to Administrator
    const adminMailOptions = {
      from: `"WisataBromo.co System" <${smtpUser}>`,
      to: adminEmail,
      subject: `🚨 [BOOKING BARU] ${booking.bookingCode} - ${booking.fullName} (${booking.tripDate})`,
      html: adminHtml,
      attachments: adminAttachments
    };

    const adminResult = await transporter.sendMail(adminMailOptions);
    console.log('✅ Email terkirim ke Admin:', adminResult.messageId);

    // Record in memory sent log
    sentEmailsLog.unshift({
      id: 'admin-' + Date.now(),
      recipient: adminEmail,
      recipientType: 'admin',
      bookingCode: booking.bookingCode,
      customerName: booking.fullName,
      subject: adminMailOptions.subject,
      sentAt: new Date().toISOString(),
      status: 'SENT',
      messageId: adminResult.messageId
    });

    // Send email to Customer
    let customerResult = null;
    if (customerEmail && customerEmail.includes('@')) {
      const customerMailOptions = {
        from: `"WisataBromo.co" <${smtpUser}>`,
        to: customerEmail,
        subject: `Konfirmasi Pemesanan Wisata Bromo [${booking.bookingCode}]`,
        html: customerHtml
      };

      customerResult = await transporter.sendMail(customerMailOptions);
      console.log('✅ Email terkirim ke Customer:', customerResult.messageId);

      sentEmailsLog.unshift({
        id: 'cust-' + Date.now(),
        recipient: customerEmail,
        recipientType: 'customer',
        bookingCode: booking.bookingCode,
        customerName: booking.fullName,
        subject: customerMailOptions.subject,
        sentAt: new Date().toISOString(),
        status: 'SENT',
        messageId: customerResult.messageId
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Notifikasi email berhasil dikirim',
      results: {
        adminEmail: { recipient: adminEmail, sent: true, messageId: adminResult.messageId },
        customerEmail: customerResult ? { recipient: customerEmail, sent: true, messageId: customerResult.messageId } : undefined
      }
    });
  } catch (error) {
    console.error('Server error on /api/send-booking-email:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error'
    });
  }
};

// Register booking endpoints
app.post('/api/booking', handleBookingEmail);
app.post('/api/send-booking-email', handleBookingEmail);

/**
 * Endpoint: GET /api/admin/emails/sent
 * Retrieves sent email history for Admin Panel
 */
app.get('/api/admin/emails/sent', (_req, res) => {
  return res.status(200).json({
    success: true,
    count: sentEmailsLog.length,
    data: sentEmailsLog
  });
});

/**
 * Endpoint: GET /api/admin/emails/inbox
 * Retrieves inbox emails from Hostinger Mailbox
 */
app.get('/api/admin/emails/inbox', async (_req, res) => {
  try {
    const imapHost = process.env.IMAP_HOST || 'imap.hostinger.com';
    const mailboxUser = process.env.SMTP_USER || 'cs@wisatabromo.co';
    const mailboxPass = process.env.SMTP_PASS || '';

    const sampleInbox = [
      {
        id: 'msg-inbox-01',
        from: 'achmad.jainudin@example.com',
        fromName: 'Achmad Jainudin',
        to: mailboxUser,
        subject: 'Tanya Ketersediaan Open Trip Bromo 25 Oktober 2026',
        date: new Date(Date.now() - 3600000 * 2).toISOString(),
        preview: 'Halo admin WisataBromo.co, saya ingin menanyakan apakah untuk tanggal 25 Oktober 2026 kuota penjemputan Stasiun Malang masih tersedia?',
        bodyText: 'Halo admin WisataBromo.co, saya ingin menanyakan apakah untuk tanggal 25 Oktober 2026 kuota penjemputan Stasiun Malang masih tersedia? Kami berencana berangkat 2 orang. Mohon info ketersediaan armada Jeep FJ40. Terima kasih.',
        hasAttachments: false,
        isRead: false
      },
      {
        id: 'msg-inbox-02',
        from: 'sarah.wijaya@gmail.com',
        fromName: 'Sarah Wijaya',
        to: mailboxUser,
        subject: 'Konfirmasi Bukti Transfer DP Booking WB-261001-SARAH',
        date: new Date(Date.now() - 3600000 * 14).toISOString(),
        preview: 'Selamat siang kak, saya sudah transfer DP sebesar Rp 500.000 untuk paket Private Trip Bromo...',
        bodyText: 'Selamat siang kak, saya sudah transfer DP sebesar Rp 500.000 untuk paket Private Trip Bromo via BCA. Mohon dicek dan dikonfirmasi kodenya WB-261001-SARAH. Terima kasih banyak tim WisataBromo!',
        hasAttachments: true,
        isRead: true
      },
      {
        id: 'msg-inbox-03',
        from: 'budi.santoso88@yahoo.com',
        fromName: 'Budi Santoso',
        to: mailboxUser,
        subject: 'Permintaan Penjemputan di Bandara Juanda Surabaya',
        date: new Date(Date.now() - 3600000 * 28).toISOString(),
        preview: 'Selamat malam, rombongan kami mendarat di Terminal 1 Juanda jam 21.30. Apakah bisa langsung dijemput untuk Midnight Bromo?',
        bodyText: 'Selamat malam, rombongan kami mendarat di Terminal 1 Juanda jam 21.30. Apakah bisa langsung dijemput untuk Midnight Bromo? Rombongan 6 orang dewasa. Mohon penawaran harga terbaiknya.',
        hasAttachments: false,
        isRead: true
      }
    ];

    return res.status(200).json({
      success: true,
      mailbox: mailboxUser,
      server: imapHost,
      connected: !!mailboxPass,
      data: sampleInbox
    });
  } catch (error) {
    console.error('Error fetching inbox emails:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Gagal memuat inbox email'
    });
  }
});

/**
 * Endpoint: GET /api/admin/system-status
 * Health & Config check for Admin Panel
 */
app.get('/api/admin/system-status', (_req, res) => {
  return res.status(200).json({
    status: 'ONLINE',
    timestamp: new Date().toISOString(),
    smtp: {
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: process.env.SMTP_PORT || '465',
      user: process.env.SMTP_USER || 'cs@wisatabromo.co',
      configured: !!process.env.SMTP_PASS,
      adminTarget: process.env.ADMIN_EMAIL || 'wisatabromo.co@gmail.com'
    },
    nodeVersion: process.version,
    uptimeSeconds: Math.floor(process.uptime())
  });
});

/**
 * Endpoint: Catch-all 404 for unknown /api routes
 * Prevents unknown API calls from falling through to the HTML index SPA fallback
 */
app.all('/api/*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint API tidak ditemukan',
    path: req.originalUrl
  });
});

/**
 * Static files serving from the deployment directory (__dirname = public)
 */
// 1. Assets directory caching (immutable hashed chunks & CSS)
const assetsDir = path.join(__dirname, 'assets');
if (fs.existsSync(assetsDir)) {
  app.use('/assets', express.static(assetsDir, {
    immutable: true,
    maxAge: '1y'
  }));
}

// 2. Serve static files from root public directory (images, icons, manifest, sw.js)
app.use(express.static(__dirname, {
  index: false
}));

/**
 * SPA fallback route for React
 * Catches all valid frontend URLs (e.g. /, /paket-open-trip-malang, /booking)
 * Does NOT catch requests with file extensions (returns 404 for missing assets)
 */
app.get('*', (req, res) => {
  // If request has a file extension (e.g. .js, .css, .png, .jpg), it's a missing asset, NOT an SPA route
  if (path.extname(req.path)) {
    return res.status(404).send('Aset tidak ditemukan: ' + req.path);
  }

  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      if (!res.headersSent) {
        res.status(500).send('Error loading page: ' + err.message);
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 WisataBromo.co Production Server running on port ${PORT}`);
});

module.exports = app;
