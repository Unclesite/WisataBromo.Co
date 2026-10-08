import { DestinationSpot, ReviewItem } from '../types';

export const DESTINATION_SPOTS: DestinationSpot[] = [
  {
    id: 'penanjakan-1',
    name: 'Puncak Penanjakan 1',
    elevation: '2.770 mdpl',
    bestTime: '04:30 - 05:45 WIB',
    speciality: 'Spot golden sunrise paling spektakuler dengan panorama deretan Bromo, Batok, dan Semeru.',
    description: 'Gardu pandang legendaris tertinggi di sisi barat laut Kaldera Tengger. Memiliki tribun bertingkat, puluhan kedai kopi hangat, dan pemandangan lautan awan yang menakjubkan.',
    iconName: 'Sunrise'
  },
  {
    id: 'kawah-bromo',
    name: 'Kawah Aktif Bromo & Pura Poten',
    elevation: '2.329 mdpl',
    bestTime: '06:30 - 08:30 WIB',
    speciality: 'Kawah berapi aktif dengan 250 anak tangga beton & Pura Luhur Poten di kaki gunung.',
    description: 'Mendengarkan gemuruh vulkanik langsung dari bibir kawah berdiameter 800 meter. Anda bisa berjalan kaki melintasi kaldera berpasir atau menyewa kuda poni lokal.',
    iconName: 'Flame'
  },
  {
    id: 'bukit-widodaren',
    name: 'Tebing Lembah Widodaren',
    elevation: '2.614 mdpl',
    bestTime: '06:00 - 07:30 WIB',
    speciality: 'Latar foto ikonik di atas kap mobil Jeep 4x4 dengan dinding tebing batu bergaris dramatis.',
    description: 'Bentuk tebing batu yang terukir secara alami oleh angin dan erosi jutaan tahun. Spot wajib bagi para pemburu foto estetik di Bromo.',
    iconName: 'Mountain'
  },
  {
    id: 'pasir-berbisik',
    name: 'Pasir Berbisik (Segara Wedhi)',
    elevation: '2.100 mdpl',
    bestTime: '07:30 - 09:30 WIB',
    speciality: 'Lautan pasir vulkanik seluas 5.250 hektar dengan desau angin khas yang menenangkan jiwa.',
    description: 'Kaldera pasir luas tempat pengambilan gambar film legendaris Indonesia "Pasir Berbisik". Sangat cocok untuk berkejaran atau berpose sinematik.',
    iconName: 'Wind'
  },
  {
    id: 'savana-teletubbies',
    name: 'Savana Hijau & Bukit Teletubbies',
    elevation: '2.150 mdpl',
    bestTime: '08:30 - 10:30 WIB',
    speciality: 'Perbukitan rumput gelombang asri yang hijau royo-royo bak serial anak Teletubbies.',
    description: 'Kontras keindahan dari lautan pasir gersang menuju lembah hijau yang subur dan damai. Tempat favorit untuk piknik sarapan santai.',
    iconName: 'Trees'
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Dimas Wicaksono & Istri',
    city: 'Jakarta Selatan',
    tripTaken: 'Paket Piknik Bromo Savana',
    rating: 5,
    date: '14 Agustus 2026',
    comment: 'Pengalaman honeymoon yang luar biasa berkesan! Sarapan estetik di tengah Savana Bukit Teletubbies disiapkan sangat rapi. Ada croissant hangat, drip coffee, buah segar, dan fotografer Mas Rendy yang sabar mengarahkan gaya. Hasil foto dan videonya sangat aesthetic!',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'dr. Farah Nabila',
    city: 'Surabaya',
    tripTaken: 'Open Trip Start Surabaya',
    rating: 5,
    date: '28 Juli 2026',
    comment: 'Solo trip pertama kali ke Bromo dan sangat puas dengan wisatabromo.co. Dijemput tepat waktu di Stasiun Gubeng jam 23.30, mobil AC nya bersih wangi, driver jeepnya ramah dan jago cari spot foto sepi di Penanjakan. 1 orang pasti berangkat tanpa drama kuota!',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Keluarga Hartono (6 Pax)',
    city: 'Semarang',
    tripTaken: 'Private Trip Start Malang',
    rating: 5,
    date: '05 September 2026',
    comment: 'Bawa orang tua dan anak-anak jadi lebih tenang pakai Private Trip. Penjemputan di hotel Malang tepat jam 00.30 WIB, jeep 4x4 bersih dan suspensi enak. Driver Mas Joko sangat sopan, membantu orang tua saat naik turun jeep. Rekomendasi bintang 5 untuk wisata keluarga.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Rian Pratama & Komunitas Trail',
    city: 'Bandung',
    tripTaken: 'Paket Sewa Trail Start Sukapura',
    rating: 5,
    date: '21 Juni 2026',
    comment: 'Gaspol di Lautan Pasir dan Widodaren pakai Honda CRF 150L kondisi mesin prima banget! Safety gear lengkap dan bersih, marshall lokalnya Mas Slamet bawa kami ke track pasir tersembunyi yang seru parah. Adrenalin terbayar tuntas!',
    verified: true
  }
];

