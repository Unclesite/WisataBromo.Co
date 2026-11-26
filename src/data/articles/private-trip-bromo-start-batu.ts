import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgPrivateBatu from '../../assets/images/vintage_4x4_batu.png';

export interface BatuAddonPrice {
  symbol: string;
  label: string;
  price: string;
  detail: string;
}

export interface BatuItineraryStep {
  symbol: string;
  time: string;
  title: string;
  description: string;
}

export interface BatuGearItem {
  symbol: string;
  name: string;
  reason: string;
}

export interface LocalizedBatuTripArticleContent {
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
  addons: BatuAddonPrice[];
  facilitiesSectionTitle: string;
  includeTitle: string;
  includeItems: string[];
  excludeTitle: string;
  excludeItems: string[];
  itinerarySectionTitle: string;
  itinerarySectionSubtitle: string;
  itinerarySteps: BatuItineraryStep[];
  pickupSectionTitle: string;
  pickupLead: string;
  pickupPopularTitle: string;
  pickupPoints: string[];
  gearSectionTitle: string;
  gearSectionSubtitle: string;
  gearItems: BatuGearItem[];
  extraTipTitle: string;
  extraTipContent: string;
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_PRIVATE_TRIP_BROMO_START_BATU: Record<
  SupportedLanguage,
  LocalizedBatuTripArticleContent
> = {
  id: {
    id: 'private-trip-bromo-start-batu-harga-2026',
    slug: 'private-trip-bromo-start-kota-batu-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-batu',
    title: 'Private Trip Bromo Start Kota Batu: Harga 2026, Itinerary, dan Fasilitas',
    metaDescription:
      'Panduan lengkap Private Trip Bromo Start Kota Batu Harga 2026 mulai Rp1.800.000 per jeep/grup untuk 1–6 peserta (1 atau 6 orang harga sama saja), penjemputan door-to-door di hotel, resort & villa Kota Wisata Batu, opsi dokumentasi +Rp500.000 & drone +Rp1.500.000, itinerary 23:00–13:00 WIB.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '26 November 2026',
    readTime: '5 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgPrivateBatu,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private Jeep 4×4 Bromo Start Kota Wisata Batu — Harga flat per jeep / per grup untuk 1–6 peserta',
    introduction: [
      'Sedang berlibur atau staycation di hotel, resort, maupun villa sejuk Kota Wisata Batu dan ingin melanjutkan petualangan sunrise ke Gunung Bromo? Layanan Private Trip Bromo Start Kota Batu menawarkan penjemputan langsung door-to-door di depan akomodasi Anda tanpa perlu berpindah ke Kota Malang terlebih dahulu. Panduan Harga 2026 ini merangkum tarif terbaru per jeep untuk 1–6 peserta (berangkat 1 orang maupun 6 orang harganya tetap sama saja), tambahan dokumentasi & drone, fasilitas lengkap, hingga itinerary dari tengah malam hingga siang hari.',
      'Simak rincian paket all-in tanpa digabung peserta lain, area penjemputan resmi seluruh Kota Wisata Batu, serta perlengkapan wajib menghadapi suhu 2°C – 10°C sebelum melakukan pemesanan langsung melalui Kalkulator Private Start Kota Batu.',
    ],
    pricingSectionTitle: '💰 Harga & Paket Private Trip Start Kota Batu (Update 2026)',
    pricingSectionSubtitle:
      'Harga flat per jeep / per grup (maksimal 6 peserta tanpa dokumentasi atau 5 peserta plus fotografer) — berangkat 1 orang maupun 6 orang, harganya sama saja!',
    normalPrice: 'Rp2.100.000',
    promoPrice: 'Rp1.800.000',
    priceUnitLabel: '/ jeep (1–6 peserta)',
    seasonNote: 'Harga reguler/low season per jeep / per grup (High Season Rp2.100.000 • booking via Kalkulator Private Start Kota Batu)',
    savingsBadge: 'HEMAT Rp300.000 • 1–6 PESERTA',
    groupPriceTitle: '🚐 Harga Per Jeep / Per Grup (Maksimal 6 Peserta)',
    groupPriceNote:
      'Tarif Rp1.800.000 berlaku flat untuk 1–6 peserta (harga per jeep atau per grup, bukan per orang). Jadi berangkat 1 orang maupun rombongan 6 orang, harganya tetap sama saja! Jika menambah fotografer (+Rp500.000), kapasitas maksimal menjadi 5 peserta + 1 fotografer.',
    addons: [
      {
        symbol: '📸',
        label: 'Tambahan Dokumentasi',
        price: '+Rp500.000',
        detail: 'Dokumentasi foto & video DSLR/Mirrorless profesional (total Rp2.300.000 reguler / Rp2.600.000 high season, maks 5 peserta + 1 fotografer).',
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
      'Shuttle Car AC penjemputan & pengantaran kembali door-to-door di Kota Wisata Batu PP.',
      'Unit Jeep 4×4 Bromo (Toyota Land Cruiser FJ40) 100% privat & terawat (kapasitas 1–6 peserta).',
      'Tiket masuk resmi kawasan wisata Gunung Bromo (TNBTS WNI) untuk seluruh peserta.',
      'BBM (bahan bakar minyak) untuk shuttle car & jeep selama rangkaian tour.',
      'Driver profesional ramah merangkap pemandu rute.',
      'Retribusi resmi kawasan wisata & biaya parkir.',
    ],
    excludeTitle: '❌ Exclude (Tidak Termasuk)',
    excludeItems: [
      'Sewa kuda menuju kaki tangga Kawah Bromo (opsional, bisa jalan kaki).',
      'Makan dan minuman pribadi selama perjalanan.',
      'Biaya toilet umum berbayar di kawasan Bromo.',
      'Surcharge tiket masuk wisatawan mancanegara (WNA) Rp255.000 / orang (jika ada peserta WNA).',
      'Keperluan dan pengeluaran pribadi lainnya.',
    ],
    itinerarySectionTitle: '🕚 Itinerary Lengkap (Urut dari Penjemputan hingga Kembali)',
    itinerarySectionSubtitle:
      'Durasi sekitar 12 jam dengan penjemputan langsung di villa/resort Kota Batu dan tempo eksplorasi yang santai.',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '23:00 – 01:00 WIB',
        title: 'Penjemputan di Hotel / Villa / Resort Kota Batu',
        description:
          'Driver menjemput langsung di akomodasi Anda di wilayah Kota Wisata Batu (waktu penjemputan disesuaikan dengan lokasi villa/hotel), lalu menuju gerbang Bromo.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Sunrise Point',
        description:
          'Menyaksikan momen Golden Sunrise terbaik Gunung Bromo (Bukit Cinta / Prau / Kingkong / Penanjakan) dengan santai tanpa terburu-buru.',
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
        time: '10:00 – 13:00 WIB',
        title: 'Kembali ke Kota Wisata Batu (Drop Off)',
        description:
          'Perjalanan pulang santai dan pengantaran kembali langsung ke hotel, resort, villa, atau homestay asal Anda di Kota Batu.',
      },
    ],
    pickupSectionTitle: '📍 Lokasi Penjemputan Resmi Kota Wisata Batu',
    pickupLead:
      '📍 Peserta dijemput langsung door-to-door di seluruh Hotel, Resort, Villa, Homestay, maupun alamat rumah di wilayah Kota Wisata Batu.',
    pickupPopularTitle: 'Titik Penjemputan Populer:',
    pickupPoints: [
      'Hotel & Resort kawasan Jatim Park 1, 2, 3, Museum Angkut & Alun-Alun Kota Batu.',
      'Villa, Resort & Homestay kawasan Songgoriti, Selecta, Oro-Oro Ombo, Bumiaji & Junrejo.',
    ],
    gearSectionTitle: '🧥 Perlengkapan Wajib (Suhu 2°C – 10°C)',
    gearSectionSubtitle:
      'Meski Kota Batu sudah sejuk, suhu puncak Bromo menjelang fajar jauh lebih dingin. Siapkan 4 perlengkapan penting berikut:',
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
        reason: 'Sangat berguna saat melintasi Lautan Pasir vulkanik dan area Kawah Bromo.',
      },
      {
        symbol: '👟',
        name: 'Sepatu Kets / Trekking Nyaman',
        reason: 'Memberi pijakan mantap di pasir dan tangga kawah—hindari sandal jepit atau sepatu berhak tinggi.',
      },
    ],
    extraTipTitle: '💡 Tips Tambahan: Pilihan Terbaik untuk Staycation Keluarga & Rombongan Villa Batu',
    extraTipContent:
      'Private Trip Start Kota Batu sangat cocok bagi keluarga dengan anak-anak maupun rombongan kantor yang menginap di villa atau resort Kota Batu dan menginginkan privasi penuh. Anda bisa beristirahat nyaman di villa sebelum dijemput tengah malam, lalu kembali siang hari tepat waktu untuk bersantai di Batu.',
    conclusion:
      'Dengan harga promo reguler 2026 Rp1.800.000 per jeep/grup untuk 1–6 peserta (1 atau 6 orang harga sama saja), penjemputan langsung door-to-door di hotel atau villa Kota Batu, serta jadwal fleksibel 23:00 – 13:00 WIB, liburan Bromo Anda jauh lebih praktis dan privat. Hitung estimasi biaya serta opsi dokumentasi dan drone langsung di Kalkulator Booking Private Start Kota Batu.',
    ctaButton: 'Hitung & Booking via Kalkulator Private Start Kota Batu',
    tags: [
      'Private Trip Start Kota Batu',
      'Private Trip Bromo Batu',
      'Harga Bromo Batu 2026',
      'Sewa Jeep Bromo 1-6 Orang',
      'Penjemputan Villa Kota Batu',
      'Itinerary Bromo Batu',
    ],
  },

  en: {
    id: 'private-trip-bromo-start-batu-harga-2026',
    slug: 'private-trip-bromo-start-kota-batu-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-batu',
    title: 'Private Trip Bromo Start Batu City: 2026 Prices, Itinerary & Facilities',
    metaDescription:
      'Complete 2026 guide for Private Trip Bromo Start Batu City from Rp1.800.000 per jeep/group for 1–6 participants (same flat rate for 1 or 6 people), door-to-door pickup at Batu hotels, resorts & villas, optional photo/video +Rp500.000 & drone +Rp1.500.000, 23:00–13:00 WIB itinerary.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 26, 2026',
    readTime: '5 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    heroImage: imgPrivateBatu,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private 4×4 Bromo Jeep Start Batu City — Flat rate per jeep / per group for 1–6 participants',
    introduction: [
      'Staying at a resort, hotel, or hillside villa in Batu City and planning a Mount Bromo sunrise escape? Our Private Trip Start Batu City provides seamless door-to-door pickup straight from your Batu accommodation—no need to transfer to Malang first. This 2026 guide outlines our flat per-jeep/group rate for 1–6 participants (whether 1 or 6 people travel, the price is identical), optional photo/video and drone add-ons, inclusions, and full midnight-to-midday schedule.',
      'Review all package facilities, official Batu pickup zones, and the 2°C – 10°C cold-weather packing checklist before booking directly through our Private Start Batu Calculator.',
    ],
    pricingSectionTitle: '💰 2026 Private Trip Start Batu City Prices & Add-Ons',
    pricingSectionSubtitle:
      'Flat price per jeep / per group (max 6 guests without photographer, or 5 guests with photographer) — 1 person or 6 people pay the exact same rate!',
    normalPrice: 'Rp2.100.000',
    promoPrice: 'Rp1.800.000',
    priceUnitLabel: '/ jeep (1–6 pax)',
    seasonNote: 'Regular / low season flat rate per jeep (High Season Rp2.100.000 • book via Private Start Batu Calculator)',
    savingsBadge: 'SAVE Rp300.000 • 1–6 PAX',
    groupPriceTitle: '🚐 Flat Price Per Jeep / Per Group (Max 6 Participants)',
    groupPriceNote:
      'The Rp1.800.000 rate covers 1–6 participants per jeep/group (not per person). Whether 1 person or 6 people join, the total stays the same! Adding documentation (+Rp500.000) sets capacity to max 5 guests + 1 photographer.',
    addons: [
      {
        symbol: '📸',
        label: 'Documentation Add-On',
        price: '+Rp500.000',
        detail: 'Professional DSLR/Mirrorless photo & video coverage (total Rp2.300.000 regular / Rp2.600.000 high season, max 5 pax + 1 photographer).',
      },
      {
        symbol: '🚁',
        label: 'Drone Add-On',
        price: '+Rp1.500.000',
        detail: 'Cinematic aerial drone shots over Sunrise Point, Sea of Sand & Teletubbies Savanna.',
      },
    ],
    facilitiesSectionTitle: '✅ Facilities (Include & Exclude)',
    includeTitle: '✅ Included',
    includeItems: [
      'Round-trip AC Shuttle Car door-to-door pickup & drop-off across Batu City.',
      '100% Private 4×4 Mount Bromo Jeep (Toyota Land Cruiser FJ40, fits 1–6 participants).',
      'Official Mount Bromo National Park (TNBTS WNI) entrance tickets for all guests.',
      'Fuel (BBM) for both shuttle car and 4×4 Jeep throughout the itinerary.',
      'Experienced friendly driver & route guide.',
      'Official tourism area retribution & parking fees.',
    ],
    excludeTitle: '❌ Excluded',
    excludeItems: [
      'Horse rental across the Sea of Sand (optional; walkable).',
      'Personal meals and drinks.',
      'Paid public restroom fees.',
      'Foreign national (WNA) entrance ticket surcharge Rp255.000 / person.',
      'Other personal expenses.',
    ],
    itinerarySectionTitle: '🕚 Full Itinerary (Chronological Order)',
    itinerarySectionSubtitle:
      'Approx. 12 hours door-to-door from your Batu villa or resort, comfortably paced with zero rushing.',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '23:00 – 01:00 WIB',
        title: 'Pickup at Batu City Hotel / Villa / Resort',
        description:
          'Our driver picks your group up directly at your accommodation anywhere in Batu City and departs toward Bromo.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Sunrise Point',
        description:
          'Watch the golden Mount Bromo dawn from top sunrise viewpoints at an unhurried pace.',
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
        time: '10:00 – 13:00 WIB',
        title: 'Return to Batu City (Drop-Off)',
        description:
          'Relaxed drive back with direct drop-off at your hotel, villa, or resort in Batu.',
      },
    ],
    pickupSectionTitle: '📍 Official Batu City Pickup Locations',
    pickupLead:
      '📍 Direct door-to-door pickup from all Hotels, Resorts, Villas, Homestays, and residential addresses in Batu City.',
    pickupPopularTitle: 'Popular Pickup Zones:',
    pickupPoints: [
      'Hotels & Resorts near Jatim Park 1, 2, 3, Museum Angkut & Batu Town Square.',
      'Villas, Resorts & Homestays in Songgoriti, Selecta, Oro-Oro Ombo, Bumiaji & Junrejo.',
    ],
    gearSectionTitle: '🧥 Essential Packing List (2°C – 10°C)',
    gearSectionSubtitle:
      'Even though Batu is cool, pre-dawn Bromo highlands are much colder. Pack these 4 essentials:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Thick Mountain Jacket / Windbreaker',
        reason: 'Dawn temperatures at Penanjakan drop to 2°C – 6°C.',
      },
      {
        symbol: '🧤',
        name: 'Gloves & Beanie Hat',
        reason: 'Protects your hands and ears from biting mountain wind.',
      },
      {
        symbol: '😷',
        name: 'Dust Mask & Sunglasses',
        reason: 'Essential across the volcanic Sea of Sand and Crater rim.',
      },
      {
        symbol: '👟',
        name: 'Sneakers / Comfortable Trekking Shoes',
        reason: 'Provides steady grip on volcanic sand and crater stairs—avoid flip-flops or heels.',
      },
    ],
    extraTipTitle: '💡 Extra Tip: Best Choice for Family Villa Staycations & Office Outings in Batu',
    extraTipContent:
      'Private Trip Start Batu City is tailored for families with kids and corporate retreats staying at Batu villas or resorts who want full privacy and effortless door-to-door midnight pickup.',
    conclusion:
      'Book directly using our Private Start Batu Booking Calculator to pick your dates, optionally add photography or drone coverage, and lock in the 2026 flat rate of Rp1.800.000 per jeep/group (1–6 participants).',
    ctaButton: 'Calculate & Book via Private Start Batu Calculator',
    tags: [
      'Private Trip Start Batu City',
      'Private Trip Bromo Batu',
      'Bromo Batu 2026 Prices',
      'Bromo Jeep 1-6 Pax',
      'Batu Villa Pickup Bromo',
      'Bromo Itinerary Batu',
    ],
  },

  zh: {
    id: 'private-trip-bromo-start-batu-harga-2026',
    slug: 'private-trip-bromo-start-kota-batu-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-batu',
    title: 'Private Trip 巴图市出发布罗莫：2026 价格、行程与设施完整指南',
    metaDescription:
      '2026 巴图旅游市出发布罗莫私人团 (Private Trip Start Kota Batu) 攻略：平季整车价 Rp1.800.000/辆吉普车（适用 1–6 人，1 人或 6 人同价），支持巴图全境酒店/度假村/别墅上门接送，含摄影与无人机加购价及 23:00–13:00 行程。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月26日',
    readTime: '5 分钟阅读',
    category: 'tips_wisata',
    categoryLabel: '攻略与指南',
    heroImage: imgPrivateBatu,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 巴图市出发专属四驱布罗莫吉普 — 每辆 / 每团 1–6 人同价一口价',
    introduction: [
      '入住巴图旅游市（Kota Wisata Batu）的酒店、度假村或山景别墅，选择 Private Trip Start Kota Batu 私人团即可享受门到门上门接送，无需再折腾前往玛琅市区汇合。本文汇总 2026 最新整车/整团报价（适用 1–6 位团员，1 人或 6 人价格完全相同）、摄影与无人机加购项及完整行程攻略。',
      '点击下方按钮即可直接打开巴图市出发私人团计算器（Private Start Kota Batu）核算费用并预约。',
    ],
    pricingSectionTitle: '💰 2026 巴图市出发私人团价格与套餐方案',
    pricingSectionSubtitle: '按辆吉普车 / 按团一口价（最多 6 人；含摄影师最多 5 人）—— 1 人或 6 人出行同价！',
    normalPrice: 'Rp2.100.000',
    promoPrice: 'Rp1.800.000',
    priceUnitLabel: '/ 辆吉普车（1–6人）',
    seasonNote: '平季整车/整团特惠价（旺季 Rp2.100.000 • 通过巴图市私人团计算器预订）',
    savingsBadge: '立省 Rp300.000 • 1–6 人同价',
    groupPriceTitle: '🚐 按辆吉普车 / 按团一口价（最多 6 位团员）',
    groupPriceNote:
      'Rp1.800.000 为每辆吉普车/每团整包价格，适用于 1–6 位团员（非按人头计费）。无论 1 人独行还是 6 人同行，价格完全相同！加购摄影跟拍（+Rp500.000）后最多容纳 5 位游客 + 1 名摄影师。',
    addons: [
      {
        symbol: '📸',
        label: '加购专业跟拍 (Dokumentasi)',
        price: '+Rp500.000',
        detail: '专业单反/微单照片与视频跟拍（平季总价 Rp2.300.000 / 旺季 Rp2.600.000，最多 5 位游客）。',
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
      '巴图旅游市酒店/度假村/别墅往返门到门空调接送专车。',
      '100% 独立官方四驱布罗莫越野吉普车（最多容纳 6 人）。',
      '全体团员布罗莫国家公园门票 (TNBTS WNI)。',
      '全程接送车与吉普车油费 (BBM)。',
      '经验丰富的专职司机兼向导。',
      '景区官方管理费与停车费。',
    ],
    excludeTitle: '❌ 费用不含 (Exclude)',
    excludeItems: [
      '火山沙海骑马费用（自愿选择）。',
      '个人餐饮费用。',
      '景区付费公共洗手间。',
      '外籍游客 (WNA) 门票差价 Rp255.000 / 人。',
      '其他个人消费。',
    ],
    itinerarySectionTitle: '🕚 完整时间行程表（按顺序）',
    itinerarySectionSubtitle: '全程约 12 小时，巴图别墅/酒店直接出发，节奏轻松从容。',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '23:00 – 01:00 WIB',
        title: '巴图市酒店 / 别墅上门接人',
        description: '司机直接前往您在巴图旅游市入住的酒店、度假村或别墅接车出发。',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: '日出观景台 (Sunrise Point)',
        description: '在绝佳观景点悠闲守候布罗莫金色日出，无需匆忙。',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: '深度游览五大经典景点',
        description: '游览 Widodaren 山丘、布罗莫火山口与巴托克火山、Pura Poten 印度庙、耳语沙海与天线宝宝草原。',
      },
      {
        symbol: '🚐',
        time: '10:00 – 13:00 WIB',
        title: '返回巴图旅游市',
        description: '舒适返程并直接送回您在巴图市的下榻酒店或别墅。',
      },
    ],
    pickupSectionTitle: '📍 官方接送范围（巴图旅游市）',
    pickupLead: '📍 支持巴图旅游市全境酒店、度假村、别墅、民宿及私人地址上门接送。',
    pickupPopularTitle: '热门接送区域：',
    pickupPoints: [
      'Jatim Park 1/2/3、运输博物馆 (Museum Angkut) 及巴图市广场周边酒店与度假村。',
      'Songgoriti、Selecta、Oro-Oro Ombo、Bumiaji 及 Junrejo 周边山景别墅与民宿。',
    ],
    gearSectionTitle: '🧥 必备防寒装备（气温 2°C – 10°C）',
    gearSectionSubtitle: '布罗莫凌晨气温远低于巴图市区，请备齐以下 4 件装备：',
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
    extraTipTitle: '💡 贴心推荐：最适合巴图度假别墅亲子与团建出游',
    extraTipContent:
      '巴图市出发私人团专为入住巴图别墅或度假村的亲子家庭及公司团队打造，半夜直接门口接车，100% 独立私密，次日中午返回刚好继续享受巴图休闲时光。',
    conclusion:
      '立即打开巴图市私人团计算器选择日期与摄影/无人机加购项，锁定 2026 平季整车价 Rp1.800.000（1–6 人同价）！',
    ctaButton: '打开巴图市专车计算器立即预订',
    tags: [
      'Private Trip 巴图市出发',
      '2026巴图布罗莫价格',
      '巴图别墅接送布罗莫',
      '布罗莫吉普1-6人同价',
      '布罗莫行程攻略',
      '巴图市私人团',
    ],
  },
};
