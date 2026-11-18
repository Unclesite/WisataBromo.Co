import React, { useState } from 'react';
import { 
  Menu, X, PhoneCall, Compass, ShieldCheck, ChevronDown, Mountain, 
  Sparkles, MapPin, Users, Sun, Thermometer, BookOpen, Utensils 
} from 'lucide-react';
import { TripCategory } from '../types';
import { WeatherData } from '../services/weatherService';
import { PWAInstallButton } from './PWAInstallButton';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import topLogoImg from '../assets/images/wisatabromo-top-logo.png';

interface NavbarProps {
  onOpenBooking: (packageId?: string) => void;
  onFilterCategory?: (category: TripCategory) => void;
  onOpenLiveStatus?: () => void;
  onOpenArticles?: () => void;
  onOpenAbout?: () => void;
  onOpenPicnic?: () => void;
  weather?: WeatherData;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenBooking, 
  onFilterCategory,
  onOpenLiveStatus,
  onOpenArticles,
  onOpenAbout,
  onOpenPicnic,
  weather,
}) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [packagesDropdownOpen, setPackagesDropdownOpen] = useState(false);
  const [guidesDropdownOpen, setGuidesDropdownOpen] = useState(false);

  const scrollTo = (id: string, categoryFilter?: TripCategory) => {
    setMobileMenuOpen(false);
    setPackagesDropdownOpen(false);
    setGuidesDropdownOpen(false);
    if (categoryFilter && onFilterCategory) {
      onFilterCategory(categoryFilter);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className="sticky top-0 z-40 w-full bg-white/98 backdrop-blur-xs border-b border-slate-200/90 shadow-2xs will-change-transform"
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-4 lg:gap-6">
          {/* Brand Wordmark & Official Mountain Logo */}
          <div className="flex items-center shrink-0 pr-3 sm:pr-4 lg:pr-6 border-r border-slate-200/80 mr-1 sm:mr-2 lg:mr-4">
            <a
              href="/"
              className="flex items-center group transition-transform active:scale-95 py-1"
              aria-label="WisataBromo.co - Beranda"
            >
              <img
                src={topLogoImg || "/wisatabromo-top-logo.png"}
                alt="WisataBromo.co"
                className="h-10 sm:h-12 w-auto max-h-12 object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3.5 text-xs xl:text-sm font-bold text-[#111318]/90 whitespace-nowrap min-w-0">
            {/* Dropdown Paket Wisata */}
            <div
              className="relative"
              onMouseEnter={() => setPackagesDropdownOpen(true)}
              onMouseLeave={() => setPackagesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => scrollTo('paket-wisata', 'all')}
                className="hover:text-[#0996f5] transition-colors flex items-center gap-1 py-2 cursor-pointer whitespace-nowrap"
              >
                <span>{t('navbar.tourPackages', 'Paket Wisata')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </button>

              {/* Dropdown Panel */}
              {packagesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl p-2.5 shadow-xl space-y-1 animate-fadeIn z-50">
                  <button
                    onClick={() => scrollTo('paket-wisata', 'open_trip')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#e5f4ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Users className="w-3.5 h-3.5 text-[#0996f5] shrink-0" />
                    <div>
                      <div>Open Trip (Sharing Hemat)</div>
                      <div className="text-[10px] text-slate-500 font-normal">Mulai Rp 275rb / orang</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('paket-wisata', 'private_trip')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#e5f4ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#0996f5] shrink-0" />
                    <div>
                      <div>{t('navbar.privateTrip', 'Private Trip (Jeep FJ40)')}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{t('navbar.privateTripSub', 'Mulai Rp 950rb / rombongan')}</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('paket-wisata', 'long_jeep')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#e5f4ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#fff700] bg-slate-900 rounded p-0.5 shrink-0" />
                    <div>
                      <div>{t('navbar.longJeep', 'Long Jeep (9 Peserta)')}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{t('navbar.longJeepSub', 'Kapasitas 9 orang eksklusif')}</div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setPackagesDropdownOpen(false);
                      if (onOpenPicnic) {
                        onOpenPicnic();
                      } else {
                        window.location.href = '/picnic';
                      }
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#e5f4ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Utensils className="w-3.5 h-3.5 text-[#0996f5] shrink-0" />
                    <div>
                      <div>{t('navbar.picnicBromo', 'Bromo Picnic Experience')}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{t('navbar.picnicBromoSub', '8 Paket Kuliner mulai Rp 75rb/pax')}</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('piknik-dan-trail')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#e5f4ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Mountain className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <div>
                      <div>{t('navbar.trailSukapura', 'Sewa Motor Trail Sukapura')}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{t('navbar.trailSukapuraSub', 'KLX / CRF / WR155 half-day')}</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Dropdown Panduan Bromo & Info */}
            <div
              className="relative"
              onMouseEnter={() => setGuidesDropdownOpen(true)}
              onMouseLeave={() => setGuidesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => scrollTo('spot-sunrise')}
                className="hover:text-[#0996f5] transition-colors flex items-center gap-1 py-2 cursor-pointer whitespace-nowrap"
              >
                <span>{t('navbar.guides', 'Panduan Bromo')}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </button>

              {/* Dropdown Panel */}
              {guidesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl p-2.5 shadow-xl space-y-1 animate-fadeIn z-50">
                  <button
                    onClick={() => scrollTo('spot-sunrise')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#e5f4ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Sun className="w-3.5 h-3.5 text-[#fff700] bg-slate-900 rounded p-0.5 shrink-0" />
                    <div>
                      <div>{t('navbar.spotsTitle', '8 Spot Kaldera & Sunrise')}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{t('navbar.spotsSub', 'Ketinggian MDPL & Akses')}</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('titik-start')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#e5f4ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#0996f5] shrink-0" />
                    <div>
                      <div>{t('navbar.startPointsTitle', 'Titik Start & Penjemputan')}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{t('navbar.startPointsSub', 'Malang, Batu, Surabaya, Tosari')}</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('tips-dan-panduan')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#e5f4ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Thermometer className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <div>
                      <div>{t('navbar.clothesTempTitle', 'Panduan Pakaian & Suhu')}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{t('navbar.clothesTempSub', 'Persiapan suhu 2°C – 10°C')}</div>
                    </div>
                  </button>
                  {onOpenArticles && (
                    <button
                      onClick={() => {
                        setGuidesDropdownOpen(false);
                        onOpenArticles();
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-[#e5f4ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer border-t border-slate-100 pt-2"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#0996f5] shrink-0" />
                      <div>
                        <div>{t('navbar.articlesTitle', 'Artikel & Riset Budaya')}</div>
                        <div className="text-[10px] text-slate-500 font-normal">{t('navbar.articlesSub', 'Panduan & Tradisi Bromo')}</div>
                      </div>
                    </button>
                  )}
                  {onOpenAbout && (
                    <button
                      onClick={() => {
                        setGuidesDropdownOpen(false);
                        onOpenAbout();
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-[#e5f4ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <div>
                        <div>{t('navbar.aboutUsTitle', 'Tentang Kami')}</div>
                        <div className="text-[10px] text-slate-500 font-normal">{t('navbar.aboutUsSub', 'PT Global Travel Healing')}</div>
                      </div>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Picnic Experience Top-Level Link */}
            {onOpenPicnic && (
              <button
                type="button"
                onClick={onOpenPicnic}
                className="hover:text-[#0996f5] transition-colors cursor-pointer flex items-center gap-1 py-2 whitespace-nowrap"
              >
                <Utensils className="w-3.5 h-3.5 text-[#0996f5] shrink-0" />
                <span>{t('navbar.picnicBromo', 'Picnic Bromo')}</span>
                <span className="hidden xl:inline text-[10px] bg-[#0996f5]/15 text-[#0996f5] font-black px-1.5 py-0.5 rounded-full whitespace-nowrap">
                  {t('navbar.picnicBromoBadge', '8 Paket')}
                </span>
              </button>
            )}

            {/* Bukti VVIP Menteri RI */}
            <button
              onClick={() => scrollTo('vip-kementerian')}
              className="hover:text-[#0996f5] transition-colors cursor-pointer flex items-center gap-1 whitespace-nowrap"
            >
              <span>{t('navbar.vvipProof', 'Bukti VVIP')}</span>
              <span className="text-[10px] bg-[#fff700] text-black font-black px-1.5 py-0.5 rounded whitespace-nowrap">
                {t('navbar.ministerBadge', 'Menteri RI')}
              </span>
            </button>

            {/* Artikel Link - Shown on extra large screens */}
            {onOpenArticles && (
              <button
                type="button"
                onClick={onOpenArticles}
                className="hidden 2xl:flex hover:text-[#0996f5] transition-colors cursor-pointer items-center gap-1.5 whitespace-nowrap"
              >
                <span>{t('navbar.articles', 'Artikel')}</span>
                <span className="text-[10px] bg-[#0996f5]/10 text-[#0996f5] font-black px-1.5 py-0.5 rounded whitespace-nowrap">
                  Edukasi
                </span>
              </button>
            )}

            {/* Tentang Kami Link - Shown on extra large screens */}
            {onOpenAbout && (
              <button
                type="button"
                onClick={onOpenAbout}
                className="hidden 2xl:flex hover:text-[#0996f5] transition-colors cursor-pointer items-center gap-1.5 whitespace-nowrap"
              >
                <span>{t('navbar.aboutUs', 'Tentang Kami')}</span>
              </button>
            )}
          </nav>

          {/* Zone 3: OTA Hotline, Language Switcher & Quick Book */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 shrink-0 whitespace-nowrap ml-auto">
            {/* Language Switcher: Compact on lg, Segmented on xl+ */}
            <div className="hidden lg:block xl:hidden">
              <LanguageSwitcher variant="compact" />
            </div>
            <div className="hidden xl:block">
              <LanguageSwitcher variant="segmented" />
            </div>

            {/* Hotline Phone */}
            <a
              href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20tanya%20informasi%20paket%20trip%20ke%20Bromo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-[#111318] hover:text-[#0996f5] p-2 xl:px-2.5 xl:py-2 rounded-xl bg-[#e5f4ff] border border-[#0996f5]/25 hover:border-[#0996f5]/50 transition-colors whitespace-nowrap shrink-0"
              title="Hubungi Hotline WhatsApp 0812-2229-0318"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#0996f5] shrink-0" />
              <span className="hidden 2xl:inline font-mono tabular-nums whitespace-nowrap">0812-2229-0318</span>
            </a>

            {/* Primary Booking Button - Guaranteed neat, never clipped */}
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-black text-white bg-[#0996f5] hover:bg-[#0782d6] rounded-xl transition-all shadow-md shadow-[#0996f5]/20 whitespace-nowrap cursor-pointer active:scale-95 shrink-0 min-w-fit"
            >
              {t('navbar.bookingButton', 'Booking Online')}
            </button>
          </div>

          {/* Mobile & Tablet Header Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Compact Language Switcher for Mobile Header */}
            <LanguageSwitcher variant="compact" />

            {onOpenLiveStatus && (
              <button
                type="button"
                onClick={onOpenLiveStatus}
                className="hidden sm:flex items-center gap-1 bg-[#e5f4ff] text-[#0996f5] px-2 py-1 rounded-lg border border-[#0996f5]/20 text-[11px] font-bold whitespace-nowrap"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>{t('navbar.liveWeather', 'Cuaca')}</span>
              </button>
            )}

            <button
              onClick={() => onOpenBooking()}
              className="px-2.5 sm:px-3 py-1.5 text-xs font-black text-white bg-[#0996f5] hover:bg-[#0782d6] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              {t('navbar.bookingButton', 'Booking')}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#111318] hover:text-[#0996f5] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2.5 shadow-lg max-h-[85vh] overflow-y-auto animate-fadeIn">
          {/* Mobile Drawer Language Switcher */}
          <LanguageSwitcher variant="drawer" className="mb-2" />

          <div className="text-[11px] font-bold text-slate-400 uppercase px-2 pt-1">{t('navbar.tourPackages', 'Pilihan Paket Wisata')}:</div>
          <button
            onClick={() => scrollTo('paket-wisata', 'open_trip')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#e5f4ff] rounded-lg cursor-pointer"
          >
            {t('navbar.drawerOpenTrip', 'Open Trip (Sharing Hemat Mulai Rp 275rb)')}
          </button>
          <button
            onClick={() => scrollTo('paket-wisata', 'private_trip')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#e5f4ff] rounded-lg cursor-pointer"
          >
            {t('navbar.drawerPrivateTrip', 'Private Trip & Sewa Jeep FJ40')}
          </button>
          <button
            onClick={() => scrollTo('paket-wisata', 'long_jeep')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#e5f4ff] rounded-lg cursor-pointer"
          >
            {t('navbar.drawerLongJeep', 'Paket Long Jeep (9 Peserta)')}
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenPicnic) {
                onOpenPicnic();
              } else {
                window.location.href = '/picnic';
              }
            }}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#e5f4ff] rounded-lg cursor-pointer"
          >
            {t('navbar.drawerPicnic', 'Bromo Picnic Experience (8 Pilihan Menu)')}
          </button>
          <button
            onClick={() => scrollTo('piknik-dan-trail')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#e5f4ff] rounded-lg cursor-pointer"
          >
            {t('navbar.drawerTrail', 'Sewa Trail Sukapura (Adventure)')}
          </button>

          <div className="text-[11px] font-bold text-slate-400 uppercase px-2 pt-2 border-t border-slate-100">{t('navbar.infoGuides', 'Informasi & Panduan:')}</div>
          <PWAInstallButton variant="mobile-menu" />
          
          {onOpenLiveStatus && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLiveStatus();
              }}
              className="w-full text-left py-2 px-2.5 text-xs font-bold text-white bg-[#102a56] hover:bg-[#1e3a8a] rounded-xl flex items-center justify-between shadow-xs cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t('navbar.drawerLiveStatus', 'Status Buka TNBTS & Cuaca Live')}</span>
              </div>
              <span className="text-[10px] bg-emerald-500 text-white font-bold px-1.5 py-0.5 rounded">
                {t('navbar.normalOpen', 'Buka Normal')}
              </span>
            </button>
          )}

          <button
            onClick={() => scrollTo('vip-kementerian')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#e5f4ff] rounded-lg flex items-center justify-between cursor-pointer"
          >
            <span>{t('navbar.drawerVvipProof', 'Bukti Layanan VVIP Menteri RI')}</span>
            <span className="text-[10px] bg-[#fff700] text-black font-black px-1.5 py-0.5 rounded">{t('navbar.officialBadge', 'Resmi')}</span>
          </button>
          
          <button
            onClick={() => scrollTo('spot-sunrise')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#e5f4ff] rounded-lg cursor-pointer"
          >
            {t('navbar.drawerSpots', '8 Spot Sunrise & Kaldera (Ketinggian MDPL)')}
          </button>

          <button
            onClick={() => scrollTo('titik-start')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#e5f4ff] rounded-lg cursor-pointer"
          >
            {t('navbar.drawerStartPoints', 'Titik Start (Malang, Batu, Surabaya, Tosari)')}
          </button>

          <button
            onClick={() => scrollTo('tips-dan-panduan')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#e5f4ff] rounded-lg cursor-pointer"
          >
            {t('navbar.drawerTips', 'Tips Pakaian & Suhu 2°C - 10°C')}
          </button>

          {onOpenArticles && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenArticles();
              }}
              className="block w-full text-left py-2 px-2 text-xs font-bold text-[#0996f5] hover:bg-[#e5f4ff] rounded-lg flex items-center justify-between cursor-pointer"
            >
              <span>{t('navbar.drawerArticles', 'Artikel Riset & Ensiklopedia Bromo')}</span>
              <span className="text-[10px] bg-[#0996f5] text-white font-bold px-1.5 py-0.5 rounded">
                {t('navbar.articlesCount', 'Artikel')}
              </span>
            </button>
          )}

          {onOpenAbout && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAbout();
              }}
              className="block w-full text-left py-2 px-2 text-xs font-bold text-[#102a56] hover:bg-[#e5f4ff] rounded-lg flex items-center justify-between cursor-pointer"
            >
              <span>{t('navbar.drawerAbout', 'Tentang Kami (PT Global Travel Healing)')}</span>
              <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-1.5 py-0.5 rounded">
                {t('navbar.profileBadge', 'Profil')}
              </span>
            </button>
          )}

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20konsultasi%20trip%20Bromo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 text-xs font-bold text-[#102a56] bg-[#e5f4ff] hover:bg-[#d8e7ff] rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#0996f5]" />
              <span>{t('navbar.drawerWa', 'WhatsApp Admin (0812-2229-0318)')}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-3 text-xs font-black text-white bg-[#0996f5] hover:bg-[#0782d6] rounded-xl transition-all shadow-md shadow-[#0996f5]/25 text-center cursor-pointer"
            >
              {t('navbar.drawerCalc', 'Buka Kalkulator & Booking Online')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
