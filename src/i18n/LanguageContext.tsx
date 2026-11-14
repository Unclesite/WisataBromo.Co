import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import idTranslations from '../../messages/id.json';
import enTranslations from '../../messages/en.json';
import zhTranslations from '../../messages/zh.json';

export type SupportedLanguage = 'id' | 'en' | 'zh';

export interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  flag: string;
  shortLabel: string;
}

export const LANGUAGES: LanguageInfo[] = [
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩', shortLabel: 'ID' },
  { code: 'en', name: 'English', flag: '🇬🇧', shortLabel: 'EN' },
  { code: 'zh', name: '中文 (简体)', flag: '🇨🇳', shortLabel: '中文' },
];

const translationsMap: Record<SupportedLanguage, any> = {
  id: idTranslations,
  en: enTranslations,
  zh: zhTranslations,
};

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (path: string, fallback?: string) => string;
  isGatewayOpen: boolean;
  openGateway: () => void;
  closeGateway: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'wisatabromo_lang';
const GATEWAY_SEEN_KEY = 'wisatabromo_gateway_seen';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('id');
  const [isGatewayOpen, setIsGatewayOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize client preference from localStorage or browser language
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
      const gatewaySeen = localStorage.getItem(GATEWAY_SEEN_KEY);

      if (savedLang && (savedLang === 'id' || savedLang === 'en' || savedLang === 'zh')) {
        setLanguageState(savedLang);
        setIsGatewayOpen(false);
      } else {
        // First time visitor: check browser language
        const browserLang = navigator.language?.toLowerCase() || '';
        let detectedLang: SupportedLanguage = 'id';
        if (browserLang.startsWith('zh')) {
          detectedLang = 'zh';
        } else if (browserLang.startsWith('en')) {
          detectedLang = 'en';
        }

        setLanguageState(detectedLang);

        // Show Gateway overlay if not seen yet
        if (!gatewaySeen) {
          setIsGatewayOpen(true);
        }
      }
    } catch (e) {
      console.warn('Language initialization error:', e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem(GATEWAY_SEEN_KEY, 'true');
      document.documentElement.lang = lang;
    } catch (e) {
      console.warn('Failed to save language preference:', e);
    }
  };

  const closeGateway = () => {
    setIsGatewayOpen(false);
    try {
      localStorage.setItem(GATEWAY_SEEN_KEY, 'true');
      if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, language);
      }
    } catch (e) {
      console.warn('Failed to save gateway status:', e);
    }
  };

  const openGateway = () => {
    setIsGatewayOpen(true);
  };

  // Nested property lookup with dot notation, e.g. t('navbar.tourPackages')
  const t = (path: string, fallback?: string): string => {
    const keys = path.split('.');
    let current = translationsMap[language] || translationsMap.id;

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to Indonesian if key not found in active language
        let fallbackCurrent = translationsMap.id;
        for (const fbKey of keys) {
          if (fallbackCurrent && typeof fallbackCurrent === 'object' && fbKey in fallbackCurrent) {
            fallbackCurrent = fallbackCurrent[fbKey];
          } else {
            fallbackCurrent = undefined;
            break;
          }
        }
        return typeof fallbackCurrent === 'string' ? fallbackCurrent : (fallback || path);
      }
    }

    return typeof current === 'string' ? current : (fallback || path);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isGatewayOpen,
        openGateway,
        closeGateway,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
