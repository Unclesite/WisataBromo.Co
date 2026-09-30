import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Mountain, Sparkles, MapPin, Compass, Play, Pause } from 'lucide-react';

import imgSunriseJeep from '../assets/images/bromo_sunrise_jeep_1790773945206.jpg';
import imgSeaClouds from '../assets/images/bromo_sea_clouds_1790773968204.jpg';
import imgGoldenHour from '../assets/images/bromo_golden_hour_1790774487968.jpg';
import imgWidodarenCliff from '../assets/images/bromo_widodaren_cliff_1790774506404.jpg';

interface SlideItem {
  id: string;
  title: string;
  subtitle: string;
  locationTag: string;
  elevation: string;
  highlightLabel: string;
  imageUrl: string;
  description: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 'penanjakan-batok-semeru',
    title: 'Panorama Penanjakan 1: Bromo, Batok & Semeru',
    subtitle: 'Menyaksikan tiga mahakarya vulkanik megah berdiri di atas samudera lautan awan putih abadi.',
    locationTag: 'Viewpoint Penanjakan 1',
    elevation: '2.770 mdpl',
    highlightLabel: 'Golden Sunrise & Lautan Awan',
    imageUrl: imgSunriseJeep,
    description: 'Dari ketinggian 2.770 mdpl, formasi kerucut Gunung Batok bergaris dramatis, kawah aktif Gunung Bromo yang mengepulkan asap putih, serta siluet kerucut tertinggi Gunung Semeru (3.676 mdpl) tampak melayang di atas hamparan lautan awan tebal.'
  },
  {
    id: 'lautan-awan-samudera',
    title: 'Samudera Lautan Awan Kaldera Tengger',
    subtitle: 'Sensasi magis berdiri di negeri di atas awan saat kabut fajar menenggelamkan kaldera 5.250 hektar.',
    locationTag: 'Kingkong Hill & Seruni',
    elevation: '2.650 mdpl',
    highlightLabel: 'Fenomena Sea of Clouds',
    imageUrl: imgSeaClouds,
    description: 'Gumpalan awan putih halus menyerupai permadani kapas yang bergerak perlahan mengikuti hembusan angin fajar. Sebuah pemandangan spektakuler yang diakui sebagai salah satu sunrise terindah di dunia.'
  },
  {
    id: 'fajar-emas-golden-hour',
    title: 'Fajar Jingga Keemasan (Golden Hour)',
    subtitle: 'Cahaya pertama mentari menyapu lereng Batok, pasir berbisik, dan kepulan belerang kawah.',
    locationTag: 'Bukit Cinta & Dingklik',
    elevation: '2.680 mdpl',
    highlightLabel: 'Golden Hour 05:14 WIB',
    imageUrl: imgGoldenHour,
    description: 'Gradasi spektrum warna langit dari biru indigo, ungu fajar, hingga semburat jingga keemasan yang menghangatkan suhu beku 4°C di puncak Penanjakan.'
  },
  {
    id: 'lembah-widodaren-pura-poten',
    title: 'Tebing Widodaren & Pura Luhur Poten',
    subtitle: 'Keheningan suci Pura Hindu Tengger berlatar tebing purba Widodaren dalam kabut mistis.',
    locationTag: 'Segara Wedhi Lautan Pasir',
    elevation: '2.100 mdpl',
    highlightLabel: 'Spot Foto Ikonik Jeep',
    imageUrl: imgWidodarenCliff,
    description: 'Setelah sunrise dari puncak, turun menuju dasar kaldera di mana dinding tebing Widodaren yang menjulang tinggi menjadi latar foto terbaik di atas kap Jeep Land Cruiser 4x4.'
  }
];

interface BromoHeroSliderProps {
  onOpenBooking: () => void;
}

