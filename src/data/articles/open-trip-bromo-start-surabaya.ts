import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgOpenTripSurabaya from '../../assets/images/package_custom_dbbd6620.png';

export interface OpenTripSurabayaTierPrice {
  pax: string;
  pricePerPax: string;
  highlight?: boolean;
  badge?: string;
}

export interface OpenTripSurabayaAddonPrice {
  symbol: string;
  label: string;
  price: string;
  detail: string;
  included?: boolean;
}

export interface OpenTripSurabayaItineraryStep {
  symbol: string;
  time: string;
  title: string;
  description: string;
}

export interface OpenTripSurabayaGearItem {
  symbol: string;
  name: string;
  reason: string;
}

export interface LocalizedOpenTripSurabayaArticleContent {
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
  pricingTiers: OpenTripSurabayaTierPrice[];
  highSeasonNote: string;
  addons: OpenTripSurabayaAddonPrice[];
  facilitiesSectionTitle: string;
  includeTitle: string;
  includeItems: string[];
  excludeTitle: string;
  excludeItems: string[];
  itinerarySectionTitle: string;
  itinerarySectionSubtitle: string;
  itinerarySteps: OpenTripSurabayaItineraryStep[];
  pickupSectionTitle: string;
  pickupLead: string;
  pickupPopularTitle: string;
  pickupPoints: string[];
  gearSectionTitle: string;
  gearSectionSubtitle: string;
  gearItems: OpenTripSurabayaGearItem[];
  extraTipTitle: string;
  extraTipContent: string;
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_OPEN_TRIP_BROMO_START_SURABAYA: Record<
  SupportedLanguage,
  LocalizedOpenTripSurabayaArticleContent
> = {
  id: {
    id: 'open-trip-bromo-start-surabaya',
    slug: 'open-trip-bromo-start-kota-surabaya-harga-itinerary-fasilitas',
    bookingPackageId: 'open-trip-surabaya',
    title: 'Open Trip Bromo Start Kota Surabaya: Harga, Itinerary, dan Fasilitas',
    metaDescription:
      'Panduan lengkap Open Trip Bromo Start Kota Surabaya Harga Terbaru mulai Rp400.000/orang (Weekend Sabtu via Tosari, 1 orang pasti berangkat!) atau Rp750.000/orang (Harian via Malang, bebas titik jemput). Sudah INCLUDE dokumentasi foto DSLR/Mirrorless, Shuttle AC, Tol PP, Jeep 4x4 & tiket TNBTS.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '26 November 2026',
    readTime: '6 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgOpenTripSurabaya,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Open Trip Bromo Start Kota Surabaya — 1 orang pasti berangkat & sudah INCLUDE dokumentasi foto DSLR/Mirrorless',
    introduction: [
      'Ingin liburan hemat dan praktis ke Gunung Bromo dari Kota Surabaya tanpa harus repot mencari rombongan besar atau menyetir tengah malam? Layanan Open Trip Bromo Start Kota Surabaya dari WisataBromo.co hadir sebagai solusi sharing trip paling favorit bagi solo traveler, pasangan, maupun rombongan kecil. Anda cukup mendaftar mulai dari 1 orang saja untuk keberangkatan Weekend Sabtu malam via Tosari dan tetap pasti berangkat tanpa minimal kuota!',
      'Kabar terbaiknya, paket Open Trip Start Kota Surabaya sudah INCLUDE dokumentasi foto DSLR/Mirrorless profesional, Shuttle Car AC prima, BBM, Tol Trans Jawa PP, Jeep Hardtop 4×4, hingga tiket masuk resmi TNBTS. Tersedia pula opsi Rute Harian via Malang (berangkat setiap hari, bebas titik jemput seluruh Surabaya & Sidoarjo). Simak rincian harga, fasilitas, jadwal itinerary 23:00 – 13:30 WIB, dan titik jemput resminya di bawah ini.',
    ],
    pricingSectionTitle: '💰 Harga & Jadwal Open Trip Start Kota Surabaya (Terbaru)',
    pricingSectionSubtitle:
      'Tersedia 2 pilihan jadwal fleksibel dari Surabaya — keduanya sudah INCLUDE Shuttle AC, Tol PP, Jeep 4×4, tiket TNBTS WNI, dan dokumentasi foto DSLR/Mirrorless.',
    heroBadge: '1 ORANG PASTI BERANGKAT • INCLUDE DOKUMENTASI',
    startingPriceLabel: 'Mulai dari',
    startingPriceValue: 'Rp400.000',
    startingPriceUnit: '/ orang (Weekend via Tosari)',
    seasonNote:
      'Rute Weekend Sabtu 22:00 WIB: Rp400.000/org (High Season Rp425.000) • Rute Harian via Malang: Rp750.000/org (High Season Rp800.000)',
    docIncludedBannerTitle: '📸 1 Orang Tetap Bisa Gabung + Dokumentasi Foto Sudah INCLUDE!',
    docIncludedBannerDesc:
      'Khusus rute Weekend via Tosari (berangkat setiap Sabtu malam), solo traveler 1 orang tetap pasti berangkat tanpa kuota minimal. Seluruh peserta juga otomatis mendapatkan fasilitas dokumentasi foto DSLR/Mirrorless tanpa biaya tambahan!',
    tiersTableTitle: '📊 Pilihan Jadwal & Tarif Open Trip Surabaya',
    tiersTableSubtitle:
      'Bandingkan rute Weekend via Tosari (paling hemat, 1 orang bisa gabung) dengan rute Harian via Malang (berangkat setiap hari & bebas pilih titik jemput):',
    pricingTiers: [
      {
        pax: 'Weekend via Tosari (Sabtu Malam)',
        pricePerPax: 'Rp400.000 / org',
        highlight: true,
        badge: 'Paling Favorit • 1 Orang Pasti Berangkat',
      },
      {
        pax: 'Weekend High Season (via Tosari)',
        pricePerPax: 'Rp425.000 / org',
        badge: 'Nataru & Libur Idul Fitri',
      },
      {
        pax: 'Harian via Malang (Senin–Minggu, Min. 2 Pax)',
        pricePerPax: 'Rp750.000 / org',
        highlight: true,
        badge: 'Bebas Titik Jemput Surabaya & Sidoarjo',
      },
      {
        pax: 'Harian High Season (via Malang)',
        pricePerPax: 'Rp800.000 / org',
        badge: 'Nataru & Libur Idul Fitri',
      },
    ],
    highSeasonNote:
      'Tarif High Season berlaku pada periode libur panjang Nataru (18 Des 2026 – 5 Jan 2027) dan libur Idul Fitri. Peserta wisatawan mancanegara (WNA) dikenakan surcharge tiket TNBTS Rp255.000/orang.',
    addons: [
      {
        symbol: '📸',
        label: 'Dokumentasi Foto DSLR/Mirrorless',
        price: 'SUDAH INCLUDE',
        detail:
          'Sesi foto di Sunrise Point hingga 5 spot kaldera oleh tim fotografer profesional sudah termasuk dalam harga paket Open Trip Start Surabaya.',
        included: true,
      },
      {
        symbol: '🛣️',
        label: 'Shuttle AC + Tol Trans Jawa + Jeep 4×4',
        price: 'SUDAH INCLUDE',
        detail:
          'Sudah termasuk armada Hiace/Elf/Innova/Bus Pariwisata AC prima, BBM, tarif Tol Trans Jawa PP, serta Jeep Toyota Land Cruiser FJ40 di Bromo.',
        included: true,
      },
    ],
    facilitiesSectionTitle: '✅ Fasilitas Paket (Include & Exclude)',
    includeTitle: '✅ Include (Sudah Termasuk)',
    includeItems: [
      'Shuttle Car AC Prima (Hiace / Elf / Innova / Bus Pariwisata) Surabaya – Bromo PP.',
      'Driver shuttle dan driver Jeep lokal Bromo yang profesional & ramah.',
      'BBM (bahan bakar minyak) dan tarif Tol Trans Jawa PP.',
      'Jeep Bromo 4×4 (Toyota Land Cruiser FJ40) untuk menjelajah seluruh destinasi kaldera.',
      'Tiket masuk resmi Taman Nasional Bromo Tengger Semeru (TNBTS WNI).',
      'Retribusi resmi kawasan wisata dan parkir di seluruh titik kunjungan.',
      'Dokumentasi foto DSLR/Mirrorless profesional (SUDAH INCLUDE!).',
    ],
    excludeTitle: '❌ Exclude (Tidak Termasuk)',
    excludeItems: [
      'Sewa kuda menuju kaki tangga Kawah Bromo (opsional, bisa ditempuh dengan jalan kaki).',
      'Makan dan minuman pribadi di warung puncak atau area kaldera.',
      'Biaya toilet umum berbayar di kawasan wisata Bromo.',
      'Surcharge tiket masuk wisatawan mancanegara (WNA) Rp255.000 / orang.',
      'Keperluan pribadi dan obat-obatan pribadi selama perjalanan.',
    ],
    itinerarySectionTitle: '🕚 Itinerary Lengkap (Urut dari Penjemputan hingga Pulang)',
    itinerarySectionSubtitle:
      'Estimasi durasi perjalanan midnight 1 hari (23:00 – 13:30 WIB), praktis untuk pekerja kantoran atau liburan akhir pekan dari Surabaya.',
    itinerarySteps: [
      {
        symbol: '🚆',
        time: '23:00 – 23:30 WIB',
        title: 'Penjemputan Stasiun Surabaya Pasar Turi',
        description:
          'Titik kumpul dan penjemputan peserta kloter pertama di Stasiun Surabaya Pasar Turi (atau titik jemput pilihan Anda khusus Rute Harian via Malang).',
      },
      {
        symbol: '🚌',
        time: '23:30 – 00:00 WIB',
        title: 'Penjemputan Terminal Bungurasih (Purabaya)',
        description:
          'Penjemputan peserta kloter kedua di area Terminal Bungurasih sebelum rombongan langsung masuk akses Tol Trans Jawa.',
      },
      {
        symbol: '🛣️',
        time: '00:00 – 02:00 WIB',
        title: 'Perjalanan Tol Menuju Basecamp Tosari / Malang',
        description:
          'Perjalanan nyaman melalui jalur Tol Trans Jawa menuju rest area & basecamp transit Jeep 4×4; peserta dapat beristirahat di dalam shuttle AC.',
      },
      {
        symbol: '🚐',
        time: '02:00 – 03:00 WIB',
        title: 'Perjalanan Jeep 4×4 ke Sunrise Point',
        description:
          'Transfer ke armada Jeep Toyota Land Cruiser FJ40 (maksimal 6 peserta per jeep) dan melaju naik menembus udara pegunungan menuju view point golden sunrise.',
      },
      {
        symbol: '☕',
        time: '03:00 – 04:30 WIB',
        title: 'Istirahat & Menunggu Golden Sunrise',
        description:
          'Menghangatkan tubuh sambil menikmati kopi, teh hangat, atau mi instan di warung lokal puncak sambil menunggu langit fajar terbuka.',
      },
      {
        symbol: '🌅',
        time: '04:30 – 06:00 WIB',
        title: 'Golden Sunrise & Sesi Foto Bersama Fotografer',
        description:
          'Menyaksikan panorama fajar spektakuler Bromo (Bukit Cinta / Prau / Kingkong / Penanjakan) lengkap dengan sesi foto dokumentasi DSLR/Mirrorless.',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: 'Eksplor 5 Spot Ikonik Kaldera Bromo',
        description:
          'Menjelajahi Bukit Widodaren, mendaki Kawah Bromo & Gunung Batok, Pura Luhur Poten, Pasir Berbisik, hingga Savana Bukit Teletubbies.',
      },
      {
        symbol: '🔄',
        time: '10:30 – 11:30 WIB',
        title: 'Kembali ke Basecamp / Rest Area Jeep',
        description:
          'Perjalanan kembali dari kaldera menuju basecamp transit jeep untuk bersih-bersih singkat dan berpindah kembali ke shuttle AC.',
      },
      {
        symbol: '🏙️',
        time: '11:30 – 13:30 WIB',
        title: 'Perjalanan Pulang & Drop Off Surabaya',
        description:
          'Perjalanan kembali melalui Tol Trans Jawa menuju Terminal Bungurasih & Stasiun Pasar Turi Surabaya (atau alamat drop off untuk Rute Harian).',
      },
    ],
    pickupSectionTitle: '📍 Lokasi Penjemputan Resmi Kota Surabaya & Sidoarjo',
    pickupLead:
      '📍 Titik penjemputan menyesuaikan pilihan rute Anda: Rute Weekend via Tosari memiliki 2 meeting point resmi strategis, sedangkan Rute Harian via Malang melayani jemput langsung (door-to-door) di seluruh Surabaya & Sidoarjo.',
    pickupPopularTitle: 'Titik Penjemputan Resmi:',
    pickupPoints: [
      'Stasiun Surabaya Pasar Turi — Meeting point kloter 1 (23:00–23:30 WIB) untuk Rute Weekend via Tosari.',
      'Terminal Bungurasih / Purabaya — Meeting point kloter 2 (23:30–00:00 WIB) untuk Rute Weekend via Tosari.',
      'Bebas Titik Jemput Surabaya & Sidoarjo — Hotel, rumah, Bandara Juanda, atau Stasiun Gubeng (khusus Rute Harian via Malang).',
    ],
    gearSectionTitle: '🧥 Perlengkapan Wajib (Suhu 2°C – 10°C)',
    gearSectionSubtitle:
      'Meski berangkat dari Kota Surabaya yang hangat, suhu puncak sunrise Bromo dini hari berkisar 2°C – 10°C. Pastikan Anda membawa 4 perlengkapan penting berikut:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Jaket Tebal & Windproof',
        reason:
          'Menahan terpaan angin gunung dingin saat menunggu matahari terbit pukul 03:00–05:30 WIB di puncak.',
      },
      {
        symbol: '🧤',
        name: 'Sarung Tangan & Kupluk (Beanie)',
        reason:
          'Menjaga ujung jari dan telinga tetap hangat serta nyaman saat memegang ponsel atau kamera.',
      },
      {
        symbol: '😷',
        name: 'Masker Medis atau Buff',
        reason:
          'Melindungi pernapasan dari debu pasir vulkanik di area Lautan Pasir, Pasir Berbisik, dan jalur Kawah Bromo.',
      },
      {
        symbol: '👟',
        name: 'Sepatu Karet Anti-Selip & Uang Tunai',
        reason:
          'Wajib memakai sepatu tertutup beralas karet untuk jalur berpasir/tangga kawah, plus uang tunai kecil untuk warung dan toilet.',
      },
    ],
    extraTipTitle: '💡 Tips Tambahan Sebelum Berangkat Open Trip Surabaya',
    extraTipContent:
      'Bagi peserta Rute Weekend via Tosari, usahakan tiba 15–20 menit lebih awal di Stasiun Pasar Turi atau Terminal Bungurasih agar keberangkatan rombongan tepat waktu dan bisa meraih posisi terbaik di Sunrise Point. Jika Anda memiliki jadwal libur di hari kerja (Senin–Jumat) atau ingin dijemput langsung di hotel/Bandara Juanda, pilih Rute Harian via Malang atau bandingkan dengan Private Trip Start Surabaya untuk rombongan 4–6 orang.',
    conclusion:
      'Open Trip Bromo Start Kota Surabaya adalah cara paling hemat, praktis, dan anti-ribet untuk menikmati Golden Sunrise serta 5 spot kaldera lengkap bersama dokumentasi foto profesional. Pilih tanggal keberangkatan Anda (Sabtu malam via Tosari Rp400.000/org atau Harian via Malang Rp750.000/org) dan langsung amankan seat lewat kalkulator booking resmi WisataBromo.co!',
    ctaButton: 'Hitung & Booking Open Trip Start Surabaya',
    tags: [
      'Open Trip Bromo Start Surabaya',
      'Open Trip Bromo Surabaya',
      'Harga Open Trip Bromo Surabaya',
      'Open Trip Bromo 1 Orang Berangkat',
      'Bromo Start Pasar Turi Bungurasih',
    ],
  },
  en: {
    id: 'open-trip-bromo-start-surabaya',
    slug: 'open-trip-bromo-start-kota-surabaya-harga-itinerary-fasilitas',
    bookingPackageId: 'open-trip-surabaya',
    title: 'Mount Bromo Open Trip from Surabaya City: Prices, Itinerary & Facilities',
    metaDescription:
      'Complete guide to Mount Bromo Open Trip from Surabaya starting at IDR 400,000/person (Saturday Weekend via Tosari, guaranteed departure even for 1 solo traveler!) or IDR 750,000/person (Daily via Malang, free pickup location). Includes DSLR photography, AC shuttle, toll fees, 4x4 Jeep & TNBTS ticket.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 26, 2026',
    readTime: '6 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guides',
    heroImage: imgOpenTripSurabaya,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Mount Bromo Open Trip from Surabaya — Solo travelers guaranteed to depart & DSLR photography INCLUDED',
    introduction: [
      'Looking for an affordable, hassle-free way to visit Mount Bromo from Surabaya without organizing a big group or driving at midnight? WisataBromo.co’s Open Trip Bromo Start Surabaya is the top shared-trip choice for solo travelers, couples, and small groups. For the Saturday Weekend departure via Tosari, even 1 single traveler is guaranteed to depart with zero minimum quota!',
      'Best of all, our Surabaya Open Trip already INCLUDES professional DSLR/Mirrorless photo documentation, a comfortable AC shuttle, fuel, Trans-Java toll fees, a 4×4 Jeep Hardtop, and official TNBTS entry tickets (Indonesian citizens). A Daily Route via Malang is also available every day with custom door-to-door pickup anywhere in Surabaya & Sidoarjo.',
    ],
    pricingSectionTitle: '💰 Open Trip Start Surabaya Prices & Schedules',
    pricingSectionSubtitle:
      'Two flexible departure options from Surabaya — both INCLUDE AC shuttle, Trans-Java tolls, 4×4 Jeep, TNBTS WNI entry ticket, and DSLR/Mirrorless photography.',
    heroBadge: '1 PAX GUARANTEED DEPARTURE • PHOTO INCLUDED',
    startingPriceLabel: 'Starting from',
    startingPriceValue: 'IDR 400,000',
    startingPriceUnit: '/ person (Weekend via Tosari)',
    seasonNote:
      'Saturday Weekend via Tosari: IDR 400k/pax (High Season IDR 425k) • Daily via Malang: IDR 750k/pax (High Season IDR 800k)',
    docIncludedBannerTitle: '📸 1 Solo Traveler Can Join + DSLR Photography Already INCLUDED!',
    docIncludedBannerDesc:
      'On our Saturday night Weekend route via Tosari, solo travelers can book just 1 seat with guaranteed departure. All guests also enjoy complimentary professional DSLR/Mirrorless photo coverage throughout the tour!',
    tiersTableTitle: '📊 Surabaya Open Trip Routes & Rates',
    tiersTableSubtitle:
      'Compare the budget-friendly Saturday Weekend route via Tosari (1 pax welcome) with the Daily route via Malang (runs every day with flexible Surabaya/Sidoarjo pickup):',
    pricingTiers: [
      {
        pax: 'Weekend via Tosari (Saturday Night)',
        pricePerPax: 'IDR 400,000 / pax',
        highlight: true,
        badge: 'Most Popular • 1 Pax Guaranteed',
      },
      {
        pax: 'Weekend High Season (via Tosari)',
        pricePerPax: 'IDR 425,000 / pax',
        badge: 'Christmas, New Year & Eid',
      },
      {
        pax: 'Daily via Malang (Mon–Sun, Min. 2 Pax)',
        pricePerPax: 'IDR 750,000 / pax',
        highlight: true,
        badge: 'Custom Pickup in Surabaya & Sidoarjo',
      },
      {
        pax: 'Daily High Season (via Malang)',
        pricePerPax: 'IDR 800,000 / pax',
        badge: 'Christmas, New Year & Eid',
      },
    ],
    highSeasonNote:
      'High Season rates apply during Year-End holidays (Dec 18, 2026 – Jan 5, 2027) and Eid holidays. International visitors (WNA) are subject to a TNBTS national park ticket surcharge of IDR 255,000/person.',
    addons: [
      {
        symbol: '📸',
        label: 'DSLR / Mirrorless Photography',
        price: 'INCLUDED',
        detail:
          'Curated photo sessions from the Sunrise Point across all 5 caldera landmarks are already included in your Surabaya Open Trip fare.',
        included: true,
      },
      {
        symbol: '🛣️',
        label: 'AC Shuttle + Trans-Java Tolls + 4×4 Jeep',
        price: 'INCLUDED',
        detail:
          'Covers Hiace/Elf/Innova/Tour Bus round-trip transport, fuel, Trans-Java expressway tolls, and a Toyota Land Cruiser FJ40 Jeep in Bromo.',
        included: true,
      },
    ],
    facilitiesSectionTitle: '✅ Package Facilities (Include & Exclude)',
    includeTitle: '✅ Included in the Package',
    includeItems: [
      'Well-maintained AC Shuttle Car (Hiace / Elf / Innova / Tour Bus) Surabaya – Bromo round-trip.',
      'Friendly, experienced shuttle driver and local Bromo 4×4 Jeep driver.',
      'Fuel and round-trip Trans-Java expressway toll fees.',
      '4×4 Bromo Jeep (Toyota Land Cruiser FJ40) to all caldera viewpoints.',
      'Official TNBTS (Bromo Tengger Semeru National Park) entry ticket (Indonesian WNI).',
      'Official local area levies and parking fees at all stops.',
      'Professional DSLR/Mirrorless photo documentation (INCLUDED!).',
    ],
    excludeTitle: '❌ Not Included (Exclude)',
    excludeItems: [
      'Horse rental to the Bromo Crater stairs (optional; easily walkable).',
      'Personal meals and warm drinks at local mountain stalls.',
      'Paid public restrooms around Mount Bromo.',
      'Foreign national (WNA) TNBTS ticket surcharge of IDR 255,000 / person.',
      'Personal expenses and medication.',
    ],
    itinerarySectionTitle: '🕚 Complete Midnight Itinerary (23:00 – 13:30 WIB)',
    itinerarySectionSubtitle:
      'Efficient 1-day midnight tour designed for weekenders and travelers departing from Surabaya.',
    itinerarySteps: [
      {
        symbol: '🚆',
        time: '23:00 – 23:30 WIB',
        title: 'Pickup at Surabaya Pasar Turi Station',
        description:
          'First meeting point pickup at Surabaya Pasar Turi Train Station (or your chosen hotel/address for the Daily Route via Malang).',
      },
      {
        symbol: '🚌',
        time: '23:30 – 00:00 WIB',
        title: 'Pickup at Bungurasih (Purabaya) Bus Terminal',
        description:
          'Second pickup stop at Bungurasih Terminal before heading straight onto the Trans-Java Expressway.',
      },
      {
        symbol: '🛣️',
        time: '00:00 – 02:00 WIB',
        title: 'Expressway Transfer to Tosari / Malang Basecamp',
        description:
          'Smooth overnight ride along the toll road to the Jeep transit basecamp; rest comfortably inside the AC shuttle.',
      },
      {
        symbol: '🚐',
        time: '02:00 – 03:00 WIB',
        title: '4×4 Jeep Ascent to Sunrise Point',
        description:
          'Board the iconic Toyota Land Cruiser FJ40 (max 6 guests per Jeep) and climb into the crisp mountain air toward the sunrise ridge.',
      },
      {
        symbol: '☕',
        time: '03:00 – 04:30 WIB',
        title: 'Warm Up & Wait for Golden Sunrise',
        description:
          'Relax with hot coffee, tea, or instant noodles at local summit stalls while waiting for first light.',
      },
      {
        symbol: '🌅',
        time: '04:30 – 06:00 WIB',
        title: 'Golden Sunrise & Photo Session',
        description:
          'Watch the spectacular Bromo sunrise (Bukit Cinta / Prau / Kingkong / Penanjakan) captured by our photographer.',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: 'Explore 5 Iconic Caldera Landmarks',
        description:
          'Visit Widodaren Hill, hike Mount Bromo Crater & Mount Batok, Pura Luhur Poten, Whispering Sands, and Teletubbies Savanna.',
      },
      {
        symbol: '🔄',
        time: '10:30 – 11:30 WIB',
        title: 'Return to Jeep Transit Basecamp',
        description:
          'Drive out of the caldera back to the Jeep rest area to freshen up and transfer back to your AC shuttle.',
      },
      {
        symbol: '🏙️',
        time: '11:30 – 13:30 WIB',
        title: 'Return Drive & Surabaya Drop-off',
        description:
          'Comfortable expressway drive back to Bungurasih Terminal and Pasar Turi Station (or your Surabaya/Sidoarjo address for the Daily route).',
      },
    ],
    pickupSectionTitle: '📍 Official Surabaya & Sidoarjo Pickup Locations',
    pickupLead:
      '📍 Pickup points match your chosen route: the Weekend via Tosari route uses 2 central meeting points, while the Daily via Malang route offers free door-to-door pickup across Surabaya & Sidoarjo.',
    pickupPopularTitle: 'Official Pickup Points:',
    pickupPoints: [
      'Surabaya Pasar Turi Train Station — First meeting point (23:00–23:30 WIB) for Saturday Weekend via Tosari.',
      'Bungurasih (Purabaya) Bus Terminal — Second meeting point (23:30–00:00 WIB) for Saturday Weekend via Tosari.',
      'Custom Surabaya & Sidoarjo Pickup — Any hotel, residence, Juanda Airport, or Gubeng Station (Daily via Malang).',
    ],
    gearSectionTitle: '🧥 Essential Packing List (2°C – 10°C)',
    gearSectionSubtitle:
      'Although Surabaya is warm, pre-dawn temperatures on the Bromo rim drop to 2°C – 10°C. Make sure to bring these 4 essentials:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Warm Windproof Jacket',
        reason:
          'Blocks chilly highland winds while waiting for sunrise between 03:00 and 05:30 WIB.',
      },
      {
        symbol: '🧤',
        name: 'Gloves & Beanie Hat',
        reason:
          'Keeps your fingers and ears warm when taking photos in crisp summit air.',
      },
      {
        symbol: '😷',
        name: 'Face Mask or Neck Buff',
        reason:
          'Shields you from fine volcanic dust across the Sea of Sand and Bromo Crater trail.',
      },
      {
        symbol: '👟',
        name: 'Non-Slip Sneakers & Small Cash',
        reason:
          'Closed rubber-sole shoes provide grip on sandy crater stairs, plus small IDR bills for stalls and restrooms.',
      },
    ],
    extraTipTitle: '💡 Extra Tip Before Your Surabaya Open Trip',
    extraTipContent:
      'For the Saturday Weekend via Tosari route, arrive 15–20 minutes early at Pasar Turi Station or Bungurasih Terminal so the shuttle departs smoothly and secures a prime Sunrise Point spot. Traveling on weekdays or staying near Juanda Airport? Choose the Daily Route via Malang, or compare with our Private Trip Start Surabaya if you have 4–6 travelers.',
    conclusion:
      'Open Trip Bromo Start Surabaya is the smartest, most budget-friendly way to witness Golden Sunrise and all 5 caldera spots with DSLR photography already included. Pick your preferred date (Saturday Weekend IDR 400k/pax or Daily via Malang IDR 750k/pax) and lock in your seat now via the official WisataBromo.co booking calculator!',
    ctaButton: 'Calculate & Book Open Trip Start Surabaya',
    tags: [
      'Mount Bromo Open Trip Surabaya',
      'Bromo Shared Tour Surabaya',
      'Surabaya to Bromo Budget Tour',
      'Solo Traveler Bromo Open Trip',
      'Pasar Turi Bungurasih Bromo Tour',
    ],
  },
  zh: {
    id: 'open-trip-bromo-start-surabaya',
    slug: 'open-trip-bromo-start-kota-surabaya-harga-itinerary-fasilitas',
    bookingPackageId: 'open-trip-surabaya',
    title: '泗水市区出发布罗莫拼团 (Open Trip)：价格、行程与全包设施指南',
    metaDescription:
      '泗水市区出发布罗莫拼团 (Open Trip) 完整指南：周六晚经 Tosari 仅 Rp400.000/人（1人即发团！），每日经玛琅 Rp750.000/人（泗水与诗都阿佐全境自由上门接送）。费用已含单反跟拍、空调专车、高速费、4x4吉普与门票。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月26日',
    readTime: '阅读约 6 分钟',
    category: 'tips_wisata',
    categoryLabel: '旅游攻略与贴士',
    heroImage: imgOpenTripSurabaya,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 泗水市区出发布罗莫拼团 — 1人即可成行，费用已含单反/微单摄影跟拍',
    introduction: [
      '想从泗水市区高性价比、零操心前往布罗莫火山，又不想自己凑大团或深夜长途开车？WisataBromo.co 推出的“泗水市区出发布罗莫拼团 (Open Trip)”是独行侠、情侣与小团队的热门首选。选择周六晚经 Tosari 的周末拼团路线，哪怕只有 1 位游客也保证发团，无最低人数限制！',
      '更棒的是，泗水拼团价格已直接包含专业单反/微单摄影跟拍、空调旅游车、油费、跨爪哇高速往返路桥费、4×4 越野吉普以及 TNBTS 国家公园官方门票（印尼公民）。此外还提供经玛琅出发的每日路线（天天发团，支持泗水与诗都阿佐自由指定上门接送地点）。以下为您完整汇总价格、设施与 23:00–13:30 行程安排。',
    ],
    pricingSectionTitle: '💰 泗水市区出发拼团价格与排期',
    pricingSectionSubtitle:
      '提供两种灵活的泗水出发方案——均已包含空调专车、往返高速费、4×4 吉普车、TNBTS 门票及单反/微单摄影跟拍。',
    heroBadge: '1人即可发团 • 含专业摄影跟拍',
    startingPriceLabel: '起价仅',
    startingPriceValue: 'Rp400.000',
    startingPriceUnit: '/ 人（周六经 Tosari）',
    seasonNote:
      '周六晚经 Tosari：Rp400.000/人（旺季 Rp425.000）• 每日经玛琅：Rp750.000/人（旺季 Rp800.000）',
    docIncludedBannerTitle: '📸 1人照常成行 + 单反摄影跟拍已直接包含！',
    docIncludedBannerDesc:
      '周六晚经 Tosari 的周末拼团路线支持 1 人报名即保证发团；且所有团员均可免费享受专业摄影师全程单反/微单拍照记录，无需额外加购！',
    tiersTableTitle: '📊 泗水拼团双路线价格一览',
    tiersTableSubtitle:
      '对比超值周末拼团路线（经 Tosari，1人可报）与每日路线（经玛琅，天天发团且全境自由接送）：',
    pricingTiers: [
      {
        pax: '周末经 Tosari（每周六晚出发）',
        pricePerPax: 'Rp400.000 / 人',
        highlight: true,
        badge: '最受欢迎 • 1人保证发团',
      },
      {
        pax: '周末旺季价（经 Tosari）',
        pricePerPax: 'Rp425.000 / 人',
        badge: '圣诞元旦与开斋节假期',
      },
      {
        pax: '每日经玛琅（周一至周日，2人起）',
        pricePerPax: 'Rp750.000 / 人',
        highlight: true,
        badge: '泗水与诗都阿佐自由指定接送点',
      },
      {
        pax: '每日旺季价（经玛琅）',
        pricePerPax: 'Rp800.000 / 人',
        badge: '圣诞元旦与开斋节假期',
      },
    ],
    highSeasonNote:
      '旺季价格适用于圣诞新年假期（2026年12月18日 – 2027年1月5日）及开斋节长假。外籍游客（WNA）需补交 TNBTS 国家公园门票差价 Rp255.000/人。',
    addons: [
      {
        symbol: '📸',
        label: '专业单反 / 微单摄影跟拍',
        price: '已包含',
        detail:
          '从日出观景台到五大火山口地标的摄影师全程跟拍已包含在泗水拼团费用中，无需另付。',
        included: true,
      },
      {
        symbol: '🛣️',
        label: '空调专车 + 往返高速 + 4×4 吉普',
        price: '已包含',
        detail:
          '包含 Hiace/Elf/Innova/大巴空调往返接送、燃油、跨爪哇高速公路费以及布罗莫丰田 FJ40 越野吉普。',
        included: true,
      },
    ],
    facilitiesSectionTitle: '✅ 套餐包含与不含项目',
    includeTitle: '✅ 费用包含 (Include)',
    includeItems: [
      '车况优良的空调旅游专车（Hiace / Elf / Innova / 巴士）泗水 – 布罗莫往返。',
      '专业友善的接驳司机与布罗莫本地 4×4 吉普司机。',
      '全程燃油费与跨爪哇高速公路往返路桥费。',
      '布罗莫 4×4 越野吉普（丰田 Land Cruiser FJ40）畅游各大景点。',
      '布罗莫腾格尔塞梅鲁国家公园 (TNBTS) 官方门票（印尼公民）。',
      '各景点官方景区管理费与停车费。',
      '专业单反/微单摄影跟拍（已包含！）。',
    ],
    excludeTitle: '❌ 费用不含 (Exclude)',
    excludeItems: [
      '火山口台阶骑马费（自选项目，亦可步行轻松抵达）。',
      '行程中在山顶小店或景区的个人餐饮消费。',
      '布罗莫景区内收费公共洗手间费用。',
      '外籍游客 (WNA) 国家公园门票附加费 Rp255.000 / 人。',
      '个人消费与常备药物。',
    ],
    itinerarySectionTitle: '🕚 完整午夜行程单（23:00 – 13:30 WIB）',
    itinerarySectionSubtitle:
      '高效紧凑的一日午夜行程，非常适合周末短途游及从泗水出发的自由行旅客。',
    itinerarySteps: [
      {
        symbol: '🚆',
        time: '23:00 – 23:30 WIB',
        title: '泗水 Pasar Turi 火车站集合接人',
        description:
          '第一批团员在泗水 Pasar Turi 火车站集合上车（选择每日经玛琅路线则按您指定的酒店或地址上门接送）。',
      },
      {
        symbol: '🚌',
        time: '23:30 – 00:00 WIB',
        title: 'Bungurasih (Purabaya) 汽车总站接人',
        description:
          '第二批团员在 Bungurasih 客运总站集合登车，随后直接驶入跨爪哇高速公路。',
      },
      {
        symbol: '🛣️',
        time: '00:00 – 02:00 WIB',
        title: '高速直达 Tosari / 玛琅吉普中转大本营',
        description:
          '沿高速公路舒适夜间行车前往吉普大本营休息站，团员可在空调车内安心补觉。',
      },
      {
        symbol: '🚐',
        time: '02:00 – 03:00 WIB',
        title: '换乘 4×4 吉普驶向日出观景台',
        description:
          '换乘经典丰田 Land Cruiser FJ40 吉普车（每车最多 6 人），穿越清凉山路奔赴金色日出观景点。',
      },
      {
        symbol: '☕',
        time: '03:00 – 04:30 WIB',
        title: '山顶小憩与等候金色日出',
        description:
          '在观景台当地小店品尝热咖啡、热茶或热腾腾的泡面暖身，静待破晓曙光。',
      },
      {
        symbol: '🌅',
        time: '04:30 – 06:00 WIB',
        title: '金色日出与摄影师跟拍时光',
        description:
          '在最佳观景点（Bukit Cinta / Prau / Kingkong / Penanjakan）欣赏震撼日出，并由专业摄影师定格大片。',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: '打卡布罗莫火山口 5 大经典地标',
        description:
          '依次游览 Widodaren 山崖、攀登布罗莫火山口与 Batok 火山、Luhur Poten 印度教古庙、低语沙海与天线宝宝大草原。',
      },
      {
        symbol: '🔄',
        time: '10:30 – 11:30 WIB',
        title: '返回吉普大本营休息区',
        description:
          '驶离火山口沙海回到吉普大本营稍作休整，换回空调接驳专车准备返程。',
      },
      {
        symbol: '🏙️',
        time: '11:30 – 13:30 WIB',
        title: '返程送回泗水市区',
        description:
          '经高速顺利返回 Bungurasih 总站与 Pasar Turi 火车站（每日路线则直接送回您指定的泗水/诗都阿佐地址）。',
      },
    ],
    pickupSectionTitle: '📍 泗水与诗都阿佐官方接送地点',
    pickupLead:
      '📍 接送地点根据您选择的路线而定：周末经 Tosari 路线设有 2 大交通枢纽集合点，每日经玛琅路线则支持泗水与诗都阿佐全境自由上门接送。',
    pickupPopularTitle: '官方接送点一览：',
    pickupPoints: [
      '泗水 Pasar Turi 火车站 — 周六周末经 Tosari 路线第一集合点（23:00–23:30 WIB）。',
      'Bungurasih (Purabaya) 客运总站 — 周六周末经 Tosari 路线第二集合点（23:30–00:00 WIB）。',
      '泗水与诗都阿佐全境自由上门接送 — 酒店、住宅、朱安达机场或 Gubeng 火车站（每日经玛琅路线专属）。',
    ],
    gearSectionTitle: '🧥 必备保暖装备（山顶气温 2°C – 10°C）',
    gearSectionSubtitle:
      '虽然泗水市区气候温暖，但布罗莫凌晨山顶气温仅 2°C – 10°C，请务必备齐以下 4 件装备：',
    gearItems: [
      {
        symbol: '🧥',
        name: '加厚防风外套',
        reason:
          '凌晨 03:00–05:30 在山顶迎风等待日出时提供核心保暖防护。',
      },
      {
        symbol: '🧤',
        name: '保暖手套与毛线帽',
        reason:
          '防止高海拔寒风冻僵手指与耳朵，让拍照体验更轻松舒适。',
      },
      {
        symbol: '😷',
        name: '医用口罩或魔术头巾',
        reason:
          '有效阻挡沙海、低语沙海与火山口步道的火山灰粉尘。',
      },
      {
        symbol: '👟',
        name: '防滑运动鞋与小额现金',
        reason:
          '橡胶防滑鞋底更适合攀登火山口砂石台阶，同时备好小额印尼盾现金用于小吃与洗手间。',
      },
    ],
    extraTipTitle: '💡 泗水拼团出发前实用贴士',
    extraTipContent:
      '参加周六晚经 Tosari 路线的旅客，建议提前 15–20 分钟抵达 Pasar Turi 火车站或 Bungurasih 总站，确保车队准点出发抢占日出观景台好机位。若您计划在工作日出行或希望从朱安达机场/酒店直接接送，可选择每日经玛琅路线；如同行满 4–6 人，也可对比我们的“泗水出发私人团”方案。',
    conclusion:
      '泗水市区出发布罗莫拼团 (Open Trip) 是最省心、超值且自带专业摄影跟拍的火山之旅方案。立即通过 WisataBromo.co 官方预订计算器选择您的出行日期（周六经 Tosari Rp400.000/人或每日经玛琅 Rp750.000/人），一键锁定席位！',
    ctaButton: '计算费用并预订泗水出发拼团',
    tags: [
      '泗水布罗莫拼团',
      '泗水出发Open Trip',
      '布罗莫1人发团',
      '泗水布罗莫一日游价格',
      'Pasar Turi布罗莫拼团',
    ],
  },
};
