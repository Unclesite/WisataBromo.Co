import { TourPackage } from '../types';

import imgOpenTripMalang from '../assets/images/bromo_sunrise_jeep_1790773945206.jpg';
import imgOpenTripSurabaya from '../assets/images/bromo_sea_clouds_1790773968204.jpg';
import imgPrivateMalang from '../assets/images/private_malang_card.png';
import imgPrivateBatu from '../assets/images/vintage_4x4_batu.png';
import imgPrivateSurabaya from '../assets/images/header/header_04_5db1f48e.jpg';
import imgPrivateSukapura from '../assets/images/bromo_segara_wedhi_1791386575556.jpg';
import imgPrivateWonokitri from '../assets/images/tosari_jeep_card.png';
import imgPrivateTumpang from '../assets/images/bromo_widodaren_cliff_1790774506404.jpg';
import imgLongJeep from '../assets/images/bromo_long_jeep_savana_yellow.png';
import imgTrailSukapura from '../assets/images/bromo_trail_adventure_1790774015834.jpg';
import imgPicnicSavana from '../assets/images/bromo_picnic_experience_aesthetic.png';
import imgCustomUser from '../assets/images/package_custom_b48f8fd4.png';
import imgStandingCaldera from '../assets/images/standing_above_volcanic_caldera.png';
import imgCustomDbbd from '../assets/images/package_custom_dbbd6620.png';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'open-trip-malang',
    title: 'Open Trip Sunrise Bromo Start Malang / Batu',
    subtitle: 'Sharing trip harian hemat paling favorit dengan Jeep Hardtop 4x4, 1 orang pasti berangkat tanpa minimal kuota.',
    category: 'open_trip',
    startCity: 'malang',
    price: 275000,
    priceWithDoc: 325000,
    priceUnit: '/ orang',
    duration: '1 Hari (Midnight)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Kota Malang & Batu',
    departureTime: '23:00 - 01:00 WIB',
    imageUrl: imgCustomUser,
    rating: 4.9,
    reviewsCount: 342,
    badge: '1 Orang Pasti Berangkat',
    description: 'Paket sharing trip hemat dan terfavorit keliling 5 destinasi utama Bromo. Berangkat setiap hari tengah malam dari Malang atau Batu, 1 orang tetap bisa gabung!',
    destinations: [
      'Sunrise Point Penanjakan 1 / Kingkong Hill',
      'Lembah Widodaren Cliff & Dinasty Wall',
      'Kawah Bromo & Seruni Point (Gunung Batok & Pasir Kaldera)',
      'Pasir Berbisik (Segara Wedhi)',
      'Savana Bukit Teletubbies'
    ],
    pricingTiers: [
      { pax: 'Malang Reguler', price: 'Rp 275.000 / org' },
      { pax: 'Malang + Foto DSLR', price: 'Rp 325.000 / org' },
      { pax: 'Batu Reguler', price: 'Rp 325.000 / org' },
      { pax: 'Batu + Foto DSLR', price: 'Rp 375.000 / org' },
      { pax: 'High Season Malang', price: 'Rp 325.000 / org' },
      { pax: 'High Season Batu', price: 'Rp 375.000 / org' }
    ],
    includes: [
      'Shuttle Car Penjemputan & Pengantaran Area Malang / Batu PP',
      'Driver shuttle profesional, ramah & berpengalaman',
      'Bahan Bakar Minyak (BBM) Shuttle & Jeep PP',
      'Jeep Bromo 4x4 (Toyota Land Cruiser FJ40) ke 5 Destinasi',
      'Tiket Masuk Resmi TNBTS (Taman Nasional Bromo Tengger Semeru) WNI',
      'Retribusi Kawasan & Parkir Resmi',
      'Dokumentasi Foto DSLR/Mirrorless (khusus paket dokumentasi)'
    ],
    excludes: [
      'Sewa Kuda di Kaldera Bromo (opsional, bisa jalan kaki)',
      'Makan & minum pribadi (bisa beli di warung lokal)',
      'Toilet umum berbayar di Bromo',
      'Surcharge tiket masuk wisatawan asing (WNA) Rp 255.000 / orang',
      'Keperluan & obat-obatan pribadi'
    ],
    highlights: [
      '1 Orang Pasti Berangkat Setiap Hari Tanpa Kuota Minimal',
      'Start Kota Malang: Rp 275.000 (tanpa doc) | Rp 325.000 (plus doc foto)',
      'Start Kota Batu: Rp 325.000 (tanpa doc) | Rp 375.000 (plus doc foto)',
      'High Season (Idul Fitri, Nataru, Libur Panjang): +Rp 50.000 / orang'
    ],
    meetingPoints: [
      'Stasiun Malang Kotabaru & Stasiun Malang Kota Lama',
      'Hotel, Homestay, atau Rumah di Kota Malang',
      'Hotel, Villa, atau Resort di Kota Wisata Batu',
      'Bandara Abdulrachman Saleh Malang & Terminal Arjosari'
    ],
    meetingPoint: 'Dijemput di Stasiun / Hotel / Rumah / Bandara area Malang & Batu',
    tips: [
      'Gunakan jaket tebal, sarung tangan, kupluk/beanie penahan dingin',
      'Siapkan masker medis/buff untuk menahan debu pasir kaldera',
      'Bawa uang tunai secukupnya untuk toilet atau jajanan warung lokal'
    ],
    itinerary: [
      { time: '23:00 - 01:30', activity: 'Penjemputan Malang / Batu', description: 'Driver menjemput di stasiun, hotel, rumah, atau bandara area Malang & Batu.' },
      { time: '02:00 - 03:00', activity: 'Jeep ke Sunrise Point', description: 'Perjalanan Jeep 4x4 dari Basecamp Gubugklakah/Tumpang ke view point.' },
      { time: '03:30 - 06:00', activity: 'Golden Sunrise Bromo', description: 'Menikmati fajar spektakuler di Penanjakan 1 / Kingkong Hill.' },
      { time: '06:00 - 10:00', activity: 'Explore Kaldera Bromo', description: 'Explore Widodaren, Kawah Bromo, Seruni Point, Pasir Berbisik, dan Savana Teletubbies.' },
      { time: '10:00 - 11:00', activity: 'Kembali ke Basecamp', description: 'Perjalanan kembali menuju basecamp transit jeep.' },
      { time: '11:00 - 13:00', activity: 'Drop Off Malang / Batu', description: 'Pengantaran kembali ke hotel, stasiun, atau alamat penjemputan.' }
    ]
  },
  {
    id: 'open-trip-surabaya',
    title: 'Open Trip Bromo Start Surabaya',
    subtitle: 'Sharing trip praktis hemat dari Surabaya & Sidoarjo dengan shuttle AC prima dan Jeep 4x4. 1 orang tetap bisa gabung & sudah include dokumentasi!',
    category: 'open_trip',
    startCity: 'surabaya',
    price: 400000,
    priceWithDoc: 400000,
    priceUnit: '/ orang (Include Doc)',
    duration: '1 Hari (Midnight)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Surabaya Raya',
    departureTime: '22:00 - 23:00 WIB',
    imageUrl: imgCustomDbbd,
    rating: 4.8,
    reviewsCount: 218,
    badge: 'Include Dokumentasi',
    description: 'Trip sharing harian dari Surabaya & Sidoarjo. 1 orang tetap bisa gabung! Sudah INCLUDE dokumentasi foto DSLR/Mirrorless, BBM, dan Tol PP.',
    destinations: [
      'Sunrise Point Penanjakan / Bukit Kingkong',
      'Kawah Bromo & Seruni Point (Gunung Batok & Kaldera)',
      'Pasir Berbisik',
      'Savana Teletubbies'
    ],
    pricingTiers: [
      { pax: 'Weekend via Tosari', price: 'Rp 400.000 / org' },
      { pax: 'Weekend High Season', price: 'Rp 425.000 / org' },
      { pax: 'Harian via Malang (Min 2)', price: 'Rp 750.000 / org' },
      { pax: 'Harian High Season', price: 'Rp 800.000 / org' }
    ],
    includes: [
      'Shuttle Car AC Prima (Hiace / Elf / Innova / Bus Pariwisata) Surabaya - Bromo PP',
      'Driver profesional & ramah',
      'Bahan Bakar Minyak (BBM) & Tol Trans Jawa PP',
      'Jeep Bromo 4x4 (Toyota Land Cruiser FJ40) ke 5 Destinasi',
      'Tiket Masuk Resmi Taman Nasional Bromo Tengger Semeru WNI',
      'Retribusi Kawasan & Parkir Resmi',
      'Dokumentasi Foto DSLR/Mirrorless Profesional (Sudah INCLUDE!)'
    ],
    excludes: [
      'Sewa Kuda di Kaldera Bromo (opsional, bisa jalan kaki)',
      'Makan & minum pribadi',
      'Toilet umum berbayar di Bromo',
      'Surcharge tiket masuk wisatawan asing (WNA) Rp 255.000 / orang',
      'Keperluan pribadi'
    ],
    highlights: [
      'Via Tosari (Weekend): Rp 400.000 / orang (High season: Rp 425.000) - Berangkat Sabtu 22.00 WIB',
      'Via Malang (Setiap Hari): Rp 750.000 / orang (High season: Rp 800.000) - Bebas tentukan titik jemput',
      '1 Orang Tetap Bisa Gabung (khusus rute Sabtu via Tosari)',
      'Sudah INCLUDE Dokumentasi Foto DSLR/Mirrorless'
    ],
    meetingPoints: [
      'Rute Weekend via Tosari: Stasiun Surabaya Pasar Turi & Terminal Bungurasih',
      'Rute Harian via Malang: Bebas menentukan titik jemput di seluruh wilayah Surabaya & Sidoarjo'
    ],
    meetingPoint: 'Stasiun Pasar Turi & Terminal Bungurasih (Weekend via Tosari) / Bebas Titik Jemput (via Malang)',
    tips: [
      'Bawa jaket hangat untuk suhu 5-10°C di puncak sunrise',
      'Gunakan sepatu beralas karet anti selip'
    ],
    itinerary: [
      { time: '23:00 - 23:30', activity: 'Penjemputan Stasiun Pasar Turi', description: 'Penjemputan peserta di Stasiun Surabaya Pasar Turi.' },
      { time: '23:30 - 00:00', activity: 'Penjemputan Terminal Bungurasih', description: 'Penjemputan peserta di area Terminal Bungurasih.' },
      { time: '00:00 - 02:00', activity: 'Perjalanan ke Tosari / Malang', description: 'Perjalanan via tol menuju rest area / basecamp jeep.' },
      { time: '02:00 - 03:00', activity: 'Jeep ke Sunrise Point', description: 'Perjalanan Jeep 4x4 menuju view point golden sunrise.' },
      { time: '03:00 - 04:30', activity: 'Menunggu Golden Sunrise', description: 'Istirahat dan menikmati minuman hangat di warung puncak.' },
      { time: '04:30 - 06:00', activity: 'Sunrise & Sesi Foto', description: 'Menikmati fajar kaldera dan sesi foto bersama fotografer.' },
      { time: '06:00 - 07:30', activity: 'Kawah Bromo & Widodaren', description: 'Explore bibir kawah Bromo dan tebing Widodaren.' },
      { time: '07:30 - 09:00', activity: 'Bukit Savana Teletubbies', description: 'Foto-foto di hamparan savana hijau yang asri.' },
      { time: '09:00 - 10:30', activity: 'Lautan Pasir Berbisik', description: 'Explore Segara Wedhi dan formasi kaldera purba.' },
      { time: '10:30 - 11:30', activity: 'Kembali ke Rest Area', description: 'Perjalanan kembali menuju basecamp jeep.' },
      { time: '11:30 - 13:30', activity: 'Drop Off Surabaya', description: 'Perjalanan pulang dan drop off kembali ke Surabaya.' }
    ]
  },
  {
    id: 'private-jeep-wonokitri',
    title: 'Private Jeep Bromo Start Tosari Kab. Pasuruan',
    subtitle: 'Sewa Jeep eksklusif berangkat dari Basecamp Jeep / Hotel Tosari Pasuruan. Berangkat setiap hari (Sunrise 03.00 / Panorama 11.00).',
    category: 'private_trip',
    startCity: 'tosari',
    price: 950000,
    priceWithDoc: 1450000,
    priceUnit: '/ grup (maks 6 pax tanpa doc / 5 pax plus doc)',
    duration: '1 Hari (8 Jam)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Tosari Kab. Pasuruan (Basecamp Jeep)',
    departureTime: '03:00 Dini Hari / 11:00 Siang',
    imageUrl: imgPrivateWonokitri,
    rating: 4.9,
    reviewsCount: 178,
    badge: 'Basecamp Tosari',
    mapUrl: 'https://maps.app.goo.gl/TwSVpM7rx6itdX4A6',
    description: 'Sewa 1 unit Jeep Toyota Land Cruiser FJ40 eksklusif tanpa digabung peserta lain. Berangkat setiap hari: Paket Sunrise start 03.00 dini hari atau Paket Panorama start 11.00 siang. Kapasitas per jeep: 1 Driver + 6 peserta (tanpa dokumentasi) atau 1 Driver + 1 Fotografer + 5 peserta (plus dokumentasi).',
    destinations: [
      'Puncak Penanjakan 1 / Kingkong Hill',
      'Lembah Tebing Widodaren',
      'Kawah Bromo & Seruni Point (Gunung Batok & Kaldera Bromo)',
      'Lautan Pasir Berbisik',
      'Savana Bukit Teletubbies'
    ],
    pricingTiers: [
      { pax: 'Reguler (Maks 6 Orang)', price: 'Rp 950.000 / jeep' },
      { pax: 'Plus Foto & Video (Maks 5 Orang)', price: 'Rp 1.450.000 / jeep' },
      { pax: 'High Season Reguler', price: 'Rp 1.150.000 / jeep' },
      { pax: 'High Season + Doc', price: 'Rp 1.650.000 / jeep' }
    ],
    includes: [
      '1 Unit Jeep Bromo 4x4 (Toyota Land Cruiser FJ40) 100% Privat',
      'Driver profesional lokal suku Tengger Tosari',
      'Bahan Bakar Minyak (BBM) Jeep PP',
      'Tiket Masuk Resmi TNBTS WNI untuk seluruh peserta',
      'Retribusi Kawasan & Parkir Basecamp',
      'Dokumentasi Foto Video DSLR/Mirrorless (khusus paket plus dokumentasi)'
    ],
    excludes: [
      'Sewa Kuda di Kaldera Bromo (opsional, bisa jalan kaki)',
      'Makan & minum pribadi',
      'Toilet umum berbayar di Bromo',
      'Surcharge tiket masuk wisatawan asing (WNA) Rp 255.000 / orang',
      'Transportasi menuju Basecamp Tosari (disediakan mandiri oleh tamu)'
    ],
    highlights: [
      'Rp 950.000 per grup (tanpa dokumentasi, maks 6 orang)',
      'Plus Dokumentasi: Rp 1.450.000 per grup (Foto & Video DSLR, maks 5 orang)',
      'High Season: Rp 1.150.000 (tanpa doc) | Rp 1.650.000 (plus doc)',
      'Akses jalan aspal paling mulus dari arah Pasuruan / Surabaya'
    ],
    meetingPoints: [
      'Basecamp Jeep Tosari Pasuruan',
      'Hotel / Villa / Homestay di sekitar Tosari & Wonokitri Pasuruan'
    ],
    meetingPoint: 'Basecamp Jeep / Hotel Sekitar Basecamp Tosari Pasuruan',
    tips: [
      'Rute favorit bagi wisatawan keluarga yang menginap di resort area Tosari',
      'Bawa jaket tebal dan masker'
    ],
    itinerary: [
      { time: '02:30 - 03:00', activity: 'Meet up di Basecamp Tosari', description: 'Briefing dan naik armada Jeep 4x4.' },
      { time: '03:30 - 06:00', activity: 'Sunrise Penanjakan 1', description: 'Spot panorama sunrise legendaris kaldera Tengger.' },
      { time: '06:30 - 09:30', activity: 'Kawah Bromo & Savana', description: 'Eksplorasi spot kaldera pasir dan bukit Teletubbies.' },
      { time: '10:00', activity: 'Kembali ke Tosari', description: 'Kembali ke rest area / basecamp Tosari.' }
    ]
  },
  {
    id: 'private-jeep-sukapura',
    title: 'Private Jeep Bromo Start Sukapura Kab. Probolinggo',
    subtitle: 'Sewa Jeep eksklusif berangkat dari Basecamp Jeep Sukapura Probolinggo. Berangkat setiap hari (Sunrise 03.00 / Panorama 11.00).',
    category: 'private_trip',
    startCity: 'sukapura',
    price: 1000000,
    priceWithDoc: 1500000,
    priceUnit: '/ grup (maks 6 pax tanpa doc / 5 pax plus doc)',
    duration: '1 Hari (8 Jam)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Sukapura Kab. Probolinggo (Basecamp Jeep)',
    departureTime: '03:00 Dini Hari / 11:00 Siang',
    imageUrl: imgPrivateSukapura,
    rating: 4.9,
    reviewsCount: 312,
    badge: 'Basecamp Sukapura',
    description: 'Sewa 1 unit Jeep Toyota Land Cruiser FJ40 eksklusif dari Sukapura Probolinggo tanpa digabung rombongan lain. Berangkat setiap hari: Paket Sunrise start 03.00 dini hari atau Paket Panorama start 11.00 siang. Kapasitas: 1 Driver + 6 peserta (tanpa doc) atau 1 Driver + 1 Fotografer + 5 peserta (plus doc).',
    destinations: [
      'Puncak Penanjakan 1 / Seruni Point',
      'Lembah Tebing Widodaren',
      'Kawah Bromo & Seruni Point (Gunung Batok & Kaldera Bromo)',
      'Lautan Pasir Berbisik',
      'Savana Bukit Teletubbies'
    ],
    pricingTiers: [
      { pax: 'Reguler (Maks 6 Orang)', price: 'Rp 1.000.000 / jeep' },
      { pax: 'Plus Foto & Video (Maks 5 Orang)', price: 'Rp 1.500.000 / jeep' },
      { pax: 'High Season Reguler', price: 'Rp 1.200.000 / jeep' },
      { pax: 'High Season + Doc', price: 'Rp 1.700.000 / jeep' }
    ],
    includes: [
      '1 Unit Jeep Bromo 4x4 (Toyota Land Cruiser FJ40) 100% Privat',
      'Driver profesional lokal Sukapura',
      'Bahan Bakar Minyak (BBM) Jeep PP',
      'Tiket Masuk Resmi TNBTS WNI untuk seluruh peserta',
      'Retribusi Kawasan & Parkir Basecamp',
      'Dokumentasi Foto Video DSLR/Mirrorless (khusus paket plus dokumentasi)'
    ],
    excludes: [
      'Sewa Kuda di Kaldera Bromo (opsional, bisa jalan kaki)',
      'Makan & minum pribadi',
      'Toilet umum berbayar di Bromo',
      'Surcharge tiket masuk wisatawan asing (WNA) Rp 255.000 / orang',
      'Transportasi menuju Basecamp Sukapura (disediakan mandiri oleh tamu)'
    ],
    highlights: [
      'Rp 1.000.000 per grup (tanpa dokumentasi, maks 6 orang)',
      'Plus Dokumentasi: Rp 1.500.000 per grup (Foto & Video DSLR, maks 5 orang)',
      'High Season: Rp 1.200.000 (tanpa doc) | Rp 1.700.000 (plus doc)',
      'Akses terdekat via jalan tol Probolinggo bagi kendaraan pribadi'
    ],
    meetingPoints: [
      'Basecamp Jeep Sukapura Kab. Probolinggo',
      'Hotel / Penginapan di sekitar Sukapura & Cemorolawang'
    ],
    meetingPoint: 'Basecamp Jeep / Hotel Sekitar Basecamp Sukapura Kab. Probolinggo',
    tips: [
      'Mobil pribadi Anda dapat diparkir aman di rest area resmi Sukapura'
    ],
    itinerary: [
      { time: '02:30 - 03:00', activity: 'Kumpul di Basecamp Sukapura', description: 'Briefing dan naik ke Jeep 4x4 yang telah disiapkan.' },
      { time: '03:45 - 06:00', activity: 'Sunrise Penanjakan / Seruni', description: 'Menyaksikan fajar di spot view kaldera.' },
      { time: '06:30 - 09:30', activity: 'Kawah Bromo & Savana', description: 'Eksplorasi spot kaldera pasir berbisik dan tebing purba.' },
      { time: '10:00', activity: 'Kembali ke Sukapura', description: 'Trip selesai, kembali ke basecamp jeep Sukapura.' }
    ]
  },
  {
    id: 'private-jeep-tumpang',
    title: 'Private Jeep Bromo Start Gubugklakah Kab. Malang',
    subtitle: 'Sewa Jeep eksklusif berangkat dari Basecamp Gubugklakah. Jalur eksotis melintasi pedesaan apel dan bentang savana selatan Bromo.',
    category: 'private_trip',
    startCity: 'gubugklakah',
    price: 1400000,
    priceWithDoc: 1900000,
    priceUnit: '/ grup (maks 6 pax tanpa doc / 5 pax plus doc)',
    duration: '1 Hari (10 Jam)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Gubugklakah Kab. Malang (Basecamp Jeep)',
    departureTime: '03:00 Dini Hari (Opsional Pagi / Siang)',
    imageUrl: imgStandingCaldera,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Basecamp Gubugklakah',
    mapUrl: 'https://maps.app.goo.gl/acEeroMVi9jzLv8S7',
    description: 'Sewa 1 unit Jeep Toyota Land Cruiser FJ40 eksklusif dari Basecamp Gubugklakah Kab. Malang. Berangkat setiap hari pukul 03.00 Dini Hari (opsional pagi/siang). Kapasitas: 1 Driver + 6 peserta (tanpa doc) atau 1 Driver + 1 Fotografer + 5 peserta (plus doc).',
    destinations: [
      'Sunrise Point Penanjakan / Bukit Kingkong',
      'Lembah Tebing Widodaren',
      'Kawah Bromo & Seruni Point (Gunung Batok & Kaldera Bromo)',
      'Lautan Pasir Berbisik',
      'Savana Bukit Teletubbies'
    ],
    pricingTiers: [
      { pax: 'Reguler (Maks 6 Orang)', price: 'Rp 1.400.000 / jeep' },
      { pax: 'Plus Foto & Video (Maks 5 Orang)', price: 'Rp 1.900.000 / jeep' },
      { pax: 'High Season Reguler', price: 'Rp 1.650.000 / jeep' },
      { pax: 'High Season + Doc', price: 'Rp 2.150.000 / jeep' }
    ],
    includes: [
      '1 Unit Jeep Bromo 4x4 (Toyota Land Cruiser FJ40) 100% Privat',
      'Driver profesional lokal Gubugklakah',
      'Bahan Bakar Minyak (BBM) Jeep PP',
      'Tiket Masuk Resmi Taman Nasional WNI untuk seluruh peserta',
      'Retribusi Kawasan & Parkir Basecamp',
      'Dokumentasi Foto Video DSLR/Mirrorless (khusus paket plus dokumentasi)'
    ],
    excludes: [
      'Sewa Kuda di Kaldera Bromo (opsional, bisa jalan kaki)',
      'Makan & minum pribadi',
      'Toilet umum berbayar di Bromo',
      'Surcharge tiket masuk wisatawan asing (WNA) Rp 255.000 / orang',
      'Transportasi menuju Basecamp Gubugklakah (disediakan mandiri oleh tamu)'
    ],
    highlights: [
      'Rp 1.400.000 per grup (tanpa dokumentasi, maks 6 orang)',
      'Plus Dokumentasi: Rp 1.900.000 per grup (Foto & Video DSLR, maks 5 orang)',
      'High Season: Rp 1.650.000 (tanpa doc) | Rp 2.150.000 (plus doc)',
      'Pemandangan perkebunan apel dan hutan pinus asri Malang timur'
    ],
    meetingPoints: [
      'Basecamp Jeep Gubugklakah Kab. Malang (Jln. Raya Gubugklakah no 147)',
      'Hotel / Homestay di Desa Wisata Gubugklakah & Tumpang'
    ],
    meetingPoint: 'Basecamp Jeep / Hotel di Gubugklakah Kab. Malang',
    tips: [
      'Bawa kamera untuk panorama tebing savana di Jemplang saat siang'
    ],
    itinerary: [
      { time: '02:30 - 03:00', activity: 'Meet up di Basecamp Gubugklakah', description: 'Briefing dan berangkat via jalur Gubugklakah - Ngadas.' },
      { time: '03:30 - 06:00', activity: 'Sunrise Kaldera Bromo', description: 'Menikmati fajar pagi nan menakjubkan.' },
      { time: '06:30 - 09:30', activity: 'Kawah Bromo & Savana', description: 'Foto-foto di Lautan Pasir dan Padang Savana.' },
      { time: '10:30', activity: 'Kembali ke Gubugklakah', description: 'Drop off kembali ke basecamp Gubugklakah.' }
    ]
  },
  {
    id: 'private-jeep-malang',
    title: 'Private Trip Bromo Start Kota Malang',
    subtitle: 'Paket eksklusif door-to-door dijemput di Stasiun / Hotel / Rumah Kota Malang dengan shuttle car dan Jeep FJ40 privat.',
    category: 'private_trip',
    startCity: 'malang',
    price: 1700000,
    priceWithDoc: 2200000,
    priceUnit: '/ grup (maks 6 pax tanpa doc / 5 pax plus doc)',
    duration: '1 Hari (12 Jam)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Kota Malang',
    departureTime: '23:00 - 01:00 WIB',
    imageUrl: imgPrivateMalang,
    rating: 5.0,
    reviewsCount: 285,
    badge: 'Door to Door Malang',
    description: 'Sewa private all-in tanpa digabung peserta lain. Dijemput langsung di stasiun, hotel, villa, atau alamat Anda di Kota Malang. Berangkat setiap hari pukul 23.00 - 01.00 tengah malam. Kapasitas: maks 6 orang (tanpa doc) atau maks 5 orang (plus fotografer).',
    destinations: [
      'Puncak Penanjakan 1 / Kingkong Hill',
      'Lembah Tebing Widodaren',
      'Kawah Bromo & Seruni Point (Gunung Batok & Kaldera Bromo)',
      'Lautan Pasir Berbisik',
      'Savana Bukit Teletubbies'
    ],
    pricingTiers: [
      { pax: 'Reguler (Maks 6 Orang)', price: 'Rp 1.700.000 / grup' },
      { pax: 'Plus Foto & Video (Maks 5 Orang)', price: 'Rp 2.200.000 / grup' },
      { pax: 'High Season Reguler', price: 'Rp 2.000.000 / grup' },
      { pax: 'High Season + Doc', price: 'Rp 2.500.000 / grup' }
    ],
    includes: [
      'Shuttle Car AC penjemputan & antar kembali di Kota Malang PP (Door to Door)',
      'Driver profesional merangkap guide ramah',
      'Bahan Bakar Minyak (BBM) Shuttle & Jeep PP',
      '1 Unit Jeep Bromo 4x4 (Toyota Land Cruiser FJ40) 100% Privat',
      'Tiket Masuk Resmi TNBTS WNI untuk seluruh peserta',
      'Retribusi Kawasan & Parkir Resmi',
      'Dokumentasi Foto Video DSLR/Mirrorless (khusus paket plus dokumentasi)'
    ],
    excludes: [
      'Sewa Kuda di Kaldera Bromo (opsional, bisa jalan kaki)',
      'Makan & minum pribadi',
      'Toilet umum berbayar di Bromo',
      'Surcharge tiket masuk wisatawan asing (WNA) Rp 255.000 / orang',
      'Pengeluaran pribadi di luar fasilitas paket'
    ],
    highlights: [
      'Rp 1.700.000 per grup (tanpa dokumentasi, maks 6 orang)',
      'Plus Dokumentasi: Rp 2.200.000 per grup (Foto & Video DSLR, maks 5 orang)',
      'High Season: Rp 2.000.000 (tanpa doc) | Rp 2.500.000 (plus doc)',
      'Privat 100% tanpa digabung rombongan lain'
    ],
    meetingPoints: [
      'Stasiun Malang Kotabaru & Stasiun Malang Kota Lama',
      'Hotel, Homestay, Villa & Alamat Rumah di seluruh Kota Malang'
    ],
    meetingPoint: 'Di Jemput di Stasiun, Hotel, Homestay, dll di Kota Malang',
    tips: [
      'Cocok untuk keluarga dengan anak-anak atau rombongan kantor yang menginginkan privasi maksimal'
    ],
    itinerary: [
      { time: '23:00 - 01:00', activity: 'Jemput Rombongan di Malang', description: 'Driver menjemput langsung di alamat/hotel Anda.' },
      { time: '03:30 - 06:00', activity: 'Golden Sunrise Penanjakan', description: 'Spot sunrise terbaik tanpa terburu-buru.' },
      { time: '06:30 - 09:30', activity: 'Jelajah Kaldera & Savana', description: 'Foto eksklusif di Kawah, Widodaren, Pasir Berbisik, dan Savana.' },
      { time: '10:00 - 12:30', activity: 'Kembali ke Kota Malang', description: 'Pengantaran kembali ke hotel atau alamat asal di Malang.' }
    ]
  },
  {
    id: 'private-jeep-batu',
    title: 'Private Trip Bromo Start Kota Batu',
    subtitle: 'Paket eksklusif door-to-door dijemput di Hotel / Resort / Villa Kota Wisata Batu dengan shuttle car dan Jeep FJ40 privat.',
    category: 'private_trip',
    startCity: 'batu',
    price: 1800000,
    priceWithDoc: 2300000,
    priceUnit: '/ grup (maks 6 pax tanpa doc / 5 pax plus doc)',
    duration: '1 Hari (12 Jam)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Kota Wisata Batu',
    departureTime: '23:00 - 01:00 WIB',
    imageUrl: imgPrivateBatu,
    rating: 4.9,
    reviewsCount: 194,
    badge: 'Door to Door Batu',
    description: 'Sewa private all-in tanpa digabung peserta lain. Dijemput langsung di hotel, resort, villa, atau alamat Anda di Kota Wisata Batu. Berangkat setiap hari pukul 23.00 - 01.00 tengah malam. Kapasitas: maks 6 orang (tanpa doc) atau maks 5 orang (plus fotografer).',
    destinations: [
      'Puncak Penanjakan 1 / Kingkong Hill',
      'Lembah Tebing Widodaren',
      'Kawah Bromo & Seruni Point (Gunung Batok & Kaldera Bromo)',
      'Lautan Pasir Berbisik',
      'Savana Bukit Teletubbies'
    ],
    pricingTiers: [
      { pax: 'Reguler (Maks 6 Orang)', price: 'Rp 1.800.000 / grup' },
      { pax: 'Plus Foto & Video (Maks 5 Orang)', price: 'Rp 2.300.000 / grup' },
      { pax: 'High Season Reguler', price: 'Rp 2.100.000 / grup' },
      { pax: 'High Season + Doc', price: 'Rp 2.600.000 / grup' }
    ],
    includes: [
      'Shuttle Car AC penjemputan & antar kembali di Kota Wisata Batu PP (Door to Door)',
      'Driver profesional merangkap guide ramah',
      'Bahan Bakar Minyak (BBM) Shuttle & Jeep PP',
      '1 Unit Jeep Bromo 4x4 (Toyota Land Cruiser FJ40) 100% Privat',
      'Tiket Masuk Resmi TNBTS WNI untuk seluruh peserta',
      'Retribusi Kawasan & Parkir Resmi',
      'Dokumentasi Foto Video DSLR/Mirrorless (khusus paket plus dokumentasi)'
    ],
    excludes: [
      'Sewa Kuda di Kaldera Bromo (opsional, bisa jalan kaki)',
      'Makan & minum pribadi',
      'Toilet umum berbayar di Bromo',
      'Surcharge tiket masuk wisatawan asing (WNA) Rp 255.000 / orang',
      'Pengeluaran pribadi di luar fasilitas paket'
    ],
    highlights: [
      'Rp 1.800.000 per grup (tanpa dokumentasi, maks 6 orang)',
      'Plus Dokumentasi: Rp 2.300.000 per grup (Foto & Video DSLR, maks 5 orang)',
      'High Season: Rp 2.100.000 (tanpa doc) | Rp 2.600.000 (plus doc)',
      'Khusus penjemputan area resort & villa sejuk Kota Batu'
    ],
    meetingPoints: [
      'Hotel, Resort, Villa & Homestay di seluruh wilayah Kota Wisata Batu'
    ],
    meetingPoint: 'Di Jemput di Hotel, Resort, Villa, dll di Kota Wisata Batu',
    tips: [
      'Waktu penjemputan disesuaikan dengan lokasi villa di kawasan Batu'
    ],
    itinerary: [
      { time: '23:00 - 01:00', activity: 'Penjemputan di Villa/Resort Batu', description: 'Driver menjemput di akomodasi Anda di Kota Batu.' },
      { time: '03:30 - 06:00', activity: 'Sunrise Puncak Penanjakan', description: 'Menyaksikan fajar menakjubkan di atas awan Bromo.' },
      { time: '06:30 - 09:30', activity: 'Eksplorasi Kaldera & Widodaren', description: 'Foto-foto eksklusif di Widodaren, Pasir Berbisik, dan Savana.' },
      { time: '10:00 - 13:00', activity: 'Kembali ke Kota Batu', description: 'Drop off santai kembali ke penginapan di Batu.' }
    ]
  },
  {
    id: 'private-jeep-surabaya',
    title: 'Private Trip Bromo Start Surabaya Raya',
    subtitle: 'Layanan VIP door-to-door dari Surabaya / Sidoarjo dengan armada AC prima dan Jeep 4x4 privat. Sudah include dokumentasi foto & video.',
    category: 'private_trip',
    startCity: 'surabaya',
    price: 3100000,
    priceWithDoc: 3100000,
    priceUnit: '/ grup (mulai 2 pax Rp 1.550rb/org)',
    duration: '1 Hari (14 Jam)',
    minPax: 2,
    maxPax: 50,
    startLocationName: 'Surabaya Raya (Bebas Titik Jemput)',
    departureTime: '23:00 - 23:30 WIB (Sesuai Request)',
    imageUrl: imgPrivateSurabaya,
    rating: 4.9,
    reviewsCount: 167,
    badge: 'VVIP Surabaya (Include Doc)',
    description: 'Layanan VIP eksklusif dari Surabaya Raya dengan shuttle car (Innova Reborn / Hiace / Elf / Bus) dilanjutkan Jeep 4x4 privat di Bromo. Bebas menentukan titik jemput & waktu berangkat. Dokumentasi Foto Video DSLR/Mirrorless SUDAH INCLUDE!',
    destinations: [
      'Sunrise Point Penanjakan 1 / Kingkong Hill',
      'Lembah Tebing Widodaren',
      'Kawah Bromo & Seruni Point (Gunung Batok & Kaldera Bromo)',
      'Lautan Pasir Berbisik',
      'Savana Bukit Teletubbies'
    ],
    pricingTiers: [
      { pax: '2 Pax', price: 'Rp 1.550.000 / orang' },
      { pax: '3 Pax', price: 'Rp 1.100.000 / orang' },
      { pax: '4 Pax', price: 'Rp 800.000 / orang' },
      { pax: '5 Pax', price: 'Rp 680.000 / orang' },
      { pax: '6 Pax', price: 'Rp 570.000 / orang' },
      { pax: '7 Pax', price: 'Rp 700.000 / orang' },
      { pax: '8 Pax', price: 'Rp 650.000 / orang' },
      { pax: '9-10 Pax', price: 'Rp 600.000 / orang' },
      { pax: '11-12 Pax', price: 'Rp 470.000 / orang' },
      { pax: '13-14 Pax', price: 'Rp 480.000 / orang' },
      { pax: '15-16 Pax', price: 'Rp 450.000 / orang' },
      { pax: '17-18 Pax', price: 'Rp 400.000 / orang' },
      { pax: '>18 Pax', price: 'Rp 370.000 / orang' }
    ],
    includes: [
      'Shuttle Car AC Prima (Innova Reborn / Hiace Premio / Elf / Bus) Surabaya - Bromo PP',
      'Driver profesional & ramah',
      'Bahan Bakar Minyak (BBM) & Tol Trans Jawa PP',
      'Jeep Bromo 4x4 (Toyota Land Cruiser FJ40) 100% Privat (proporsional 5-6 pax/jeep)',
      'Tiket Masuk Resmi TNBTS WNI untuk seluruh peserta',
      'Retribusi Kawasan & Parkir Resmi',
      'Dokumentasi Foto Video DSLR/Mirrorless Profesional (Sudah INCLUDE!)'
    ],
    excludes: [
      'Sewa Kuda di Kaldera Bromo (opsional, bisa jalan kaki)',
      'Makan & minum pribadi',
      'Toilet umum berbayar di Bromo',
      'Surcharge tiket masuk wisatawan asing (WNA) Rp 255.000 / orang',
      'Pengeluaran pribadi di luar fasilitas paket'
    ],
    highlights: [
      'Bebas Menentukan Titik Jemput di Surabaya Raya (Juanda / Stasiun / Hotel)',
      'Tidak Digabung Peserta Lain (100% Privat)',
      'Sudah INCLUDE Dokumentasi Foto & Video DSLR/Mirrorless',
      'Tarif transparan bertingkat semakin banyak semakin hemat'
    ],
    meetingPoints: [
      'Bandara Internasional Juanda Surabaya',
      'Stasiun Gubeng / Pasar Turi / Wonokromo',
      'Seluruh Alamat Rumah, Apartemen, dan Hotel di Surabaya & Sidoarjo'
    ],
    meetingPoint: 'Bebas menentukan titik kumpul & penjemputan di wilayah Surabaya Raya',
    tips: [
      'Pilihan paling ideal untuk kunjungan bisnis dan liburan keluarga dari luar pulau'
    ],
    itinerary: [
      { time: '23:00 - 23:30', activity: 'Jemput di Alamat Surabaya', description: 'Mobil private AC menjemput di titik lokasi pilihan Anda.' },
      { time: '02:00 - 02:30', activity: 'Transfer Jeep 4x4', description: 'Pindah ke armada Jeep 4x4 di rest area transit resmi.' },
      { time: '03:30 - 06:00', activity: 'Sunrise Spektakuler', description: 'Menikmati fajar kaldera Tengger bersama tim fotografer.' },
      { time: '06:30 - 09:30', activity: 'Keliling 5 Spot Utama Bromo', description: 'Kawah Bromo, Widodaren, Pasir Berbisik, dan Savana.' },
      { time: '10:30 - 13:30', activity: 'Drop Off Surabaya', description: 'Perjalanan kembali via tol dan diantar kembali ke lokasi Anda.' }
    ]
  },
  {
    id: 'long-jeep',
    title: 'Long Jeep Bromo Kapasitas 9 Peserta (Terbatas)',
    subtitle: 'Jeep Long Chassis kapasitas besar hingga 9 penumpang dewasa. Solusi paling hemat untuk rombongan sedang.',
    category: 'long_jeep',
    startCity: 'malang',
    price: 1900000,
    priceWithDoc: 2100000,
    priceUnit: '/ unit (maks 9 orang)',
    duration: '1 Hari (12 Jam)',
    minPax: 1,
    maxPax: 9,
    startLocationName: 'Basecamp Gubugklakah Malang',
    departureTime: '00:00 - 02:30 WIB (Sesuai Opsi Jemput)',
    imageUrl: imgLongJeep,
    rating: 5.0,
    reviewsCount: 156,
    badge: 'Kapasitas 9 Orang',
    description: 'Armada Long Chassis Jeep 4x4 berkapasitas besar hingga 9 penumpang dewasa. Meeting point start dari Basecamp Jln. Raya Gubugklakah no 147 Kab. Malang. Weekday 1.9jt (tanpa doc) / 2.1jt (plus doc). Weekend 2.15jt (tanpa doc) / 2.5jt (plus doc). Peak/High Season 2.65jt (tanpa doc) / 3jt (plus doc). Bisa tambah penjemputan Malang (+300rb/mobil) atau Batu (+400rb/mobil).',
    destinations: [
      'Puncak Penanjakan 1 / Kingkong Hill',
      'Lembah Tebing Widodaren',
      'Kawah Bromo & Seruni Point (Gunung Batok & Kaldera Bromo)',
      'Pasir Berbisik',
      'Savana Bukit Teletubbies'
    ],
    pricingTiers: [
      { pax: 'Weekday (Senin-Kamis)', price: 'Rp 1.900.000 / unit' },
      { pax: 'Weekday + Foto & Video', price: 'Rp 2.100.000 / unit' },
      { pax: 'Weekend (Jumat-Minggu)', price: 'Rp 2.150.000 / unit' },
      { pax: 'Weekend + Foto & Video', price: 'Rp 2.500.000 / unit' },
      { pax: 'Peak / High Season', price: 'Rp 2.650.000 / unit' },
      { pax: 'Peak Season + Doc', price: 'Rp 3.000.000 / unit' }
    ],
    includes: [
      '1 Unit Long Jeep Chassis 4x4 (Kapasitas hingga 9 penumpang dewasa)',
      'Driver profesional berpengalaman medan Bromo',
      'Bahan Bakar Minyak (BBM) Jeep PP',
      'Tiket Masuk Resmi TNBTS WNI untuk seluruh peserta (maks 9 orang)',
      'Retribusi Kawasan & Parkir Basecamp',
      'Dokumentasi Foto Video DSLR/Mirrorless (khusus paket plus dokumentasi)'
    ],
    excludes: [
      'Penjemputan luar basecamp (opsional tambah mobil shuttle Malang/Batu)',
      'Sewa Kuda di Kaldera Bromo (opsional, bisa jalan kaki)',
      'Makan & minum pribadi',
      'Toilet umum berbayar di Bromo',
      'Surcharge tiket masuk wisatawan asing (WNA) Rp 255.000 / orang'
    ],
    highlights: [
      'Weekday: Rp 1.900.000 (tanpa doc) | Rp 2.100.000 (plus doc 🎥)',
      'Weekend: Rp 2.150.000 (tanpa doc) | Rp 2.500.000 (plus doc 🎥)',
      'Peak / High Season: Rp 2.650.000 (tanpa doc) | Rp 3.000.000 (plus doc 🎥)',
      'Kapasitas hingga 9 orang (jauh lebih hemat dibanding sewa 2 jeep reguler)'
    ],
    meetingPoints: [
      'Start Basecamp: Jln. Raya Gubugklakah no 147 Kab. Malang',
      'Opsional Jemput Kota Malang (+Rp 300.000 per mobil max 6 pax)',
      'Opsional Jemput Kota Batu (+Rp 400.000 per mobil max 6 pax)'
    ],
    meetingPoint: 'Start Basecamp Jln. Raya Gubugklakah no 147 Kab. Malang (bisa opsi jemput Malang/Batu)',
    tips: [
      'Sangat disarankan reservasi H-7 karena unit Long Jeep sangat terbatas'
    ],
    itinerary: [
      { time: '00:00 - 02:30', activity: 'Kumpul / Penjemputan', description: 'Kumpul di basecamp Gubugklakah atau penjemputan Malang/Batu.' },
      { time: '03:30 - 06:00', activity: 'Golden Sunrise Bromo', description: 'Menikmati fajar di puncak Penanjakan.' },
      { time: '06:30 - 09:30', activity: 'Kawah & Savana', description: 'Eksplorasi spot kaldera pasir dan padang savana.' },
      { time: '10:00 - 12:30', activity: 'Kembali ke Basecamp / Malang', description: 'Perjalanan kembali drop off rombongan.' }
    ]
  },
  {
    id: 'sewa-trail-sukapura',
    title: 'Sewa Motor Trail KLX / CRF Sukapura Bromo',
    subtitle: 'Jelajahi kaldera pasir berbisik dan perbukitan Teletubbies dengan motor trail siap trabas.',
    category: 'trail',
    startCity: 'sukapura',
    price: 300000,
    priceUnit: '/ motor (12 jam)',
    duration: '12 Jam',
    minPax: 1,
    maxPax: 10,
    startLocationName: 'Sukapura Probolinggo',
    departureTime: 'Fleksibel (Pagi / Siang)',
    imageUrl: imgTrailSukapura,
    rating: 5.0,
    reviewsCount: 88,
    badge: 'Adrenalin',
    description: 'Jelajahi kaldera pasir berbisik dan perbukitan Teletubbies dengan motor trail Kawasaki KLX atau Honda CRF siap trabas.',
    destinations: [
      'Lautan Pasir Berbisik',
      'Bibir Kawah Bromo',
      'Savana Bukit Teletubbies',
      'Bukit Widodaren'
    ],
    includes: [
      '1 Unit Motor Trail Kawasaki KLX / Honda CRF 150cc',
      'Helm Trail & Google Goggle',
      'Protector Lutut & Siku',
      'BBM Full Tank saat serah terima'
    ],
    excludes: [
      'Tiket Masuk TNBTS',
      'Pemandu / Sweeper jalur (opsional)'
    ],
    highlights: [
      'Kondisi motor prima, ban pacul siap medan pasir gembur',
      'Termasuk perlengkapan proteksi keamanan lengkap',
      'Bebas keliling kaldera tanpa batasan rute kaku'
    ],
    meetingPoints: [
      'Basecamp Sewa Trail Sukapura Probolinggo'
    ],
    tips: [
      'Gunakan sepatu boot atau sepatu tinggi untuk kenyamanan berkendara di pasir'
    ],
    itinerary: [
      { time: '07:00 - 08:00', activity: 'Serah Terima Unit Motor', description: 'Briefing rute kaldera, cek unit motor dan perlengkapan safety.' },
      { time: '08:00 - 16:00', activity: 'Free Ride Kaldera Bromo', description: 'Sensasi riding off-road di Segara Wedhi dan Savana Teletubbies.' },
      { time: '16:30', activity: 'Kembali ke Basecamp', description: 'Pengembalian unit motor di basecamp Sukapura.' }
    ]
  },
  {
    id: 'bromo-picnic-savana',
    title: 'Bromo Aesthetic Picnic Experience Savana Teletubbies',
    subtitle: 'Sarapan dan piknik estetik di hamparan savana hijau Bromo lengkap dengan dekorasi boho, meja kayu, dan BBQ/Suki hangat.',
    category: 'picnic',
    startCity: 'all',
    price: 385000,
    priceUnit: '/ orang',
    duration: 'Pagi Hari (07.00 - 11.00 WIB)',
    minPax: 2,
    maxPax: 20,
    startLocationName: 'Savana Teletubbies Bromo',
    departureTime: '07:00 - 08:00 WIB',
    imageUrl: imgPicnicSavana,
    rating: 5.0,
    reviewsCount: 176,
    badge: 'Aesthetic VIP',
    description: 'Sarapan dan piknik estetik di hamparan savana hijau Bromo lengkap dengan karpet boho, meja kayu, tenda teepee, dan set menu BBQ/Suki hangat.',
    destinations: [
      'Lembah Widodaren / Savana Teletubbies'
    ],
    includes: [
      'Set Dekorasi Mewah: Karpet Boho, Meja Kayu, Tenda Teepee, Bean Bag & Bantal Etnik',
      'Pilihan Set Menu Makanan Hangat (BBQ / Suki / Kuliner Tradisional)',
      'Minuman Hangat: Kopi Tubruk, Teh Hangat & Wedang Jahe',
      'Pramusaji Khusus & Butler Pelayanan Selama Acara',
      'Properti Foto Eksklusif & Musik Akustik'
    ],
    excludes: [
      'Transportasi Jeep ke lokasi piknik (bisa digabung paket jeep)',
      'Tiket Masuk TNBTS'
    ],
    highlights: [
      'Pengalaman sarapan mewah di alam terbuka paling viral di Bromo',
      '8 pilihan set menu makanan dan minuman berkualitas tinggi',
      'Didampingi tim dekorasi dan pramusaji ramah'
    ],
    meetingPoints: [
      'Savana Bukit Teletubbies / Lembah Widodaren Bromo'
    ],
    tips: [
      'Bawa pakaian kasual warna earth-tone / putih untuk hasil foto terbaik'
    ],
    itinerary: [
      { time: '07:00 - 07:30', activity: 'Tiba di Spot Piknik', description: 'Disambut oleh tim pramusaji dengan welcome drink hangat.' },
      { time: '07:30 - 09:30', activity: 'Breakfast & Sesi Foto Estetik', description: 'Menikmati hidangan lezat berlatar belakang tebing savana hijau.' },
      { time: '10:00 - 10:30', activity: 'Santai & Dokumentasi', description: 'Menikmati hembusan angin sejuk Bromo sebelum kembali.' }
    ]
  }
];