export const BromoHeroSlider: React.FC<BromoHeroSliderProps> = ({ onOpenBooking }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay, currentIdx]);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Touch handlers for mobile swipe gesture
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = SLIDES[currentIdx];

  return (
    <div
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-[#102a56] text-white select-none transition-all"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Animated Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/15 z-20 overflow-hidden">
        <div
          key={currentIdx}
          className="h-full bg-[#ffc928] transition-all ease-linear"
          style={{
            animation: isAutoPlay ? 'progress 6s linear infinite' : 'none',
            width: isAutoPlay ? '100%' : `${((currentIdx + 1) / SLIDES.length) * 100}%`
          }}
        />
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {/* Main Responsive Slide Container */}
      <div className="relative min-h-[440px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[540px] flex flex-col justify-between p-4 sm:p-7 md:p-9 lg:p-11">
        
        {/* Real Photo Background for Golden Sunrise, Sea of Clouds, Golden Hour & Widodaren */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100 pointer-events-none'
              } transition-transform duration-7000 ease-out`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* High Contrast Gradient Scrim Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#102a56] via-[#102a56]/60 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#102a56]/95 via-[#102a56]/70 to-transparent sm:max-w-[75%]"></div>
        </div>

        {/* Top Header Zone: Badges & Controls */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-extrabold text-[#102a56] bg-[#ffc928] px-2.5 sm:px-3 py-1 rounded-lg shadow-md">
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-[#102a56]" />
              <span className="truncate max-w-[150px] sm:max-w-none">{currentSlide.highlightLabel}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-white/95 bg-[#102a56]/80 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-lg border border-white/20">
              <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#ffc928] shrink-0" />
              <span className="truncate max-w-[130px] sm:max-w-none">{currentSlide.locationTag} ({currentSlide.elevation})</span>
            </span>
          </div>

          {/* Play/Pause & Counter */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-black/50 backdrop-blur-md border border-white/20 px-2.5 sm:px-3 py-1 rounded-xl text-xs text-white shrink-0">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="hover:text-[#ffc928] transition-colors p-0.5 cursor-pointer"
              title={isAutoPlay ? 'Jeda Slide' : 'Putar Otomatis'}
              aria-label={isAutoPlay ? 'Jeda Slide' : 'Putar Otomatis'}
            >
              {isAutoPlay ? <Pause className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> : <Play className="w-3 sm:w-3.5 h-3 sm:h-3.5" />}
            </button>
            <span className="font-mono tabular-nums font-bold text-[11px] sm:text-xs">
              0{currentIdx + 1} / 0{SLIDES.length}
            </span>
          </div>
        </div>

        {/* Middle Content Zone: Typography & Information */}
        <div className="relative z-10 max-w-2xl my-auto py-4 sm:py-6">
          <div className="text-[11px] sm:text-xs font-extrabold text-[#ffc928] tracking-wider mb-1.5 flex items-center gap-1.5 uppercase drop-shadow-sm">
            <Mountain className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <span>KESEJUKAN KALDERA TENGGER 2.770 MDPL</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-snug sm:leading-tight mb-2 sm:mb-3 drop-shadow-lg">
            {currentSlide.title}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-100 font-semibold leading-relaxed mb-3 sm:mb-4 drop-shadow-md max-w-xl line-clamp-2 sm:line-clamp-none">
            {currentSlide.subtitle}
          </p>

          <p className="text-[11px] sm:text-xs md:text-sm text-slate-100 leading-relaxed bg-[#102a56]/85 backdrop-blur-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20 max-w-xl mb-4 sm:mb-6 hidden xs:block line-clamp-3 sm:line-clamp-none shadow-lg">
            {currentSlide.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenBooking}
              className="flex-1 sm:flex-none justify-center px-4.5 sm:px-5 py-2.5 sm:py-3 text-xs font-extrabold text-[#102a56] bg-[#ffc928] hover:bg-[#ffb700] rounded-xl transition-all shadow-lg shadow-[#ffc928]/30 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Compass className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              <span>Pesan Trip Sunrise Penanjakan</span>
            </button>
            <a
              href="#tips-dan-panduan"
              className="px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs font-bold text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 rounded-xl transition-colors text-center"
            >
              5 Spot Sunrise
            </a>
          </div>
        </div>

        {/* Bottom Slide Navigation & Touch Indicator */}
        <div className="relative z-10 flex items-center justify-between gap-3 pt-3 border-t border-white/20">
          {/* Dots / Tabs for mobile and desktop */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 max-w-[75%] sm:max-w-none">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIdx(idx)}
                className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl transition-all font-semibold flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  currentIdx === idx
                    ? 'bg-[#ffc928] text-[#102a56] font-extrabold shadow-md'
                    : 'bg-black/40 hover:bg-black/60 text-white/90 border border-white/20 backdrop-blur-md'
                }`}
                aria-label={`Pilih slide ${idx + 1}`}
              >
                <span className="font-mono text-[10px]">0{idx + 1}</span>
                <span className="hidden md:inline truncate max-w-[120px]">{slide.highlightLabel}</span>
              </button>
            ))}
          </div>

          {/* Swipe / Arrow Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/25 transition-all cursor-pointer active:scale-90"
              aria-label="Slide Sebelumnya"
            >
              <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 sm:p-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/25 transition-all cursor-pointer active:scale-90"
              aria-label="Slide Selanjutnya"
            >
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
