import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgPrivateSurabaya from '../../assets/images/header/header_04_5db1f48e.jpg';

export interface SurabayaPriceTier {
  pax: string;
  pricePerPax: string;
  badge?: string;
  highlight?: boolean;
}

export interface SurabayaAddonItem {
  symbol: string;
  label: string;
  price: string;
  detail: string;
  included?: boolean;
}

export interface SurabayaItineraryStep {
  symbol: string;
  time: string;
  title: string;
  description: string;
}

export interface SurabayaGearItem {
  symbol: string;
  name: string;
  reason: string;
}

export interface LocalizedSurabayaTripArticleContent {
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
  heroBadge: string;
  startingPriceLabel: string;
  startingPriceValue: string;
  startingPriceUnit: string;
  seasonNote: string;
  docIncludedBannerTitle: string;
  docIncludedBannerDesc: string;
  tiersTableTitle: string;
  tiersTableSubtitle: string;
  highSeasonNote: string;
  pricingTiers: SurabayaPriceTier[];
  addons: SurabayaAddonItem[];
  facilitiesSectionTitle: string;
  includeTitle: string;
  includeItems: string[];
  excludeTitle: string;
  excludeItems: string[];
  itinerarySectionTitle: string;
  itinerarySectionSubtitle: string;
  itinerarySteps: SurabayaItineraryStep[];
  pickupSectionTitle: string;
  pickupLead: string;
  pickupPopularTitle: string;
  pickupPoints: string[];
  gearSectionTitle: string;
  gearSectionSubtitle: string;
  gearItems: SurabayaGearItem[];
  extraTipTitle: string;
  extraTipContent: string;
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_PRIVATE_TRIP_BROMO_START_SURABAYA: Record<
  SupportedLanguage,
  LocalizedSurabayaTripArticleContent
> = {
  id: {
    id: 'private-trip-bromo-start-surabaya',
    slug: 'private-trip-bromo-start-surabaya-harga-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-surabaya',
    title: 'Private Trip Bromo Start Surabaya: Harga, Itinerary, dan Fasilitas',
    metaDescription:
      'Panduan lengkap Private Trip Bromo Start Surabaya Raya Harga Terbaru (2 hingga >18 peserta) mulai Rp370.000/orang atau Rp570.000/orang untuk 6 pax — 100% privat, BBM & Tol PP, sudah INCLUDE dokumentasi foto & video DSLR/Mirrorless, opsi drone +Rp1.500.000, jemput Bandara Juanda, Stasiun, & Hotel Surabaya/Sidoarjo.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '26 November 2026',
    readTime: '6 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgPrivateSurabaya,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private Trip Bromo Start Surabaya Raya — VIP door-to-door via Tol Trans Jawa & Jeep 4×4 100% privat',
    introduction: [
      'Berangkat ke Gunung Bromo langsung dari Surabaya atau Sidoarjo kini jauh lebih praktis, eksklusif, dan bebas repot melalui layanan Private Trip Bromo Start Surabaya Raya. Anda tidak digabung dengan peserta lain (100% privat), dijemput langsung door-to-door menggunakan armada AC prima (Innova Reborn, Hiace Premio, Elf, hingga Bus Pariwisata) via Tol Trans Jawa, lalu dilanjutkan eksplorasi menggunakan Jeep 4×4 privat di kawasan kaldera Bromo.',
      'Istimewanya lagi, paket Private Trip Start Surabaya ini sudah INCLUDE dokumentasi foto & video DSLR/Mirrorless profesional tanpa biaya tambahan! Simak daftar tarif bertingkat per jumlah peserta, rincian fasilitas include/exclude, itinerary 23:00 – 13:30 WIB, titik penjemputan resmi Surabaya Raya, hingga perlengkapan wajib suhu 2°C – 10°C sebelum menghitung estimasi di Kalkulator Private Start Surabaya.',
    ],
    pricingSectionTitle: '💰 Harga & Paket Private Trip Start Surabaya (Terbaru)',
    pricingSectionSubtitle:
      'Tarif transparan bertingkat per peserta — semakin banyak rombongan, biaya per orang semakin hemat dan sudah INCLUDE dokumentasi!',
    heroBadge: 'VVIP SURABAYA RAYA • INCLUDE DOKUMENTASI',
    startingPriceLabel: 'Mulai dari',
    startingPriceValue: 'Rp570.000',
    startingPriceUnit: '/ orang (6 pax) • mulai Rp370.000 (>18 pax)',
    seasonNote: 'Sudah termasuk mobil AC PP, BBM, Tol Trans Jawa, Jeep 4×4 privat, tiket TNBTS & dokumentasi foto video',
    docIncludedBannerTitle: '📸 Dokumentasi Foto & Video DSLR/Mirrorless SUDAH INCLUDE!',
    docIncludedBannerDesc:
      'Untuk Private Trip Start Surabaya Raya (2 hingga >18 peserta), layanan fotografer & videografer DSLR/Mirrorless sudah masuk ke dalam harga paket tanpa biaya tambahan. Anda juga bisa menambahkan Drone (+Rp1.500.000) langsung di kalkulator.',
    tiersTableTitle: 'Daftar Harga Lengkap Private Trip Start Surabaya',
    tiersTableSubtitle: 'Pilih jumlah rombongan Anda (2 orang hingga rombongan besar >18 orang):',
    highSeasonNote:
      'Catatan: Pada periode High Season / Libur Panjang / Nataru / Lebaran berlaku penyesuaian +Rp50.000/orang. Peserta WNA dikenakan surcharge tiket TNBTS Rp255.000/orang.',
    pricingTiers: [
      { pax: '2 Pax', pricePerPax: 'Rp1.550.000 / orang' },
      { pax: '3 Pax', pricePerPax: 'Rp1.100.000 / orang' },
      { pax: '4 Pax', pricePerPax: 'Rp800.000 / orang' },
      { pax: '5 Pax', pricePerPax: 'Rp680.000 / orang' },
      { pax: '6 Pax', pricePerPax: 'Rp570.000 / orang', badge: 'Terpopuler • 1 Jeep Penuh', highlight: true },
      { pax: '7 Pax', pricePerPax: 'Rp700.000 / orang' },
      { pax: '8 Pax', pricePerPax: 'Rp650.000 / orang' },
      { pax: '9 – 10 Pax', pricePerPax: 'Rp600.000 / orang' },
      { pax: '11 – 12 Pax', pricePerPax: 'Rp470.000 / orang', badge: 'Hemat 2 Jeep', highlight: true },
      { pax: '13 – 14 Pax', pricePerPax: 'Rp480.000 / orang' },
      { pax: '15 – 16 Pax', pricePerPax: 'Rp450.000 / orang' },
      { pax: '17 – 18 Pax', pricePerPax: 'Rp400.000 / orang' },
      { pax: '> 18 Pax', pricePerPax: 'Rp370.000 / orang', badge: 'Termurah • Corporate/Grup', highlight: true },
    ],
    addons: [
      {
        symbol: '📸',
        label: 'Dokumentasi Foto & Video DSLR/Mirrorless',
        price: 'SUDAH INCLUDE',
        detail: 'Tim fotografer & videografer profesional selama perjalanan Bromo sudah termasuk di harga paket.',
        included: true,
      },
      {
        symbol: '🚁',
        label: 'Tambahan Drone',
        price: '+Rp1.500.000',
        detail: 'Pengambilan footage aerial sinematik di area Sunrise Point, Lautan Pasir & Savana Teletubbies.',
        included: false,
      },
    ],
    facilitiesSectionTitle: '✅ Fasilitas Paket (Include & Exclude)',
    includeTitle: '✅ Include (Sudah Termasuk)',
    includeItems: [
      'Shuttle Car AC Prima (Innova Reborn / Hiace Premio / Elf / Bus Pariwisata) Surabaya – Bromo PP.',
      'Driver profesional, ramah, dan berpengalaman jalur pegunungan.',
      'BBM (bahan bakar minyak) & biaya Tol Trans Jawa PP.',
      'Unit Jeep 4×4 Bromo (Toyota Land Cruiser FJ40) 100% privat (proporsional 5–6 pax/jeep).',
      'Tiket masuk resmi kawasan wisata Gunung Bromo (TNBTS WNI) untuk seluruh peserta.',
      'Retribusi resmi kawasan wisata & biaya parkir.',
      'Dokumentasi Foto & Video DSLR/Mirrorless Profesional (Sudah INCLUDE!).',
    ],
    excludeTitle: '❌ Exclude (Tidak Termasuk)',
    excludeItems: [
      'Sewa kuda menuju kaki tangga Kawah Bromo (opsional, bisa ditempuh dengan jalan kaki).',
      'Makan dan minuman pribadi selama perjalanan.',
      'Biaya toilet umum berbayar di kawasan Bromo.',
      'Surcharge tiket masuk wisatawan mancanegara (WNA) Rp255.000 / orang (jika ada peserta WNA).',
      'Pengeluaran dan keperluan pribadi lainnya di luar fasilitas paket.',
    ],
    itinerarySectionTitle: '🕚 Itinerary Lengkap (Urut dari Penjemputan hingga Kembali)',
    itinerarySectionSubtitle:
      'Durasi sekitar 14 jam via Tol Trans Jawa dengan ritme perjalanan santai dan waktu keberangkatan fleksibel sesuai request.',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '23:00 – 23:30 WIB',
        title: 'Penjemputan VIP di Surabaya Raya',
        description:
          'Mobil private AC menjemput langsung di titik pilihan Anda (Bandara Juanda, Stasiun, Hotel, Apartemen, atau alamat rumah di Surabaya & Sidoarjo), lalu meluncur menuju Bromo via Tol Trans Jawa.',
      },
      {
        symbol: '🚙',
        time: '02:00 – 02:30 WIB',
        title: 'Transfer Jeep 4×4 di Rest Area Transit Resmi',
        description:
          'Tiba di rest area transit resmi lereng Bromo dan berpindah ke unit Jeep 4×4 Toyota Land Cruiser FJ40 yang 100% privat khusus rombongan Anda.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Sunrise Point Bersama Tim Fotografer',
        description:
          'Menikmati momen Golden Sunrise dari spot terbaik Gunung Bromo (Bukit Cinta / Prau / Kingkong / Penanjakan) sambil diabadikan oleh fotografer profesional.',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: 'Eksplor 5 Spot Ikonik Kaldera Bromo',
        description:
          'Menjelajahi Bukit Widodaren, Kawah Bromo & Gunung Batok, Pura Luhur Poten, Pasir Berbisik, hingga Savana Bukit Teletubbies dengan leluasa.',
      },
      {
        symbol: '🚐',
        time: '10:30 – 13:30 WIB',
        title: 'Kembali ke Surabaya Raya (Drop Off)',
        description:
          'Perjalanan pulang nyaman melalui Tol Trans Jawa dan pengantaran langsung kembali ke Bandara Juanda, Stasiun, Hotel, atau alamat asal Anda di Surabaya / Sidoarjo.',
      },
    ],
    pickupSectionTitle: '📍 Lokasi Penjemputan Resmi Surabaya Raya',
    pickupLead:
      '📍 Bebas menentukan titik kumpul dan penjemputan door-to-door di seluruh wilayah Kota Surabaya dan Kabupaten Sidoarjo (termasuk Bandara & Stasiun).',
    pickupPopularTitle: 'Titik Penjemputan Populer:',
    pickupPoints: [
      'Bandara Internasional Juanda Surabaya (Terminal 1 & Terminal 2).',
      'Stasiun Surabaya Gubeng, Stasiun Pasar Turi & Stasiun Wonokromo.',
      'Seluruh Hotel, Apartemen, Kantor & Alamat Rumah di Surabaya dan Sidoarjo.',
    ],
    gearSectionTitle: '🧥 Perlengkapan Wajib (Suhu 2°C – 10°C)',
    gearSectionSubtitle:
      'Walau berangkat dari Surabaya yang hangat, suhu puncak Bromo saat fajar sangat dingin. Siapkan 4 perlengkapan penting berikut:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Jaket Gunung Tebal / Windbreaker',
        reason: 'Suhu fajar di Penanjakan bisa turun hingga 2°C – 6°C disertai hembusan angin pegunungan.',
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
        reason: 'Memberi pijakan mantap di pasir dan anak tangga kawah—hindari sandal jepit atau sepatu berhak tinggi.',
      },
    ],
    extraTipTitle: '💡 Tips Tambahan: Pilihan Ideal untuk Tamu Luar Pulau, Keluarga & Corporate',
    extraTipContent:
      'Private Trip Bromo Start Surabaya sangat ideal untuk kunjungan bisnis, keluarga dengan anak-anak, maupun rombongan kantor dari luar pulau yang mendarat di Bandara Juanda atau tiba di Stasiun Surabaya. Semua sudah beres dalam 1 paket: mobil AC + Tol PP + Jeep privat + dokumentasi foto & video!',
    conclusion:
      'Dengan tarif transparan mulai Rp370.000/orang (>18 pax) atau Rp570.000/orang untuk 6 pax yang sudah INCLUDE dokumentasi foto & video, BBM, Tol Trans Jawa PP, serta penjemputan langsung di Surabaya & Sidoarjo, perjalanan Bromo Anda jadi jauh lebih tenang dan berkesan. Hitung total biaya rombongan Anda sekarang di Kalkulator Private Start Surabaya!',
    ctaButton: 'Hitung & Booking via Kalkulator Private Start Surabaya',
    tags: [
      'Private Trip Bromo Start Surabaya',
      'Harga Bromo Surabaya',
      'Paket Bromo Jemput Juanda',
      'Private Trip Bromo Include Dokumentasi',
      'Itinerary Bromo Surabaya',
      'Sewa Jeep Bromo Surabaya',
    ],
  },

  en: {
    id: 'private-trip-bromo-start-surabaya',
    slug: 'private-trip-bromo-start-surabaya-harga-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-surabaya',
    title: 'Private Trip Bromo Start Surabaya: Prices, Itinerary & Facilities',
    metaDescription:
      'Complete guide for Private Trip Bromo Start Greater Surabaya (2 to 18+ guests) from Rp370.000/pax or Rp570.000/pax for 6 guests — 100% private AC transport via Toll Road, private 4×4 Jeep, DSLR/Mirrorless photo & video INCLUDED, optional drone +Rp1.500.000, pickup at Juanda Airport, stations & hotels.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 26, 2026',
    readTime: '6 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    heroImage: imgPrivateSurabaya,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Private Trip Bromo Start Greater Surabaya — VIP door-to-door via Trans-Java Toll & 100% Private 4×4 Jeep',
    introduction: [
      'Traveling to Mount Bromo directly from Surabaya or Sidoarjo is effortless and completely private with our Private Trip Bromo Start Greater Surabaya service. Your group is never mixed with other travelers—enjoy direct door-to-door pickup in a comfortable AC vehicle (Innova Reborn, Hiace Premio, Elf, or Tour Bus) via the Trans-Java Toll Road, transferring smoothly into a private 4×4 Jeep at Bromo.',
      'Best of all, our Private Trip Start Surabaya package already INCLUDES professional DSLR/Mirrorless photo & video documentation at no extra cost! Check the complete tiered group pricing, inclusions/exclusions, 23:00–13:30 WIB itinerary, official Surabaya pickup points, and 2°C–10°C cold-weather packing list before calculating your exact quote.',
    ],
    pricingSectionTitle: '💰 Private Trip Start Surabaya Prices & Packages',
    pricingSectionSubtitle:
      'Transparent tiered pricing per person — the bigger your group, the lower the per-person rate, with photography INCLUDED!',
    heroBadge: 'VVIP GREATER SURABAYA • PHOTO & VIDEO INCLUDED',
    startingPriceLabel: 'Popular 6-pax rate',
    startingPriceValue: 'Rp570.000',
    startingPriceUnit: '/ pax (6 pax) • from Rp370.000 (>18 pax)',
    seasonNote: 'Includes round-trip AC vehicle, fuel, toll fees, private 4×4 Jeep, TNBTS WNI tickets & photo/video team',
    docIncludedBannerTitle: '📸 Professional DSLR/Mirrorless Photo & Video ALREADY INCLUDED!',
    docIncludedBannerDesc:
      'Every Private Trip Start Surabaya booking (from 2 to 18+ guests) automatically includes our photographer & videographer at zero extra charge. You can optionally add Drone aerial footage (+Rp1.500.000) in the calculator.',
    tiersTableTitle: 'Tiered Price List — Private Trip Start Surabaya',
    tiersTableSubtitle: 'Rates automatically scale down as your group grows (2 guests up to 18+ corporate groups):',
    highSeasonNote:
      'Note: High Season / National Holidays add +Rp50.000/person. Foreign nationals (WNA) incur an official TNBTS park ticket surcharge of Rp255.000/person.',
    pricingTiers: [
      { pax: '2 Pax', pricePerPax: 'Rp1.550.000 / pax' },
      { pax: '3 Pax', pricePerPax: 'Rp1.100.000 / pax' },
      { pax: '4 Pax', pricePerPax: 'Rp800.000 / pax' },
      { pax: '5 Pax', pricePerPax: 'Rp680.000 / pax' },
      { pax: '6 Pax', pricePerPax: 'Rp570.000 / pax', badge: 'Most Popular • 1 Full Jeep', highlight: true },
      { pax: '7 Pax', pricePerPax: 'Rp700.000 / pax' },
      { pax: '8 Pax', pricePerPax: 'Rp650.000 / pax' },
      { pax: '9 – 10 Pax', pricePerPax: 'Rp600.000 / pax' },
      { pax: '11 – 12 Pax', pricePerPax: 'Rp470.000 / pax', badge: 'Great Value • 2 Jeeps', highlight: true },
      { pax: '13 – 14 Pax', pricePerPax: 'Rp480.000 / pax' },
      { pax: '15 – 16 Pax', pricePerPax: 'Rp450.000 / pax' },
      { pax: '17 – 18 Pax', pricePerPax: 'Rp400.000 / pax' },
      { pax: '> 18 Pax', pricePerPax: 'Rp370.000 / pax', badge: 'Best Rate • Corporate/Group', highlight: true },
    ],
    addons: [
      {
        symbol: '📸',
        label: 'DSLR / Mirrorless Photo & Video Documentation',
        price: 'INCLUDED',
        detail: 'Dedicated photo & video coverage across Sunrise Point and Bromo caldera is already included.',
        included: true,
      },
      {
        symbol: '🚁',
        label: 'Drone Aerial Add-On',
        price: '+Rp1.500.000',
        detail: 'Cinematic aerial drone shots over Sunrise Point, Sea of Sand & Teletubbies Savanna.',
        included: false,
      },
    ],
    facilitiesSectionTitle: '✅ Facilities (Include & Exclude)',
    includeTitle: '✅ Included',
    includeItems: [
      'Private AC Shuttle Vehicle (Innova Reborn / Hiace Premio / Elf / Bus) Surabaya – Bromo round-trip.',
      'Experienced & friendly professional driver.',
      'Fuel (BBM) & round-trip Trans-Java Toll Road fees.',
      '100% Private 4×4 Mount Bromo Jeep (Toyota Land Cruiser FJ40, proportional 5–6 pax/jeep).',
      'Official Mount Bromo National Park (TNBTS WNI) entrance tickets for all guests.',
      'Official tourism retribution & parking fees.',
      'Professional DSLR/Mirrorless Photo & Video Documentation (Already INCLUDED!).',
    ],
    excludeTitle: '❌ Excluded',
    excludeItems: [
      'Horse rental across the Sea of Sand (optional; walkable).',
      'Personal meals and drinks.',
      'Paid public restroom fees.',
      'Foreign national (WNA) entrance ticket surcharge of Rp255.000 / person.',
      'Other personal expenses outside package inclusions.',
    ],
    itinerarySectionTitle: '🕚 Full Itinerary (Chronological Order)',
    itinerarySectionSubtitle:
      'Approx. 14 hours total via Trans-Java Toll Road with flexible departure times tailored to your flight or train schedule.',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '23:00 – 23:30 WIB',
        title: 'VIP Pickup in Greater Surabaya',
        description:
          'Your private AC car picks you up directly at Juanda Airport, train stations, hotels, apartments, or residential addresses in Surabaya & Sidoarjo.',
      },
      {
        symbol: '🚙',
        time: '02:00 – 02:30 WIB',
        title: 'Transfer to Private 4×4 Jeep',
        description:
          'Arrive at our official transit basecamp on the Bromo slopes and transfer into your 100% private Toyota Land Cruiser FJ40.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Sunrise Point with Documentation Team',
        description:
          'Enjoy the spectacular Mount Bromo golden sunrise from top viewpoints while our photographer captures your moments.',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: 'Explore 5 Iconic Bromo Caldera Spots',
        description:
          'Visit Widodaren Hill, Bromo Crater & Mount Batok, Pura Poten Temple, Whispering Sands, and Teletubbies Savanna.',
      },
      {
        symbol: '🚐',
        time: '10:30 – 13:30 WIB',
        title: 'Return & Drop-Off in Surabaya',
        description:
          'Relaxing highway ride back via toll road with direct drop-off at your hotel, station, airport, or original address.',
      },
    ],
    pickupSectionTitle: '📍 Official Greater Surabaya Pickup Locations',
    pickupLead:
      '📍 Free choice of door-to-door pickup points across Surabaya City and Sidoarjo Regency.',
    pickupPopularTitle: 'Popular Pickup Points:',
    pickupPoints: [
      'Juanda International Airport Surabaya (Terminal 1 & Terminal 2).',
      'Surabaya Gubeng Station, Pasar Turi Station & Wonokromo Station.',
      'All Hotels, Apartments, Offices & Residential Addresses in Surabaya & Sidoarjo.',
    ],
    gearSectionTitle: '🧥 Essential Packing List (2°C – 10°C)',
    gearSectionSubtitle:
      'Despite Surabaya’s warm climate, pre-dawn Bromo highlands are freezing. Pack these 4 essentials:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Thick Mountain Jacket / Windbreaker',
        reason: 'Dawn temperatures at Penanjakan can drop to 2°C – 6°C with cold alpine gusts.',
      },
      {
        symbol: '🧤',
        name: 'Gloves & Beanie Hat',
        reason: 'Protects your hands and ears from biting pre-dawn winds.',
      },
      {
        symbol: '😷',
        name: 'Dust Mask & Sunglasses',
        reason: 'Helpful when crossing the volcanic Sea of Sand and climbing toward Bromo Crater.',
      },
      {
        symbol: '👟',
        name: 'Sneakers / Comfortable Trekking Shoes',
        reason: 'Ensures steady footing on volcanic sand and crater stairs—avoid flip-flops or heels.',
      },
    ],
    extraTipTitle: '💡 Extra Tip: Ideal for Out-of-Town Flyers, Families & Corporate Retreats',
    extraTipContent:
      'Private Trip Bromo Start Surabaya is the top choice for business travelers, families with children, and corporate groups arriving at Juanda Airport or Surabaya train stations who want 100% privacy with toll road transport and professional photography bundled in.',
    conclusion:
      'Calculate your exact group total—including instant tiered savings, WNA tickets if needed, or optional drone coverage—directly in our Private Start Surabaya Booking Calculator.',
    ctaButton: 'Calculate & Book via Private Start Surabaya Calculator',
    tags: [
      'Private Trip Bromo Start Surabaya',
      'Bromo Surabaya Prices',
      'Bromo Tour from Juanda Airport',
      'Private Bromo Included Photo Video',
      'Bromo Itinerary Surabaya',
      'Surabaya Bromo VIP Jeep',
    ],
  },

  zh: {
    id: 'private-trip-bromo-start-surabaya',
    slug: 'private-trip-bromo-start-surabaya-harga-itinerary-fasilitas',
    bookingPackageId: 'private-jeep-surabaya',
    title: 'Private Trip 泗水出发布罗莫：价格、行程与设施完整指南',
    metaDescription:
      '泗水及诗都阿佐出发布罗莫私人定制团攻略（2至18+人）：6人团仅 Rp570.000/人、18人以上低至 Rp370.000/人，全程100%独立专车走高速、专属四驱吉普，已免费包含单反摄影跟拍，支持朱安达机场/火车站/酒店上门接送。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月26日',
    readTime: '6 分钟阅读',
    category: 'tips_wisata',
    categoryLabel: '攻略与指南',
    heroImage: imgPrivateSurabaya,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 泗水大区出发专属布罗莫私人团 — 高速往返空调专车 + 100% 独立四驱吉普车',
    introduction: [
      '从泗水（Surabaya）或诗都阿佐（Sidoarjo）直接出发布罗莫火山，选择 Private Trip Start Surabaya 私人定制团最省心体面。全程 100% 独立成团不拼人，空调专车（Innova Reborn / Hiace Premio / Elf / 大巴）经爪哇高速上门接送，并在布罗莫换乘专属四驱越野吉普车。',
      '更超值的是，泗水出发私人团已免费包含专业单反/微单摄影与视频跟拍（无需另付费）！下文完整整理按人数阶梯报价表、费用包含/不含、23:00–13:30 行程安排与防寒装备清单。',
    ],
    pricingSectionTitle: '💰 泗水出发私人团价格表与套餐说明',
    pricingSectionSubtitle: '按人数阶梯透明报价——人数越多单价越划算，且已免费包含摄影跟拍！',
    heroBadge: '泗水 VVIP 专线 • 已含专业摄影跟拍',
    startingPriceLabel: '6人热门单价',
    startingPriceValue: 'Rp570.000',
    startingPriceUnit: '/ 人（6人）• 18人以上低至 Rp370.000/人',
    seasonNote: '已含空调专车往返、油费、往返高速费、独立四驱吉普、印尼公民门票与摄影跟拍',
    docIncludedBannerTitle: '📸 专业单反/微单照片+视频跟拍已包含在套餐内！',
    docIncludedBannerDesc:
      '所有泗水出发私人团（2人至18人以上）均已免费包含专业摄影跟拍，无需额外加钱；如需航拍可在计算器加购无人机（+Rp1.500.000）。',
    tiersTableTitle: '泗水出发私人团阶梯报价表',
    tiersTableSubtitle: '按实际出行人数阶梯计价（2人起订，支持大型企业团建）：',
    highSeasonNote:
      '说明：旺季/节假日每人加收 Rp50.000；外籍游客 (WNA) 需补国家公园外籍门票差价 Rp255.000/人。',
    pricingTiers: [
      { pax: '2 人', pricePerPax: 'Rp1.550.000 / 人' },
      { pax: '3 人', pricePerPax: 'Rp1.100.000 / 人' },
      { pax: '4 人', pricePerPax: 'Rp800.000 / 人' },
      { pax: '5 人', pricePerPax: 'Rp680.000 / 人' },
      { pax: '6 人', pricePerPax: 'Rp570.000 / 人', badge: '最热门 • 满载1辆吉普', highlight: true },
      { pax: '7 人', pricePerPax: 'Rp700.000 / 人' },
      { pax: '8 人', pricePerPax: 'Rp650.000 / 人' },
      { pax: '9 – 10 人', pricePerPax: 'Rp600.000 / 人' },
      { pax: '11 – 12 人', pricePerPax: 'Rp470.000 / 人', badge: '超值 2 辆吉普', highlight: true },
      { pax: '13 – 14 人', pricePerPax: 'Rp480.000 / 人' },
      { pax: '15 – 16 人', pricePerPax: 'Rp450.000 / 人' },
      { pax: '17 – 18 人', pricePerPax: 'Rp400.000 / 人' },
      { pax: '> 18 人', pricePerPax: 'Rp370.000 / 人', badge: '团建最省心价', highlight: true },
    ],
    addons: [
      {
        symbol: '📸',
        label: '专业单反/微单摄影跟拍',
        price: '已包含 (INCLUDE)',
        detail: '全程照片与视频专业拍摄记录已包含于报价内，无需额外付费。',
        included: true,
      },
      {
        symbol: '🚁',
        label: '加购无人机航拍 (Drone)',
        price: '+Rp1.500.000',
        detail: '日出点、沙海与高山草原电影级航拍素材。',
        included: false,
      },
    ],
    facilitiesSectionTitle: '✅ 费用说明（包含与不含）',
    includeTitle: '✅ 费用包含 (Include)',
    includeItems: [
      '泗水 – 布罗莫往返空调专车（Innova Reborn / Hiace Premio / Elf / 旅游巴士）。',
      '经验丰富的专职司机。',
      '全程油费 (BBM) 及往返高速通行费。',
      '100% 独立布罗莫四驱越野吉普车（按每车 5–6 人配置）。',
      '全体团员布罗莫国家公园门票 (TNBTS WNI)。',
      '景区官方管理费与停车费。',
      '专业单反/微单照片与视频跟拍（已包含！）。',
    ],
    excludeTitle: '❌ 费用不含 (Exclude)',
    excludeItems: [
      '火山沙海骑马费用（自愿选择，可步行）。',
      '个人餐饮费用。',
      '景区付费公共洗手间。',
      '外籍游客 (WNA) 门票差价 Rp255.000 / 人。',
      '其他个人消费。',
    ],
    itinerarySectionTitle: '🕚 完整时间行程表（按顺序）',
    itinerarySectionSubtitle: '全程约 14 小时，经高速往返，出发时间可根据航班或车次灵活微调。',
    itinerarySteps: [
      {
        symbol: '🕚',
        time: '23:00 – 23:30 WIB',
        title: '泗水大区 VIP 上门接人',
        description: '空调专车前往朱安达机场、火车站、酒店或指定地址接车，经高速驶向布罗莫。',
      },
      {
        symbol: '🚙',
        time: '02:00 – 02:30 WIB',
        title: '官方中转站换乘四驱吉普',
        description: '抵达布罗莫山麓中转站，换乘 100% 独立专属四驱越野吉普车。',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: '日出观景台与摄影跟拍',
        description: '在最佳观景点悠闲欣赏金色日出，由随团摄影师全程记录精彩瞬间。',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: '深度游览五大经典景点',
        description: '游览 Widodaren 山丘、布罗莫火山口与巴托克火山、Pura Poten 印度庙、耳语沙海与天线宝宝草原。',
      },
      {
        symbol: '🚐',
        time: '10:30 – 13:30 WIB',
        title: '返程送回泗水指定地点',
        description: '经高速舒适返程，直接送回您的酒店、机场、火车站或指定地址。',
      },
    ],
    pickupSectionTitle: '📍 官方接送范围（泗水大区）',
    pickupLead: '📍 支持泗水市区及诗都阿佐全境自由指定上门接送地点。',
    pickupPopularTitle: '热门接送点：',
    pickupPoints: [
      '泗水朱安达国际机场 (Juanda T1 & T2)。',
      '泗水 Gubeng 站、Pasar Turi 站及 Wonokromo 火车站。',
      '泗水与诗都阿佐全境酒店、公寓、写字楼及私人住址。',
    ],
    gearSectionTitle: '🧥 必备防寒装备（气温 2°C – 10°C）',
    gearSectionSubtitle: '布罗莫凌晨气温极低，出发前请务必备齐以下装备：',
    gearItems: [
      {
        symbol: '🧥',
        name: '厚款冲锋衣 / 羽绒服',
        reason: 'Penanjakan 凌晨气温可低至 2°C – 6°C 并伴有山风。',
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
    extraTipTitle: '💡 贴心推荐：最适合外岛飞抵家庭与企业团建',
    extraTipContent:
      '泗水出发私人团非常适合落地朱安达机场或搭乘高铁火车抵达泗水的家庭、商务贵宾及企业团队，专车走高速 + 独立吉普 + 摄影跟拍一站式全包！',
    conclusion:
      '立即打开泗水私人团计算器选择人数、日期与无人机加购项，实时获取透明报价并一键预订！',
    ctaButton: '打开泗水专车计算器立即预订',
    tags: [
      'Private Trip 泗水出发布罗莫',
      '泗水布罗莫价格',
      '朱安达机场接送布罗莫',
      '布罗莫私人团含摄影',
      '泗水布罗莫行程攻略',
      '布罗莫VIP包车',
    ],
  },
};
