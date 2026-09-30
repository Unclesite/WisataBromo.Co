import React from 'react';
import { Compass, Mail, Phone, MapPin, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#102a56] text-slate-300 border-t border-[#102a56] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="text-lg font-black text-white flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#3d72fe] text-white flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <span>
                wisatabromo<span className="text-[#ffc928]">.co</span>
              </span>
            </div>
            <p className="text-slate-300/80 leading-relaxed text-xs">
              Portal resmi penyedia paket tour Gunung Bromo, Open Trip & Private Trip terpercaya dengan armada Jeep 4x4 berizin resmi Taman Nasional Bromo Tengger Semeru.
            </p>
            <div className="flex items-center gap-1.5 text-[#ffc928] font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-[#ffc928]" />
              <span>Legalitas PT Global Travel Healing · TNBTS</span>
            </div>
          </div>

          {/* Paket Populer */}
          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Paket Wisata Populer
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <a href="#paket-open-trip-malang" className="hover:text-[#ffc928] transition-colors">
                  Open Trip Start Malang (Hemat)
                </a>
              </li>
              <li>
                <a href="#paket-open-trip-surabaya" className="hover:text-[#ffc928] transition-colors">
                  Open Trip Start Surabaya (Tol Cepat)
                </a>
              </li>
              <li>
                <a href="#paket-private-malang" className="hover:text-[#ffc928] transition-colors">
                  Private Trip Start Malang & Batu
                </a>
              </li>
              <li>
                <a href="#paket-private-surabaya" className="hover:text-[#ffc928] transition-colors">
                  Private Trip Start Surabaya (Juanda)
                </a>
              </li>
              <li>
                <a href="#paket-paket-piknik-bromo" className="hover:text-[#ffc928] transition-colors">
                  Paket Piknik Bromo Savana
                </a>
              </li>
              <li>
                <a href="#paket-paket-sewa-trail-sukapura" className="hover:text-[#ffc928] transition-colors">
                  Paket Sewa Trail Start Sukapura
                </a>
              </li>
            </ul>
          </div>

          {/* Rute & Jalur Masuk */}
          <div className="space-y-2">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Pintu Gerbang TNBTS
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <span className="text-white font-semibold">Jalur Sukapura (Probolinggo): </span>
                <span className="text-slate-400">Pintu utama hotel & Cemorolawang</span>
              </li>
              <li>
                <span className="text-white font-semibold">Jalur Tosari (Pasuruan): </span>
                <span className="text-slate-400">Akses tercepat via Tol ke Penanjakan 1</span>
              </li>
              <li>
                <span className="text-white font-semibold">Jalur Gubugklakah (Malang): </span>
                <span className="text-slate-400">Rute Jemplang & Savana perbukitan apel</span>
              </li>
              <li>
                <span className="text-white font-semibold">Kota Batu: </span>
                <span className="text-slate-400">Penjemputan villa & resort keluarga</span>
              </li>
            </ul>
          </div>

          {/* Kontak & Alamat Resmi with Google Maps Link */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              Customer Support & Basecamp
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#ffc928] shrink-0 mt-0.5" />
              <div>
                <a
                  href="mailto:cs@wisatabromo.co"
                  className="text-white font-mono font-medium hover:text-[#ffc928] transition-colors"
                >
                  cs@wisatabromo.co
                </a>
                <div className="text-[11px] text-slate-400">Layanan email resmi 24/7</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#ffc928] shrink-0 mt-0.5" />
              <div>
                <a
                  href="https://wa.me/6281222290318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-mono font-bold hover:text-[#ffc928] transition-colors"
                >
                  +62 812 2229 0318
                </a>
                <div className="text-[11px] text-slate-400">Hotline WhatsApp Reservasi</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <MapPin className="w-4 h-4 text-[#ffc928] shrink-0 mt-0.5" />
              <div className="text-[11px] text-slate-300 leading-tight space-y-1.5">
                <div>
                  <strong className="text-white">Basecamp Malang: </strong><br />
                  Jalan Raya Gubugklakah no 147, Gubugklakah, Malang
                </div>
                <div>
                  <strong className="text-white">Basecamp Probolinggo: </strong><br />
                  Jalan Pasar Sayur no 43, Sukapura, Probolinggo
                </div>
                <div className="pt-1.5">
                  <a
                    href="https://maps.app.goo.gl/s2RnoqJqDLtZSEvP7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3d72fe] hover:bg-[#2b5ae0] text-white rounded-lg font-bold text-[11px] transition-colors shadow-xs"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#ffc928]" />
                    <span>Buka Google Maps Basecamp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>
            © 2019 - 2026 <span className="text-white font-bold">wisatabromo.co</span>. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="#tips-dan-panduan" className="hover:text-white">Ketentuan Layanan</a>
            <span aria-hidden="true">·</span>
            <a href="#budaya-tengger" className="hover:text-white">Panduan Suku Tengger</a>
            <span aria-hidden="true">·</span>
            <a href="https://maps.app.goo.gl/s2RnoqJqDLtZSEvP7" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffc928] flex items-center gap-1">
              <span>Google Maps</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
