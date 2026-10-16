import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Mountain } from 'lucide-react';

import header01 from '../assets/images/header/header_01_633b7b65.jpg';
import header02 from '../assets/images/header/header_02_2f94bb9e.jpg';
import header03 from '../assets/images/header/header_03_51c89c20.jpg';
import header04 from '../assets/images/header/header_04_5db1f48e.jpg';
import header05 from '../assets/images/header/header_05_mystical_temple.jpg';
import header06 from '../assets/images/header/header_06_362a1c07.jpg';
import header07 from '../assets/images/header/header_07_f47cb8b6.jpg';
import header08 from '../assets/images/header/header_08_236c626a.jpg';
import header09 from '../assets/images/header/header_09_65fbd49c.jpg';
import header10 from '../assets/images/header/header_10_vintage_4x4.jpg';
import header11 from '../assets/images/header/header_11_81a01754.png';
import header12 from '../assets/images/header/header_12_family_picnic.jpg';
import header13 from '../assets/images/header/header_13_9ff4f27d.png';
import header14 from '../assets/images/header/header_14_jeep_expedition.png';
import header15 from '../assets/images/header/header_15_baweantrip.jpg';
import header16 from '../assets/images/header/header_16_3760fd9b.png';
import header17 from '../assets/images/header/header_17_1791386575556.jpg';
import header18 from '../assets/images/header/header_18_1791387293923.jpg';
import header19 from '../assets/images/header/header_19_lightroom_panorama.jpg';
import header20 from '../assets/images/header/header_20_dbbd6620.png';
import header21 from '../assets/images/header/header_21_crater_steam_plume.png';
import header22 from '../assets/images/header/header_22_horizon_9c2881fa.jpg';
import header23 from '../assets/images/header/header_23_golden_sunrise_shrine.png';

export interface SlideItem {
  id: string;
  title: string;
  subtitle: string;
  locationTag: string;
  elevation: string;
  highlightLabel: string;
  imageUrl: string;
  description: string;
}

