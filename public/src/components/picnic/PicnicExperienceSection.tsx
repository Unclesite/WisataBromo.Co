import React from 'react';
import { Sparkles, Utensils, MapPin, Coffee, AlertTriangle, ShieldCheck, Heart } from 'lucide-react';
import { PICNIC_PACKAGES, PICNIC_LOCATIONS } from '../../data/picnicData';
import { PicnicPackage } from '../../types/picnic';
import { PackageGrid } from './PackageGrid';

interface PicnicExperienceSectionProps {
  onSelectPackage: (pkg: PicnicPackage) => void;
  onOpenJeepBooking?: () => void;
}

export const PicnicExperienceSection: React.FC<PicnicExperienceSectionProps> = ({
  onSelectPackage,
  onOpenJeepBooking
}) => {
  return (
    <section id="picnic-experience" className="py-14 sm:py-20 bg-[#F4FAFF] border-t border-b border-[#DCEAF5] text-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0996F5]/20 text-[#0996F5] text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#FFF700] fill-[#FFF700]" />
            <span>EXCLUSIVE OUTDOOR DINING EXPERIENCE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1220] tracking-tight mb-3 text-balance">
            Bromo Picnic Experience
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-[#526273] leading-relaxed max-w-2xl mx-auto text-balance">
            Rasakan kemewahan bersantap hangat di tengah panorama kaldera Bromo dengan dekorasi bohemian rustic, set meja makan kayu estetik, dan sajian kuliner lezat yang disiapkan khusus untuk rombongan Anda.
          </p>

          {/* Strict Separation Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs font-semibold">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Layanan khusus makanan &amp; properti piknik. Harga belum termasuk armada Jeep menuju lokasi.</span>
            {onOpenJeepBooking && (
              <button
                type="button"
                onClick={onOpenJeepBooking}
                className="underline hover:text-amber-950 font-bold ml-1 cursor-pointer"
              >
                Tambah Sewa Jeep &rarr;
              </button>
            )}
          </div>
        </div>

        {/* 8 Packages Grid with Filter Tabs */}
        <PackageGrid
          packages={PICNIC_PACKAGES}
          onSelectPackage={onSelectPackage}
        />

        {/* Feature Highlights Banner */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#DCEAF5] flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#0996F5] flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5 text-[#0996F5]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-[#0B1220]">Menu Hangat &amp; Higienis</div>
              <div className="text-[11px] text-[#526273]">Dimasak &amp; disajikan fresh di lokasi trip</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#DCEAF5] flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#0996F5] flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-[#0996F5]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-[#0B1220]">Set Properti Aesthetic</div>
              <div className="text-[11px] text-[#526273]">Karpet tribal, bantal empuk &amp; meja rustic</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#DCEAF5] flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#0996F5] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-[#0B1220]">Crew Butler Berpengalaman</div>
              <div className="text-[11px] text-[#526273]">Membantu penyajian &amp; dokumentasi foto rombongan</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
