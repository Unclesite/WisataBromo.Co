import { SupportedLanguage } from '../../i18n/LanguageContext';

const HERO_IMAGE_PINTU_MASUK = '/assets/aistudio/1795528679940_d2d4114e.jpg';

export interface GateRouteItem {
  id: string;
  badge: string;
  title: string;
  gatePoint: string;
  colorHex: string;
  borderClass: string;
  bgClass: string;
  description: string;
  highlights: string[];
}

export interface JeepGatePriceItem {
  id: string;
  startPoint: string;
  routeLabel: string;
  normalPrice: string;
  promoPrice: string;
  savingsBadge: string;
  unitNote: string;
  accentTheme: 'blue' | 'teal' | 'purple';
}

export interface LocalizedGateJeepArticleContent {
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
    sukapura: string;
    tosari: string;
    gubugklakah: string;
    bromo: string;
  };
  introduction: string[];
  gatesSectionTitle: string;
  gatesSectionSubtitle: string;
  gates: GateRouteItem[];
  pricesSectionTitle: string;
  pricesSectionSubtitle: string;
  jeepPrices: JeepGatePriceItem[];
  priceExplanation: {
    title: string;
    points: string[];
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

export const ARTICLE_PINTU_MASUK_HARGA_JEEP: Record<
  SupportedLanguage,
  LocalizedGateJeepArticleContent
> = {
  id: {
    id: 'pintu-masuk-bromo-harga-jeep',
    slug: 'pintu-masuk-bromo-harga-sewa-jeep-2026',
    title: '🛣️ Pintu Masuk Bromo & Harga Sewa Jeep 2026: Panduan Lengkap 3 Jalur Utama',
    metaDescription:
      'Panduan lengkap 3 pintu masuk Gunung Bromo (Probolinggo–Sukapura, Pasuruan–Tosari, Malang–Gubugklakah) lengkap dengan daftar harga sewa jeep 2026 per jeep sudah termasuk driver, tiket, dan BBM.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '24 November 2026',
    readTime: '5 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: HERO_IMAGE_PINTU_MASUK,
    mapEmbedUrl: '/assets/aistudio/Rute_ke_Mt._Bromo_dari_Berbagai_Kota_5ecd85c2.html',
    mapTitle: '🛣️ Peta Animasi Rute dari Berbagai Kota ke 3 Pintu Masuk Mt. Bromo',
    mapCaption:
      'Visualisasi jalur darat dari Semarang, Yogyakarta, Tuban, Gresik, Bangkalan, Surabaya, Situbondo, Jember, hingga Banyuwangi menuju tiga gerbang utama Gunung Bromo: Cemoro Lawang (Sukapura), Wonokitri (Tosari), dan Gubugklakah (Malang).',
    mapLegend: {
      sukapura: 'Jalur Probolinggo – Sukapura (Cemoro Lawang)',
      tosari: 'Jalur Pasuruan – Tosari (Wonokitri)',
      gubugklakah: 'Jalur Malang – Gubugklakah / Tumpang',
      bromo: 'Kawasan Kaldera Mt. Bromo',
    },
    introduction: [
      '🛣️ Memilih pintu masuk Bromo yang tepat adalah langkah paling penting sebelum menyewa 🚐 jeep 4×4. Setiap gerbang memiliki karakter jalur, pemandangan, fasilitas penginapan, hingga 💰 harga sewa jeep yang berbeda.',
      'Panduan 2026 ini merangkum tiga jalur masuk utama Gunung Bromo beserta daftar harga promo sewa jeep per unit agar Anda dapat menyusun rute perjalanan yang paling hemat waktu dan biaya.',
    ],
    gatesSectionTitle: '🛣️ Tiga Jalur Masuk Utama Gunung Bromo',
    gatesSectionSubtitle:
      'Kenali keunggulan masing-masing gerbang sebelum menentukan titik start jeep Anda.',
    gates: [
      {
        id: 'probolinggo-sukapura',
        badge: 'JALUR TIMUR • PALING POPULER',
        title: '🛣️ Jalur Probolinggo – Sukapura',
        gatePoint: 'Gerbang Cemoro Lawang',
        colorHex: '#1e6fd9',
        borderClass: 'border-[#1e6fd9]/30',
        bgClass: 'bg-[#EAF6FF]/60',
        description:
          'Jalur paling populer dan menjadi akses utama wisatawan dari arah Probolinggo, Banyuwangi, Jember, Situbondo, maupun jalur tol Trans Jawa. Sepanjang jalur Sukapura hingga Cemoro Lawang tersedia banyak pilihan hotel, penginapan, dan cafe estetik, serta merupakan akses menuju Jembatan Kaca Bromo.',
        highlights: [
          'Jalur paling populer dengan infrastruktur jalan utama yang lebar dan jelas.',
          'Banyak pilihan hotel, villa, dan cafe estetik berlatar pegunungan.',
          'Akses langsung menuju kawasan wisata Jembatan Kaca Bromo.',
        ],
      },
      {
        id: 'pasuruan-tosari',
        badge: 'JALUR UTARA • TERDEKAT KE SUNRISE POINT',
        title: '🛣️ Jalur Pasuruan – Tosari',
        gatePoint: 'Gerbang Wonokitri',
        colorHex: '#0aa5a5',
        borderClass: 'border-[#0aa5a5]/30',
        bgClass: 'bg-teal-50/70',
        description:
          'Jalur alternatif dari arah utara yang sangat cocok bagi wisatawan yang datang dari Surabaya, Gresik, Tuban, maupun Semarang. Keunggulan utama gerbang Tosari–Wonokitri adalah jaraknya yang paling dekat menuju titik pandang utama sunrise point Gunung Bromo.',
        highlights: [
          'Alternatif favorit dari arah utara, sangat praktis untuk keberangkatan dari Surabaya.',
          'Jalur terdekat menuju sunrise point (Penanjakan / King Kong Hill / Bukit Perahu).',
          'Pilihan tarif sewa jeep paling ekonomis di antara ketiga pintu masuk.',
        ],
      },
      {
        id: 'malang-gubugklakah',
        badge: 'JALUR BARAT • VIEW TERINDAH & FAVORIT OPEN TRIP',
        title: '🛣️ Jalur Malang – Gubugklakah / Tumpang',
        gatePoint: 'Gerbang Coban Trisula / Jemplang',
        colorHex: '#7048e8',
        borderClass: 'border-[#7048e8]/30',
        bgClass: 'bg-violet-50/70',
        description:
          'Jalur dari arah barat yang cocok untuk Anda yang ingin melintasi kawasan hutan pinus, perbukitan, dan savana sebelum tiba di Bromo. Dikenal sebagai jalur dengan pemandangan paling bagus sepanjang jalan, sangat populer dengan layanan open trip-nya, serta berada dekat dengan Kota Wisata Batu.',
        highlights: [
          'Melewati panorama hutan asri dan hamparan savana sebelum memasuki area kaldera.',
          'Jalur dengan pemandangan paling bagus sepanjang perjalanan.',
          'Populer dengan open trip Bromo serta dekat untuk dikombinasikan dengan liburan ke Kota Wisata Batu.',
        ],
      },
    ],
    pricesSectionTitle: '💰 Daftar Harga Sewa Jeep Bromo 2026 Berdasarkan Titik Start',
    pricesSectionSubtitle:
      'Tarif transparan per unit 🚐 Jeep 4×4 sesuai pintu masuk keberangkatan Anda.',
    jeepPrices: [
      {
        id: 'start-sukapura',
        startPoint: '🚐 Start Sukapura',
        routeLabel: 'Jalur Probolinggo – Cemoro Lawang',
        normalPrice: 'Rp1.300.000',
        promoPrice: 'Rp1.000.000',
        savingsBadge: 'HEMAT Rp300.000',
        unitNote: 'per jeep (maks. 6 orang)',
        accentTheme: 'blue',
      },
      {
        id: 'start-tosari',
        startPoint: '🚐 Start Tosari',
        routeLabel: 'Jalur Pasuruan – Wonokitri',
        normalPrice: 'Rp1.250.000',
        promoPrice: 'Rp950.000',
        savingsBadge: 'HEMAT Rp300.000',
        unitNote: 'per jeep (maks. 6 orang)',
        accentTheme: 'teal',
      },
      {
        id: 'start-gubugklakah',
        startPoint: '🚐 Start Gubugklakah',
        routeLabel: 'Jalur Malang – Tumpang',
        normalPrice: 'Rp1.700.000',
        promoPrice: 'Rp1.400.000',
        savingsBadge: 'HEMAT Rp300.000',
        unitNote: 'per jeep (maks. 6 orang)',
        accentTheme: 'purple',
      },
    ],
    priceExplanation: {
      title: '💰 Penjelasan Singkat Ketentuan Harga Sewa Jeep',
      points: [
        '💰 Harga jeep di atas adalah per jeep (bukan per orang).',
        '🚐 Harga tersebut sudah termasuk driver, tiket masuk, dan BBM.',
        '🚐 Kapasitas maksimal 6 orang per jeep.',
        '⚠️ Harga di luar pengeluaran pribadi lainnya (makan pribadi, sewa kuda, sewa jaket, dan kebutuhan pribadi lainnya).',
      ],
    },
    tipsTitle: '⚠️ Tips & Peringatan Penting Sebelum Memesan Jeep',
    tips: [
      {
        title: '🛣️ Pilih Titik Start Sesuai Rute Kedatangan Anda',
        description:
          'Sesuaikan gerbang masuk dengan kota asal Anda (misalnya Tosari/Sukapura dari Surabaya & jalur timur, atau Gubugklakah dari Malang & Batu) untuk menghemat waktu tempuh serta biaya transportasi.',
      },
      {
        title: '⚠️ Pesan Jeep Lebih Awal Saat Peak Season',
        description:
          'Pada musim liburan, tanggal merah, atau akhir pekan (weekend), unit jeep cepat habis. Lakukan reservasi jauh-jauh hari agar jadwal penjemputan dan unit jeep Anda terjamin aman.',
      },
    ],
    conclusion:
      'Dengan memahami karakter 3 🛣️ pintu masuk Bromo dan daftar 💰 harga sewa jeep 2026 (Start Tosari Rp950.000, Start Sukapura Rp1.000.000, dan Start Gubugklakah Rp1.400.000 per jeep termasuk driver, tiket, dan BBM), Anda bisa merencanakan perjalanan Bromo yang lebih efisien dan nyaman bersama keluarga maupun rombongan.',
    ctaButton: 'Pesan Jeep Bromo Sesuai Pintu Masuk Sekarang',
    tags: [
      'Pintu Masuk Bromo',
      'Harga Sewa Jeep Bromo 2026',
      'Jalur Sukapura Probolinggo',
      'Jalur Tosari Pasuruan',
      'Jalur Gubugklakah Malang',
      'Sewa Jeep Bromo',
    ],
  },

  en: {
    id: 'pintu-masuk-bromo-harga-jeep',
    slug: 'pintu-masuk-bromo-harga-sewa-jeep-2026',
    title: '🛣️ Mount Bromo Entrances & 2026 Jeep Rental Prices: Complete 3-Gate Guide',
    metaDescription:
      'Complete 2026 guide to Mount Bromo’s 3 main entrances (Probolinggo–Sukapura, Pasuruan–Tosari, Malang–Gubugklakah) with per-jeep rental prices including driver, tickets, and fuel.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 24, 2026',
    readTime: '5 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    heroImage: HERO_IMAGE_PINTU_MASUK,
    mapEmbedUrl: '/assets/aistudio/Rute_ke_Mt._Bromo_dari_Berbagai_Kota_5ecd85c2.html',
    mapTitle: '🛣️ Animated Route Map from Major Cities to the 3 Entrances of Mt. Bromo',
    mapCaption:
      'Interactive route animation from Semarang, Yogyakarta, Tuban, Gresik, Bangkalan, Surabaya, Situbondo, Jember, and Banyuwangi to Cemoro Lawang (Sukapura), Wonokitri (Tosari), and Gubugklakah (Malang).',
    mapLegend: {
      sukapura: 'Probolinggo – Sukapura Route (Cemoro Lawang)',
      tosari: 'Pasuruan – Tosari Route (Wonokitri)',
      gubugklakah: 'Malang – Gubugklakah / Tumpang Route',
      bromo: 'Mt. Bromo Caldera',
    },
    introduction: [
      '🛣️ Choosing the right Mount Bromo entrance gate is essential before booking your 🚐 4×4 Jeep. Each gate offers distinct scenery, hotel choices, distance to sunrise viewpoints, and 💰 jeep rental rates.',
      'This 2026 guide details all three main Mount Bromo entrances alongside transparent promo per-jeep prices to save you both travel time and budget.',
    ],
    gatesSectionTitle: '🛣️ Three Main Mount Bromo Entrance Routes',
    gatesSectionSubtitle:
      'Compare each entrance gate before selecting your jeep starting point.',
    gates: [
      {
        id: 'probolinggo-sukapura',
        badge: 'EAST GATE • MOST POPULAR',
        title: '🛣️ Probolinggo – Sukapura Route',
        gatePoint: 'Cemoro Lawang Gate',
        colorHex: '#1e6fd9',
        borderClass: 'border-[#1e6fd9]/30',
        bgClass: 'bg-[#EAF6FF]/60',
        description:
          'The most popular main access route lined with plenty of hotels and aesthetic hillside cafes, as well as direct access to the Mount Bromo Glass Bridge.',
        highlights: [
          'Most popular main gateway with smooth road infrastructure.',
          'Abundant hotels, homestays, and scenic aesthetic cafes.',
          'Direct access to the Bromo Glass Bridge attraction.',
        ],
      },
      {
        id: 'pasuruan-tosari',
        badge: 'NORTH GATE • CLOSEST TO SUNRISE POINT',
        title: '🛣️ Pasuruan – Tosari Route',
        gatePoint: 'Wonokitri Gate',
        colorHex: '#0aa5a5',
        borderClass: 'border-[#0aa5a5]/30',
        bgClass: 'bg-teal-50/70',
        description:
          'The northern alternative route ideal for travelers arriving from Surabaya, offering the shortest drive directly up to Mount Bromo’s main sunrise viewpoints.',
        highlights: [
          'Convenient northern route especially suited for Surabaya arrivals.',
          'Closest entrance gate to the main sunrise viewpoints.',
          'Most budget-friendly jeep starting rate among all three gates.',
        ],
      },
      {
        id: 'malang-gubugklakah',
        badge: 'WEST GATE • BEST SCENERY & OPEN TRIP HUB',
        title: '🛣️ Malang – Gubugklakah / Tumpang Route',
        gatePoint: 'Coban Trisula / Jemplang Gate',
        colorHex: '#7048e8',
        borderClass: 'border-[#7048e8]/30',
        bgClass: 'bg-violet-50/70',
        description:
          'The western route passing through lush mountain forests and dramatic savannas before entering Bromo—famous for the best scenery along the road, popular open trips, and proximity to Batu Tourism City.',
        highlights: [
          'Scenic drive through highland forests and green savannas.',
          'Best roadside mountain panoramas all the way to the caldera.',
          'Popular hub for Bromo open trips and close to Batu Tourism City.',
        ],
      },
    ],
    pricesSectionTitle: '💰 2026 Bromo Jeep Rental Prices by Starting Point',
    pricesSectionSubtitle: 'Transparent per-vehicle 🚐 4×4 Jeep rates by entrance hub.',
    jeepPrices: [
      {
        id: 'start-sukapura',
        startPoint: '🚐 Start Sukapura',
        routeLabel: 'Probolinggo – Cemoro Lawang Route',
        normalPrice: 'Rp1.300.000',
        promoPrice: 'Rp1.000.000',
        savingsBadge: 'SAVE Rp300.000',
        unitNote: 'per jeep (max. 6 guests)',
        accentTheme: 'blue',
      },
      {
        id: 'start-tosari',
        startPoint: '🚐 Start Tosari',
        routeLabel: 'Pasuruan – Wonokitri Route',
        normalPrice: 'Rp1.250.000',
        promoPrice: 'Rp950.000',
        savingsBadge: 'SAVE Rp300.000',
        unitNote: 'per jeep (max. 6 guests)',
        accentTheme: 'teal',
      },
      {
        id: 'start-gubugklakah',
        startPoint: '🚐 Start Gubugklakah',
        routeLabel: 'Malang – Tumpang Route',
        normalPrice: 'Rp1.700.000',
        promoPrice: 'Rp1.400.000',
        savingsBadge: 'SAVE Rp300.000',
        unitNote: 'per jeep (max. 6 guests)',
        accentTheme: 'purple',
      },
    ],
    priceExplanation: {
      title: '💰 Quick Price Terms & Inclusions',
      points: [
        '💰 All prices listed above are per jeep (not per person).',
        '🚐 Rates already include driver, entrance tickets, and fuel (BBM).',
        '🚐 Maximum capacity is 6 passengers per jeep.',
        '⚠️ Prices exclude other personal expenses (meals, horse rides, jacket rentals).',
      ],
    },
    tipsTitle: '⚠️ Essential Tips & Warnings',
    tips: [
      {
        title: '🛣️ Match Your Jeep Start Point to Your Arrival Route',
        description:
          'Picking the gate closest to your arrival city saves both travel hours and extra transfer costs.',
      },
      {
        title: '⚠️ Reserve Your Jeep Early During Peak Season',
        description:
          'During national holidays and weekends, official 4×4 Jeeps book out quickly—secure your unit in advance.',
      },
    ],
    conclusion:
      'Choose your ideal 🛣️ Mount Bromo entrance and enjoy transparent 2026 💰 per-jeep pricing (Tosari Rp950.000, Sukapura Rp1.000.000, Gubugklakah Rp1.400.000 including driver, tickets, and fuel).',
    ctaButton: 'Book Your Bromo Jeep Now',
    tags: [
      'Mount Bromo Entrances',
      'Bromo Jeep Rental 2026',
      'Sukapura Probolinggo',
      'Tosari Pasuruan',
      'Gubugklakah Malang',
      'Bromo 4x4 Jeep',
    ],
  },

  zh: {
    id: 'pintu-masuk-bromo-harga-jeep',
    slug: 'pintu-masuk-bromo-harga-sewa-jeep-2026',
    title: '🛣️ 布罗莫火山三大入口与 2026 吉普车包车价格完整指南',
    metaDescription:
      '2026布罗莫火山三大主要入口（庞越 Sukapura、岩望 Tosari、玛琅 Gubugklakah）与每辆吉普车最新优惠价一览，费用含司机、门票与油费。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月24日',
    readTime: '5 分钟阅读',
    category: 'tips_wisata',
    categoryLabel: '攻略与指南',
    heroImage: HERO_IMAGE_PINTU_MASUK,
    mapEmbedUrl: '/assets/aistudio/Rute_ke_Mt._Bromo_dari_Berbagai_Kota_5ecd85c2.html',
    mapTitle: '🛣️ 爪哇各城市前往布罗莫三大入口动态路线图',
    mapCaption:
      '展示从三宝垄、日惹、泗水、岩望、庞越、外南梦等城市通往 Cemoro Lawang（Sukapura）、Wonokitri（Tosari）及 Gubugklakah（玛琅）的路线。',
    mapLegend: {
      sukapura: '庞越 – Sukapura 路线 (Cemoro Lawang)',
      tosari: '岩望 – Tosari 路线 (Wonokitri)',
      gubugklakah: '玛琅 – Gubugklakah / Tumpang 路线',
      bromo: '布罗莫火山口景区',
    },
    introduction: [
      '🛣️ 选对布罗莫火山入口能大幅节省交通时间与预算。三大入口在沿途风景、酒店咖啡馆配套、日出观景台距离以及 🚐 吉普车 💰 报价上各有特色。',
      '以下为您清晰梳理 2026 年三大主要入口及各出发点吉普车包车价格与注意事项。',
    ],
    gatesSectionTitle: '🛣️ 布罗莫火山三大主要入口路线',
    gatesSectionSubtitle: '根据您的出发城市与游玩偏好选择合适的入口。',
    gates: [
      {
        id: 'probolinggo-sukapura',
        badge: '东入口 • 最受欢迎',
        title: '🛣️ 庞越 – Sukapura 路线 (Probolinggo – Sukapura)',
        gatePoint: 'Cemoro Lawang 入口',
        colorHex: '#1e6fd9',
        borderClass: 'border-[#1e6fd9]/30',
        bgClass: 'bg-[#EAF6FF]/60',
        description:
          '最热门的主干道入口，沿途拥有众多精品酒店与网红景观咖啡馆，同时也是前往布罗莫玻璃桥的通道。',
        highlights: [
          '最经典热门的主入口，交通配套成熟。',
          '酒店、民宿与高颜值山景咖啡馆选择丰富。',
          '可顺路打卡布罗莫玻璃桥景点。',
        ],
      },
      {
        id: 'pasuruan-tosari',
        badge: '北入口 • 距日出点最近',
        title: '🛣️ 岩望 – Tosari 路线 (Pasuruan – Tosari)',
        gatePoint: 'Wonokitri 入口',
        colorHex: '#0aa5a5',
        borderClass: 'border-[#0aa5a5]/30',
        bgClass: 'bg-teal-50/70',
        description:
          '来自北方的优选入口，非常适合从泗水出发的游客，是距离布罗莫主要日出观景台最近的入口。',
        highlights: [
          '从泗水出发的理想北方入口，路线顺畅。',
          '距离主日出观景台车程最近。',
          '三大入口中吉普车起步包车价最实惠。',
        ],
      },
      {
        id: 'malang-gubugklakah',
        badge: '西入口 • 风景最美 & 拼团热门',
        title: '🛣️ 玛琅 – Gubugklakah / Tumpang 路线',
        gatePoint: 'Coban Trisula / Jemplang 入口',
        colorHex: '#7048e8',
        borderClass: 'border-[#7048e8]/30',
        bgClass: 'bg-violet-50/70',
        description:
          '从西方穿越森林与高山草原进入布罗莫，被公认为沿途风景最美的路线，也是拼团游 (Open Trip) 的热门通道，且紧邻巴图旅游城 (Kota Wisata Batu)。',
        highlights: [
          '抵达火山前即可穿梭于茂密森林与高山草原之间。',
          '沿途风光绝佳，极具公路大片感。',
          '玛琅拼团游热门通道，且临近巴图旅游城。',
        ],
      },
    ],
    pricesSectionTitle: '💰 2026 按出发点划分的吉普车包车价格表',
    pricesSectionSubtitle: '按 🚐 每辆吉普车计价，透明无隐藏费用。',
    jeepPrices: [
      {
        id: 'start-sukapura',
        startPoint: '🚐 Start Sukapura',
        routeLabel: '庞越 – Cemoro Lawang 路线',
        normalPrice: 'Rp1.300.000',
        promoPrice: 'Rp1.000.000',
        savingsBadge: '立省 Rp300.000',
        unitNote: '每辆吉普车（最多 6 人）',
        accentTheme: 'blue',
      },
      {
        id: 'start-tosari',
        startPoint: '🚐 Start Tosari',
        routeLabel: '岩望 – Wonokitri 路线',
        normalPrice: 'Rp1.250.000',
        promoPrice: 'Rp950.000',
        savingsBadge: '立省 Rp300.000',
        unitNote: '每辆吉普车（最多 6 人）',
        accentTheme: 'teal',
      },
      {
        id: 'start-gubugklakah',
        startPoint: '🚐 Start Gubugklakah',
        routeLabel: '玛琅 – Tumpang 路线',
        normalPrice: 'Rp1.700.000',
        promoPrice: 'Rp1.400.000',
        savingsBadge: '立省 Rp300.000',
        unitNote: '每辆吉普车（最多 6 人）',
        accentTheme: 'purple',
      },
    ],
    priceExplanation: {
      title: '💰 价格简要说明',
      points: [
        '💰 以上报价均为每辆吉普车价格（非按人头收费）。',
        '🚐 费用已包含专业司机、景区门票与油费 (BBM)。',
        '🚐 每辆吉普车最多乘坐 6 位乘客。',
        '⚠️ 费用不含其他个人消费（餐食、骑马、租外套等）。',
      ],
    },
    tipsTitle: '⚠️ 重要提示与建议',
    tips: [
      {
        title: '🛣️ 按抵达路线选择对应出发点',
        description: '就近选择吉普车出发口，有效节省车程与额外交通开支。',
      },
      {
        title: '⚠️ 旺季与周末务必提前预订吉普车',
        description: '节假日及周末吉普车源紧张，提前锁定车辆更安心。',
      },
    ],
    conclusion:
      '选准 🛣️ 布罗莫入口并提前锁定 2026 💰 优惠吉普包车价（Tosari Rp950.000、Sukapura Rp1.000.000、Gubugklakah Rp1.400.000/辆，含司机、门票与油费），让您的火山之旅省时又省心！',
    ctaButton: '立即预订布罗莫吉普车',
    tags: [
      '布罗莫入口指南',
      '2026布罗莫吉普车价格',
      'Sukapura 庞越',
      'Tosari 岩望',
      'Gubugklakah 玛琅',
      '布罗莫包车',
    ],
  },
};
