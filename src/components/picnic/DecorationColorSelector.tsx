import React from 'react';
import { Check, Sparkles, Palette } from 'lucide-react';
import { PicnicDecorationOption } from '../../types/picnic';
import { PICNIC_DECORATION_OPTIONS } from '../../data/picnicData';

interface DecorationColorSelectorProps {
  selectedColor: string;
  onSelectColor: (colorName: string) => void;
  decorations?: PicnicDecorationOption[];
}

export const DecorationColorSelector: React.FC<DecorationColorSelectorProps> = ({
  selectedColor,
  onSelectColor,
  decorations = PICNIC_DECORATION_OPTIONS
}) => {
  return (
    <div className="space-y-4">
      {/* Informative Subheader */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0996F5] bg-[#EAF6FF] px-3 py-1 rounded-full border border-[#0996F5]/20">
          <Palette className="w-3.5 h-3.5" />
          <span>Tema &amp; Warna Karpet Gelaran Piknik</span>
        </div>
        <span className="text-[11px] text-slate-500 font-medium">
          Pilihan Aktif: <strong className="text-[#071A2B] font-bold">{selectedColor || 'Coklat Putih'}</strong>
        </span>
      </div>

      {/* Responsive Cards: 2 Columns on Mobile, 3 Columns on Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {decorations.map((item) => {
          const isSelected = selectedColor === item.name;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectColor(item.name)}
              className={`group relative text-left rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col justify-between cursor-pointer focus:outline-none ${
                isSelected
                  ? 'border-[#0996F5] ring-2 ring-[#0996F5]/40 bg-[#EAF6FF]/30 shadow-md scale-[1.01]'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              {/* Photo Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Selection Checkmark Badge */}
                <div className="absolute top-2.5 right-2.5 z-10">
                  {isSelected ? (
                    <span className="w-6 h-6 rounded-full bg-[#0996F5] text-white flex items-center justify-center shadow-md ring-2 ring-white">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  ) : (
                    <span className="w-6 h-6 rounded-full bg-black/40 backdrop-blur-xs border border-white/40 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                      <span className="w-2 h-2 rounded-full bg-white/70" />
                    </span>
                  )}
                </div>

                {/* Color Theme Mini Pill */}
                <div className="absolute bottom-2 left-2 z-10">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider backdrop-blur-md bg-black/60 text-white border border-white/20">
                    {item.themeColor}
                  </span>
                </div>
              </div>

              {/* Card Label & Description */}
              <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between bg-inherit">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4
                      className={`text-xs sm:text-sm font-black transition-colors line-clamp-1 ${
                        isSelected ? 'text-[#0996F5]' : 'text-[#0B1220] group-hover:text-[#0996F5]'
                      }`}
                    >
                      {item.name}
                    </h4>
                  </div>
                  {item.description && (
                    <p className="text-[11px] text-slate-500 line-clamp-1 leading-snug">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Status Indicator */}
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span
                    className={`font-bold ${
                      isSelected ? 'text-[#0996F5]' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    {isSelected ? '✓ Terpilih' : 'Pilih Warna'}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                    Termasuk
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
