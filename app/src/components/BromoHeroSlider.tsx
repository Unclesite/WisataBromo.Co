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
    title: 'Golden Sunrise Penanjakan 1: Bromo, Batok & Semeru',
    subtitle: 'Mahakarya formasi vulkanik terindah di dunia di atas samudera lautan awan abadi.',
    locationTag: 'Viewpoint Penanjakan 1',
    elevation: '2.770 mdpl',
    highlightLabel: 'Golden Sunrise & Lautan Awan',
    imageUrl: imgSunriseJeep,
    description: 'Dari ketinggian 2.770 mdpl, formasi kerucut Gunung Batok bergaris dramatis, kawah aktif Gunung Bromo yang mengepulkan asap putih, serta siluet puncak Gunung Semeru (3.676 mdpl) tampak melayang di atas hamparan lautan awan tebal.'
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
    description: 'Gradasi spektrum warna langit dari biru indigo, ungu fajar, hingga semburat jingga keemasan yang menghangatkan suhu sejuk di puncak Penanjakan.'
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
  onExplorePackages: () => void;
}

export const BromoHeroSlider: React.FC<BromoHeroSliderProps> = ({ onOpenBooking, onExplorePackages }) => {
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
      className="relative w-full overflow-hidden bg-[#111318] text-white select-none transition-all"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Animated Progress Bar in Dominant Blue #3d72fe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20 overflow-hidden">
        <div
          key={currentIdx}
          className="h-full bg-[#3d72fe] transition-all ease-linear"
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

      {/* Main Full-Bleed Slide Viewport */}
      <div className="relative min-h-[480px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between pt-6 pb-16 sm:pb-14 lg:pb-24 px-4 sm:px-8 lg:px-16">
        
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

          {/* Subtle vignette overlay so badges and bottom controls are readable without obstructing header scenery */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>

        {/* Top Header Ticker on Slide with Dominant Blue #3d72fe */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 max-w-7xl mx-auto w-full">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-[#3d72fe] px-3.5 py-1.5 rounded-xl shadow-md shadow-[#3d72fe]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#ffc928]" />
              <span>{currentSlide.highlightLabel}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-[#3d72fe]" />
              <span>{currentSlide.locationTag} · {currentSlide.elevation}</span>
            </span>
          </div>

          {/* Slide Auto-Play Toggle (No Numbers) */}
          <div className="flex items-center bg-black/50 backdrop-blur-md border border-white/20 p-1.5 rounded-xl text-xs text-white">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="hover:text-[#3d72fe] transition-colors p-1 cursor-pointer"
              title={isAutoPlay ? 'Jeda Slide Otomatis' : 'Putar Slide Otomatis'}
              aria-label={isAutoPlay ? 'Jeda Slide Otomatis' : 'Putar Slide Otomatis'}
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Middle Content Zone removed to keep header background photography 100% clean and unobstructed */}
        <div className="relative z-10 my-auto py-12 sm:py-20"></div>

        {/* Floating Slide Navigation Arrows on the Left and Right */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-xl hover:border-white/60"
          aria-label="Slide Sebelumnya"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-xl hover:border-white/60"
          aria-label="Slide Selanjutnya"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Slide Indicators (Clean Dots Only - No Numbers, No Border Line) */}
        <div className="relative z-10 flex items-center justify-center gap-2 max-w-7xl mx-auto w-full pt-2 pb-3 sm:pb-0">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIdx(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer min-h-[14px] flex items-center justify-center p-1 ${
                currentIdx === idx
                  ? 'w-8 h-2.5 bg-[#3d72fe] shadow-md shadow-[#3d72fe]/50'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Pindah ke slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
