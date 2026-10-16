import React from 'react';
import { Sparkles, Utensils, ArrowRight, CheckCircle2, ShieldCheck, Heart, Coffee, Star, MapPin, Camera, Flame } from 'lucide-react';
import imgPicnicSavana from '../../assets/images/bromo_picnic_experience_aesthetic.png';
import imgPicnicSavanaAlt from '../../assets/images/bromo_picnic_savana_1790773999908.jpg';
import imgWidodaren from '../../assets/images/bromo_widodaren_cliff_1790774506404.jpg';
import imgGoldenHour from '../../assets/images/bromo_golden_hour_1790774487968.jpg';

interface PicnicHomeTeaserProps {
  onOpenPicnicPage: () => void;
}

export const PicnicHomeTeaser: React.FC<PicnicHomeTeaserProps> = ({ onOpenPicnicPage }) => {
  return (
    <section id="picnic-teaser" className="py-12 sm:py-16 bg-[#071A2B] text-white relative overflow-hidden border-t-4 border-[#0996F5]">
      {/* Background ambient lighting effects for high-contrast visual appeal */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0996F5]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FFF700]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eye-catching Section Header Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF700] text-[#071A2B] text-xs font-black uppercase tracking-wider shadow-md">
              <Flame className="w-4 h-4 fill-[#071A2B]" />
              TRENDING POPULER 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#0996F5] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FFF700] fill-[#FFF700]" />
              EXCLUSIVE OUTDOOR DINING
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
            <div className="flex items-center text-amber-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span>4.9 / 5.0 (920+ Ulasan Puas)</span>
          </div>
        </div>

        {/* Hero Photo Banner Card */}
        <div className="bg-gradient-to-br from-[#0c2338] via-[#091b2c] to-[#061422] rounded-3xl border-2 border-[#0996F5]/40 shadow-2xl overflow-hidden hover:border-[#0996F5] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Photo Showcase: 7 Columns on Desktop */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] overflow-hidden group">
              {/* Primary Panoramic Background Image */}
              <img
                src={imgPicnicSavana}
                alt="Bromo Picnic Experience - Meja Rustic Kaldera Bromo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#071A2B]/30 lg:to-[#071A2B]" />
              
              {/* Floating Aesthetic Photo Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-[#071A2B]/90 backdrop-blur-md text-[#FFF700] text-xs font-black uppercase tracking-wider border border-white/20 shadow-lg flex items-center gap-1.5 w-fit">
                  <Camera className="w-3.5 h-3.5 text-[#FFF700]" />
                  AESTHETIC BOHEMIAN SETUP
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#0996F5] text-white text-xs font-black tracking-wide shadow-lg flex items-center gap-1.5 w-fit">
                  <MapPin className="w-3.5 h-3.5" />
                  Spot Savana &amp; Lembah Widodaren
                </span>
              </div>

              {/* Floating Secondary Mini Photo Inset Cards */}
              <div className="hidden sm:flex absolute bottom-5 left-5 right-5 items-center gap-3 z-10">
                <div className="bg-[#071A2B]/90 backdrop-blur-md border border-white/20 rounded-2xl p-2.5 flex items-center gap-3 shadow-xl">
                  <img
                    src={imgGoldenHour}
                    alt="Breakfast view golden hour"
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-white/20"
                  />
                  <div>
                    <div className="text-xs font-black text-white">Golden Hour Dining</div>
                    <div className="text-[11px] text-slate-300">Sarapan hangat di atas awan</div>
                  </div>
                </div>

                <div className="bg-[#071A2B]/90 backdrop-blur-md border border-white/20 rounded-2xl p-2.5 flex items-center gap-3 shadow-xl">
                  <img
                    src={imgWidodaren}
                    alt="Panorama Tebing Widodaren"
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-white/20"
                  />
                  <div>
                    <div className="text-xs font-black text-[#FFF700]">8 Pilihan Menu</div>
                    <div className="text-[11px] text-slate-300">BBQ, Rawon, Steamboat, dll</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Action Side: 5 Columns on Desktop */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#071A2B]/95 lg:bg-transparent">
              <div>
                {/* Title Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0996F5]/20 border border-[#0996F5]/40 text-[#0996F5] text-xs font-black uppercase tracking-wider mb-3">
                  <Utensils className="w-3.5 h-3.5 text-[#FFF700]" />
                  <span>PREMIUM PICNIC SERVICE</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3 leading-tight">
                  Bromo Picnic Experience
                </h2>

                <p className="text-sm sm:text-base font-bold text-[#FFF700] mb-3">
                  Santap Mewah &amp; Estetik di Tengah Kaldera Bromo
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Sensasi bersantap istimewa beralaskan karpet bohemian, meja kayu rustic rendah, bantal duduk nyaman, dan sajian kuliner hangat lezat berlatar tebing Widodaren dan megahnya Gunung Bromo.
                </p>

                {/* Benefit Items */}
                <div className="space-y-3 mb-6 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Meja Kayu Rustic &amp; Dekorasi Karpet Bohemian</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>8 Varian Menu (Rawon, BBQ, Steamboat, Nasi Campur)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Flow Teh Hangat, Kopi &amp; Air Mineral</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Private Butler Service &amp; Peralatan Makan Lengkap</span>
                  </div>
                </div>
              </div>

              {/* Price & CTA Area */}
              <div className="pt-4 border-t border-white/15 flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                      Biaya Pengalaman Piknik
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#FFF700] font-mono">
                      Mulai Rp 75.000 <span className="text-xs font-normal text-slate-300">/ pax</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                      Min. 4 Pax
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenPicnicPage}
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#0996F5] to-[#007cdb] hover:from-[#FFF700] hover:to-[#ffd500] text-white hover:text-[#071A2B] font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-[#0996F5]/40 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 group/btn border border-white/20"
                >
                  <span>Lihat 8 Paket &amp; Menu Picnic Selengkapnya</span>
                  <ArrowRight className="w-5 h-5 text-[#FFF700] group-hover/btn:text-[#071A2B] group-hover/btn:translate-x-1.5 transition-all" />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Convenient alias matching user specification
export const PicnicBanner = PicnicHomeTeaser;

