import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgToiletHero from '../../assets/images/imgtoiletbromo_wisatabromo.png';

export interface ToiletLocationItem {
  id: string;
  symbol: string;
  name: string;
  subtitle: string;
  statusBadge: string;
  statusTone: 'emerald' | 'sky' | 'amber' | 'rose';
  waterStatus: string;
  crowdLevel: string;
  feeEstimate: string;
  description: string;
  highlights: string[];
}

export interface ToiletFeeRow {
  symbol: string;
  type: string;
  location: string;
  priceRange: string;
  notes: string;
}

export interface ToiletRealityItem {
  id: string;
  symbol: string;
  title: string;
  badge: string;
  tone: 'amber' | 'rose' | 'sky';
  description: string;
  details: string[];
}

export interface ToiletTipItem {
  id: string;
  symbol: string;
  numberBadge: string;
  title: string;
  timingOrTag: string;
  description: string;
}

export interface LocalizedToiletArticleContent {
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
  mapCaption: string;
  quickSummaryBanner: {
    eyebrow: string;
    text: string;
  };
  introduction: string[];
  locationsSectionTitle: string;
  locationsSectionSubtitle: string;
  locations: ToiletLocationItem[];
  feesSectionTitle: string;
  feesSectionSubtitle: string;
  feeHeaders: {
    type: string;
    location: string;
    price: string;
    notes: string;
  };
  feeRows: ToiletFeeRow[];
  feeNote: string;
  realitySectionTitle: string;
  realitySectionSubtitle: string;
  realities: ToiletRealityItem[];
  essentialsBox: {
    title: string;
    subtitle: string;
    items: string[];
  };
  tipsSectionTitle: string;
  tipsSectionSubtitle: string;
  tips: ToiletTipItem[];
  proTipBox: {
    title: string;
    content: string;
  };
  conclusionTitle: string;
  conclusion: string;
  ctaButton: string;
  whatsappText: string;
  sharePrompt: string;
  tags: string[];
}

