import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Helper function to format IDR
const formatRupiah = (num: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(num || 0);
};

// Helper function to sanitize text
const escapeHtml = (unsafe: string | number | undefined | null) => {
  if (unsafe === undefined || unsafe === null) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * Endpoint: POST /api/send-booking-email
 * Sends email notifications to Admin (wisatabromo.co@gmail.com) and Customer
 */
app.post('/api/send-booking-email', async (req: Request, res: Response) => {
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

    // If SMTP_PASS is missing (e.g. initial dev environment), simulate and return clear message
    if (!smtpPass) {
      console.warn('⚠️ [SMTP Hostinger] SMTP_PASS belum diset di process.env. Simulasi pengiriman email berhasil.');
      return res.status(200).json({
        success: true,
        mocked: true,
        message: 'SMTP credentials belum diisi di environment. Email simulasi berhasil dicatat.',
        recipients: {
          admin: adminEmail,
          customer: booking.email
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
                  <td><a href="mailto:${escapeHtml(booking.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(booking.email)}</a></td>
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
        replyTo: booking.email,
        subject: `[BOOKING BARU] ${booking.bookingCode} - ${booking.fullName} - ${booking.packageTitle}`,
        html: adminHtml
      }),
      transporter.sendMail({
        from: `"WisataBromo.co" <${smtpUser}>`,
        to: booking.email,
        replyTo: `"Customer Service WisataBromo.co" <${smtpUser}>`,
        subject: `Konfirmasi Reservasi Wisata Bromo - ${booking.bookingCode} (PT Global Travel Healing)`,
        html: customerHtml
      })
    ]);

    const adminSuccess = adminResult.status === 'fulfilled';
    const customerSuccess = customerResult.status === 'fulfilled';

    if (!adminSuccess) {
      console.error('Gagal kirim email admin:', (adminResult as PromiseRejectedResult).reason);
    }
    if (!customerSuccess) {
      console.error('Gagal kirim email customer:', (customerResult as PromiseRejectedResult).reason);
    }

    return res.status(200).json({
      success: true,
      results: {
        adminEmail: {
          recipient: adminEmail,
          sent: adminSuccess,
          error: !adminSuccess ? String((adminResult as PromiseRejectedResult).reason?.message || 'Error') : undefined
        },
        customerEmail: {
          recipient: booking.email,
          sent: customerSuccess,
          error: !customerSuccess ? String((customerResult as PromiseRejectedResult).reason?.message || 'Error') : undefined
        }
      }
    });
  } catch (error: any) {
    console.error('Server error on /api/send-booking-email:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error'
    });
  }
});

// Production static assets & Vite Dev server middleware
const isProduction = process.env.NODE_ENV === 'production';
const distPath = path.resolve(process.cwd(), 'dist');

async function startServer() {
  if (!isProduction) {
    try {
      const { createServer: createViteServer } = await import('vite');
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
        root: process.cwd(),
      });
      app.use(vite.middlewares);
    } catch (err) {
      console.warn('Vite dev server middleware initialization warning, falling back to static files:', err);
      if (fs.existsSync(distPath)) {
        app.use(express.static(distPath));
        app.get('*', (_req, res) => {
          res.sendFile(path.join(distPath, 'index.html'));
        });
      }
    }
  } else {
    // Serve static files in production (dist folder)
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server WisataBromo.co running on http://localhost:${PORT} (${isProduction ? 'production' : 'development'})`);
  });
}

startServer();
