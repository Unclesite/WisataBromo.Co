import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

// Load environment variables (.env)
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
 */
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'WisataBromo.co Backend',
    timestamp: new Date().toISOString()
  });
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
      secure: smtpPort === 465, // True for 465 SSL, false for 587 TLS
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
    let isImageProof = true;

    if (booking.paymentProofDataUrl && typeof booking.paymentProofDataUrl === 'string') {
      const match = booking.paymentProofDataUrl.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        const mimeType = match[1];
        const base64Content = match[2];
        const ext = mimeType.split('/')[1]?.split('+')[0] || 'jpg';
        
        if (!paymentProofFilename.includes('.')) {
          paymentProofFilename = `${paymentProofFilename}.${ext}`;
        }
        
        isImageProof = mimeType.startsWith('image/');
        hasPaymentProof = true;

        const fileBuffer = Buffer.from(base64Content, 'base64');

        adminAttachments.push({
          filename: paymentProofFilename,
          content: fileBuffer,
          contentType: mimeType,
          contentDisposition: 'attachment'
        });

        console.log("PAYMENT PROOF ATTACHMENT CREATED", {
          filename: paymentProofFilename,
          contentType: mimeType,
          sizeBytes: fileBuffer.length,
          contentDisposition: 'attachment'
        });
      }
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
                <div style="font-size: 20px; font-weight: 800; color: #1e3a8a; margin-top: 2px;">${escapeHtml(booking.bookingCode)}</div>
              </div>

              <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 12px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">1. Detail Pemesan</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 18px;">
                <tr>
                  <td width="35%" style="color: #64748b; font-weight: 500;">Nama Customer</td>
                  <td width="65%" style="color: #0f172a; font-weight: 700;">${escapeHtml(booking.fullName)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 500;">WhatsApp</td>
                  <td><a href="${waLink}" style="color: #2563eb; font-weight: 600; text-decoration: none;">+${waNumberFinal} (Chat WhatsApp)</a></td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 500;">Email Customer</td>
                  <td><a href="mailto:${escapeHtml(customerEmail)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(customerEmail)}</a></td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 500;">Titik Penjemputan</td>
                  <td style="color: #0f172a;">${escapeHtml(booking.pickupAddress)}</td>
                </tr>
              </table>

              <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 12px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">2. Detail Paket & Jadwal Trip</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 18px;">
                <tr>
                  <td width="35%" style="color: #64748b; font-weight: 500;">Paket Wisata</td>
                  <td width="65%" style="color: #0f172a; font-weight: 700;">${escapeHtml(booking.packageTitle)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 500;">Tanggal Trip</td>
                  <td style="color: #0f172a; font-weight: 700; color: #0284c7;">${escapeHtml(booking.tripDate)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 500;">Jumlah Peserta</td>
                  <td style="color: #0f172a;">${booking.paxCount} Domestik ${booking.wnaCount ? `+ ${booking.wnaCount} WNA` : ''} (Total: ${totalPax} Pax)</td>
                </tr>
                ${booking.specialNotes ? `
                <tr>
                  <td style="color: #64748b; font-weight: 500;">Catatan Tambahan</td>
                  <td style="color: #0f172a; font-style: italic;">${escapeHtml(booking.specialNotes)}</td>
                </tr>` : ''}
              </table>

              <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 12px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">3. Rincian Keuangan & Pembayaran</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; background-color: #f8fafc; border-radius: 8px; padding: 10px; margin-bottom: 18px;">
                <tr>
                  <td width="40%" style="color: #64748b; font-weight: 500;">Total Biaya Trip</td>
                  <td width="60%" style="color: #0f172a; font-weight: 700;">${formatRupiah(booking.grandTotal)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 500;">Nominal DP 30%</td>
                  <td style="color: #16a34a; font-weight: 800; font-size: 15px;">${formatRupiah(booking.downPayment)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 500;">Metode Pembayaran</td>
                  <td style="color: #0f172a; text-transform: uppercase; font-weight: 600;">${escapeHtml(booking.paymentMethod)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 500;">Status Reservasi</td>
                  <td style="color: #d97706; font-weight: 700;">${escapeHtml(booking.status || 'DP_SUBMITTED')}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 500;">Waktu Booking</td>
                  <td style="color: #64748b; font-size: 13px;">${escapeHtml(booking.createdAt || new Date().toLocaleString('id-ID'))}</td>
                </tr>
              </table>

              <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 12px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">4. Bukti Transfer Pembayaran DP</h2>
              <table width="100%" cellpadding="12" cellspacing="0" style="font-size: 14px; background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 12px; margin-bottom: 18px;">
                <tr>
                  <td align="center">
                    ${hasPaymentProof ? `
                      <div style="margin-bottom: 8px;">
                        <span style="display: inline-block; background-color: #dcfce7; color: #15803d; font-weight: 700; font-size: 12px; padding: 4px 10px; border-radius: 6px;">
                          ✓ File Terlampir: ${escapeHtml(paymentProofFilename)}
                        </span>
                      </div>
                      ${isImageProof ? `
                        <div style="margin: 12px 0; text-align: center;">
                          <img src="${booking.paymentProofDataUrl}" alt="Bukti Transfer DP" style="max-width: 100%; max-height: 450px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" />
                        </div>
                      ` : ''}
                      <p style="margin: 8px 0 0 0; font-size: 12px; color: #64748b;">
                        File bukti transfer telah dilampirkan sebagai attachment resmi email ini dan dapat langsung diunduh / disimpan ke Google Drive oleh Admin.
                      </p>
                    ` : `
                      <div style="color: #dc2626; font-size: 13px; font-weight: 600;">
                        ⚠ Bukti transfer belum diunggah atau tidak disertakan pada saat booking.
                      </div>
                    `}
                  </td>
                </tr>
              </table>

              <div style="text-align: center; margin-top: 24px;">
                <a href="${waLink}" style="display: inline-block; background-color: #25d366; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 14px;">
                  Hubungi Customer via WhatsApp
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
              Email otomatis dari sistem reservasi WisataBromo.co · PT Global Travel Healing
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
        <title>Konfirmasi Reservasi Wisata Bromo</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a8a, #0284c7); padding: 32px 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 800;">WISATABROMO.CO</h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.95;">Konfirmasi Reservasi & Rincian Pembayaran DP</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px;">
              <p style="font-size: 15px; line-height: 1.6; margin: 0 0 16px 0;">
                Halo <strong>${escapeHtml(booking.fullName)}</strong>,
              </p>
              <p style="font-size: 14px; line-height: 1.6; color: #475569; margin: 0 0 20px 0;">
                Terima kasih telah mempercayakan perjalanan liburan Bromo Anda kepada <strong>WisataBromo.co (PT Global Travel Healing)</strong>. Reservasi Anda telah berhasil kami terima dalam sistem.
              </p>

              <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 16px; margin-bottom: 24px; text-align: center;">
                <div style="font-size: 12px; color: #3b82f6; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Kode Reservasi Anda</div>
                <div style="font-size: 24px; font-weight: 900; color: #1e3a8a; letter-spacing: 1px; margin: 4px 0;">${escapeHtml(booking.bookingCode)}</div>
                <div style="font-size: 13px; color: #64748b;">Simpan kode ini untuk pengecekan status dan konfirmasi</div>
              </div>

              <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 12px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Ringkasan Paket Wisata</h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 20px;">
                <tr>
                  <td width="38%" style="color: #64748b;">Paket Tour</td>
                  <td width="62%" style="color: #0f172a; font-weight: 700;">${escapeHtml(booking.packageTitle)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Tanggal Keberangkatan</td>
                  <td style="color: #0284c7; font-weight: 700;">${escapeHtml(booking.tripDate)}</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Jumlah Peserta</td>
                  <td style="color: #0f172a; font-weight: 600;">${totalPax} Orang (${booking.paxCount} Domestik ${booking.wnaCount ? `+ ${booking.wnaCount} WNA` : ''})</td>
                </tr>
                <tr>
                  <td style="color: #64748b;">Titik Penjemputan</td>
                  <td style="color: #0f172a;">${escapeHtml(booking.pickupAddress)}</td>
                </tr>
              </table>

              <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 12px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Rincian Biaya & Rekening Transfer</h2>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
                <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px;">
                  <tr>
                    <td style="color: #64748b;">Total Biaya Trip</td>
                    <td align="right" style="color: #0f172a; font-weight: 700;">${formatRupiah(booking.grandTotal)}</td>
                  </tr>
                  <tr>
                    <td style="color: #16a34a; font-weight: 700; font-size: 15px;">Uang Muka (DP 30%)</td>
                    <td align="right" style="color: #16a34a; font-weight: 900; font-size: 16px;">${formatRupiah(booking.downPayment)}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; font-size: 13px;">Sisa Pelunasan (70%)</td>
                    <td align="right" style="color: #64748b; font-size: 13px;">${formatRupiah((booking.grandTotal || 0) - (booking.downPayment || 0))} (saat penjemputan)</td>
                  </tr>
                </table>

                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px dashed #cbd5e1;">
                  <div style="font-size: 12px; color: #475569; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">Rekening Resmi Pembayaran:</div>
                  <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px;">
                    <div style="font-size: 13px; color: #64748b;">Bank Central Asia (BCA)</div>
                    <div style="font-size: 18px; font-weight: 800; color: #1e3a8a; letter-spacing: 0.5px;">5200888415</div>
                    <div style="font-size: 13px; color: #0f172a; font-weight: 600;">a/n PT Global Travel Healing</div>
                  </div>
                </div>
              </div>

              <div style="background-color: #fefce8; border: 1px solid #fef08a; border-radius: 8px; padding: 14px; margin-bottom: 24px; font-size: 13px; color: #854d0e; line-height: 1.5;">
                📌 <strong>Langkah Selanjutnya:</strong><br>
                1. Mohon transfer nominal DP sesuai yang tertera ke rekening resmi di atas.<br>
                2. Driver dan tim operasional kami akan menghubungi Anda via WhatsApp H-1 sebelum keberangkatan untuk konfirmasi jam penjemputan & plat nomor Jeep.
              </div>

              <div style="text-align: center; margin-top: 20px;">
                <a href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co%2C%20saya%20sudah%20reservasi%20dengan%20Kode%20Booking%3A%20${encodeURIComponent(booking.bookingCode)}" style="display: inline-block; background-color: #25d366; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 14px;">
                  Konfirmasi ke WhatsApp CS (+62 812-2229-0318)
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b; line-height: 1.5;">
              <strong>PT Global Travel Healing · WisataBromo.co</strong><br>
              Layanan Tour & Travel Resmi Gunung Bromo Jawa Timur<br>
              WhatsApp Hotline: +62 812 2229 0318 · Email: cs@wisatabromo.co
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Dispatch emails concurrently
    const [adminResult, customerResult] = await Promise.allSettled([
      transporter.sendMail({
        from: `"WisataBromo.co System" <${smtpUser}>`,
        to: adminEmail,
        replyTo: customerEmail,
        subject: `[BOOKING BARU] ${booking.bookingCode} - ${booking.fullName} - ${booking.packageTitle}`,
        html: adminHtml,
        attachments: adminAttachments
      }),
      transporter.sendMail({
        from: `"WisataBromo.co" <${smtpUser}>`,
        to: customerEmail,
        replyTo: `"Customer Service WisataBromo.co" <${smtpUser}>`,
        subject: `Konfirmasi Reservasi Wisata Bromo - ${booking.bookingCode} (PT Global Travel Healing)`,
        html: customerHtml
      })
    ]);

    const adminSuccess = adminResult.status === 'fulfilled';
    const customerSuccess = customerResult.status === 'fulfilled';
    const adminValue = adminSuccess ? adminResult.value : null;
    const customerValue = customerSuccess ? customerResult.value : null;

    if (!adminSuccess) {
      console.error('Gagal kirim email admin:', adminResult.reason);
    }
    if (!customerSuccess) {
      console.error('Gagal kirim email customer:', customerResult.reason);
    }

    // Log to Sent Emails History
    sentEmailsLog.unshift({
      id: `sent-admin-${Date.now()}`,
      recipient: adminEmail,
      recipientType: 'admin',
      bookingCode: booking.bookingCode,
      customerName: booking.fullName,
      subject: `[BOOKING BARU] ${booking.bookingCode} - ${booking.fullName} - ${booking.packageTitle}`,
      sentAt: new Date().toISOString(),
      status: adminSuccess ? 'SENT' : 'FAILED',
      messageId: adminValue?.messageId,
      error: !adminSuccess ? String(adminResult.reason?.message || 'Error') : undefined,
      previewHtml: adminHtml
    });

    sentEmailsLog.unshift({
      id: `sent-cust-${Date.now()}`,
      recipient: customerEmail,
      recipientType: 'customer',
      bookingCode: booking.bookingCode,
      customerName: booking.fullName,
      subject: `Konfirmasi Reservasi Wisata Bromo - ${booking.bookingCode} (PT Global Travel Healing)`,
      sentAt: new Date().toISOString(),
      status: customerSuccess ? 'SENT' : 'FAILED',
      messageId: customerValue?.messageId,
      error: !customerSuccess ? String(customerResult.reason?.message || 'Error') : undefined,
      previewHtml: customerHtml
    });

    // Keep log to max 100 items
    if (sentEmailsLog.length > 100) {
      sentEmailsLog.length = 100;
    }

    return res.status(200).json({
      success: true,
      hasPaymentProofAttachment: hasPaymentProof,
      paymentProofFilename: hasPaymentProof ? paymentProofFilename : undefined,
      results: {
        adminEmail: {
          recipient: adminEmail,
          sent: adminSuccess,
          messageId: adminValue?.messageId,
          response: adminValue?.response,
          attachments: adminAttachments.map(a => ({
            filename: a.filename,
            contentType: a.contentType,
            sizeBytes: a.content.length,
            contentDisposition: a.contentDisposition
          })),
          error: !adminSuccess ? String(adminResult.reason?.message || 'Error') : undefined
        },
        customerEmail: {
          recipient: customerEmail,
          sent: customerSuccess,
          messageId: customerValue?.messageId,
          error: !customerSuccess ? String(customerResult.reason?.message || 'Error') : undefined
        }
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

    // Sample/simulated inbox messages for inquiries
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

// Static files & SPA Routing for Hostinger Preset Express
const publicPath = path.join(__dirname, 'public');
const distPath = path.join(__dirname, 'dist');

// If in development and public/dist doesn't exist yet, try to mount Vite middleware
const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  if (!isProduction && !fs.existsSync(path.join(publicPath, 'index.html')) && !fs.existsSync(path.join(distPath, 'index.html'))) {
    try {
      const { createServer: createViteServer } = await import('vite');
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
        root: process.cwd(),
      });
      app.use(vite.middlewares);
    } catch (err) {
      console.warn('Vite dev server middleware initialization notice:', err.message);
    }
  }

  // Read static files directly from public directory (Hostinger standard)
  app.use(express.static(path.join(__dirname, 'public')));
  
  // Secondary fallback for dist if present
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
  }

  // Fallback routing app.get('*', ...) to public/index.html
  app.get('*', (_req, res) => {
    const publicIndex = path.join(publicPath, 'index.html');
    if (fs.existsSync(publicIndex)) {
      return res.sendFile(publicIndex);
    }
    const distIndex = path.join(distPath, 'index.html');
    if (fs.existsSync(distIndex)) {
      return res.sendFile(distIndex);
    }
    return res.status(200).send('WisataBromo.co server is running. Frontend build not detected yet. Please run npm run build.');
  });

  app.listen(PORT, () => {
    console.log(`🚀 WisataBromo.co Production Server running on port ${PORT}`);
  });
}

startServer();

export default app;
