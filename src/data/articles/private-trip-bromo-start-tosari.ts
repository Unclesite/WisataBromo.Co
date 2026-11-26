import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgPrivateTosari from '../../assets/images/tosari_jeep_card.png';

export interface TosariAddonPrice {
  symbol: string;
  label: string;
  price: string;
  detail: string;
}

export interface TosariItineraryStep {
  symbol: string;
  time: string;
  title: string;
  description: string;
}

export interface TosariGearItem {
  symbol: string;
  name: string;
  reason: string;
}

export interface LocalizedTosariTripArticleContent {
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
  addons: TosariAddonPrice[];
  facilitiesSectionTitle: string;
  includeTitle: string;
  includeItems: string[];
  excludeTitle: string;
  excludeItems: string[];
  itinerarySectionTitle: string;
  itinerarySectionSubtitle: string;
  itinerarySteps: TosariItineraryStep[];
  pickupSectionTitle: string;
  pickupLead: string;
  pickupPopularTitle: string;
  pickupPoints: string[];
  gearSectionTitle: string;
  gearSectionSubtitle: string;
  gearItems: TosariGearItem[];
  extraTipTitle: string;
  extraTipContent: string;
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_PRIVATE_TRIP_BROMO_START_TOSARI: Record<
  SupportedLanguage,
  LocalizedTosariTripArticleContent
> = {
  id: {
    id: 'private-trip-bromo-start-tosari-harga-2026',
    slug: 'private-trip-bromo-start-tosari-pasuruan-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-wonokitri',
    title: 'Private Trip Bromo Start Tosari Pasuruan: Harga 2026, Itinerary, dan Fasilitas',
    metaDescription:
      'Panduan lengkap Private Trip Bromo Start Tosari Pasuruan Harga 2026 paling hemat mulai Rp950.000 per jeep/grup untuk 1–6 peserta (1 atau 6 orang harga sama saja), akses terdekat ke Sunrise Point Penanjakan, opsi Sunrise 03:00 WIB atau Panorama 11:00 WIB, dokumentasi +Rp500.000 & drone +Rp1.500.000.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '26 November 2026',
    readTime: '5 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgPrivateTosari,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private Jeep 4×4 Bromo Start Tosari Pasuruan — Harga flat paling hemat per jeep / per grup untuk 1–6 peserta',
    introduction: [
      'Datang dari arah Surabaya atau Pasuruan menggunakan kendaraan pribadi, atau sedang menginap di hotel/resort sejuk kawasan Tosari dan Desa Wonokitri? Layanan Private Trip Bromo Start Tosari Pasuruan adalah gerbang dengan akses jalan aspal paling mulus sekaligus jarak terdekat menuju Sunrise Point Penanjakan! Anda menyewa 1 unit Jeep 4×4 Toyota Land Cruiser FJ40 secara 100% privat tanpa digabung rombongan lain, berangkat setiap hari dengan pilihan Paket Sunrise (03:00 WIB) atau Paket Panorama Siang (11:00 WIB).',
      'Panduan Harga 2026 ini merangkum tarif flat paling ekonomis Rp950.000 per jeep untuk 1–6 peserta (berangkat 1 orang maupun 6 orang harganya tetap sama saja), tambahan dokumentasi & drone, fasilitas lengkap include/exclude, itinerary 02:30 – 10:00 WIB, meeting point Basecamp Tosari, hingga perlengkapan wajib suhu 2°C – 10°C.',
    ],
    pricingSectionTitle: '💰 Harga & Paket Private Trip Start Tosari Pasuruan (Update 2026)',
    pricingSectionSubtitle:
      'Harga flat paling hemat per jeep / per grup (maksimal 6 peserta tanpa dokumentasi atau 5 peserta plus fotografer) — berangkat 1 orang maupun 6 orang, harganya sama saja!',
    normalPrice: 'Rp1.150.000',
    promoPrice: 'Rp950.000',
    priceUnitLabel: '/ jeep (1–6 peserta)',
    seasonNote: 'Harga reguler/low season per jeep (High Season Rp1.150.000 • Sunrise 03:00 WIB / Panorama 11:00 WIB)',
    savingsBadge: 'HEMAT Rp200.000 • PALING EKONOMIS',
    groupPriceTitle: '🚐 Harga Per Jeep / Per Grup (Maksimal 6 Peserta)',
    groupPriceNote:
      'Tarif Rp950.000 berlaku flat untuk 1–6 peserta (harga per jeep atau per grup, bukan per orang). Jadi berangkat 1 orang maupun rombongan 6 orang, harganya tetap sama saja! Jika menambah dokumentasi (+Rp500.000), kapasitas maksimal menjadi 5 peserta + 1 fotografer.',
    addons: [
      {
        symbol: '📸',
        label: 'Tambahan Dokumentasi',
        price: '+Rp500.000',
        detail: 'Dokumentasi foto & video DSLR/Mirrorless profesional (total Rp1.450.000 reguler / Rp1.650.000 high season, maks 5 peserta + 1 fotografer).',
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
      'Driver profesional lokal suku Tengger Tosari yang ramah dan hafal medan.',
      'BBM (bahan bakar minyak) Jeep selama seluruh rangkaian tour PP.',
      'Tiket masuk resmi kawasan wisata Gunung Bromo (TNBTS WNI) untuk seluruh peserta.',
      'Retribusi resmi kawasan wisata & parkir Basecamp Tosari.',
    ],
    excludeTitle: '❌ Exclude (Tidak Termasuk)',
    excludeItems: [
      'Transportasi menuju Basecamp Tosari (disediakan mandiri oleh peserta / mobil pribadi).',
      'Sewa kuda menuju kaki tangga Kawah Bromo (opsional, bisa ditempuh dengan jalan kaki).',
      'Makan dan minuman pribadi selama perjalanan.',
      'Biaya toilet umum berbayar di kawasan Bromo.',
      'Surcharge tiket masuk wisatawan mancanegara (WNA) Rp255.000 / orang (jika ada peserta WNA).',
    ],
    itinerarySectionTitle: '🕚 Itinerary Lengkap (Urut dari Basecamp hingga Selesai)',
    itinerarySectionSubtitle:
      'Durasi sekitar 8 jam dengan waktu tempuh paling singkat ke Sunrise Point — tersedia jadwal Sunrise (03:00 WIB) maupun Panorama Siang (11:00 WIB).',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '02:30 – 03:00 WIB',
        title: 'Meet Up di Basecamp Tosari / Jemput Hotel Sekitar',
        description:
          'Parkir aman kendaraan pribadi Anda di rest area resmi Basecamp Jeep Tosari, briefing singkat bersama driver lokal Tengger, lalu naik ke armada Jeep 4×4 privat.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Sunrise Point',
        description:
          'Menuju spot panorama sunrise legendaris kaldera Tengger (Penanjakan / Kingkong / Bukit Cinta / Prau) dengan waktu tempuh paling dekat dan santai.',
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
        title: 'Kembali ke Basecamp Tosari',
        description:
          'Rangkaian tour selesai, pengantaran kembali ke rest area / Basecamp Jeep Tosari atau hotel/resort Anda di sekitar Tosari & Wonokitri.',
      },
    ],
    pickupSectionTitle: '📍 Lokasi Meeting Point & Penjemputan Resmi Tosari Pasuruan',
    pickupLead:
      '📍 Meeting point utama berada di Basecamp Jeep Tosari Kab. Pasuruan (jalur aspal paling mulus dari arah Pasuruan / Surabaya) serta penjemputan langsung di hotel & resort sekitar Tosari–Wonokitri.',
    pickupPopularTitle: 'Titik Kumpul & Jemput Populer:',
    pickupPoints: [
      'Basecamp Jeep Tosari Kab. Pasuruan (area parkir resmi & aman untuk kendaraan pribadi).',
      'Hotel, Resort, Villa & Homestay di sekitar Kecamatan Tosari & Desa Wonokitri Pasuruan.',
    ],
    gearSectionTitle: '🧥 Perlengkapan Wajib (Suhu 2°C – 10°C)',
    gearSectionSubtitle:
      'Kawasan Wonokitri–Penanjakan berada di ketinggian pegunungan dengan suhu fajar sangat dingin. Siapkan 4 perlengkapan penting berikut:',
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
    extraTipTitle: '💡 Tips Tambahan: Jalur Aspal Mulus & Jarak Terdekat ke Sunrise Point Penanjakan',
    extraTipContent:
      'Private Trip Start Tosari Pasuruan adalah rute favorit wisatawan keluarga yang membawa mobil pribadi dari arah Surabaya/Pasuruan maupun tamu yang menginap di resort kawasan Tosari & Wonokitri. Selain tarif jeep paling hemat, waktu tempuh menuju Penanjakan sangat singkat sehingga anak-anak dan orang tua tetap bugar!',
    conclusion:
      'Dengan tarif reguler 2026 paling ekonomis Rp950.000 per jeep/grup untuk 1–6 peserta (1 atau 6 orang harga sama saja), sudah termasuk tiket masuk TNBTS WNI, BBM, dan driver lokal Tengger Tosari, liburan Bromo Anda jauh lebih efisien dan nyaman. Hitung estimasi lengkap beserta opsi dokumentasi dan drone langsung di Kalkulator Private Start Tosari Pasuruan.',
    ctaButton: 'Hitung & Booking via Kalkulator Private Start Tosari',
    tags: [
      'Private Trip Start Tosari',
      'Sewa Jeep Bromo Pasuruan',
      'Harga Jeep Tosari 2026',
      'Jeep Bromo Wonokitri',
      'Sewa Jeep Bromo 1-6 Orang',
      'Itinerary Bromo Tosari',
    ],
  },

