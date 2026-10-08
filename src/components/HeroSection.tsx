import React, { useState } from 'react';
import { 
  MapPin, Calendar, Users, Search, Minus, Plus, 
  Mountain, Car, Bike, Award, ShieldCheck, FileText, CheckCircle2, Flame
} from 'lucide-react';
import { StartCity, TripCategory } from '../types';
import { BromoHeroSlider } from './BromoHeroSlider';
import { WeatherData } from '../services/weatherService';
import { TnbtsStatusData } from '../services/tnbtsStatusService';

interface HeroSectionProps {
  onSearch: (city: StartCity, category: TripCategory) => void;
  onOpenBooking: () => void;
  onExplorePackages: () => void;
  onOpenLiveStatus?: () => void;
  weather?: WeatherData;
  tnbtsStatus?: TnbtsStatusData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onOpenBooking,
  onExplorePackages,
  onOpenLiveStatus,
  weather,
  tnbtsStatus,
}) => {
  const [selectedCity, setSelectedCity] = useState<StartCity>('all');
  const [selectedCat, setSelectedCat] = useState<TripCategory>('open_trip');
  const [paxCount, setPaxCount] = useState<number>(2);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];
  const [tripDate, setTripDate] = useState<string>(defaultDateStr);

  const handleApplyFilter = () => {
    onSearch(selectedCity, selectedCat);
    const element = document.getElementById('paket-wisata');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const updatePax = (delta: number) => {
    setPaxCount((prev) => Math.max(0, Math.min(50, prev + delta)));
  };

  return (
    <div className="relative w-full bg-[#ffffff] text-[#0B1220]">
      {/* 1. Full-Bleed Edge-to-Edge Hero Slider (Tanpa Pembatas Kanan Kiri) */}
      <div className="w-full">
        <BromoHeroSlider 
          onOpenBooking={onOpenBooking} 
          onExplorePackages={onExplorePackages} 
        />
      </div>

      {/* 2. Traveloka-Style Floating Search & Reservation Engine */}
      <div className="relative z-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 -mt-12 sm:-mt-6 md:-mt-10 lg:-mt-14 pb-10">
        <div className="bg-[#ffffff] rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xl shadow-[#071A2B]/20 overflow-hidden">
          
          {/* Live TNBTS Operational & Meteorological Strip */}
          <div className="bg-[#071A2B] text-white px-3 sm:px-5 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs border-b border-[#0d2a45]">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-extrabold text-emerald-400 uppercase text-[11px] sm:text-xs">
                STATUS BROMO : {tnbtsStatus?.statusBadge || 'BUKA NORMAL'}
              </span>
              <span className="text-white/60 hidden sm:inline">· PVMBG {tnbtsStatus?.pvmbgLevel || 'Level II (Waspada)'}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-white/90 text-[11px] sm:text-xs">
                <span className="text-slate-300">Live Cuaca:</span>
                <strong className="text-[#FFF700] font-mono tabular-nums">{weather?.temperature ?? 12}°C</strong>
                <span className="text-slate-300 hidden md:inline">({weather?.conditionText || 'Cerah Berawan'})</span>
              </div>
              {onOpenLiveStatus && (
                <button
                  type="button"
                  onClick={onOpenLiveStatus}
                  className="px-2.5 py-0.5 bg-white/10 hover:bg-white/20 text-[#FFF700] hover:text-white rounded-lg font-bold text-[10px] sm:text-[11px] transition-colors cursor-pointer border border-white/20 flex items-center gap-1"
                >
                  <span>Cek Cuaca & Status</span>
                  <span>&rarr;</span>
                </button>
              )}
            </div>
          </div>

          {/* Top OTA Category Tabs (Terbagi Rata 4 Kolom Proporsional, Estetik & Responsif) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 p-2 sm:p-2.5 bg-[#EAF6FF] border-b border-slate-200/80">
            <button
              type="button"
              onClick={() => setSelectedCat('open_trip')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer min-h-[44px] text-center w-full ${
                selectedCat === 'open_trip'
                  ? 'bg-[#0996F5] text-white shadow-md shadow-[#0996F5]/25'
                  : 'text-[#0B1220] hover:bg-white/80 bg-white/40'
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Open Trip (Sharing)</span>
              <span className="inline sm:hidden">Open Trip</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCat('private_trip')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer min-h-[44px] text-center w-full ${
                selectedCat === 'private_trip'
                  ? 'bg-[#0996F5] text-white shadow-md shadow-[#0996F5]/25'
                  : 'text-[#0B1220] hover:bg-white/80 bg-white/40'
              }`}
            >
              <Car className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Private Jeep FJ40</span>
              <span className="inline sm:hidden">Private Jeep</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCat('long_jeep')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer min-h-[44px] text-center w-full ${
                selectedCat === 'long_jeep'
                  ? 'bg-[#0996F5] text-white shadow-md shadow-[#0996F5]/25'
                  : 'text-[#0B1220] hover:bg-white/80 bg-white/40'
              }`}
            >
              <Mountain className="w-4 h-4 shrink-0" />
              <span>Long Jeep (9 Pax)</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCat('trail')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer min-h-[44px] text-center w-full ${
                selectedCat === 'trail'
                  ? 'bg-[#ea0610] text-white shadow-md shadow-[#ea0610]/25'
                  : 'text-[#0B1220] hover:bg-white/80 bg-white/40'
              }`}
            >
              <Bike className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Sewa Trail Sukapura</span>
              <span className="inline sm:hidden">Sewa Trail</span>
            </button>
          </div>

          {/* 4 Interactive Search Inputs Row (Mathematically 12 Columns on LG: 4 + 3 + 2 + 3 = 12) */}
          <div className="p-4 sm:p-6 lg:p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
            
            {/* Field 1: Departure Location / City (4 Cols out of 12) */}
            <div className="md:col-span-1 lg:col-span-4 p-3 sm:p-3.5 bg-[#EAF6FF]/60 border border-slate-200 hover:border-[#0996F5] rounded-2xl transition-colors flex flex-col justify-between">
              <label className="block text-[11px] font-extrabold text-[#0996F5] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0996F5] shrink-0" />
                <span>Titik Start / Penjemputan</span>
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value as StartCity)}
                className="w-full bg-transparent font-bold text-xs sm:text-sm text-[#0B1220] focus:outline-none cursor-pointer py-1"
              >
                <option value="all">Semua Titik (Paling Fleksibel)</option>
                <option value="malang">Kota Malang (Stasiun / Hotel / Rumah)</option>
                <option value="surabaya">Kota Surabaya (Pasar Turi / Juanda / Tol)</option>
                <option value="batu">Kota Wisata Batu (Seluruh Hotel & Villa)</option>
                <option value="sukapura">Sukapura Probolinggo (Pintu Utama Bromo)</option>
                <option value="tosari">Tosari Pasuruan (Akses Wonokitri & Tol)</option>
                <option value="gubugklakah">Gubugklakah Malang (Rute Savana Jemplang)</option>
              </select>
            </div>

            {/* Field 2: Trip Date (3 Cols out of 12) */}
            <div className="md:col-span-1 lg:col-span-3 p-3 sm:p-3.5 bg-[#EAF6FF]/60 border border-slate-200 hover:border-[#0996F5] rounded-2xl transition-colors flex flex-col justify-between">
              <label className="block text-[11px] font-extrabold text-[#0996F5] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#0996F5] shrink-0" />
                <span>Rencana Tanggal Trip</span>
              </label>
              <input
                type="date"
                value={tripDate}
                onChange={(e) => setTripDate(e.target.value)}
                className="w-full bg-transparent font-bold text-xs sm:text-sm text-[#0B1220] focus:outline-none cursor-pointer font-mono py-1"
              />
            </div>

            {/* Field 3: Pax Count Stepper (2 Cols out of 12) */}
            <div className="md:col-span-1 lg:col-span-2 p-3 sm:p-3.5 bg-[#EAF6FF]/60 border border-slate-200 hover:border-[#0996F5] rounded-2xl transition-colors flex flex-col justify-between">
              <label className="block text-[11px] font-extrabold text-[#0996F5] uppercase tracking-wider mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1.5 truncate">
                  <Users className="w-3.5 h-3.5 text-[#0996F5] shrink-0" />
                  <span className="truncate">Jumlah Tamu</span>
                </span>
                <span className="text-[10px] text-slate-500 font-normal shrink-0">Orang</span>
              </label>
              <div className="flex items-center justify-between gap-1 py-0.5">
                <button
                  type="button"
                  onClick={() => updatePax(-1)}
                  disabled={paxCount <= 0}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors cursor-pointer shrink-0 ${
                    paxCount <= 0 
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                      : 'bg-white text-[#0B1220] hover:bg-[#0996F5] hover:text-white shadow-xs'
                  }`}
                  aria-label="Kurangi tamu"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono font-black text-sm text-[#0B1220] tabular-nums whitespace-nowrap px-1 text-center">
                  {paxCount} {selectedCat === 'trail' ? 'Motor' : 'Pax'}
                </span>
                <button
                  type="button"
                  onClick={() => updatePax(1)}
                  className="w-8 h-8 rounded-lg bg-[#0996F5] text-white hover:bg-[#071A2B] flex items-center justify-center font-bold text-xs shadow-xs transition-colors cursor-pointer shrink-0"
                  aria-label="Tambah tamu"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Field 4: Search & Check Prices Action (3 Cols out of 12) */}
            <div className="md:col-span-1 lg:col-span-3 flex items-stretch">
              <button
                type="button"
                onClick={handleApplyFilter}
                className="w-full py-3.5 sm:py-4 px-4 text-xs sm:text-sm font-black text-white bg-[#0996F5] hover:bg-[#071A2B] rounded-2xl shadow-lg shadow-[#0996F5]/30 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 group min-h-[52px]"
              >
                <Search className="w-4 h-4 text-[#FFF700] group-hover:scale-110 transition-transform shrink-0" />
                <span className="whitespace-nowrap">Cari Paket & Harga</span>
              </button>
            </div>
          </div>

          {/* Quick Filter Pill Shortcuts & Promo Notice */}
          <div className="px-4 sm:px-6 py-3 bg-[#ffffff] border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[#0B1220]/75">
              <span className="font-bold text-[#0B1220]">Pencarian Populer:</span>
              <button
                onClick={() => { setSelectedCity('malang'); setSelectedCat('open_trip'); handleApplyFilter(); }}
                className="px-2.5 py-1 bg-[#EAF6FF] hover:bg-[#0996F5] hover:text-white text-[#0996F5] rounded-lg text-[11px] font-bold transition-colors cursor-pointer"
              >
                Open Trip Malang (Rp 275rb)
              </button>
              <button
                onClick={() => { setSelectedCity('surabaya'); setSelectedCat('open_trip'); handleApplyFilter(); }}
                className="px-2.5 py-1 bg-[#EAF6FF] hover:bg-[#0996F5] hover:text-white text-[#0996F5] rounded-lg text-[11px] font-bold transition-colors cursor-pointer"
              >
                Open Trip Surabaya (Tol)
              </button>
              <button
                onClick={() => { setSelectedCity('tosari'); setSelectedCat('private_trip'); handleApplyFilter(); }}
                className="px-2.5 py-1 bg-[#EAF6FF] hover:bg-[#0996F5] hover:text-white text-[#0996F5] rounded-lg text-[11px] font-bold transition-colors cursor-pointer"
              >
                Sewa Jeep Tosari
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#ea0610]">
              <Flame className="w-3.5 h-3.5 text-[#ea0610]" />
              <span>Promo Musim Ini Diskon s.d 25%!</span>
            </div>
          </div>
        </div>

        {/* 3. Traveloka / OTA Grade Trust & Credibility Strip (Mobile-Friendly Clean F-Pattern) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <div className="p-3.5 sm:p-4 bg-[#EAF6FF]/70 border border-[#0996F5]/20 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0996F5] text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#FFF700]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-black text-xs sm:text-sm text-[#0B1220]">Operator Resmi TNBTS</div>
              <div className="text-[11px] text-slate-600">Izin resmi Taman Nasional</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-[#EAF6FF]/70 border border-[#0996F5]/20 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0996F5] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Award className="w-5 h-5 text-[#FFF700]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-black text-xs sm:text-sm text-[#0B1220]">Standar Delegasi VVIP</div>
              <div className="text-[11px] text-slate-600">Mitra Kemnaker & Kemenhut RI</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-[#EAF6FF]/70 border border-[#0996F5]/20 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0996F5] text-white flex items-center justify-center shrink-0 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-black text-xs sm:text-sm text-[#0B1220]">1 Pax Pasti Berangkat</div>
              <div className="text-[11px] text-slate-600">Jadwal trip harian dijamin</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-[#EAF6FF]/70 border border-[#0996F5]/20 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0996F5] text-white flex items-center justify-center shrink-0 shadow-xs">
              <FileText className="w-5 h-5 text-[#FFF700]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-black text-xs sm:text-sm text-[#0B1220]">Invoice PDF & E-Tiket</div>
              <div className="text-[11px] text-slate-600">Konfirmasi otomatis ke WA & Email</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
