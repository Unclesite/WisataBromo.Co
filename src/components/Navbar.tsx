import React, { useState } from 'react';
import { Menu, X, PhoneCall, Compass, ShieldCheck, ChevronDown, Mountain, Sparkles, MapPin, Users } from 'lucide-react';
import { TripCategory } from '../types';

interface NavbarProps {
  onOpenBooking: (packageId?: string) => void;
  onFilterCategory?: (category: TripCategory) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onFilterCategory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [packagesDropdownOpen, setPackagesDropdownOpen] = useState(false);

  const scrollTo = (id: string, categoryFilter?: TripCategory) => {
    setMobileMenuOpen(false);
    setPackagesDropdownOpen(false);
    if (categoryFilter && onFilterCategory) {
      onFilterCategory(categoryFilter);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Wordmark */}
          <a
            href="/"
            className="text-xl sm:text-2xl font-black tracking-tight text-[#102a56] hover:text-[#3d72fe] transition-colors flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-xl bg-[#3d72fe] text-white flex items-center justify-center shadow-md shadow-[#3d72fe]/20">
              <Compass className="w-5 h-5" />
            </div>
            <span>
              wisatabromo<span className="text-[#3d72fe]">.co</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-bold text-[#102a56]/85">
            {/* Dropdown Paket Wisata */}
            <div
              className="relative"
              onMouseEnter={() => setPackagesDropdownOpen(true)}
              onMouseLeave={() => setPackagesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => scrollTo('paket-wisata', 'all')}
                className="hover:text-[#3d72fe] transition-colors flex items-center gap-1 py-2 cursor-pointer"
              >
                <span>Paket Wisata</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {/* Dropdown Panel */}
              {packagesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl p-2.5 shadow-xl space-y-1 animate-fadeIn">
                  <button
                    onClick={() => scrollTo('paket-wisata', 'open_trip')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#102a56] flex items-center gap-2 cursor-pointer"
                  >
                    <Users className="w-3.5 h-3.5 text-[#3d72fe]" />
                    <div>
                      <div>Open Trip (Sharing Hemat)</div>
                      <div className="text-[10px] text-slate-500 font-normal">Mulai Rp 275rb / orang</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('paket-wisata', 'private_trip')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#102a56] flex items-center gap-2 cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#3d72fe]" />
                    <div>
                      <div>Private Trip (Jeep FJ40)</div>
                      <div className="text-[10px] text-slate-500 font-normal">Mulai Rp 950rb / rombongan</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('paket-wisata', 'long_jeep')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#102a56] flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#ffc928]" />
                    <div>
                      <div>Long Jeep (9 Peserta)</div>
                      <div className="text-[10px] text-slate-500 font-normal">Kapasitas 9 orang eksklusif</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('piknik-dan-trail')}
                    className="w-full text-left p-2 rounded-xl hover:bg-[#eaf2ff] text-xs font-bold text-[#102a56] flex items-center gap-2 cursor-pointer"
                  >
                    <Mountain className="w-3.5 h-3.5 text-emerald-600" />
                    <div>
                      <div>Piknik Savana & Sewa Trail</div>
                      <div className="text-[10px] text-slate-500 font-normal">Luxury picnic & dirt bike</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo('titik-start')}
              className="hover:text-[#3d72fe] transition-colors cursor-pointer text-left"
            >
              Titik Start (6 Kota)
            </button>

            <button
              onClick={() => scrollTo('spot-sunrise')}
              className="hover:text-[#3d72fe] transition-colors cursor-pointer text-left"
            >
              8 Spot Kaldera
            </button>

            <button
              onClick={() => scrollTo('tips-dan-panduan')}
              className="hover:text-[#3d72fe] transition-colors cursor-pointer text-left"
            >
              Panduan & Suhu
            </button>

            <button
              onClick={() => scrollTo('budaya-tengger')}
              className="hover:text-[#3d72fe] transition-colors cursor-pointer text-left"
            >
              Budaya & Blog
            </button>
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20tanya%20informasi%20paket%20trip%20ke%20Bromo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-[#102a56] hover:text-[#3d72fe] px-3.5 py-2 rounded-xl bg-[#eaf2ff] border border-[#3d72fe]/20 hover:border-[#3d72fe]/40 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#3d72fe]" />
              <span className="font-mono tabular-nums">0812-2229-0318</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-4.5 py-2 text-xs font-bold text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-xl transition-all shadow-md shadow-[#3d72fe]/20 whitespace-nowrap cursor-pointer active:scale-95"
            >
              Reservasi Trip
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-lg transition-colors whitespace-nowrap"
            >
              Pesan
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#102a56] hover:text-[#3d72fe] focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2.5 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="text-[11px] font-bold text-slate-400 uppercase px-2 pt-1">Menu Paket:</div>
          <button
            onClick={() => scrollTo('paket-wisata', 'open_trip')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#102a56] hover:bg-[#eaf2ff] rounded-lg"
          >
            Open Trip (Sharing Hemat Mulai Rp 275rb)
          </button>
          <button
            onClick={() => scrollTo('paket-wisata', 'private_trip')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#102a56] hover:bg-[#eaf2ff] rounded-lg"
          >
            Private Trip & Sewa Jeep FJ40
          </button>
          <button
            onClick={() => scrollTo('paket-wisata', 'long_jeep')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#102a56] hover:bg-[#eaf2ff] rounded-lg"
          >
            Paket Long Jeep (9 Peserta)
          </button>
          <button
            onClick={() => scrollTo('piknik-dan-trail')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#102a56] hover:bg-[#eaf2ff] rounded-lg"
          >
            Paket Piknik Savana & Sewa Trail
          </button>

          <div className="text-[11px] font-bold text-slate-400 uppercase px-2 pt-2 border-t border-slate-100">Panduan & Fasilitas:</div>
          <button
            onClick={() => scrollTo('titik-start')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#102a56] hover:bg-[#eaf2ff] rounded-lg"
          >
            Titik Start (6 Pintu Gerbang TNBTS)
          </button>
          <button
            onClick={() => scrollTo('spot-sunrise')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#102a56] hover:bg-[#eaf2ff] rounded-lg"
          >
            8 Spot Sunrise & Kaldera (Ketinggian MDPL)
          </button>
          <button
            onClick={() => scrollTo('tips-dan-panduan')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#102a56] hover:bg-[#eaf2ff] rounded-lg"
          >
            Tips Pakaian & Suhu 2°C - 10°C
          </button>
          <button
            onClick={() => scrollTo('budaya-tengger')}
            className="block w-full text-left py-2 px-2 text-xs font-bold text-[#102a56] hover:bg-[#eaf2ff] rounded-lg"
          >
            Blog Budaya Suku Tengger & Kasada
          </button>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="https://wa.me/6281222290318?text=Halo%20Admin%20WisataBromo.co,%20saya%20mau%20konsultasi%20trip%20Bromo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-[#102a56] bg-[#eaf2ff] border border-[#3d72fe]/30 rounded-xl"
            >
              <PhoneCall className="w-4 h-4 text-[#3d72fe]" />
              Chat WhatsApp (+62 812 2229 0318)
            </a>
            <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3d72fe]" />
              Operator Resmi Berizin TNBTS Jawa Timur
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
