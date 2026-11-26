import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgPrivateSukapura from '../../assets/images/bromo_segara_wedhi_1791386575556.jpg';

export interface SukapuraAddonPrice {
  symbol: string;
  label: string;
  price: string;
  detail: string;
}

export interface SukapuraItineraryStep {
  symbol: string;
  time: string;
  title: string;
  description: string;
}

export interface SukapuraGearItem {
  symbol: string;
  name: string;
  reason: string;
}

export interface LocalizedSukapuraTripArticleContent {
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
  addons: SukapuraAddonPrice[];
  facilitiesSectionTitle: string;
  includeTitle: string;
  includeItems: string[];
  excludeTitle: string;
  excludeItems: string[];
  itinerarySectionTitle: string;
  itinerarySectionSubtitle: string;
  itinerarySteps: SukapuraItineraryStep[];
  pickupSectionTitle: string;
  pickupLead: string;
  pickupPopularTitle: string;
  pickupPoints: string[];
  gearSectionTitle: string;
  gearSectionSubtitle: string;
  gearItems: SukapuraGearItem[];
  extraTipTitle: string;
  extraTipContent: string;
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_PRIVATE_TRIP_BROMO_START_SUKAPURA: Record<
  SupportedLanguage,
  LocalizedSukapuraTripArticleContent
> = {
  id: {
    id: 'private-trip-bromo-start-sukapura',
    slug: 'private-trip-bromo-start-sukapura-probolinggo-harga-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-sukapura',
    title: 'Private Trip Bromo Start Sukapura Probolinggo: Harga, Itinerary, dan Fasilitas',
    metaDescription:
      'Panduan lengkap Private Trip Bromo Start Sukapura Probolinggo Harga Terbaru mulai Rp1.000.000 per jeep/grup untuk 1–6 peserta (1 atau 6 orang harga sama saja), opsi Sunrise 03:00 WIB atau Panorama 11:00 WIB, tambahan dokumentasi +Rp500.000 & drone +Rp1.500.000, meeting point Basecamp Sukapura & hotel Cemoro Lawang.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '26 November 2026',
    readTime: '5 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgPrivateSukapura,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private Jeep 4×4 Bromo Start Sukapura Probolinggo — Harga flat per jeep / per grup untuk 1–6 peserta',
    introduction: [
      'Membawa kendaraan pribadi melalui Tol Trans Jawa exit Probolinggo atau sedang menginap di penginapan sekitar Sukapura hingga Cemoro Lawang? Layanan Private Trip Bromo Start Sukapura Probolinggo adalah pilihan paling praktis, dekat, dan hemat! Anda menyewa 1 unit Jeep 4×4 Toyota Land Cruiser FJ40 secara 100% privat tanpa digabung rombongan lain, dengan pilihan keberangkatan setiap hari: Paket Sunrise (03:00 WIB) maupun Paket Panorama Siang (11:00 WIB).',
      'Panduan Harga Terbaru ini merangkum tarif flat per jeep untuk 1–6 peserta (berangkat 1 orang maupun 6 orang harganya tetap sama saja), tambahan dokumentasi & drone, fasilitas lengkap include/exclude, itinerary 02:30 – 10:00 WIB, titik kumpul resmi Basecamp Sukapura, hingga daftar perlengkapan wajib suhu 2°C – 10°C.',
    ],
    pricingSectionTitle: '💰 Harga & Paket Private Trip Start Sukapura Probolinggo (Terbaru)',
    pricingSectionSubtitle:
      'Harga flat per jeep / per grup (maksimal 6 peserta tanpa dokumentasi atau 5 peserta plus fotografer) — berangkat 1 orang maupun 6 orang, harganya sama saja!',
    normalPrice: 'Rp1.200.000',
    promoPrice: 'Rp1.000.000',
    priceUnitLabel: '/ jeep (1–6 peserta)',
    seasonNote: 'Harga reguler/low season per jeep (High Season Rp1.200.000 • Sunrise 03:00 WIB / Panorama 11:00 WIB)',
    savingsBadge: 'HEMAT Rp200.000 • 1–6 PESERTA',
    groupPriceTitle: '🚐 Harga Per Jeep / Per Grup (Maksimal 6 Peserta)',
    groupPriceNote:
      'Tarif Rp1.000.000 berlaku flat untuk 1–6 peserta (harga per jeep atau per grup, bukan per orang). Jadi berangkat 1 orang maupun rombongan 6 orang, harganya tetap sama saja! Jika menambah dokumentasi (+Rp500.000), kapasitas maksimal menjadi 5 peserta + 1 fotografer.',
    addons: [
      {
        symbol: '📸',
        label: 'Tambahan Dokumentasi',
        price: '+Rp500.000',
        detail: 'Dokumentasi foto & video DSLR/Mirrorless profesional (total Rp1.500.000 reguler / Rp1.700.000 high season, maks 5 peserta + 1 fotografer).',
      },
      {
        symbol: '🚁',
        label: 'Tambahan Drone',
        price: '+Rp1.500.000',
        detail: 'Pengambilan footage aerial sinematik di area Sunrise Point, Lautan Pasir & Savana Teletubbies.',
      },
    ],
    facilitiesSectionTitle: '✅ Fasilitas Paket (Include & Exclude)',
    includeTitle: '✅ Include (Sudah Termasuk)',
    includeItems: [
      '1 Unit Jeep Bromo 4×4 (Toyota Land Cruiser FJ40) 100% privat (kapasitas 1–6 peserta).',
      'Driver profesional lokal Sukapura yang hafal medan & spot foto terbaik.',
      'BBM (bahan bakar minyak) Jeep selama seluruh rangkaian tour PP.',
      'Tiket masuk resmi kawasan wisata Gunung Bromo (TNBTS WNI) untuk seluruh peserta.',
      'Retribusi resmi kawasan wisata & parkir Basecamp Sukapura.',
    ],
    excludeTitle: '❌ Exclude (Tidak Termasuk)',
    excludeItems: [
      'Transportasi menuju Basecamp Sukapura (disediakan mandiri oleh peserta / mobil pribadi).',
      'Sewa kuda menuju kaki tangga Kawah Bromo (opsional, bisa ditempuh dengan jalan kaki).',
      'Makan dan minuman pribadi selama perjalanan.',
      'Biaya toilet umum berbayar di kawasan Bromo.',
      'Surcharge tiket masuk wisatawan mancanegara (WNA) Rp255.000 / orang (jika ada peserta WNA).',
    ],
    itinerarySectionTitle: '🕚 Itinerary Lengkap (Urut dari Basecamp hingga Selesai)',
    itinerarySectionSubtitle:
      'Durasi sekitar 8 jam yang ringkas dan nyaman — tersedia jadwal Sunrise (03:00 WIB) maupun Panorama Siang (11:00 WIB).',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '02:30 – 03:00 WIB',
        title: 'Kumpul di Basecamp Sukapura / Jemput Hotel Sekitar',
        description:
          'Parkir aman kendaraan pribadi Anda di rest area resmi Basecamp Jeep Sukapura, briefing singkat bersama driver lokal, lalu naik ke Jeep 4×4 privat.',
      },
      {
        symbol: '🌅',
        time: '03:45 – 06:00 WIB',
        title: 'Sunrise Point',
        description:
          'Menyaksikan momen Golden Sunrise spektakuler di spot terbaik Gunung Bromo (Penanjakan / Kingkong / Bukit Cinta / Prau) dengan santai tanpa terburu-buru.',
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
        time: '10:00 WIB',
        title: 'Kembali ke Basecamp Sukapura',
        description:
          'Rangkaian tour selesai, pengantaran kembali ke Basecamp Jeep Sukapura atau hotel/penginapan Anda di sekitar Sukapura & Cemoro Lawang.',
      },
    ],
    pickupSectionTitle: '📍 Lokasi Meeting Point & Penjemputan Resmi Sukapura Probolinggo',
    pickupLead:
      '📍 Meeting point utama berada di Basecamp Jeep Sukapura Kab. Probolinggo (akses terdekat dari Tol Trans Jawa Probolinggo) serta penjemputan langsung di hotel sekitar Sukapura & Cemoro Lawang.',
    pickupPopularTitle: 'Titik Kumpul & Jemput Populer:',
    pickupPoints: [
      'Basecamp Jeep Sukapura Kab. Probolinggo (tersedia area parkir resmi & aman untuk kendaraan pribadi).',
      'Hotel, Homestay & Penginapan di sekitar Kecamatan Sukapura hingga Cemoro Lawang.',
    ],
    gearSectionTitle: '🧥 Perlengkapan Wajib (Suhu 2°C – 10°C)',
    gearSectionSubtitle:
      'Suhu kawasan Sukapura atas dan puncak Penanjakan saat dini hari sangat dingin. Siapkan 4 perlengkapan penting berikut:',
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
        reason: 'Sangat berguna saat melintasi Lautan Pasir vulkanik dan mendaki area Kawah Bromo.',
      },
      {
        symbol: '👟',
        name: 'Sepatu Kets / Trekking Nyaman',
        reason: 'Memberi pijakan mantap di pasir dan tangga kawah—hindari sandal jepit atau sepatu berhak tinggi.',
      },
    ],
    extraTipTitle: '💡 Tips Tambahan: Akses Tol Terdekat untuk Road Trip Mobil Pribadi & Hotel Cemoro Lawang',
    extraTipContent:
      'Private Trip Start Sukapura Probolinggo paling ideal bagi keluarga atau rombongan yang road trip membawa mobil pribadi lewat Tol Trans Jawa exit Probolinggo maupun tamu yang sudah menginap di hotel sekitar Sukapura & Cemoro Lawang. Mobil pribadi Anda dapat diparkir aman di rest area resmi Basecamp Sukapura tanpa harus menanjak jalur ekstrem dengan mobil kota.',
    conclusion:
      'Dengan tarif reguler Rp1.000.000 per jeep/grup untuk 1–6 peserta (1 atau 6 orang harga sama saja), sudah termasuk tiket masuk TNBTS WNI, BBM, dan driver lokal Sukapura, eksplorasi Bromo Anda jauh lebih ringkas dan hemat. Hitung estimasi lengkap serta opsi dokumentasi dan drone langsung di Kalkulator Private Start Sukapura Probolinggo.',
    ctaButton: 'Hitung & Booking via Kalkulator Private Start Sukapura',
    tags: [
      'Private Trip Start Sukapura',
      'Sewa Jeep Bromo Probolinggo',
      'Harga Jeep Sukapura',
      'Jeep Bromo Cemoro Lawang',
      'Sewa Jeep Bromo 1-6 Orang',
      'Itinerary Bromo Sukapura',
    ],
  },

  en: {
    id: 'private-trip-bromo-start-sukapura',
    slug: 'private-trip-bromo-start-sukapura-probolinggo-harga-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-sukapura',
    title: 'Private Trip Bromo Start Sukapura Probolinggo: Prices, Itinerary & Facilities',
    metaDescription:
      'Complete guide for Private Trip Bromo Start Sukapura Probolinggo from Rp1.000.000 per jeep/group for 1–6 participants (same flat rate for 1 or 6 people), daily Sunrise 03:00 WIB or Panorama 11:00 WIB departures, optional photo/video +Rp500.000 & drone +Rp1.500.000.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 26, 2026',
    readTime: '5 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    heroImage: imgPrivateSukapura,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private 4×4 Bromo Jeep Start Sukapura Probolinggo — Flat rate per jeep / per group for 1–6 participants',
    introduction: [
      'Driving your own car via the Trans-Java Probolinggo toll exit or already staying near Sukapura and Cemoro Lawang? Our Private Trip Bromo Start Sukapura Probolinggo is the fastest, closest, and best-value way to explore Mount Bromo. Rent one 100% private Toyota Land Cruiser FJ40 4×4 Jeep with daily departures for either Sunrise (03:00 WIB) or Daytime Panorama (11:00 WIB).',
      'This guide breaks down the flat per-jeep price for 1–6 participants (whether 1 or 6 people ride, the rate is identical), optional photography and drone add-ons, inclusions/exclusions, the 02:30–10:00 WIB schedule, and cold-weather packing essentials.',
    ],
    pricingSectionTitle: '💰 Private Trip Start Sukapura Probolinggo Prices & Add-Ons',
    pricingSectionSubtitle:
      'Flat price per jeep / per group (max 6 guests without photographer, or 5 guests with photographer) — 1 person or 6 people pay the exact same rate!',
    normalPrice: 'Rp1.200.000',
    promoPrice: 'Rp1.000.000',
    priceUnitLabel: '/ jeep (1–6 pax)',
    seasonNote: 'Regular / low season flat rate per jeep (High Season Rp1.200.000 • Sunrise 03:00 / Panorama 11:00)',
    savingsBadge: 'SAVE Rp200.000 • 1–6 PAX',
    groupPriceTitle: '🚐 Flat Price Per Jeep / Per Group (Max 6 Participants)',
    groupPriceNote:
      'The Rp1.000.000 rate covers 1–6 participants per jeep/group (not per person). Whether 1 person or 6 people travel together, the total price stays the same! Adding documentation (+Rp500.000) sets capacity to max 5 guests + 1 photographer.',
    addons: [
      {
        symbol: '📸',
        label: 'Documentation Add-On',
        price: '+Rp500.000',
        detail: 'Professional DSLR/Mirrorless photo & video coverage (total Rp1.500.000 regular / Rp1.700.000 high season, max 5 pax + 1 photographer).',
      },
      {
        symbol: '🚁',
        label: 'Drone Add-On',
        price: '+Rp1.500.000',
        detail: 'Cinematic aerial drone footage across Sunrise Point, Sea of Sand & Teletubbies Savanna.',
      },
    ],
    facilitiesSectionTitle: '✅ Facilities (Include & Exclude)',
    includeTitle: '✅ Included',
    includeItems: [
      '100% Private 4×4 Mount Bromo Jeep (Toyota Land Cruiser FJ40, fits 1–6 participants).',
      'Experienced local Sukapura driver & route guide.',
      'Round-trip Jeep fuel (BBM) for the full Bromo itinerary.',
      'Official Mount Bromo National Park (TNBTS WNI) entrance tickets for all guests.',
      'Official tourism area retribution & basecamp parking fees.',
    ],
    excludeTitle: '❌ Excluded',
    excludeItems: [
      'Transportation to Sukapura Basecamp (self-arranged / private car).',
      'Horse rental across the Sea of Sand (optional; walkable).',
      'Personal meals and drinks.',
      'Paid public restroom fees.',
      'Foreign national (WNA) entrance ticket surcharge Rp255.000 / person.',
    ],
    itinerarySectionTitle: '🕚 Full Itinerary (Chronological Order)',
    itinerarySectionSubtitle:
      'Compact 8-hour private tour — available daily for Sunrise (03:00 WIB) or Daytime Panorama (11:00 WIB).',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '02:30 – 03:00 WIB',
        title: 'Meet at Sukapura Basecamp / Local Hotel Pickup',
        description:
          'Park your private car safely at our official Sukapura rest area, meet your local driver, and board your private 4×4 Jeep.',
      },
      {
        symbol: '🌅',
        time: '03:45 – 06:00 WIB',
        title: 'Sunrise Point',
        description:
          'Experience the iconic golden Mount Bromo dawn from top viewpoints at an unhurried pace.',
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
        time: '10:00 WIB',
        title: 'Return to Sukapura Basecamp',
        description:
          'Tour concludes with smooth drop-off back at Sukapura Jeep Basecamp or your Sukapura / Cemoro Lawang hotel.',
      },
    ],
    pickupSectionTitle: '📍 Official Sukapura Probolinggo Meeting & Pickup Points',
    pickupLead:
      '📍 Direct meeting at Sukapura Jeep Basecamp (Probolinggo Regency) or pickup at hotels around Sukapura & Cemoro Lawang.',
    pickupPopularTitle: 'Popular Meeting Points:',
    pickupPoints: [
      'Sukapura Jeep Basecamp, Probolinggo Regency (secure official parking available for private vehicles).',
      'Hotels, Homestays & Lodges around Sukapura and Cemoro Lawang.',
    ],
    gearSectionTitle: '🧥 Essential Packing List (2°C – 10°C)',
    gearSectionSubtitle:
      'Pre-dawn temperatures on the Bromo rim are freezing. Pack these 4 essentials:',
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
        reason: 'Provides steady footing on sand and stairs—avoid flip-flops or heels.',
      },
    ],
    extraTipTitle: '💡 Extra Tip: Closest Toll-Road Access for Self-Drive Road Trips',
    extraTipContent:
      'Private Trip Start Sukapura is ideal for families driving via the Probolinggo toll road or guests staying near Cemoro Lawang. Leave your city car parked safely at our official Sukapura rest area and let our local 4×4 FJ40 handle the steep caldera terrain.',
    conclusion:
      'Book directly using our Private Start Sukapura Calculator to choose Sunrise or Panorama departure, add optional photography or drone coverage, and lock in the flat rate of Rp1.000.000 per jeep/group.',
    ctaButton: 'Calculate & Book via Private Start Sukapura Calculator',
    tags: [
      'Private Trip Start Sukapura',
      'Bromo Jeep Rental Probolinggo',
      'Sukapura Jeep Prices',
      'Bromo Jeep Cemoro Lawang',
      'Bromo Jeep 1-6 Pax',
      'Bromo Itinerary Sukapura',
    ],
  },

  zh: {
    id: 'private-trip-bromo-start-sukapura',
    slug: 'private-trip-bromo-start-sukapura-probolinggo-harga-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-sukapura',
    title: 'Private Trip 庞越 Sukapura 出发布罗莫：价格、行程与设施完整指南',
    metaDescription:
      '庞越 Sukapura 大本营出发布罗莫私人吉普团攻略：平季整车价 Rp1.000.000/辆（适用 1–6 人，1 人或 6 人同价），每日可选 03:00 日出团或 11:00 全景团，含摄影与无人机加购价、大本营与 Cemoro Lawang 酒店接送说明。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月26日',
    readTime: '5 分钟阅读',
    category: 'tips_wisata',
    categoryLabel: '攻略与指南',
    heroImage: imgPrivateSukapura,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 庞越 Sukapura 出发专属四驱布罗莫吉普 — 每辆 / 每团 1–6 人同价一口价',
    introduction: [
      '自驾经高速由庞越（Probolinggo）出口前往布罗莫，或已下榻在 Sukapura 及 Cemoro Lawang 周边酒店？选择 Private Trip Start Sukapura Probolinggo 私人吉普包车最快捷实惠！独享 1 辆 100% 独立四驱丰田 FJ40 吉普车，每日可选 03:00 日出团或 11:00 白天全景团。',
      '本文完整汇总最新整车一口价（1–6 人同价）、摄影与无人机加购价、费用包含/不含及 02:30–10:00 行程安排。',
    ],
    pricingSectionTitle: '💰 庞越 Sukapura 出发私人吉普价格与方案',
    pricingSectionSubtitle: '按辆吉普车 / 按团一口价（最多 6 人；含摄影师最多 5 人）—— 1 人或 6 人出行同价！',
    normalPrice: 'Rp1.200.000',
    promoPrice: 'Rp1.000.000',
    priceUnitLabel: '/ 辆吉普车（1–6人）',
    seasonNote: '平季整车特惠价（旺季 Rp1.200.000 • 可选 03:00 日出或 11:00 全景）',
    savingsBadge: '立省 Rp200.000 • 1–6 人同价',
    groupPriceTitle: '🚐 按辆吉普车 / 按团一口价（最多 6 位团员）',
    groupPriceNote:
      'Rp1.000.000 为每辆吉普车整包价格，适用于 1–6 位团员（非按人头计费）。无论 1 人独行还是 6 人同行，价格完全相同！加购摄影跟拍（+Rp500.000）后最多容纳 5 位游客 + 1 名摄影师。',
    addons: [
      {
        symbol: '📸',
        label: '加购专业跟拍 (Dokumentasi)',
        price: '+Rp500.000',
        detail: '专业单反/微单照片与视频跟拍（平季总价 Rp1.500.000 / 旺季 Rp1.700.000，最多 5 位游客）。',
      },
      {
        symbol: '🚁',
        label: '加购无人机航拍 (Drone)',
        price: '+Rp1.500.000',
        detail: '日出点、沙海与高山草原电影级航拍素材。',
      },
    ],
    facilitiesSectionTitle: '✅ 费用说明（包含与不含）',
    includeTitle: '✅ 费用包含 (Include)',
    includeItems: [
      '1 辆 100% 独立官方四驱布罗莫越野吉普车（最多容纳 6 人）。',
      '熟悉山路的 Sukapura 当地专业司机。',
      '全程吉普车油费 (BBM)。',
      '全体团员布罗莫国家公园门票 (TNBTS WNI)。',
      '景区官方管理费及大本营停车费。',
    ],
    excludeTitle: '❌ 费用不含 (Exclude)',
    excludeItems: [
      '前往 Sukapura 吉普大本营的交通（由游客自行安排或自驾）。',
      '火山沙海骑马费用（自愿选择）。',
      '个人餐饮费用。',
      '景区付费公共洗手间。',
      '外籍游客 (WNA) 门票差价 Rp255.000 / 人。',
    ],
    itinerarySectionTitle: '🕚 完整时间行程表（按顺序）',
    itinerarySectionSubtitle: '全程约 8 小时紧凑高效，支持每日 03:00 日出或 11:00 白天全景出发。',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '02:30 – 03:00 WIB',
        title: 'Sukapura 大本营集合 / 周边酒店接车',
        description: '私家车可安全停放于 Sukapura 官方休息区，简要说明后登上专属四驱吉普出发。',
      },
      {
        symbol: '🌅',
        time: '03:45 – 06:00 WIB',
        title: '日出观景台 (Sunrise Point)',
        description: '在最佳观景点悠闲欣赏布罗莫金色日出，无需匆忙。',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: '深度游览五大经典景点',
        description: '游览 Widodaren 山丘、布罗莫火山口与巴托克火山、Pura Poten 印度庙、耳语沙海与天线宝宝草原。',
      },
      {
        symbol: '🚐',
        time: '10:00 WIB',
        title: '返回 Sukapura 大本营',
        description: '行程结束，送回 Sukapura 吉普大本营或您在 Sukapura / Cemoro Lawang 的酒店。',
      },
    ],
    pickupSectionTitle: '📍 官方集合与接送范围（庞越 Sukapura）',
    pickupLead: '📍 主集合点位于庞越县 Sukapura 吉普大本营，同时支持 Sukapura 与 Cemoro Lawang 周边酒店接送。',
    pickupPopularTitle: '热门集合点：',
    pickupPoints: [
      '庞越县 Sukapura 吉普大本营（提供私家车官方安全停车场）。',
      'Sukapura 镇及 Cemoro Lawang 周边酒店与民宿。',
    ],
    gearSectionTitle: '🧥 必备防寒装备（气温 2°C – 10°C）',
    gearSectionSubtitle: '布罗莫凌晨气温极低，请备齐以下 4 件装备：',
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
    extraTipTitle: '💡 贴心推荐：自驾游客与 Cemoro Lawang 住客首选',
    extraTipContent:
      '自驾经高速前往庞越的家庭及已入住 Sukapura/Cemoro Lawang 的游客最推荐此方案，私家车可直接停在官方休息区安全保管，换乘四驱吉普轻松畅游火山口。',
    conclusion:
      '立即打开 Sukapura 私人吉普计算器选择日期与摄影/无人机加购项，锁定平季整车价 Rp1.000.000（1–6 人同价）！',
    ctaButton: '打开 Sukapura 专车计算器立即预订',
    tags: [
      'Private Trip Sukapura 出发',
      '庞越布罗莫吉普价格',
      'Cemoro Lawang 租吉普',
      '布罗莫吉普1-6人同价',
      '布罗莫自驾攻略',
      'Sukapura 私人团',
    ],
  },
};
