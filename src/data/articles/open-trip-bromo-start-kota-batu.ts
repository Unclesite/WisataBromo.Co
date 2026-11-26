import { SupportedLanguage } from '../../i18n/LanguageContext';
import imgOpenTripBatu from '../../assets/images/bromo_sunrise_jeep_1790773945206.jpg';

export interface OpenTripBatuTierPrice {
  pax: string;
  pricePerPax: string;
  highlight?: boolean;
  badge?: string;
}

export interface OpenTripBatuAddonPrice {
  symbol: string;
  label: string;
  price: string;
  detail: string;
  included?: boolean;
}

export interface OpenTripBatuItineraryStep {
  symbol: string;
  time: string;
  title: string;
  description: string;
}

export interface OpenTripBatuGearItem {
  symbol: string;
  name: string;
  reason: string;
}

export interface LocalizedOpenTripBatuArticleContent {
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
  pricingTiers: OpenTripBatuTierPrice[];
  highSeasonNote: string;
  addons: OpenTripBatuAddonPrice[];
  facilitiesSectionTitle: string;
  includeTitle: string;
  includeItems: string[];
  excludeTitle: string;
  excludeItems: string[];
  itinerarySectionTitle: string;
  itinerarySectionSubtitle: string;
  itinerarySteps: OpenTripBatuItineraryStep[];
  pickupSectionTitle: string;
  pickupLead: string;
  pickupPopularTitle: string;
  pickupPoints: string[];
  gearSectionTitle: string;
  gearSectionSubtitle: string;
  gearItems: OpenTripBatuGearItem[];
  extraTipTitle: string;
  extraTipContent: string;
  conclusion: string;
  ctaButton: string;
  tags: string[];
}

export const ARTICLE_OPEN_TRIP_BROMO_START_KOTA_BATU: Record<
  SupportedLanguage,
  LocalizedOpenTripBatuArticleContent
