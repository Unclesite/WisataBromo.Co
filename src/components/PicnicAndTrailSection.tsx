import React from 'react';
import { Coffee, Compass, Camera, Sparkles, Check, ArrowRight, ShieldCheck, Flame, Bike } from 'lucide-react';
import { TourPackage } from '../types';

interface PicnicAndTrailSectionProps {
  onSelectPackage: (pkgId: string) => void;
  packages: TourPackage[];
}

export const PicnicAndTrailSection: React.FC<PicnicAndTrailSectionProps> = ({
  onSelectPackage,
  packages,
}) => {
  return (
    <section id="piknik-dan-trail" className="py-18 bg-[#eaf2ff] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-extrabold text-[#3d72fe] tracking-wider mb-2 uppercase">
            PENGALAMAN SPESIAL & VIRAL
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#102a56] mb-3 text-balance">
            Paket Piknik Savana & Sewa Trail Sukapura
          </h2>
          <p className="text-[#111318]/75 text-sm sm:text-base leading-relaxed">
            Dua pengalaman paling diminati di Bromo: bersantai menikmati sarapan estetik di tengah hamparan hijau Savana Teletubbies atau menaklukkan lautan pasir vulkanik dengan motor trail bertenaga.
          </p>
        </div>

        {/* 2 Big Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Paket Piknik Bromo */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#3d72fe] hover:shadow-2xl hover:shadow-[#3d72fe]/10 transition-all duration-300">
            {/* Top Glow & Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc928]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              {/* Unboxed metadata line */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#3d72fe] mb-3">
                <Sparkles className="w-4 h-4 text-[#ffc928]" />
                <span>SAVANA BUKIT TELETUBBIES</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-[#102a56]">AESTHETIC & ROMANTIC</span>
              </div>

              {/* Title Clickable */}
              <h3 
                onClick={() => onSelectPackage('paket-piknik-bromo')}
                role="button"
                tabIndex={0}
                className="text-2xl font-extrabold text-[#102a56] group-hover:text-[#3d72fe] transition-colors mb-3 cursor-pointer hover:underline"
              >
                Paket Piknik Bromo Savana
              </h3>

              <p className="text-[#111318]/80 text-sm leading-relaxed mb-6">
                Rasakan kemewahan sarapan bertema bohemian rustic dengan latar belakang perbukitan hijau Teletubbies yang segar dan sejuk. Lengkap dengan properti estetik dan fotografer profesional.
              </p>

              {/* Menu & Feature Highlights */}
              <div className="bg-[#eaf2ff]/70 border border-[#3d72fe]/20 rounded-2xl p-5 mb-6 space-y-3">
                <div className="text-xs font-bold text-[#102a56] flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#3d72fe]" />
                  <span>Sajian Menu & Dekorasi Mewah:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#111318]/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Meja Kayu Jati Rustic & Karpet Rajut</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Bantal Duduk & Buket Edelweiss</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Fresh Butter Croissant & Buah Segar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Nasi Bakar Rempah Wangi Daun Jeruk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Artisan Drip Coffee & Teh Hangat Tengger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Fotografer Profesional (Foto & Reels)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Mulai dari:</div>
                <div className="text-2xl font-black text-[#102a56] font-mono tabular-nums">
                  Rp 750.000 <span className="text-xs font-normal text-slate-600">/ orang (Min 2 pax)</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectPackage('paket-piknik-bromo')}
                className="py-3 px-5 text-xs font-bold text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-xl transition-all shadow-md shadow-[#3d72fe]/20 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Lihat Detail Piknik</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Paket Sewa Trail Sukapura */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#ea0610] hover:shadow-2xl hover:shadow-[#ea0610]/10 transition-all duration-300">
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
                className="text-2xl font-extrabold text-[#102a56] group-hover:text-[#ea0610] transition-colors mb-3 cursor-pointer hover:underline"
              >
                Paket Sewa Trail Start Sukapura
              </h3>

              <p className="text-[#111318]/80 text-sm leading-relaxed mb-6">
                Pacu adrenalin melibas Lautan Pasir Berbisik dan lereng Tebing Widodaren dengan motor trail siap tempur. Didampingi Marshall lokal Tengger yang hafal seluk-beluk pasir kaldera.
              </p>

              {/* Specs & Included Gear */}
              <div className="bg-rose-50/60 border border-[#ea0610]/20 rounded-2xl p-5 mb-6 space-y-3">
                <div className="text-xs font-bold text-[#102a56] flex items-center gap-2">
                  <Bike className="w-4 h-4 text-[#ea0610]" />
                  <span>Armada Prima & Safety Gear Lengkap:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#111318]/90">
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
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Harga Sewa:</div>
                <div className="text-2xl font-black text-[#102a56] font-mono tabular-nums">
                  Rp 450.000 <span className="text-xs font-normal text-slate-600">/ unit (Half Day 4 Jam)</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectPackage('paket-sewa-trail-sukapura')}
                className="py-3 px-5 text-xs font-bold text-white bg-[#ea0610] hover:bg-[#c8050e] rounded-xl transition-all shadow-md shadow-[#ea0610]/20 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Lihat Detail Trail</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
