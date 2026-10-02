import jsPDF from 'jspdf';
import { TourPackage, BookingFormState } from '../types';
import { calculateBromoTripSchedule, checkIsHighSeason } from './highSeasonCalendar';

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

  const schedule = calculateBromoTripSchedule(form.travelDate);
  checkIsHighSeason(form.travelDate);

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

  // 1. Title: INVOICE RESMI (Tanpa E-Tiket)
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('INVOICE RESMI', 195, 17, { align: 'right' });

  // Invoice Meta Box
  doc.setTextColor(17, 19, 24);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');

  let y = 37;
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
  y += 26;

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

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(30, 41, 59);
  doc.text(`Paket: ${pkg.title}`, 114, y + 14, { maxWidth: 76 });
  doc.text(`Jemput: ${schedule.departureFormatted || form.travelDate} (23.00 WIB)`, 114, y + 21, { maxWidth: 76 });
  doc.text(`Sunrise: ${schedule.sunriseFormatted || '-'} (05.00 WIB)`, 114, y + 28, { maxWidth: 76 });
  doc.text(`Titik Start: ${form.startCity === 'batu' ? 'Kota Batu' : pkg.startLocationName}`, 114, y + 35);
  doc.text(`Peserta: ${form.paxCount} Orang ${form.isHighSeason ? '(High Season)' : ''}`, 114, y + 41);

  // Table Rincian Biaya
  y += 51;
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
  const droneAmount = form.includeDrone ? 1500000 : 0;
  const wnaAmount = form.wnaCount * 255000;
  const baseTripSubtotal = totalPrice - wnaAmount - droneAmount;

  const rows = [
    {
      item: `${pkg.title} (${form.includeDocumentation ? 'Include Doc Foto/Video' : 'Tanpa Doc'})`,
      qty: `${form.paxCount} Pax`,
      subtotal: formatRupiah(baseTripSubtotal),
    },
  ];

  if (droneAmount > 0) {
    rows.push({
      item: 'Add-on Dokumentasi Drone (Video Udara 4K Cinematic + Pilot TNBTS)',
      qty: '1 Grup',
      subtotal: formatRupiah(droneAmount),
    });
  }

  if (form.wnaCount > 0) {
    rows.push({
      item: 'Surcharge Tiket Masuk TNBTS Wisatawan Asing (WNA / Foreigner)',
      qty: `${form.wnaCount} Pax`,
      subtotal: formatRupiah(wnaAmount),
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

  // 2. Grand Total Box (Total, Uang Muka DP, Sisa Pembayaran)
  const remainingPrice = Math.max(0, totalPrice - dpPrice);

  doc.setFillColor(234, 242, 255);
  doc.roundedRect(15, y, 180, 25, 2, 2, 'F');

  // Row 1: TOTAL TAGIHAN
  doc.setTextColor(16, 42, 86);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('TOTAL TAGIHAN:', 20, y + 6);
  doc.text(formatRupiah(totalPrice), 190, y + 6, { align: 'right' });

  // Divider 1
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.2);
  doc.line(20, y + 8.5, 190, y + 8.5);

  // Row 2: UANG MUKA (DP)
  doc.setTextColor(5, 150, 105); // emerald-600
  doc.text('UANG MUKA (DP):', 20, y + 14);
  doc.text(formatRupiah(dpPrice), 190, y + 14, { align: 'right' });

  // Divider 2
  doc.line(20, y + 16.8, 190, y + 16.8);

  // Row 3: SISA PEMBAYARAN
  doc.setTextColor(180, 83, 9); // amber-700
  doc.text('SISA PEMBAYARAN:', 20, y + 22);
  doc.text(formatRupiah(remainingPrice), 190, y + 22, { align: 'right' });

  // Payment Accounts Box
  y += 29;
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(15, y, 180, 22, 2, 2, 'F');
  doc.setTextColor(146, 64, 14);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('REKENING PEMBAYARAN RESMI WISATABROMO.CO:', 20, y + 5.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(120, 53, 15);
  doc.text('• BANK BCA: 5200888415 a/n PT Global Travel Healing', 20, y + 11.5);
  doc.text('• E-WALLET DANA & OVO: 08113212318 a/n Achmad J', 20, y + 17);

  // 4. Syarat & Ketentuan Penting
  y += 27;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('SYARAT & KETENTUAN PENTING:', 15, y);
  y += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);

  const terms = [
    '1. DP dibayar saat pendaftaran.',
    '2. Apabila terjadi pembatalan dari peserta maka DP dinyatakan hangus, Apabila terjadi pembatalan dari wisatabromo.co karena cuaca atau bencana alam atau kondisi lain dalam bentuk apapun maka DP di kembalikan 100%.',
    '3. Ketentuan Sisa Pembayaran: Untuk keberangkatan Start Surabaya wajib dilunasi maksimal H-1 sebelum keberangkatan. Untuk Start Malang dan Basecamp Jeep (Tosari, Sukapura, Gubugklakah) pelunasan dapat dilakukan pada hari H saat penjemputan (khusus di luar periode High Season), sedangkan pada periode High Season wajib lunas maksimal H-2 sebelum keberangkatan.',
    '4. Invoice ini adalah bukti pemesanan resmi yang dikonfirmasi oleh sistem WisataBromo.co.',
    '5. Mohon persiapkan pakaian hangat (jaket tebal, sarung tangan, syal, masker) karena suhu fajar Bromo mencapai 2°C – 10°C.',
  ];

  terms.forEach((term) => {
    const lines = doc.splitTextToSize(term, 180);
    doc.text(lines, 15, y);
    y += lines.length * 3.6 + 1;
  });

  // 3. Customer Support Signature Bar (Placed below terms with separation line to prevent overlap)
  y += 3;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.2);
  doc.line(15, y, 195, y);
  y += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(16, 42, 86);
  doc.setFontSize(8.5);
  doc.text('WisataBromo.co Customer Support', 195, y, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(7.5);
  doc.text('WhatsApp: +62 812 2229 0318 · Email: cs@wisatabromo.co', 195, y + 4.2, { align: 'right' });

  // Save the PDF
  doc.save(`Invoice_${bookingCode}_WisataBromo.pdf`);
};
