import { SupportedLanguage } from './LanguageContext';

export interface LocalizedBookingModalContent {
  modalTitle: string;
  modalSub: string;
  step1Title: string;
  step1Sub: string;
  step2Title: string;
  step2Sub: string;
  selectPkg: string;
  selectDate: string;
  selectPax: string;
  selectMotor: string;
  calSeason: string;
  selectCity: string;
  startMalang: string;
  startBatu: string;
  regRate: string;
  peakRate: string;
  baseRateLabel: string;
  unitMotor: string;
  unitPax: string;
  foreignLabel: string;
  foreignCharge: string;
  docChoice: string;
  noDoc: string;
  plusDoc: string;
  droneLabel: string;
  dronePrice: string;
  droneDesc: string;
  noDrone: string;
  plusDrone: string;
  nameLabel: string;
  namePlaceholder: string;
  waLabel: string;
  emailLabel: string;
  emailSub: string;
  pickupLabel: string;
  pickupPlaceholder: string;
  notesLabel: string;
  notesPlaceholder: string;
  invoiceSummary: string;
  pkgLabel: string;
  pickupPointLabel: string;
  totalEstimated: string;
  dpEstimated: string;
  dpNote: string;
  proceedBtn: string;
  submittingBtn: string;
  guaranteed: string;
  autoInvoice: string;
  legalAccount: string;
  proofTitle: string;
  proofAttached: string;
  proofRequired: string;
  submitProof: string;
  downloadPdf: string;
  backToGuestForm: string;
  successTitle: string;
  successSub: string;
  copyCode: string;
  confirmWa: string;
  newBooking: string;
  finishClose: string;
  paymentScreenTitle: string;
  paymentScreenSub: string;
  dpNominalLabel: string;
  requiredDpBadge: string;
  officialAccountsTitle: string;
  guestSummaryTitle: string;
  editData: string;
  uploadInstructions: string;
  uploadBoxPrompt: string;
  uploadBoxFormats: string;
  changeFile: string;
  removeFile: string;
  submittingProof: string;
}