export const ARTICLE_TOILET_DI_BROMO: Record<SupportedLanguage, LocalizedToiletArticleContent> = {
  id: {
    id: 'toilet-di-bromo',
    slug: 'toilet-di-bromo-lokasi-kondisi-biaya',
    title: 'Toilet di Bromo: Lokasi, Kondisi Realita, dan Biaya Terbaru',
    metaDescription:
      'Panduan lengkap dan jujur soal toilet di Gunung Bromo: daftar lokasi toilet di Area Parkir Jeep Lautan Pasir, Sunrise Point, Kawah Bromo, hingga Rest Area Sukapura–Tosari–Gubugklakah, lengkap dengan biaya Rp2.000–Rp5.000, kondisi air, antrean, dan tips penting.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '27 November 2026',
    readTime: '5 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgToiletHero,
    mapEmbedUrl: '/assets/aistudio/Peta_Toilet_Kaldera_81071062.html',
    mapCaption:
      'Peta Toilet Kaldera Gunung Bromo: sebaran 6 titik lokasi toilet aktif mulai dari Sunrise Point, Lautan Pasir, hingga area kaki tangga Kawah Bromo.',
    quickSummaryBanner: {
      eyebrow: '🚻 PANDUAN LAPANGAN JUJUR • GUNUNG BROMO',
      text: 'Ketahui 4 titik lokasi toilet, tarif Rp2.000–Rp5.000, realita keterbatasan air & antrean 04.00–06.00, serta perlengkapan 🧻 yang wajib Anda bawa sendiri.',
    },
    introduction: [
      'Salah satu pertanyaan paling sering ditanyakan wisatawan sebelum berangkat mengejar sunrise di Gunung Bromo — namun jarang dibahas secara jujur — adalah soal ketersediaan toilet. Dengan suhu dini hari yang bisa menyentuh 5°C–10°C, wajar sekali jika rasa ingin buang air kecil muncul lebih sering dari biasanya.',
      'Kabar baiknya, toilet tersedia di beberapa titik utama kawasan Bromo. Namun karena berada di kawasan taman nasional pegunungan vulkanik aktif, kondisi fasilitas dan pasokan airnya sangat berbeda dengan toilet mal atau hotel di kota. Supaya perjalanan Anda tetap nyaman tanpa panik di tengah dinginnya Bromo, simak panduan lengkap lokasi, kondisi realita, biaya, dan tips toilet di Bromo berikut ini.',
    ],
    locationsSectionTitle: '🚻 4 Lokasi Toilet di Bromo yang Wajib Anda Ketahui',
    locationsSectionSubtitle:
      'Sebaran titik toilet mulai dari jalur transit pintu masuk, puncak sunrise, hingga area lautan pasir dan kaki tangga kawah.',
    locations: [
      {
        id: 'rest-area-transit',
        symbol: '🚻',
        name: 'Rest Area / Titik Transit (Sukapura, Tosari, Gubugklakah)',
        subtitle: 'Pintu Masuk Probolinggo, Pasuruan & Kab. Malang',
        statusBadge: 'Paling Layak & Direkomendasikan',
        statusTone: 'emerald',
        waterStatus: 'Air bersih lancar & stabil',
        crowdLevel: 'Relatif longgar',
        feeEstimate: 'Rp5.000 / Gratis (konsumen)',
        description:
          'Toilet di rest area, warung lokal, basecamp Jeep, atau homestay di sekitar Sukapura, Tosari, dan Gubugklakah adalah fasilitas yang paling layak, paling bersih, dan memiliki pasokan air terbaik sebelum Anda masuk ke dalam kawasan kaldera Bromo.',
        highlights: [
          'Fasilitas paling bersih dengan air mengalir lebih stabil dibanding di dalam kawasan taman nasional.',
          'Ideal untuk buang air besar, cuci muka, atau ganti baju hangat sebelum naik Jeep 4x4.',
        ],
      },
      {
        id: 'sunrise-point',
        symbol: '🚻',
        name: 'Sunrise Point (Penanjakan, Bukit King Kong & Bukit Cinta)',
        subtitle: 'Area Warung & Parkiran Jeep Atas',
        statusBadge: 'Cukup Layak • Ramai Saat Sunrise',
        statusTone: 'sky',
        waterStatus: 'Cukup tersedia (air sangat dingin)',
        crowdLevel: 'Sangat padat 04.00–06.00 WIB',
        feeEstimate: 'Rp3.000 – Rp5.000',
        description:
          'Tersedia beberapa toilet di deretan warung kopi/mie instan dan area parkiran atas Sunrise Point. Secara kondisi lebih layak dibanding area pasir bawah, tetapi sangat ramai saat akhir pekan dan peak season.',
        highlights: [
          'Tersebar di belakang warung-warung hangat dekat area parkir Jeep Penanjakan & King Kong Hill.',
          'Bisa sekalian memesan teh hangat atau kopi sambil menunggu antrean toilet berkurang.',
        ],
      },
      {
        id: 'area-parkir-jeep-lautan-pasir',
        symbol: '🚻',
        name: 'Area Parkir Jeep / Lautan Pasir',
        subtitle: 'Area Parkir Utama Kaldera & Sekitar Pura Luhur Poten',
        statusBadge: 'Toilet Dasar (MCK) • Air Terbatas',
        statusTone: 'amber',
        waterStatus: 'Terbatas, sering menipis saat kemarau',
        crowdLevel: 'Ramai 07.00–09.30 WIB',
        feeEstimate: 'Rp2.000 – Rp5.000',
        description:
          'Tersedia toilet dasar (MCK) sederhana yang disediakan pengelola di sekitar area parkir Jeep Lautan Pasir. Kondisi air di titik ini terbatas, terutama saat musim kemarau ketika debit sumber air menurun drastis.',
        highlights: [
          'Bentuk bangunan MCK sederhana dengan toilet jongkok dan bak penampungan air terbatas.',
          'Debu vulkanik halus sering masuk terbawa angin, sehingga kebersihan lantai bersifat seadanya.',
        ],
      },
      {
        id: 'kawah-bromo-tangga',
        symbol: '🚻',
        name: 'Kawah Bromo (Area Tangga)',
        subtitle: 'Di Bawah Kaki Tangga Kawah & Dekat Deretan Warung',
        statusBadge: 'Darurat Saja • Air Sering Terbatas',
        statusTone: 'rose',
        waterStatus: 'Sangat terbatas & rawan habis',
        crowdLevel: 'Padat saat jam naik kawah',
        feeEstimate: 'Rp2.000 – Rp5.000 (wajib bayar)',
        description:
          'Ada beberapa bilik toilet di bawah kaki tangga Kawah Bromo dan dekat warung-warung lokal. Karena lokasinya berada di lereng vulkanik kering, air di sini sering terbatas dan setiap penggunaan dikenakan biaya.',
        highlights: [
          'Sangat membantu untuk kondisi mendesak sebelum menapaki 250 anak tangga menuju bibir kawah.',
          'Jangan mengandalkan air melimpah; pastikan sudah membawa tisu basah dan hand sanitizer sendiri.',
        ],
      },
    ],
    feesSectionTitle: '💰 Biaya Toilet di Bromo (Tarif Lapangan)',
    feesSectionSubtitle:
      'Semua transaksi toilet di kawasan Gunung Bromo masih menggunakan uang tunai (cash). Tidak tersedia pembayaran QRIS di bilik toilet.',
    feeHeaders: {
      type: 'Jenis Toilet',
      location: 'Area / Lokasi',
      price: 'Biaya Masuk',
      notes: 'Ketentuan Lapangan',
    },
    feeRows: [
      {
        symbol: '💰',
        type: 'Toilet Umum di Area Wisata',
        location: 'Parkir Jeep Lautan Pasir, Bawah Tangga Kawah & Spot Umum',
        priceRange: 'Rp2.000 – Rp5.000 / orang',
        notes: 'Kadang menerapkan kotak sukarela, kadang tarif tetap yang dijaga petugas lokal.',
      },
      {
        symbol: '💰',
        type: 'Toilet di Warung / Homestay',
        location: 'Sunrise Point (Penanjakan/King Kong) & Rest Area Transit',
        priceRange: 'Rp5.000 atau Gratis',
        notes: 'Biasanya Rp5.000 untuk umum, atau gratis jika Anda membeli makanan/minuman hangat di warung tersebut.',
      },
    ],
    feeNote:
      'Catatan: Tarif dapat sedikit menyesuaikan saat libur nasional / high season (Rp5.000). Selalu siapkan uang receh Rp2.000 dan Rp5.000 agar tidak kesulitan mencari kembalian.',
    realitySectionTitle: '⚠️ Kondisi Realita di Lapangan (Jujur & Apa Adanya)',
    realitySectionSubtitle:
      'Agar tidak kaget saat tiba di lokasi, pahami tiga fakta lapangan tentang toilet di kawasan Gunung Bromo berikut ini:',
    realities: [
      {
        id: 'keterbatasan-air',
        symbol: '⚠️',
        title: 'Keterbatasan Air di Lautan Pasir & Kawah',
        badge: 'PERINGATAN AIR',
        tone: 'amber',
        description:
          'Di area Lautan Pasir dan Kawah Bromo, pasokan air bersih harus didistribusikan dari luar kawasan menggunakan tangki. Karena itu, air sering habis terutama saat peak season, akhir pekan panjang, dan puncak musim kemarau (Mei–Oktober).',
        details: [
          'Jangan berharap toilet sebersih hotel berbintang dengan air melimpah dan saluran modern.',
          'Air yang tersedia di bak penampungan juga terasa sangat dingin menusuk saat dini hari.',
        ],
      },
      {
        id: 'antrean-sunrise',
        symbol: '⚠️',
        title: 'Antrean Panjang Saat Jam Sunrise (04.00–06.00 WIB)',
        badge: 'PERINGATAN ANTREAN',
        tone: 'rose',
        description:
          'Memasuki jam emas sunrise pukul 04.00 hingga 06.00 WIB, ribuan wisatawan berkumpul bersamaan di Penanjakan dan Sunrise Point lainnya. Toilet di area ini menjadi sangat padat dengan antrean rata-rata 10 hingga 20 menit.',
        details: [
          'Jika menunda ke toilet hingga pukul 04.30 WIB, Anda berisiko kehilangan spot berdiri terbaik atau melewatkan momen golden sunrise.',
          'Antrean toilet perempuan biasanya jauh lebih panjang dibanding toilet laki-laki.',
        ],
      },
      {
        id: 'bawa-perlengkapan',
        symbol: '🧻',
        title: 'Bawa Perlengkapan Sendiri (Jangan Bergantung pada Fasilitas)',
        badge: 'PERLENGKAPAN WAJIB',
        tone: 'sky',
        description:
          'Mayoritas toilet di kawasan wisata Bromo tidak menyediakan tisu gulung, sabun cuci tangan, maupun pengering. Membawa tisu kering, tisu basah, dan hand sanitizer sendiri adalah langkah wajib demi kebersihan dan kenyamanan Anda.',
        details: [
          'Tisu basah sangat menyelamatkan saat air di bak toilet area kawah atau lautan pasir menipis.',
          'Siapkan kantong plastik kecil untuk membawa kembali sampah tisu bekas ke tempat sampah agar Bromo tetap bersih.',
        ],
      },
    ],
    essentialsBox: {
      title: '🧻 Checklist Kit Toilet Pribadi ke Bromo',
      subtitle: 'Masukkan 4 barang ringan ini di kantong depan tas selempang atau jaket agar mudah diambil:',
      items: [
        '🧻 Tisu kering (travel pack 1–2 bungkus)',
        '🧻 Tisu basah antiseptik / non-alkohol (penyelamat saat air habis)',
        '🧴 Hand sanitizer ukuran saku (50–60 ml)',
        '💰 Uang tunai pecahan kecil (Rp2.000 & Rp5.000) + kantong plastik kecil sampah',
      ],
    },
    tipsSectionTitle: '🚻 3 Tips Penting Menggunakan Toilet di Bromo',
    tipsSectionSubtitle:
      'Trik sederhana dari pengalaman driver Jeep lokal agar urusan toilet tidak mengganggu momen sunrise Anda:',
    tips: [
      {
        id: 'tip-sebelum-jeep',
        symbol: '🚻',
        numberBadge: 'TIPS 01',
        title: 'Gunakan Toilet Sebelum Naik Jeep',
        timingOrTag: 'Wajib sebelum masuk kaldera',
        description:
          'Manfaatkan toilet di hotel, homestay, atau rest area titik transit (Sukapura, Tosari, Gubugklakah) sebelum berangkat menuju Lautan Pasir. Di titik inilah toilet masih paling bersih, air mengalir lancar, dan bebas antrean panjang.',
      },
      {
        id: 'tip-uang-kecil',
        symbol: '🚻',
        numberBadge: 'TIPS 02',
        title: 'Siapkan Uang Kecil (Rp2.000 & Rp5.000)',
        timingOrTag: 'Cash Only • Minim kembalian',
        description:
          'Banyak penjaga toilet bayar di area wisata yang tidak menyediakan uang kembalian—terutama saat dini hari ketika Anda menyodorkan pecahan Rp50.000 atau Rp100.000. Simpan beberapa lembar Rp2.000 dan Rp5.000 khusus di saku luar jaket.',
      },
      {
        id: 'tip-hindari-puncak',
        symbol: '🚻',
        numberBadge: 'TIPS 03',
        title: 'Hindari Toilet Saat Puncak Keramaian',
        timingOrTag: 'Sebelum 03.30 WIB / Setelah 07.00 WIB',
        description:
          'Kalau memungkinkan, atur jadwal ke toilet sebelum pukul 03.30 WIB (sesaat setelah tiba di warung Sunrise Point) atau sekalian setelah pukul 07.00 WIB ketika sebagian besar rombongan sudah mulai turun ke Lautan Pasir.',
      },
    ],
    proTipBox: {
      title: 'Pro Tip Driver Lokal WisataBromo.co',
      content:
        'Saat menunggu matahari terbit di Penanjakan atau King Kong Hill, hindari minum kopi atau teh terlalu banyak sebelum pukul 05.00 WIB jika Anda mudah kebelet di suhu dingin. Jika memilih paket Private Trip WisataBromo.co, driver kami siap merekomendasikan warung dengan toilet paling bersih di titik transit Sukapura, Tosari, atau Gubugklakah sebelum naik ke puncak.',
    },
    conclusionTitle: 'Siap Menjelajahi Gunung Bromo dengan Lebih Nyaman & Tenang?',
    conclusion:
      'Dengan mengetahui lokasi toilet, menyiapkan biaya tunai Rp2.000–Rp5.000, memahami keterbatasan air di lapangan, serta membawa tisu dan hand sanitizer sendiri, Anda bisa menikmati golden sunrise hingga Kawah Bromo tanpa drama. Butuh itinerary Bromo yang rapi dengan driver lokal yang tahu titik transit ternyaman? Konsultasikan perjalanan Anda bersama tim WisataBromo.co sekarang!',
    ctaButton: 'Rencanakan & Booking Trip Bromo',
    whatsappText:
      'Halo Admin WisataBromo.co, saya baru baca panduan Toilet di Bromo dan ingin konsultasi paket wisata Bromo yang nyaman.',
    sharePrompt: 'Bagikan panduan lokasi & biaya toilet di Bromo ini ke teman perjalanan Anda',
    tags: [
      'Toilet di Bromo',
      'Biaya Toilet Bromo',
      'Fasilitas Gunung Bromo',
      'Tips Wisata Bromo',
      'Panduan Bromo',
      'Rest Area Bromo',
    ],
  },

  en: {
    id: 'toilet-di-bromo',
    slug: 'toilet-di-bromo-lokasi-kondisi-biaya',
    title: 'Toilets at Mount Bromo: Locations, Real Conditions, and Fees',
    metaDescription:
      'An honest, practical guide to toilets at Mount Bromo: exact locations at Sea of Sand Jeep Parking, Sunrise Point, Bromo Crater stairs, and Transit Rest Areas (Sukapura, Tosari, Gubugklakah), plus fees (Rp2,000–Rp5,000), water realities, queues, and essential tips.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: '27 November 2026',
    readTime: '5 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guide',
    heroImage: imgToiletHero,
    mapEmbedUrl: '/assets/aistudio/Peta_Toilet_Kaldera_81071062.html',
    mapCaption:
      'Mount Bromo Caldera Toilet Map: 6 key toilet pin locations spanning Sunrise Point, the Sea of Sand Jeep parking zone, and the Bromo Crater stairs.',
    quickSummaryBanner: {
      eyebrow: '🚻 HONEST FIELD GUIDE • MOUNT BROMO',
      text: 'Discover the 4 main toilet locations, Rp2,000–Rp5,000 cash fees, real water & 04:00–06:00 queue conditions, plus essential 🧻 items to pack yourself.',
    },
    introduction: [
      'One of the most common questions travelers ask before heading out for a Mount Bromo sunrise trip—yet rarely answered honestly—is about toilet availability. With pre-dawn temperatures dropping to 5°C–10°C, needing the restroom more frequently than usual is completely normal.',
      'The good news is that toilets are available across key spots in the Bromo Tengger Semeru area. However, because this is a high-altitude active volcanic national park, facility standards and water supply differ greatly from city hotels or malls. Here is a complete, honest breakdown of toilet locations, fees, field realities, and smart tips for Mount Bromo.',
    ],
    locationsSectionTitle: '🚻 4 Key Toilet Locations at Mount Bromo',
    locationsSectionSubtitle:
      'Where to find restrooms from the gateway transit villages and sunrise viewpoints down to the Sea of Sand and crater stairs.',
    locations: [
      {
        id: 'rest-area-transit',
        symbol: '🚻',
        name: 'Rest Areas / Transit Points (Sukapura, Tosari, Gubugklakah)',
        subtitle: 'Probolinggo, Pasuruan & Malang Entry Gateways',
        statusBadge: 'Best Quality • Most Recommended',
        statusTone: 'emerald',
        waterStatus: 'Clean & steady running water',
        crowdLevel: 'Relatively quiet',
        feeEstimate: 'Rp5,000 / Free (with purchase)',
        description:
          'Toilets at local rest areas, cafés, Jeep basecamps, or homestays in Sukapura, Tosari, and Gubugklakah are by far the cleanest and most reliable before entering the caldera.',
        highlights: [
          'Cleanest facilities with consistent running water compared to inside the volcanic basin.',
          'Ideal stop to use the restroom, freshen up, or layer warm clothes before boarding your 4x4 Jeep.',
        ],
      },
      {
        id: 'sunrise-point',
        symbol: '🚻',
        name: 'Sunrise Point (Penanjakan, King Kong Hill & Bukit Cinta)',
        subtitle: 'Local Stalls & Upper Jeep Parking Area',
        statusBadge: 'Decent • Crowded at Sunrise',
        statusTone: 'sky',
        waterStatus: 'Generally available (ice-cold water)',
        crowdLevel: 'Very busy 04:00–06:00 WIB',
        feeEstimate: 'Rp3,000 – Rp5,000',
        description:
          'Toilets are available at the row of warm-drink stalls (warung) and upper Jeep parking lots around Sunrise Point. They are more decent than the valley below, but get heavily crowded during weekends and peak season.',
        highlights: [
          'Located behind local food and coffee stalls near the Penanjakan and King Kong Hill Jeep parking zones.',
          'Great spot to grab a hot tea or instant noodles while waiting for queues to ease.',
        ],
      },
      {
        id: 'area-parkir-jeep-lautan-pasir',
        symbol: '🚻',
        name: 'Jeep Parking Area / Sea of Sand (Lautan Pasir)',
        subtitle: 'Main Caldera Parking & Near Pura Luhur Poten',
        statusBadge: 'Basic Public MCK • Limited Water',
        statusTone: 'amber',
        waterStatus: 'Limited, especially in dry season',
        crowdLevel: 'Busy 07:00–09:30 WIB',
        feeEstimate: 'Rp2,000 – Rp5,000',
        description:
          'Basic public toilet blocks (MCK) are provided by local park operators near the Sea of Sand Jeep parking zone. Water supply here is limited, especially during the dry season.',
        highlights: [
          'Simple squat-style washrooms relying on stored water tubs rather than pressurized plumbing.',
          'Fine volcanic dust often blows inside, so expect basic rustic mountain conditions.',
        ],
      },
      {
        id: 'kawah-bromo-tangga',
        symbol: '🚻',
        name: 'Bromo Crater (Staircase Area)',
        subtitle: 'Below the Crater Stairs & Near Local Stalls',
        statusBadge: 'Emergency Use • Scarce Water',
        statusTone: 'rose',
        waterStatus: 'Very limited & often runs out',
        crowdLevel: 'Busy during crater climb hours',
        feeEstimate: 'Rp2,000 – Rp5,000 (paid)',
        description:
          'There are toilets located at the base of the Bromo Crater stairs and near nearby snack stalls. Water frequently runs low due to the dry volcanic slope, and a small entry fee is always charged.',
        highlights: [
          'Handy for urgent stops right before climbing the 250 steps up to the crater rim.',
          'Do not count on abundant water—always carry your own wet wipes and hand sanitizer.',
        ],
      },
    ],
    feesSectionTitle: '💰 Toilet Fees at Mount Bromo',
    feesSectionSubtitle:
      'All restrooms around Mount Bromo accept Indonesian Rupiah cash only. Digital payments or QRIS are not available at toilet booths.',
    feeHeaders: {
      type: 'Toilet Type',
      location: 'Area / Location',
      price: 'Entry Fee',
      notes: 'What to Expect',
    },
    feeRows: [
      {
        symbol: '💰',
        type: 'Public Toilets in Tourist Zones',
        location: 'Sea of Sand Jeep Parking, Crater Stairs & Public Stops',
        priceRange: 'Rp2,000 – Rp5,000 / person',
        notes: 'Sometimes a voluntary donation box, sometimes a fixed tariff collected by an attendant.',
      },
      {
        symbol: '💰',
        type: 'Warung (Stall) / Homestay Toilets',
        location: 'Sunrise Point Stalls & Gateway Rest Areas',
        priceRange: 'Rp5,000 or Free',
        notes: 'Usually Rp5,000 for walk-ins, or free if you buy hot drinks or snacks at the stall.',
      },
    ],
    feeNote:
      'Note: Fees may sit at Rp5,000 during national holidays or peak season. Keep small Rp2,000 and Rp5,000 notes handy as attendants rarely have change.',
    realitySectionTitle: '⚠️ Real On-the-Ground Conditions (Honest & Practical)',
    realitySectionSubtitle:
      'Set realistic expectations before you go with these three key realities of Mount Bromo restrooms:',
    realities: [
      {
        id: 'keterbatasan-air',
        symbol: '⚠️',
        title: 'Limited Water in the Sea of Sand & Crater Area',
        badge: 'WATER WARNING',
        tone: 'amber',
        description:
          'In the Sea of Sand and crater zones, water must be trucked in from outside the caldera. Water often runs out during peak season, long weekends, and the dry season (May–October).',
        details: [
          'Do not expect spotless city-standard restrooms or abundant running water.',
          'Stored water in mountain basins is freezing cold before sunrise.',
        ],
      },
      {
        id: 'antrean-sunrise',
        symbol: '⚠️',
        title: 'Long Queues During Sunrise Hours (04:00–06:00 WIB)',
        badge: 'QUEUE WARNING',
        tone: 'rose',
        description:
          'Between 04:00 and 06:00 AM, thousands of visitors gather at Penanjakan and Sunrise Point simultaneously. Restrooms become heavily congested with 10–20 minute waits.',
        details: [
          'Waiting until 04:30 AM to queue can cost you your sunrise vantage spot.',
          'Lines for women’s stalls are typically much longer than men’s stalls.',
        ],
      },
      {
        id: 'bawa-perlengkapan',
        symbol: '🧻',
        title: 'Bring Your Own Supplies (Never Rely on Facilities)',
        badge: 'ESSENTIAL GEAR',
        tone: 'sky',
        description:
          'Most public toilets at Mount Bromo do not provide toilet paper, soap, or dryers. Packing your own dry tissues, wet wipes, and hand sanitizer is strongly recommended.',
        details: [
          'Wet wipes are a lifesaver whenever water tubs run low near the crater or Sea of Sand.',
          'Bring a small zip bag for used tissues so you can dispose of them properly at main trash bins.',
        ],
      },
    ],
    essentialsBox: {
      title: '🧻 Personal Bromo Restroom Kit Checklist',
      subtitle: 'Keep these 4 lightweight items in your outer jacket pocket or daypack for instant access:',
      items: [
        '🧻 Dry pocket tissues (1–2 travel packs)',
        '🧻 Wet wipes (essential when water runs low)',
        '🧴 Travel-size hand sanitizer (50–60 ml)',
        '💰 Small cash notes (Rp2,000 & Rp5,000) + a small trash pouch',
      ],
    },
    tipsSectionTitle: '🚻 3 Smart Tips for Using Toilets at Mount Bromo',
    tipsSectionSubtitle:
      'Simple habits recommended by our local Jeep drivers so restroom stops never disrupt your sunrise experience:',
    tips: [
      {
        id: 'tip-sebelum-jeep',
        symbol: '🚻',
        numberBadge: 'TIP 01',
        title: 'Use the Toilet Before Boarding Your Jeep',
        timingOrTag: 'Best before entering the caldera',
        description:
          'Always use the restroom at your hotel, homestay, or gateway rest area (Sukapura, Tosari, or Gubugklakah) before heading into the Sea of Sand. Those are the cleanest toilets with reliable water and minimal waiting.',
      },
      {
        id: 'tip-uang-kecil',
        symbol: '🚻',
        numberBadge: 'TIP 02',
        title: 'Carry Small Cash Notes (Rp2,000 & Rp5,000)',
        timingOrTag: 'Cash Only • Rarely has change',
        description:
          'Many paid toilet attendants do not have change early in the morning, especially for Rp50,000 or Rp100,000 bills. Keep dedicated small bills in your outer pocket.',
      },
      {
        id: 'tip-hindari-puncak',
        symbol: '🚻',
        numberBadge: 'TIP 03',
        title: 'Avoid Peak Crowd Hours',
        timingOrTag: 'Before 03:30 WIB or After 07:00 WIB',
        description:
          'Whenever possible, visit the restroom before 03:30 AM right after arriving at the Sunrise Point stalls, or wait until after 07:00 AM once crowds head down to the Sea of Sand.',
      },
    ],
    proTipBox: {
      title: 'WisataBromo.co Local Driver Pro Tip',
      content:
        'While waiting for sunrise at Penanjakan or King Kong Hill, pace your hot coffee or tea intake before 05:00 AM since cold mountain air triggers frequent urges. On WisataBromo.co trips, our drivers gladly stop at the cleanest transit stalls in Sukapura, Tosari, or Gubugklakah before entering the park.',
    },
    conclusionTitle: 'Ready for a Smooth, Worry-Free Mount Bromo Trip?',
    conclusion:
      'Knowing exact toilet spots, keeping Rp2,000–Rp5,000 cash ready, expecting limited water in the caldera, and packing your own tissues and sanitizer will make your Bromo journey far more comfortable. Want a well-paced trip with local drivers who know the best transit stops? Plan your Bromo trip with WisataBromo.co today!',
    ctaButton: 'Plan & Book Your Bromo Trip',
    whatsappText:
      'Hello WisataBromo.co Admin, I just read the Mount Bromo Toilet Guide and would like to consult about a comfortable Bromo tour package.',
    sharePrompt: 'Share this Mount Bromo toilet locations & fees guide with your travel buddies',
    tags: [
      'Mount Bromo Toilets',
      'Bromo Toilet Fees',
      'Mount Bromo Facilities',
      'Bromo Travel Tips',
      'Mount Bromo Guide',
      'Bromo Rest Areas',
    ],
  },

  zh: {
    id: 'toilet-di-bromo',
    slug: 'toilet-di-bromo-lokasi-kondisi-biaya',
    title: '布罗莫火山厕所指南：位置分布、真实条件与收费标准',
    metaDescription:
      '布罗莫火山（Mount Bromo）最真实实用的如厕攻略：详解沙海吉普停车场、日出观景台、火山口台阶及三大入口休息区（Sukapura/Tosari/Gubugklakah）厕所位置、Rp2,000–Rp5,000收费标准、缺水与排队实况及实用贴士。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月27日',
    readTime: '阅读约 5 分钟',
    category: 'tips_wisata',
    categoryLabel: '攻略与指南',
    heroImage: imgToiletHero,
    mapEmbedUrl: '/assets/aistudio/Peta_Toilet_Kaldera_81071062.html',
    mapCaption:
      '布罗莫火山口厕所分布图：标注日出观景台、沙海吉普停车场及火山口台阶下方的 6 处厕所点位。',
    quickSummaryBanner: {
      eyebrow: '🚻 布罗莫火山实地真实攻略',
      text: '一次掌握 4 大厕所位置、Rp2,000–Rp5,000 现金收费、缺水与 04:00–06:00 排队实况，以及必带的 🧻 随身物品。',
    },
    introduction: [
      '前往布罗莫火山看日出前，游客最常私下打听却很少被坦诚说明的问题之一，就是“山上有没有厕所、干不干净？”。布罗莫凌晨气温常降至 5°C–10°C，低温环境下上厕所的频率往往比平时更高。',
      '好消息是，布罗莫主要景区节点都设有厕所；但由于地处高海拔活火山国家公园，设施条件与水源远不能与城市商场或酒店相比。为了让您的旅程从容无忧，以下为您整理最真实的布罗莫厕所位置、收费标准、实地状况与实用避坑贴士。',
    ],
    locationsSectionTitle: '🚻 布罗莫火山 4 大厕所位置分布',
    locationsSectionSubtitle:
      '从入山中转休息区、山顶日出观景台，到沙海停车场与火山口台阶下方的如厕点一览。',
    locations: [
      {
        id: 'rest-area-transit',
        symbol: '🚻',
        name: '中转休息区 / 入口村落（Sukapura、Tosari、Gubugklakah）',
        subtitle: '庞越、岩望与玛琅三大入山门户',
        statusBadge: '条件最好 • 强烈推荐',
        statusTone: 'emerald',
        waterStatus: '自来水稳定充足',
        crowdLevel: '人少不拥挤',
        feeEstimate: 'Rp5,000 / 消费免费',
        description:
          '位于 Sukapura、Tosari 或 Gubugklakah 入口休息区、餐馆、吉普大本营或民宿内的厕所，是进入布罗莫火山口前条件最干净、水源最充足的如厕点。',
        highlights: [
          '相比火山口内部，卫生程度最高且供水稳定。',
          '非常适合在换乘四驱吉普车前如厕、洗漱或增添防寒衣物。',
        ],
      },
      {
        id: 'sunrise-point',
        symbol: '🚻',
        name: '日出观景台（Penanjakan / King Kong Hill / 爱情山）',
        subtitle: '热饮小摊区与上方吉普停车场',
        statusBadge: '条件尚可 • 日出时段极拥挤',
        statusTone: 'sky',
        waterStatus: '基本有水（水温极冰冷）',
        crowdLevel: '04:00–06:00 非常拥挤',
        feeEstimate: 'Rp3,000 – Rp5,000',
        description:
          '日出观景台周边的热饮小吃摊与上方停车场均设有厕所。整体条件比山下沙海好一些，但周末与旺季排队非常密集。',
        highlights: [
          '多分布在 Penanjakan 与 King Kong Hill 停车区旁的暖饮小店后方。',
          '若排队较长，可顺便点杯热茶或泡面暖身等候。',
        ],
      },
      {
        id: 'area-parkir-jeep-lautan-pasir',
        symbol: '🚻',
        name: '吉普车停车场 / 沙海（Lautan Pasir）',
        subtitle: '火山口沙海主停车区与 Poten 印度教寺庙周边',
        statusBadge: '基础公厕（MCK）• 水源有限',
        statusTone: 'amber',
        waterStatus: '供水紧张，旱季尤甚',
        crowdLevel: '07:00–09:30 较忙',
        feeEstimate: 'Rp2,000 – Rp5,000',
        description:
          '景区管理方在沙海吉普停车场附近设有基础公共厕所（MCK）。由于地处火山沙海，水源非常有限，尤其在旱季经常缺水。',
        highlights: [
          '多为简易蹲厕并依靠蓄水池供水，环境朴素。',
          '风大时常有细火山灰飘入地面，建议做好心理准备。',
        ],
      },
      {
        id: 'kawah-bromo-tangga',
        symbol: '🚻',
        name: '布罗莫火山口（台阶区域）',
        subtitle: '火山口台阶下方与周边小摊旁',
        statusBadge: '仅应急使用 • 经常缺水',
        statusTone: 'rose',
        waterStatus: '水源极少且易用尽',
        crowdLevel: '攀登火山口高峰较忙',
        feeEstimate: 'Rp2,000 – Rp5,000（需付费）',
        description:
          '火山口台阶脚下及附近小摊旁设有收费厕所。由于地处干燥的火山斜坡，供水经常不足，且每次使用均需付费。',
        highlights: [
          '适合在攀登 250 级火山口台阶前应急使用。',
          '切勿指望有充足清水，务必随身携带湿巾和免洗洗手液。',
        ],
      },
    ],
    feesSectionTitle: '💰 布罗莫厕所收费标准',
    feesSectionSubtitle:
      '布罗莫景区所有厕所均仅收印尼盾现金（Cash Only），不支持扫码或刷卡。',
    feeHeaders: {
      type: '厕所类型',
      location: '分布区域',
      price: '费用参考',
      notes: '现场说明',
    },
    feeRows: [
      {
        symbol: '💰',
        type: '景区公共厕所',
        location: '沙海吉普停车场、火山口台阶下及景区公厕',
        priceRange: 'Rp2,000 – Rp5,000 / 人',
        notes: '部分放置自愿投币箱，部分由当地管理员按固定标准收费。',
      },
      {
        symbol: '💰',
        type: '小吃摊 / 民宿厕所',
        location: '日出观景台小摊与三大入口中转休息区',
        priceRange: 'Rp5,000 或免费',
        notes: '单次使用通常 Rp5,000；若在店内购买热饮或餐食一般可免费使用。',
      },
    ],
    feeNote:
      '提示：节假日或旅游旺季收费通常为 Rp5,000。请提前准备 Rp2,000 与 Rp5,000 小额纸币，现场通常很难找零。',
    realitySectionTitle: '⚠️ 实地真实状况（坦诚提醒）',
    realitySectionSubtitle:
      '出发前先了解布罗莫厕所的三大现实情况，避免现场措手不及：',
    realities: [
      {
        id: 'keterbatasan-air',
        symbol: '⚠️',
        title: '沙海与火山口区域水源紧张',
        badge: '缺水提醒',
        tone: 'amber',
        description:
          '沙海与火山口一带的水源依赖外部运水车补给，因此在旺季、小长假及旱季（5月–10月）非常容易断水。请勿期待像城市酒店一样干净且水量充沛。',
        details: [
          '蓄水池里的水在凌晨极度冰冷，且高峰期容易浑浊或见底。',
          '提前调整心理预期，把景区厕所当作基本应急设施即可。',
        ],
      },
      {
        id: 'antrean-sunrise',
        symbol: '⚠️',
        title: '日出高峰（04:00–06:00）排队严重',
        badge: '排队提醒',
        tone: 'rose',
        description:
          '凌晨 04:00 至 06:00 是观赏日出的最高峰，Penanjakan 等观景台游客爆满，厕所排队时间普遍需要 10 至 20 分钟。',
        details: [
          '如果等到 04:30 才去排队，极易错过最佳机位甚至日出瞬间。',
          '女厕排队长度通常远超男厕，建议提早安排。',
        ],
      },
      {
        id: 'bawa-perlengkapan',
        symbol: '🧻',
        title: '务必自备纸巾与清洁用品',
        badge: '必备物品',
        tone: 'sky',
        description:
          '布罗莫绝大多数公厕不提供卷纸、洗手液或烘干机。强烈建议随身携带干纸巾、湿纸巾和免洗洗手液，切勿依赖现场设施。',
        details: [
          '当沙海或火山口公厕缺水时，湿纸巾就是最大的救星。',
          '建议额外准备一个小塑料袋，将用过的纸巾带回主垃圾桶投放，共同保护国家公园环境。',
        ],
      },
    ],
    essentialsBox: {
      title: '🧻 布罗莫随身如厕必备清单',
      subtitle: '将以下 4 样轻便物品放在外套口袋或随身小包外层，随时取用：',
      items: [
        '🧻 便携干纸巾（1–2 包）',
        '🧻 消毒/无酒精湿纸巾（缺水时必备）',
        '🧴 便携免洗洗手液（50–60 ml）',
        '💰 小额印尼盾现金（Rp2,000 与 Rp5,000）+ 迷你垃圾袋',
      ],
    },
    tipsSectionTitle: '🚻 布罗莫如厕 3 大实用贴士',
    tipsSectionSubtitle:
      '来自本地吉普司机的实战经验，让您轻松避开排队与尴尬：',
    tips: [
      {
        id: 'tip-sebelum-jeep',
        symbol: '🚻',
        numberBadge: '贴士 01',
        title: '上吉普车前先解决如厕问题',
        timingOrTag: '进入沙海前最关键',
        description:
          '出发前往沙海前，务必充分利用酒店、民宿或中转休息区（Sukapura、Tosari、Gubugklakah）的厕所。这里的设施最干净、供水充足且几乎不用排队。',
      },
      {
        id: 'tip-uang-kecil',
        symbol: '🚻',
        numberBadge: '贴士 02',
        title: '提前备好小额零钱',
        timingOrTag: '仅收现金 • 很难找零',
        description:
          '许多收费厕所凌晨并没有足够零钱找补，尤其避免递出 Rp50,000 或 Rp100,000 大钞。提前在外套口袋放好几张 Rp2,000 和 Rp5,000 纸币最省心。',
      },
      {
        id: 'tip-hindari-puncak',
        symbol: '🚻',
        numberBadge: '贴士 03',
        title: '错开人流最高峰时段',
        timingOrTag: '03:30 之前或 07:00 之后',
        description:
          '如条件允许，尽量在 03:30 刚抵达日出观景台小摊时先去一次厕所，或等到 07:00 以后大部队下山前往沙海时再使用，可省下大量排队时间。',
      },
    ],
    proTipBox: {
      title: 'WisataBromo.co 本地司机贴心建议',
      content:
        '凌晨在 Penanjakan 或 King Kong Hill 候日出时，若您在低温下容易频繁跑厕所，建议 05:00 前先小口啜饮热茶或咖啡即可。预订 WisataBromo.co 行程时，我们的本地司机会贴心安排在 Sukapura、Tosari 或 Gubugklakah 最干净的中转站停留，让您全程更安心。',
    },
    conclusionTitle: '准备好舒适无忧地畅游布罗莫火山了吗？',
    conclusion:
      '提前摸清布罗莫四大厕所点位、备好 Rp2,000–Rp5,000 零钱、了解高海拔缺水与排队实况并自备纸巾湿巾，就能让您专心沉浸在震撼日出与火山口奇景中。如需更省心的行程规划与熟悉沿途干净休息站的本地司机，欢迎立即联系 WisataBromo.co！',
    ctaButton: '咨询并预订布罗莫行程',
    whatsappText:
      '您好 WisataBromo.co 客服，我刚阅读了布罗莫厕所攻略，想咨询舒适省心的布罗莫旅游套餐。',
    sharePrompt: '把这份布罗莫厕所位置与费用攻略分享给同行伙伴',
    tags: [
      '布罗莫厕所',
      '布罗莫攻略',
      '布罗莫费用',
      '火山旅游贴士',
      '印尼自由行',
      '布罗莫设施',
    ],
  },
};
