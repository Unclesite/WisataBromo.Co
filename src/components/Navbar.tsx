import React, { useState } from 'react';
import { 
  Menu, X, PhoneCall, Compass, ShieldCheck, ChevronDown, Mountain, 
  Sparkles, MapPin, Users, Sun, Thermometer, BookOpen 
} from 'lucide-react';
import { TripCategory } from '../types';
import { WeatherData } from '../services/weatherService';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  onOpenBooking: (packageId?: string) => void;
  onFilterCategory?: (category: TripCategory) => void;
  onOpenLiveStatus?: () => void;
  onOpenArticles?: () => void;
  onOpenAbout?: () => void;
  weather?: WeatherData;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenBooking, 
  onFilterCategory,
  onOpenLiveStatus,
  onOpenArticles,
  onOpenAbout,
  weather,
}) => {
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
    <header className="sticky top-0 z-40 w-full bg-white/98 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-4 lg:gap-6">
          {/* Brand Wordmark & Official Mountain Logo */}
          <div className="flex items-center shrink-0 pr-3 sm:pr-4 lg:pr-6 border-r border-slate-200/80 mr-1 sm:mr-2 lg:mr-4">
            <a
              href="/"
              className="flex items-center gap-2 sm:gap-2.5 group transition-transform active:scale-95"
              aria-label="WisataBromo.co - Beranda"
            >
              <img
                src="/wisatabromo-mountain.svg"
                alt="Logo WisataBromo.co"
                className="h-7 sm:h-8.5 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-[#111318] group-hover:text-[#3d72fe] transition-colors whitespace-nowrap">
                wisatabromo<span className="text-[#3d72fe]">.co</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2.5 xl:gap-4 text-xs xl:text-sm font-bold text-[#111318]/90 whitespace-nowrap">
            {/* Dropdown Paket Wisata */}
            <div
              className="relative"
              onMouseEnter={() => setPackagesDropdownOpen(true)}
              onMouseLeave={() => setPackagesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => scrollTo('paket-wisata', 'all')}
                className="hover:text-[#3d72fe] transition-colors flex items-center gap-1 py-2 cursor-pointer whitespace-nowrap"
              >
                <span>Paket Wisata</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </button>

              {/* Dropdown Panel */}
              {packagesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl p-2.5 shadow-xl space-y-1 animate-fadeIn z-50">
                  <button
                    onClick={() => scrollTo('paket-wisata', 'open_trip')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Users className="w-3.5 h-3.5 text-[#3d72fe] shrink-0" />
                    <div>
                      <div>Open Trip (Sharing Hemat)</div>
                      <div className="text-[10px] text-slate-500 font-normal">Mulai Rp 275rb / orang</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('paket-wisata', 'private_trip')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#3d72fe] shrink-0" />
                    <div>
                      <div>Private Trip (Jeep FJ40)</div>
                      <div className="text-[10px] text-slate-500 font-normal">Mulai Rp 950rb / rombongan</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('paket-wisata', 'long_jeep')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#ffc928] shrink-0" />
                    <div>
                      <div>Long Jeep (9 Peserta)</div>
                      <div className="text-[10px] text-slate-500 font-normal">Kapasitas 9 orang eksklusif</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('piknik-dan-trail')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Mountain className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <div>
                      <div>Piknik Savana &amp; Sewa Trail</div>
                      <div className="text-[10px] text-slate-500 font-normal">Luxury picnic &amp; trail bike</div>
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
                className="hover:text-[#3d72fe] transition-colors flex items-center gap-1 py-2 cursor-pointer whitespace-nowrap"
              >
                <span>Panduan Bromo</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </button>

              {/* Dropdown Panel */}
              {guidesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl p-2.5 shadow-xl space-y-1 animate-fadeIn z-50">
                  <button
                    onClick={() => scrollTo('spot-sunrise')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <div>
                      <div>8 Spot Kaldera &amp; Sunrise</div>
                      <div className="text-[10px] text-slate-500 font-normal">Ketinggian MDPL &amp; Akses</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('titik-start')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#3d72fe] shrink-0" />
                    <div>
                      <div>Titik Start &amp; Penjemputan</div>
                      <div className="text-[10px] text-slate-500 font-normal">Malang, Batu, Surabaya, Tosari</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('tips-dan-panduan')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                  >
                    <Thermometer className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <div>
                      <div>Panduan Pakaian &amp; Suhu</div>
                      <div className="text-[10px] text-slate-500 font-normal">Persiapan suhu 2°C – 10°C</div>
                    </div>
                  </button>
                  {onOpenArticles && (
                    <button
                      onClick={() => {
                        setGuidesDropdownOpen(false);
                        onOpenArticles();
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer border-t border-slate-100 pt-2"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#3d72fe] shrink-0" />
                      <div>
                        <div>Artikel &amp; Riset Budaya</div>
                        <div className="text-[10px] text-slate-500 font-normal">20 Panduan &amp; Tradisi Tengger</div>
                      </div>
                    </button>
                  )}
                  {onOpenAbout && (
                    <button
                      onClick={() => {
                        setGuidesDropdownOpen(false);
                        onOpenAbout();
                      }}
                      className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#111318] flex items-center gap-2 cursor-pointer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <div>
                        <div>Tentang Kami</div>
                        <div className="text-[10px] text-slate-500 font-normal">PT Global Travel Healing</div>
                      </div>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Bukti VVIP Menteri RI */}
            <button
              onClick={() => scrollTo('vip-kementerian')}
              className="hover:text-[#3d72fe] transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Bukti VVIP</span>
              <span className="text-[10px] bg-[#ffc928] text-[#111318] font-black px-1.5 py-0.5 rounded whitespace-nowrap">
                Menteri RI
              </span>
            </button>

            {/* Artikel Link - Shown on extra large screens */}
            {onOpenArticles && (
              <button
                type="button"
                onClick={onOpenArticles}
                className="hidden 2xl:flex hover:text-[#3d72fe] transition-colors cursor-pointer items-center gap-1.5 whitespace-nowrap"
              >
                <span>Artikel</span>
                <span className="text-[10px] bg-[#3d72fe]/10 text-[#3d72fe] font-black px-1.5 py-0.5 rounded whitespace-nowrap">
                  20 Artikel
                </span>
              </button>
            )}

            {/* Tentang Kami Link - Shown on extra large screens */}
            {onOpenAbout && (
              <button
                type="button"
                onClick={onOpenAbout}
                className="hidden 2xl:flex hover:text-[#3d72fe] transition-colors cursor-pointer items-center gap-1.5 whitespace-nowrap"
              >
                <span>Tentang Kami</span>
              </button>
            )}

            {/* Live Cuaca Button */}
            {onOpenLiveStatus && (
              <button
                type="button"
                onClick={onOpenLiveStatus}
                className="hover:text-[#3d72fe] transition-colors cursor-pointer flex items-center gap-1.5 bg-[#eaf2ff] text-[#3d72fe] px-2.5 py-1 rounded-xl border border-[#3d72fe]/20 whitespace-nowrap"
                title="Lihat status buka TNBTS dan data cuaca live"
              >
                <span className="flex h-1.5 w-1.5 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Live Cuaca</span>
              </button>
            )}
          </nav>

          {/* Zone 3: OTA Hotline & Quick Book */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0 whitespace-nowrap ml-auto">
            {/* Hotline Phone - Icon with tooltip on <=xl, text on 2xl+ */}
            <a
              href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20tanya%20informasi%20paket%20trip%20ke%20Bromo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-[#111318] hover:text-[#3d72fe] p-2 2xl:px-3 2xl:py-2 rounded-xl bg-[#eaf2ff] border border-[#3d72fe]/25 hover:border-[#3d72fe]/50 transition-colors whitespace-nowrap shrink-0"
              title="Hubungi Hotline WhatsApp 0812-2229-0318"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#3d72fe] shrink-0" />
              <span className="hidden 2xl:inline font-mono tabular-nums whitespace-nowrap">0812-2229-0318</span>
            </a>

            {/* Primary Booking Button - Guaranteed never clipped */}
            <button
              onClick={() => onOpenBooking()}
              className="px-4 xl:px-5 py-2 xl:py-2.5 text-xs font-black text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-xl transition-all shadow-md shadow-[#3d72fe]/25 whitespace-nowrap cursor-pointer active:scale-95 shrink-0 min-w-fit"
            >
              Booking Online
            </button>
          </div>

          {/* Mobile & Tablet Header Right Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {onOpenLiveStatus && (
              <button
                type="button"
                onClick={onOpenLiveStatus}
                className="flex items-center gap-1 bg-[#eaf2ff] text-[#3d72fe] px-2 py-1 rounded-lg border border-[#3d72fe]/20 text-[11px] font-bold whitespace-nowrap"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Cuaca</span>
              </button>
            )}

            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-black text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Booking
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#111318] hover:text-[#3d72fe] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2.5 shadow-lg max-h-[85vh] overflow-y-auto animate-fadeIn">
          <div className="text-[11px] font-bold text-slate-400 uppercase px-2 pt-1">Pilihan Paket Wisata:</div>
          <button
            onClick={() => scrollTo('paket-wisata', 'open_trip')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#eaf2ff] rounded-lg cursor-pointer"
          >
            Open Trip (Sharing Hemat Mulai Rp 275rb)
          </button>
          <button
            onClick={() => scrollTo('paket-wisata', 'private_trip')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#eaf2ff] rounded-lg cursor-pointer"
          >
            Private Trip &amp; Sewa Jeep FJ40
          </button>
          <button
            onClick={() => scrollTo('paket-wisata', 'long_jeep')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#eaf2ff] rounded-lg cursor-pointer"
          >
            Paket Long Jeep (9 Peserta)
          </button>
          <button
            onClick={() => scrollTo('piknik-dan-trail')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#eaf2ff] rounded-lg cursor-pointer"
          >
            Paket Piknik Savana &amp; Sewa Trail
          </button>

          <div className="text-[11px] font-bold text-slate-400 uppercase px-2 pt-2 border-t border-slate-100">Informasi &amp; Panduan:</div>
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
                <span>Status Buka TNBTS &amp; Cuaca Live</span>
              </div>
              <span className="text-[10px] bg-emerald-500 text-white font-bold px-1.5 py-0.5 rounded">
                Buka Normal
              </span>
            </button>
          )}

          <button
            onClick={() => scrollTo('vip-kementerian')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#eaf2ff] rounded-lg flex items-center justify-between cursor-pointer"
          >
            <span>Bukti Layanan VVIP Menteri RI</span>
            <span className="text-[10px] bg-[#ffc928] text-[#111318] font-bold px-1.5 py-0.5 rounded">Resmi</span>
          </button>
          
          <button
            onClick={() => scrollTo('spot-sunrise')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#eaf2ff] rounded-lg cursor-pointer"
          >
            8 Spot Sunrise &amp; Kaldera (Ketinggian MDPL)
          </button>

          <button
            onClick={() => scrollTo('titik-start')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#eaf2ff] rounded-lg cursor-pointer"
          >
            Titik Start (Malang, Batu, Surabaya, Tosari)
          </button>

          <button
            onClick={() => scrollTo('tips-dan-panduan')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#111318] hover:bg-[#eaf2ff] rounded-lg cursor-pointer"
          >
            Tips Pakaian &amp; Suhu 2°C - 10°C
          </button>

          {onOpenArticles && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenArticles();
              }}
              className="block w-full text-left py-2 px-2 text-xs font-bold text-[#3d72fe] hover:bg-[#eaf2ff] rounded-lg flex items-center justify-between cursor-pointer"
            >
              <span>Artikel Riset &amp; Ensiklopedia Bromo</span>
              <span className="text-[10px] bg-[#3d72fe] text-white font-bold px-1.5 py-0.5 rounded">
                20 Artikel
              </span>
            </button>
          )}

          {onOpenAbout && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAbout();
              }}
              className="block w-full text-left py-2 px-2 text-xs font-bold text-[#102a56] hover:bg-[#eaf2ff] rounded-lg flex items-center justify-between cursor-pointer"
            >
              <span>Tentang Kami (PT Global Travel Healing)</span>
              <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-1.5 py-0.5 rounded">
                Profil
              </span>
            </button>
          )}

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20konsultasi%20trip%20Bromo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 text-xs font-bold text-[#102a56] bg-[#eaf2ff] hover:bg-[#d8e7ff] rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#3d72fe]" />
              <span>WhatsApp Admin (0812-2229-0318)</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-3 text-xs font-black text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-xl transition-all shadow-md shadow-[#3d72fe]/25 text-center cursor-pointer"
            >
              Buka Kalkulator &amp; Booking Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
