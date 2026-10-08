import React from 'react';
import { Sparkles, Users, ArrowRight, Check } from 'lucide-react';
import { PicnicPackage } from '../../types/picnic';
import { formatRupiah } from '../../utils/picnicPricingEngine';

interface PackageCardProps {
  packageItem: PicnicPackage;
  onSelect: (pkg: PicnicPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ packageItem, onSelect }) => {
  return (
    <div className="bg-[#ffffff] border border-[#DCEAF5] hover:border-[#0996F5] rounded-3xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#0996F5]/10 overflow-hidden group h-full">
      <div className="flex flex-col flex-1">
        {/* Photo Header */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 shrink-0">
          <img
            src={packageItem.imageUrl}
            alt={packageItem.name}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 border border-white/20">
              <Users className="w-3 h-3 text-[#FFF700]" />
              <span>Mulai {packageItem.minPax} pax</span>
            </span>

            {packageItem.badge && (
              <span className="text-[11px] font-black px-2.5 py-1 rounded-lg backdrop-blur-md shadow-xs bg-[#FFF700] text-[#071A2B]">
                {packageItem.badge}
              </span>
            )}
          </div>

          {/* Type Badge on Bottom of Image */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white">
            <span className="font-semibold text-[11px] bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-md capitalize">
              {packageItem.type === 'selectable' ? 'Menu Pilihan (Custom)' : 'Menu Paket Lengkap'}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 pb-4 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#0B1220] group-hover:text-[#0996F5] transition-colors mb-1.5 leading-snug">
              {packageItem.name}
            </h3>

            <p className="text-xs text-[#526273] line-clamp-2 min-h-[2rem] mb-3.5 leading-relaxed">
              {packageItem.shortDescription}
            </p>
          </div>

          {/* Price Block */}
          <div className="p-3.5 bg-[#EAF6FF]/70 border border-[#DCEAF5] rounded-2xl mb-4 space-y-1">
            <div className="text-[10px] font-bold text-[#526273] uppercase tracking-wider">
              Harga per Peserta
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-black text-[#0996F5] font-mono tabular-nums leading-none tracking-tight">
                {formatRupiah(packageItem.pricePerPax)}
              </span>
              <span className="text-xs font-bold text-[#526273]">
                / pax
              </span>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-1.5 mb-2">
            <div className="text-[11px] font-bold text-[#0B1220] uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#0996F5]" />
              <span>Komposisi Paket:</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {packageItem.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-[#0B1220]">
                  <Check className="w-3.5 h-3.5 text-[#0996F5] shrink-0" />
                  <span className="truncate">{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="p-4 sm:p-5 pt-3 bg-[#F4FAFF] border-t border-[#DCEAF5]">
        <button
          type="button"
          onClick={() => onSelect(packageItem)}
          className="w-full py-3 px-4 text-xs font-black text-white bg-[#0996F5] hover:bg-[#071A2B] rounded-xl transition-all shadow-md shadow-[#0996F5]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95 min-h-[44px]"
        >
          <span>Pilih Paket</span>
          <ArrowRight className="w-3.5 h-3.5 text-white" />
        </button>
      </div>
    </div>
  );
};
