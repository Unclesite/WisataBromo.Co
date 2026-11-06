import React from 'react';
import { Coffee, Check, ArrowRight, Flame, Bike, Sparkles } from 'lucide-react';
import { TourPackage } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { PICNIC_TRAIL_TRANSLATIONS } from '../i18n/picnicAndTrailTranslations';

interface PicnicAndTrailSectionProps {
  onSelectPackage: (pkgId: string) => void;
  packages: TourPackage[];
  onOpenPicnic?: () => void;
}

export const PicnicAndTrailSection: React.FC<PicnicAndTrailSectionProps> = ({
  onSelectPackage,
  onOpenPicnic,
}) => {
  const { language } = useLanguage();
  const tContent = PICNIC_TRAIL_TRANSLATIONS[language] || PICNIC_TRAIL_TRANSLATIONS.id;

  const handleGoToPicnic = () => {
    if (onOpenPicnic) {
      onOpenPicnic();
    } else {
      window.location.href = '/picnic';
    }
  };

  return (
    <section id="piknik-dan-trail" className="py-14 sm:py-18 bg-[#e5f4ff] border-t border-b border-slate-200/90 text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs font-black text-[#0996f5] tracking-wider mb-2 uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#ffc928]" />
            <span>{tContent.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#111318] mb-3 text-balance">
            {tContent.sectionHeading}
          </h2>
          <p className="text-[#111318]/75 text-xs sm:text-base leading-relaxed">
            {tContent.sectionSubheading}
          </p>
        </div>

        {/* 2 Big Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Paket Piknik Bromo */}
          <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#0996f5] hover:shadow-2xl hover:shadow-[#0996f5]/10 transition-all duration-300">
            {/* Top Glow & Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0996f5]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              {/* Metadata line */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#0996f5] mb-3">
                <Sparkles className="w-4 h-4 text-[#FFF700] fill-[#FFF700]" />
                <span>{tContent.picnicCard.tag1}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-[#111318]">{tContent.picnicCard.tag2}</span>
              </div>

              {/* Title Clickable */}
              <h3 
                onClick={handleGoToPicnic}
                role="button"
                tabIndex={0}
                className="text-xl sm:text-2xl font-black text-[#111318] group-hover:text-[#0996f5] transition-colors mb-2.5 sm:mb-3 cursor-pointer hover:underline"
              >
                {tContent.picnicCard.title}
              </h3>

              <p className="text-[#111318]/80 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {tContent.picnicCard.description}
              </p>

              {/* Menu & Feature Highlights */}
              <div className="bg-[#e5f4ff]/80 border border-[#0996f5]/20 rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6 space-y-3">
                <div className="text-xs font-black text-[#111318] flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#0996f5]" />
                  <span>{tContent.picnicCard.highlightTitle}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#111318]/90">
                  {tContent.picnicCard.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="text-[11px] text-slate-500 font-medium">{tContent.picnicCard.priceLabel}</div>
                <div className="text-xl sm:text-2xl font-black text-[#0996f5] font-mono tabular-nums">
                  {tContent.picnicCard.priceAmount} <span className="text-xs font-normal text-slate-600">{tContent.picnicCard.priceUnit}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoToPicnic}
                className="py-3 sm:py-3.5 px-5 text-xs sm:text-sm font-black text-white bg-[#0996f5] hover:bg-[#071A2B] rounded-xl transition-all shadow-md shadow-[#0996f5]/25 flex items-center gap-2 cursor-pointer active:scale-95 min-h-[44px]"
              >
                <span>{tContent.picnicCard.buttonText}</span>
                <ArrowRight className="w-4 h-4 text-[#FFF700]" />
              </button>
            </div>
          </div>

          {/* Card 2: Paket Sewa Trail Sukapura */}
          <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#ea0610] hover:shadow-2xl hover:shadow-[#ea0610]/10 transition-all duration-300">
            {/* Top Glow & Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea0610]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              {/* Metadata line */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#ea0610] mb-3">
                <Flame className="w-4 h-4 text-[#ea0610]" />
                <span>{tContent.trailCard.tag1}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{tContent.trailCard.tag2}</span>
              </div>

              {/* Title Clickable */}
              <button 
                type="button"
                onClick={() => onSelectPackage('sewa-trail-sukapura')}
                className="block text-left text-xl sm:text-2xl font-black text-[#111318] group-hover:text-[#ea0610] transition-colors mb-2.5 sm:mb-3 cursor-pointer hover:underline"
              >
                {tContent.trailCard.title}
              </button>

              <p className="text-[#111318]/80 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {tContent.trailCard.description}
              </p>

              {/* Specs & Included Gear */}
              <div className="bg-rose-50/70 border border-[#ea0610]/20 rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6 space-y-3">
                <div className="text-xs font-black text-[#111318] flex items-center gap-2">
                  <Bike className="w-4 h-4 text-[#ea0610]" />
                  <span>{tContent.trailCard.highlightTitle}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#111318]/90">
                  {tContent.trailCard.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="text-[11px] text-slate-500 font-medium">{tContent.trailCard.priceLabel}</div>
                <div className="text-xl sm:text-2xl font-black text-[#ea0610] font-mono tabular-nums">
                  {tContent.trailCard.priceAmount} <span className="text-xs font-normal text-slate-600">{tContent.trailCard.priceUnit}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectPackage('sewa-trail-sukapura')}
                className="py-3 sm:py-3.5 px-5 text-xs sm:text-sm font-black text-white bg-[#ea0610] hover:bg-[#c8050e] rounded-xl transition-all shadow-md shadow-[#ea0610]/25 flex items-center gap-2 cursor-pointer active:scale-95 min-h-[44px]"
              >
                <span>{tContent.trailCard.buttonText}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
