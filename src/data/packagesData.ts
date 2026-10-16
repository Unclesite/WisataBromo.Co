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

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'open-trip-malang',
    title: 'Open Trip Sunrise Bromo Start Malang / Batu',
    subtitle: 'Sharing trip harian hemat paling favorit dengan Jeep Hardtop 4x4, 1 orang pasti berangkat tanpa minimal kuota.',
    category: 'open_trip',
    startCity: 'malang',
    price: 350000,
    priceWithDoc: 350000,
    priceUnit: '/ orang',
    duration: '1 Hari (Midnight)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Kota Malang & Batu',
    departureTime: '00:00 - 00:30 WIB',
    imageUrl: imgOpenTripMalang,
    rating: 4.9,
    reviewsCount: 342,
    badge: 'Terpopuler',
    description: 'Paket sharing trip hemat dan populer keliling 5 spot utama Bromo dengan Jeep 4x4, start tengah malam dari Kota Malang atau Batu.',
    destinations: [
      'Sunrise Point Penanjakan 1 / Kingkong Hill',
      'Lembah Widodaren Cliff & Dinasty Wall',
      'Kawah Aktif Bromo & Pura Luhur Poten',
      'Pasir Berbisik (Segara Wedhi)',
      'Savana Bukit Teletubbies'
    ],
    includes: [
      'Jeep Toyota Land Cruiser 4x4 Hardtop',
      'Driver berpengalaman merangkap tour guide lokal',
      'Bahan Bakar Minyak (BBM) & Parkir Kawasan TNBTS',
      'Tiket Masuk Resmi TNBTS WNI (Asuransi Jasaraharja)',
      'Antar Jemput Alun-alun, Hotel, Homestay & Stasiun di Malang/Batu',
      'Dokumentasi foto all file selama trip'
    ],
    excludes: [
      'Sewa kuda di kaldera Bromo (opsional)',
      'Pengeluaran pribadi & makan di luar paket',
      'Surcharge WNA (Foreigner ticket upgrade)'
    ],
    highlights: [
      '1 Orang Pasti Berangkat Setiap Hari',
      'Driver ramah & menguasai spot foto instagramable',
      'Free dokumentasi foto & video aesthetic'
    ],
    meetingPoints: [
      'Hotel / Homestay area Kota Malang',
      'Stasiun Malang Kotabaru & Stasiun Malang Kota Lama',
      'Area Terminal Arjosari Malang',
      'Hotel / Villa area Kota Wisata Batu'
    ],
    tips: [
      'Gunakan jaket tebal, sarung tangan, kupluk/beanie penahan dingin',
      'Siapkan masker medis/buff untuk menahan debu pasir kaldera',
      'Bawa uang tunai secukupnya untuk toilet atau jajanan warung lokal'
    ],
    itinerary: [
      { time: '00:00 - 00:30', activity: 'Penjemputan Peserta', description: 'Driver menjemput di alamat/hotel masing-masing di Malang atau Batu.' },
      { time: '00:30 - 03:00', activity: 'Perjalanan ke Transit Bromo', description: 'Perjalanan menuju rest area jeep di Sukapura / Tosari.' },
      { time: '03:30 - 06:00', activity: 'Golden Sunrise Bromo', description: 'Menikmati matahari terbit spektakuler di Penanjakan 1 / Kingkong Hill.' },
      { time: '06:30 - 08:00', activity: 'Eksplorasi Kawah & Pura Poten', description: 'Jalan kaki atau naik kuda menuju bibir kawah aktif dan Pura Poten.' },
      { time: '08:30 - 09:30', activity: 'Pasir Berbisik & Savana Teletubbies', description: 'Sesi foto di hamparan savana hijau dan relief kaldera purba.' },
      { time: '10:00 - 12:30', activity: 'Kembali ke Kota Malang', description: 'Perjalanan pulang dan drop off kembali ke lokasi penjemputan.' }
    ]
  },
  {
    id: 'open-trip-surabaya',
    title: 'Open Trip Bromo Start Surabaya / Sidoarjo',
    subtitle: 'Trip sharing harian praktis dari Surabaya & Sidoarjo dengan armada AC prima disambung Jeep 4x4.',
    category: 'open_trip',
    startCity: 'surabaya',
    price: 450000,
    priceWithDoc: 450000,
    priceUnit: '/ orang',
    duration: '1 Hari (Midnight)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Surabaya & Sidoarjo',
    departureTime: '23:00 - 23:45 WIB',
    imageUrl: imgOpenTripSurabaya,
    rating: 4.8,
    reviewsCount: 218,
    badge: 'Best Value',
    description: 'Penjemputan harian langsung dari Stasiun Gubeng/Pasar Turi, Bandara Juanda, Terminal Bungurasih, atau Hotel di Surabaya dan Sidoarjo.',
    destinations: [
      'Sunrise Point Penanjakan / Bukit Kingkong',
      'Kawah Bromo & Pura Luhur Poten',
      'Pasir Berbisik',
      'Savana Teletubbies'
    ],
    includes: [
      'Transportasi AC Surabaya/Sidoarjo ke Rest Area Bromo PP',
      'Jeep Toyota Land Cruiser 4x4 Resmi TNBTS',
      'Tiket Masuk Resmi TNBTS',
      'Driver, BBM & Biaya Tol PP',
      'Air Mineral & Snack'
    ],
    excludes: [
      'Sewa kuda kaldera',
      'Makan di luar paket',
      'Pengeluaran pribadi'
    ],
    highlights: [
      'Titik jemput fleksibel di Stasiun Gubeng & Bandara Juanda',
      'Pasti jalan harian tanpa repot sewa kendaraan sendiri',
      'Armada mobil AC nyaman untuk perjalanan malam'
    ],
    meetingPoints: [
      'Stasiun Surabaya Gubeng (Pintu Baru / Lama)',
      'Stasiun Surabaya Pasar Turi',
      'Terminal Purabaya Bungurasih',
      'Hotel / Alamat di Kota Surabaya & Sidoarjo'
    ],
    tips: [
      'Bawa jaket hangat untuk suhu 5-10°C di puncak sunrise',
      'Gunakan sepatu beralas karet anti selip'
    ],
    itinerary: [
      { time: '23:00 - 23:45', activity: 'Penjemputan di Surabaya/Sidoarjo', description: 'Driver menjemput di titik stasiun, bandara, atau hotel.' },
      { time: '00:00 - 02:30', activity: 'Perjalanan ke Rest Area Jeep', description: 'Perjalanan via tol menuju rest area transfer Jeep Bromo.' },
      { time: '03:30 - 06:00', activity: 'Menyaksikan Golden Sunrise', description: 'Sunrise terbaik di viewpoint Penanjakan dengan panorama Semeru.' },
      { time: '06:30 - 09:30', activity: 'Kawah Bromo, Pasir Berbisik & Savana', description: 'Eksplorasi spot ikonik kaldera Bromo.' },
      { time: '10:30 - 13:30', activity: 'Perjalanan Kembali ke Surabaya', description: 'Drop off kembali ke stasiun/hotel di Surabaya.' }
    ]
  },
  {
    id: 'private-jeep-malang',
    title: 'Private Jeep Bromo Eksklusif Start Malang',
    subtitle: 'Sewa 1 unit Jeep FJ40 eksklusif untuk keluarga atau rombongan pribadi tanpa digabung peserta lain dari Kota Malang.',
    category: 'private_trip',
    startCity: 'malang',
    price: 1350000,
    priceUnit: '/ jeep (maks 6 pax)',
    duration: '1 Hari (12 Jam)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Kota Malang',
    departureTime: '00:00 - 00:30 WIB',
    imageUrl: imgPrivateMalang,
    rating: 5.0,
    reviewsCount: 285,
    badge: 'Paling Nyaman',
    description: 'Sewa 1 unit Jeep Toyota Land Cruiser FJ40 khusus rombongan keluarga atau sahabat Anda tanpa digabung peserta lain.',
    destinations: [
      'Puncak Penanjakan 1 / Seruni Point',
      'Lembah Tebing Widodaren',
      'Kawah Aktif Bromo & Pura Poten',
      'Lautan Pasir Berbisik',
      'Savana Bukit Teletubbies'
    ],
    includes: [
      '1 Unit Private Jeep 4x4 Eksklusif',
      'Driver berpengalaman merangkap tour leader',
      'BBM & Parkir seluruh spot TNBTS',
      'Penjemputan & Pengantaran bebas di Malang'
    ],
    excludes: [
      'Tiket Masuk TNBTS (dapat dibantu booking)',
      'Sewa kuda & pengeluaran pribadi'
    ],
    highlights: [
      'Privasi 100% tanpa digabung orang asing',
      'Jadwal lebih fleksibel menyesuaikan kenyamanan rombongan',
      'Bebas request durasi foto di setiap spot'
    ],
    meetingPoints: [
      'Seluruh Hotel, Villa, Homestay & Stasiun di Kota Malang'
    ],
    tips: [
      'Cocok untuk rombongan keluarga dengan anak-anak atau lansia',
      'Bawa jaket penahan angin & kacamata hitam'
    ],
    itinerary: [
      { time: '00:00 - 00:30', activity: 'Jemput Rombongan di Hotel', description: 'Jeep menjemput langsung di lobi hotel/villa Anda.' },
      { time: '03:30 - 06:00', activity: 'Golden Sunrise Penanjakan', description: 'Spot sunrise terbaik tanpa terburu-buru.' },
      { time: '06:30 - 09:30', activity: 'Jelajah Kaldera & Savana', description: 'Foto eksklusif bersama Jeep di Lautan Pasir dan Savana.' },
      { time: '10:00 - 12:30', activity: 'Kembali ke Malang', description: 'Pengantaran kembali ke hotel atau kuliner khas Malang.' }
    ]
  },
  {
    id: 'private-jeep-batu',
    title: 'Private Jeep Bromo Eksklusif Start Kota Batu',
    subtitle: 'Penjemputan langsung di hotel, resort, atau villa Kota Wisata Batu dengan armada Jeep 4x4 privat.',
    category: 'private_trip',
    startCity: 'batu',
    price: 1400000,
    priceUnit: '/ jeep (maks 6 pax)',
    duration: '1 Hari (12 Jam)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Kota Wisata Batu',
    departureTime: '23:30 - 00:00 WIB',
    imageUrl: imgPrivateBatu,
    rating: 4.9,
    reviewsCount: 194,
    badge: 'Favorit Keluarga',
    description: 'Jemput langsung di villa, hotel, atau resort area Kota Wisata Batu, fleksibel & privat tanpa gabung rombongan.',
    destinations: [
      'Puncak Penanjakan 1 / Kingkong Hill',
      'Lembah Widodaren Cliff',
      'Kawah Bromo & Pura Luhur Poten',
      'Pasir Berbisik',
      'Savana Teletubbies'
    ],
    includes: [
      '1 Unit Private Jeep Land Cruiser 4x4',
      'Driver ramah & menguasai rute pegunungan',
      'BBM & Parkir TNBTS Resmi',
      'Penjemputan langsung di Hotel/Villa Kota Batu'
    ],
    excludes: [
      'Tiket Masuk TNBTS',
      'Sewa kuda kaldera'
    ],
    highlights: [
      'Khusus penjemputan area resort & villa sejuk Kota Batu',
      'Armada bersih terawat dengan performa mesin tangguh',
      'Panduan spot sunrise terbaik'
    ],
    meetingPoints: [
      'Seluruh Hotel, Resort & Villa di wilayah Kota Batu'
    ],
    tips: [
      'Waktu penjemputan sedikit lebih awal (23:30) karena jarak dari Batu ke Bromo'
    ],
    itinerary: [
      { time: '23:30 - 00:00', activity: 'Penjemputan di Villa/Resort Batu', description: 'Driver menjemput di akomodasi Anda di Kota Batu.' },
      { time: '03:30 - 06:00', activity: 'Sunrise Puncak Penanjakan', description: 'Menyaksikan fajar menakjubkan di atas awan Bromo.' },
      { time: '06:30 - 09:30', activity: 'Eksplorasi Kaldera & Widodaren', description: 'Foto-foto eksklusif di Widodaren, Pasir Berbisik, dan Savana.' },
      { time: '10:00 - 13:00', activity: 'Kembali ke Kota Batu', description: 'Drop off santai kembali ke penginapan di Batu.' }
    ]
  },
  {
    id: 'private-jeep-surabaya',
    title: 'Private Tour Bromo Start Surabaya / Sidoarjo',
    subtitle: 'Layanan VIP all-in dari Surabaya dengan mobil private AC dilanjutkan Jeep 4x4 eksklusif di Bromo.',
    category: 'private_trip',
    startCity: 'surabaya',
    price: 2100000,
    priceUnit: '/ rombongan (maks 5-6 pax)',
    duration: '1 Hari (14 Jam)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Kota Surabaya & Sidoarjo',
    departureTime: '23:00 - 23:30 WIB',
    imageUrl: imgPrivateSurabaya,
    rating: 4.9,
    reviewsCount: 167,
    badge: 'VVIP Privasi',
    description: 'Layanan privat eksklusif dengan mobil AC (Avanza/Innova) dari Surabaya ke Rest Area Bromo dilanjutkan Jeep 4x4.',
    destinations: [
      'Sunrise Viewpoint Penanjakan 1',
      'Kawah Bromo & Pura Luhur Poten',
      'Pasir Berbisik',
      'Savana Teletubbies'
    ],
    includes: [
      'Mobil Private AC Surabaya - Bromo PP (Avanza/Innova)',
      '1 Unit Private Jeep 4x4 Eksklusif di Bromo',
      'Driver Mobil & Driver Jeep Berpengalaman',
      'BBM Mobil, BBM Jeep, Tol PP & Parkir Resmi',
      'Tiket Masuk Resmi TNBTS WNI'
    ],
    excludes: [
      'Sewa kuda kaldera & pengeluaran pribadi'
    ],
    highlights: [
      'Layanan door-to-door langsung dari rumah/hotel di Surabaya',
      'Privat total: mobil keluarga dan jeep tidak digabung siapa pun',
      'Sudah termasuk tiket TNBTS dan tol tol trans-Jawa'
    ],
    meetingPoints: [
      'Bandara Internasional Juanda Surabaya',
      'Stasiun Gubeng / Pasar Turi / Wonokromo',
      'Seluruh Alamat Rumah & Hotel di Surabaya/Sidoarjo'
    ],
    tips: [
      'Pilihan paling ideal untuk kunjungan bisnis dan liburan keluarga dari luar pulau'
    ],
    itinerary: [
      { time: '23:00 - 23:30', activity: 'Jemput di Alamat Surabaya', description: 'Mobil private AC menjemput di titik lokasi Anda.' },
      { time: '02:00 - 02:30', activity: 'Transfer Jeep 4x4', description: 'Pindah ke unit Jeep 4x4 di rest area transit resmi.' },
      { time: '03:30 - 06:00', activity: 'Sunrise Spektakuler', description: 'Menikmati fajar kaldera Tengger.' },
      { time: '06:30 - 09:30', activity: 'Keliling 4 Spot Utama Bromo', description: 'Kawah Bromo, Pura Poten, Pasir Berbisik, Savana.' },
      { time: '10:30 - 13:30', activity: 'Drop Off Surabaya', description: 'Perjalanan kembali dengan mobil AC ke Surabaya.' }
    ]
  },
  {
    id: 'private-jeep-sukapura',
    title: 'Private Jeep Bromo Start Sukapura Probolinggo',
    subtitle: 'Start langsung dari rest area Sukapura Probolinggo, perjalanan lebih singkat & hemat langsung menuju kaldera.',
    category: 'private_trip',
    startCity: 'sukapura',
    price: 750000,
    priceUnit: '/ jeep (maks 6 pax)',
    duration: '1 Hari (8 Jam)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Sukapura / Cemorolawang',
    departureTime: '02:00 - 03:00 WIB',
    imageUrl: imgPrivateSukapura,
    rating: 4.9,
    reviewsCount: 312,
    badge: 'Jalur Terdekat',
    description: 'Start langsung dari rest area Sukapura / Cemorolawang Probolinggo, perjalanan lebih singkat & hemat waktu.',
    destinations: [
      'Puncak Penanjakan 1 / Seruni Point',
      'Kawah Aktif Bromo & Pura Poten',
      'Pasir Berbisik',
      'Savana Teletubbies'
    ],
    includes: [
      '1 Unit Jeep Hardtop Toyota 4x4',
      'Driver lokal asli suku Tengger',
      'BBM & Parkir Resmi Kawasan'
    ],
    excludes: [
      'Tiket Masuk TNBTS',
      'Antar jemput dari luar area Sukapura'
    ],
    highlights: [
      'Waktu tempuh ke puncak hanya 45 menit',
      'Pilihan terbaik bagi yang membawa mobil pribadi via tol Probolinggo'
    ],
    meetingPoints: [
      'Rest Area Sukapura / Hotel Cemorolawang Probolinggo'
    ],
    tips: [
      'Mobil pribadi Anda dapat diparkir aman di rest area resmi Sukapura'
    ],
    itinerary: [
      { time: '02:30 - 03:00', activity: 'Kumpul di Rest Area Sukapura', description: 'Naik ke Jeep 4x4 yang telah disiapkan.' },
      { time: '03:45 - 06:00', activity: 'Sunrise Penanjakan / Seruni', description: 'Menyaksikan fajar di spot tertinggi.' },
      { time: '06:30 - 09:30', activity: 'Kawah Bromo & Savana', description: 'Eksplorasi spot-spot kaldera pasir berbisik.' },
      { time: '10:00', activity: 'Kembali ke Rest Area', description: 'Trip selesai, kembali ke kendaraan pribadi Anda.' }
    ]
  },
  {
    id: 'private-jeep-wonokitri',
    title: 'Private Jeep Bromo Start Wonokitri / Tosari Pasuruan',
    subtitle: 'Rute tercepat & paling mulus dari arah Pasuruan dan Surabaya via exit tol Paspro menuju Penanjakan 1.',
    category: 'private_trip',
    startCity: 'tosari',
    price: 800000,
    priceUnit: '/ jeep (maks 6 pax)',
    duration: '1 Hari (8 Jam)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Wonokitri / Tosari Pasuruan',
    departureTime: '02:00 - 03:00 WIB',
    imageUrl: imgPrivateWonokitri,
    rating: 4.9,
    reviewsCount: 178,
    badge: 'Akses Termulus',
    description: 'Rute tercepat & paling mulus dari Pasuruan via Wonokitri menuju Puncak Penanjakan 1 Bromo.',
    destinations: [
      'Puncak Penanjakan 1',
      'Bukit Kingkong & Bukit Cinta',
      'Kawah Bromo & Pura Luhur Poten',
      'Pasir Berbisik & Savana Teletubbies'
    ],
    includes: [
      '1 Unit Jeep 4x4 Eksklusif',
      'Driver lokal berpengalaman Tosari',
      'BBM & Parkir TNBTS'
    ],
    excludes: [
      'Tiket Masuk TNBTS',
      'Pengeluaran pribadi'
    ],
    highlights: [
      'Akses jalan aspal mulus dan lebar',
      'Jarak paling dekat ke Puncak Sunrise Penanjakan 1'
    ],
    meetingPoints: [
      'Rest Area Wonokitri / Hotel Bromo Cottage Tosari Pasuruan'
    ],
    tips: [
      'Rute favorit bagi wisatawan keluarga yang menginap di resort area Tosari'
    ],
    itinerary: [
      { time: '02:30 - 03:00', activity: 'Meet up di Wonokitri', description: 'Briefing dan naik armada Jeep 4x4.' },
      { time: '03:30 - 06:00', activity: 'Sunrise Penanjakan 1', description: 'Spot panorama sunrise legendaris kaldera Tengger.' },
      { time: '06:30 - 09:30', activity: 'Kawah Bromo & Savana', description: 'Eksplorasi spot kaldera pasir dan bukit Teletubbies.' },
      { time: '10:00', activity: 'Kembali ke Wonokitri', description: 'Kembali ke rest area Tosari.' }
    ]
  },
  {
    id: 'private-jeep-tumpang',
    title: 'Private Jeep Bromo Start Tumpang / Gubugklakah',
    subtitle: 'Jalur eksotis melintasi pedesaan apel Gubugklakah dan bentang savana selatan Bromo.',
    category: 'private_trip',
    startCity: 'gubugklakah',
    price: 950000,
    priceUnit: '/ jeep (maks 6 pax)',
    duration: '1 Hari (10 Jam)',
    minPax: 1,
    maxPax: 6,
    startLocationName: 'Tumpang / Gubugklakah',
    departureTime: '01:00 - 01:30 WIB',
    imageUrl: imgPrivateTumpang,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Jalur Panorama',
    description: 'Melintasi jalur eksotis Gubugklakah & Jemplang dengan pemandangan tebing savana selatan Bromo.',
    destinations: [
      'Sunrise Penanjakan / Bukit Kingkong',
      'Kawah Bromo & Pura Poten',
      'Pasir Berbisik',
      'Savana Bukit Teletubbies & Jemplang'
    ],
    includes: [
      '1 Unit Jeep 4x4 Hardtop',
      'Driver lokal Tumpang berpengalaman',
      'BBM & Parkir Kawasan'
    ],
    excludes: [
      'Tiket Masuk TNBTS'
    ],
    highlights: [
      'Pemandangan perkebunan apel dan hutan pinus asri',
      'Rute alternatif favorit dari Malang timur'
    ],
    meetingPoints: [
      'Rest Area Tumpang / Homestay Desa Wisata Gubugklakah'
    ],
    tips: [
      'Siapkan kamera untuk panorama tebing savana di Jemplang saat siang'
    ],
    itinerary: [
      { time: '01:00 - 01:30', activity: 'Penjemputan di Rest Area Tumpang', description: 'Berangkat via jalur Gubugklakah - Ngadas.' },
      { time: '03:30 - 06:00', activity: 'Sunrise Kaldera Bromo', description: 'Menikmati fajar pagi nan menakjubkan.' },
      { time: '06:30 - 09:30', activity: 'Kawah Bromo & Savana Selatan', description: 'Foto-foto di Lautan Pasir dan Padang Savana.' },
      { time: '10:30', activity: 'Kembali ke Tumpang', description: 'Drop off kembali ke meeting point Tumpang.' }
    ]
  },
  {
    id: 'long-jeep',
    title: 'Long Jeep Bromo Hardtop 4x4 (Kapasitas 9 Pax)',
    subtitle: 'Jeep Long Chassis kapasitas besar hingga 9 penumpang dewasa. Solusi paling hemat untuk rombongan sedang.',
    category: 'long_jeep',
    startCity: 'malang',
    price: 1850000,
    priceUnit: '/ armada (maks 9 pax)',
    duration: '1 Hari (12 Jam)',
    minPax: 6,
    maxPax: 9,
    startLocationName: 'Kota Malang & Batu',
    departureTime: '00:00 - 00:30 WIB',
    imageUrl: imgLongJeep,
    rating: 5.0,
    reviewsCount: 156,
    badge: 'Kapasitas 9 Orang',
    description: 'Armada Long Chassis Jeep 4x4 berkapasitas besar hingga 9 penumpang dewasa. Solusi paling hemat untuk rombongan sedang.',
    destinations: [
      'Puncak Penanjakan 1',
      'Lembah Widodaren Cliff',
      'Kawah Aktif Bromo & Pura Poten',
      'Pasir Berbisik',
      'Savana Teletubbies'
    ],
    includes: [
      '1 Unit Long Jeep 4x4 (Kapasitas lega 9 orang)',
      'Driver profesional & BBM',
      'Parkir Resmi TNBTS',
      'Penjemputan area Malang / Batu'
    ],
    excludes: [
      'Tiket Masuk TNBTS',
      'Pengeluaran pribadi'
    ],
    highlights: [
      'Kapasitas hingga 9 orang (lebih hemat dibanding sewa 2 jeep reguler)',
      'Ruang kabin lapang dan nyaman untuk rombongan keluarga besar / kantor',
      'Armada langka dengan performa 4x4 tangguh'
    ],
    meetingPoints: [
      'Hotel, Villa, Homestay & Stasiun di Malang / Batu'
    ],
    tips: [
      'Sangat disarankan reservasi H-7 karena unit Long Jeep sangat terbatas'
    ],
    itinerary: [
      { time: '00:00 - 00:30', activity: 'Jemput Rombongan di Hotel', description: 'Penjemputan rombongan dengan Long Jeep.' },
      { time: '03:30 - 06:00', activity: 'Golden Sunrise Bromo', description: 'Menikmati fajar di puncak Penanjakan.' },
      { time: '06:30 - 09:30', activity: 'Kawah & Savana', description: 'Eksplorasi spot kaldera pasir dan padang savana.' },
      { time: '10:00 - 12:30', activity: 'Kembali ke Malang', description: 'Drop off rombongan kembali ke hotel.' }
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
