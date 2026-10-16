import React from 'react';
import { Coffee, Check, ArrowRight, Flame, Bike, Sparkles } from 'lucide-react';
import { TourPackage } from '../types';

interface PicnicAndTrailSectionProps {
  onSelectPackage: (pkgId: string) => void;
  packages: TourPackage[];
  onOpenPicnic?: () => void;
}

export const PicnicAndTrailSection: React.FC<PicnicAndTrailSectionProps> = ({
  onSelectPackage,
  packages,
  onOpenPicnic,
}) => {
  const handleGoToPicnic = () => {
    if (onOpenPicnic) {
      onOpenPicnic();
    } else {
      window.location.href = '/picnic';
    }
  };
  return (
    <section id="piknik-dan-trail" className="py-14 sm:py-18 bg-[#e5f4ff] border-t border-b border-slate-200/90 text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs font-black text-[#0996f5] tracking-wider mb-2 uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#ffc928]" />
            <span>PENGALAMAN SPESIAL & VIRAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#111318] mb-3 text-balance">
            Paket Piknik Savana & Sewa Trail Sukapura
          </h2>
          <p className="text-[#111318]/75 text-xs sm:text-base leading-relaxed">
            Dua pengalaman paling diminati di Bromo: bersantai menikmati sarapan estetik di tengah hamparan hijau Savana Teletubbies atau menaklukkan lautan pasir vulkanik dengan motor trail bertenaga.
          </p>
        </div>

        {/* 2 Big Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Paket Piknik Bromo */}
          <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#0996f5] hover:shadow-2xl hover:shadow-[#0996f5]/10 transition-all duration-300">
            {/* Top Glow & Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0996f5]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              {/* Unboxed metadata line */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#0996f5] mb-3">
                <Sparkles className="w-4 h-4 text-[#FFF700] fill-[#FFF700]" />
                <span>OUTDOOR DINING KALDERA BROMO</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-[#111318]">8 PILIHAN MENU</span>
              </div>

              {/* Title Clickable */}
              <h3 
                onClick={handleGoToPicnic}
                role="button"
                tabIndex={0}
                className="text-xl sm:text-2xl font-black text-[#111318] group-hover:text-[#0996f5] transition-colors mb-2.5 sm:mb-3 cursor-pointer hover:underline"
              >
                Bromo Picnic Experience (8 Paket Pilihan)
              </h3>

              <p className="text-[#111318]/80 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                Rasakan kemewahan bersantap hangat di tengah panorama alam Bromo (View Bromo &amp; Widodaren). Tersedia Paket 1–4, BBQ Grill, Suki Shabu Tomyum, Paket Ngemie, hingga Ultimate Dining.
              </p>

              {/* Menu & Feature Highlights */}
              <div className="bg-[#e5f4ff]/80 border border-[#0996f5]/20 rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6 space-y-3">
                <div className="text-xs font-black text-[#111318] flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#0996f5]" />
                  <span>Highlight Pengalaman Piknik Bromo:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#111318]/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>8 Paket Pilihan: Ngemie, BBQ, Suki &amp; Paket 1-4</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Meja Kayu Rustic &amp; Karpet Bohemian</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Spot View Bromo &amp; Tebing Widodaren</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Pilihan Minuman Bebas &amp; Free Teh/Mineral</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Add-on Tenda Bell Tent &amp; Birthday Decor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Layanan Butler Khusus &amp; Booking Instan DP 30%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Mulai dari:</div>
                <div className="text-xl sm:text-2xl font-black text-[#0996f5] font-mono tabular-nums">
                  Rp 75.000 <span className="text-xs font-normal text-slate-600">/ pax (Paket Ngemie s/d Ultimate)</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoToPicnic}
                className="py-3 sm:py-3.5 px-5 text-xs sm:text-sm font-black text-white bg-[#0996f5] hover:bg-[#071A2B] rounded-xl transition-all shadow-md shadow-[#0996f5]/25 flex items-center gap-2 cursor-pointer active:scale-95 min-h-[44px]"
              >
                <span>Pilih 8 Paket Piknik</span>
                <ArrowRight className="w-4 h-4 text-[#FFF700]" />
              </button>
            </div>
          </div>

          {/* Card 2: Paket Sewa Trail Sukapura */}
          <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#ea0610] hover:shadow-2xl hover:shadow-[#ea0610]/10 transition-all duration-300">
            {/* Top Glow & Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea0610]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              {/* Unboxed metadata line */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#ea0610] mb-3">
                <Flame className="w-4 h-4 text-[#ea0610]" />
                <span>START BASECAMP SUKAPURA PROBOLINGGO</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>DIRT BIKE ADVENTURE</span>
              </div>

              {/* Title Clickable */}
              <h3 
                onClick={() => onSelectPackage('paket-sewa-trail-sukapura')}
                role="button"
                tabIndex={0}
                className="text-xl sm:text-2xl font-black text-[#111318] group-hover:text-[#ea0610] transition-colors mb-2.5 sm:mb-3 cursor-pointer hover:underline"
              >
                Paket Sewa Trail Start Sukapura
              </h3>

              <p className="text-[#111318]/80 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                Pacu adrenalin melibas Lautan Pasir Berbisik dan lereng Tebing Widodaren dengan motor trail siap tempur. Didampingi Marshall lokal Tengger yang hafal seluk-beluk pasir kaldera.
              </p>

              {/* Specs & Included Gear */}
              <div className="bg-rose-50/70 border border-[#ea0610]/20 rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6 space-y-3">
                <div className="text-xs font-black text-[#111318] flex items-center gap-2">
                  <Bike className="w-4 h-4 text-[#ea0610]" />
                  <span>Armada Prima & Safety Gear Lengkap:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#111318]/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Honda CRF 150L / KLX 150 / WR 155R</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Helm Cross SNI/DOT + Kacamata Goggle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Deker Pelindung Lutut & Siku (Body Armor)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>BBM Full Tank Saat Berangkat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Guide / Marshall Pemandu Rute Lautan Pasir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Jersey Trail Eksklusif (Dipinjamkan)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Harga Sewa:</div>
                <div className="text-xl sm:text-2xl font-black text-[#ea0610] font-mono tabular-nums">
                  Rp 450.000 <span className="text-xs font-normal text-slate-600">/ unit (Half Day 4 Jam)</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectPackage('paket-sewa-trail-sukapura')}
                className="py-3 sm:py-3.5 px-5 text-xs sm:text-sm font-black text-white bg-[#ea0610] hover:bg-[#c8050e] rounded-xl transition-all shadow-md shadow-[#ea0610]/25 flex items-center gap-2 cursor-pointer active:scale-95 min-h-[44px]"
              >
                <span>Lihat Detail Trail</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
