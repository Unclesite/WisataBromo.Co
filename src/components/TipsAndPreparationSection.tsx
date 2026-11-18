import React, { useState } from 'react';
import { Thermometer, Wind, CheckCircle2, AlertTriangle, Layers, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { TIPS_CONTENT } from '../i18n/tipsTranslations';

export const TipsAndPreparationSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'pakaian' | 'kesehatan' | 'etika'>('pakaian');

  const content = TIPS_CONTENT[language] || TIPS_CONTENT.id;

  return (
    <section id="tips-dan-panduan" className="py-16 bg-white text-[#111318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-extrabold text-[#0996f5] tracking-wider mb-2 uppercase">
            {t('tipsSection.badge', 'PANDUAN LENGKAP & AMAN')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#102a56] mb-3 text-balance">
            {t('tipsSection.heading', 'Tips Wisata Bromo & Checklist Pakaian Suhu Dingin (2°C - 8°C)')}
          </h2>
          <p className="text-[#111318]/75 text-sm sm:text-base leading-relaxed">
            {t('tipsSection.subheading', 'Persiapan matang adalah kunci liburan yang nyaman dan berkesan. Pelajari sistem pakaian berlapis, tips aklimatisasi udara tipis, serta etika menghormati kesakralan tanah adat Tengger.')}
          </p>
        </div>

        {/* Tab Selector (Responsive Grid on Mobile, Centered Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-3xl mx-auto mb-8 sm:mb-10 w-full">
          <button
            onClick={() => setActiveTab('pakaian')}
            className={`px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[44px] text-center ${
              activeTab === 'pakaian'
                ? 'bg-[#0996f5] text-white shadow-md shadow-[#0996f5]/20'
                : 'bg-[#e5f4ff] text-[#111318] hover:bg-slate-200/70 border border-[#0996f5]/20'
            }`}
          >
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>{t('tipsSection.tabClothing', 'Sistem Pakaian & Checklist')}</span>
          </button>
          <button
            onClick={() => setActiveTab('kesehatan')}
            className={`px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[44px] text-center ${
              activeTab === 'kesehatan'
                ? 'bg-[#0996f5] text-white shadow-md shadow-[#0996f5]/20'
                : 'bg-[#e5f4ff] text-[#111318] hover:bg-slate-200/70 border border-[#0996f5]/20'
            }`}
          >
            <Heart className="w-3.5 h-3.5 shrink-0" />
            <span>{t('tipsSection.tabHealth', 'Kesehatan & Ketinggian')}</span>
          </button>
          <button
            onClick={() => setActiveTab('etika')}
            className={`px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[44px] text-center ${
              activeTab === 'etika'
                ? 'bg-[#0996f5] text-white shadow-md shadow-[#0996f5]/20'
                : 'bg-[#e5f4ff] text-[#111318] hover:bg-slate-200/70 border border-[#0996f5]/20'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>{t('tipsSection.tabEthics', 'Etika Adat Suku Tengger')}</span>
          </button>
        </div>

        {/* Tab 1: Pakaian & Perlengkapan */}
        {activeTab === 'pakaian' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Box 1: 3-Layer System */}
            <div className="bg-[#e5f4ff]/60 border border-[#0996f5]/25 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-[#102a56] font-bold text-sm mb-4">
                <Thermometer className="w-4 h-4 text-[#0996f5]" />
                <span>{content.threeLayerTitle}</span>
              </div>
              <div className="space-y-3.5 text-xs text-[#111318]/90">
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="font-bold text-[#102a56] mb-0.5">{content.l1Title}</div>
                  <div className="text-slate-600">{content.l1Desc}</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="font-bold text-[#102a56] mb-0.5">{content.l2Title}</div>
                  <div className="text-slate-600">{content.l2Desc}</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="font-bold text-[#102a56] mb-0.5">{content.l3Title}</div>
                  <div className="text-slate-600">{content.l3Desc}</div>
                </div>
              </div>
            </div>

            {/* Box 2: Aksesori Wajib */}
            <div className="bg-[#e5f4ff]/60 border border-[#0996f5]/25 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-[#102a56] font-bold text-sm mb-4">
                <Wind className="w-4 h-4 text-[#0996f5]" />
                <span>{content.accessoriesTitle}</span>
              </div>
              <ul className="space-y-3 text-xs text-[#111318]/90">
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">{content.accMaskTitle} </strong>
                    {content.accMaskDesc}
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">{content.accBeanieTitle} </strong>
                    {content.accBeanieDesc}
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">{content.accGlovesTitle} </strong>
                    {content.accGlovesDesc}
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">{content.accGlassesTitle} </strong>
                    {content.accGlassesDesc}
                  </div>
                </li>
              </ul>
            </div>

            {/* Box 3: Sepatu & Gadget */}
            <div className="bg-[#e5f4ff]/60 border border-[#0996f5]/25 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-[#102a56] font-bold text-sm mb-4">
                <CheckCircle2 className="w-4 h-4 text-[#0996f5]" />
                <span>{content.gearTitle}</span>
              </div>
              <ul className="space-y-3 text-xs text-[#111318]/90">
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">{content.gearShoesTitle} </strong>
                    {content.gearShoesDesc}
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">{content.gearPhoneTitle} </strong>
                    {content.gearPhoneDesc}
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#102a56]">{content.gearCashTitle} </strong>
                    {content.gearCashDesc}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Kesehatan & Ketinggian */}
        {activeTab === 'kesehatan' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#e5f4ff]/60 border border-[#0996f5]/25 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-[#102a56] mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#ea0610]" />
                {content.healthAltTitle}
              </h4>
              <p className="text-xs text-[#111318]/85 leading-relaxed mb-3">
                {content.healthAltDesc}
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{content.healthAltPoint1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{content.healthAltPoint2}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#e5f4ff]/60 border border-[#0996f5]/25 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-[#102a56] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#fff700]" />
                {content.healthSpecialTitle}
              </h4>
              <p className="text-xs text-[#111318]/85 leading-relaxed mb-3">
                {content.healthSpecialDesc}
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{content.healthSpecialPoint1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{content.healthSpecialPoint2}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Etika Adat Suku Tengger */}
        {activeTab === 'etika' && (
          <div className="bg-[#e5f4ff]/60 border border-[#0996f5]/25 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-[#0996f5] font-bold text-sm mb-3">
              <Sparkles className="w-4 h-4 text-[#fff700]" />
              <span className="text-[#102a56]">{content.ethicsTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#111318]/85 leading-relaxed mb-6">
              {content.ethicsSubtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#111318]/90">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-[#102a56] block mb-1">{content.ethics1Title}</strong>
                {content.ethics1Desc}
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-[#102a56] block mb-1">{content.ethics2Title}</strong>
                {content.ethics2Desc}
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-[#102a56] block mb-1">{content.ethics3Title}</strong>
                {content.ethics3Desc}
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-[#102a56] block mb-1">{content.ethics4Title}</strong>
                {content.ethics4Desc}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
