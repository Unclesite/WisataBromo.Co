import React from 'react';
import { RefreshCw, Sun, CloudFog, CloudSun, CloudRain, Cloud, ChevronRight, Activity, ShieldCheck } from 'lucide-react';
import { WeatherData } from '../services/weatherService';
import { TnbtsStatusData } from '../services/tnbtsStatusService';

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
  const renderMiniWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="w-3.5 h-3.5 text-[#ffc928]" />;
    if (code === 1 || code === 2) return <CloudSun className="w-3.5 h-3.5 text-[#ffc928]" />;
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
              <span className="hidden xs:inline">STATUS BROMO : </span>{tnbtsStatus.statusBadge}
            </span>
          </div>

          <span className="text-slate-600 hidden sm:inline" aria-hidden="true">|</span>

          {/* PVMBG Level (Desktop only) */}
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <Activity className="w-3.5 h-3.5 text-[#ffc928]" />
            <span>PVMBG: <strong className="text-white font-bold">{tnbtsStatus.pvmbgLevel}</strong> (Aman 1 km)</span>
          </div>

          <span className="text-slate-600 hidden md:inline" aria-hidden="true">|</span>

          {/* Live Cuaca Bromo */}
          <div className="flex items-center gap-1 text-white/90 truncate">
            {renderMiniWeatherIcon(weather.weatherCode)}
            <span className="font-mono font-bold text-white tabular-nums">{weather.temperature}°C</span>
            <span className="text-slate-300 hidden sm:inline">{weather.conditionText}</span>
            <span className="text-slate-400 hidden xl:inline">· Sunrise {weather.sunrise}</span>
          </div>
        </div>

        {/* Right Side: Refresh & CTA to Open Details */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={onRefreshWeather}
            disabled={isLoadingWeather}
            title="Perbarui data cuaca"
            className="p-1 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
            aria-label="Refresh cuaca live"
          >
            <RefreshCw className={`w-3 h-3 ${isLoadingWeather ? 'animate-spin' : ''}`} />
          </button>

          <button
            type="button"
            onClick={onOpenDetails}
            className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 bg-[#0996f5] hover:bg-[#0782d6] text-white rounded-lg font-black text-[10px] sm:text-[11px] transition-all cursor-pointer whitespace-nowrap shadow-xs"
          >
            <span>Live Info Cuaca</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
