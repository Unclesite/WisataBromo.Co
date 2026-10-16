import React from 'react';
import { Plus, Check, Gift, Tent, Sparkles, Cake, Type, Palette } from 'lucide-react';
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

  const tentAddon = React.useMemo(() => {
    return addons.find((a) => a.category === 'tent');
  }, [addons]);

  const birthdayAddons = React.useMemo(() => {
    return addons.filter((a) => a.category === 'birthday');
  }, [addons]);

  const isTentSelected = tentAddon ? activeIds.includes(tentAddon.id) : false;

  const activeBirthdayAddon = React.useMemo(() => {
    return birthdayAddons.find((a) => activeIds.includes(a.id));
  }, [birthdayAddons, activeIds]);

  const hasBirthdayAddon = Boolean(activeBirthdayAddon);

  // Safe handler that merges new field values without overwriting existing fields
  const handleDetailsChange = (field: keyof BirthdayDetails, value: string) => {
    const updated: BirthdayDetails = {
      balloonColor: birthdayDetails?.balloonColor || '',
      letterText: birthdayDetails?.letterText || '',
      cakeText: birthdayDetails?.cakeText || '',
      ...birthdayDetails,
      [field]: value
    };

    if (onUpdateBirthdayDetails) {
      onUpdateBirthdayDetails(updated);
    } else if (onChangeBirthdayDetails) {
      onChangeBirthdayDetails(updated);
    }

    // If user starts typing any custom text and no birthday package is selected, auto-select the best matching package
    if (!hasBirthdayAddon && value.trim() !== '') {
      let targetAddon = birthdayAddons.find((a) => a.id === 'birthday-balloon-only');
      if (field === 'cakeText' || (updated.cakeText && updated.cakeText.trim() !== '')) {
        targetAddon = birthdayAddons.find((a) => a.id === 'birthday-full-package') || targetAddon;
      } else if (field === 'letterText' || (updated.letterText && updated.letterText.trim() !== '')) {
        targetAddon = birthdayAddons.find((a) => a.id === 'birthday-balloon-letter') || targetAddon;
      }
      if (targetAddon) {
        onToggleAddon(targetAddon);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-black text-[#0B1220] flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#0996F5]" />
          <span>Fasilitas Tambahan &amp; Dekorasi Acara (Opsional)</span>
        </h4>
        <p className="text-[11px] text-[#526273] mt-0.5">
          Pilih tenda canvas bohemian atau dekorasi perayaan ulang tahun/anniversary sesuai kebutuhan momen Anda.
        </p>
      </div>

      {/* SECTION 1: TENDA BESAR (CANVAS BELL TENT) */}
      {tentAddon && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Tent className="w-4 h-4 text-[#0996F5]" />
              <span>Fasilitas Tenda Piknik:</span>
            </span>
            <span className="text-[11px] text-slate-400 font-normal">
              Bisa digabung dengan paket dekorasi apa pun
            </span>
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => onToggleAddon(tentAddon)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onToggleAddon(tentAddon);
              }
            }}
            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              isTentSelected
                ? 'border-[#0996F5] bg-[#EAF6FF] ring-2 ring-[#0996F5]/30 shadow-sm'
                : 'border-slate-200 bg-white hover:border-[#0996F5]/50 hover:bg-slate-50 shadow-2xs'
            }`}
          >
            <div className="flex items-start sm:items-center gap-3.5">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isTentSelected
                    ? 'bg-[#0996F5] text-white shadow-xs'
                    : 'bg-slate-100 text-[#0996F5]'
                }`}
              >
                <Tent className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h5 className="text-sm font-black text-[#0B1220]">
                    {tentAddon.name}
                  </h5>
                  {isTentSelected && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
                      ✓ Ditambahkan
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#526273] mt-1 leading-relaxed max-w-xl">
                  {tentAddon.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
              <div className="text-left sm:text-right">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight block">
                  Biaya Sewa
                </span>
                <span className="font-mono font-black text-base text-[#0996F5]">
                  +{formatRupiah(tentAddon.price)}
                </span>
              </div>

              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-all ${
                  isTentSelected
                    ? 'bg-[#0996F5] text-white shadow-sm ring-2 ring-[#0996F5]/20'
                    : 'bg-slate-100 text-slate-500 hover:bg-[#0996F5] hover:text-white'
                }`}
              >
                {isTentSelected ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4" />}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: PILIHAN PAKET DEKORASI ULANG TAHUN */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span className="flex items-center gap-1.5 text-pink-700">
            <Gift className="w-4 h-4" />
            <span>Paket Dekorasi Birthday / Anniversary:</span>
          </span>
          <span className="text-[11px] text-slate-400 font-normal">
            Pilih 1 opsi paket perayaan
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {birthdayAddons.map((addon) => {
            const isSelected = activeIds.includes(addon.id);

            return (
              <div
                key={addon.id}
                role="button"
                tabIndex={0}
                onClick={() => onToggleAddon(addon)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onToggleAddon(addon);
                  }
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-pink-500 bg-pink-50/80 ring-2 ring-pink-400/30 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-pink-300 hover:bg-pink-50/20 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-pink-600 text-white shadow-xs' : 'bg-pink-50 text-pink-600'
                      }`}
                    >
                      <Gift className="w-4 h-4" />
                    </div>

                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs transition-colors ${
                        isSelected ? 'bg-pink-600 text-white' : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </div>

                  <h5 className="text-xs font-black text-[#0B1220] leading-snug mb-1">
                    {addon.name}
                  </h5>

                  <p className="text-[11px] text-[#526273] leading-relaxed mb-3">
                    {addon.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs mt-auto">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                    {isSelected ? '✓ Terpilih' : 'Biaya Add-on'}
                  </span>
                  <span className="font-mono font-black text-xs sm:text-sm text-pink-600">
                    +{formatRupiah(addon.price)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: FORM KUSTOMISASI 3 DEKORASI (WARNA BALON, TULISAN HURUF, TULISAN KUE TART) */}
      <div className={`p-4 sm:p-5 rounded-2xl border transition-all space-y-4 ${
        hasBirthdayAddon
          ? 'bg-gradient-to-br from-pink-50/80 via-[#FFF8FA] to-white border-pink-300 ring-2 ring-pink-200/50 shadow-sm'
          : 'bg-slate-50/80 border-slate-200/90'
      }`}>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
              hasBirthdayAddon ? 'bg-pink-600 text-white' : 'bg-slate-200 text-slate-600'
            }`}>
              <Gift className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-black text-[#0B1220]">
                3 Kostumisasi Birthday Decor (Ketik Bebas di Sini)
              </h5>
              <p className="text-[11px] text-slate-500">
                {hasBirthdayAddon
                  ? `Paket Aktif: ${activeBirthdayAddon?.name}. Silakan isi data di bawah.`
                  : 'Ketik langsung detail perayaan Anda di bawah ini untuk mengaktifkan dekorasi.'}
              </p>
            </div>
          </div>

          {hasBirthdayAddon ? (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-pink-100 text-pink-800 border border-pink-200">
              ✓ Formulir Aktif
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-200/70 text-slate-600">
              Opsional
            </span>
          )}
        </div>

        {/* 3 Input Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* 1. Warna Balon */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200/60 transition-all">
            <label
              htmlFor="addon-input-balloon"
              className="text-[11px] font-bold text-[#0B1220] flex items-center justify-between mb-1.5"
            >
              <span className="flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-pink-500" />
                <span>1. Warna Balon</span>
              </span>
              <span className="text-[9px] text-slate-400 font-normal">Semua Paket</span>
            </label>
            <input
              id="addon-input-balloon"
              type="text"
              autoComplete="off"
              value={birthdayDetails?.balloonColor || ''}
              onChange={(e) => handleDetailsChange('balloonColor', e.target.value)}
              placeholder="Misal: Pastel Pink &amp; Gold / Biru &amp; Putih"
              className="w-full px-2.5 py-1.5 text-xs text-[#0B1220] placeholder:text-slate-400 bg-transparent border-0 focus:outline-none focus:ring-0 font-medium"
            />
          </div>

          {/* 2. Tulisan Balon Huruf */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200/60 transition-all">
            <label
              htmlFor="addon-input-letter"
              className="text-[11px] font-bold text-[#0B1220] flex items-center justify-between mb-1.5"
            >
              <span className="flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-pink-500" />
                <span>2. Tulisan Balon Huruf</span>
              </span>
              <span className="text-[9px] text-slate-400 font-normal">Balon Huruf &amp; Full</span>
            </label>
            <input
              id="addon-input-letter"
              type="text"
              autoComplete="off"
              value={birthdayDetails?.letterText || ''}
              onChange={(e) => handleDetailsChange('letterText', e.target.value)}
              placeholder="Misal: HBD SARAH / HAPPY ANNIV"
              className="w-full px-2.5 py-1.5 text-xs text-[#0B1220] placeholder:text-slate-400 bg-transparent border-0 focus:outline-none focus:ring-0 font-medium"
            />
          </div>

          {/* 3. Tulisan Kue Tart (Cake) */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200/60 transition-all">
            <label
              htmlFor="addon-input-cake"
              className="text-[11px] font-bold text-[#0B1220] flex items-center justify-between mb-1.5"
            >
              <span className="flex items-center gap-1.5">
                <Cake className="w-3.5 h-3.5 text-pink-500" />
                <span>3. Tulisan Kue Tart (Cake)</span>
              </span>
              <span className="text-[9px] text-slate-400 font-normal">Paket Full</span>
            </label>
            <input
              id="addon-input-cake"
              type="text"
              autoComplete="off"
              value={birthdayDetails?.cakeText || ''}
              onChange={(e) => handleDetailsChange('cakeText', e.target.value)}
              placeholder="Misal: Happy Birthday Sayang ke-25"
              className="w-full px-2.5 py-1.5 text-xs text-[#0B1220] placeholder:text-slate-400 bg-transparent border-0 focus:outline-none focus:ring-0 font-medium"
            />
          </div>
        </div>

        {/* Live typed preview reminder if any field is filled */}
        {(birthdayDetails?.balloonColor || birthdayDetails?.letterText || birthdayDetails?.cakeText) && (
          <div className="p-2.5 bg-pink-100/60 rounded-xl border border-pink-200 text-xs text-pink-900 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-pink-600 shrink-0" />
              <span>
                <strong>Teks Tersimpan:</strong>{' '}
                {[
                  birthdayDetails.balloonColor && `Balon: "${birthdayDetails.balloonColor}"`,
                  birthdayDetails.letterText && `Huruf: "${birthdayDetails.letterText}"`,
                  birthdayDetails.cakeText && `Kue: "${birthdayDetails.cakeText}"`
                ].filter(Boolean).join(' · ')}
              </span>
            </div>
            <span className="text-[10px] text-pink-700 font-bold bg-white px-2 py-0.5 rounded-md shadow-2xs">
              Tercatat di Invoice &amp; Butler Brief
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
