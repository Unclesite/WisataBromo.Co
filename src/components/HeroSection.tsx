import React from 'react';
import { Compass, Flame, Shield, MapPin, Sparkles, ChevronRight, Calendar, Users, Eye, CheckCircle2 } from 'lucide-react';
import { StartCity, TripCategory } from '../types';
import { BromoHeroSlider } from './BromoHeroSlider';

interface HeroSectionProps {
  onSearch: (city: StartCity, category: TripCategory) => void;
  onOpenBooking: () => void;
  onExplorePackages: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onOpenBooking,
  onExplorePackages,
}) => {
  const [selectedCity, setSelectedCity] = React.useState<StartCity>('all');
  const [selectedCat, setSelectedCat] = React.useState<TripCategory>('all');

  const handleApplyFilter = () => {
    onSearch(selectedCity, selectedCat);
    const element = document.getElementById('paket-wisata');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#eaf2ff] via-white to-white pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20 border-b border-slate-200">
      {/* Visual atmospheric background with soft blue & amber glowing accents */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#3d72fe]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-64 sm:w-80 h-64 sm:h-80 bg-[#ffc928]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-56 sm:w-72 h-56 sm:h-72 bg-[#eaf2ff] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Live TNBTS & Weather Ticker (Responsive for Mobile) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-[#102a56]/85 border border-[#3d72fe]/20 bg-white/95 rounded-2xl p-3 sm:px-5 sm:py-3 shadow-xs">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <div className="flex items-center gap-1.5 text-[#3d72fe] font-extrabold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3d72fe] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3d72fe]"></span>
              </span>
              <span>Status TNBTS: Wisata Buka Normal</span>
            </div>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-1 font-semibold text-[#111318]">
              <Flame className="w-3.5 h-3.5 text-[#ea0610]" />
              <span>Kawah Level II (Waspada) Radius Aman 1 km</span>
            </div>
            <span className="text-slate-300 hidden md:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-1 text-[#102a56] font-medium hidden md:flex">
              <span>Suhu: 4°C - 10°C</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#3d72fe] self-start sm:self-auto pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100 w-full sm:w-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#ffc928] shrink-0" />
            <span>Pemandangan Lautan Awan Sempurna Hari Ini</span>
          </div>
        </div>

        {/* 1. HEADER SLIDE FOTO BROMO GUNUNG BATOK GUNUNG SEMERU DARI PENANJAKAN (FULL LAUTAN AWAN) */}
        <div>
          <BromoHeroSlider onOpenBooking={onOpenBooking} />
        </div>

        {/* 2. Hero Content & Quick Finder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center pt-2 sm:pt-4">
          {/* Left Column: Proposition & CTA */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Clean unboxed metadata with typographic separators */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#3d72fe] font-bold tracking-wider uppercase">
              <span>EXPLORE MOUNT BROMO 2.329 MDPL</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>JAWA TIMUR</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>OPERATOR RESMI TNBTS</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#102a56] leading-[1.2] text-balance">
              Jelajahi Magisnya Bromo Bersama{' '}
              <span className="text-[#3d72fe] relative inline-block">
                WisataBromo.co
                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#ffc928] rounded-full -z-10"></span>
              </span>
            </h1>

            <p className="text-[#111318]/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
              Paket terlengkap: Open Trip harian hemat & Private Trip eksklusif start dari{' '}
              <strong className="text-[#102a56] font-bold">Malang, Batu, Surabaya, Sukapura, Tosari, dan Gubugklakah</strong>.
              Nikmati juga keindahan <strong className="text-[#3d72fe] font-bold">Paket Piknik Savana</strong> & tantangan seru{' '}
              <strong className="text-[#ea0610] font-bold">Sewa Trail Start Sukapura</strong>.
            </p>

            {/* Quick Proof Points */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-1 text-[#102a56]">
              <div className="border-l-3 border-[#3d72fe] pl-2.5 sm:pl-3">
                <div className="text-lg sm:text-2xl font-black text-[#102a56] font-mono tabular-nums">1 Pax</div>
                <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5 font-medium">Pasti Jalan Tiap Hari</div>
              </div>
              <div className="border-l-3 border-[#ffc928] pl-2.5 sm:pl-3">
                <div className="text-lg sm:text-2xl font-black text-[#102a56] font-mono tabular-nums">6 Kota</div>
                <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5 font-medium">Pilihan Titik Start</div>
              </div>
              <div className="border-l-3 border-[#3d72fe] pl-2.5 sm:pl-3">
                <div className="text-lg sm:text-2xl font-black text-[#102a56] font-mono tabular-nums">4.9 / 5.0</div>
                <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5 font-medium">3.500+ Tamu Puas</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-xl transition-all shadow-lg shadow-[#3d72fe]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Pesan Trip Sekarang</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExplorePackages}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-[#102a56] bg-white hover:bg-[#eaf2ff] border border-slate-300 hover:border-[#3d72fe]/50 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Eye className="w-4 h-4 text-[#3d72fe]" />
                <span>Lihat 10 Pilihan Paket</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Quick Package Finder Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xl shadow-slate-200/60 relative">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#eaf2ff] text-[#3d72fe] flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-extrabold text-[#102a56]">Cari Paket Wisata</h2>
                </div>
                <span className="text-xs font-bold text-[#3d72fe] bg-[#eaf2ff] px-2.5 py-1 rounded-md">
                  Resmi & Berizin
                </span>
              </div>

              <div className="space-y-3.5 sm:space-y-4 pt-4 sm:pt-5">
                {/* Select Departure City */}
                <div>
                  <label className="block text-xs font-bold text-[#102a56] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#3d72fe]" />
                    Pilih Titik Keberangkatan (Start)
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value as StartCity)}
                    className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111318] focus:outline-none focus:border-[#3d72fe] focus:bg-white transition-colors"
                  >
                    <option value="all">Semua Titik Keberangkatan</option>
                    <option value="malang">Kota Malang (Stasiun / Hotel / Alun-alun)</option>
                    <option value="surabaya">Kota Surabaya (Stasiun Gubeng / Juanda / Hotel)</option>
                    <option value="batu">Kota Wisata Batu (Seluruh Hotel & Villa)</option>
                    <option value="sukapura">Sukapura Kab. Probolinggo (Pintu Gerbang Utama)</option>
                    <option value="tosari">Tosari Kab. Pasuruan (Akses Wonokitri & Tol)</option>
                    <option value="gubugklakah">Gubugklakah Kab. Malang (Rute Savana Jemplang)</option>
                  </select>
                </div>

                {/* Select Package Type */}
                <div>
                  <label className="block text-xs font-bold text-[#102a56] mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#3d72fe]" />
                    Jenis Paket Liburan
                  </label>
                  <select
                    value={selectedCat}
                    onChange={(e) => setSelectedCat(e.target.value as TripCategory)}
                    className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111318] focus:outline-none focus:border-[#3d72fe] focus:bg-white transition-colors"
                  >
                    <option value="all">Semua Jenis Paket</option>
                    <option value="open_trip">Open Trip (Sharing Hemat per Orang)</option>
                    <option value="private_trip">Private Trip (1 Rombongan Eksklusif)</option>
                    <option value="picnic">Paket Piknik Bromo (Luxury Breakfast Savana)</option>
                    <option value="trail">Paket Sewa Trail Sukapura (Dirt Bike Adventure)</option>
                  </select>
                </div>

                {/* Benefits Quick List */}
                <div className="pt-2 pb-2 space-y-1.5 sm:space-y-2 text-xs text-[#102a56]/80 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sudah Termasuk Tiket TNBTS & Asuransi Resmi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3d72fe] shrink-0" />
                    <span>Jeep 4x4 Toyota Land Cruiser Hardtop Terawat</span>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  type="button"
                  onClick={handleApplyFilter}
                  className="w-full py-3 text-xs sm:text-sm font-bold text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-xl transition-all shadow-md shadow-[#3d72fe]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Compass className="w-4 h-4" />
                  <span>Tampilkan Paket Pilihan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
