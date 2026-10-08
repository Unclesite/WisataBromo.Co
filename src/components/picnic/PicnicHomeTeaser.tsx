import React from 'react';
import { Sparkles, Utensils, ArrowRight, CheckCircle2, ShieldCheck, Heart, Coffee } from 'lucide-react';
import imgPicnicSavana from '../../assets/images/bromo_picnic_experience_aesthetic.png';

interface PicnicHomeTeaserProps {
  onOpenPicnicPage: () => void;
}

export const PicnicHomeTeaser: React.FC<PicnicHomeTeaserProps> = ({ onOpenPicnicPage }) => {
  return (
    <section id="picnic-teaser" className="py-10 sm:py-14 bg-gradient-to-b from-[#F4FAFF] to-[#EAF6FF] border-t border-b border-[#DCEAF5] text-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Promotional Teaser Banner */}
        <div className="bg-white rounded-3xl border border-[#DCEAF5] shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Image Side */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] overflow-hidden group">
              <img
                src={imgPicnicSavana}
                alt="Picnic Experience Bromo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/85 via-[#071A2B]/25 to-transparent lg:hidden" />
              
              {/* Badges Over Image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1.5 rounded-full bg-[#071A2B]/90 backdrop-blur-md text-[#FFF700] text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 w-fit">
                  <Sparkles className="w-3.5 h-3.5 fill-[#FFF700]" />
                  PICNIC EXPERIENCE
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0996F5] text-white text-[11px] font-bold shadow-md w-fit">
                  Mulai Rp 75.000 / pax
                </span>
              </div>

              {/* Bottom Overlay on Mobile */}
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <div className="text-lg font-black">View Bromo &amp; Widodaren</div>
                <div className="text-xs text-white/90">Setup Meja Rustic &amp; Butler Service</div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Header Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] border border-[#0996F5]/20 text-[#0996F5] text-xs font-black uppercase tracking-wider mb-3">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>EXCLUSIVE OUTDOOR DINING</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] tracking-tight mb-3">
                  Picnic Experience Bromo
                </h2>

                <p className="text-sm sm:text-base font-semibold text-[#0996F5] mb-2">
                  Private Picnic dengan view Gunung Bromo
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm lg:text-base text-[#526273] leading-relaxed mb-6">
                  Nikmati pengalaman bersantap istimewa di tengah panorama megah kaldera Bromo. Dilengkapi dengan meja kayu rustic bohemian, karpet nyaman, pilihan sajian hangat favorit, serta butler service ramah untuk kenyamanan momen Anda bersama keluarga &amp; sahabat.
                </p>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Aneka Pilihan Paket Kuliner Hangat</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Setup Meja Kayu Rustic &amp; Karpet Bohemian</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Spot Eksklusif View Bromo &amp; Widodaren</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Layanan Butler Khusus &amp; Peralatan Lengkap</span>
                  </div>
                </div>
              </div>

              {/* Call to Action Footer */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-[#526273] font-medium">Harga Pengalaman Piknik:</div>
                  <div className="text-lg sm:text-xl font-black text-[#0996F5] font-mono">
                    Mulai Rp 75.000 <span className="text-xs font-normal text-[#526273]">/ pax</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenPicnicPage}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#0996F5] hover:bg-[#071A2B] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-[#0996F5]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 group/btn"
                >
                  <span>Lihat Paket Picnic</span>
                  <ArrowRight className="w-4 h-4 text-[#FFF700] transition-transform group-hover/btn:translate-x-1" />
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