export const FAQS = [
  {
    question: 'Apakah 1 orang solo traveler bisa mendaftar paket Open Trip?',
    answer: 'Tentu bisa! Open Trip kami (baik Start Malang maupun Start Surabaya) dijamin PASTI BERANGKAT setiap hari tanpa syarat minimal peserta. Solo traveler tidak perlu khawatir trip dibatalkan.'
  },
  {
    question: 'Kapan waktu terbaik untuk menyaksikan Golden Sunrise dan Embun Es di Bromo?',
    answer: 'Musim terbaik adalah kemarau antara bulan Mei hingga Oktober ketika langit cerah tanpa halangan awan mendung. Fenomena embun beku/es (frost) di Savana umumnya terjadi pada puncak dingin bulan Juni, Juli, hingga Agustus saat suhu fajar mencapai 2°C - 5°C.'
  },
  {
    question: 'Berapa kapasitas penumpang untuk 1 unit mobil Jeep Bromo?',
    answer: 'Satu unit Jeep Land Cruiser Hardtop 4x4 memiliki kapasitas ideal 5 hingga maksimal 6 penumpang dewasa untuk kenyamanan maksimal saat berkendara di jalur kaldera.'
  },
  {
    question: 'Bagaimana jika cuaca buruk atau status Gunung Bromo meningkat?',
    answer: 'Keselamatan tamu adalah prioritas nomor satu. WisataBromo.co senantiasa berkoordinasi dengan PVMBG dan Balai Besar TNBTS. Jika kawasan ditutup secara resmi akibat force majeure/kondisi alam, Anda dapat melakukan reschedule jadwal tanpa biaya penalti atau refund sesuai ketentuan SOP TNBTS.'
  },
  {
    question: 'Apa perbedaan rute start Malang, Batu, Surabaya, Gubugklakah, Sukapura, dan Tosari?',
    answer: 'Start Malang/Batu/Surabaya sudah mencakup mobil penjemputan dari kota asal ke basecamp Bromo. Sementara start Gubugklakah (Malang Timur), Sukapura (Probolinggo), dan Tosari (Pasuruan) adalah titik kumpul terdekat langsung ganti/naik Jeep 4x4 bagi wisatawan yang sudah menginap di hotel sekitar lereng Bromo.'
  },
  {
    question: 'Bagaimana cara pemesanan dan pembayaran?',
    answer: 'Pemesanan sangat mudah: pilih paket di website ini, klik "Pesan via WhatsApp", Anda akan langsung terhubung dengan admin reservasi kami. Cukup membayar DP (Down Payment) 30% untuk mengunci armada dan sisa pelunasan dapat dibayarkan saat hari H trip.'
  }
];
