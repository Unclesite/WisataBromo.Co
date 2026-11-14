import React from 'react';
import { RefreshCw, Sun, CloudFog, CloudSun, CloudRain, Cloud, ChevronRight, Activity, ShieldCheck } from 'lucide-react';
import { WeatherData } from '../services/weatherService';
import { TnbtsStatusData } from '../services/tnbtsStatusService';
import { useLanguage } from '../i18n/LanguageContext';

interface LiveTnbtsWeatherBarProps {
  weather: WeatherData;
  tnbtsStatus: TnbtsStatusData;
  isLoadingWeather: boolean;
  onRefreshWeather: () => void;
  onOpenDetails: () => void;
}

export const LiveTnbtsWeatherBar: React.FC<LiveTnbtsWeatherBarProps> = ({
  weather,
  tnbtsStatus,
  isLoadingWeather,
  onRefreshWeather,
  onOpenDetails,
}) => {
  const { language, t } = useLanguage();

  const getLocalizedStatusBadge = (badge: string) => {
    if (language === 'en') return badge.replace('BUKA NORMAL', 'OPEN NORMALLY');
    if (language === 'zh') return badge.replace('BUKA NORMAL', '正常开放');
    return badge;
  };

  const getLocalizedPvmbg = (level: string) => {
    if (language === 'en') return level.replace('Level II (Waspada)', 'Level II (Alert)').replace('Aman 1 km', 'Safe 1 km radius');
    if (language === 'zh') return level.replace('Level II (Waspada)', 'II级 (警戒)').replace('Aman 1 km', '安全1公里半径');
    return level;
  };

  const getLocalizedCondition = (condition: string) => {
    if (!condition) return condition;
    if (language === 'en') {
      if (condition.includes('Cerah Berawan')) return 'Partly Cloudy';
      if (condition.includes('Cerah')) return 'Clear Sky';
      if (condition.includes('Berawan')) return 'Cloudy';
      if (condition.includes('Kabut')) return 'Cool Alpine Mist';
      if (condition.includes('Hujan Ringan')) return 'Light Rain';
      if (condition.includes('Hujan')) return 'Rain';
      return condition;
    }
    if (language === 'zh') {
      if (condition.includes('Cerah Berawan')) return '晴间多云';
      if (condition.includes('Cerah')) return '晴朗';
      if (condition.includes('Berawan')) return '多云';
      if (condition.includes('Kabut')) return '清凉薄雾';
      if (condition.includes('Hujan Ringan')) return '小雨';
      if (condition.includes('Hujan')) return '降雨';
      return condition;
    }
    return condition;
  };

  const renderMiniWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="w-3.5 h-3.5 text-[#fff700]" />;
    if (code === 1 || code === 2) return <CloudSun className="w-3.5 h-3.5 text-[#fff700]" />;
    if (code === 45 || code === 48) return <CloudFog className="w-3.5 h-3.5 text-[#0996f5]" />;
    if (code >= 51 && code <= 82) return <CloudRain className="w-3.5 h-3.5 text-[#0996f5]" />;
    return <Cloud className="w-3.5 h-3.5 text-slate-400" />;
  };

  return (
    <div className="w-full bg-[#000000] text-white border-b border-neutral-900 text-[10px] sm:text-xs py-1.5 px-2.5 sm:px-6 relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-hidden">
        
        {/* Left Side: Status Buka TNBTS & Live Weather */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          {/* Status TNBTS Badge */}
          <div className="flex items-center gap-1 font-bold shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-extrabold uppercase tracking-tight">
              <span className="hidden xs:inline">{t('weatherBar.officialStatus', 'STATUS BROMO : ')} </span>
              {getLocalizedStatusBadge(tnbtsStatus.statusBadge)}
            </span>
          </div>

          <span className="text-slate-600 hidden sm:inline" aria-hidden="true">|</span>

          {/* PVMBG Level (Desktop only) */}
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <Activity className="w-3.5 h-3.5 text-[#fff700]" />
            <span>PVMBG: <strong className="text-white font-bold">{getLocalizedPvmbg(tnbtsStatus.pvmbgLevel)}</strong></span>
          </div>

          <span className="text-slate-600 hidden md:inline" aria-hidden="true">|</span>

          {/* Live Cuaca Bromo */}
          <div className="flex items-center gap-1 text-white/90 truncate">
            {renderMiniWeatherIcon(weather.weatherCode)}
            <span className="font-mono font-bold text-white tabular-nums">{weather.temperature}°C</span>
            <span className="text-slate-300 hidden sm:inline">{getLocalizedCondition(weather.conditionText)}</span>
            <span className="text-slate-400 hidden xl:inline">· {t('weatherBar.sunrise', 'Sunrise:')} {weather.sunrise}</span>
          </div>
        </div>

        {/* Right Side: Refresh & CTA to Open Details */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={onRefreshWeather}
            disabled={isLoadingWeather}
            title={language === 'en' ? 'Refresh weather' : language === 'zh' ? '刷新天气' : 'Perbarui data cuaca'}
            className="p-1 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
            aria-label="Refresh cuaca live"
          >
            <RefreshCw className={`w-3 h-3 ${isLoadingWeather ? 'animate-spin' : ''}`} />
          </button>

          <button
            type="button"
            onClick={onOpenDetails}
            className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 bg-[#fff700] hover:bg-yellow-300 text-black rounded-lg font-black text-[10px] sm:text-[11px] transition-all cursor-pointer whitespace-nowrap shadow-xs"
          >
            <span>{t('weatherBar.viewStatus', 'Live Info Cuaca')}</span>
            <ChevronRight className="w-3 h-3 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};