> = {
  id: {
    id: 'open-trip-bromo-start-kota-batu',
    slug: 'open-trip-bromo-start-kota-batu-harga-itinerary-fasilitas',
    bookingPackageId: 'open-trip-batu',
    title: 'Open Trip Bromo Start Kota Batu: Harga, Itinerary, dan Fasilitas',
    metaDescription:
      'Panduan lengkap Open Trip Bromo Start Kota Batu Harga Terbaru mulai Rp325.000/orang (atau Rp375.000/orang plus dokumentasi foto DSLR). Berangkat setiap hari tanpa kuota minimal (1 orang pasti berangkat!), jemput langsung di hotel, villa & resort Kota Wisata Batu, sudah termasuk Shuttle AC, Jeep 4x4 & tiket TNBTS.',
    author: 'Tim Editorial WisataBromo.co',
    publishDate: '26 November 2026',
    readTime: '5 Menit Baca',
    category: 'tips_wisata',
    categoryLabel: 'Tips & Panduan Wisata',
    heroImage: imgOpenTripBatu,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Open Trip Bromo Start Kota Batu — 1 orang pasti berangkat setiap hari mulai Rp325.000/orang',
    introduction: [
      'Sedang berlibur atau staycation di Kota Wisata Batu dan ingin melanjutkan petualangan mengejar Golden Sunrise Gunung Bromo dengan biaya hemat? Layanan Open Trip Bromo Start Kota Batu dari WisataBromo.co siap menjemput Anda langsung di lobi hotel, villa, maupun resort kawasan Jatim Park, Alun-Alun Batu, Oro-Oro Ombo, hingga Selecta. Berangkat setiap hari tengah malam (Senin–Minggu), bahkan 1 orang saja tetap pasti berangkat tanpa minimal kuota!',
      'Dengan tarif transparan mulai Rp325.000/orang (atau Rp375.000/orang jika sekalian dokumentasi foto DSLR/Mirrorless), Anda tidak perlu repot turun dulu ke Kota Malang. Paket sudah mencakup Shuttle Car AC PP, BBM, Jeep Hardtop 4×4 Toyota Land Cruiser FJ40, hingga tiket masuk resmi TNBTS. Simak rincian harga, fasilitas, jadwal itinerary 23:00 – 13:00 WIB, serta perlengkapan wajibnya di bawah ini.',
    ],
    pricingSectionTitle: '💰 Harga & Paket Open Trip Start Kota Batu (Terbaru)',
    pricingSectionSubtitle:
      'Sharing trip harian praktis langsung dari Kota Wisata Batu — 1 orang pasti berangkat setiap hari dengan opsi reguler atau plus foto DSLR/Mirrorless.',
    heroBadge: '1 ORANG PASTI BERANGKAT • JEMPUT VILLA & HOTEL BATU',
    startingPriceLabel: 'Mulai dari',
    startingPriceValue: 'Rp325.000',
    startingPriceUnit: '/ orang (Start Kota Batu)',
    seasonNote:
      'Start Batu Reguler: Rp325.000/org | Plus Foto DSLR: Rp375.000/org • High Season: Rp375.000 (Reguler) / Rp425.000 (+Foto DSLR)',
    docIncludedBannerTitle: '🚐 1 Orang Pasti Berangkat Setiap Hari Langsung dari Kota Batu!',
    docIncludedBannerDesc:
      'Tidak perlu khawatir kuota kurang atau harus transit sendiri ke Malang — Open Trip Start Kota Batu berangkat SETIAP HARI pukul 23:00–00:30 WIB dengan penjemputan door-to-door di hotel, villa, atau homestay Anda di Kota Wisata Batu!',
    tiersTableTitle: '📊 Daftar Harga Open Trip Bromo Start Kota Batu',
    tiersTableSubtitle:
      'Pilih opsi sesuai musim keberangkatan dan kebutuhan dokumentasi foto DSLR/Mirrorless Anda:',
    pricingTiers: [
      {
        pax: 'Start Kota Batu (Reguler)',
        pricePerPax: 'Rp325.000 / org',
        highlight: true,
        badge: 'Paling Hemat • Tanpa Doc',
      },
      {
        pax: 'Start Kota Batu + Foto DSLR',
        pricePerPax: 'Rp375.000 / org',
        highlight: true,
        badge: 'Terfavorit • Include Fotografer',
      },
      {
        pax: 'High Season Kota Batu (Reguler)',
        pricePerPax: 'Rp375.000 / org',
        badge: 'Nataru & Libur Idul Fitri',
      },
      {
        pax: 'High Season Kota Batu + Foto DSLR',
        pricePerPax: 'Rp425.000 / org',
        badge: 'Nataru & Libur Idul Fitri',
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
          'Upgrade ke paket Rp375.000/orang (Start Kota Batu) untuk sesi foto DSLR/Mirrorless profesional dari Sunrise Point hingga Savana Teletubbies.',
      },
      {
        symbol: '🚐',
        label: 'Jemput Door-to-Door Kota Batu + 1 Pax Jalan',
        price: 'SUDAH INCLUDE',
        detail:
          'Berangkat setiap hari tanpa minimal kuota, sudah termasuk Shuttle AC jemput-antar hotel/villa Batu PP, Jeep 4×4, BBM & tiket TNBTS WNI.',
        included: true,
      },
    ],
    facilitiesSectionTitle: '✅ Fasilitas Paket (Include & Exclude)',
    includeTitle: '✅ Include (Sudah Termasuk)',
    includeItems: [
      'Shuttle Car AC penjemputan & pengantaran langsung (door-to-door) area Kota Wisata Batu PP.',
      'Driver shuttle dan driver Jeep lokal Bromo yang profesional, ramah & berpengalaman.',
      'BBM (bahan bakar minyak) Shuttle & Jeep Bromo PP.',
      'Jeep Bromo 4×4 (Toyota Land Cruiser FJ40) ke semua destinasi wisata kaldera.',
      'Tiket masuk resmi Taman Nasional Bromo Tengger Semeru (TNBTS WNI).',
      'Retribusi resmi kawasan wisata dan biaya parkir resmi.',
      'Dokumentasi foto DSLR/Mirrorless profesional (khusus pilihan paket plus dokumentasi).',
    ],
    excludeTitle: '❌ Exclude (Tidak Termasuk)',
    excludeItems: [
      'Sewa kuda di Kaldera Bromo menuju kaki tangga kawah (opsional, bisa jalan kaki).',
      'Makan dan minuman pribadi di warung puncak atau area kaldera.',
      'Biaya toilet umum berbayar di kawasan wisata Bromo.',
      'Surcharge tiket masuk wisatawan mancanegara (WNA) Rp255.000 / orang.',
      'Keperluan dan obat-obatan pribadi selama perjalanan.',
    ],
    itinerarySectionTitle: '🕚 Itinerary Lengkap (Urut dari Penjemputan Batu hingga Pulang)',
    itinerarySectionSubtitle:
      'Durasi perjalanan midnight 1 hari (23:00 – 13:00 WIB) — pas digabung dengan jadwal wisata Jatim Park, Museum Angkut, atau staycation di Batu.',
    itinerarySteps: [
      {
        symbol: '🏨',
        time: '23:00 – 00:30 WIB',
        title: 'Penjemputan Hotel, Villa & Resort Kota Wisata Batu',
        description:
          'Driver shuttle menjemput langsung di hotel, villa, resort, atau homestay Anda di kawasan Jatim Park, Alun-Alun Batu, Oro-Oro Ombo, Songgoriti, Selecta, hingga Junrejo.',
      },
      {
        symbol: '🚗',
        time: '00:30 – 02:00 WIB',
        title: 'Perjalanan Shuttle Menuju Basecamp Transit Jeep',
        description:
          'Perjalanan nyaman melintasi Kota Malang menuju Basecamp Jeep Gubugklakah / Tumpang; peserta dapat beristirahat di dalam shuttle AC.',
      },
      {
        symbol: '🚐',
        time: '02:00 – 03:00 WIB',
        title: 'Transfer Jeep 4×4 Menuju Sunrise Point',
        description:
          'Berpindah ke armada Jeep Toyota Land Cruiser FJ40 (maksimal 6 peserta per jeep) lalu menanjak menuju spot golden sunrise terbaik.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Menikmati Golden Sunrise Bromo',
        description:
          'Menghangatkan badan di warung lokal puncak lalu menyaksikan fajar spektakuler Gunung Bromo di Sunrise Point (Bukit Cinta / Prau / Kingkong / Penanjakan).',
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
        time: '10:00 – 11:00 WIB',
        title: 'Kembali ke Basecamp Transit Jeep',
        description:
          'Perjalanan kembali dari kaldera menuju basecamp transit Jeep di Gubugklakah/Tumpang untuk beristirahat sejenak sebelum pulang.',
      },
      {
        symbol: '🏡',
        time: '11:00 – 13:00 WIB',
        title: 'Drop Off Hotel / Villa Kota Wisata Batu',
        description:
          'Pengantaran kembali langsung ke hotel, villa, atau resort Anda di Kota Wisata Batu — pas untuk makan siang atau melanjutkan agenda liburan sore.',
      },
    ],
    pickupSectionTitle: '📍 Lokasi Penjemputan Resmi Kota Wisata Batu',
    pickupLead:
      '📍 Armada shuttle kami menjemput langsung di seluruh kawasan penginapan populer Kota Wisata Batu tanpa perlu datang sendiri ke Kota Malang.',
    pickupPopularTitle: 'Area Penjemputan Populer Kota Batu:',
    pickupPoints: [
      'Hotel & Resort Area Jatim Park 1, 2, 3, Museum Angkut & Alun-Alun Kota Wisata Batu.',
      'Villa, Glamping & Homestay Kawasan Oro-Oro Ombo, Songgoriti, Batu Night Spectacular (BNS) & Selecta.',
      'Kawasan Junrejo, Pendem, Beji & Jalan Raya Utama Kota Wisata Batu.',
    ],
    gearSectionTitle: '🧥 Perlengkapan Wajib (Suhu 2°C – 10°C)',
    gearSectionSubtitle:
      'Meski udara Kota Batu sudah sejuk, puncak Gunung Bromo dini hari jauh lebih dingin (2°C – 10°C). Pastikan membawa 4 item penting ini:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Jaket Tebal & Windproof',
        reason:
          'Melindungi tubuh dari angin pegunungan dingin selama menunggu sunrise pukul 03:30–05:30 WIB.',
      },
      {
        symbol: '🧤',
        name: 'Sarung Tangan & Kupluk (Beanie)',
        reason:
          'Menjaga ujung jari dan telinga tetap hangat serta nyaman saat mengabadikan momen fajar.',
      },
      {
        symbol: '😷',
        name: 'Masker Medis atau Buff',
        reason:
          'Menahan debu pasir vulkanik halus di area Lautan Pasir, Pasir Berbisik, dan jalur Kawah Bromo.',
      },
      {
        symbol: '👟',
        name: 'Sepatu Anti-Selip & Uang Tunai',
        reason:
          'Sepatu tertutup beralas karet untuk medan pasir/tangga kawah, plus uang tunai kecil untuk warung hangat dan toilet.',
      },
    ],
    extraTipTitle: '💡 Tips Tambahan untuk Peserta Open Trip Start Kota Batu',
    extraTipContent:
      'Karena penjemputan dari Kota Batu dimulai lebih awal (sekitar 23:00 WIB), usahakan sudah makan malam dan beristirahat sejak pukul 20:00 WIB di hotel/villa agar badan tetap fit saat mendaki tangga Kawah Bromo. Jika Anda menginap di villa bersama keluarga atau rombongan 4–6 orang dan ingin jadwal lebih santai 100% privat, bandingkan juga dengan Private Trip Start Kota Batu (Rp1.800.000 flat per jeep).',
    conclusion:
      'Open Trip Bromo Start Kota Batu adalah solusi liburan paling praktis dan ekonomis untuk menggabungkan wisata Kota Batu dengan Golden Sunrise Gunung Bromo — bahkan 1 orang pun pasti berangkat setiap hari! Pilih paket Reguler Rp325.000/org atau Plus Foto DSLR Rp375.000/org dan langsung amankan seat melalui kalkulator resmi WisataBromo.co.',
    ctaButton: 'Hitung & Booking Open Trip Start Kota Batu',
    tags: [
      'Open Trip Bromo Start Kota Batu',
      'Open Trip Bromo Batu',
      'Harga Open Trip Bromo Batu',
      'Open Trip Bromo 1 Orang Berangkat',
      'Bromo Jemput Hotel Villa Batu',
    ],
  },
  en: {
    id: 'open-trip-bromo-start-kota-batu',
    slug: 'open-trip-bromo-start-kota-batu-harga-itinerary-fasilitas',
    bookingPackageId: 'open-trip-batu',
    title: 'Mount Bromo Open Trip from Batu City: Prices, Itinerary & Facilities',
    metaDescription:
      'Complete guide to Mount Bromo Open Trip from Batu City starting at IDR 325,000/person (or IDR 375,000/person with DSLR photography). Daily guaranteed departure even for 1 solo traveler, direct pickup at Batu hotels, villas & resorts, including AC shuttle, 4x4 Jeep & TNBTS ticket.',
    author: 'WisataBromo.co Editorial Team',
    publishDate: 'November 26, 2026',
    readTime: '5 Min Read',
    category: 'tips_wisata',
    categoryLabel: 'Travel Tips & Guides',
    heroImage: imgOpenTripBatu,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 Mount Bromo Open Trip from Batu City — Daily guaranteed departure from 1 person, starting at IDR 325,000/pax',
    introduction: [
      'Staying at a hotel, resort, or villa in Batu City and want a budget-friendly way to chase Mount Bromo’s Golden Sunrise? WisataBromo.co’s Open Trip Bromo Start Batu City picks you up directly from your accommodation around Jatim Park, Batu Town Square, Oro-Oro Ombo, Songgoriti, or Selecta. Running every single night (Mon–Sun), even 1 solo traveler is guaranteed to depart with zero minimum quota!',
      'With transparent rates starting at IDR 325,000/person (or IDR 375,000/person with DSLR/Mirrorless photo documentation), there is no need to commute down to Malang first. Round-trip AC shuttle transport, fuel, a 4×4 Toyota Land Cruiser FJ40 Jeep, and official TNBTS entry tickets (WNI) are all covered.',
    ],
    pricingSectionTitle: '💰 Open Trip Start Batu City Prices & Options',
    pricingSectionSubtitle:
      'Seamless daily shared tour directly from Batu City — guaranteed departure from 1 pax with optional DSLR/Mirrorless photography.',
    heroBadge: '1 PAX GUARANTEED • BATU HOTEL & VILLA PICKUP',
    startingPriceLabel: 'Starting from',
    startingPriceValue: 'IDR 325,000',
    startingPriceUnit: '/ person (Start Batu City)',
    seasonNote:
      'Batu Regular: IDR 325k/pax | + DSLR Photo: IDR 375k/pax • High Season: IDR 375k (Regular) / IDR 425k (+DSLR Photo)',
    docIncludedBannerTitle: '🚐 Guaranteed Daily Departure Directly from Batu City — Even for 1 Pax!',
    docIncludedBannerDesc:
      'No need to wait for minimum signups or travel to Malang first — our Batu Open Trip departs EVERY DAY at 23:00–00:30 WIB with direct door-to-door pickup at your Batu hotel, resort, or villa!',
    tiersTableTitle: '📊 Open Trip Start Batu City Price Table',
    tiersTableSubtitle:
      'Choose your travel season and whether you would like DSLR/Mirrorless photography:',
    pricingTiers: [
      {
        pax: 'Start Batu City (Regular)',
        pricePerPax: 'IDR 325,000 / pax',
        highlight: true,
        badge: 'Best Value • Standard',
      },
      {
        pax: 'Start Batu City + DSLR Photo',
        pricePerPax: 'IDR 375,000 / pax',
        highlight: true,
        badge: 'Most Popular • With Photographer',
      },
      {
        pax: 'High Season Batu (Regular)',
        pricePerPax: 'IDR 375,000 / pax',
        badge: 'Christmas, New Year & Eid',
      },
      {
        pax: 'High Season Batu + DSLR Photo',
        pricePerPax: 'IDR 425,000 / pax',
        badge: 'Christmas, New Year & Eid',
      },
    ],
    highSeasonNote:
      'High Season surcharge (+IDR 50,000/person) applies during Year-End holidays (Dec 18, 2026 – Jan 5, 2027) and Eid holidays. International visitors (WNA) pay a TNBTS national park ticket surcharge of IDR 255,000/person.',
    addons: [
      {
        symbol: '📸',
        label: 'Optional DSLR / Mirrorless Photo Package',
        price: '+IDR 50,000 / pax',
        detail:
          'Upgrade to IDR 375,000/person (Start Batu City) for professional DSLR/Mirrorless photography from Sunrise Point to Teletubbies Savanna.',
      },
      {
        symbol: '🚐',
        label: 'Batu Door-to-Door Pickup + Daily 1-Pax Departure',
        price: 'INCLUDED',
        detail:
          'Guaranteed daily departure with round-trip AC shuttle from Batu hotels/villas, 4×4 Jeep, fuel, and TNBTS WNI entry ticket.',
        included: true,
      },
    ],
    facilitiesSectionTitle: '✅ Package Facilities (Include & Exclude)',
    includeTitle: '✅ Included in the Package',
    includeItems: [
      'Direct round-trip AC Shuttle pickup & drop-off at hotels, villas & resorts in Batu City.',
      'Friendly, experienced shuttle driver and local Mount Bromo 4×4 Jeep driver.',
      'Round-trip fuel for both the AC shuttle and Mount Bromo Jeep.',
      '4×4 Bromo Jeep (Toyota Land Cruiser FJ40) to all caldera viewpoints.',
      'Official TNBTS (Bromo Tengger Semeru National Park) entry ticket (Indonesian WNI).',
      'Official area levies and parking fees.',
      'Professional DSLR/Mirrorless photo documentation (for the +Photo package option).',
    ],
    excludeTitle: '❌ Not Included (Exclude)',
    excludeItems: [
      'Horse rental in the Bromo caldera (optional; walkable to the crater stairs).',
      'Personal meals and warm drinks at mountain stalls.',
      'Paid public restrooms at Mount Bromo.',
      'Foreign national (WNA) TNBTS ticket surcharge of IDR 255,000 / person.',
      'Personal expenses and medication.',
    ],
    itinerarySectionTitle: '🕚 Complete Midnight Itinerary (23:00 – 13:00 WIB)',
    itinerarySectionSubtitle:
      'Efficient 1-day midnight itinerary that pairs seamlessly with your Batu theme park or resort stay.',
    itinerarySteps: [
      {
        symbol: '🏨',
        time: '23:00 – 00:30 WIB',
        title: 'Batu City Hotel, Villa & Resort Pickup',
        description:
          'Our shuttle driver picks you up directly from accommodations around Jatim Park, Batu Town Square, Oro-Oro Ombo, Songgoriti, Selecta, and Junrejo.',
      },
      {
        symbol: '🚗',
        time: '00:30 – 02:00 WIB',
        title: 'AC Shuttle Transfer to Jeep Transit Basecamp',
        description:
          'Comfortable ride through Malang toward Gubugklakah/Tumpang Jeep Basecamp; relax inside the air-conditioned shuttle.',
      },
      {
        symbol: '🚐',
        time: '02:00 – 03:00 WIB',
        title: '4×4 Jeep Ascent to Sunrise Point',
        description:
          'Transfer into a 4×4 Toyota Land Cruiser FJ40 (max 6 guests/Jeep) and climb up to the golden sunrise ridge.',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: 'Mount Bromo Golden Sunrise',
        description:
          'Warm up at local summit stalls before witnessing the iconic Bromo sunrise (Bukit Cinta / Prau / Kingkong / Penanjakan).',
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
        time: '10:00 – 11:00 WIB',
        title: 'Return to Jeep Transit Basecamp',
        description:
          'Drive out of the caldera back to the Jeep transit basecamp for a brief rest before heading home.',
      },
      {
        symbol: '🏡',
        time: '11:00 – 13:00 WIB',
        title: 'Drop-Off at Your Batu City Hotel or Villa',
        description:
          'Direct return to your hotel, villa, or resort in Batu City — right on time for lunch or afternoon leisure.',
      },
    ],
    pickupSectionTitle: '📍 Official Batu City Pickup Areas',
    pickupLead:
      '📍 Our shuttle picks you up directly across all major Batu City hospitality zones with no extra transfer needed.',
    pickupPopularTitle: 'Popular Batu City Pickup Zones:',
    pickupPoints: [
      'Hotels & Resorts near Jatim Park 1, 2, 3, Museum Angkut & Batu Town Square.',
      'Villas, Glamping & Homestays in Oro-Oro Ombo, Songgoriti, BNS & Selecta.',
      'Junrejo, Pendem, Beji & main avenues across Batu City.',
    ],
    gearSectionTitle: '🧥 Essential Packing List (2°C – 10°C)',
    gearSectionSubtitle:
      'While Batu is pleasantly cool, Mount Bromo before sunrise drops to 2°C – 10°C. Bring these 4 essentials:',
    gearItems: [
      {
        symbol: '🧥',
        name: 'Warm Windproof Jacket',
        reason:
          'Shields you from cold highland gusts while waiting for sunrise between 03:30 and 05:30 WIB.',
      },
      {
        symbol: '🧤',
        name: 'Gloves & Beanie Hat',
        reason:
          'Keeps your hands and ears comfortable in chilly summit air.',
      },
      {
        symbol: '😷',
        name: 'Face Mask or Neck Buff',
        reason:
          'Blocks fine volcanic dust across the Sea of Sand and Bromo Crater path.',
      },
      {
        symbol: '👟',
        name: 'Non-Slip Sneakers & Small Cash',
        reason:
          'Closed rubber-sole shoes for sandy trails and crater steps, plus small IDR bills for stalls and restrooms.',
      },
    ],
    extraTipTitle: '💡 Extra Tip for Batu City Open Trip Guests',
    extraTipContent:
      'Since Batu City pickup starts slightly earlier (around 23:00 WIB), have dinner early and get a few hours of sleep from 20:00 WIB so you stay energized for the crater climb. Traveling with 4–6 family members or friends in a Batu villa? Compare with our Private Trip Start Batu City (flat IDR 1,800,000 per Jeep) for 100% private flexibility.',
    conclusion:
      'Open Trip Bromo Start Batu City is the easiest, most affordable way to combine your Batu holiday with Mount Bromo’s Golden Sunrise — with guaranteed daily departures even for 1 guest. Select Regular (IDR 325k) or +DSLR Photo (IDR 375k) and book instantly via the official WisataBromo.co calculator!',
    ctaButton: 'Calculate & Book Open Trip Start Batu City',
    tags: [
      'Mount Bromo Open Trip Batu',
      'Bromo Shared Tour Batu City',
      'Batu Hotel Pickup Bromo Tour',
      'Solo Traveler Bromo Batu',
      'Bromo Open Trip 325k',
    ],
  },
  zh: {
    id: 'open-trip-bromo-start-kota-batu',
    slug: 'open-trip-bromo-start-kota-batu-harga-itinerary-fasilitas',
    bookingPackageId: 'open-trip-batu',
    title: '巴图市出发布罗莫拼团 (Open Trip)：价格、行程与全包设施指南',
    metaDescription:
      '巴图市 (Kota Batu) 出发布罗莫拼团 (Open Trip) 完整攻略：仅需 Rp325.000/人起（含单反跟拍 Rp375.000/人）。天天发团、1人即成行，巴图市酒店/度假村/别墅直接上门接送，含空调专车、4x4吉普与 TNBTS 门票。',
    author: 'WisataBromo.co 编辑团队',
    publishDate: '2026年11月26日',
    readTime: '阅读约 5 分钟',
    category: 'tips_wisata',
    categoryLabel: '旅游攻略与贴士',
    heroImage: imgOpenTripBatu,
    animationEmbedUrl: '/assets/aistudio/jeep-konvoi-4x1-snippet_24fbfc55.html',
    animationCaption:
      '🚐 巴图市出发布罗莫拼团 — 1人天天发团、巴图酒店别墅直达接送，低至 Rp325.000/人起',
    introduction: [
      '正在凉爽宜人的巴图旅游城 (Kota Wisata Batu) 度假，想以高性价比顺道打卡布罗莫火山金色日出？WisataBromo.co 推出的“巴图市出发布罗莫拼团 (Open Trip)”可直接前往 Jatim Park、巴图广场、Oro-Oro Ombo、Songgoriti 及 Selecta 周边酒店、度假村与别墅上门接驾。周一至周日每晚发车，1人报名也保证发团！',
      '年透明价格低至 Rp325.000/人起（升级单反/微单摄影跟拍仅 Rp375.000/人），无需自行下山前往玛琅转车。费用包含巴图往返空调专车、油费、4×4 丰田 FJ40 吉普车与 TNBTS 国家公园官方门票（印尼公民）。下面为您详列价格、设施与 23:00–13:00 行程安排。',
    ],
    pricingSectionTitle: '💰 巴图市出发拼团价格与方案',
    pricingSectionSubtitle:
      '巴图旅游城直发每日拼团——1人即可发团，提供标准版与专业单反跟拍升级版两种选择。',
    heroBadge: '1人保证发团 • 巴图酒店别墅上门接送',
    startingPriceLabel: '起价仅',
    startingPriceValue: 'Rp325.000',
    startingPriceUnit: '/ 人（巴图市出发）',
    seasonNote:
      '巴图标准版 Rp325.000/人 | 含单反跟拍 Rp375.000/人 • 旺季：Rp375.000（标准）/ Rp425.000（含跟拍）',
    docIncludedBannerTitle: '🚐 巴图市天天直发 — 1人报名也保证成行！',
    docIncludedBannerDesc:
      '无需凑人数、也无需提前赶往玛琅集合——巴图出发拼团每晚 23:00–00:30 WIB 准时前往您的巴图酒店、度假村或别墅门口上门接驾！',
    tiersTableTitle: '📊 巴图市出发拼团详细价目表',
    tiersTableSubtitle:
      '根据您的出行淡旺季与是否需要专业单反/微单跟拍自由选择：',
    pricingTiers: [
      {
        pax: '巴图市出发（标准版）',
        pricePerPax: 'Rp325.000 / 人',
        highlight: true,
        badge: '高性价比 • 不含跟拍',
      },
      {
        pax: '巴图市出发 + 单反跟拍',
        pricePerPax: 'Rp375.000 / 人',
        highlight: true,
        badge: '最受欢迎 • 含专业摄影师',
      },
      {
        pax: '巴图旺季价（标准版）',
        pricePerPax: 'Rp375.000 / 人',
        badge: '圣诞元旦与开斋节假期',
      },
      {
        pax: '巴图旺季价 + 单反跟拍',
        pricePerPax: 'Rp425.000 / 人',
        badge: '圣诞元旦与开斋节假期',
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
          '巴图出发仅需 Rp375.000/人即可升级专业单反跟拍，全程定格日出观景台至天线宝宝草原的高光大片。',
      },
      {
        symbol: '🚐',
        label: '巴图全境上门接送 + 1人天天发团',
        price: '已包含',
        detail:
          '无最低人数限制，包含巴图酒店/别墅空调专车往返接送、4×4 越野吉普、燃油费与 TNBTS 印尼公民门票。',
        included: true,
      },
    ],
    facilitiesSectionTitle: '✅ 套餐包含与不含项目',
    includeTitle: '✅ 费用包含 (Include)',
    includeItems: [
      '巴图旅游城全境酒店、度假村、别墅空调专车往返上门接送。',
      '专业友善的接驳司机与布罗莫本地 4×4 吉普司机。',
      '空调接驳车与布罗莫越野吉普全程往返燃油费。',
      '布罗莫 4×4 越野吉普（丰田 Land Cruiser FJ40）畅游全景点。',
      '布罗莫腾格尔塞梅鲁国家公园 (TNBTS) 官方门票（印尼公民）。',
      '景区官方管理费与各景点停车费。',
      '专业单反/微单摄影跟拍（限选择含跟拍升级套餐）。',
    ],
    excludeTitle: '❌ 费用不含 (Exclude)',
    excludeItems: [
      '布罗莫火山口骑马费（自选项目，亦可步行前往台阶）。',
      '行程中在山顶小店或景区的个人餐饮消费。',
      '布罗莫景区内收费公共洗手间。',
      '外籍游客 (WNA) 国家公园门票附加费 Rp255.000 / 人。',
      '个人消费与常备药物。',
    ],
    itinerarySectionTitle: '🕚 完整午夜行程单（23:00 – 13:00 WIB）',
    itinerarySectionSubtitle:
      '高效紧凑的一日午夜行程，完美搭配 Jatim Park、交通博物馆等巴图休闲行程。',
    itinerarySteps: [
      {
        symbol: '🏨',
        time: '23:00 – 00:30 WIB',
        title: '巴图市酒店、别墅与度假村上门接驾',
        description:
          '专车司机准时前往您在 Jatim Park、巴图广场、Oro-Oro Ombo、Songgoriti、Selecta 或 Junrejo 的下榻处接人。',
      },
      {
        symbol: '🚗',
        time: '00:30 – 02:00 WIB',
        title: '空调专车前往吉普中转大本营',
        description:
          '乘空调车途经玛琅前往 Gubugklakah / Tumpang 吉普大本营，途中可在车内安心小憩。',
      },
      {
        symbol: '🚐',
        time: '02:00 – 03:00 WIB',
        title: '换乘 4×4 吉普驶向日出观景台',
        description:
          '换乘丰田 Land Cruiser FJ40 吉普车（每车最多 6 人），穿越山路奔赴金色日出观景点。',
      },
      {
        symbol: '🌅',
        time: '03:30 – 06:00 WIB',
        title: '布罗莫金色日出震撼时刻',
        description:
          '在山顶小店享用热饮暖身，随后于最佳观景台（Bukit Cinta / Prau / Kingkong / Penanjakan）迎接壮丽日出。',
      },
      {
        symbol: '🏜️',
        time: '06:00 – 09:30 WIB',
        title: '深度打卡布罗莫火山口 5 大景点',
        description:
          '依次游览 Widodaren 山崖、攀登布罗莫火山口与 Batok 火山、Luhur Poten 古庙、低语沙海与天线宝宝大草原。',
      },
      {
        symbol: '🔄',
        time: '10:00 – 11:00 WIB',
        title: '返回吉普中转大本营',
        description:
          '从沙海返回 Gubugklakah/Tumpang 吉普中转基地休整，换回空调接驳专车。',
      },
      {
        symbol: '🏡',
        time: '11:00 – 13:00 WIB',
        title: '送回巴图市酒店 / 别墅',
        description:
          '直接送回您在巴图市的酒店、度假村或别墅，正好赶上午餐或下午的轻松度假安排。',
      },
    ],
    pickupSectionTitle: '📍 巴图市官方上门接送区域',
    pickupLead:
      '📍 我们的专车覆盖巴图旅游城全部热门住宿区，直接上门接送，无需自行前往玛琅市区。',
    pickupPopularTitle: '热门接送片区：',
    pickupPoints: [
      'Jatim Park 1/2/3、交通博物馆 (Museum Angkut) 及巴图广场周边酒店与度假村。',
      'Oro-Oro Ombo、Songgoriti、BNS 夜市及 Selecta 区域别墅、露营地与民宿。',
      'Junrejo、Pendem、Beji 及巴图市主干道沿线住宿点。',
    ],
    gearSectionTitle: '🧥 必备保暖装备（山顶气温 2°C – 10°C）',
    gearSectionSubtitle:
      '虽然巴图市本身气候凉爽，但布罗莫凌晨山顶气温低至 2°C – 10°C，请务必备好以下 4 件装备：',
    gearItems: [
      {
        symbol: '🧥',
        name: '加厚防风外套',
        reason:
          '凌晨 03:30–05:30 在观景台迎风等日出时抵御刺骨寒意。',
      },
      {
        symbol: '🧤',
        name: '保暖手套与毛线帽',
        reason:
          '保护手指与耳朵免受寒风侵袭，让您在山顶拍照更从容。',
      },
      {
        symbol: '😷',
        name: '医用口罩或魔术头巾',
        reason:
          '阻隔沙海、低语沙海及火山口步道扬起的细腻火山灰尘。',
      },
      {
        symbol: '👟',
        name: '防滑运动鞋与小额现金',
        reason:
          '橡胶防滑鞋底方便走砂石路与台阶，同时备好小额印尼盾现金便于购买热饮与使用洗手间。',
      },
    ],
    extraTipTitle: '💡 巴图市拼团出发前实用贴士',
    extraTipContent:
      '由于巴图市接车时间较早（约 23:00 WIB），建议提前享用晚餐并于 20:00 左右在酒店/别墅先小睡补觉，以充沛精力攀登布罗莫火山口。若您与 4–6 位亲友同住巴图别墅且希望独享一整辆吉普，也可对比我们的“巴图市出发私人团”（每辆吉普一口价 Rp1.800.000）。',
    conclusion:
      '巴图市出发布罗莫拼团 (Open Trip) 是串联巴图休闲度假与布罗莫金色日出最省钱、省心且 1 人天天发团的选择！立即通过 WisataBromo.co 官方预订计算器选择标准版（Rp325.000/人）或单反跟拍版（Rp375.000/人）锁定席位。',
    ctaButton: '计算费用并预订巴图市出发拼团',
    tags: [
      '巴图市布罗莫拼团',
      '巴图出发Open Trip',
      '巴图酒店接送布罗莫',
      '布罗莫1人发团',
      '巴图布罗莫一日游价格',
    ],
  },
};