export const DEFAULT_SLIDES: SlideItem[] = [
  {
    id: 'slide-633b7b65',
    title: 'Cakrawala Megah Kaldera Bromo Tengger',
    subtitle: 'Perspektif luas lanskap pegunungan vulkanis yang memukau di bawah langit cerah pegunungan.',
    locationTag: 'Kaldera Bromo Tengger',
    elevation: '2.329 mdpl',
    highlightLabel: 'Panorama Unggulan Bromo',
    imageUrl: header01,
    description: 'Panorama luas yang memperlihatkan keasrian alam pegunungan Tengger dengan perbukitan vulkanik dan kaldera pasir yang membentang mempesona.'
  },
  {
    id: 'slide-2f94bb9e',
    title: 'Eksotisme Pasir Berbisik & Kerucut Batok',
    subtitle: 'Hamparan lautan pasir purba membentang mengelilingi relief kerucut Gunung Batok nan legendaris.',
    locationTag: 'Segara Wedhi & Batok',
    elevation: '2.100 mdpl',
    highlightLabel: 'Lautan Pasir Ikonik',
    imageUrl: header02,
    description: 'Hamparan pasir vulkanik luas berbisik ditiup angin sejuk, dikelilingi dinding tebing purba kaldera Bromo.'
  },
  {
    id: 'slide-51c89c20',
    title: 'Sunrise Emas Menghangatkan Kaldera Tengger',
    subtitle: 'Momen magis mentari terbit menyinari puncak Semeru, Batok, dan kawah aktif Bromo.',
    locationTag: 'Penanjakan & Kingkong Hill',
    elevation: '2.770 mdpl',
    highlightLabel: 'Golden Hour Sunrise',
    imageUrl: header03,
    description: 'Gradasi warna fajar spektakuler yang diakui dunia sebagai salah satu momen matahari terbit paling memukau di Indonesia.'
  },
  {
    id: 'slide-5db1f48e',
    title: 'Konvoi Jeep Land Cruiser 4x4 di Lautan Pasir',
    subtitle: 'Ikon petualangan off-road melintasi padang pasir vulkanik menuju spot terbaik kaldera.',
    locationTag: 'Lautan Pasir Bromo',
    elevation: '2.150 mdpl',
    highlightLabel: 'Off-Road 4x4 Adventure',
    imageUrl: header04,
    description: 'Sensasi meluncur bersama armada Jeep Toyota Land Cruiser legendaris melintasi jalur off-road kaldera Tengger.'
  },
  {
    id: 'slide-mystical-temple',
    title: 'Pura Luhur Poten: Kuil Suci di Dasar Kaldera',
    subtitle: 'Tempat peribadatan suci masyarakat suku Tengger yang berdiri kokoh di tengah lautan pasir.',
    locationTag: 'Dasar Kawah Segara Wedhi',
    elevation: '2.200 mdpl',
    highlightLabel: 'Warisan Sakral Tengger',
    imageUrl: header05,
    description: 'Pusat upacara adat Yadnya Kasada yang memancarkan aura mistis dan spiritualitas luhur masyarakat Hindu Tengger.'
  },
  {
    id: 'slide-362a1c07',
    title: 'Dinding Tebing Megah Widodaren',
    subtitle: 'Formasi tebing batu purba nan menjulang tinggi menjadi latar foto favorit para petualang.',
    locationTag: 'Tebing Widodaren Bromo',
    elevation: '2.250 mdpl',
    highlightLabel: 'Spot Foto Widodaren',
    imageUrl: header06,
    description: 'Pahatan alam dinding batu cadas Widodaren memberikan kesan gagah dan dramatis di setiap sudut pemotretan.'
  },
  {
    id: 'slide-f47cb8b6',
    title: 'Panorama Spektakuler Lembah Kaldera Purba',
    subtitle: 'Pemandangan tak berbatas menyajikan harmoni alam pegunungan Jawa Timur nan memesona.',
    locationTag: 'Seruni Point & Dingklik',
    elevation: '2.600 mdpl',
    highlightLabel: 'Lanskap Kaldera Luas',
    imageUrl: header07,
    description: 'Pandangan 360 derajat membentang ke seluruh penjuru kaldera, mengabadikan keagungan alam semesta.'
  },
  {
    id: 'slide-236c626a',
    title: 'Petualangan Eksplorasi Bromo Bersama Sahabat',
    subtitle: 'Abadikan momen kebersamaan tak terlupakan di atas kap jeep berlatar kaldera luas.',
    locationTag: 'Bukit Cinta Bromo',
    elevation: '2.680 mdpl',
    highlightLabel: 'Momen Foto Favorit',
    imageUrl: header08,
    description: 'Dokumentasi eksklusif gaya hidup petualang bersama fotografer profesional berlatar belakang matahari fajar.'
  },
  {
    id: 'slide-65fbd49c',
    title: 'Jejak Langkah Menuju Bibir Kawah Bromo',
    subtitle: 'Mendaki tangga kawah vulkanis untuk menyaksikan gemuruh kepulan asap belerang bumi.',
    locationTag: 'Kawah Aktif Bromo',
    elevation: '2.329 mdpl',
    highlightLabel: 'Eksplorasi Kawah Aktif',
    imageUrl: header09,
    description: 'Pengalaman tak tertandingi menatap langsung ke dalam kawah bergemuruh dengan aroma belerang alami khas gunung berapi.'
  },
  {
    id: 'slide-vintage-4x4',
    title: 'Klasik & Gagah: Jeep Hardtop 4x4 di Savana Hijau',
    subtitle: 'Perpaduan ketangguhan armada klasik 4x4 dengan hamparan rumput hijau bukit savana.',
    locationTag: 'Lembah Savana Watangan',
    elevation: '2.150 mdpl',
    highlightLabel: 'Vintage 4x4 Savana',
    imageUrl: header10,
    description: 'Keanggunan unit Land Cruiser FJ40 klasik di tengah padang rumput hijau perbukitan Teletubbies Bromo.'
  },
  {
    id: 'slide-81a01754',
    title: 'Kehangatan Budaya & Tradisi Masyarakat Tengger',
    subtitle: 'Kearifan lokal suku Tengger bersarung khas yang ramah menyambut setiap wisatawan.',
    locationTag: 'Desa Wisata Tengger',
    elevation: '2.000 mdpl',
    highlightLabel: 'Kearifan Lokal Tengger',
    imageUrl: header11,
    description: 'Mengenal nilai-nilai luhur dan keramahan warga asli penjaga kelestarian Gunung Suci Bromo.'
  },
  {
    id: 'slide-family-picnic',
    title: 'Picnic Experience: Momen Hangat di Kaki Bromo',
    subtitle: 'Santap hidangan hangat dengan setup meja estetik & butler service di tengah keasrian alam.',
    locationTag: 'Lembah Widodaren',
    elevation: '2.180 mdpl',
    highlightLabel: 'Picnic Experience VIP',
    imageUrl: header12,
    description: 'Layanan piknik sarapan mewah bergaya bohemian dengan menu lezat, kopi panas, dan udara pegunungan yang segar.'
  },
  {
    id: 'slide-9ff4f27d',
    title: 'Gradasi Sunset Menawan di Balik Gunung Batok',
    subtitle: 'Cahaya senja yang menenangkan saat langit kaldera berubah menjadi lembayung keemasan.',
    locationTag: 'Mentigen & Pasir Berbisik',
    elevation: '2.200 mdpl',
    highlightLabel: 'Sunset Magis Kaldera',
    imageUrl: header13,
    description: 'Suasana syahdu dan tenang saat mentari mulai tenggelam di balik dinding kaldera purba Bromo Tengger.'
  },
  {
    id: 'slide-jeep-expedition',
    title: 'Ekspedisi Grup & Gathering Seru di Kaldera',
    subtitle: 'Pilihan terbaik untuk corporate outing, trip keluarga besar, maupun private adventure.',
    locationTag: 'Blok Savana & Pasir Berbisik',
    elevation: '2.150 mdpl',
    highlightLabel: 'Ekspedisi & Gathering',
    imageUrl: header14,
    description: 'Keseruan jelajah alam bersama puluhan rombongan jeep dengan koordinasi profesional tim WisataBromo.co.'
  },
  {
    id: 'slide-baweantrip',
    title: 'Lautan Awan Menutupi Kaldera Seperti Permadani',
    subtitle: 'Kerapatan samudera awan putih tebal yang memanjakan mata di pagi hari yang cerah.',
    locationTag: 'Spot Sunrise Kingkong Hill',
    elevation: '2.650 mdpl',
    highlightLabel: 'Samudera Di Atas Awan',
    imageUrl: header15,
    description: 'Sensasi melayang di atas awan saat gumpalan kabut putih fajar menenggelamkan dasar kaldera 5.250 hektar.'
  },
  {
    id: 'slide-3760fd9b',
    title: 'Pesona Siluet Kuda & Penunggang di Pagi Buta',
    subtitle: 'Nuansa puitis tradisi berkuda masyarakat lokal menembus dinginnya kabut fajar Bromo.',
    locationTag: 'Jalur Lautan Pasir Bromo',
    elevation: '2.150 mdpl',
    highlightLabel: 'Kuda Bromo Legendaris',
    imageUrl: header16,
    description: 'Siluet penunggang kuda suku Tengger berselimut sarung rajut di tengah lautan pasir yang berkabut magis.'
  },
  {
    id: 'slide-1791386575556',
    title: 'Eksotisme Segara Wedhi di Bawah Tebing Purba',
    subtitle: 'Relief pasir vulkanik berbisik yang luas membentang di dasar kaldera sakral Bromo Tengger.',
    locationTag: 'Segara Wedhi & Lautan Pasir',
    elevation: '2.100 mdpl',
    highlightLabel: 'Segara Wedhi Purba',
    imageUrl: header17,
    description: 'Keheningan megah lautan pasir hitam vulkanis seluas ribuan hektar yang menjadi saksi bisu upacara adat Yadnya Kasada.'
  },
  {
    id: 'slide-1791387293923',
    title: 'Harmoni Lembah Kaldera & Puncak Gunung Batok',
    subtitle: 'Komposisi alam sempurna antara dinding tebing kaldera, lembah hijau, dan kerucut Batok.',
    locationTag: 'Lembah Kaldera Tengger',
    elevation: '2.250 mdpl',
    highlightLabel: 'Harmoni Batok & Lembah',
    imageUrl: header18,
    description: 'Kombinasi eksotis bukit hijau dan relief kaldera yang memukau dipandang dari berbagai sudut pandang terbaik Bromo.'
  },
  {
    id: 'slide-lightroom-panorama',
    title: 'Kemegahan Lanskap Fajar Bromo Beresolusi Tinggi',
    subtitle: 'Gradasi cahaya mentari terbit menyibak selimut kabut putih yang memeluk lereng-lereng vulkanik.',
    locationTag: 'Viewpoint Kingkong Hill & Penanjakan',
    elevation: '2.700 mdpl',
    highlightLabel: 'Panorama High-Definition',
    imageUrl: header19,
    description: 'Pemandangan spektakuler kaldera Bromo secara menyeluruh dengan ketajaman warna alam fajar yang tiada duanya.'
  },
  {
    id: 'slide-dbbd6620',
    title: 'Tebing Megah Widodaren & Savana Kaldera',
    subtitle: 'Pesona bentang dinding batuan purba Widodaren yang menjulang anggun di tepi padang rumput savana.',
    locationTag: 'Dinding Tebing Widodaren',
    elevation: '2.180 mdpl',
    highlightLabel: 'Widodaren Majestic Cliff',
    imageUrl: header20,
    description: 'Dinding tebing purba kaldera dengan relief vertikal dramatis yang menjadi latar foto favorit para petualang sejati.'
  },
  {
    id: 'slide-crater-steam-plume',
    title: 'Gemuruh Kepulan Asap Dramatis Kawah Vulkanik',
    subtitle: 'Dinamika hembusan uap putih belerang dari jantung magma aktif kaldera Bromo.',
    locationTag: 'Bibir Kawah Aktif Bromo',
    elevation: '2.329 mdpl',
    highlightLabel: 'Kawah Vulkanik Aktif',
    imageUrl: header21,
    description: 'Menyaksikan langsung tenaga alam bumi yang aktif dengan kepulan asap vulkanis membubung tinggi ke angkasa biru.'
  },
  {
    id: 'slide-horizon-9c2881fa',
    title: 'Cakrawala Lembayung Fajar di Atas Lautan Pasir',
    subtitle: 'Pergantian malam menuju fajar menyuguhkan garis cakrawala ungu keemasan yang menenangkan jiwa.',
    locationTag: 'Cakrawala Lautan Pasir Bromo',
    elevation: '2.150 mdpl',
    highlightLabel: 'Cakrawala Fajar Emas',
    imageUrl: header22,
    description: 'Pesona tenang mentari pagi saat perlahan memancarkan sinar hangat pertama di atas pasir vulkanik kaldera.'
  },
  {
    id: 'slide-golden-sunrise-shrine',
    title: 'Pura Luhur Poten Berselimut Kabut Pagi Emas',
    subtitle: 'Kesakralan tempat ibadah suku Tengger di tengah lautan pasir dengan latar sinar fajar keemasan.',
    locationTag: 'Pura Luhur Poten Tengger',
    elevation: '2.100 mdpl',
    highlightLabel: 'Pura Sakral Kaldera',
    imageUrl: header23,
    description: 'Situs peribadatan suci umat Hindu Tengger yang berdiri kokoh di tengah keheningan pasir vulkanis kaldera Bromo.'
  }
];

