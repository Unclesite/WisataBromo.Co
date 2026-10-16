import React from 'react';
import { Minus, Plus, CheckCircle2, AlertCircle, Coffee } from 'lucide-react';
import { PicnicMenuGroup } from '../../types/picnic';

interface QuantityMenuSelectorProps {
  group: PicnicMenuGroup;
  paxCount: number;
  currentQuantities: Record<string, number>;
  onChangeQuantity: (itemName: string, newQty: number) => void;
}

export const QuantityMenuSelector: React.FC<QuantityMenuSelectorProps> = ({
  group,
  paxCount,
  currentQuantities = {},
  onChangeQuantity
}) => {
  const totalSelected = Object.values(currentQuantities).reduce((sum, q) => sum + (Number(q) || 0), 0);
  const remaining = paxCount - totalSelected;
  const isValid = totalSelected === paxCount;
  const isExcess = totalSelected > paxCount;

  return (
    <div className="bg-white rounded-2xl border border-[#DCEAF5] p-4 sm:p-6 shadow-sm mb-5 transition-all">
      {/* Group Header & Target Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-slate-100 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm sm:text-base font-extrabold text-[#0B1220]">
              {group.title}
            </h4>
            <span className="text-[11px] font-semibold text-[#0996F5] bg-[#EAF6FF] px-2.5 py-0.5 rounded-full border border-[#0996F5]/20">
              Wajib {paxCount} Porsi
            </span>
          </div>
          <p className="text-xs text-[#526273] mt-1">
            {group.instruction} · Anda dapat memvariasikan pilihan menu.
          </p>
        </div>

        {/* Status Validation Pill */}
        <div className="shrink-0">
          {isValid ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{totalSelected} / {paxCount} Porsi Terpenuhi ✓</span>
            </div>
          ) : isExcess ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-bold animate-pulse">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Kelebihan {totalSelected - paxCount} porsi! (Total {totalSelected}/{paxCount})</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Kurang {remaining} porsi lagi (Saat ini {totalSelected}/{paxCount})</span>
            </div>
          )}
        </div>
      </div>

      {/* Menu Options Grid with [-] Qty [+] */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {group.options.map((itemName) => {
          const qty = Number(currentQuantities[itemName]) || 0;
          const isSelected = qty > 0;

          return (
            <div
              key={itemName}
              className={`p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                isSelected
                  ? 'border-[#0996F5] bg-[#EAF6FF]/60 shadow-xs'
                  : 'border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-white'
              }`}
            >
              {/* Item Info */}
              <div className="min-w-0 flex-1">
                <div className={`text-xs sm:text-sm font-bold truncate ${isSelected ? 'text-[#0996F5]' : 'text-[#0B1220]'}`}>
                  {itemName}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  Sudah termasuk dalam paket (Rp 0)
                </div>
              </div>

              {/* Quantity Counter Control */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg p-1 shrink-0 shadow-2xs">
                <button
                  type="button"
                  disabled={qty <= 0}
                  onClick={() => onChangeQuantity(itemName, Math.max(0, qty - 1))}
                  className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                  aria-label={`Kurangi ${itemName}`}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>

                <span className={`w-7 text-center font-mono font-bold text-xs tabular-nums ${isSelected ? 'text-[#0996F5]' : 'text-slate-600'}`}>
                  {qty}
                </span>

                <button
                  type="button"
                  onClick={() => onChangeQuantity(itemName, qty + 1)}
                  className="w-7 h-7 flex items-center justify-center rounded-md bg-[#0996F5] hover:bg-[#071A2B] text-white transition-colors cursor-pointer active:scale-95 shadow-xs"
                  aria-label={`Tambah ${itemName}`}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Free Included Teh & Mineral notice on beverage category */}
      {group.category === 'minuman' && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-200/60">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>✓ Teh Hangat &amp; Air Mineral — Included Gratis (Tidak memotong kuota minuman pilihan)</span>
        </div>
      )}
    </div>
  );
};
