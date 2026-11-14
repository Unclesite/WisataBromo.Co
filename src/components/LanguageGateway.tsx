import React, { useState, useEffect } from 'react';
import { useLanguage, SupportedLanguage, LANGUAGES } from '../i18n/LanguageContext';
import { Sparkles, Globe, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import topLogoImg from '../assets/images/wisatabromo-top-logo.png';
import bromoHeaderImg from '../assets/images/header/header_04_5db1f48e.jpg';

export const LanguageGateway: React.FC = () => {
  const { language, setLanguage, isGatewayOpen, closeGateway, t } = useLanguage();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredLang, setHoveredLang] = useState<SupportedLanguage | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isGatewayOpen) {
    return null;
  }

  const handleSelectLanguage = (lang: SupportedLanguage) => {
    setIsFadingOut(true);
    setLanguage(lang);
    setTimeout(() => {
      closeGateway();
      setIsFadingOut(false);
    }, 450);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Language Gateway"
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6 transition-all duration-500 ${
        isFadingOut ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background with Bromo Sunrise Image and Deep Cinematic Vignette */}
      <div className="absolute inset-0 z-0 bg-[#071A2B]">
        <img
          src={bromoHeaderImg || '/wisatabromo-header.jpg'}
          alt="Mount Bromo Sunrise"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 filter blur-[2px]"
        />
        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/85 to-[#071A2B]/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,150,245,0.12),transparent_70%)]"></div>
      </div>

      {/* Main Gateway Card */}
      <div className="relative z-10 w-full max-w-2xl bg-white/95 dark:bg-[#0B1528]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/30 dark:border-slate-700/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] text-center animate-fadeIn my-auto">
        
        {/* Brand Logo & Verification Pill */}
        <div className="flex flex-col items-center justify-center space-y-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0996f5]/10 border border-[#0996f5]/30 text-[#0996f5] dark:text-[#38bdf8] text-[11px] font-extrabold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0996f5]" />
            <span>Official Licensed Operator • PT Global Travel Healing</span>
          </div>

          <img
            src={topLogoImg || '/wisatabromo-top-logo.png'}
            alt="WisataBromo.co"
            className="h-12 sm:h-14 w-auto object-contain drop-shadow-md"
          />

          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0B1220] dark:text-white tracking-tight">
              Welcome to WisataBromo.co
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              Silakan pilih bahasa Anda / Please select your preferred language / 请选择您的首选语言
            </p>
          </div>
        </div>

        {/* 3 Aesthetic Language Buttons */}
        <div className="grid grid-cols-1 gap-3.5 sm:gap-4 my-6">
          {/* 1. English Option */}
          <button
            type="button"
            onClick={() => handleSelectLanguage('en')}
            onMouseEnter={() => setHoveredLang('en')}
            onMouseLeave={() => setHoveredLang(null)}
            className={`w-full group p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
              language === 'en'
                ? 'bg-gradient-to-r from-[#0996f5]/10 via-[#0996f5]/5 to-transparent border-[#0996f5] shadow-md shadow-[#0996f5]/15 ring-2 ring-[#0996f5]/30'
                : 'bg-white/80 dark:bg-slate-800/80 hover:bg-[#e5f4ff]/60 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-[#0996f5]/60 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <span className="text-3xl sm:text-4xl shrink-0 group-hover:scale-110 transition-transform">🇬🇧</span>
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-black text-[#0B1220] dark:text-white group-hover:text-[#0996f5] transition-colors">
                    English
                  </span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                    International
                  </span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-medium truncate">
                  International Visitors &amp; Global Travelers
                </div>
                <div className="text-[11px] text-[#0996f5] dark:text-[#38bdf8] font-semibold hidden sm:block">
                  Bromo Sunrise Tour • Private 4x4 Jeep • English Guides
                </div>
              </div>
            </div>

            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-400 group-hover:bg-[#0996f5] group-hover:text-white transition-all">
              {language === 'en' ? <Check className="w-4 h-4 text-[#0996f5]" /> : <ArrowRight className="w-4 h-4" />}
            </div>
          </button>

          {/* 2. Mandarin Chinese Option */}
          <button
            type="button"
            onClick={() => handleSelectLanguage('zh')}
            onMouseEnter={() => setHoveredLang('zh')}
            onMouseLeave={() => setHoveredLang(null)}
            className={`w-full group p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
              language === 'zh'
                ? 'bg-gradient-to-r from-[#0996f5]/10 via-[#0996f5]/5 to-transparent border-[#0996f5] shadow-md shadow-[#0996f5]/15 ring-2 ring-[#0996f5]/30'
                : 'bg-white/80 dark:bg-slate-800/80 hover:bg-[#e5f4ff]/60 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-[#0996f5]/60 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <span className="text-3xl sm:text-4xl shrink-0 group-hover:scale-110 transition-transform">🇨🇳</span>
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-black text-[#0B1220] dark:text-white group-hover:text-[#0996f5] transition-colors">
                    中文 (简体)
                  </span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                    华人专线
                  </span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-medium truncate">
                  中国游客、新加坡与马来西亚华人专线
                </div>
                <div className="text-[11px] text-[#0996f5] dark:text-[#38bdf8] font-semibold hidden sm:block">
                  布罗莫火山日出之旅 • 丰田经典四驱吉普 • 专属中文客服
                </div>
              </div>
            </div>

            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-400 group-hover:bg-[#0996f5] group-hover:text-white transition-all">
              {language === 'zh' ? <Check className="w-4 h-4 text-[#0996f5]" /> : <ArrowRight className="w-4 h-4" />}
            </div>
          </button>

          {/* 3. Bahasa Indonesia Option */}
          <button
            type="button"
            onClick={() => handleSelectLanguage('id')}
            onMouseEnter={() => setHoveredLang('id')}
            onMouseLeave={() => setHoveredLang(null)}
            className={`w-full group p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
              language === 'id'
                ? 'bg-gradient-to-r from-[#0996f5]/10 via-[#0996f5]/5 to-transparent border-[#0996f5] shadow-md shadow-[#0996f5]/15 ring-2 ring-[#0996f5]/30'
                : 'bg-white/80 dark:bg-slate-800/80 hover:bg-[#e5f4ff]/60 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-[#0996f5]/60 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <span className="text-3xl sm:text-4xl shrink-0 group-hover:scale-110 transition-transform">🇮🇩</span>
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-black text-[#0B1220] dark:text-white group-hover:text-[#0996f5] transition-colors">
                    Bahasa Indonesia
                  </span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                    Domestik
                  </span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-medium truncate">
                  Wisatawan Domestik &amp; Nusantara
                </div>
                <div className="text-[11px] text-[#0996f5] dark:text-[#38bdf8] font-semibold hidden sm:block">
                  Open Trip Harian • Sewa Jeep FJ40 • Pembayaran Transfer &amp; E-Wallet
                </div>
              </div>
            </div>

            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-400 group-hover:bg-[#0996f5] group-hover:text-white transition-all">
              {language === 'id' ? <Check className="w-4 h-4 text-[#0996f5]" /> : <ArrowRight className="w-4 h-4" />}
            </div>
          </button>
        </div>

        {/* Footer info & Direct Entry button */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#0996f5]" />
            <span>Pilihan Anda disimpan otomatis untuk kunjungan selanjutnya.</span>
          </div>

          <button
            type="button"
            onClick={() => handleSelectLanguage(language || 'id')}
            className="text-[#0996f5] font-black hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>Masuk Sekarang / Enter Website</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
