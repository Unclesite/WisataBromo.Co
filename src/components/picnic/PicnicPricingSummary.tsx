import React from 'react';
import { AlertTriangle, Car, ShieldCheck } from 'lucide-react';
import { PicnicPackage, PicnicLocation, PicnicAddon, PicnicPricingBreakdown } from '../../types/picnic';
import { formatRupiah } from '../../utils/picnicPricingEngine';

interface PicnicPricingSummaryProps {
  packageItem: PicnicPackage;
  paxCount: number;
  tripDate: string;
  location?: PicnicLocation | null;
  selectedAddons?: PicnicAddon[];
  pricing: PicnicPricingBreakdown;
  onAddJeepClick?: () => void;
}

export const PicnicPricingSummary: React.FC<PicnicPricingSummaryProps> = ({
  packageItem,
  paxCount,
  tripDate,
  location,
  selectedAddons = [],
  pricing,
  onAddJeepClick
}) => {
  return (
    <div className="bg-[#ffffff] border border-[#DCEAF5] rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
      <div className="pb-3 border-b border-slate-200">
        <div className="text-[10px] font-black text-[#0996F5] uppercase tracking-wider">
          Rincian Pesanan (Order Summary)
        </div>
        <h4 className="text-base font-black text-[#0B1220] mt-0.5">
          {packageItem.name} {packageItem.badge ? `(${packageItem.badge})` : ''}
        </h4>
        <div className="text-xs text-[#526273] mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>📅 {tripDate || 'Pilih tanggal trip'}</span>
          <span>👥 {paxCount} pax</span>
          <span>📍 {location ? location.name : 'Pilih lokasi'}</span>
        </div>
      </div>

      {/* Breakdown Lines */}
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between text-[#0B1220]">
          <span className="text-[#526273]">
            Paket ({formatRupiah(pricing.packagePrice)} × {pricing.paxCount} pax):
          </span>
          <span className="font-mono font-bold">
            {formatRupiah(pricing.packageSubtotal)}
          </span>
        </div>

        {pricing.surcharge > 0 && (
          <div className="flex items-center justify-between text-amber-800 bg-amber-50 px-2 py-1 rounded-lg">
            <span>Surcharge kuota ({pricing.paxCount} pax):</span>
            <span className="font-mono font-bold">
              +{formatRupiah(pricing.surcharge)}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between text-[#0B1220]">
          <span className="text-[#526273]">
            Transport makanan &amp; property ({location ? location.name : '-'}):
          </span>
          <span className="font-mono font-bold">
            {location && location.active ? formatRupiah(pricing.locationFee) : 'Rp 0'}
          </span>
        </div>

        {selectedAddons.length > 0 && (
          <div className="space-y-1 pt-1 border-t border-slate-100">
            {selectedAddons.map((addon) => (
              <div key={addon.id} className="flex items-center justify-between text-xs text-[#0B1220]">
                <span className="text-[#526273] truncate mr-2">Add-on: {addon.name}</span>
                <span className="font-mono font-bold shrink-0">
                  +{formatRupiah(addon.price)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Grand Total */}
      <div className="pt-3 border-t-2 border-slate-200/80 space-y-1.5">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-black text-[#0B1220]">TOTAL BIAYA:</span>
          <span className="text-xl sm:text-2xl font-black text-[#0996F5] font-mono tabular-nums">
            {formatRupiah(pricing.grandTotal)}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-[#526273] pt-1">
          <span>Down Payment DP (30%):</span>
          <span className="font-mono font-bold text-[#0B1220]">
            {formatRupiah(pricing.downPayment)}
          </span>
        </div>
      </div>

      {/* Strict Jeep Warning & Optional Add Jeep Button */}
      <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/90 space-y-2">
        <div className="flex items-start gap-2 text-xs text-amber-900 leading-snug">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">⚠️ Catatan Penting:</strong> Harga Picnic belum termasuk armada Jeep menuju lokasi gelaran.
          </div>
        </div>

        {onAddJeepClick && (
          <div className="pt-1">
            <button
              type="button"
              onClick={onAddJeepClick}
              className="w-full py-2 px-3 bg-white hover:bg-[#EAF6FF] text-[#0996F5] border border-[#0996F5]/40 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Car className="w-3.5 h-3.5 text-[#0996F5]" />
              <span>Butuh Armada? Tambah Sewa Jeep Bromo di Sini</span>
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1.5 text-[11px] text-[#526273]">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        <span>Pemesanan resmi berizin TNBTS · Konfirmasi instan via Email &amp; WA</span>
      </div>
    </div>
  );
};
