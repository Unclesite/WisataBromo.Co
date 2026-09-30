import React, { useState } from 'react';
import { Mountain, Compass, MapPin, Eye, Sparkles, Clock, Check, ArrowRight, Shield } from 'lucide-react';

interface SpotDetail {
  id: string;
  name: string;
  elevation: string;
  category: 'sunrise' | 'caldera';
  bestTime: string;
  description: string;
  highlights: string[];
  tips: string;
  jeepAccess: string;
}

const SPOTS: SpotDetail[] = [
  {
    id: 'penanjakan-1',
    name: 'Puncak Penanjakan 1 (King of Sunrise)',
    elevation: '2.770 mdpl',
    category: 'sunrise',
    bestTime: '03.30 – 06.00 WIB',
    description: 'Gardu pandang tertinggi dan paling legendaris di Bromo. Menawarkan sudut pandang 180 derajat kaldera Tengger dengan latar belakang Gunung Batok, Kawah Bromo, dan erupsi asap Gunung Semeru di kejauhan.',
    highlights: ['Sudut pandang tertinggi & terluas', 'Fasilitas lengkap: toilet, musholla, warung kopi', 'Spot foto sunrise lautan awan terbaik di dunia'],
    tips: 'Datang lebih awal (sekitar pukul 03.30 WIB) untuk mengamankan posisi terdepan di pagar pembatas.',
    jeepAccess: 'Akses langsung via Jalur Tosari (Pasuruan) & Sukapura (Probolinggo).'
  },
  {
    id: 'kingkong-hill',
    name: 'Kingkong Hill (Bukit Kedaluh)',
    elevation: '2.650 mdpl',
    category: 'sunrise',
    bestTime: '04.00 – 06.00 WIB',
    description: 'Dinamakan Kingkong Hill karena tebing batu karangnya yang menyerupai wajah kingkong. Alternatif favorit jika Penanjakan 1 sedang sangat padat pengunjung.',
    highlights: ['Bentuk tebing karang dramatis', 'Sudut foto sejajar dengan garis fajar', 'Suasana sedikit lebih tenang'],
    tips: 'Jalur jalan setapak berbatu sekitar 100 meter dari area parkir jeep, siapkan senter / headlamp.',
    jeepAccess: 'Terletak tepat di bawah Penanjakan 1.'
  },
  {
    id: 'bukit-cinta',
    name: 'Bukit Cinta (Love Hill / Lemah Pasar)',
    elevation: '2.680 mdpl',
    category: 'sunrise',
    bestTime: '04.15 – 06.00 WIB',
    description: 'Spot romantis dengan monumen bertuliskan "Love Hill Bromo". Sangat cocok untuk pasangan dan rombongan yang ingin menikmati sunrise tanpa harus trekking jauh dari parkiran jeep.',
    highlights: ['Akses sangat dekat dari parkir jeep', 'Monumen foto romantis', 'Pemandangan kawah Bromo yang jernih'],
    tips: 'Suhu di pagi hari sangat dingin, kenakan jaket gunung tebal dan sarung tangan.',
    jeepAccess: 'Berada di jalur utama menuju Penanjakan.'
  },
  {
    id: 'seruni-point',
    name: 'Seruni Point (Penanjakan 2)',
    elevation: '2.400 mdpl',
    category: 'sunrise',
    bestTime: '04.30 – 06.00 WIB',
    description: 'Gardu pandang dengan arsitektur 4 pilar megah bernuansa Kerajaan Majapahit. Terletak di atas Desa Ngadisari / Cemorolawang Sukapura.',
    highlights: ['Bangunan ikonik 4 pilar Majapahit', 'Akses mudah dari Cemorolawang', 'Pemandangan dinding tebing Widodaren yang gagah'],
    tips: 'Terdapat 256 anak tangga menuju puncak gardu pandang, bisa sewa kuda hingga pos tengah.',
    jeepAccess: 'Akses utama dari Sukapura & Ngadisari Probolinggo.'
  },
  {
    id: 'kawah-bromo',
    name: 'Kawah Aktif Bromo & Pura Luhur Poten',
    elevation: '2.329 mdpl',
    category: 'caldera',
    bestTime: '06.30 – 09.00 WIB',
    description: 'Kawah aktif vulkanik dengan tangga 250 anak tangga beton menuju bibir kawah. Di kaki kawah berdiri Pura Luhur Poten, tempat suci ibadah umat Hindu suku Tengger.',
    highlights: ['Mendengar gemuruh magma kawah aktif', 'Sensasi menaiki tangga 250 trap', 'Kemegahan arsitektur suci Pura Luhur Poten'],
    tips: 'Gunakan masker debu atau buff untuk menyaring bau belerang dan debu pasir vulkanik.',
    jeepAccess: 'Parkir jeep di Segara Wedhi (Lautan Pasir), dilanjutkan jalan kaki/sewa kuda.'
  },
  {
    id: 'tebing-widodaren',
    name: 'Lembah & Tebing Purba Widodaren',
    elevation: '2.100 mdpl',
    category: 'caldera',
    bestTime: '06.00 – 08.00 WIB',
    description: 'Tebing batu purba dengan corak tekstur vertikal yang menjulang tinggi di pinggir lautan pasir. Spot terfavorit untuk foto estetik di atas kap Jeep Land Cruiser FJ40.',
    highlights: ['Spot foto nomor 1 Jeep Hardtop', 'Latar belakang tebing batu raksasa', 'Kabut fajar yang mengalir dramatis'],
    tips: 'Minta bantuan driver/fotografer untuk mengarahkan gaya berfoto di atas ban atau kap mobil jeep.',
    jeepAccess: 'Dapat diakses langsung oleh armada Jeep 4x4.'
  },
  {
    id: 'savana-teletubbies',
    name: 'Savana Hijau & Bukit Teletubbies',
    elevation: '2.150 mdpl',
    category: 'caldera',
    bestTime: '08.00 – 11.00 WIB',
    description: 'Hamparan perbukitan hijau bergelombang yang menyerupai lembah Teletubbies. Kontras yang menyejukkan setelah menjelajahi kawah dan lautan pasir.',
    highlights: ['Hamparan rumput hijau asri', 'Spot terbaik untuk paket piknik santai', 'Banyak tanaman edelweiss & bunga liar'],
    tips: 'Musim terbaik untuk warna hijau paling segar adalah bulan Januari hingga Agustus.',
    jeepAccess: 'Terhubung langsung dari lautan pasir menuju jalur Jemplang Malang.'
  },
  {
    id: 'pasir-berbisik',
    name: 'Segara Wedhi (Lautan Pasir Berbisik)',
    elevation: '2.100 mdpl',
    category: 'caldera',
    bestTime: '08.30 – 11.00 WIB',
    description: 'Hamparan pasir vulkanik seluas 5.250 hektar. Disebut pasir berbisik karena hembusan angin fajar menciptakan gesekan pasir halus yang terdengar seperti bisikan alam.',
    highlights: ['Hamparan pasir hitam vulkanik tanpa batas', 'Lokasi syuting film legendaris "Pasir Berbisik"', 'Area bermain motor trail & kuda'],
    tips: 'Kacamata hitam (sunglasses) sangat disarankan untuk melindungi mata dari silau matahari dan butiran pasir.',
    jeepAccess: 'Jalur utama penghubung antar destinasi kaldera.'
  }
];

