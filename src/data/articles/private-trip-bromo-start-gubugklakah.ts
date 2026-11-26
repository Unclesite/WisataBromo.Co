import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgStandingCaldera from '../../assets/images/standing_above_volcanic_caldera.png';

export interface GubugklakahAddonPrice {
  symbol: string;
  label: string;
  price: string;
  detail: string;
}

export interface GubugklakahItineraryStep {
  symbol: string;
  time: string;
  title: string;
  description: string;
}

export interface GubugklakahGearItem {
  symbol: string;
  name: string;
  reason: string;
}

export interface LocalizedGubugklakahTripArticleContent {
  id: string;
  slug: string;
  bookingPackageId: string;
  title: string;
  metaDescription: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  categoryLabel: string;
  heroImage: string;
  animationEmbedUrl: string;
  animationCaption: string;
  introduction: string[];
  pricingSectionTitle: string;
  pricingSectionSubtitle: string;
  normalPrice: string;
  promoPrice: string;
  priceUnitLabel: string;
  seasonNote: string;
  savingsBadge: string;
  groupPriceTitle: string;
  groupPriceNote: string;
  addons: GubugklakahAddonPrice[];
  facilitiesSectionTitle: string;
  includeTitle: string;
  includeItems: string[];
  excludeTitle: string;
  excludeItems: string[];
  itinerarySectionTitle: string;
  itinerarySectionSubtitle: string;
  itinerarySteps: GubugklakahItineraryStep[];
  pickupSectionTitle: string;
  pickupLead: string;
  pickupPopularTitle: string;
  pickupPoints: string[];
  gearSectionTitle: string;
  gearSectionSubtitle: string;
  gearItems: GubugklakahGearItem[];
  extraTipTitle: string;
  extraTipContent: string;
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_PRIVATE_TRIP_BROMO_START_GUBUGKLAKAH: Record<
  SupportedLanguage,
  LocalizedGubugklakahTripArticleContent
> = {
  id: {
    id: 'private-trip-bromo-start-gubugklakah',
    slug: 'private-trip-bromo-start-gubugklakah-kab-malang-harga-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-tumpang',
    title: 'Private Trip Bromo Start Gubugklakah Kab. Malang: Harga, Itinerary, dan Fasilitas',
    metaDescription:
      'Panduan lengkap Private Trip Bromo Start Gubugklakah Kab. Malang Harga Terbaru mulai Rp1.400.000 per jeep/grup untuk 1–6 peserta (1 atau 6 orang harga sama saja), jalur eksotis kebun apel & savana Jemplang, dokumentasi +Rp500.000 & drone +Rp1.500.000, meeting point Basecamp Gubugklakah No. 147.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '26 November 2026',
    readTime: '5 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgStandingCaldera,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private Jeep 4×4 Bromo Start Gubugklakah Kab. Malang — Harga flat per jeep / per grup untuk 1–6 peserta',
    introduction: [
      'Ingin merasakan jalur selatan Gunung Bromo yang paling eksotis melintasi pedesaan kebun apel, hutan pinus asri, Desa Ngadas, dan bentang tebing Savana Jemplang? Layanan Private Trip Bromo Start Gubugklakah Kab. Malang cocok bagi Anda yang membawa kendaraan pribadi dari arah Malang Timur/Tumpang atau sudah menginap di Desa Wisata Gubugklakah. Anda menyewa 1 unit Jeep 4×4 Toyota Land Cruiser FJ40 secara 100% privat tanpa digabung rombongan lain, berangkat setiap hari pukul 03:00 WIB dini hari (tersedia juga opsi pagi/siang).',
      'Panduan Harga Terbaru ini merangkum tarif flat Rp1.400.000 per jeep untuk 1–6 peserta (berangkat 1 orang maupun 6 orang harganya tetap sama saja), tambahan dokumentasi & drone, fasilitas lengkap include/exclude, itinerary 02:30 – 10:30 WIB, meeting point Basecamp Gubugklakah No. 147, hingga perlengkapan wajib suhu 2°C – 10°C.',
    ],
    pricingSectionTitle: '💰 Harga & Paket Private Trip Start Gubugklakah Kab. Malang (Terbaru)',
    pricingSectionSubtitle:
      'Harga flat per jeep / per grup (maksimal 6 peserta tanpa dokumentasi atau 5 peserta plus fotografer) — berangkat 1 orang maupun 6 orang, harganya sama saja!',
    normalPrice: 'Rp1.650.000',
    promoPrice: 'Rp1.400.000',
    priceUnitLabel: '/ jeep (1–6 peserta)',
    seasonNote: 'Harga reguler/low season per jeep (High Season Rp1.650.000 • Start 03:00 WIB / Opsional Pagi–Siang)',
    savingsBadge: 'HEMAT Rp250.000 • 1–6 PESERTA',
    groupPriceTitle: '🚐 Harga Per Jeep / Per Grup (Maksimal 6 Peserta)',
    groupPriceNote:
      'Tarif Rp1.400.000 berlaku flat untuk 1–6 peserta (harga per jeep atau per grup, bukan per orang). Jadi berangkat 1 orang maupun rombongan 6 orang, harganya tetap sama saja! Jika menambah dokumentasi (+Rp500.000), kapasitas maksimal menjadi 5 peserta + 1 fotografer.',
    addons: [
      {
        symbol: '📸',
        label: 'Tambahan Dokumentasi',
        price: '+Rp500.000',
        detail: 'Dokumentasi foto & video DSLR/Mirrorless profesional (total Rp1.900.000 reguler / Rp2.150.000 high season, maks 5 peserta + 1 fotografer).',
      },
      {
        symbol: '🚁',
        label: 'Tambahan Drone',
        price: '+Rp1.500.000',
        detail: 'Pengambilan footage aerial sinematik di area Sunrise Point, Lautan Pasir, Savana Teletubbies & jalur Jemplang.',
      },
    ],
    facilitiesSectionTitle: '✅ Fasilitas Paket (Include & Exclude)',
    includeTitle: '✅ Include (Sudah Termasuk)',
    includeItems: [
      '1 Unit Jeep Bromo 4×4 (Toyota Land Cruiser FJ40) 100% privat (kapasitas 1–6 peserta).',
      'Driver profesional lokal Gubugklakah yang hafal medan jalur selatan & spot foto terbaik.',
      'BBM (bahan bakar minyak) Jeep selama seluruh rangkaian tour PP.',
      'Tiket masuk resmi Taman Nasional Bromo Tengger Semeru (TNBTS WNI) untuk seluruh peserta.',
      'Retribusi resmi kawasan wisata & parkir Basecamp Gubugklakah.',
    ],
    excludeTitle: '❌ Exclude (Tidak Termasuk)',
    excludeItems: [
      'Transportasi menuju Basecamp Gubugklakah (disediakan mandiri oleh peserta / mobil pribadi).',
      'Sewa kuda menuju kaki tangga Kawah Bromo (opsional, bisa ditempuh dengan jalan kaki).',
      'Makan dan minuman pribadi selama perjalanan.',
      'Biaya toilet umum berbayar di kawasan Bromo.',
      'Surcharge tiket masuk wisatawan mancanegara (WNA) Rp255.000 / orang (jika ada peserta WNA).',
    ],
    itinerarySectionTitle: '🕚 Itinerary Lengkap (Urut dari Basecamp hingga Selesai)',
    itinerarySectionSubtitle:
      'Durasi sekitar 10 jam melalui rute eksotis Gubugklakah – Ngadas – Jemplang – Kaldera Bromo.',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '02:30 – 03:00 WIB',
        title: 'Meet Up di Basecamp Gubugklakah (No. 147)',
        description:
          'Parkir aman kendaraan pribadi di Basecamp Jeep Gubugklakah, briefing singkat bersama driver lokal, lalu berangkat via jalur pedesaan Gubugklakah – Ngadas – Jemplang.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Sunrise Point',
        description:
          'Menikmati fajar pagi nan menakjubkan di spot sunrise terbaik Gunung Bromo (Penanjakan / Kingkong / Bukit Cinta / Prau) dengan santai.',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: 'Eksplor 5 Spot Ikonik Kaldera Bromo',
        description:
          'Menjelajahi Bukit Widodaren, Kawah Bromo & Gunung Batok, Pura Luhur Poten, Pasir Berbisik, hingga Savana Bukit Teletubbies.',
      },
      {
        symbol: '🚐',
        time: '10:30 WIB',
        title: 'Kembali ke Basecamp Gubugklakah',
        description:
          'Perjalanan pulang melintasi panorama tebing savana Jemplang dan perkebunan apel, lalu drop off kembali di Basecamp atau homestay Gubugklakah.',
      },
    ],
    pickupSectionTitle: '📍 Lokasi Meeting Point & Penjemputan Resmi Gubugklakah Kab. Malang',
    pickupLead:
      '📍 Meeting point utama berada di Basecamp Jeep Gubugklakah (Jln. Raya Gubugklakah No. 147, Poncokusumo, Kab. Malang) serta penjemputan di hotel & homestay Desa Wisata Gubugklakah dan Tumpang.',
    pickupPopularTitle: 'Titik Kumpul & Jemput Populer:',
    pickupPoints: [
      'Basecamp Jeep Gubugklakah Kab. Malang — Jln. Raya Gubugklakah No. 147 (tersedia area parkir resmi & aman untuk mobil pribadi).',
      'Hotel, Villa & Homestay di Desa Wisata Gubugklakah, Poncokusumo & Tumpang Kab. Malang.',
    ],
    gearSectionTitle: '🧥 Perlengkapan Wajib (Suhu 2°C – 10°C)',
    gearSectionSubtitle:
      'Rute pegunungan Ngadas–Jemplang dan puncak Bromo saat dini hari sangat dingin. Siapkan 4 perlengkapan penting berikut:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Jaket Gunung Tebal / Windbreaker',
        reason: 'Suhu fajar di Penanjakan bisa turun hingga 2°C – 6°C disertai hembusan angin.',
      },
      {
        symbol: '🧤',
        name: 'Sarung Tangan & Kupluk / Beanie',
        reason: 'Melindungi telapak tangan dan telinga dari angin dingin dini hari.',
      },
      {
        symbol: '😷',
        name: 'Masker Debu & Kacamata Hitam',
        reason: 'Berguna saat melintasi Lautan Pasir vulkanik dan mendaki area Kawah Bromo.',
      },
      {
        symbol: '👟',
        name: 'Sepatu Kets / Trekking Nyaman',
        reason: 'Memberi pijakan mantap di pasir dan tangga kawah—hindari sandal jepit atau sepatu berhak tinggi.',
      },
    ],
    extraTipTitle: '💡 Tips Tambahan: Rute Paling Scenic via Kebun Apel, Hutan Pinus & Tebing Savana Jemplang',
    extraTipContent:
      'Private Trip Start Gubugklakah Kab. Malang sangat direkomendasikan bagi traveler dan keluarga dari arah Malang Timur yang menginap di Desa Wisata Gubugklakah atau Tumpang. Jangan lupa siapkan kamera karena pemandangan tebing savana Jemplang dan perbukitan hijau saat perjalanan pulang di siang hari sangat memukau!',
    conclusion:
      'Dengan tarif reguler Rp1.400.000 per jeep/grup untuk 1–6 peserta (1 atau 6 orang harga sama saja), sudah termasuk tiket masuk TNBTS WNI, BBM, dan driver lokal Gubugklakah, perjalanan Bromo jalur selatan Anda jauh lebih seru dan eksklusif. Hitung estimasi lengkap serta opsi dokumentasi dan drone langsung di Kalkulator Private Start Gubugklakah.',
    ctaButton: 'Hitung & Booking via Kalkulator Private Start Gubugklakah',
    tags: [
      'Private Trip Start Gubugklakah',
      'Sewa Jeep Bromo Tumpang',
      'Harga Jeep Gubugklakah',
      'Jalur Bromo Ngadas Jemplang',
      'Sewa Jeep Bromo 1-6 Orang',
      'Itinerary Bromo Gubugklakah',
    ],
  },

  en: {
    id: 'private-trip-bromo-start-gubugklakah',
    slug: 'private-trip-bromo-start-gubugklakah-kab-malang-harga-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-tumpang',
    title: 'Private Trip Bromo Start Gubugklakah Malang Regency: Prices, Itinerary & Facilities',
    metaDescription:
      'Complete guide for Private Trip Bromo Start Gubugklakah Malang Regency from Rp1.400.000 per jeep/group for 1–6 participants (same flat rate for 1 or 6 people), scenic apple-orchard & Jemplang savanna route, optional photo/video +Rp500.000 & drone +Rp1.500.000.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 26, 2026',
    readTime: '5 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    heroImage: imgStandingCaldera,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private 4×4 Bromo Jeep Start Gubugklakah Malang Regency — Flat rate per jeep / per group for 1–6 participants',
    introduction: [
      'Want to experience Mount Bromo’s most scenic southern route winding through apple orchards, lush pine forests, Ngadas Village, and dramatic Jemplang savanna cliffs? Our Private Trip Bromo Start Gubugklakah Malang Regency is ideal if you are driving from East Malang/Tumpang or staying in Gubugklakah Tourism Village. Rent one 100% private Toyota Land Cruiser FJ40 4×4 Jeep departing daily at 03:00 WIB (optional morning/daytime departures available).',
      'This guide details our flat per-jeep rate of Rp1.400.000 for 1–6 participants (whether 1 or 6 people ride, the rate is identical), optional photography and drone add-ons, inclusions/exclusions, the 02:30–10:30 WIB itinerary, and cold-weather packing tips.',
    ],
    pricingSectionTitle: '💰 Private Trip Start Gubugklakah Prices & Add-Ons',
    pricingSectionSubtitle:
      'Flat price per jeep / per group (max 6 guests without photographer, or 5 guests with photographer) — 1 person or 6 people pay the exact same rate!',
    normalPrice: 'Rp1.650.000',
    promoPrice: 'Rp1.400.000',
    priceUnitLabel: '/ jeep (1–6 pax)',
    seasonNote: 'Regular / low season flat rate per jeep (High Season Rp1.650.000 • 03:00 WIB / Optional Morning–Day)',
    savingsBadge: 'SAVE Rp250.000 • 1–6 PAX',
    groupPriceTitle: '🚐 Flat Price Per Jeep / Per Group (Max 6 Participants)',
    groupPriceNote:
      'The Rp1.400.000 rate covers 1–6 participants per jeep/group (not per person). Whether 1 person or 6 people join, the price stays identical! Adding documentation (+Rp500.000) sets capacity to max 5 guests + 1 photographer.',
    addons: [
      {
        symbol: '📸',
        label: 'Documentation Add-On',
        price: '+Rp500.000',
        detail: 'Professional DSLR/Mirrorless photo & video coverage (total Rp1.900.000 regular / Rp2.150.000 high season, max 5 pax + 1 photographer).',
      },
      {
        symbol: '🚁',
        label: 'Drone Add-On',
        price: '+Rp1.500.000',
        detail: 'Cinematic aerial drone footage over Sunrise Point, Sea of Sand, Teletubbies Savanna & Jemplang cliffs.',
      },
    ],
    facilitiesSectionTitle: '✅ Facilities (Include & Exclude)',
    includeTitle: '✅ Included',
    includeItems: [
      '100% Private 4×4 Mount Bromo Jeep (Toyota Land Cruiser FJ40, fits 1–6 participants).',
      'Experienced local Gubugklakah driver & southern-route guide.',
      'Round-trip Jeep fuel (BBM) for the full Bromo itinerary.',
      'Official Mount Bromo National Park (TNBTS WNI) entrance tickets for all guests.',
      'Official tourism area retribution & basecamp parking fees.',
    ],
    excludeTitle: '❌ Excluded',
    excludeItems: [
      'Transportation to Gubugklakah Basecamp (self-arranged / private car).',
      'Horse rental across the Sea of Sand (optional; walkable).',
      'Personal meals and drinks.',
      'Paid public restroom fees.',
      'Foreign national (WNA) entrance ticket surcharge Rp255.000 / person.',
    ],
    itinerarySectionTitle: '🕚 Full Itinerary (Chronological Order)',
    itinerarySectionSubtitle:
      'Approx. 10 hours along the scenic Gubugklakah – Ngadas – Jemplang – Bromo Caldera trail.',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '02:30 – 03:00 WIB',
        title: 'Meet at Gubugklakah Basecamp (No. 147)',
        description:
          'Park your private car safely at Gubugklakah Jeep Basecamp, meet your local driver, and ascend via the Gubugklakah – Ngadas – Jemplang highland route.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Sunrise Point',
        description:
          'Experience the iconic golden Mount Bromo dawn from top sunrise viewpoints at an unhurried pace.',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: 'Explore 5 Iconic Caldera Highlights',
        description:
          'Visit Widodaren Hill, Bromo Crater & Mount Batok, Pura Poten Temple, Whispering Sands, and Teletubbies Savanna.',
      },
      {
        symbol: '🚐',
        time: '10:30 WIB',
        title: 'Return to Gubugklakah Basecamp',
        description:
          'Scenic daytime descent past Jemplang savanna cliffs and apple orchards back to Gubugklakah Basecamp or your local homestay.',
      },
    ],
    pickupSectionTitle: '📍 Official Gubugklakah Malang Meeting & Pickup Points',
    pickupLead:
      '📍 Primary meeting point at Gubugklakah Jeep Basecamp (Jln. Raya Gubugklakah No. 147, Malang Regency) plus pickup from hotels & homestays in Gubugklakah and Tumpang.',
    pickupPopularTitle: 'Popular Meeting Points:',
    pickupPoints: [
      'Gubugklakah Jeep Basecamp — Jln. Raya Gubugklakah No. 147, Malang Regency (secure official parking for private cars).',
      'Hotels, Villas & Homestays in Gubugklakah Tourism Village, Poncokusumo & Tumpang.',
    ],
    gearSectionTitle: '🧥 Essential Packing List (2°C – 10°C)',
    gearSectionSubtitle:
      'Highland temperatures along Ngadas–Jemplang and Sunrise Point are freezing before dawn. Pack these 4 essentials:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Thick Mountain Jacket / Windbreaker',
        reason: 'Dawn temperatures at Penanjakan drop to 2°C – 6°C.',
      },
      {
        symbol: '🧤',
        name: 'Gloves & Beanie Hat',
        reason: 'Protects your hands and ears from biting alpine wind.',
      },
      {
        symbol: '😷',
        name: 'Dust Mask & Sunglasses',
        reason: 'Helpful across the volcanic Sea of Sand and Crater stairs.',
      },
      {
        symbol: '👟',
        name: 'Sneakers / Comfortable Trekking Shoes',
        reason: 'Provides steady footing on volcanic sand and stairs—avoid flip-flops or heels.',
      },
    ],
    extraTipTitle: '💡 Extra Tip: Most Scenic Southern Route via Jemplang Savanna Cliffs',
    extraTipContent:
      'Private Trip Start Gubugklakah is the premier choice for travelers staying in Gubugklakah or Tumpang who love scenic mountain landscapes—keep your camera ready on the daytime return trip past Jemplang savanna cliffs and East Malang apple orchards!',
    conclusion:
      'Book directly using our Private Start Gubugklakah Calculator to choose your date, add optional photography or drone coverage, and lock in the flat rate of Rp1.400.000 per jeep/group.',
    ctaButton: 'Calculate & Book via Private Start Gubugklakah Calculator',
    tags: [
      'Private Trip Start Gubugklakah',
      'Bromo Jeep Rental Tumpang',
      'Gubugklakah Jeep Prices',
      'Bromo Ngadas Jemplang Route',
      'Bromo Jeep 1-6 Pax',
      'Bromo Itinerary Gubugklakah',
    ],
  },

  zh: {
    id: 'private-trip-bromo-start-gubugklakah',
    slug: 'private-trip-bromo-start-gubugklakah-kab-malang-harga-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-tumpang',
    title: 'Private Trip 玛琅县 Gubugklakah 出发布罗莫：价格、行程与设施完整指南',
    metaDescription:
      '玛琅县 Gubugklakah 大本营出发布罗莫私人吉普团攻略：平季整车价 Rp1.400.000/辆（适用 1–6 人，1 人或 6 人同价），穿越苹果园、松林与 Jemplang 草原南线绝美秘境，含摄影与无人机加购价。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月26日',
    readTime: '5 分钟阅读',
    category: 'tips_wisata',
    categoryLabel: '攻略与指南',
    heroImage: imgStandingCaldera,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 玛琅县 Gubugklakah 出发专属四驱布罗莫吉普 — 每辆 / 每团 1–6 人同价一口价',
    introduction: [
      '想体验布罗莫火山最具风情的南线秘境，穿越东玛琅苹果园、苍翠松林、Ngadas 山村与 Jemplang 高山草原悬崖？选择 Private Trip Start Gubugklakah Kab. Malang 私人吉普包车正是最佳选择！独享 1 辆 100% 独立四驱丰田 FJ40 吉普车，每日 03:00 凌晨出发（亦可选上午或午间出发）。',
      '本文完整整理整车报价 Rp1.400.000（1–6 人同价）、摄影与无人机加购价、费用包含/不含及 02:30–10:30 行程攻略。',
    ],
    pricingSectionTitle: '💰 玛琅县 Gubugklakah 出发私人吉普价格与方案',
    pricingSectionSubtitle: '按辆吉普车 / 按团一口价（最多 6 人；含摄影师最多 5 人）—— 1 人或 6 人出行同价！',
    normalPrice: 'Rp1.650.000',
    promoPrice: 'Rp1.400.000',
    priceUnitLabel: '/ 辆吉普车（1–6人）',
    seasonNote: '平季整车特惠价（旺季 Rp1.650.000 • 03:00 日出 / 可选白天出发）',
    savingsBadge: '立省 Rp250.000 • 1–6 人同价',
    groupPriceTitle: '🚐 按辆吉普车 / 按团一口价（最多 6 位团员）',
    groupPriceNote:
      'Rp1.400.000 为每辆吉普车整包价格，适用于 1–6 位团员（非按人头计费）。无论 1 人独行还是 6 人同行，价格完全相同！加购摄影跟拍（+Rp500.000）后最多容纳 5 位游客 + 1 名摄影师。',
    addons: [
      {
        symbol: '📸',
        label: '加购专业跟拍 (Dokumentasi)',
        price: '+Rp500.000',
        detail: '专业单反/微单照片与视频跟拍（平季总价 Rp1.900.000 / 旺季 Rp2.150.000，最多 5 位游客）。',
      },
      {
        symbol: '🚁',
        label: '加购无人机航拍 (Drone)',
        price: '+Rp1.500.000',
        detail: '日出点、沙海、天线宝宝草原与 Jemplang 悬崖电影级航拍素材。',
      },
    ],
    facilitiesSectionTitle: '✅ 费用说明（包含与不含）',
    includeTitle: '✅ 费用包含 (Include)',
    includeItems: [
      '1 辆 100% 独立官方四驱布罗莫越野吉普车（最多容纳 6 人）。',
      '熟悉南线山路的 Gubugklakah 专业当地司机。',
      '全程吉普车油费 (BBM)。',
      '全体团员布罗莫国家公园门票 (TNBTS WNI)。',
      '景区官方管理费及 Gubugklakah 大本营停车费。',
    ],
    excludeTitle: '❌ 费用不含 (Exclude)',
    excludeItems: [
      '前往 Gubugklakah 吉普大本营的交通（由游客自行安排或自驾）。',
      '火山沙海骑马费用（自愿选择）。',
      '个人餐饮费用。',
      '景区付费公共洗手间。',
      '外籍游客 (WNA) 门票差价 Rp255.000 / 人。',
    ],
    itinerarySectionTitle: '🕚 完整时间行程表（按顺序）',
    itinerarySectionSubtitle: '全程约 10 小时，畅游 Gubugklakah – Ngadas – Jemplang 南线经典环线。',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '02:30 – 03:00 WIB',
        title: 'Gubugklakah 大本营集合（147号）',
        description: '私家车可安全停放于 Gubugklakah 官方大本营，简短说明后经 Ngadas 与 Jemplang 山路上山。',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: '日出观景台 (Sunrise Point)',
        description: '在绝佳观景点悠闲欣赏布罗莫金色日出，无需匆忙。',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: '深度游览五大经典景点',
        description: '游览 Widodaren 山丘、布罗莫火山口与巴托克火山、Pura Poten 印度庙、耳语沙海与天线宝宝草原。',
      },
      {
        symbol: '🚐',
        time: '10:30 WIB',
        title: '返回 Gubugklakah 大本营',
        description: '白日返程沿途欣赏 Jemplang 悬崖草原与苹果园风光，送回大本营或当地民宿。',
      },
    ],
    pickupSectionTitle: '📍 官方集合与接送范围（玛琅县 Gubugklakah）',
    pickupLead: '📍 主集合点位于玛琅县 Gubugklakah 吉普大本营（Jln. Raya Gubugklakah No. 147），同时支持 Gubugklakah 与 Tumpang 周边民宿接送。',
    pickupPopularTitle: '热门集合点：',
    pickupPoints: [
      '玛琅县 Gubugklakah 吉普大本营 — Jln. Raya Gubugklakah No. 147（提供私家车官方安全停车场）。',
      'Gubugklakah 旅游村、Poncokusumo 及 Tumpang 周边酒店与民宿。',
    ],
    gearSectionTitle: '🧥 必备防寒装备（气温 2°C – 10°C）',
    gearSectionSubtitle: 'Ngadas–Jemplang 山路与布罗莫凌晨气温极低，请备齐以下 4 件装备：',
    gearItems: [
      {
        symbol: '🧥',
        name: '厚款冲锋衣 / 羽绒服',
        reason: 'Penanjakan 凌晨气温可低至 2°C – 6°C。',
      },
      {
        symbol: '🧤',
        name: '保暖手套与毛线帽',
        reason: '有效防止寒风冻伤双手与耳朵。',
      },
      {
        symbol: '😷',
        name: '防尘口罩与太阳镜',
        reason: '穿越火山沙海与攀登火山口时必备防灰防风沙装备。',
      },
      {
        symbol: '👟',
        name: '舒适运动鞋 / 徒步鞋',
        reason: '请勿穿拖鞋或高跟鞋，确保沙地与台阶行走安全。',
      },
    ],
    extraTipTitle: '💡 贴心推荐：最美南线风景（苹果园、松林与 Jemplang 草原悬崖）',
    extraTipContent:
      'Gubugklakah 入口非常适合下榻在东玛琅或 Tumpang 民宿的家庭与摄影爱好者——白日返程经过 Jemplang 草原悬崖时请务必准备好相机捕捉绝美山谷风光！',
    conclusion:
      '立即打开 Gubugklakah 私人吉普计算器选择日期与摄影/无人机加购项，锁定平季整车价 Rp1.400.000（1–6 人同价）！',
    ctaButton: '打开 Gubugklakah 专车计算器立即预订',
    tags: [
      'Private Trip Gubugklakah 出发',
      '玛琅东线布罗莫吉普',
      'Tumpang 租吉普',
      'Jemplang 草原路线',
      '布罗莫吉普1-6人同价',
      'Gubugklakah 私人团',
    ],
  },
};