export const BOOKING_MODAL_TRANSLATIONS: Record<SupportedLanguage, LocalizedBookingModalContent> = {
  id: {
    modalTitle: 'Formulir Reservasi Resmi Trip Bromo',
    modalSub: 'PT Global Travel Healing · Rekening Resmi & Konfirmasi Instan',
    step1Title: '1. Isi Data Booking',
    step1Sub: 'Paket, Pax & Data Tamu',
    step2Title: '2. Laman Rekening & Bukti TF',
    step2Sub: 'Transfer DP 30% & Upload',
    selectPkg: '1. Pilih Paket Wisata Bromo',
    selectDate: '2. Tanggal Perjalanan / Sunrise',
    selectPax: '3. Jumlah Peserta (Pax)',
    selectMotor: '3. Jumlah Unit Motor',
    calSeason: 'Kalender Season',
    selectCity: 'Pilih Titik Start:',
    startMalang: 'Start Kota Malang',
    startBatu: 'Start Kota Wisata Batu',
    regRate: 'Tarif Reguler',
    peakRate: '🔥 Peak Season (18 Des - 5 Jan)',
    baseRateLabel: 'Tarif Dasar',
    unitMotor: 'Motor',
    unitPax: 'Orang',
    foreignLabel: 'Wisatawan Asing (WNA)',
    foreignCharge: '+Rp 255.000 / orang',
    docChoice: 'Pilihan Dokumentasi DSLR / Mirrorless:',
    noDoc: 'Tanpa Dokumentasi',
    plusDoc: 'Plus Dokumentasi DSLR/Mirrorless ✨',
    droneLabel: 'Add-on Dokumentasi Drone (Video Udara 4K):',
    dronePrice: '+Rp 1.500.000 / trip',
    droneDesc: 'Pengambilan video sinematik udara resolusi 4K dengan pilot drone berlisensi resmi TNBTS. Menghasilkan footage spektakuler lautan awan, kawah aktif, dan tebing kaldera Bromo.',
    noDrone: 'Tanpa Drone',
    plusDrone: 'Include Drone (+1.5 Juta) 🚁',
    nameLabel: 'Nama Lengkap Pemesan',
    namePlaceholder: 'Contoh: Budi Santoso',
    waLabel: 'Nomor WhatsApp Aktif',
    emailLabel: 'Alamat Email (Wajib untuk E-Tiket & Invoice PDF)',
    emailSub: 'Kirim Invoice PDF Otomatis',
    pickupLabel: 'Alamat / Lokasi Penjemputan Anda',
    pickupPlaceholder: 'Contoh: Hotel Santika Malang / Stasiun Gubeng / Bandara Juanda / Basecamp',
    notesLabel: 'Catatan Khusus (Opsional):',
    notesPlaceholder: 'Contoh: Minta driver ramah / bawa bayi / alergi tertentu',
    invoiceSummary: 'Ringkasan Rincian Tagihan',
    pkgLabel: 'Paket:',
    pickupPointLabel: 'Start / Penjemputan:',
    totalEstimated: 'Total Estimasi Biaya:',
    dpEstimated: 'Estimasi DP Booking (30%):',
    dpNote: '*Pelunasan 70% sisa biaya dibayarkan saat hari H bertemu driver/guide.',
    proceedBtn: 'Lanjutkan Reservasi & Pembayaran DP (30%)',
    submittingBtn: 'Menyiapkan Tagihan & Laman Rekening...',
    guaranteed: 'Garansi Berangkat 100% Resmi',
    autoInvoice: 'Invoice Resmi Otomatis Terbit',
    legalAccount: 'Rekening Legal PT Global Travel Healing',
    proofTitle: 'Unggah Bukti Transfer DP',
    proofAttached: 'Terlampir ✓',
    proofRequired: 'Wajib Upload',
    submitProof: 'Kirim Bukti Transfer & Selesaikan Reservasi',
    downloadPdf: 'Unduh E-Invoice PDF (Surat Reservasi Resmi)',
    backToGuestForm: 'Kembali ke Formulir Data Tamu',
    successTitle: 'Bukti Pembayaran DP Berhasil Terkirim!',
    successSub: 'Reservasi Anda telah tersimpan di sistem resmi. Invoice dan konfirmasi resmi telah dikirimkan ke email Anda dan tim kami siap menyambut Anda.',
    copyCode: 'Salin Kode',
    confirmWa: 'Konfirmasi via WhatsApp Admin',
    newBooking: 'Buat Reservasi Baru',
    finishClose: 'Selesai & Tutup',
    paymentScreenTitle: 'Laman Pembayaran Rekening & Bukti Transfer DP',
    paymentScreenSub: 'Silakan lakukan transfer DP (30%) ke rekening resmi berikut untuk mengunci jadwal armada & Jeep Anda.',
    dpNominalLabel: 'Nominal Transfer DP (30%):',
    requiredDpBadge: 'Wajib DP',
    officialAccountsTitle: 'Rekening Resmi WisataBromo.co:',
    guestSummaryTitle: 'Ringkasan Data Pemesan:',
    editData: 'Ubah Data',
    uploadInstructions: 'Unggah foto struk ATM, screenshot m-Banking, atau receipt e-wallet tanda transfer DP 30% Anda:',
    uploadBoxPrompt: 'Klik di Sini untuk Unggah Foto Bukti Transfer DP',
    uploadBoxFormats: 'Mendukung JPG, PNG, WEBP, atau PDF (Maks. 5MB)',
    changeFile: 'Ganti File',
    removeFile: 'Hapus File',
    submittingProof: 'Mengirim Bukti & Menyimpan Reservasi...'
  },
  en: {
    modalTitle: 'Official Mount Bromo Reservation Form',
    modalSub: 'PT Global Travel Healing · Authorized Accounts & Instant Confirmation',
    step1Title: '1. Booking Details',
    step1Sub: 'Package, Guests & Pickup Info',
    step2Title: '2. Deposit Payment & Receipt',
    step2Sub: '30% Deposit & Receipt Upload',
    selectPkg: '1. Select Mount Bromo Tour Package',
    selectDate: '2. Travel / Sunrise Date',
    selectPax: '3. Number of Participants (Guests)',
    selectMotor: '3. Number of Dirt Bikes',
    calSeason: 'Season Calendar',
    selectCity: 'Select Departure Point:',
    startMalang: 'From Malang City',
    startBatu: 'From Batu Tourism City',
    regRate: 'Regular Rate',
    peakRate: '🔥 Peak Season (Dec 18 - Jan 5)',
    baseRateLabel: 'Base Fares',
    unitMotor: 'Bikes',
    unitPax: 'Guests',
    foreignLabel: 'International Visitors (Non-Indonesian)',
    foreignCharge: '+IDR 255,000 / person (TNBTS Official Surcharge)',
    docChoice: 'DSLR / Mirrorless Photography Option:',
    noDoc: 'Without Documentation',
    plusDoc: 'Include DSLR/Mirrorless Photo & Video ✨',
    droneLabel: 'Aerial Drone 4K Documentation Add-on:',
    dronePrice: '+IDR 1,500,000 / trip',
    droneDesc: 'Cinematic 4K aerial footage piloted by official TNBTS licensed drone operators. Captures breathtaking footage of the sea of clouds, smoking crater, and caldera cliffs.',
    noDrone: 'Without Drone',
    plusDrone: 'Include 4K Drone (+1.5M) 🚁',
    nameLabel: 'Full Name (Lead Guest)',
    namePlaceholder: 'e.g., John Smith',
    waLabel: 'Active WhatsApp Number (with Country Code)',
    emailLabel: 'Email Address (Required for E-Ticket & PDF Invoice)',
    emailSub: 'Instant Automated PDF Invoice',
    pickupLabel: 'Hotel Name / Detailed Pickup Address',
    pickupPlaceholder: 'e.g., Hotel Santika Malang / Gubeng Station / Juanda Airport / Basecamp',
    notesLabel: 'Special Requests / Dietary Needs (Optional):',
    notesPlaceholder: 'e.g., English-speaking driver, traveling with infants, food preferences',
    invoiceSummary: 'Booking & Invoice Summary',
    pkgLabel: 'Selected Package:',
    pickupPointLabel: 'Departure / Pickup Area:',
    totalEstimated: 'Estimated Total Cost:',
    dpEstimated: 'Estimated Booking Deposit (30%):',
    dpNote: '*The remaining 70% balance is settled on the day of the trip with your driver/guide.',
    proceedBtn: 'Proceed to Reservation & 30% Deposit',
    submittingBtn: 'Generating Official Invoice & Bank Details...',
    guaranteed: '100% Guaranteed Official Departure',
    autoInvoice: 'Official PDF Invoice Issued Instantly',
    legalAccount: 'Official Bank Account of PT Global Travel Healing',
    proofTitle: 'Upload 30% Deposit Transfer Receipt',
    proofAttached: 'Attached ✓',
    proofRequired: 'Upload Required',
    submitProof: 'Submit Receipt & Confirm Reservation',
    downloadPdf: 'Download Official E-Invoice PDF',
    backToGuestForm: 'Back to Guest Form',
    successTitle: 'Deposit Payment Receipt Sent Successfully!',
    successSub: 'Your reservation has been recorded in our official booking system. An official confirmation and invoice have been sent to your email, and our team is ready to welcome you.',
    copyCode: 'Copy Code',
    confirmWa: 'Confirm via WhatsApp Support',
    newBooking: 'Make New Reservation',
    finishClose: 'Finish & Close',
    paymentScreenTitle: 'Official Bank Accounts & Deposit Payment',
    paymentScreenSub: 'Please make your 30% deposit transfer to the official company account below to secure your vehicle & Jeep schedule.',
    dpNominalLabel: 'Required Deposit Transfer (30%):',
    requiredDpBadge: 'Deposit Required',
    officialAccountsTitle: 'Official WisataBromo.co Bank Accounts:',
    guestSummaryTitle: 'Lead Guest Information:',
    editData: 'Edit Details',
    uploadInstructions: 'Upload an ATM receipt photo, mobile banking screenshot, or e-wallet transfer confirmation for your 30% deposit:',
    uploadBoxPrompt: 'Click here to upload your deposit receipt photo or PDF',
    uploadBoxFormats: 'Supports JPG, PNG, WEBP, or PDF (Max 5MB)',
    changeFile: 'Change File',
    removeFile: 'Remove File',
    submittingProof: 'Submitting Receipt & Finalizing Booking...'
  },
  zh: {
    modalTitle: '布罗莫火山官方在线预订与费用测算',
    modalSub: 'PT Global Travel Healing · 官方正规企业对公账户与极速确认',
    step1Title: '1. 填写预订信息',
    step1Sub: '套餐选择、人数与接送地址',
    step2Title: '2. 定金支付与凭证上传',
    step2Sub: '支付30%定金并提交凭证',
    selectPkg: '1. 选择布罗莫旅游套餐',
    selectDate: '2. 出行日期 / 观赏日出时间',
    selectPax: '3. 出行人数（旅客人数）',
    selectMotor: '3. 租赁越野摩托台数',
    calSeason: '旺季日历',
    selectCity: '选择出发城市：',
    startMalang: '玛琅市区出发',
    startBatu: '巴图旅游城市出发',
    regRate: '常规价格',
    peakRate: '🔥 旺季高峰（12月18日 - 1月5日）',
    baseRateLabel: '基础价格',
    unitMotor: '台',
    unitPax: '人',
    foreignLabel: '国际游客 / 外籍护照 (WNA)',
    foreignCharge: '+255,000 印尼盾 / 人（国家公园官方附加门票）',
    docChoice: '单反 / 微单相机专业跟拍摄影：',
    noDoc: '不包含跟拍摄影',
    plusDoc: '包含单反/微单摄影与精彩短视频 ✨',
    droneLabel: '4K无人机航拍升级服务：',
    dronePrice: '+1,500,000 印尼盾 / 行程',
    droneDesc: '由持有TNBTS国家公园合规飞行许可的专业飞手操控，呈现壮丽云海、活火山口及火山口悬崖的4K高空电影级大片。',
    noDrone: '不加航拍',
    plusDrone: '加配4K无人机航拍 (+150万) 🚁',
    nameLabel: '预订人全名（中文 / 英文）',
    namePlaceholder: '例如：张伟 / David Zhang',
    waLabel: '常用WhatsApp号码（含国家区号）',
    emailLabel: '电子邮箱地址（用于接收官方电子票及PDF预约单）',
    emailSub: '自动发送正规PDF确认函',
    pickupLabel: '酒店名称 / 上门接送详细地址',
    pickupPlaceholder: '例如：Hotel Santika Malang / 泗水Gubeng火车站 / 朱安达机场 / 酒店前台',
    notesLabel: '特殊要求备注（选填）：',
    notesPlaceholder: '例如：安排热情司机、同行有婴幼儿、饮食禁忌等',
    invoiceSummary: '费用明细与订单核算摘要',
    pkgLabel: '选定套餐：',
    pickupPointLabel: '出发接送区域：',
    totalEstimated: '套餐预估总费用：',
    dpEstimated: '预订定金（30%）：',
    dpNote: '*剩余 70% 尾款于行程当日与带队向导/司机现场结清即可。',
    proceedBtn: '确认预订并前往支付定金 (30%)',
    submittingBtn: '正在生成官方账单与对公转账信息...',
    guaranteed: '100%保证发车保障',
    autoInvoice: '自动签发官方正规电子预约函',
    legalAccount: 'PT Global Travel Healing 官方对公合规账户',
    proofTitle: '上传30%定金银行转账 / 支付凭证',
    proofAttached: '已附加 ✓',
    proofRequired: '必须上传',
    submitProof: '提交凭证并完成官方预订',
    downloadPdf: '下载官方正规电子确认单 (PDF)',
    backToGuestForm: '返回修改旅客信息',
    successTitle: '定金支付凭证已成功提交！',
    successSub: '您的预约已被正式录入系统。官方行程确认单与电子发票已发送至您的电子邮箱，我们的专属司导团队期待您的到来。',
    copyCode: '复制预约码',
    confirmWa: '通过WhatsApp联系官方客服',
    newBooking: '新建预订',
    finishClose: '完成并关闭',
    paymentScreenTitle: '官方银行账户与30%定金转账页面',
    paymentScreenSub: '请向以下官方对公账户支付 30% 定金，以立即锁定您的专属出行日期、向导与吉普车席位。',
    dpNominalLabel: '定金汇款金额（30%）：',
    requiredDpBadge: '定金必填',
    officialAccountsTitle: 'WisataBromo.co 官方对公合规账户：',
    guestSummaryTitle: '预订旅客信息概览：',
    editData: '修改信息',
    uploadInstructions: '请上传ATM回执单照片、手机银行电子转账截图或电子钱包支付凭证：',
    uploadBoxPrompt: '点击此处上传定金转账截图或PDF文件',
    uploadBoxFormats: '支持 JPG、PNG、WEBP 或 PDF 格式（最大 5MB）',
    changeFile: '更换文件',
    removeFile: '删除文件',
    submittingProof: '正在提交凭证并确认预订...'
  }
};
