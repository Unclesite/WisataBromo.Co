import React from 'react';
import { Users, Minus, Plus, AlertCircle, Info } from 'lucide-react';
import { formatRupiah } from '../../utils/picnicPricingEngine';

interface PaxSelectorProps {
  paxCount: number;
  minPax?: number;
  onChangePax: (newPax: number) => void;
}

export const PaxSelector: React.FC<PaxSelectorProps> = ({
  paxCount,
  minPax = 4,
  onChangePax
}) => {
  const getSurchargeNotice = (count: number) => {
    if (count === 2) {
      return {
        hasSurcharge: true,
        amount: 100000,
        text: 'Penyesuaian kuota minimum operasional (2 pax): +Rp 100.000 / rombongan'
      };
    }
    if (count === 3) {
      return {
        hasSurcharge: true,
        amount: 50000,
        text: 'Penyesuaian kuota minimum operasional (3 pax): +Rp 50.000 / rombongan'
      };
    }
    if (count === 1) {
      return {
        hasSurcharge: true,
        amount: 150000,
        text: 'Penyesuaian kuota solo traveler (1 pax): +Rp 150.000 / rombongan'
      };
    }
    return {
      hasSurcharge: false,
      amount: 0,
      text: 'Standar kuota normal terpenuhi (tanpa surcharge)'
    };
  };

  const notice = getSurchargeNotice(paxCount);

  return (
    <div className="p-4 bg-white rounded-2xl border border-[#DCEAF5] space-y-3">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h4 className="text-sm font-black text-[#0B1220] flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#0996F5]" />
            <span>Jumlah Peserta (Pax)</span>
          </h4>
          <p className="text-[11px] text-[#526273] mt-0.5">
            Standar kuota normal mulai {minPax} pax. Peserta 2–3 pax tetap dapat memesan dengan penyesuaian biaya operasional.
          </p>
        </div>

        {/* Counter Widget */}
        <div className="flex items-center gap-2 bg-[#F4FAFF] border border-[#DCEAF5] rounded-xl p-1">
          <button
            type="button"
            onClick={() => onChangePax(Math.max(2, paxCount - 1))}
            disabled={paxCount <= 2}
            className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 disabled:opacity-40 text-[#0B1220] flex items-center justify-center transition-colors shadow-2xs cursor-pointer disabled:cursor-not-allowed"
            aria-label="Kurangi peserta"
          >
            <Minus className="w-4 h-4" />
          </button>

          <span className="w-12 text-center font-mono font-black text-base text-[#0996F5] tabular-nums">
            {paxCount} <span className="text-[11px] text-[#526273] font-sans font-medium">pax</span>
          </span>

          <button
            type="button"
            onClick={() => onChangePax(Math.min(50, paxCount + 1))}
            className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 text-[#0B1220] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            aria-label="Tambah peserta"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Surcharge Banner */}
      {notice.hasSurcharge ? (
        <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200/80 flex items-start gap-2 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-[11px] leading-relaxed">
            <span className="font-bold">{notice.text}</span>
            <div className="text-amber-800/80">
              Biaya surcharge otomatis ditambahkan ke total pesanan.
            </div>
          </div>
        </div>
      ) : (
        <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-200/80 flex items-center gap-2 text-xs text-emerald-800">
          <Info className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="text-[11px] font-semibold">
            Kuota {paxCount} peserta: Tanpa biaya tambahan (Surcharge Rp 0).
          </span>
        </div>
      )}
    </div>
  );
};