export interface BromoHeroSliderProps {
  onOpenBooking?: () => void;
  onExplorePackages?: () => void;
  slides?: SlideItem[];
  photos?: (string | { id?: string; url?: string; title?: string; imageUrl?: string })[];
  images?: string[];
}

export const BromoHeroSlider: React.FC<BromoHeroSliderProps> = ({ 
  onOpenBooking, 
  onExplorePackages,
  slides,
  photos,
  images
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 1. Defensively resolve slides/photos array with guaranteed fallback
  const safeSlides: SlideItem[] = useMemo(() => {
    if (Array.isArray(slides) && slides.length > 0) {
      return slides.filter((s): s is SlideItem => Boolean(s && typeof s === 'object'));
    }
    if (Array.isArray(photos) && photos.length > 0) {
      return photos.filter(Boolean).map((p, idx) => ({
        id: typeof p === 'object' && p?.id ? p.id : `photo-${idx}`,
        title: typeof p === 'object' && p?.title ? p.title : 'Cakrawala Megah Kaldera Bromo',
        subtitle: 'Perspektif lanskap pegunungan vulkanis yang memukau.',
        locationTag: 'Taman Nasional Bromo Tengger Semeru',
        elevation: '2.329 mdpl',
        highlightLabel: 'Panorama Eksklusif Bromo',
        imageUrl: typeof p === 'string' ? p : (p?.imageUrl || p?.url || ''),
        description: 'Panorama keindahan alam kaldera pegunungan Tengger.'
      }));
    }
    if (Array.isArray(images) && images.length > 0) {
      return images.filter(Boolean).map((img, idx) => ({
        id: `img-${idx}`,
        title: 'Panorama Indah Bromo',
        subtitle: 'Bentang alam eksotis Gunung Bromo.',
        locationTag: 'Kaldera Bromo Tengger',
        elevation: '2.329 mdpl',
        highlightLabel: 'Highlight Bromo',
        imageUrl: typeof img === 'string' ? img : '',
        description: 'Lanskap vulkanis spektakuler.'
      }));
    }
    if (Array.isArray(DEFAULT_SLIDES) && DEFAULT_SLIDES.length > 0) {
      return DEFAULT_SLIDES.filter(Boolean);
    }
    return [];
  }, [slides, photos, images]);

  const slidesCount = safeSlides.length;

  useEffect(() => {
    if (!isAutoPlay || slidesCount <= 1) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slidesCount);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay, slidesCount]);

  // Fallback UI if photos or slides data is empty or not ready
  if (!safeSlides || safeSlides.length === 0) {
    return (
      <div className="relative w-full overflow-hidden bg-[#071A2B] text-white min-h-[380px] sm:min-h-[480px] flex items-center justify-center p-6 text-center select-none">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto text-[#0996f5]">
            <Mountain className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">WisataBromo.co</h3>
            <p className="text-sm text-slate-300 mt-1">
              Data foto panorama sedang dipersiapkan. Silakan muat ulang halaman jika foto belum tampil.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap justify-center gap-2.5">
            {onOpenBooking && (
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-[#0996f5] hover:bg-[#0782d6] text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-lg"
              >
                Reservasi Trip
              </button>
            )}
            {onExplorePackages && (
              <button
                type="button"
                onClick={onExplorePackages}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                Lihat Paket Wisata
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Safe Index accessor
  const safeIdx = (currentIdx >= 0 && currentIdx < slidesCount) ? currentIdx : 0;
  const currentSlide = safeSlides[safeIdx] || safeSlides[0];

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % slidesCount);
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative w-full overflow-hidden bg-[#071A2B] text-white select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Full Bleed Background Imagery with Sharp Crossfade Effect */}
      <div className="relative w-full h-[410px] sm:h-[500px] md:h-[580px] lg:h-[640px] flex items-center justify-center">
        {safeSlides.map((slide, idx) => {
          const isActive = idx === safeIdx;
          return (
            <div
              key={slide.id || `slide-${idx}`}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.title || 'Panorama Bromo'}
                className="w-full h-full object-cover object-center select-none"
                style={{ imageRendering: 'auto' }}
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('bromo_panoramic_horizon_20261008.png')) {
                    target.src = header01;
                  }
                }}
              />
              {/* Subtle Vignette & Light Gradient Underlays for Clean Image Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
            </div>
          );
        })}

        {/* Elegant Contextual Location Badge & Title (Discreet, high-contrast, non-obtrusive) */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-8 z-10 max-w-lg pointer-events-none px-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white shadow-md text-[11px] sm:text-xs">
            <Mountain className="w-3.5 h-3.5 text-[#ffc928] shrink-0" />
            <span className="font-semibold text-white/95 truncate">{currentSlide.locationTag}</span>
            <span className="text-white/40">·</span>
            <span className="text-emerald-300 font-mono text-[10px] sm:text-[11px] shrink-0">{currentSlide.elevation}</span>
          </div>
          <h2 className="text-base sm:text-xl md:text-2xl font-black text-white drop-shadow-md mt-1.5 tracking-tight line-clamp-1">
            {currentSlide.title}
          </h2>
        </div>

        {/* Left & Right Navigation Arrows */}
        {slidesCount > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-xl hover:border-white/60"
              aria-label="Slide Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-xl hover:border-white/60"
              aria-label="Slide Selanjutnya"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        {/* 5. Bottom Navigation Indicator Dots (Responsive Wrapping) */}
        {slidesCount > 1 && (
          <div className="absolute bottom-16 sm:bottom-20 inset-x-0 z-20 flex items-center justify-center gap-1.5 max-w-xl mx-auto px-4 flex-wrap">
            {safeSlides.map((slide, idx) => (
              <button
                type="button"
                key={slide.id || `dot-${idx}`}
                onClick={() => setCurrentIdx(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer p-0.5 ${
                  safeIdx === idx
                    ? 'w-6 sm:w-8 h-2 bg-[#0996F5] shadow-md shadow-[#0996F5]/50 ring-1 ring-white/50'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Pindah ke slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
