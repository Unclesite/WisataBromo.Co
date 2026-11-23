import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgTrainHero from '../../assets/images/imgtipskereta_wisatabromo.png';

export interface OpenTripPackageOption {
  badge: string;
  title: string;
  schedule: string;
  pickupPoint: string;
  pickupTime: string;
  transport: string;
  priceLines: { label: string; price: string }[];
  highlights: string[];
  accentTheme: 'blue' | 'navy';
}

export interface TrainFareRow {
  origin: string;
  trainName: string;
  scheduleNote: string;
  fare: string;
}

export interface LocalizedTrainArticleContent {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  categoryLabel: string;
  heroImage: string;
  mapEmbedUrl: string;
  mapTitle: string;
  mapCaption: string;
  mapLegend: {
    surabaya: string;
    malang: string;
    bromo: string;
  };
  introduction: string[];
  packagesSectionTitle: string;
  packagesSectionSubtitle: string;
  packageA: OpenTripPackageOption;
  packageB: OpenTripPackageOption;
  costClarification: {
    title: string;
    excludedTitle: string;
    excludedItems: string[];
    includedTitle: string;
    includedItems: string[];
    summaryNote: string;
  };
  trainFaresSectionTitle: string;
  trainFaresSectionSubtitle: string;
  toMalangTitle: string;
  toMalangRows: TrainFareRow[];
  toSurabayaTitle: string;
  toSurabayaRows: TrainFareRow[];
  tableHeaders: {
    route: string;
    train: string;
    schedule: string;
    price: string;
  };
  tipsTitle: string;
  tips: {
    title: string;
    description: string;
  }[];
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_NAIK_KERETA_BROMO: Record<SupportedLanguage, LocalizedTrainArticleContent> = {
  id: {
    id: 'naik-kereta-ke-bromo',
    slug: 'naik-kereta-ke-bromo-open-trip-malang-surabaya',
    title: '🚂 Naik Kereta ke Bromo: Panduan Lengkap Open Trip Malang Surabaya',
    metaDescription:
      'Panduan tegas dan ringkas naik kereta ke Bromo dari Jakarta, Bandung, Semarang, dan Jogja menuju Open Trip Malang (setiap hari) atau Open Trip Surabaya (setiap Sabtu) lengkap dengan acuan harga tiket kereta.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '23 November 2026',
    readTime: '5 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgTrainHero,
    mapEmbedUrl:
      '/assets/aistudio/Peta_Jalur_Kereta_Pulau_Jawa___Surabaya__Malang___Mt._Bromo_9966951f.html',
    mapTitle: '🚂 Peta Interaktif Jalur Kereta Pulau Jawa ke Surabaya, Malang & Gunung Bromo',
    mapCaption:
      'Visualisasi rute kereta api dari Jakarta (JKT), Bandung (BDG), Semarang (SMG), dan Yogyakarta (YK) menuju Surabaya (SUB) serta Malang (MLG), lalu dilanjutkan jalur darat menuju Gunung Bromo.',
    mapLegend: {
      surabaya: 'Jalur Kereta ke Surabaya (SUB)',
      malang: 'Jalur Kereta ke Malang (MLG)',
      bromo: 'Jalur Mobil / Jeep ke Mt. Bromo',
    },
    introduction: [
      '🚂 Naik kereta api adalah cara paling praktis, nyaman, dan efisien untuk menuju Gunung Bromo dari berbagai kota besar di Pulau Jawa. Anda cukup turun di Stasiun Malang atau Stasiun Surabaya Pasar Turi, lalu langsung menyambung dengan layanan 🚐 Open Trip Malang Surabaya tanpa repot menyusun transportasi sendiri.',
      'Berikut rincian jelas dua pilihan paket open trip, acuan 💰 harga tiket kereta dari Jakarta, Jogja, Semarang, dan Bandung, serta ⚠️ tips wajib sebelum keberangkatan.',
    ],
    packagesSectionTitle: '🚐 Dua Pilihan Paket Open Trip Bromo (Malang vs Surabaya)',
    packagesSectionSubtitle:
      'Pilih titik jemput sesuai jadwal kedatangan kereta dan hari keberangkatan Anda. Kedua paket ini memiliki jadwal, transportasi, dan harga yang berbeda.',
    packageA: {
      badge: 'PAKET A • BERANGKAT SETIAP HARI',
      title: '🚐 Open Trip Start Malang',
      schedule: 'Berangkat Setiap Hari',
      pickupPoint: 'Kota Malang (Stasiun Malang / Hotel / Alamat Kota)',
      pickupTime: 'Dijemput pukul 23.00 WIB',
      transport: 'Langsung Jeep 4×4 Bromo dari titik jemput Kota Malang',
      priceLines: [
        { label: 'Tanpa dokumentasi', price: 'Rp275.000/orang' },
        { label: 'Dengan dokumentasi', price: 'Rp325.000/orang' },
      ],
      highlights: [
        'Dari berbagai kota naik kereta langsung turun di Kota Malang.',
        'Dijemput di Kota Malang pukul 23.00 WIB.',
        'Berangkat setiap hari tanpa menunggu akhir pekan.',
        'Tersedia pilihan paket tanpa dokumentasi maupun dengan dokumentasi.',
      ],
      accentTheme: 'blue',
    },
    packageB: {
      badge: 'PAKET B • KHUSUS SETIAP SABTU',
      title: '🚐 Open Trip Start Surabaya',
      schedule: 'Berangkat Setiap Sabtu',
      pickupPoint: 'Stasiun Surabaya Pasar Turi',
      pickupTime: 'Dijemput pukul 22.00 WIB',
      transport: 'Hiace / Elf full AC dari Surabaya menuju area Bromo, lanjut Jeep 4×4',
      priceLines: [
        { label: 'Sudah termasuk dokumentasi', price: 'Rp400.000/orang' },
      ],
      highlights: [
        'Dari berbagai kota naik kereta ke Surabaya dan turun di Stasiun Pasar Turi.',
        'Dijemput langsung di Stasiun Pasar Turi pukul 22.00 WIB.',
        'Transportasi dari Surabaya ke Bromo memakai Hiace/Elf full AC.',
        'Harga Rp400.000/orang sudah termasuk dokumentasi, berangkat setiap Sabtu.',
      ],
      accentTheme: 'navy',
    },
    costClarification: {
      title: '💰 Penegasan Biaya Open Trip',
      excludedTitle: 'TIDAK Termasuk (Biaya di Luar Paket)',
      excludedItems: [
        'Tiket kereta api pulang-pergi dari kota asal ke Malang atau Surabaya.',
        'Pengeluaran pribadi (makan pribadi, sewa kuda, sewa jaket, dan kebutuhan pribadi lainnya).',
      ],
      includedTitle: 'SUDAH Termasuk di Dalam Paket Open Trip',
      includedItems: [
        'Armada Jeep 4×4 resmi kawasan Bromo.',
        'Tiket masuk resmi Taman Nasional Bromo Tengger Semeru (TNBTS).',
        'Transportasi lengkap dari titik jemput (Kota Malang atau Hiace/Elf full AC dari Stasiun Pasar Turi Surabaya).',
      ],
      summaryNote:
        'Harga open trip di luar tiket kereta dan di luar pengeluaran pribadi. Open trip sudah termasuk jeep, tiket masuk TNBTS, dan transportasi dari titik jemput.',
    },
    trainFaresSectionTitle: '🚂 Acuan Harga Kereta dari Kota Besar (Termasuk Bandung)',
    trainFaresSectionSubtitle:
      'Gunakan daftar acuan tarif dan nama kereta api di bawah ini untuk merencanakan jadwal kedatangan menuju Malang atau Surabaya.',
    tableHeaders: {
      route: 'Rute Kota Asal',
      train: 'Pilihan Kereta',
      schedule: 'Info Jadwal',
      price: '💰 Acuan Harga',
    },
    toMalangTitle: '🚂 Kereta Tujuan Malang (Untuk Paket A: Open Trip Start Malang)',
    toMalangRows: [
      {
        origin: 'Jakarta → Malang',
        trainName: 'KA Majapahit',
        scheduleNote: 'Tiba pagi di Stasiun Malang',
        fare: 'Mulai Rp385.000',
      },
      {
        origin: 'Jogja → Malang',
        trainName: 'KA Ekonomi & Eksekutif',
        scheduleNote: 'Tersedia beberapa jadwal harian',
        fare: 'Ekonomi mulai Rp160.000 · Eksekutif mulai Rp315.000',
      },
      {
        origin: 'Semarang → Malang',
        trainName: 'KA Majapahit',
        scheduleNote: 'Rute langsung lintas utara ke Malang',
        fare: 'Mulai Rp226.000–Rp280.000',
      },
      {
        origin: 'Bandung → Malang',
        trainName: 'KA Malabar',
        scheduleNote: 'Berangkat Stasiun Bandung/Kiaracondong 09.30–09.42, tiba Malang 22.24–22.36',
        fare: 'Ekonomi mulai sekitar Rp200.000–Rp250.000',
      },
    ],
    toSurabayaTitle: '🚂 Kereta Tujuan Surabaya (Untuk Paket B: Open Trip Start Surabaya)',
    toSurabayaRows: [
      {
        origin: 'Jakarta → Surabaya Pasar Turi',
        trainName: 'KA Dharmawangsa',
        scheduleNote: 'Langsung turun di Stasiun Pasar Turi',
        fare: 'Mulai Rp320.000',
      },
      {
        origin: 'Jogja → Surabaya',
        trainName: 'KA Jalur Selatan ke Surabaya',
        scheduleNote: 'Jadwal tersedia pagi hingga malam',
        fare: 'Mulai sekitar Rp340.000',
      },
      {
        origin: 'Semarang → Surabaya Pasar Turi',
        trainName: 'KA Airlangga',
        scheduleNote: 'Rute hemat langsung Stasiun Pasar Turi',
        fare: 'Mulai Rp49.000',
      },
      {
        origin: 'Bandung → Surabaya',
        trainName: 'KA Argo Wilis, KA Turangga, KA Mutiara Selatan, KA Harina',
        scheduleNote:
          'KA Argo Wilis (Stasiun Bandung, 07.35), KA Turangga (17.40), KA Mutiara Selatan (20.00), KA Harina (21.35)',
        fare: 'Ekonomi mulai Rp340.000–Rp410.000 · Eksekutif Rp580.000–Rp680.000',
      },
    ],
    tipsTitle: '⚠️ Peringatan & Tips Wajib Sebelum Berangkat',
    tips: [
      {
        title: '⚠️ Tiba Minimal 1–2 Jam Sebelum Jam Jemput',
        description:
          'Pastikan kereta Anda tiba di Malang (sebelum pukul 23.00) atau di Stasiun Pasar Turi Surabaya (sebelum pukul 22.00) minimal 1–2 jam lebih awal. Kereta bisa telat, sehingga jeda waktu aman mencegah Anda tertinggal rombongan open trip.',
      },
      {
        title: '⚠️ Wajib Bawa Jaket Tebal untuk Suhu Dingin Ekstrem',
        description:
          'Open trip berangkat tengah malam dan suhu saat menunggu sunrise di Bromo sangat dingin. Siapkan jaket tebal penahan angin, sarung tangan, kupluk, serta kaus kaki hangat sebelum naik kereta.',
      },
    ],
    conclusion:
      'Memilih 🚂 naik kereta ke Bromo lalu menyambung 🚐 Open Trip Malang Surabaya memberi kepastian jadwal dan biaya yang transparan. Tentukan paket Start Malang (setiap hari, Rp275.000 / Rp325.000) atau Start Surabaya (setiap Sabtu, Rp400.000 sudah termasuk dokumentasi), pesan tiket kereta lebih awal, dan amankan kursi open trip Anda sekarang.',
    ctaButton: 'Booking Open Trip Malang / Surabaya Sekarang',
    tags: [
      'Naik Kereta ke Bromo',
      'Open Trip Malang Surabaya',
      'Open Trip Bromo Malang',
      'Open Trip Bromo Surabaya',
      'Stasiun Pasar Turi',
      'Harga Kereta ke Bromo',
    ],
  },

  en: {
    id: 'naik-kereta-ke-bromo',
    slug: 'naik-kereta-ke-bromo-open-trip-malang-surabaya',
    title: '🚂 Taking the Train to Bromo: Malang & Surabaya Open Trip Guide',
    metaDescription:
      'Clear and concise guide to taking the train to Mount Bromo from Jakarta, Bandung, Semarang, and Yogyakarta—connecting seamlessly with Daily Malang Open Trip or Saturday Surabaya Open Trip.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 23, 2026',
    readTime: '5 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    heroImage: imgTrainHero,
    mapEmbedUrl:
      '/assets/aistudio/Peta_Jalur_Kereta_Pulau_Jawa___Surabaya__Malang___Mt._Bromo_9966951f.html',
    mapTitle: '🚂 Interactive Java Rail Route Map to Surabaya, Malang & Mt. Bromo',
    mapCaption:
      'Animated rail routes from Jakarta (JKT), Bandung (BDG), Semarang (SMG), and Yogyakarta (YK) to Surabaya (SUB) and Malang (MLG), continuing overland to Mount Bromo.',
    mapLegend: {
      surabaya: 'Train Route to Surabaya (SUB)',
      malang: 'Train Route to Malang (MLG)',
      bromo: 'Overland / Jeep Route to Mt. Bromo',
    },
    introduction: [
      '🚂 Taking the train is the most practical and reliable way to reach Mount Bromo from major cities across Java. Arrive directly at Malang Station or Surabaya Pasar Turi Station, then connect immediately with our 🚐 Malang or Surabaya Open Trip.',
      'Below are the two clearly separated open trip packages, reference 💰 train fares from Jakarta, Yogyakarta, Semarang, and Bandung, plus essential ⚠️ pre-departure warnings.',
    ],
    packagesSectionTitle: '🚐 Two Bromo Open Trip Packages (Malang vs. Surabaya)',
    packagesSectionSubtitle:
      'Pick your departure hub based on your train arrival schedule and travel day.',
    packageA: {
      badge: 'PACKAGE A • DAILY DEPARTURE',
      title: '🚐 Open Trip Start Malang',
      schedule: 'Departs Every Day',
      pickupPoint: 'Malang City (Malang Station / Hotel / City Address)',
      pickupTime: 'Pickup at 23:00 WIB',
      transport: 'Direct 4×4 Bromo Jeep from Malang City pickup point',
      priceLines: [
        { label: 'Without documentation', price: 'Rp275.000/person' },
        { label: 'With documentation', price: 'Rp325.000/person' },
      ],
      highlights: [
        'Take a direct train from major cities to Malang City.',
        'Picked up in Malang City at 23:00 WIB.',
        'Departs every single day.',
        'Choose between standard (Rp275.000) or with documentation (Rp325.000).',
      ],
      accentTheme: 'blue',
    },
    packageB: {
      badge: 'PACKAGE B • EVERY SATURDAY',
      title: '🚐 Open Trip Start Surabaya',
      schedule: 'Departs Every Saturday',
      pickupPoint: 'Surabaya Pasar Turi Station',
      pickupTime: 'Pickup at 22:00 WIB',
      transport: 'Full-AC Hiace / Elf from Surabaya to Bromo area, then 4×4 Jeep',
      priceLines: [
        { label: 'Documentation included', price: 'Rp400.000/person' },
      ],
      highlights: [
        'Take a train to Surabaya and disembark at Pasar Turi Station.',
        'Picked up at Pasar Turi Station at 22:00 WIB.',
        'Full-AC Hiace/Elf transport from Surabaya to Mount Bromo.',
        'Rp400.000/person includes documentation; departs every Saturday.',
      ],
      accentTheme: 'navy',
    },
    costClarification: {
      title: '💰 Cost Clarification',
      excludedTitle: 'NOT Included (Outside Open Trip Price)',
      excludedItems: [
        'Round-trip train tickets from your origin city to Malang or Surabaya.',
        'Personal expenses (meals, horse rental, jacket rental, personal needs).',
      ],
      includedTitle: 'INCLUDED in the Open Trip Package',
      includedItems: [
        'Official Mount Bromo 4×4 Jeep.',
        'Official Bromo Tengger Semeru National Park (TNBTS) entrance ticket.',
        'Round-trip transport from your pickup hub (Malang City or Pasar Turi Station Surabaya).',
      ],
      summaryNote:
        'Open trip prices exclude train tickets and personal expenses. Open trip packages already include the 4×4 Jeep, TNBTS entrance ticket, and transport from the pickup point.',
    },
    trainFaresSectionTitle: '🚂 Reference Train Fares from Major Cities (Including Bandung)',
    trainFaresSectionSubtitle:
      'Use these reference fares and train options to plan your arrival in Malang or Surabaya.',
    tableHeaders: {
      route: 'Origin Route',
      train: 'Train Service',
      schedule: 'Schedule Info',
      price: '💰 Reference Fare',
    },
    toMalangTitle: '🚂 Trains to Malang (For Package A: Open Trip Start Malang)',
    toMalangRows: [
      {
        origin: 'Jakarta → Malang',
        trainName: 'KA Majapahit',
        scheduleNote: 'Arrives morning in Malang',
        fare: 'From Rp385.000',
      },
      {
        origin: 'Yogyakarta → Malang',
        trainName: 'Economy & Executive Trains',
        scheduleNote: 'Multiple daily departures',
        fare: 'Economy from Rp160.000 · Executive from Rp315.000',
      },
      {
        origin: 'Semarang → Malang',
        trainName: 'KA Majapahit',
        scheduleNote: 'Direct northern route to Malang',
        fare: 'From Rp226.000–Rp280.000',
      },
      {
        origin: 'Bandung → Malang',
        trainName: 'KA Malabar',
        scheduleNote: 'Departs Bandung/Kiaracondong ~09:30–09:42, arrives Malang ~22:24–22:36',
        fare: 'Economy from ~Rp200.000–Rp250.000',
      },
    ],
    toSurabayaTitle: '🚂 Trains to Surabaya (For Package B: Open Trip Start Surabaya)',
    toSurabayaRows: [
      {
        origin: 'Jakarta → Surabaya Pasar Turi',
        trainName: 'KA Dharmawangsa',
        scheduleNote: 'Direct to Pasar Turi Station',
        fare: 'From Rp320.000',
      },
      {
        origin: 'Yogyakarta → Surabaya',
        trainName: 'Southern Java Rail Line',
        scheduleNote: 'Morning to night departures',
        fare: 'From ~Rp340.000',
      },
      {
        origin: 'Semarang → Surabaya Pasar Turi',
        trainName: 'KA Airlangga',
        scheduleNote: 'Budget route direct to Pasar Turi Station',
        fare: 'From Rp49.000',
      },
      {
        origin: 'Bandung → Surabaya',
        trainName: 'KA Argo Wilis, KA Turangga, KA Mutiara Selatan, KA Harina',
        scheduleNote:
          'KA Argo Wilis (Bandung, 07:35), KA Turangga (17:40), KA Mutiara Selatan (20:00), KA Harina (21:35)',
        fare: 'Economy from Rp340.000–Rp410.000 · Executive Rp580.000–Rp680.000',
      },
    ],
    tipsTitle: '⚠️ Essential Warnings & Travel Tips',
    tips: [
      {
        title: '⚠️ Arrive at Least 1–2 Hours Before Pickup Time',
        description:
          'Plan your train to arrive in Malang (before 23:00) or Surabaya Pasar Turi (before 22:00) at least 1–2 hours early. Trains can experience delays.',
      },
      {
        title: '⚠️ Pack a Heavy Jacket for Freezing Night & Sunrise Temperatures',
        description:
          'Night open trips and Bromo sunrise viewpoints are bitterly cold. Bring a thick windproof jacket, gloves, beanie, and warm socks.',
      },
    ],
    conclusion:
      'Combining a 🚂 Java train journey with our 🚐 Malang or Surabaya Open Trip gives you predictable schedules and transparent costs. Choose Daily Malang Start (Rp275.000 / Rp325.000) or Saturday Surabaya Start (Rp400.000 with documentation) and reserve your seat today.',
    ctaButton: 'Book Malang / Surabaya Open Trip Now',
    tags: [
      'Train to Bromo',
      'Open Trip Malang Surabaya',
      'Bromo Open Trip Malang',
      'Bromo Open Trip Surabaya',
      'Pasar Turi Station',
      'Java Train Fares',
    ],
  },

  zh: {
    id: 'naik-kereta-ke-bromo',
    slug: 'naik-kereta-ke-bromo-open-trip-malang-surabaya',
    title: '🚂 乘火车去布罗莫火山：玛琅与泗水拼团游 (Open Trip Malang Surabaya) 指南',
    metaDescription:
      '从雅加达、万隆、三宝垄、日惹乘火车前往布罗莫火山，无缝衔接玛琅每日拼团（23:00接站）或泗水每周六拼团（22:00接站）的完整价格与时间指南。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月23日',
    readTime: '5 分钟阅读',
    category: 'tips_wisata',
    categoryLabel: '攻略与指南',
    heroImage: imgTrainHero,
    mapEmbedUrl:
      '/assets/aistudio/Peta_Jalur_Kereta_Pulau_Jawa___Surabaya__Malang___Mt._Bromo_9966951f.html',
    mapTitle: '🚂 爪哇岛火车路线动态地图：前往泗水、玛琅与布罗莫火山',
    mapCaption:
      '展示雅加达(JKT)、万隆(BDG)、三宝垄(SMG)及日惹(YK)至泗水(SUB)与玛琅(MLG)的铁路线，以及衔接布罗莫火山的陆路行程。',
    mapLegend: {
      surabaya: '前往泗水铁路线 (SUB)',
      malang: '前往玛琅铁路线 (MLG)',
      bromo: '衔接布罗莫火山吉普/专车路线',
    },
    introduction: [
      '🚂 搭乘火车是从爪哇各大城市前往布罗莫火山最省心高效的交通方式。抵达玛琅站或泗水 Pasar Turi 站后，可直接衔接 🚐 玛琅/泗水拼团游（Open Trip Malang Surabaya）。',
      '以下清晰区分两套拼团方案，附各大城市（含万隆）💰 火车参考票价与 ⚠️ 重要行前提示。',
    ],
    packagesSectionTitle: '🚐 两套布罗莫拼团方案（玛琅出发 vs 泗水出发）',
    packagesSectionSubtitle: '请根据火车抵达城市与出行日期明确选择以下两套方案之一。',
    packageA: {
      badge: '方案 A • 每日发团',
      title: '🚐 玛琅出发拼团 (Open Trip Start Malang)',
      schedule: '每天发团',
      pickupPoint: '玛琅市区（玛琅火车站 / 市区酒店）',
      pickupTime: '23:00 WIB 接人',
      transport: '玛琅市区直接换乘四驱吉普车前往布罗莫',
      priceLines: [
        { label: '不含跟拍 (Tanpa dokumentasi)', price: 'Rp275.000/人' },
        { label: '含跟拍 (Dengan dokumentasi)', price: 'Rp325.000/人' },
      ],
      highlights: [
        '各城市乘火车直达玛琅市。',
        '晚上 23:00 在玛琅市区接站出发。',
        '天天发团，无需等待周末。',
        '可选不含跟拍 Rp275.000/人 或含跟拍 Rp325.000/人。',
      ],
      accentTheme: 'blue',
    },
    packageB: {
      badge: '方案 B • 每周六发团',
      title: '🚐 泗水出发拼团 (Open Trip Start Surabaya)',
      schedule: '每周六发团',
      pickupPoint: '泗水 Pasar Turi 火车站',
      pickupTime: '22:00 WIB 接人',
      transport: '泗水至布罗莫乘坐全空调 Hiace / Elf 专车，再换乘四驱吉普',
      priceLines: [
        { label: '已含跟拍 (Sudah termasuk dokumentasi)', price: 'Rp400.000/人' },
      ],
      highlights: [
        '各城市乘火车至泗水并在 Pasar Turi 站下车。',
        '晚上 22:00 在 Pasar Turi 站准时接站。',
        '泗水往返布罗莫配备全空调 Hiace/Elf 专车。',
        'Rp400.000/人（已含跟拍），每周六发团。',
      ],
      accentTheme: 'navy',
    },
    costClarification: {
      title: '💰 费用明确说明',
      excludedTitle: '费用不含',
      excludedItems: [
        '出发城市往返玛琅或泗水的火车票。',
        '个人消费（餐饮、骑马、租外套等）。',
      ],
      includedTitle: '拼团费用已含',
      includedItems: [
        '布罗莫官方四驱吉普车。',
        '布罗莫国家公园 (TNBTS) 门票。',
        '从接站点出发的全程交通（玛琅市区或泗水 Pasar Turi 站空调车）。',
      ],
      summaryNote:
        '拼团报价不含火车票与个人开销；已包含四驱吉普、TNBTS 门票及接站点往返交通。',
    },
    trainFaresSectionTitle: '🚂 各大城市火车参考票价（含万隆）',
    trainFaresSectionSubtitle: '参考以下车次与票价安排抵达玛琅或泗水的时间。',
    tableHeaders: {
      route: '出发路线',
      train: '车次',
      schedule: '时刻信息',
      price: '💰 参考票价',
    },
    toMalangTitle: '🚂 前往玛琅火车（衔接方案 A：玛琅出发拼团）',
    toMalangRows: [
      {
        origin: '雅加达 → 玛琅',
        trainName: 'KA Majapahit',
        scheduleNote: '次日早晨抵达玛琅',
        fare: 'Rp385.000 起',
      },
      {
        origin: '日惹 → 玛琅',
        trainName: '经济座 / 商务行政座列车',
        scheduleNote: '每日多班次',
        fare: '经济座 Rp160.000 起 · 行政座 Rp315.000 起',
      },
      {
        origin: '三宝垄 → 玛琅',
        trainName: 'KA Majapahit',
        scheduleNote: '直达玛琅',
        fare: 'Rp226.000–Rp280.000 起',
      },
      {
        origin: '万隆 → 玛琅',
        trainName: 'KA Malabar',
        scheduleNote: '万隆/Kiaracondong 约 09:30–09:42 发车，约 22:24–22:36 抵玛琅',
        fare: '经济座约 Rp200.000–Rp250.000 起',
      },
    ],
    toSurabayaTitle: '🚂 前往泗水火车（衔接方案 B：泗水出发拼团）',
    toSurabayaRows: [
      {
        origin: '雅加达 → 泗水 Pasar Turi',
        trainName: 'KA Dharmawangsa',
        scheduleNote: '直达 Pasar Turi 站',
        fare: 'Rp320.000 起',
      },
      {
        origin: '日惹 → 泗水',
        trainName: '南线列车',
        scheduleNote: '日间至夜间多班次',
        fare: '约 Rp340.000 起',
      },
      {
        origin: '三宝垄 → 泗水 Pasar Turi',
        trainName: 'KA Airlangga',
        scheduleNote: '高性价比直达 Pasar Turi 站',
        fare: 'Rp49.000 起',
      },
      {
        origin: '万隆 → 泗水',
        trainName: 'KA Argo Wilis、KA Turangga、KA Mutiara Selatan、KA Harina',
        scheduleNote:
          'KA Argo Wilis (万隆站 07:35)、KA Turangga (17:40)、KA Mutiara Selatan (20:00)、KA Harina (21:35)',
        fare: '经济座 Rp340.000–Rp410.000 起 · 行政座 Rp580.000–Rp680.000',
      },
    ],
    tipsTitle: '⚠️ 重要提醒与行前贴士',
    tips: [
      {
        title: '⚠️ 至少提前 1–2 小时抵达玛琅或泗水',
        description:
          '火车存在晚点可能，请确保车次比接站时间（玛琅 23:00 / 泗水 Pasar Turi 22:00）至少提前 1–2 小时到达。',
      },
      {
        title: '⚠️ 务必携带厚羽绒服或防风冲锋衣',
        description:
          '夜间发车且布罗莫日出观景台极为寒冷，请备好厚外套、手套与毛线帽。',
      },
    ],
    conclusion:
      '🚂 乘火车直达玛琅或泗水，再无缝衔接 🚐 拼团游，行程清晰省心。立即选择玛琅每日团或泗水周六团锁定名额！',
    ctaButton: '立即预订玛琅 / 泗水拼团',
    tags: [
      '乘火车去布罗莫',
      'Open Trip Malang Surabaya',
      '玛琅拼团',
      '泗水拼团',
      'Pasar Turi 站',
      '布罗莫火车票价',
    ],
  },
};
