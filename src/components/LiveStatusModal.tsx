import React, { useState } from 'react';
import { 
  X, RefreshCw, Sun, Cloud, CloudSun, CloudFog, CloudRain, 
  Wind, Droplets, Sunrise, Sunset, ShieldCheck, AlertTriangle, 
  CheckCircle2, MapPin, Compass, ExternalLink, Activity
} from 'lucide-react';
import { WeatherData } from '../services/weatherService';
import { getOfficialTnbtsStatus, TnbtsStatusData } from '../services/tnbtsStatusService';

interface LiveStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  weather: WeatherData;
  isLoadingWeather: boolean;
  onRefreshWeather: () => void;
}

export const LiveStatusModal: React.FC<LiveStatusModalProps> = ({
  isOpen,
  onClose,
  weather,
  isLoadingWeather,
  onRefreshWeather,
}) => {
  const [activeTab, setActiveTab] = useState<'cuaca' | 'tnbts'>('cuaca');
  const tnbtsStatus: TnbtsStatusData = getOfficialTnbtsStatus();

  if (!isOpen) return null;

  const renderWeatherIcon = (code: number, isDay: boolean = true) => {
    if (code === 0) return <Sun className="w-8 h-8 text-[#ffc928] animate-pulse" />;
    if (code === 1 || code === 2) return <CloudSun className="w-8 h-8 text-[#ffc928]" />;
    if (code === 45 || code === 48) return <CloudFog className="w-8 h-8 text-[#0996f5]" />;
    if (code >= 51 && code <= 82) return <CloudRain className="w-8 h-8 text-[#0996f5]" />;
    return <Cloud className="w-8 h-8 text-slate-400" />;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl my-6 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#102a56] to-[#1e3a8a] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Activity className="w-5 h-5 text-[#ffc928]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-white">
                  Live Monitoring Gunung Bromo
                </h2>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-[11px] text-white/80">
                Data Terkini BMKG/Satelit & Balai Besar TNBTS Jawa Timur
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-slate-200 bg-slate-50 p-2 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('cuaca')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'cuaca'
                ? 'bg-[#0996f5] text-white shadow-sm'
                : 'text-[#111318] hover:bg-slate-200/70'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>Live Cuaca & Suhu Bromo</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tnbts')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'tnbts'
                ? 'bg-[#0996f5] text-white shadow-sm'
                : 'text-[#111318] hover:bg-slate-200/70'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Status Buka TNBTS & PVMBG</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-[#111318] flex-1">
          
          {/* TAB 1: LIVE CUACA */}
          {activeTab === 'cuaca' && (
            <div className="space-y-5 animate-fadeIn">
              
              {/* Primary Current Weather Card */}
              <div className="p-5 bg-gradient-to-br from-[#e5f4ff] via-white to-[#f0f7ff] border border-[#0996f5]/25 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-200">
                      {renderWeatherIcon(weather.weatherCode, weather.isDay)}
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Kaldera Tengger (2.177 mdpl)
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-[#102a56] font-mono tabular-nums">
                        {weather.temperature}°C
                      </div>
                      <div className="text-xs font-bold text-[#0996f5] flex items-center gap-1.5 mt-0.5">
                        <span>{weather.conditionText}</span>
                        <span className="text-slate-400 font-normal">· Terasa seperti {weather.apparentTemperature}°C</span>
                      </div>
                    </div>
                  </div>

                  {/* Refresh Button */}
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <button
                      type="button"
                      onClick={onRefreshWeather}
                      disabled={isLoadingWeather}
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-[#e5f4ff] text-[#0996f5] border border-[#0996f5]/30 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer disabled:opacity-50"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isLoadingWeather ? 'animate-spin' : ''}`} />
                      <span>{isLoadingWeather ? 'Memperbarui...' : 'Perbarui Cuaca'}</span>
                    </button>
                  </div>
                </div>

                {/* Sub-stats (Sunrise, Humidity, Wind, Range) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 pt-4 border-t border-slate-200/80 text-xs">
                  <div className="p-2.5 bg-white/80 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase">
                      <Sunrise className="w-3.5 h-3.5 text-[#ffc928]" />
                      <span>Golden Sunrise</span>
                    </div>
                    <div className="font-mono font-black text-sm text-[#102a56] mt-1">
                      {weather.sunrise}
                    </div>
                  </div>

                  <div className="p-2.5 bg-white/80 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase">
                      <Sunset className="w-3.5 h-3.5 text-[#0996f5]" />
                      <span>Sunset Bromo</span>
                    </div>
                    <div className="font-mono font-black text-sm text-[#102a56] mt-1">
                      {weather.sunset}
                    </div>
                  </div>

                  <div className="p-2.5 bg-white/80 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase">
                      <Droplets className="w-3.5 h-3.5 text-[#0996f5]" />
                      <span>Kelembaban</span>
                    </div>
                    <div className="font-mono font-black text-sm text-[#102a56] mt-1">
                      {weather.humidity}%
                    </div>
                  </div>

                  <div className="p-2.5 bg-white/80 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase">
                      <Wind className="w-3.5 h-3.5 text-[#0996f5]" />
                      <span>Kecepatan Angin</span>
                    </div>
                    <div className="font-mono font-black text-sm text-[#102a56] mt-1">
                      {weather.windSpeed} km/h
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 mt-3 flex items-center justify-between">
                  <span>📡 Sumber: {weather.source}</span>
                  <span>Diperbarui: {weather.lastUpdated}</span>
                </div>
              </div>

              {/* 3-Day Forecast */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-black text-[#102a56] uppercase tracking-wider">
                  Prakiraan Cuaca 3 Hari Kedepan (Gunung Bromo):
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {weather.forecast.map((f, i) => (
                    <div key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-black text-[#102a56]">{f.dayLabel}</span>
                        <span className="text-[10px] text-slate-500 font-mono">{f.date}</span>
                      </div>
                      <div className="text-xs text-slate-700 font-semibold mb-2">
                        {f.conditionText}
                      </div>
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200">
                        <span className="text-slate-500 text-[11px]">Rentang Suhu:</span>
                        <span className="font-mono font-bold text-[#0996f5]">{f.tempMin}°C - {f.tempMax}°C</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips Suhu */}
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>Tips Pakaian: </strong>
                  Suhu dini hari di Viewpoint Penanjakan 1 dapat turun hingga <strong>2°C – 8°C</strong> dengan hembusan angin dingin. Disarankan memakai jaket tebal (windbreaker/down), sarung tangan, kupluk, dan masker debu.
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STATUS RESMI TNBTS & PVMBG */}
          {activeTab === 'tnbts' && (
            <div className="space-y-5 animate-fadeIn">
              
              {/* Official Status Banner */}
              <div className="p-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl shadow-md">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-white text-emerald-800 text-[10px] font-black rounded-full uppercase tracking-wider">
                    Status Resmi TNBTS
                  </span>
                  <span className="text-[11px] text-white/90">
                    Sinkronisasi: {tnbtsStatus.lastCheckedDate}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {tnbtsStatus.statusBadge}: {tnbtsStatus.statusHeadline}
                </h3>
                <p className="text-xs text-white/90 mt-2 leading-relaxed">
                  Kawasan Kaldera Bromo dibuka normal untuk wisatawan. Seluruh armada Jeep 4x4, kuota tiket online SIMAKSI resmi, dan jalur wisata beroperasi aktif.
                </p>
              </div>

              {/* Status Vulkanik PVMBG & Rekomendasi */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#ffc928]" />
                    <span className="text-xs font-black text-[#102a56]">Aktivitas Vulkanik (PVMBG / MAGMA Indonesia):</span>
                  </div>
                  <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-lg">
                    {tnbtsStatus.pvmbgLevel}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {tnbtsStatus.safetyRecommendation}
                </p>
              </div>

              {/* Allowed Spots Checklist */}
              <div className="space-y-2">
                <div className="text-xs font-black text-[#102a56] uppercase tracking-wider">
                  Daftar Spot Wisata Bromo yang 100% AMAN & DIBUKA:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {tnbtsStatus.allowedSpots.map((spot, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl text-emerald-900 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{spot}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Gates Status */}
              <div className="space-y-2.5">
                <div className="text-xs font-black text-[#102a56] uppercase tracking-wider">
                  Status 4 Pintu Gerbang Masuk TNBTS Bromo:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tnbtsStatus.gates.map((gate, i) => (
                    <div key={i} className="p-3 bg-white border border-slate-200 rounded-2xl shadow-2xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-[#102a56]">{gate.name}</span>
                        <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                          {gate.status}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600">{gate.description}</div>
                      <div className="text-[10px] text-slate-500 font-semibold pt-1">
                        Armada: {gate.accessibleBy}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Credibility */}
              <div className="p-3.5 bg-[#e5f4ff] border border-[#0996f5]/20 rounded-2xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0996f5]" />
                  <span className="font-bold text-[#102a56]">Operator Berizin Resmi TNBTS: PT Global Travel Healing</span>
                </div>
                <a
                  href="https://bromotenggersemeru.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0996f5] font-bold hover:underline inline-flex items-center gap-1 text-[11px]"
                >
                  <span>Portal BB TNBTS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <div className="text-slate-500 text-[11px]">
            WisataBromo.co · Update Otomatis Real-Time
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#0996f5] hover:bg-[#0782d6] text-white font-bold rounded-xl transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