export const ElevationSpotGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'sunrise' | 'caldera'>('all');
  const [activeSpot, setActiveSpot] = useState<SpotDetail>(SPOTS[0]);

  const filteredSpots = SPOTS.filter((s) => (activeTab === 'all' ? true : s.category === activeTab));

  return (
    <section id="spot-sunrise" className="py-14 sm:py-16 bg-white border-t border-slate-200 text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="text-xs font-extrabold text-[#3d72fe] tracking-wider mb-2 flex items-center justify-center gap-1.5 uppercase">
            <Mountain className="w-4 h-4" />
            <span>PANDUAN LENGKAP KETINGGIAN & SPOT DESTINASI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102a56] mb-3 text-balance">
            Eksplorasi 8 Spot Ikonik Kaldera Bromo Tengger
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Ketahui perbedaan 5 gardu pandang sunrise terbaik (2.400 – 2.770 mdpl) dan 4 keajaiban kaldera pasir vulkanik agar liburan Anda semakin berkesan.
          </p>
        </div>

        {/* Tab Filter (Horizontal Scrollable on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 min-h-[42px] ${
              activeTab === 'all'
                ? 'bg-[#3d72fe] text-white shadow-md shadow-[#3d72fe]/20'
                : 'bg-slate-100 text-[#111318] hover:bg-slate-200'
            }`}
          >
            Semua Spot (8)
          </button>
          <button
            onClick={() => setActiveTab('sunrise')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 min-h-[42px] ${
              activeTab === 'sunrise'
                ? 'bg-[#3d72fe] text-white shadow-md shadow-[#3d72fe]/20'
                : 'bg-slate-100 text-[#111318] hover:bg-slate-200'
            }`}
          >
            Gardu Pandang Sunrise (4)
          </button>
          <button
            onClick={() => setActiveTab('caldera')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 min-h-[42px] ${
              activeTab === 'caldera'
                ? 'bg-[#3d72fe] text-white shadow-md shadow-[#3d72fe]/20'
                : 'bg-slate-100 text-[#111318] hover:bg-slate-200'
            }`}
          >
            Destinasi Kaldera & Pasir (4)
          </button>
        </div>

        {/* 2-Column Interactive Visual Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Spots Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            {filteredSpots.map((spot) => {
              const isSelected = activeSpot.id === spot.id;
              return (
                <div
                  key={spot.id}
                  onClick={() => setActiveSpot(spot)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-[#eaf2ff] border-[#3d72fe] shadow-md shadow-[#3d72fe]/10'
                      : 'bg-white border-slate-200 hover:border-[#3d72fe]/50 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className={`text-sm font-extrabold ${isSelected ? 'text-[#3d72fe]' : 'text-[#102a56]'}`}>
                      {spot.name}
                    </h3>
                    <span className="text-[11px] font-mono font-bold bg-white text-[#102a56] px-2 py-0.5 rounded-md border border-slate-200 shrink-0">
                      {spot.elevation}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#3d72fe]" />
                      {spot.bestTime}
                    </span>
                    <span>·</span>
                    <span className="truncate">{spot.category === 'sunrise' ? 'Gardu Sunrise' : 'Dasar Kaldera'}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Spot Deep Dive Card */}
          <div className="lg:col-span-7 bg-[#102a56] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
            {/* Background glowing contour accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#3d72fe]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-[#102a56] bg-[#ffc928] px-3 py-1 rounded-lg">
                    {activeSpot.elevation}
                  </span>
                  <span className="text-xs font-semibold text-white/90 bg-white/15 px-3 py-1 rounded-lg border border-white/20">
                    Waktu Terbaik: {activeSpot.bestTime}
                  </span>
                </div>
                <span className="text-xs text-[#ffc928] font-bold">WisataBromo.co Official Guide</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  {activeSpot.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {activeSpot.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="p-4 bg-white/10 rounded-2xl border border-white/15 space-y-2">
                <div className="text-xs font-bold text-[#ffc928] uppercase tracking-wider">
                  Daya Tarik Utama:
                </div>
                <div className="space-y-1.5">
                  {activeSpot.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-100">
                      <Check className="w-3.5 h-3.5 text-[#ffc928] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips & Jeep Route */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <div className="font-bold text-[#ffc928] mb-1">💡 Tips Kunjungan:</div>
                  <div className="text-slate-300 text-[11px] leading-relaxed">{activeSpot.tips}</div>
                </div>
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <div className="font-bold text-[#ffc928] mb-1">🚙 Akses Jeep 4x4:</div>
                  <div className="text-slate-300 text-[11px] leading-relaxed">{activeSpot.jeepAccess}</div>
                </div>
              </div>

              {/* Quick Action */}
              <div className="pt-2">
                <a
                  href="#paket-wisata"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-[#102a56] bg-[#ffc928] hover:bg-[#ffb700] rounded-xl transition-all shadow-md shadow-[#ffc928]/20 cursor-pointer"
                >
                  <span>Pilih Paket yang Melewati Spot Ini</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
