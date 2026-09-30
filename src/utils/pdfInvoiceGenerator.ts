import jsPDF from 'jspdf';
import { TourPackage, BookingFormState } from '../types';

export const generateBookingInvoicePDF = (
  pkg: TourPackage,
  form: BookingFormState,
  bookingCode: string,
  totalPrice: number,
  dpPrice: number
) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const today = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Top Accent Banner
  doc.setFillColor(16, 42, 86); // #102a56
  doc.rect(0, 0, 210, 28, 'F');

  doc.setFillColor(61, 114, 254); // #3d72fe
  doc.rect(0, 28, 210, 3, 'F');

  // Brand Name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('WISATABROMO.CO', 15, 14);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('PT GLOBAL TRAVEL HEALING · Operator Resmi TNBTS Jawa Timur', 15, 21);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('OFFICIAL INVOICE & E-TIKET SLIP', 195, 17, { align: 'right' });

  // Invoice Meta Box
  doc.setTextColor(17, 19, 24);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');

  let y = 40;
  doc.setFillColor(234, 242, 255);
  doc.roundedRect(15, y, 180, 20, 2, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.text(`KODE BOOKING: ${bookingCode}`, 20, y + 7);
  doc.setFont('helvetica', 'normal');
  doc.text(`Tanggal Terbit: ${today}`, 20, y + 14);

  doc.setFont('helvetica', 'bold');
  doc.text('STATUS: MENUNGGU VERIFIKASI PEMBAYARAN', 190, y + 7, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  doc.text('Customer Service: +62 812 2229 0318', 190, y + 14, { align: 'right' });

  // 2 Columns: Data Pemesan & Rincian Trip
  y += 28;

  // Box Left: Data Pemesan
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(15, y, 86, 45, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(16, 42, 86);
  doc.text('DATA PEMESAN (CUSTOMER):', 20, y + 7);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(30, 41, 59);
  doc.text(`Nama: ${form.fullName || '-'}`, 20, y + 15);
  doc.text(`Email: ${form.email || '-'}`, 20, y + 22);
  doc.text(`WhatsApp: ${form.whatsappNumber || '-'}`, 20, y + 29);
  doc.text(`Lokasi Jemput: ${form.pickupAddress || 'Sesuai Meeting Point'}`, 20, y + 36, { maxWidth: 76 });

  // Box Right: Rincian Jadwal & Armada
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(109, y, 86, 45, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(16, 42, 86);
  doc.text('RINCIAN JADWAL TRIP:', 114, y + 7);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(30, 41, 59);
  doc.text(`Paket: ${pkg.title}`, 114, y + 15, { maxWidth: 76 });
  doc.text(`Tanggal Trip: ${form.travelDate}`, 114, y + 26);
  doc.text(`Titik Start: ${form.startCity === 'batu' ? 'Kota Batu' : pkg.startLocationName}`, 114, y + 33);
  doc.text(`Jumlah Peserta: ${form.paxCount} Orang`, 114, y + 40);

  // Table Rincian Biaya
  y += 53;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(16, 42, 86);
  doc.text('RINCIAN PERHITUNGAN BIAYA (INVOICE BREAKDOWN):', 15, y);

  y += 4;
  doc.setFillColor(16, 42, 86);
  doc.rect(15, y, 180, 7, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8.5);
  doc.text('DESKRIPSI FASILITAS', 20, y + 5);
  doc.text('QTY', 130, y + 5, { align: 'center' });
  doc.text('JUMLAH (IDR)', 190, y + 5, { align: 'right' });

  // Rows
  y += 7;
  const rows = [
    {
      item: `${pkg.title} (${form.includeDocumentation ? 'Include Doc Foto/Video' : 'Tanpa Doc'})`,
      qty: `${form.paxCount} Pax`,
      subtotal: formatRupiah(totalPrice - (form.wnaCount * 255000)),
    },
  ];

  if (form.wnaCount > 0) {
    rows.push({
      item: 'Surcharge Tiket Masuk TNBTS Wisatawan Asing (WNA / Foreigner)',
      qty: `${form.wnaCount} Pax`,
      subtotal: formatRupiah(form.wnaCount * 255000),
    });
  }

  rows.forEach((row, index) => {
    doc.setFillColor(index % 2 === 0 ? 255 : 248, index % 2 === 0 ? 255 : 250, index % 2 === 0 ? 255 : 252);
    doc.rect(15, y, 180, 8, 'F');
    doc.setTextColor(30, 41, 59);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(row.item, 20, y + 5.5, { maxWidth: 100 });
    doc.text(row.qty, 130, y + 5.5, { align: 'center' });
    doc.setFont('helvetica', 'bold');
    doc.text(row.subtotal, 190, y + 5.5, { align: 'right' });
    y += 8;
  });

  // Grand Total Box
  doc.setFillColor(234, 242, 255);
  doc.rect(15, y, 180, 18, 'F');
  doc.setTextColor(16, 42, 86);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('TOTAL TAGIHAN:', 20, y + 6);
  doc.text(formatRupiah(totalPrice), 190, y + 6, { align: 'right' });

  doc.setTextColor(5, 150, 105);
  doc.text('UANG MUKA PEMESANAN (DP 30%):', 20, y + 13);
  doc.text(formatRupiah(dpPrice), 190, y + 13, { align: 'right' });

  // Payment Accounts Box
  y += 24;
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(15, y, 180, 24, 2, 2, 'F');
  doc.setTextColor(146, 64, 14);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('REKENING PEMBAYARAN RESMI WISATABROMO.CO:', 20, y + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(120, 53, 15);
  doc.text('• BANK BCA: 5200888415 a/n PT Global Travel Healing', 20, y + 12);
  doc.text('• E-WALLET DANA & OVO: 08113212318 a/n Achmad J', 20, y + 18);

  // Footer & Important Notes
  y += 29;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('SYARAT & KETENTUAN PENTING:', 15, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('1. Invoice ini adalah bukti pemesanan resmi yang dikonfirmasi oleh sistem WisataBromo.co.', 15, y + 4.5);
  doc.text('2. Sisa pelunasan (70%) dibayarkan secara langsung saat hari H bertemu driver/guide di lokasi penjemputan.', 15, y + 8.5);
  doc.text('3. Mohon persiapkan pakaian hangat (jaket tebal, sarung tangan, syal, masker) karena suhu fajar Bromo mencapai 2°C – 10°C.', 15, y + 12.5);

  // Bottom Signature Stamp
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(16, 42, 86);
  doc.setFontSize(8);
  doc.text('WisataBromo.co Customer Support', 190, y + 10, { align: 'right' });
  doc.setFont('helvetica', 'normal');
  doc.text('WhatsApp: +62 812 2229 0318', 190, y + 14, { align: 'right' });

  // Save the PDF
  doc.save(`Invoice_${bookingCode}_WisataBromo.pdf`);
};
