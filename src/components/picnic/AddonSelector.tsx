import React from 'react';
import { Plus, Check, Gift, Tent, Sparkles } from 'lucide-react';
import { PicnicAddon, BirthdayDetails } from '../../types/picnic';
import { formatRupiah } from '../../utils/picnicPricingEngine';

interface AddonSelectorProps {
  addons: PicnicAddon[];
  selectedAddonIds?: string[];
  selectedAddons?: PicnicAddon[];
  birthdayDetails: BirthdayDetails;
  onToggleAddon: (addon: PicnicAddon) => void;
  onChangeBirthdayDetails?: (details: Partial<BirthdayDetails>) => void;
  onUpdateBirthdayDetails?: (details: Partial<BirthdayDetails>) => void;
}

export const AddonSelector: React.FC<AddonSelectorProps> = ({
  addons = [],
  selectedAddonIds,
  selectedAddons,
  birthdayDetails,
  onToggleAddon,
  onChangeBirthdayDetails,
  onUpdateBirthdayDetails
}) => {
  // Normalize selected IDs whether passed as array of strings or array of objects
  const activeIds = React.useMemo(() => {
    if (Array.isArray(selectedAddonIds)) {
      return selectedAddonIds;
    }
    if (Array.isArray(selectedAddons)) {
      return selectedAddons.map((a) => a.id);
    }
    return [];
  }, [selectedAddonIds, selectedAddons]);

  const handleDetailsChange = (details: Partial<BirthdayDetails>) => {
    if (onUpdateBirthdayDetails) {
      onUpdateBirthdayDetails(details);
    } else if (onChangeBirthdayDetails) {
      onChangeBirthdayDetails(details);
    }
  };

  const hasBirthdayAddon = addons.some(
    (a) => a.category === 'birthday' && activeIds.includes(a.id)
  );

  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-black text-[#0B1220] flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#0996F5]" />
          <span>Fasilitas Tambahan &amp; Dekorasi Acara (Opsional)</span>
        </h4>
        <p className="text-[11px] text-[#526273] mt-0.5">
          Tingkatkan kenyamanan dan buat momen perayaan ulang tahun/anniversary semakin berkesan
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {addons.map((addon) => {
          const isSelected = activeIds.includes(addon.id);

          return (
            <div
              key={addon.id}
              onClick={() => onToggleAddon(addon)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-[#0996F5] bg-[#EAF6FF]/90 ring-2 ring-[#0996F5]/25 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-[#0996F5]/40 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-[#0996F5] text-white' : 'bg-slate-100 text-[#0996F5]'
                  }`}>
                    {addon.category === 'tent' ? (
                      <Tent className="w-4 h-4" />
                    ) : (
                      <Gift className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0B1220] leading-snug">
                      {addon.name}
                    </h5>
                  </div>
                </div>

                <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs transition-colors ${
                  isSelected ? 'bg-[#0996F5] text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </div>

              <p className="text-[11px] text-[#526273] leading-relaxed mb-3">
                {addon.description}
              </p>

              <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                  Biaya Tambahan
                </span>
                <span className="font-mono font-black text-sm text-[#0996F5]">
                  +{formatRupiah(addon.price)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Birthday Customization Form (appears if any birthday add-on is chosen) */}
      {hasBirthdayAddon && (
        <div className="p-4 sm:p-5 bg-gradient-to-br from-pink-50/60 via-[#EAF6FF] to-white rounded-2xl border border-pink-200/80 space-y-3.5 animate-fadeIn">
          <div className="flex items-center gap-2 text-pink-700">
            <Gift className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-wider">
              Kustomisasi Dekorasi Ulang Tahun / Anniversary
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-[#0B1220] mb-1">
                Warna Balon
              </label>
              <input
                type="text"
                placeholder="Misal: Pastel Pink & Gold / Biru & Putih"
                value={birthdayDetails?.balloonColor || ''}
                onChange={(e) => handleDetailsChange({ balloonColor: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0996F5] bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#0B1220] mb-1">
                Tulisan Balon Huruf
              </label>
              <input
                type="text"
                placeholder="Misal: HBD SARAH / HAPPY ANNIV"
                value={birthdayDetails?.letterText || ''}
                onChange={(e) => handleDetailsChange({ letterText: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0996F5] bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#0B1220] mb-1">
                Tulisan Kue Tart (Cake)
              </label>
              <input
                type="text"
                placeholder="Misal: Happy Birthday Sayang ke-25"
                value={birthdayDetails?.cakeText || ''}
                onChange={(e) => handleDetailsChange({ cakeText: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0996F5] bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
