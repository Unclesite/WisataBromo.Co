import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgMalangHero from '../../assets/images/private_malang_card.png';

export interface MalangAddonPrice {
  symbol: string;
  label: string;
  price: string;
  detail: string;
}

export interface MalangItineraryStep {
  symbol: string;
  time: string;
  title: string;
  description: string;
}

export interface MalangGearItem {
  symbol: string;
  name: string;
  reason: string;
}

export interface LocalizedMalangTripArticleContent {
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
  addons: MalangAddonPrice[];
  facilitiesSectionTitle: string;
  includeTitle: string;
  includeItems: string[];
  excludeTitle: string;
  excludeItems: string[];
  itinerarySectionTitle: string;
  itinerarySectionSubtitle: string;
  itinerarySteps: MalangItineraryStep[];
  pickupSectionTitle: string;
  pickupLead: string;
  pickupPopularTitle: string;
  pickupPoints: string[];
  gearSectionTitle: string;
  gearSectionSubtitle: string;
  gearItems: MalangGearItem[];
  extraTipTitle: string;
  extraTipContent: string;
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_OPEN_TRIP_BROMO_START_MALANG: Record<
  SupportedLanguage,
  LocalizedMalangTripArticleContent
> = {
  id: {
    id: 'open-trip-bromo-start-malang-harga-2026',
    slug: 'private-trip-bromo-start-kota-malang-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-malang',
    title: 'Private Trip Bromo Start Kota Malang: Harga 2026, Itinerary, dan Fasilitas',
    metaDescription:
      'Panduan lengkap Private Trip Bromo Start Kota Malang Harga 2026 mulai Rp1.700.000 per jeep/grup untuk 1–6 peserta (1 atau 6 orang harga sama saja), lengkap dengan opsi dokumentasi & drone, fasilitas include/exclude, itinerary 23:00–12:30 WIB, lokasi jemput Kota Malang, serta perlengkapan wajib.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '26 November 2026',
    readTime: '5 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgMalangHero,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private Jeep 4×4 Bromo Start Kota Malang — Harga flat per jeep / per grup untuk 1–6 peserta',
    introduction: [
      'Merencanakan perjalanan ke Gunung Bromo dari Kota Malang kini jauh lebih nyaman dan eksklusif dengan layanan Private Trip Start Kota Malang yang menjemput langsung di alamat, hotel, homestay, maupun stasiun. Panduan Harga 2026 ini merangkum tarif terbaru per jeep (untuk 1–6 peserta, 1 atau 6 orang harga sama saja), tambahan dokumentasi & drone, fasilitas lengkap, hingga susunan itinerary dari malam hingga siang hari.',
      'Simak rincian paket, lokasi penjemputan resmi, serta daftar perlengkapan wajib menghadapi suhu dingin 2°C – 10°C sebelum melakukan reservasi langsung melalui Kalkulator Private Start Malang.',
    ],
    pricingSectionTitle: '💰 Harga & Paket Private Trip Start Kota Malang (Update 2026)',
    pricingSectionSubtitle:
      'Harga per jeep / per grup (maksimal 6 peserta) — berangkat 1 orang maupun 6 orang, harganya tetap sama saja!',
    normalPrice: 'Rp2.000.000',
    promoPrice: 'Rp1.700.000',
    priceUnitLabel: '/ jeep (1–6 peserta)',
    seasonNote: 'Harga promo low season per jeep / per grup (booking via Kalkulator Private Start Malang)',
    savingsBadge: 'HEMAT Rp300.000 • 1–6 PESERTA',
    groupPriceTitle: '🚐 Harga Per Jeep / Per Grup (Maksimal 6 Peserta)',
    groupPriceNote:
      'Tarif Rp1.700.000 berlaku flat untuk 1–6 peserta (harga per jeep atau per grup, bukan per orang). Jadi berangkat 1 orang maupun rombongan 6 orang, harganya sama saja!',
    addons: [
      {
        symbol: '📸',
        label: 'Tambahan Dokumentasi',
        price: '+Rp500.000',
        detail: 'Dokumentasi foto & video profesional sepanjang perjalanan Bromo.',
      },
      {
        symbol: '🚁',
        label: 'Tambahan Drone',
        price: '+Rp1.500.000',
        detail: 'Pengambilan footage aerial sinematik di area Sunrise, Lautan Pasir & Savana.',
      },
    ],
    facilitiesSectionTitle: '✅ Fasilitas Paket (Include & Exclude)',
    includeTitle: '✅ Include (Sudah Termasuk)',
    includeItems: [
      'Tiket masuk resmi kawasan wisata Gunung Bromo (TNBTS).',
      'Penjemputan langsung di Kota Malang (basecamp PP).',
      'Unit Jeep 4×4 Bromo resmi dan terawat (kapasitas 1–6 peserta).',
      'BBM (bahan bakar minyak) selama rangkaian tour.',
      'Driver berpengalaman yang merangkap pemandu rute.',
      'Retribusi resmi kawasan wisata.',
    ],
    excludeTitle: '❌ Exclude (Tidak Termasuk)',
    excludeItems: [
      'Sewa kuda menuju kaki tangga Kawah Bromo.',
      'Makan dan minuman pribadi selama perjalanan.',
      'Biaya toilet umum di area wisata.',
      'Keperluan dan pengeluaran pribadi lainnya.',
    ],
    itinerarySectionTitle: '🕚 Itinerary Lengkap (Urut dari Penjemputan hingga Kembali)',
    itinerarySectionSubtitle:
      'Estimasi waktu disusun agar Anda menikmati seluruh spot ikonik Bromo dengan nyaman tanpa terburu-buru.',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '23:00 – 01:00 WIB',
        title: 'Penjemputan Rombongan di Malang',
        description:
          'Driver menjemput langsung di alamat, rumah, stasiun, homestay, atau hotel Anda di wilayah Kota Malang lalu berangkat menuju gerbang Bromo.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Sunrise Point',
        description:
          'Menikmati momen Golden Sunrise dari spot sunrise terbaik Gunung Bromo dengan santai tanpa terburu-buru.',
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
        time: '10:00 – 12:30 WIB',
        title: 'Kembali ke Kota Malang',
        description:
          'Perjalanan pulang santai menuju Kota Malang dengan pengantaran kembali langsung ke hotel, stasiun, atau alamat asal Anda.',
      },
    ],
    pickupSectionTitle: '📍 Lokasi Penjemputan Resmi Kota Malang',
    pickupLead:
      '📍 Peserta dijemput langsung di Stasiun, Hotel, Homestay, Villa, maupun alamat rumah di wilayah Kota Malang.',
    pickupPopularTitle: 'Titik Penjemputan Populer:',
    pickupPoints: [
      'Stasiun Malang Kotabaru & Stasiun Malang Kota Lama.',
      'Hotel, Homestay, Villa & Alamat Rumah di seluruh Kota Malang.',
    ],
    gearSectionTitle: '🧥 Perlengkapan Wajib (Suhu 2°C – 10°C)',
    gearSectionSubtitle:
      'Suhu pegunungan Bromo saat dini hari dan fajar sangat dingin. Siapkan 4 perlengkapan penting berikut:',
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
        reason: 'Sangat berguna saat melintasi Lautan Pasir dan mendaki area Kawah Bromo.',
      },
      {
        symbol: '👟',
        name: 'Sepatu Kets / Trekking Nyaman',
        reason: 'Memberi pijakan mantap di pasir vulkanik dan tangga kawah—hindari sandal jepit atau sepatu berhak tinggi.',
      },
    ],
    extraTipTitle: '💡 Tips Tambahan: Pilihan Ideal untuk Privasi Maksimal',
    extraTipContent:
      'Private Trip Start Kota Malang sangat cocok untuk keluarga dengan anak-anak maupun rombongan kantor yang menginginkan privasi maksimal, ritme perjalanan fleksibel, serta penjemputan langsung door-to-door di Kota Malang.',
    conclusion:
      'Dengan harga promo 2026 Rp1.700.000 per jeep/grup untuk 1–6 peserta (1 atau 6 orang harga sama saja), itinerary terstruktur 23:00 – 12:30 WIB, serta penjemputan langsung di Kota Malang, liburan Bromo Anda jauh lebih privat dan hemat. Hitung estimasi lengkap beserta opsi dokumentasi dan drone langsung di Kalkulator Booking Private Start Malang.',
    ctaButton: 'Hitung & Booking via Kalkulator Private Start Malang',
    tags: [
      'Private Trip Start Kota Malang',
      'Private Trip Bromo Malang',
      'Harga Bromo 2026',
      'Sewa Jeep Bromo 1-6 Orang',
      'Itinerary Bromo Malang',
      'Penjemputan Stasiun Malang',
    ],
  },

  en: {
    id: 'open-trip-bromo-start-malang-harga-2026',
    slug: 'private-trip-bromo-start-kota-malang-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-malang',
    title: 'Private Trip Bromo Start Malang City: 2026 Prices, Itinerary & Facilities',
    metaDescription:
      'Complete 2026 guide for Private Trip Bromo Start Malang City from Rp1.700.000 per jeep/group for 1–6 participants (same flat price for 1 or 6 people), including photo/video & drone add-ons, inclusions/exclusions, 23:00–12:30 WIB itinerary, and Malang pickup points.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 26, 2026',
    readTime: '5 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    heroImage: imgMalangHero,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private 4×4 Bromo Jeep Start Malang City — Flat rate per jeep / per group for 1–6 participants',
    introduction: [
      'Planning your Mount Bromo sunrise trip from Malang City is effortless with our Private Trip Start Malang City service featuring direct door-to-door pickup from stations, hotels, homestays, or residential addresses. This 2026 guide covers our flat per-jeep/group rate for 1–6 participants (whether 1 or 6 people join, the price is exactly the same), optional photo/video and drone add-ons, full inclusions, and the step-by-step schedule.',
      'Review the complete facilities, official Malang pickup spots, and mandatory 2°C – 10°C cold-weather checklist before calculating your trip in our Private Start Malang booking calculator.',
    ],
    pricingSectionTitle: '💰 2026 Private Trip Start Malang City Prices & Add-Ons',
    pricingSectionSubtitle:
      'Flat price per jeep / per group (max 6 participants) — 1 person or 6 people pay the exact same rate!',
    normalPrice: 'Rp2.000.000',
    promoPrice: 'Rp1.700.000',
    priceUnitLabel: '/ jeep (1–6 pax)',
    seasonNote: 'Low season promo rate per jeep / per group (book via Private Start Malang Calculator)',
    savingsBadge: 'SAVE Rp300.000 • 1–6 PAX',
    groupPriceTitle: '🚐 Flat Price Per Jeep / Per Group (Max 6 Participants)',
    groupPriceNote:
      'The Rp1.700.000 rate covers 1–6 participants (per jeep / per group, not per person). Whether 1 person or 6 people travel together, the price stays the same!',
    addons: [
      {
        symbol: '📸',
        label: 'Documentation Add-On',
        price: '+Rp500.000',
        detail: 'Professional photography & video coverage throughout your Bromo trip.',
      },
      {
        symbol: '🚁',
        label: 'Drone Add-On',
        price: '+Rp1.500.000',
        detail: 'Cinematic aerial drone shots over Sunrise Point, Sea of Sand & Savanna.',
      },
    ],
    facilitiesSectionTitle: '✅ Facilities (Include & Exclude)',
    includeTitle: '✅ Included',
    includeItems: [
      'Official Mount Bromo National Park (TNBTS) entrance tickets.',
      'Round-trip pickup & drop-off in Malang City (to basecamp).',
      'Official 4×4 Mount Bromo Jeep (fits 1–6 participants).',
      'Fuel (BBM) for the full itinerary.',
      'Experienced driver & route guide.',
      'Official tourism area retribution fees.',
    ],
    excludeTitle: '❌ Excluded',
    excludeItems: [
      'Horse rental across the Sea of Sand.',
      'Personal meals and drinks.',
      'Public restroom fees.',
      'Other personal expenses.',
    ],
    itinerarySectionTitle: '🕚 Full Itinerary (Chronological Order)',
    itinerarySectionSubtitle:
      'Paced comfortably so you enjoy every iconic Mount Bromo spot without rushing.',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '23:00 – 01:00 WIB',
        title: 'Malang City Pickup',
        description:
          'Our driver picks your group up directly at your Malang address, station, homestay, or hotel.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Sunrise Point',
        description:
          'Watch the golden Mount Bromo dawn from the best sunrise viewpoint at an unhurried pace.',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: 'Explore Caldera Highlights',
        description:
          'Visit Widodaren Hill, Bromo Crater & Mount Batok, Pura Poten Temple, Whispering Sands, and Teletubbies Savanna.',
      },
      {
        symbol: '🚐',
        time: '10:00 – 12:30 WIB',
        title: 'Return to Malang City',
        description:
          'Comfortable drive back to Malang with direct drop-off at your hotel or original pickup point.',
      },
    ],
    pickupSectionTitle: '📍 Official Malang Pickup Locations',
    pickupLead:
      '📍 Direct pickup available from Train Stations, Hotels, Homestays, Villas, and private addresses in Malang City.',
    pickupPopularTitle: 'Popular Pickup Points:',
    pickupPoints: [
      'Malang Kotabaru Train Station & Malang Kota Lama Station.',
      'Hotels, Homestays, Villas & Residential Addresses across Malang City.',
    ],
    gearSectionTitle: '🧥 Essential Packing List (2°C – 10°C)',
    gearSectionSubtitle:
      'Pre-dawn temperatures in the Bromo highlands are freezing. Pack these 4 essentials:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Thick Mountain Jacket / Windbreaker',
        reason: 'Dawn temperatures at Penanjakan can drop to 2°C – 6°C.',
      },
      {
        symbol: '🧤',
        name: 'Gloves & Beanie Hat',
        reason: 'Protects your hands and ears from biting alpine wind.',
      },
      {
        symbol: '😷',
        name: 'Dust Mask & Sunglasses',
        reason: 'Essential when crossing the volcanic Sea of Sand and Crater rim.',
      },
      {
        symbol: '👟',
        name: 'Sneakers / Comfortable Trekking Shoes',
        reason: 'Provides steady grip on sand and crater stairs—avoid flip-flops or high heels.',
      },
    ],
    extraTipTitle: '💡 Extra Tip: Ideal for Families & Corporate Groups',
    extraTipContent:
      'Private Trip Start Malang City is ideal for families traveling with children or office/corporate outings seeking maximum privacy, flexible timing, and direct door-to-door pickup in Malang.',
    conclusion:
      'Book directly using our Private Start Malang Booking Calculator to customize dates, add photography or drone coverage, and lock in the 2026 flat promo rate of Rp1.700.000 per jeep/group (1–6 participants, same price for 1 or 6 people).',
    ctaButton: 'Calculate & Book via Private Start Malang Calculator',
    tags: [
      'Private Trip Start Malang City',
      'Private Trip Bromo Malang',
      'Bromo 2026 Prices',
      'Bromo Jeep 1-6 Pax',
      'Bromo Itinerary Malang',
      'Malang Station Pickup',
    ],
  },

  zh: {
    id: 'open-trip-bromo-start-malang-harga-2026',
    slug: 'private-trip-bromo-start-kota-malang-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-malang',
    title: 'Private Trip 玛琅市区出发布罗莫：2026 价格、行程与设施完整指南',
    metaDescription:
      '2026 玛琅市区出发布罗莫私人团 (Private Trip Start Kota Malang) 攻略：淡季优惠价 Rp1.700.000/辆吉普车（适用 1–6 位团员，1 人或 6 人同价），含摄影跟拍与无人机加购价、费用包含/不含与 23:00–12:30 行程。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月26日',
    readTime: '5 分钟阅读',
    category: 'tips_wisata',
    categoryLabel: '攻略与指南',
    heroImage: imgMalangHero,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 玛琅市区出发专属四驱布罗莫吉普 — 每辆 / 每团 1–6 人同价一口价',
    introduction: [
      '选择玛琅市区出发私人团 (Private Trip Start Kota Malang) 前往布罗莫火山，支持火车站、酒店、民宿及住宅上门接送。本文汇总 2026 最新整车/整团淡季优惠报价（适用 1–6 位团员，1 人或 6 人价格完全相同）、摄影与无人机加购项、完整行程与保暖装备清单。',
      '点击下方预订按钮即可直接打开玛琅专车出发 (Private Start Malang) 价格计算器完成预订。',
    ],
    pricingSectionTitle: '💰 2026 玛琅市区出发私人团价格与套餐方案',
    pricingSectionSubtitle: '按辆吉普车 / 按团计费（最多 6 人）—— 1 人或 6 人出行同价！',
    normalPrice: 'Rp2.000.000',
    promoPrice: 'Rp1.700.000',
    priceUnitLabel: '/ 辆吉普车（1–6人）',
    seasonNote: '淡季整车/整团特惠价（直接通过玛琅出发私人团计算器预订）',
    savingsBadge: '立省 Rp300.000 • 1–6 人同价',
    groupPriceTitle: '🚐 按辆吉普车 / 按团一口价（最多 6 位团员）',
    groupPriceNote:
      'Rp1.700.000 为每辆吉普车/每团整包价格，适用于 1–6 位团员（非按人头计费）。无论 1 人独行还是 6 人结伴，价格完全相同！',
    addons: [
      {
        symbol: '📸',
        label: '加购专业跟拍 (Dokumentasi)',
        price: '+Rp500.000',
        detail: '全程照片与视频专业记录。',
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
      '布罗莫国家公园门票 (TNBTS)。',
      '玛琅市区上门往返接送（至大本营）。',
      '官方四驱越野吉普车（最多容纳 6 人）。',
      '全程油费 (BBM)。',
      '经验丰富的专职司机。',
      '景区官方管理费与杂费。',
    ],
    excludeTitle: '❌ 费用不含 (Exclude)',
    excludeItems: [
      '火山沙海骑马费用。',
      '个人餐饮费用。',
      '景区公共洗手间费用。',
      '其他个人消费。',
    ],
    itinerarySectionTitle: '🕚 完整时间行程表（按顺序）',
    itinerarySectionSubtitle: '节奏舒缓从容，不赶场尽享布罗莫全景。',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '23:00 – 01:00 WIB',
        title: '玛琅市区上门接人',
        description: '司机直接前往您的玛琅酒店、民宿、火车站或指定地址接车出发。',
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
        time: '10:00 – 12:30 WIB',
        title: '返回玛琅市区',
        description: '返程送回您原本下榻的玛琅酒店或出发地址。',
      },
    ],
    pickupSectionTitle: '📍 官方接送范围（玛琅市区）',
    pickupLead: '📍 支持玛琅市内火车站、酒店、民宿、别墅及私人地址上门接送。',
    pickupPopularTitle: '热门接站点：',
    pickupPoints: [
      '玛琅 Kotabaru 火车站 & 玛琅 Kota Lama 老火车站。',
      '玛琅全市各大酒店、民宿、别墅及私人住址。',
    ],
    gearSectionTitle: '🧥 必备防寒装备（气温 2°C – 10°C）',
    gearSectionSubtitle: '布罗莫凌晨与日出时段气温极低，请备齐以下装备：',
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
    extraTipTitle: '💡 贴心推荐',
    extraTipContent:
      '玛琅市区出发私人团非常推荐携带儿童的家庭出游或追求高度私密性与灵活节奏的企业团建团队选择。',
    conclusion:
      '立即通过玛琅私人团 (Private Start Malang) 价格计算器选择日期与加购项，锁定 2026 淡季特惠整车价 Rp1.700.000（1–6 人同价）！',
    ctaButton: '打开玛琅专车计算器立即预订',
    tags: [
      'Private Trip Start Kota Malang',
      '2026布罗莫价格',
      '玛琅出发布罗莫私人团',
      '布罗莫吉普1-6人同价',
      '布罗莫行程攻略',
      '玛琅火车站接送',
    ],
  },
};
