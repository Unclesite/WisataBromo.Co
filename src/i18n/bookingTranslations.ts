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
  // Open trip & routes
  openTripRouteTitle: string;
  saturdayScheduleBadge: string;
  weekdayScheduleBadge: string;
  singlePaxBadge: string;
  min2PaxBadge: string;
  openTripSbySatDesc: string;
  openTripSbyWeekdayPrefix: string;
  openTripSbyWeekdaySuffix: string;
  ratePerPaxLabel: string;
  // Schedule alert
  pickupScheduleHeader: string;
  routeLabel: string;
  pickupStepLabel: string;
  sunriseStepLabel: string;
  atPrefix: string;
  previousNightBadge: string;
  earlyMorningBadge: string;
  morningBadge: string;
  // Season status
  seasonStatusLabel: string;
  peakSeasonBadge: string;
  regularSeasonBadge: string;
  peakSeasonActiveNote: string;
  regularSeasonActiveNote: string;
  // Long jeep
  longJeepRateCategory: string;
  longJeepAutoDetermine: string;
  extraPickupOptionLabel: string;
  longJeepBasecampOption: string;
  longJeepMalangReg: string;
  longJeepMalangHigh: string;
  longJeepBatuReg: string;
  longJeepBatuHigh: string;
  // Validation errors
  errPaxRequired: string;
  errPaxMinSby: string;
  errTravelDateRequired: string;
  errFullNameRequired: string;
  errWhatsappRequired: string;
  errEmailRequired: string;
  errPickupAddressRequired: string;
  errPaymentProofRequired: string;
  // High Season Calendar Modal
  hsCalTitle: string;
  hsCalSub: string;
  hsCalDesc: string;
  hsCalClose: string;
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
    submittingProof: 'Mengirim Bukti & Menyimpan Reservasi...',
    openTripRouteTitle: 'Rute Open Trip Surabaya (Otomatis Terhubung Kalender):',
    saturdayScheduleBadge: '🗓️ Jadwal Hari Sabtu',
    weekdayScheduleBadge: '🗓️ Jadwal Minggu s/d Jumat',
    singlePaxBadge: '1 Orang Bisa Gabung',
    min2PaxBadge: 'Minimal 2 Orang',
    openTripSbySatDesc: 'Berangkat Sabtu pukul 22.00 WIB, nikmati Sunrise Minggu pagi. Dokumentasi Foto Include!',
    openTripSbyWeekdayPrefix: 'Berangkat hari ',
    openTripSbyWeekdaySuffix: ' pukul 23.00 WIB via Malang. Peserta dimulai dari 2 orang. Dokumentasi Foto Include!',
    ratePerPaxLabel: 'Tarif / Pax:',
    pickupScheduleHeader: 'Jadwal Penjemputan & Golden Sunrise Bromo',
    routeLabel: 'Pola:',
    pickupStepLabel: '1. JADWAL JEMPUT (PICKUP):',
    sunriseStepLabel: '2. GOLDEN SUNRISE BROMO:',
    atPrefix: 'Pukul ',
    previousNightBadge: '(Malam Sebelumnya)',
    earlyMorningBadge: '(Dini Hari Tanggal Sunrise)',
    morningBadge: '(Pagi Hari)',
    seasonStatusLabel: 'Status Musim:',
    peakSeasonBadge: 'Peak / High Season',
    regularSeasonBadge: 'Reguler / Normal',
    peakSeasonActiveNote: 'Tarif Peak Season otomatis aktif',
    regularSeasonActiveNote: 'Tarif reguler berlaku otomatis',
    longJeepRateCategory: 'Kategori Tarif Hari Long Jeep:',
    longJeepAutoDetermine: 'Ditentukan otomatis berdasarkan tanggal keberangkatan',
    extraPickupOptionLabel: 'Opsi Antar-Jemput Tambahan:',
    longJeepBasecampOption: 'Start Basecamp Gubugklakah (Tanpa Tambahan Jemput)',
    longJeepMalangReg: 'Jemput Kota Malang (+Rp 300.000 / mobil max 6 pax)',
    longJeepMalangHigh: 'Jemput Kota Malang (+Rp 400.000 High Season / mobil max 6 pax)',
    longJeepBatuReg: 'Jemput Kota Batu (+Rp 400.000 / mobil max 6 pax)',
    longJeepBatuHigh: 'Jemput Kota Batu (+Rp 500.000 High Season / mobil max 6 pax)',
    errPaxRequired: 'Jumlah peserta wajib ditentukan minimal 1 menggunakan tombol (+).',
    errPaxMinSby: 'Open Trip Surabaya via Malang (keberangkatan Minggu s/d Jumat) minimal 2 orang.',
    errTravelDateRequired: 'Tanggal keberangkatan trip wajib dipilih.',
    errFullNameRequired: 'Nama lengkap pemesan wajib diisi (minimal 2 karakter).',
    errWhatsappRequired: 'Nomor WhatsApp aktif wajib diisi untuk konfirmasi booking resmi.',
    errEmailRequired: 'Alamat email valid wajib diisi untuk pengiriman e-tiket TNBTS & invoice PDF.',
    errPickupAddressRequired: 'Alamat / lokasi penjemputan wajib diisi (contoh: Nama Hotel, Stasiun, Bandara, atau Basecamp).',
    errPaymentProofRequired: 'Silakan pilih dan unggah foto/screenshot bukti transfer pembayaran DP terlebih dahulu.',
    hsCalTitle: 'Kalender High / Peak Season TNBTS',
    hsCalSub: 'Pemetaan Resmi Jadwal Musim Libur Wisata Bromo',
    hsCalDesc: 'Jika tanggal keberangkatan yang Anda pilih berada dalam salah satu rentang tanggal di bawah ini, kalkulator pemesanan akan secara otomatis menerapkan tarif High Season resmi:',
    hsCalClose: 'Tutup Kalender'
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
    submittingProof: 'Submitting Receipt & Finalizing Booking...',
    openTripRouteTitle: 'Surabaya Open Trip Route (Auto-Connected to Calendar):',
    saturdayScheduleBadge: '🗓️ Saturday Departure Schedule',
    weekdayScheduleBadge: '🗓️ Sun - Fri Departure Schedule',
    singlePaxBadge: 'Solo Travelers Welcome',
    min2PaxBadge: 'Min. 2 Guests Required',
    openTripSbySatDesc: 'Depart Saturday at 10:00 PM WIB, enjoy Sunday morning Sunrise. Professional photography included!',
    openTripSbyWeekdayPrefix: 'Depart on ',
    openTripSbyWeekdaySuffix: ' at 11:00 PM WIB via Malang. Min. 2 guests. Professional photography included!',
    ratePerPaxLabel: 'Rate / Pax:',
    pickupScheduleHeader: 'Pickup Schedule & Bromo Golden Sunrise',
    routeLabel: 'Route Pattern:',
    pickupStepLabel: '1. PICKUP SCHEDULE:',
    sunriseStepLabel: '2. GOLDEN SUNRISE BROMO:',
    atPrefix: 'At ',
    previousNightBadge: '(Previous Night)',
    earlyMorningBadge: '(Early Morning of Sunrise Date)',
    morningBadge: '(Morning)',
    seasonStatusLabel: 'Season Status:',
    peakSeasonBadge: 'Peak / High Season',
    regularSeasonBadge: 'Regular / Normal',
    peakSeasonActiveNote: 'Official Peak Season rate applies automatically',
    regularSeasonActiveNote: 'Regular rate applies automatically',
    longJeepRateCategory: 'Long Jeep Day Rate Category:',
    longJeepAutoDetermine: 'Automatically determined based on departure date',
    extraPickupOptionLabel: 'Additional Pickup Options:',
    longJeepBasecampOption: 'Start at Gubugklakah Basecamp (No Pickup Add-on)',
    longJeepMalangReg: 'Malang City Pickup (+IDR 300,000 / car max 6 pax)',
    longJeepMalangHigh: 'Malang City Pickup (+IDR 400,000 High Season / car max 6 pax)',
    longJeepBatuReg: 'Batu City Pickup (+IDR 400,000 / car max 6 pax)',
    longJeepBatuHigh: 'Batu City Pickup (+IDR 500,000 High Season / car max 6 pax)',
    errPaxRequired: 'Please set number of participants (min. 1 guest) using (+) button.',
    errPaxMinSby: 'Surabaya Open Trip via Malang (Sun - Fri departures) requires min. 2 guests.',
    errTravelDateRequired: 'Please select a departure date.',
    errFullNameRequired: 'Please enter lead guest full name (min. 2 characters).',
    errWhatsappRequired: 'Valid active WhatsApp number is required for official booking confirmation.',
    errEmailRequired: 'Valid email address is required to receive TNBTS e-tickets & PDF invoice.',
    errPickupAddressRequired: 'Pickup location is required (e.g., Hotel name, Train Station, Airport, or Basecamp).',
    errPaymentProofRequired: 'Please select and upload a photo/screenshot of your deposit transfer receipt first.',
    hsCalTitle: 'TNBTS High / Peak Season Calendar',
    hsCalSub: 'Official Mount Bromo Peak Holiday Schedule Mapping',
    hsCalDesc: 'If your selected departure date falls within any of the periods below, the booking calculator will automatically apply official High Season rates:',
    hsCalClose: 'Close Calendar'
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
    submittingProof: '正在提交凭证并确认预订...',
    openTripRouteTitle: '泗水拼团路线（自动关联日历）：',
    saturdayScheduleBadge: '🗓️ 周六行程安排',
    weekdayScheduleBadge: '🗓️ 周日至周五行程',
    singlePaxBadge: '1人即可报名参团',
    min2PaxBadge: '最少2人起订',
    openTripSbySatDesc: '周六晚10:00出发，次日（周日）清晨观赏日出。包含专业摄影服务！',
    openTripSbyWeekdayPrefix: '',
    openTripSbyWeekdaySuffix: '晚11:00经玛琅出发。2人起订，包含专业摄影！',
    ratePerPaxLabel: '每人价格：',
    pickupScheduleHeader: '接送时间表与布罗莫金光日出安排',
    routeLabel: '线路：',
    pickupStepLabel: '1. 上门接送时间 (PICKUP):',
    sunriseStepLabel: '2. 布罗莫日出观赏 (GOLDEN SUNRISE):',
    atPrefix: '时间 ',
    previousNightBadge: '(前一晚)',
    earlyMorningBadge: '(日出当日凌晨)',
    morningBadge: '(早晨)',
    seasonStatusLabel: '季节状态：',
    peakSeasonBadge: '旺季高峰 (Peak Season)',
    regularSeasonBadge: '常规季节 (Regular)',
    peakSeasonActiveNote: '自动适用官方旺季价格',
    regularSeasonActiveNote: '自动适用日常常规价格',
    longJeepRateCategory: '长板吉普车包车价格类别：',
    longJeepAutoDetermine: '根据出行日期自动匹配',
    extraPickupOptionLabel: '额外接送服务选项：',
    longJeepBasecampOption: 'Gubugklakah 基地出发（无需额外接送）',
    longJeepMalangReg: '玛琅市区接送（+300,000印尼盾 / 车 最多6人）',
    longJeepMalangHigh: '玛琅市区接送（+400,000印尼盾 旺季 / 车 最多6人）',
    longJeepBatuReg: '巴图市区接送（+400,000印尼盾 / 车 最多6人）',
    longJeepBatuHigh: '巴图市区接送（+500,000印尼盾 旺季 / 车 最多6人）',
    errPaxRequired: '请使用 (+) 按钮选择出行人数（至少1位）。',
    errPaxMinSby: '泗水拼团（经玛琅，周日至周五出发）最少需要2位旅客。',
    errTravelDateRequired: '请选择出行日期。',
    errFullNameRequired: '请填写预订人姓名（至少2个字符）。',
    errWhatsappRequired: '请填写有效的WhatsApp号码以便接收官方预订确认。',
    errEmailRequired: '请填写有效的电子邮箱，以便接收国家公园电子门票与PDF确认函。',
    errPickupAddressRequired: '请填写上门接送地址（例如：酒店名称、火车站、机场或基地）。',
    errPaymentProofRequired: '请先选择并上传定金支付汇款凭证截图/照片。',
    hsCalTitle: 'TNBTS 国家公园旺季 / 高峰日历',
    hsCalSub: '布罗莫火山官方节假日与旺季时间表',
    hsCalDesc: '若您选择的出行日期落在以下任意时间范围内，预订系统将自动套用官方旺季公布价格：',
    hsCalClose: '关闭日历'
  }
};
