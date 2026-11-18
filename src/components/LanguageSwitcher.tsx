import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, SupportedLanguage, LANGUAGES } from '../i18n/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'segmented' | 'compact' | 'drawer';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'segmented',
  className = '',
}) => {
  const { language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 1. Desktop & Tablet: Segmented Pill Control (🇬🇧 EN | 🇨🇳 中文 | 🇮🇩 ID)
  if (variant === 'segmented') {
    return (
      <div
        className={`inline-flex items-center bg-slate-100/90 hover:bg-slate-200/60 p-0.5 sm:p-1 rounded-full border border-slate-200 shadow-2xs transition-colors shrink-0 ${className}`}
        role="group"
        aria-label="Pilih Bahasa"
      >
        {LANGUAGES.map((item) => {
          const isActive = language === item.code;
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => setLanguage(item.code)}
              className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-black rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#0996f5] text-white shadow-xs scale-100'
                  : 'text-slate-600 hover:text-[#0996f5] hover:bg-white/60'
              }`}
              title={item.name}
            >
              <span className="text-xs sm:text-sm leading-none">{item.flag}</span>
              <span className="leading-none">{item.shortLabel}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // 2. Compact Version for Narrow Mobile Viewports (Flag + Dropdown or Mini Flags)
  if (variant === 'compact') {
    return (
      <div ref={dropdownRef} className={`relative inline-block shrink-0 ${className}`}>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1 px-2 py-1 bg-slate-100 hover:bg-slate-200/80 text-slate-800 rounded-lg border border-slate-200/80 text-xs font-black transition-all cursor-pointer shadow-2xs"
          aria-label="Ganti Bahasa"
        >
          <span className="text-sm">
            {LANGUAGES.find((l) => l.code === language)?.flag || '🇮🇩'}
          </span>
          <span className="text-[11px] font-mono">
            {LANGUAGES.find((l) => l.code === language)?.shortLabel || 'ID'}
          </span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-1.5 w-36 bg-white border border-slate-200 rounded-xl p-1 shadow-xl z-50 animate-fadeIn space-y-0.5">
            {LANGUAGES.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLanguage(item.code);
                  setDropdownOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                  language === item.code
                    ? 'bg-[#0996f5] text-white font-black'
                    : 'text-slate-700 hover:bg-slate-100 font-bold'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">{item.flag}</span>
                  <span>{item.name}</span>
                </div>
                {language === item.code && <Check className="w-3.5 h-3.5 text-white" />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // 3. Drawer Version inside Mobile Hamburger Menu
  return (
    <div className={`space-y-1.5 p-3 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
      <div className="text-[11px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1">
        <Globe className="w-3 h-3 text-[#0996f5]" />
        <span>Pilih Bahasa / Language / 语言</span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 pt-1">
        {LANGUAGES.map((item) => {
          const isActive = language === item.code;
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => setLanguage(item.code)}
              className={`p-2 rounded-xl text-center text-xs transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
                isActive
                  ? 'bg-[#0996f5] text-white font-black shadow-xs ring-2 ring-[#0996f5]/30'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-[#0996f5] font-bold'
              }`}
            >
              <span className="text-base">{item.flag}</span>
              <span className="text-[11px]">{item.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
