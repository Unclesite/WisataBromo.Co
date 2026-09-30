import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ExternalLink } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3d72fe] text-white border-t border-[#2b5ae0] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3.5">
            <div className="text-xl font-black text-white">
              wisatabromo<span className="text-[#ffc928]">.co</span>
            </div>
            <p className="text-white/85 leading-relaxed text-xs">
              Portal resmi penyedia paket tour Gunung Bromo, Open Trip & Private Trip terpercaya dengan armada Jeep 4x4 berizin resmi Taman Nasional Bromo Tengger Semeru.
            </p>
            <div className="flex items-center gap-1.5 text-white font-bold pt-1">
              <ShieldCheck className="w-4 h-4 text-[#ffc928]" />
              <span>Legalitas PT Global Travel Healing · TNBTS</span>
            </div>
            <div className="pt-2">
              <PWAInstallButton variant="footer" />
            </div>
          </div>

          {/* Paket Populer */}
          <div className="space-y-2.5">
            <div className="text-white font-black text-xs uppercase tracking-wider mb-2">
              Paket Wisata Populer
            </div>
            <ul className="space-y-2 text-white/90">
              <li>
                <a href="#paket-open-trip-malang" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Open Trip Start Malang (Hemat)
                </a>
              </li>
              <li>
                <a href="#paket-open-trip-surabaya" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Open Trip Start Surabaya (Tol Cepat)
                </a>
              </li>
              <li>
                <a href="#paket-private-malang" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Private Trip Start Malang & Batu
                </a>
              </li>
              <li>
                <a href="#paket-private-surabaya" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Private Trip Start Surabaya (Juanda)
                </a>
              </li>
              <li>
                <a href="#paket-paket-piknik-bromo" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Paket Piknik Bromo Savana
                </a>
              </li>
              <li>
                <a href="#paket-paket-sewa-trail-sukapura" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Paket Sewa Trail Start Sukapura
                </a>
              </li>
            </ul>
          </div>

          {/* Rute & Jalur Masuk */}
          <div className="space-y-2.5">
            <div className="text-white font-black text-xs uppercase tracking-wider mb-2">
              Pintu Gerbang TNBTS
            </div>
            <ul className="space-y-2 text-white/90">
              <li>
                <span className="text-white font-bold">Jalur Sukapura (Probolinggo): </span>
                <span className="text-white/80">Pintu utama hotel & Cemorolawang</span>
              </li>
              <li>
                <span className="text-white font-bold">Jalur Tosari (Pasuruan): </span>
                <span className="text-white/80">Akses tercepat via Tol ke Penanjakan 1</span>
              </li>
              <li>
                <span className="text-white font-bold">Jalur Gubugklakah (Malang): </span>
                <span className="text-white/80">Rute Jemplang & Savana apel</span>
              </li>
              <li>
                <span className="text-white font-bold">Kota Batu: </span>
                <span className="text-white/80">Penjemputan villa & resort keluarga</span>
              </li>
            </ul>
          </div>

          {/* Kontak & Alamat Resmi with Google Maps Link */}
          <div className="space-y-3.5">
            <div className="text-white font-black text-xs uppercase tracking-wider mb-2">
              Customer Support & Basecamp
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#ffc928] shrink-0 mt-0.5" />
              <div>
                <a
                  href="mailto:cs@wisatabromo.co"
                  className="text-white font-mono font-bold hover:underline transition-colors block"
                >
                  cs@wisatabromo.co
                </a>
                <div className="text-[11px] text-white/80">Layanan email resmi 24/7</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#ffc928] shrink-0 mt-0.5" />
              <div>
                <a
                  href="https://wa.me/6281222290318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-mono font-bold hover:underline transition-colors block"
                >
                  +62 812 2229 0318
                </a>
                <div className="text-[11px] text-white/80">Hotline WhatsApp Reservasi</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <MapPin className="w-4 h-4 text-[#ffc928] shrink-0 mt-0.5" />
              <div className="text-[11px] text-white/90 leading-tight space-y-1.5">
                <div>
                  <strong className="text-white">Basecamp Malang: </strong><br />
                  Jalan Raya Gubugklakah no 147, Malang
                </div>
                <div>
                  <strong className="text-white">Basecamp Probolinggo: </strong><br />
                  Jalan Pasar Sayur no 43, Sukapura
                </div>
                <div className="pt-2">
                  <a
                    href="https://maps.app.goo.gl/s2RnoqJqDLtZSEvP7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#eaf2ff] text-[#3d72fe] rounded-xl font-black text-[11px] transition-colors shadow-sm min-h-[38px]"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#3d72fe]" />
                    <span>Buka Google Maps Basecamp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/80 text-[11px]">
          <div>
            © 2019 - 2026 <span className="text-white font-bold">wisatabromo.co</span>. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <a href="#tips-dan-panduan" className="hover:text-white hover:underline">Ketentuan Layanan</a>
            <span aria-hidden="true">·</span>
            <a href="#budaya-tengger" className="hover:text-white hover:underline">Panduan Suku Tengger</a>
            <span aria-hidden="true">·</span>
            <a href="https://maps.app.goo.gl/s2RnoqJqDLtZSEvP7" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
              <span>Google Maps</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