  en: {
    id: 'private-trip-bromo-start-tosari-harga-2026',
    slug: 'private-trip-bromo-start-tosari-pasuruan-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-wonokitri',
    title: 'Private Trip Bromo Start Tosari Pasuruan: 2026 Prices, Itinerary & Facilities',
    metaDescription:
      'Complete 2026 guide for Private Trip Bromo Start Tosari Pasuruan — best value from Rp950.000 per jeep/group for 1–6 participants (same flat rate for 1 or 6 people), shortest drive to Penanjakan Sunrise Point, daily Sunrise 03:00 WIB or Panorama 11:00 WIB, optional photo/video +Rp500.000 & drone +Rp1.500.000.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 26, 2026',
    readTime: '5 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    heroImage: imgPrivateTosari,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private 4×4 Bromo Jeep Start Tosari Pasuruan — Most economical flat rate per jeep / per group for 1–6 participants',
    introduction: [
      'Driving from Surabaya or Pasuruan in your own car, or staying at a mountain resort around Tosari and Wonokitri Village? Our Private Trip Bromo Start Tosari Pasuruan offers the smoothest paved access road and the shortest drive directly up to Mount Bromo’s legendary Penanjakan Sunrise Point! Rent one 100% private Toyota Land Cruiser FJ40 4×4 Jeep with daily Sunrise (03:00 WIB) or Daytime Panorama (11:00 WIB) departures.',
      'This 2026 guide covers our lowest flat per-jeep price of Rp950.000 for 1–6 participants (whether 1 or 6 people join, the price is identical), optional photo/video and drone add-ons, inclusions/exclusions, the 02:30–10:00 WIB schedule, and cold-weather packing tips.',
    ],
    pricingSectionTitle: '💰 2026 Private Trip Start Tosari Pasuruan Prices & Add-Ons',
    pricingSectionSubtitle:
      'Lowest flat rate per jeep / per group (max 6 guests without photographer, or 5 guests with photographer) — 1 person or 6 people pay the exact same rate!',
    normalPrice: 'Rp1.150.000',
    promoPrice: 'Rp950.000',
    priceUnitLabel: '/ jeep (1–6 pax)',
    seasonNote: 'Regular / low season flat rate per jeep (High Season Rp1.150.000 • Sunrise 03:00 / Panorama 11:00)',
    savingsBadge: 'SAVE Rp200.000 • BEST VALUE GATE',
    groupPriceTitle: '🚐 Flat Price Per Jeep / Per Group (Max 6 Participants)',
    groupPriceNote:
      'The Rp950.000 rate covers 1–6 participants per jeep/group (not per person). Whether 1 person or 6 people ride together, the price stays identical! Adding documentation (+Rp500.000) sets capacity to max 5 guests + 1 photographer.',
    addons: [
      {
        symbol: '📸',
        label: 'Documentation Add-On',
        price: '+Rp500.000',
        detail: 'Professional DSLR/Mirrorless photo & video coverage (total Rp1.450.000 regular / Rp1.650.000 high season, max 5 pax + 1 photographer).',
      },
      {
        symbol: '🚁',
        label: 'Drone Add-On',
        price: '+Rp1.500.000',
        detail: 'Cinematic aerial drone footage over Sunrise Point, Sea of Sand & Teletubbies Savanna.',
      },
    ],
    facilitiesSectionTitle: '✅ Facilities (Include & Exclude)',
    includeTitle: '✅ Included',
    includeItems: [
      '100% Private 4×4 Mount Bromo Jeep (Toyota Land Cruiser FJ40, fits 1–6 participants).',
      'Experienced local Tenggerese Tosari driver & route guide.',
      'Round-trip Jeep fuel (BBM) for the full Bromo itinerary.',
      'Official Mount Bromo National Park (TNBTS WNI) entrance tickets for all guests.',
      'Official tourism area retribution & basecamp parking fees.',
    ],
    excludeTitle: '❌ Excluded',
    excludeItems: [
      'Transportation to Tosari Basecamp (self-arranged / private car).',
      'Horse rental across the Sea of Sand (optional; walkable).',
      'Personal meals and drinks.',
      'Paid public restroom fees.',
      'Foreign national (WNA) entrance ticket surcharge Rp255.000 / person.',
    ],
    itinerarySectionTitle: '🕚 Full Itinerary (Chronological Order)',
    itinerarySectionSubtitle:
      'Compact 8-hour tour with the shortest climb to Penanjakan Sunrise Point — available daily for Sunrise (03:00 WIB) or Panorama (11:00 WIB).',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '02:30 – 03:00 WIB',
        title: 'Meet at Tosari Basecamp / Local Hotel Pickup',
        description:
          'Park your private car safely at Tosari Jeep Basecamp, enjoy a quick briefing with your local Tengger driver, and board your private 4×4 Jeep.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Sunrise Point',
        description:
          'Enjoy the shortest uphill drive to Mount Bromo’s legendary Tengger caldera sunrise viewpoints.',
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
        title: 'Return to Tosari Basecamp',
        description:
          'Tour concludes with smooth drop-off back at Tosari Jeep Basecamp or your Tosari / Wonokitri hotel.',
      },
    ],
    pickupSectionTitle: '📍 Official Tosari Pasuruan Meeting & Pickup Points',
    pickupLead:
      '📍 Primary meeting point at Tosari Jeep Basecamp (Pasuruan Regency) plus direct pickup from hotels, resorts & villas around Tosari & Wonokitri.',
    pickupPopularTitle: 'Popular Meeting Points:',
    pickupPoints: [
      'Tosari Jeep Basecamp, Pasuruan Regency (secure official parking available for private cars).',
      'Hotels, Resorts, Villas & Homestays around Tosari & Wonokitri Village, Pasuruan.',
    ],
    gearSectionTitle: '🧥 Essential Packing List (2°C – 10°C)',
    gearSectionSubtitle:
      'Pre-dawn highland temperatures near Wonokitri and Penanjakan are freezing. Pack these 4 essentials:',
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
        reason: 'Essential across the volcanic Sea of Sand and Crater stairs.',
      },
      {
        symbol: '👟',
        name: 'Sneakers / Comfortable Trekking Shoes',
        reason: 'Provides steady grip on volcanic sand and stairs—avoid flip-flops or heels.',
      },
    ],
    extraTipTitle: '💡 Extra Tip: Smoothest Road Access & Shortest Drive to Sunrise Point',
    extraTipContent:
      'Private Trip Start Tosari Pasuruan is the favorite northern gate for families driving from Surabaya or staying in Tosari/Wonokitri resorts—offering the smoothest asphalt approach, shortest drive to Penanjakan, and the most budget-friendly per-jeep rate!',
    conclusion:
      'Book directly using our Private Start Tosari Calculator to select Sunrise or Panorama departure, add optional photography or drone coverage, and lock in the 2026 flat rate of Rp950.000 per jeep/group.',
    ctaButton: 'Calculate & Book via Private Start Tosari Calculator',
    tags: [
      'Private Trip Start Tosari',
      'Bromo Jeep Rental Pasuruan',
      'Tosari Jeep Prices 2026',
      'Bromo Jeep Wonokitri',
      'Bromo Jeep 1-6 Pax',
      'Bromo Itinerary Tosari',
    ],
  },

  zh: {
    id: 'private-trip-bromo-start-tosari-harga-2026',
    slug: 'private-trip-bromo-start-tosari-pasuruan-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-wonokitri',
    title: 'Private Trip 岩望 Tosari 出发布罗莫：2026 价格、行程与设施完整指南',
    metaDescription:
      '2026 岩望 Tosari 大本营出发布罗莫私人吉普团攻略：最实惠平季整车价 Rp950.000/辆（适用 1–6 人，1 人或 6 人同价），距 Penanjakan 日出观景台最近、柏油路况最平整，每日可选 03:00 日出或 11:00 全景。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月26日',
    readTime: '5 分钟阅读',
    category: 'tips_wisata',
    categoryLabel: '攻略与指南',
    heroImage: imgPrivateTosari,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 岩望 Tosari 出发专属四驱布罗莫吉普 — 最划算每辆 / 每团 1–6 人同价一口价',
    introduction: [
      '从泗水或岩望（Pasuruan）方向自驾前往，或已入住 Tosari 及 Wonokitri 山谷度假村？选择 Private Trip Start Tosari Pasuruan 是路况最平整、距 Penanjakan 日出观景台车程最短且性价比最高的官方入口！独享 1 辆 100% 独立四驱丰田 FJ40 吉普车，每日提供 03:00 日出团与 11:00 白天全景团。',
      '本文完整整理 2026 最划算整车报价 Rp950.000（1–6 人同价）、摄影与无人机加购价、费用包含/不含及 02:30–10:00 行程安排。',
    ],
    pricingSectionTitle: '💰 2026 岩望 Tosari 出发私人吉普价格与方案',
    pricingSectionSubtitle: '最划算每辆吉普车 / 按团一口价（最多 6 人；含摄影师最多 5 人）—— 1 人或 6 人出行同价！',
    normalPrice: 'Rp1.150.000',
    promoPrice: 'Rp950.000',
    priceUnitLabel: '/ 辆吉普车（1–6人）',
    seasonNote: '平季整车特惠价（旺季 Rp1.150.000 • 可选 03:00 日出或 11:00 全景）',
    savingsBadge: '立省 Rp200.000 • 性价比最高',
    groupPriceTitle: '🚐 按辆吉普车 / 按团一口价（最多 6 位团员）',
    groupPriceNote:
      'Rp950.000 为每辆吉普车整包价格，适用于 1–6 位团员（非按人头计费）。无论 1 人独行还是 6 人同行，价格完全相同！加购摄影跟拍（+Rp500.000）后最多容纳 5 位游客 + 1 名摄影师。',
    addons: [
      {
        symbol: '📸',
        label: '加购专业跟拍 (Dokumentasi)',
        price: '+Rp500.000',
        detail: '专业单反/微单照片与视频跟拍（平季总价 Rp1.450.000 / 旺季 Rp1.650.000，最多 5 位游客）。',
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
      '熟悉地形的 Tosari 腾格尔族专业当地司机。',
      '全程吉普车油费 (BBM)。',
      '全体团员布罗莫国家公园门票 (TNBTS WNI)。',
      '景区官方管理费及 Tosari 大本营停车费。',
    ],
    excludeTitle: '❌ 费用不含 (Exclude)',
    excludeItems: [
      '前往 Tosari 吉普大本营的交通（由游客自行安排或自驾）。',
      '火山沙海骑马费用（自愿选择）。',
      '个人餐饮费用。',
      '景区付费公共洗手间。',
      '外籍游客 (WNA) 门票差价 Rp255.000 / 人。',
    ],
    itinerarySectionTitle: '🕚 完整时间行程表（按顺序）',
    itinerarySectionSubtitle: '全程约 8 小时，距日出点最近省时，支持每日 03:00 日出或 11:00 全景出发。',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '02:30 – 03:00 WIB',
        title: 'Tosari 大本营集合 / 周边酒店接车',
        description: '私家车安全停放于 Tosari 官方休息区，简要说明后登上专属四驱吉普出发。',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: '日出观景台 (Sunrise Point)',
        description: '以最短山路车程直达布罗莫经典日出观景点，轻松守候金色日出。',
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
        title: '返回 Tosari 大本营',
        description: '行程结束，送回 Tosari 吉普大本营或您在 Tosari / Wonokitri 的度假酒店。',
      },
    ],
    pickupSectionTitle: '📍 官方集合与接送范围（岩望 Tosari）',
    pickupLead: '📍 主集合点位于岩望县 Tosari 吉普大本营，同时支持 Tosari 与 Wonokitri 周边酒店、别墅接送。',
    pickupPopularTitle: '热门集合点：',
    pickupPoints: [
      '岩望县 Tosari 吉普大本营（提供私家车官方安全停车场）。',
      'Tosari 镇及 Wonokitri 村周边酒店、度假村与民宿。',
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
    extraTipTitle: '💡 贴心推荐：柏油路最平整、距日出点最近且最实惠',
    extraTipContent:
      'Tosari 入口最受从泗水方向自驾或下榻 Tosari/Wonokitri 度假村的亲子家庭欢迎——进山柏油路平顺、距日出点车程最短，整车吉普价格也是三大入口中最实惠的！',
    conclusion:
      '立即打开 Tosari 私人吉普计算器选择日期与摄影/无人机加购项，锁定 2026 最划算整车价 Rp950.000（1–6 人同价）！',
    ctaButton: '打开 Tosari 专车计算器立即预订',
    tags: [
      'Private Trip Tosari 出发',
      '2026岩望布罗莫吉普价格',
      'Wonokitri 租吉普',
      '布罗莫吉普1-6人同价',
      '布罗莫最省钱入口',
      'Tosari 私人团',
    ],
  },
};
