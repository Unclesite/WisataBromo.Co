import jsPDF from 'jspdf';
import { PicnicPackage, PicnicLocation, PicnicAddon, BirthdayDetails, SelectedMenuItemQuantity } from '../types/picnic';
import { formatRupiah } from './picnicPricingEngine';

export interface PicnicInvoiceData {
  bookingCode: string;
  tripDate: string;
  fullName: string;
  email: string;
  whatsappNumber: string;
  packageItem: PicnicPackage;
  paxCount: number;
  location: PicnicLocation;
  selectedMenus: Record<string, SelectedMenuItemQuantity[]>;
  selectedAddons: PicnicAddon[];
  birthdayDetails?: BirthdayDetails;
  packageSubtotal: number;
  surcharge: number;
  locationFee: number;
  addonsSubtotal: number;
  grandTotal: number;
  downPayment: number;
  paymentMethod?: string;
  status?: string;
}

export const generatePicnicInvoicePDF = (data: PicnicInvoiceData) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const today = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedTripDate = data.tripDate ? new Date(data.tripDate).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }) : '-';

  // 1. Top Brand Banner (Dark Navy #071A2B)
  doc.setFillColor(7, 26, 43);
  doc.rect(0, 0, 210, 26, 'F');

  // Accent line (#0996F5)
  doc.setFillColor(9, 150, 245);
  doc.rect(0, 26, 210, 2.5, 'F');

  // Brand Header
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(17);
  doc.text('WISATABROMO.CO', 15, 13);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('PT GLOBAL TRAVEL HEALING · Operator Resmi TNBTS Jawa Timur', 15, 19);

  // Title: INVOICE PICNIC RESMI
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('INVOICE PICNIC EXPERIENCE', 195, 16, { align: 'right' });

  // 2. Invoice Meta Box
  let y = 33;
  doc.setFillColor(234, 242, 255); // #EAF6FF
  doc.roundedRect(15, y, 180, 16, 2, 2, 'F');

  doc.setTextColor(17, 19, 24);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text(`KODE RESERVASI: ${data.bookingCode}`, 20, y + 6);
  doc.setFont('helvetica', 'normal');
  doc.text(`Tanggal Terbit: ${today}`, 20, y + 12);

  const statusText = data.status === 'DP_SUBMITTED' 
    ? 'STATUS: BUKTI DP TERKIRIM (TERVERIFIKASI)' 
    : 'STATUS: MENUNGGU PEMBAYARAN DP';
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(data.status === 'DP_SUBMITTED' ? 5 : 180, data.status === 'DP_SUBMITTED' ? 150 : 83, data.status === 'DP_SUBMITTED' ? 105 : 9);
  doc.text(statusText, 190, y + 6, { align: 'right' });
  
  doc.setTextColor(17, 19, 24);
  doc.setFont('helvetica', 'normal');
  doc.text('Hotline CS: +62 812 2229 0318', 190, y + 12, { align: 'right' });

  // 3. Two-Column Information Box (Customer & Setup)
  y += 20;

  // Box Left: Data Pemesan
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(15, y, 87, 36, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(16, 42, 86);
  doc.text('DATA PEMESAN (GUEST):', 20, y + 6);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(30, 41, 59);
  doc.text(`Nama: ${data.fullName || '-'}`, 20, y + 13);
  doc.text(`Email: ${data.email || '-'}`, 20, y + 19);
  doc.text(`WhatsApp: ${data.whatsappNumber || '-'}`, 20, y + 25);
  doc.text(`Tanggal Piknik: ${formattedTripDate}`, 20, y + 31, { maxWidth: 78 });

  // Box Right: Setup & Lokasi
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(108, y, 87, 36, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(16, 42, 86);
  doc.text('DETAIL SETUP & LOKASI:', 113, y + 6);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(30, 41, 59);
  doc.text(`Paket: ${data.packageItem.name}`, 113, y + 13, { maxWidth: 78 });
  doc.text(`Jumlah Tamu: ${data.paxCount} Pax (${formatRupiah(data.packageItem.pricePerPax)}/pax)`, 113, y + 19);
  doc.text(`Lokasi Gelaran: ${data.location.name}`, 113, y + 25, { maxWidth: 78 });
  doc.text(`Butler Table Service: Termasuk (Standar VIP)`, 113, y + 31);

  // 4. Dedicated Box for Detailed Food & Drink Menu (Daftar Makanan & Minuman)
  y += 40;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(16, 42, 86);
  doc.text('DAFTAR MENU MAKANAN & MINUMAN TERPILIH:', 15, y);

  y += 3;
  // Build list of category summaries
  const menuSections: Array<{ category: string; items: string }> = [];
  
  // 1) Selected choices
  Object.entries(data.selectedMenus || {}).forEach(([cat, items]) => {
    const itemSummaries = items.map(i => `${i.quantity}x ${i.name}`);
    if (itemSummaries.length > 0) {
      let categoryName = cat.toUpperCase();
      if (cat === 'snack' || cat === 'snack-1' || cat === 'snack-2') categoryName = 'PILIHAN SNACK';
      if (cat === 'makanan') categoryName = 'PILIHAN MAKANAN UTAMA';
      if (cat === 'dessert') categoryName = 'PILIHAN DESSERT';
      if (cat === 'minuman') categoryName = 'PILIHAN MINUMAN';
      menuSections.push({
        category: categoryName,
        items: itemSummaries.join(', ')
      });
    }
  });

  // 2) Included fixed sections (for BBQ, Suki, Ngemie, Ultimate)
  if (data.packageItem.includedSections && data.packageItem.includedSections.length > 0) {
    data.packageItem.includedSections.forEach(sec => {
      menuSections.push({
        category: sec.sectionTitle.toUpperCase(),
        items: sec.items.join(', ')
      });
    });
  }

  // 3) Free items (Teh, Mineral, dsb)
  const freeItemsList = data.packageItem.freeItems || ['Teh Hangat', 'Air Mineral'];
  if (freeItemsList.length > 0) {
    menuSections.push({
      category: 'BONUS FASILITAS & MINUMAN',
      items: freeItemsList.join(', ') + ' + Butler Table Service Standar VIP'
    });
  }

  // Render Menu Details Box
  const menuBoxStartY = y;
  let menuContentHeight = 6;
  doc.setFontSize(7.5);
  
  // Calculate height needed
  menuSections.forEach(sec => {
    const textLines = doc.splitTextToSize(`• ${sec.category}: ${sec.items}`, 172);
    menuContentHeight += textLines.length * 3.6 + 1.2;
  });

  doc.setFillColor(241, 245, 249); // #F1F5F9
  doc.roundedRect(15, menuBoxStartY, 180, Math.max(16, menuContentHeight), 2, 2, 'F');
  
  let menuCurrentY = menuBoxStartY + 4.5;
  menuSections.forEach(sec => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(16, 42, 86);
    doc.text(`• ${sec.category}: `, 19, menuCurrentY);
    
    const catWidth = doc.getTextWidth(`• ${sec.category}: `);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 41, 59);
    
    const remainingWidth = 172 - catWidth;
    const itemLines = doc.splitTextToSize(sec.items, remainingWidth);
    doc.text(itemLines[0] || '', 19 + catWidth, menuCurrentY);
    
    if (itemLines.length > 1) {
      for (let i = 1; i < itemLines.length; i++) {
        menuCurrentY += 3.6;
        doc.text(itemLines[i], 19, menuCurrentY);
      }
    }
    menuCurrentY += 4.2;
  });

  y = menuBoxStartY + Math.max(16, menuContentHeight) + 4;

  // 5. Table Rincian Biaya (Financial Breakdown)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(16, 42, 86);
  doc.text('RINCIAN PERHITUNGAN BIAYA:', 15, y);

  y += 3;
  doc.setFillColor(16, 42, 86);
  doc.rect(15, y, 180, 6, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text('DESKRIPSI ITEM & FASILITAS', 20, y + 4.2);
  doc.text('QTY', 130, y + 4.2, { align: 'center' });
  doc.text('SUBTOTAL (IDR)', 190, y + 4.2, { align: 'right' });

  const rows: Array<{ item: string; qty: string; subtotal: string }> = [
    {
      item: `${data.packageItem.name} (${formatRupiah(data.packageItem.pricePerPax)} / pax)`,
      qty: `${data.paxCount} Pax`,
      subtotal: formatRupiah(data.packageSubtotal),
    },
  ];

  if (data.surcharge > 0) {
    rows.push({
      item: `Penyesuaian Biaya Minimum Operasional (${data.paxCount} Pax)`,
      qty: '1 Paket',
      subtotal: formatRupiah(data.surcharge),
    });
  }

  if (data.locationFee > 0) {
    rows.push({
      item: `Transportasi & Logistik Property Lokasi (${data.location.name})`,
      qty: '1 Grup',
      subtotal: formatRupiah(data.locationFee),
    });
  }

  // Add-ons
  (data.selectedAddons || []).forEach(addon => {
    let addonTitle = addon.name;
    if (addon.category === 'birthday' && data.birthdayDetails) {
      const bDetails = [];
      if (data.birthdayDetails.balloonColor) bDetails.push(`Balon: ${data.birthdayDetails.balloonColor}`);
      if (data.birthdayDetails.letterText) bDetails.push(`Huruf: ${data.birthdayDetails.letterText}`);
      if (data.birthdayDetails.cakeText) bDetails.push(`Kue: ${data.birthdayDetails.cakeText}`);
      if (bDetails.length > 0) {
        addonTitle += ` (${bDetails.join(', ')})`;
      }
    }
    rows.push({
      item: addonTitle,
      qty: '1 Set',
      subtotal: formatRupiah(addon.price),
    });
  });

  y += 6;
  rows.forEach((row, index) => {
    doc.setFillColor(index % 2 === 0 ? 255 : 248, index % 2 === 0 ? 255 : 250, index % 2 === 0 ? 255 : 252);
    doc.rect(15, y, 180, 6.8, 'F');
    doc.setTextColor(30, 41, 59);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.text(row.item, 20, y + 4.5, { maxWidth: 100 });
    doc.text(row.qty, 130, y + 4.5, { align: 'center' });
    doc.setFont('helvetica', 'bold');
    doc.text(row.subtotal, 190, y + 4.5, { align: 'right' });
    y += 6.8;
  });

  // 6. Grand Total, DP, & Sisa Box
  const remainingPayment = Math.max(0, data.grandTotal - data.downPayment);

  y += 1;
  doc.setFillColor(234, 242, 255);
  doc.roundedRect(15, y, 180, 20, 2, 2, 'F');

  // Row 1: TOTAL BIAYA PIKNIK
  doc.setTextColor(16, 42, 86);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('TOTAL BIAYA PIKNIK:', 20, y + 5);
  doc.text(formatRupiah(data.grandTotal), 190, y + 5, { align: 'right' });

  // Divider 1
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.2);
  doc.line(20, y + 7, 190, y + 7);

  // Row 2: UANG MUKA (DP 30%)
  doc.setTextColor(5, 150, 105);
  doc.text('UANG MUKA (DP 30%):', 20, y + 11.5);
  doc.text(formatRupiah(data.downPayment), 190, y + 11.5, { align: 'right' });

  // Divider 2
  doc.line(20, y + 13.5, 190, y + 13.5);

  // Row 3: SISA PEMBAYARAN (70%)
  doc.setTextColor(180, 83, 9);
  doc.text('SISA PELUNASAN (70%):', 20, y + 17.5);
  doc.text(formatRupiah(remainingPayment), 190, y + 17.5, { align: 'right' });

  // 7. Payment Accounts Box
  y += 23;
  doc.setFillColor(254, 243, 199); // #FEF3C7
  doc.roundedRect(15, y, 180, 17, 2, 2, 'F');
  doc.setTextColor(146, 64, 14);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('REKENING RESMI PEMBAYARAN PT GLOBAL TRAVEL HEALING:', 20, y + 4.8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(120, 53, 15);
  doc.text('• BANK BCA: 5200888415 a/n PT Global Travel Healing', 20, y + 9.5);
  doc.text('• E-WALLET DANA & OVO: 08113212318 a/n Achmad J', 20, y + 14);

  // 8. Terms & Conditions
  y += 20;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('SYARAT & KETENTUAN PICNIC EXPERIENCE:', 15, y);
  y += 3.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(51, 65, 85);

  const terms = [
    '1. Uang Muka (DP 30%) dibayarkan saat reservasi untuk penguncian jadwal butler, persiapan bahan segar & alokasi property.',
    '2. Pelunasan sisa 70% dapat dilakukan pada hari H saat pelaksanaan piknik atau H-1 sebelum keberangkatan.',
    '3. Seluruh property piknik (meja kayu, karpet, bantal, tenda, perlengkapan makan) adalah fasilitas pinjam pakai yang dijaga oleh butler kami.',
    '4. Jika terjadi cuaca ekstrem/badai kaldera yang membahayakan, lokasi piknik dapat dialihkan ke spot alternatif yang lebih teduh atau jadwal disesuaikan.',
    '5. Invoice ini merupakan dokumen bukti pemesanan sah dari sistem resmi WisataBromo.co · PT Global Travel Healing.',
  ];

  terms.forEach((term) => {
    const lines = doc.splitTextToSize(term, 180);
    doc.text(lines, 15, y);
    y += lines.length * 2.8 + 0.6;
  });

  // Footer & Official Contact
  y += 1.5;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(15, y, 195, y);
  y += 3.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text('Hormat Kami,', 190, y, { align: 'right' });
  y += 3;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(16, 42, 86);
  doc.setFontSize(8);
  doc.text('WisataBromo.co Picnic Specialist', 190, y, { align: 'right' });
  y += 3;

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.setFontSize(6.5);
  doc.text('Hotline WhatsApp: +62 812 2229 0318 · Email: cs@wisatabromo.co', 190, y, { align: 'right' });

  // Save the PDF
  doc.save(`Invoice_Picnic_${data.bookingCode}_WisataBromo.pdf`);
};
