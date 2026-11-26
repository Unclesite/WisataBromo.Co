import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgOpenTripMalang from '../../assets/images/package_custom_b48f8fd4.png';

export interface OpenTripMalangTierPrice {
  pax: string;
  pricePerPax: string;
  highlight?: boolean;
  badge?: string;
}

export interface OpenTripMalangAddonPrice {
  symbol: string;
  label: string;
  price: string;
  detail: string;
  included?: boolean;
}

export interface OpenTripMalangItineraryStep {
  symbol: string;
  time: string;
  title: string;
  description: string;
}

export interface OpenTripMalangGearItem {
  symbol: string;
  name: string;
  reason: string;
}

export interface LocalizedOpenTripMalangArticleContent {
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
  pricingTiers: OpenTripMalangTierPrice[];
  highSeasonNote: string;
  addons: OpenTripMalangAddonPrice[];
  facilitiesSectionTitle: string;
  includeTitle: string;
  includeItems: string[];
  excludeTitle: string;
  excludeItems: string[];
  itinerarySectionTitle: string;
  itinerarySectionSubtitle: string;
  itinerarySteps: OpenTripMalangItineraryStep[];
  pickupSectionTitle: string;
  pickupLead: string;
  pickupPopularTitle: string;
  pickupPoints: string[];
  gearSectionTitle: string;
  gearSectionSubtitle: string;
  gearItems: OpenTripMalangGearItem[];
  extraTipTitle: string;
  extraTipContent: string;
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_OPEN_TRIP_BROMO_START_KOTA_MALANG: Record<
  SupportedLanguage,
  LocalizedOpenTripMalangArticleContent
> = {
  id: {
    id: 'open-trip-bromo-start-kota-malang-harga-2026',
    slug: 'open-trip-bromo-start-kota-malang-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'open-trip-malang',
    title: 'Open Trip Bromo Start Kota Malang: Harga 2026, Itinerary, dan Fasilitas',
    metaDescription:
      'Panduan lengkap Open Trip Bromo Start Kota Malang Harga 2026 mulai Rp275.000/orang (atau Rp325.000/orang plus dokumentasi foto DSLR). Berangkat setiap hari tanpa kuota minimal (1 orang pasti berangkat!), jemput langsung Stasiun Malang/Hotel, sudah termasuk Shuttle AC, Jeep 4x4 & tiket TNBTS.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '26 November 2026',
    readTime: '5 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgOpenTripMalang,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Open Trip Bromo Start Kota Malang — 1 orang pasti berangkat setiap hari mulai Rp275.000/orang',
    introduction: [
      'Ingin menjelajahi keindahan Golden Sunrise dan 5 spot ikonik Gunung Bromo dengan budget paling hemat dari Kota Malang? Layanan Open Trip Bromo Start Kota Malang dari WisataBromo.co merupakan paket sharing trip harian terfavorit bagi solo traveler, pasangan, mahasiswa, maupun rombongan kecil. Berangkat setiap hari tengah malam (Senin–Minggu), bahkan daftar 1 orang saja tetap pasti berangkat tanpa kuota minimal!',
      'Dengan tarif mulai Rp275.000/orang (atau Rp325.000/orang jika ingin sekalian dokumentasi foto DSLR/Mirrorless), Anda sudah mendapatkan layanan jemput-antar langsung di Stasiun Malang, hotel, homestay, maupun alamat rumah di Kota Malang, lengkap dengan Jeep 4×4 Toyota Land Cruiser FJ40 dan tiket masuk resmi TNBTS. Simak rincian harga 2026, fasilitas, itinerary 23:00 – 13:00 WIB, serta perlengkapan wajibnya di bawah ini.',
    ],
    pricingSectionTitle: '💰 Harga & Paket Open Trip Start Kota Malang (Update 2026)',
    pricingSectionSubtitle:
      'Sharing trip harian termurah dari Kota Malang — 1 orang pasti berangkat setiap hari dengan pilihan reguler atau plus dokumentasi foto DSLR/Mirrorless.',
    heroBadge: '1 ORANG PASTI BERANGKAT • SETIAP HARI',
    startingPriceLabel: 'Mulai dari',
    startingPriceValue: 'Rp275.000',
    startingPriceUnit: '/ orang (Start Kota Malang)',
    seasonNote:
      'Start Malang Reguler: Rp275.000/org | Plus Foto DSLR: Rp325.000/org • High Season +Rp50.000/org (Tersedia juga penjemputan Kota Batu)',
    docIncludedBannerTitle: '🚐 1 Orang Pasti Berangkat Setiap Hari — Tanpa Kuota Minimal!',
    docIncludedBannerDesc:
      'Berbeda dengan open trip yang hanya jalan di akhir pekan, Open Trip Bromo Start Kota Malang berangkat SETIAP HARI (Senin–Minggu) pukul 23:00–01:00 WIB dengan penjemputan langsung di alamat, hotel, atau Stasiun Malang!',
    tiersTableTitle: '📊 Daftar Harga Open Trip Bromo Start Malang & Batu 2026',
    tiersTableSubtitle:
      'Pilih opsi sesuai titik jemput dan kebutuhan dokumentasi foto DSLR/Mirrorless Anda:',
    pricingTiers: [
      {
        pax: 'Start Kota Malang (Reguler)',
        pricePerPax: 'Rp275.000 / org',
        highlight: true,
        badge: 'Paling Hemat • Tanpa Doc',
      },
      {
        pax: 'Start Kota Malang + Foto DSLR',
        pricePerPax: 'Rp325.000 / org',
        highlight: true,
        badge: 'Terfavorit • Include Fotografer',
      },
      {
        pax: 'High Season Malang (Reguler)',
        pricePerPax: 'Rp325.000 / org',
        badge: 'Nataru & Libur Idul Fitri',
      },
      {
        pax: 'High Season Malang + Foto DSLR',
        pricePerPax: 'Rp375.000 / org',
        badge: 'Nataru & Libur Idul Fitri',
      },
      {
        pax: 'Opsi Jemput Kota Batu (Reguler)',
        pricePerPax: 'Rp325.000 / org',
        badge: 'High Season Rp375.000',
      },
      {
        pax: 'Opsi Jemput Kota Batu + Foto DSLR',
        pricePerPax: 'Rp375.000 / org',
        badge: 'High Season Rp425.000',
      },
    ],
    highSeasonNote:
      'Tarif High Season (+Rp50.000/orang) berlaku pada periode libur panjang Nataru (18 Des 2026 – 5 Jan 2027) dan libur Idul Fitri. Peserta wisatawan mancanegara (WNA) dikenakan surcharge tiket masuk TNBTS Rp255.000/orang.',
    addons: [
      {
        symbol: '📸',
        label: 'Opsi Paket Plus Dokumentasi Foto DSLR',
        price: '+Rp50.000 / org',
        detail:
          'Upgrade ke paket Rp325.000/orang (Start Kota Malang) untuk sesi foto DSLR/Mirrorless profesional dari Sunrise Point hingga Savana Teletubbies.',
      },
      {
        symbol: '🚐',
        label: '1 Orang Pasti Berangkat + Jemput Alamat',
        price: 'SUDAH INCLUDE',
        detail:
          'Berangkat setiap hari tanpa minimal kuota, sudah termasuk penjemputan & pengantaran Shuttle AC PP area Kota Malang, Jeep 4×4, BBM & tiket TNBTS WNI.',
        included: true,
      },
    ],
    facilitiesSectionTitle: '✅ Fasilitas Paket (Include & Exclude)',
    includeTitle: '✅ Include (Sudah Termasuk)',
    includeItems: [
      'Shuttle Car AC penjemputan & pengantaran langsung area Kota Malang (& opsi Kota Batu) PP.',
      'Driver shuttle dan driver Jeep lokal Bromo yang profesional, ramah & berpengalaman.',
      'BBM (bahan bakar minyak) untuk Shuttle dan Jeep Bromo PP.',
      'Jeep Bromo 4×4 (Toyota Land Cruiser FJ40) untuk menjelajah seluruh destinasi kaldera.',
      'Tiket masuk resmi Taman Nasional Bromo Tengger Semeru (TNBTS WNI).',
      'Retribusi resmi kawasan wisata dan biaya parkir resmi.',
      'Dokumentasi foto DSLR/Mirrorless profesional (khusus pilihan paket plus dokumentasi).',
    ],
    excludeTitle: '❌ Exclude (Tidak Termasuk)',
    excludeItems: [
      'Sewa kuda di Kaldera Bromo menuju kaki tangga kawah (opsional, bisa jalan kaki).',
      'Makan dan minuman pribadi (tersedia banyak warung lokal hangat di puncak & kaldera).',
      'Biaya toilet umum berbayar di kawasan wisata Bromo.',
      'Surcharge tiket masuk wisatawan mancanegara (WNA) Rp255.000 / orang.',
      'Keperluan dan obat-obatan pribadi selama perjalanan.',
    ],
    itinerarySectionTitle: '🕚 Itinerary Lengkap (Urut dari Penjemputan hingga Pulang)',
    itinerarySectionSubtitle:
      'Durasi perjalanan midnight 1 hari (23:00 – 13:00 WIB), praktis untuk penumpang kereta api maupun wisatawan yang menginap di Kota Malang.',
    itinerarySteps: [
      {
        symbol: '🚗',
        time: '23:00 – 01:30 WIB',
        title: 'Penjemputan Area Kota Malang (& Kota Batu)',
        description:
          'Driver shuttle menjemput peserta secara door-to-door di Stasiun Malang Kotabaru, Stasiun Kota Lama, hotel, homestay, rumah, Bandara Abdulrachman Saleh, atau Terminal Arjosari.',
      },
      {
        symbol: '🚐',
        time: '02:00 – 03:00 WIB',
        title: 'Transfer Jeep 4×4 Menuju Sunrise Point',
        description:
          'Tiba di Basecamp Gubugklakah / Tumpang, berpindah ke armada Jeep Toyota Land Cruiser FJ40 (maksimal 6 peserta per jeep) dan melaju naik ke view point golden sunrise.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Menikmati Golden Sunrise Bromo',
        description:
          'Menghangatkan diri di warung puncak lalu menyaksikan fajar spektakuler Gunung Bromo di Sunrise Point terbaik (Bukit Cinta / Prau / Kingkong / Penanjakan).',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: 'Eksplor 5 Spot Ikonik Kaldera Bromo',
        description:
          'Menjelajahi Bukit Widodaren, mendaki Kawah Bromo & Gunung Batok, Pura Luhur Poten, hamparan Pasir Berbisik, hingga hijaunya Savana Bukit Teletubbies.',
      },
      {
        symbol: '🔄',
        time: '10:00 – 11:00 WIB',
        title: 'Kembali ke Basecamp Transit Jeep',
        description:
          'Perjalanan kembali dari kaldera menuju basecamp transit Jeep di Gubugklakah/Tumpang untuk beristirahat sejenak dan berpindah kembali ke shuttle.',
      },
      {
        symbol: '🏨',
        time: '11:00 – 13:00 WIB',
        title: 'Drop Off Kota Malang (& Kota Batu)',
        description:
          'Pengantaran pulang langsung ke hotel, stasiun kereta, rumah, atau titik penjemputan awal di Kota Malang — pas dengan jadwal check-out hotel atau kereta sore.',
      },
    ],
    pickupSectionTitle: '📍 Lokasi Penjemputan Resmi Kota Malang',
    pickupLead:
      '📍 Tidak perlu repot datang ke basecamp — tim shuttle kami menjemput langsung di seluruh titik strategis dalam area Kota Malang (serta melayani penjemputan Kota Wisata Batu).',
    pickupPopularTitle: 'Titik Penjemputan Populer:',
    pickupPoints: [
      'Stasiun Malang Kotabaru & Stasiun Malang Kota Lama — Favorit penumpang kereta dari Jakarta, Bandung & Jogja.',
      'Hotel, Homestay, Kost & Rumah di Seluruh Wilayah Kota Malang (serta opsi Villa/Resort di Kota Batu).',
      'Bandara Abdulrachman Saleh Malang & Terminal Arjosari Malang.',
    ],
    gearSectionTitle: '🧥 Perlengkapan Wajib (Suhu 2°C – 10°C)',
    gearSectionSubtitle:
      'Suhu puncak Bromo saat dini hari bisa mencapai 2°C – 10°C. Siapkan 4 perlengkapan penting berikut sebelum dijemput:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Jaket Tebal & Windproof',
        reason:
          'Menahan angin dingin pegunungan selama menunggu matahari terbit pukul 03:30–05:30 WIB.',
      },
      {
        symbol: '🧤',
        name: 'Sarung Tangan & Kupluk (Beanie)',
        reason:
          'Melindungi telinga dan jari tangan agar tidak kaku karena udara dingin ekstrem di Sunrise Point.',
      },
      {
        symbol: '😷',
        name: 'Masker Medis atau Buff',
        reason:
          'Menyaring debu pasir halus saat menjelajahi Lautan Pasir, Pasir Berbisik, dan tangga Kawah Bromo.',
      },
      {
        symbol: '👟',
        name: 'Sepatu Anti-Selip & Uang Tunai',
        reason:
          'Sepatu tertutup bersol karet nyaman untuk jalur berpasir & tangga kawah, plus uang tunai kecil untuk toilet dan jajanan warung.',
      },
    ],
    extraTipTitle: '💡 Tips Tambahan untuk Peserta Open Trip Start Kota Malang',
    extraTipContent:
      'Jika Anda tiba di Malang menggunakan kereta api (seperti Gajayana, Malabar, Brawijaya, atau Kertanegara), pastikan jadwal kedatangan sebelum pukul 22:30 WIB agar punya waktu santai sebelum dijemput di Stasiun Malang Kotabaru. Untuk rombongan 4–6 orang yang menginginkan jadwal lebih fleksibel dan 100% privat tanpa digabung peserta lain, Anda juga bisa membandingkannya dengan Private Trip Start Kota Malang (Rp1.700.000 flat per jeep).',
    conclusion:
      'Open Trip Bromo Start Kota Malang adalah pilihan terbaik untuk liburan hemat, praktis, dan pasti berangkat setiap hari meskipun Anda hanya mendaftar 1 orang! Pilih paket Reguler Rp275.000/org atau Plus Foto DSLR Rp325.000/org dan langsung amankan kuota Anda melalui kalkulator booking resmi WisataBromo.co.',
    ctaButton: 'Hitung & Booking Open Trip Start Malang',
    tags: [
      'Open Trip Bromo Start Malang',
      'Open Trip Bromo Malang 2026',
      'Harga Open Trip Bromo 275rb',
      'Open Trip Bromo 1 Orang Berangkat',
      'Bromo Start Stasiun Malang',
    ],
  },
  en: {
    id: 'open-trip-bromo-start-kota-malang-harga-2026',
    slug: 'open-trip-bromo-start-kota-malang-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'open-trip-malang',
    title: 'Mount Bromo Open Trip from Malang City: 2026 Prices, Itinerary & Facilities',
    metaDescription:
      'Complete 2026 guide to Mount Bromo Open Trip from Malang City starting at IDR 275,000/person (or IDR 325,000/person with DSLR photography). Daily guaranteed departure even for 1 solo traveler, direct pickup at Malang Station or hotels, including AC shuttle, 4x4 Jeep & TNBTS ticket.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 26, 2026',
    readTime: '5 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guides',
    heroImage: imgOpenTripMalang,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Mount Bromo Open Trip from Malang City — Daily guaranteed departure from 1 person, starting at IDR 275,000/pax',
    introduction: [
      'Want to experience Mount Bromo’s Golden Sunrise and all 5 caldera highlights on the most budget-friendly schedule from Malang City? WisataBromo.co’s Open Trip Bromo Start Malang is our #1 daily shared tour for solo travelers, couples, backpackers, and small groups. Departing every single night (Monday–Sunday), even 1 single traveler is guaranteed to depart with zero minimum quota!',
      'Starting at just IDR 275,000/person (or IDR 325,000/person with professional DSLR/Mirrorless photo documentation), the tour includes direct door-to-door pickup at Malang Train Station, hotels, or residences in Malang City, a 4×4 Toyota Land Cruiser FJ40 Jeep, and official TNBTS entry tickets (WNI). Check the 2026 pricing, inclusions, and 23:00–13:00 WIB itinerary below.',
    ],
    pricingSectionTitle: '💰 2026 Open Trip Start Malang City Prices & Options',
    pricingSectionSubtitle:
      'Most affordable daily shared trip from Malang — guaranteed daily departure from 1 pax with optional DSLR/Mirrorless photo package.',
    heroBadge: '1 PAX GUARANTEED • DAILY DEPARTURE',
    startingPriceLabel: 'Starting from',
    startingPriceValue: 'IDR 275,000',
    startingPriceUnit: '/ person (Start Malang City)',
    seasonNote:
      'Malang Regular: IDR 275k/pax | + DSLR Photo: IDR 325k/pax • High Season +IDR 50k/pax (Batu City pickup also available)',
    docIncludedBannerTitle: '🚐 Guaranteed Daily Departure Even for 1 Solo Traveler!',
    docIncludedBannerDesc:
      'Unlike weekend-only shared tours, our Malang Open Trip departs EVERY DAY (Mon–Sun) at 23:00–01:00 WIB with direct door-to-door pickup at your Malang hotel, home, or train station!',
    tiersTableTitle: '📊 2026 Open Trip Malang & Batu Price Breakdown',
    tiersTableSubtitle:
      'Select your pickup city and whether you want professional DSLR/Mirrorless photo coverage:',
    pricingTiers: [
      {
        pax: 'Start Malang City (Regular)',
        pricePerPax: 'IDR 275,000 / pax',
        highlight: true,
        badge: 'Best Value • Standard',
      },
      {
        pax: 'Start Malang City + DSLR Photo',
        pricePerPax: 'IDR 325,000 / pax',
        highlight: true,
        badge: 'Most Popular • With Photographer',
      },
      {
        pax: 'High Season Malang (Regular)',
        pricePerPax: 'IDR 325,000 / pax',
        badge: 'Christmas, New Year & Eid',
      },
      {
        pax: 'High Season Malang + DSLR Photo',
        pricePerPax: 'IDR 375,000 / pax',
        badge: 'Christmas, New Year & Eid',
      },
      {
        pax: 'Batu City Pickup Option (Regular)',
        pricePerPax: 'IDR 325,000 / pax',
        badge: 'High Season IDR 375k',
      },
      {
        pax: 'Batu City Pickup + DSLR Photo',
        pricePerPax: 'IDR 375,000 / pax',
        badge: 'High Season IDR 425k',
      },
    ],
    highSeasonNote:
      'High Season surcharge (+IDR 50,000/person) applies during Year-End holidays (Dec 18, 2026 – Jan 5, 2027) and Eid holidays. Foreign national (WNA) visitors pay a TNBTS national park ticket surcharge of IDR 255,000/person.',
    addons: [
      {
        symbol: '📸',
        label: 'Optional DSLR / Mirrorless Photo Package',
        price: '+IDR 50,000 / pax',
        detail:
          'Upgrade to IDR 325,000/person (Start Malang) for curated DSLR/Mirrorless photos from Sunrise Point to Teletubbies Savanna.',
      },
      {
        symbol: '🚐',
        label: 'Daily 1-Pax Departure + Door-to-Door Pickup',
        price: 'INCLUDED',
        detail:
          'Guaranteed daily departure with round-trip Malang AC shuttle pickup/drop-off, 4×4 Jeep, fuel, and TNBTS WNI entry ticket.',
        included: true,
      },
    ],
    facilitiesSectionTitle: '✅ Package Facilities (Include & Exclude)',
    includeTitle: '✅ Included in the Package',
    includeItems: [
      'Round-trip AC Shuttle pickup & drop-off in Malang City (plus Batu City option).',
      'Experienced, friendly shuttle driver and local Bromo 4×4 Jeep driver.',
      'Round-trip fuel for both the shuttle and Mount Bromo Jeep.',
      '4×4 Bromo Jeep (Toyota Land Cruiser FJ40) to all caldera viewpoints.',
      'Official TNBTS (Bromo Tengger Semeru National Park) entry ticket (Indonesian WNI).',
      'Official regional levies and parking fees.',
      'Professional DSLR/Mirrorless photo documentation (for the +Photo package option).',
    ],
    excludeTitle: '❌ Not Included (Exclude)',
    excludeItems: [
      'Horse rental in the Bromo caldera (optional; easy walk to the crater stairs).',
      'Personal meals and warm drinks at local stalls.',
      'Paid public restrooms at Mount Bromo.',
      'Foreign national (WNA) TNBTS ticket surcharge of IDR 255,000 / person.',
      'Personal expenses and medication.',
    ],
    itinerarySectionTitle: '🕚 Complete Midnight Itinerary (23:00 – 13:00 WIB)',
    itinerarySectionSubtitle:
      'Seamless 1-day midnight tour ideal for train travelers and guests staying in Malang City.',
    itinerarySteps: [
      {
        symbol: '🚗',
        time: '23:00 – 01:30 WIB',
        title: 'Malang City (& Batu) Door-to-Door Pickup',
        description:
          'Our shuttle driver picks you up directly from Malang Kotabaru/Kota Lama Station, hotels, homestays, homes, Abdulrachman Saleh Airport, or Arjosari Terminal.',
      },
      {
        symbol: '🚐',
        time: '02:00 – 03:00 WIB',
        title: '4×4 Jeep Transfer to Sunrise Point',
        description:
          'Arrive at Gubugklakah/Tumpang Jeep Basecamp, board the 4×4 Toyota Land Cruiser FJ40 (max 6 guests/Jeep), and climb toward the sunrise ridge.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Bromo Golden Sunrise Experience',
        description:
          'Enjoy a warm drink at the summit stalls before watching the breathtaking Golden Sunrise (Bukit Cinta / Prau / Kingkong / Penanjakan).',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: 'Explore 5 Iconic Caldera Landmarks',
        description:
          'Visit Widodaren Hill, climb Mount Bromo Crater & Mount Batok, Pura Luhur Poten, Whispering Sands, and lush Teletubbies Savanna.',
      },
      {
        symbol: '🔄',
        time: '10:00 – 11:00 WIB',
        title: 'Return to Jeep Transit Basecamp',
        description:
          'Drive back from the caldera to the Jeep basecamp to freshen up and transfer back to your AC shuttle.',
      },
      {
        symbol: '🏨',
        time: '11:00 – 13:00 WIB',
        title: 'Drop-Off Back in Malang City (& Batu)',
        description:
          'Direct return to your hotel, train station, or pickup address in Malang — nicely timed for hotel check-out or afternoon trains.',
      },
    ],
    pickupSectionTitle: '📍 Official Malang City Pickup Locations',
    pickupLead:
      '📍 No need to commute to a basecamp — our shuttle picks you up directly anywhere across Malang City (with Batu City pickup also available).',
    pickupPopularTitle: 'Popular Pickup Points:',
    pickupPoints: [
      'Malang Kotabaru & Malang Kota Lama Train Stations — Ideal for train arrivals from Jakarta, Bandung & Yogyakarta.',
      'Hotels, Homestays & Private Residences across Malang City (plus Villas/Resorts in Batu City).',
      'Abdulrachman Saleh Airport & Arjosari Bus Terminal Malang.',
    ],
    gearSectionTitle: '🧥 Essential Packing List (2°C – 10°C)',
    gearSectionSubtitle:
      'Summit temperatures before dawn can drop to 2°C – 10°C. Pack these 4 essentials before pickup:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Warm Windproof Jacket',
        reason:
          'Protects against cold mountain winds while waiting for sunrise from 03:30 to 05:30 WIB.',
      },
      {
        symbol: '🧤',
        name: 'Gloves & Beanie Hat',
        reason:
          'Keeps your hands and ears warm so you stay comfortable taking photos at the viewpoint.',
      },
      {
        symbol: '😷',
        name: 'Face Mask or Neck Buff',
        reason:
          'Filters fine volcanic sand dust across Whispering Sands and the Bromo Crater trail.',
      },
      {
        symbol: '👟',
        name: 'Non-Slip Sneakers & Small Cash',
        reason:
          'Rubber-sole closed shoes give steady grip on sandy trails, plus small IDR cash for local snacks and restrooms.',
      },
    ],
    extraTipTitle: '💡 Extra Tip for Malang Open Trip Travelers',
    extraTipContent:
      'Arriving in Malang by train (Gajayana, Malabar, Brawijaya, or Kertanegara)? Aim for an arrival before 22:30 WIB so you can relax before pickup at Malang Kotabaru Station. If you are a group of 4–6 looking for a 100% private Jeep without sharing, compare with our Private Trip Start Malang City (flat IDR 1,700,000 per Jeep).',
    conclusion:
      'Open Trip Bromo Start Malang City is the easiest, most budget-friendly way to witness Bromo’s Golden Sunrise and 5 caldera icons with guaranteed daily departures even for 1 traveler. Book your Regular (IDR 275k) or +DSLR Photo (IDR 325k) seat now via the official WisataBromo.co calculator!',
    ctaButton: 'Calculate & Book Open Trip Start Malang',
    tags: [
      'Mount Bromo Open Trip Malang',
      'Bromo Shared Tour Malang 2026',
      'Budget Bromo Tour 275k',
      'Solo Traveler Bromo Malang',
      'Bromo Pickup Malang Station',
    ],
  },
  zh: {
    id: 'open-trip-bromo-start-kota-malang-harga-2026',
    slug: 'open-trip-bromo-start-kota-malang-harga-2026-itinerary-fasilitas',
    bookingPackageId: 'open-trip-malang',
    title: '玛琅市区出发布罗莫拼团 (Open Trip)：2026 价格、行程与全包设施指南',
    metaDescription:
      '2026 玛琅市区出发布罗莫拼团 (Open Trip) 完整攻略：仅需 Rp275.000/人起（加单反跟拍 Rp325.000/人）。天天发团、1人即可成行，玛琅火车站/酒店上门接送，含空调车、4x4吉普与 TNBTS 门票。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月26日',
    readTime: '阅读约 5 分钟',
    category: 'tips_wisata',
    categoryLabel: '旅游攻略与贴士',
    heroImage: imgOpenTripMalang,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 玛琅市区出发布罗莫拼团 — 1人即发团、天天发车，低至 Rp275.000/人起',
    introduction: [
      '想以超高性价比从玛琅市区出发，打卡布罗莫金色日出与 5 大火山口奇观？WisataBromo.co 的“玛琅市区出发布罗莫拼团 (Open Trip)”是独行旅客、情侣、学生及小团队最喜爱的每日拼团方案。周一至周日每晚准时发车，哪怕只报名 1 人也保证发团，无最低人数限制！',
      '价格低至 Rp275.000/人起（或升级至 Rp325.000/人含专业单反/微单摄影跟拍），直接提供玛琅火车站、酒店、民宿或市区地址上门往返接送，包含 4×4 丰田 Land Cruiser FJ40 吉普与 TNBTS 国家公园官方门票（印尼公民）。下面为您详述 2026 价格、设施与 23:00–13:00 行程。',
    ],
    pricingSectionTitle: '💰 2026 玛琅市区出发拼团价格与套餐',
    pricingSectionSubtitle:
      '玛琅出发最具性价比的每日拼团——1人即可发团，可自由选择标准版或单反跟拍升级版。',
    heroBadge: '1人保证发团 • 天天发车',
    startingPriceLabel: '起价仅',
    startingPriceValue: 'Rp275.000',
    startingPriceUnit: '/ 人（玛琅市区出发）',
    seasonNote:
      '玛琅标准版 Rp275.000/人 | 含单反跟拍 Rp325.000/人 • 旺季 +Rp50.000/人（亦支持巴图市上门接送）',
    docIncludedBannerTitle: '🚐 1人即发团、周一至周日天天发车！',
    docIncludedBannerDesc:
      '不同于仅限周末的拼团，玛琅市区布罗莫拼团每晚 23:00–01:00 WIB 准时发车，支持玛琅火车站、酒店或住址直接上门接送，无需凑人数！',
    tiersTableTitle: '📊 2026 玛琅 / 巴图拼团详细价目表',
    tiersTableSubtitle:
      '根据您的接送城市与是否需要单反/微单摄影跟拍灵活选择：',
    pricingTiers: [
      {
        pax: '玛琅市区出发（标准版）',
        pricePerPax: 'Rp275.000 / 人',
        highlight: true,
        badge: '超高性价比 • 不含跟拍',
      },
      {
        pax: '玛琅市区出发 + 单反跟拍',
        pricePerPax: 'Rp325.000 / 人',
        highlight: true,
        badge: '最受欢迎 • 含专业摄影师',
      },
      {
        pax: '玛琅旺季价（标准版）',
        pricePerPax: 'Rp325.000 / 人',
        badge: '圣诞元旦与开斋节假期',
      },
      {
        pax: '玛琅旺季价 + 单反跟拍',
        pricePerPax: 'Rp375.000 / 人',
        badge: '圣诞元旦与开斋节假期',
      },
      {
        pax: '巴图市接送（标准版）',
        pricePerPax: 'Rp325.000 / 人',
        badge: '旺季 Rp375.000',
      },
      {
        pax: '巴图市接送 + 单反跟拍',
        pricePerPax: 'Rp375.000 / 人',
        badge: '旺季 Rp425.000',
      },
    ],
    highSeasonNote:
      '旺季加价（+Rp50.000/人）适用于圣诞新年假期（2026年12月18日 – 2027年1月5日）及开斋节长假。外籍游客（WNA）需补交 TNBTS 国家公园门票差价 Rp255.000/人。',
    addons: [
      {
        symbol: '📸',
        label: '可选升级：专业单反 / 微单摄影跟拍',
        price: '+Rp50.000 / 人',
        detail:
          '玛琅出发仅需 Rp325.000/人即可升级专业单反跟拍，全程记录日出观景台至天线宝宝草原的高光瞬间。',
      },
      {
        symbol: '🚐',
        label: '1人天天发团 + 玛琅市区上门接送',
        price: '已包含',
        detail:
          '无最低人数限制，费用已含玛琅空调专车往返上门接送、4×4 越野吉普、燃油费与 TNBTS 印尼公民门票。',
        included: true,
      },
    ],
    facilitiesSectionTitle: '✅ 套餐包含与不含项目',
    includeTitle: '✅ 费用包含 (Include)',
    includeItems: [
      '玛琅市区（及可选巴图市）空调接驳车往返上门接送。',
      '专业友善的接驳司机与布罗莫本地 4×4 吉普司机。',
      '接驳车与布罗莫吉普车全程往返燃油费。',
      '布罗莫 4×4 越野吉普（丰田 Land Cruiser FJ40）畅游全景点。',
      '布罗莫腾格尔塞梅鲁国家公园 (TNBTS) 官方门票（印尼公民）。',
      '官方景区管理费与停车费。',
      '专业单反/微单摄影跟拍（限选择含跟拍升级套餐）。',
    ],
    excludeTitle: '❌ 费用不含 (Exclude)',
    excludeItems: [
      '布罗莫火山口骑马费（自选项目，也可步行前往台阶）。',
      '行程中在山顶或景区小店的个人餐饮费用。',
      '布罗莫景区内收费公共洗手间。',
      '外籍游客 (WNA) 国家公园门票附加费 Rp255.000 / 人。',
      '个人消费与常备药物。',
    ],
    itinerarySectionTitle: '🕚 完整午夜行程单（23:00 – 13:00 WIB）',
    itinerarySectionSubtitle:
      '高效紧凑的一日午夜行程，完美衔接玛琅火车到达与酒店退房时间。',
    itinerarySteps: [
      {
        symbol: '🚗',
        time: '23:00 – 01:30 WIB',
        title: '玛琅市区（及巴图）上门接人',
        description:
          '接驳车司机前往玛琅 Kotabaru/Kota Lama 火车站、酒店、民宿、住宅、玛琅机场或 Arjosari 汽车站逐一接驾。',
      },
      {
        symbol: '🚐',
        time: '02:00 – 03:00 WIB',
        title: '换乘 4×4 吉普前往日出观景台',
        description:
          '抵达 Gubugklakah / Tumpang 吉普大本营，换乘丰田 Land Cruiser FJ40（每车最多 6 人）驶向山顶日出观景点。',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: '布罗莫金色日出震撼体验',
        description:
          '在山顶小店享用热饮暖身，随后在最佳观景点（Bukit Cinta / Prau / Kingkong / Penanjakan）迎接金色日出。',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: '深度打卡布罗莫火山口 5 大经典景点',
        description:
          '依次探访 Widodaren 山崖、攀登布罗莫火山口与 Batok 火山、Luhur Poten 古庙、低语沙海以及天线宝宝大草原。',
      },
      {
        symbol: '🔄',
        time: '10:00 – 11:00 WIB',
        title: '返回吉普中转大本营',
        description:
          '从沙海返回 Gubugklakah/Tumpang 吉普中转基地稍作休整，换回空调接驳专车。',
      },
      {
        symbol: '🏨',
        time: '11:00 – 13:00 WIB',
        title: '送回玛琅市区（及巴图）原接送点',
        description:
          '直接送回您的酒店、火车站或市区住址，正好方便办理退房或乘坐下午班次列车。',
      },
    ],
    pickupSectionTitle: '📍 玛琅市区官方上门接送范围',
    pickupLead:
      '📍 无需自行前往山脚大本营——我们的接驳专车覆盖玛琅市区全境上门接送（亦支持巴图市加选接送）。',
    pickupPopularTitle: '热门上门接送点：',
    pickupPoints: [
      '玛琅 Kotabaru 火车站与 Kota Lama 火车站 — 雅加达、万隆、日惹火车旅客首选。',
      '玛琅市区全境酒店、民宿与私宅（另可选巴图市度假村与别墅）。',
      '玛琅 Abdulrachman Saleh 机场与 Arjosari 客运总站。',
    ],
    gearSectionTitle: '🧥 必备保暖装备（山顶气温 2°C – 10°C）',
    gearSectionSubtitle:
      '布罗莫凌晨观景台气温低至 2°C – 10°C，出发前请备齐以下 4 件装备：',
    gearItems: [
      {
        symbol: '🧥',
        name: '加厚防风羽绒/冲锋外套',
        reason:
          '凌晨 03:30–05:30 在山顶等待日出时抵御刺骨寒风。',
      },
      {
        symbol: '🧤',
        name: '保暖手套与毛线帽',
        reason:
          '防止双手与耳朵受冻，让您在高海拔拍出满意美照。',
      },
      {
        symbol: '😷',
        name: '医用口罩或魔术头巾',
        reason:
          '有效阻隔低语沙海与火山口步道扬起的细腻火山沙尘。',
      },
      {
        symbol: '👟',
        name: '防滑运动鞋与小额现金',
        reason:
          '防滑鞋底方便走沙路与攀登火山口台阶，备好零钱便于购买热饮与使用洗手间。',
      },
    ],
    extraTipTitle: '💡 玛琅拼团出发前实用贴士',
    extraTipContent:
      '如果您乘坐火车抵达玛琅（如 Gajayana、Malabar、Brawijaya 或 Kertanegara 列车），建议选择 22:30 WIB 前抵达的车次以便从容衔接接车。若同行已有 4–6 人且希望独享一整辆吉普车，也可对比我们的“玛琅市区出发私人团”（每辆吉普一口价 Rp1.700.000）。',
    conclusion:
      '玛琅市区出发布罗莫拼团 (Open Trip) 是最省钱、省心且 1 人天天发团的理想选择。立即通过 WisataBromo.co 官方预订计算器选择标准版（Rp275.000/人）或单反跟拍版（Rp325.000/人），一键锁定您的出发席位！',
    ctaButton: '计算费用并预订玛琅出发拼团',
    tags: [
      '玛琅布罗莫拼团',
      '玛琅出发Open Trip 2026',
      '布罗莫拼团275k',
      '布罗莫1人发团',
      '玛琅火车站布罗莫一日游',
    ],
  },
};
