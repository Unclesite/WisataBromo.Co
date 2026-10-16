import React from 'react';
import { Check, Sparkles, Coffee } from 'lucide-react';
import { FixedSectionItem } from '../../types/picnic';

interface FixedPackageContentsProps {
  sections?: FixedSectionItem[];
  includedSections?: FixedSectionItem[];
  freeItems?: string[];
  packageName?: string;
}

export const FixedPackageContents: React.FC<FixedPackageContentsProps> = ({
  sections,
  includedSections,
  freeItems = [],
  packageName
}) => {
  const displaySections = sections || includedSections || [];
  return (
    <div className="space-y-4">
      <div className="p-4 sm:p-5 bg-[#F4FAFF] border border-[#DCEAF5] rounded-2xl">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#0996F5]" />
          <h4 className="text-xs sm:text-sm font-black text-[#0B1220] uppercase tracking-wider">
            YANG KAMU DAPATKAN {packageName ? `(${packageName})` : ''}
          </h4>
        </div>
        <p className="text-xs text-[#526273] mb-4">
          Seluruh menu &amp; perlengkapan di bawah ini sudah otomatis termasuk dan siap disajikan lengkap untuk seluruh rombongan Anda:
        </p>

        <div className="space-y-4">
          {displaySections.map((sec, idx) => (
            <div key={idx} className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200">
              <div className="text-xs font-black text-[#0B1220] mb-2.5 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                <span>{sec.sectionTitle}</span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                  All Included ✓
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sec.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#0B1220]">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Complimentary Free Items */}
          {freeItems.length > 0 && (
            <div className="bg-[#EAF6FF] p-3.5 rounded-xl border border-[#0996F5]/20 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0996F5]">
                <Coffee className="w-4 h-4 text-[#0996F5]" />
                <span>Bonus Gratis:</span>
                <span className="text-[#0B1220]">{freeItems.join(' · ')}</span>
              </div>
              <span className="text-[10px] font-black text-[#071A2B] bg-[#FFF700] px-2 py-0.5 rounded-full">
                FREE
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
