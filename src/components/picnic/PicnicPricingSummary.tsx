import React from 'react';
import { AlertTriangle, Car, ShieldCheck } from 'lucide-react';
import { PicnicPackage, PicnicLocation, PicnicAddon, BirthdayDetails, PicnicPricingBreakdown } from '../../types/picnic';
import { formatRupiah } from '../../utils/picnicPricingEngine';
import { useLanguage } from '../../i18n/LanguageContext';

interface PicnicPricingSummaryProps {
  packageItem: PicnicPackage;
  paxCount: number;
  tripDate: string;
  location?: PicnicLocation | null;
  decorationColor?: string;
  selectedAddons?: PicnicAddon[];
  birthdayDetails?: BirthdayDetails;
  pricing: PicnicPricingBreakdown;
  onAddJeepClick?: () => void;
}

export const PicnicPricingSummary: React.FC<PicnicPricingSummaryProps> = ({
  packageItem,
  paxCount,
  tripDate,
  location,
  decorationColor,
  selectedAddons = [],
  birthdayDetails,
  pricing,
  onAddJeepClick
}) => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-[#ffffff] border border-[#DCEAF5] rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
      <div className="pb-3 border-b border-slate-200">
        <div className="text-[10px] font-black text-[#0996F5] uppercase tracking-wider">
          {t('picnic.orderSummary', 'Rincian Pesanan (Order Summary)')}
        </div>
        <h4 className="text-base font-black text-[#0B1220] mt-0.5">
          {packageItem.name} {packageItem.badge ? `(${packageItem.badge})` : ''}
        </h4>
        <div className="text-xs text-[#526273] mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>📅 {tripDate || (language === 'en' ? 'Select travel date' : language === 'zh' ? '选择出行日期' : 'Pilih tanggal trip')}</span>
          <span>👥 {paxCount} pax</span>
          <span>📍 {location ? location.name : (language === 'en' ? 'Select location' : language === 'zh' ? '选择场地' : 'Pilih lokasi')}</span>
          {decorationColor && <span className="font-bold text-[#0996F5]">🎨 {decorationColor}</span>}
        </div>
      </div>

      {/* Breakdown Lines */}
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between text-[#0B1220]">
          <span className="text-[#526273]">
            {language === 'en' ? 'Package' : language === 'zh' ? '套餐费用' : 'Paket'} ({formatRupiah(pricing.packagePrice ?? packageItem.pricePerPax ?? 0)} × {pricing.paxCount ?? paxCount} pax):
          </span>
          <span className="font-mono font-bold">
            {formatRupiah(pricing.packageSubtotal)}
          </span>
        </div>

        {decorationColor && (
          <div className="flex items-center justify-between text-[#0B1220]">
            <span className="text-[#526273]">{language === 'en' ? 'Decor Theme:' : language === 'zh' ? '主题装饰：' : 'Warna Dekorasi:'}</span>
            <span className="font-semibold text-[#0996F5]">
              {decorationColor} <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">{language === 'en' ? 'Included' : language === 'zh' ? '包含' : 'Termasuk'}</span>
            </span>
          </div>
        )}

        {pricing.surcharge > 0 && (
          <div className="flex items-center justify-between text-amber-800 bg-amber-50 px-2 py-1 rounded-lg">
            <span>{language === 'en' ? 'Quota Surcharge' : language === 'zh' ? '小团运营微调' : 'Surcharge kuota'} ({pricing.paxCount} pax):</span>
            <span className="font-mono font-bold">
              +{formatRupiah(pricing.surcharge)}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between text-[#0B1220]">
          <span className="text-[#526273]">
            {language === 'en' ? 'Food & Setup Logistics' : language === 'zh' ? '场地美食与道具配送' : 'Transport makanan & property'} ({location ? location.name : '-'}):
          </span>
          <span className="font-mono font-bold">
            {location && location.active ? formatRupiah(pricing.locationFee) : 'Rp 0'}
          </span>
        </div>

        {selectedAddons.length > 0 && (
          <div className="space-y-1 pt-1 border-t border-slate-100">
            {selectedAddons.map((addon) => (
              <div key={addon.id} className="text-xs text-[#0B1220]">
                <div className="flex items-center justify-between">
                  <span className="text-[#526273] truncate mr-2">Add-on: {addon.name}</span>
                  <span className="font-mono font-bold shrink-0">
                    +{formatRupiah(addon.price)}
                  </span>
                </div>
                {addon.category === 'birthday' && birthdayDetails && (birthdayDetails.balloonColor || birthdayDetails.letterText || birthdayDetails.cakeText) && (
                  <div className="text-[10px] text-pink-600 pl-2 mt-0.5 border-l border-pink-300">
                    {[
                      birthdayDetails.balloonColor && `${language === 'en' ? 'Balloons' : language === 'zh' ? '气球' : 'Balon'}: ${birthdayDetails.balloonColor}`,
                      birthdayDetails.letterText && `${language === 'en' ? 'Letters' : language === 'zh' ? '字母' : 'Huruf'}: ${birthdayDetails.letterText}`,
                      birthdayDetails.cakeText && `${language === 'en' ? 'Cake' : language === 'zh' ? '蛋糕' : 'Kue'}: ${birthdayDetails.cakeText}`
                    ].filter(Boolean).join(' · ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Grand Total */}
      <div className="pt-3 border-t-2 border-slate-200/80 space-y-1.5">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-black text-[#0B1220]">{t('picnic.totalCostLabel', 'TOTAL BIAYA:').replace(':', '')}:</span>
          <span className="text-xl sm:text-2xl font-black text-[#0996F5] font-mono tabular-nums">
            {formatRupiah(pricing.grandTotal)}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-[#526273] pt-1">
          <span>{t('picnic.dpLabel', 'Kewajiban DP 30% Sekarang:').replace(':', '')}:</span>
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
            <strong className="font-bold">⚠️ {language === 'en' ? 'Important Note:' : language === 'zh' ? '重要提示：' : 'Catatan Penting:'}</strong> {t('picnic.jeepNotice', 'Harga Picnic belum termasuk armada Jeep menuju lokasi gelaran.')}
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
              <span>{t('picnic.addJeepButton', 'Butuh Armada? Tambah Sewa Jeep Bromo di Sini')}</span>
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1.5 text-[11px] text-[#526273]">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        <span>{language === 'en' ? 'Official TNBTS National Park licensed setup · Instant confirmation' : language === 'zh' ? 'TNBTS印尼国家公园特许认证·极速确认' : 'Pemesanan resmi berizin TNBTS · Konfirmasi instan via Email & WA'}</span>
      </div>
    </div>
  );
};
