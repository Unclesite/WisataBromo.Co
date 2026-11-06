import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ExternalLink } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import footerLogoImg from '../assets/images/wisatabromo-footer-logo.png';
import { useLanguage } from '../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#071A2B] text-white border-t border-[#0d2a45] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3.5">
            <a href="/" className="inline-block group" aria-label="WisataBromo.co - Beranda">
              <img
                src={footerLogoImg || "/wisatabromo-footer-logo.png"}
                alt="WisataBromo.co"
                className="h-12 sm:h-14 w-auto max-h-14 object-contain drop-shadow-sm transition-transform group-hover:scale-105"
              />
            </a>
            <p className="text-[#B8C6D4] leading-relaxed text-xs">
              {t('footer.aboutText', 'Portal resmi penyedia paket tour Gunung Bromo, Open Trip & Private Trip terpercaya dengan armada Jeep 4x4 berizin resmi Taman Nasional Bromo Tengger Semeru. Dikelola oleh PT Global Travel Healing.')}
            </p>
            <div className="flex items-center gap-1.5 text-white font-bold pt-1">
              <ShieldCheck className="w-4 h-4 text-[#FFF700]" />
              <span>{t('footer.legalBadge', 'Legalitas PT Global Travel Healing · TNBTS')}</span>
            </div>
            <div className="pt-2">
              <PWAInstallButton variant="footer" />
            </div>
          </div>

          {/* Paket Populer */}
          <div className="space-y-2.5">
            <div className="text-white font-black text-xs uppercase tracking-wider mb-2">
              {t('footer.popularPackages', 'Paket Wisata Populer')}
            </div>
            <ul className="space-y-2 text-[#B8C6D4]">
              <li>
                <a href="/paket/open-trip-malang" className="text-white hover:text-[#0996F5] hover:underline transition-colors block py-0.5">
                  {t('footer.openTripMalang', 'Open Trip Start Malang')}
                </a>
              </li>
              <li>
                <a href="/paket/open-trip-surabaya" className="text-white hover:text-[#0996F5] hover:underline transition-colors block py-0.5">
                  {t('footer.openTripSurabaya', 'Open Trip Start Surabaya')}
                </a>
              </li>
              <li>
                <a href="/paket/private-jeep-malang" className="text-white hover:text-[#0996F5] hover:underline transition-colors block py-0.5">
                  {t('footer.privateTripMalang', 'Private Trip Malang & Batu')}
                </a>
              </li>
              <li>
                <a href="/paket/private-jeep-surabaya" className="text-white hover:text-[#0996F5] hover:underline transition-colors block py-0.5">
                  {t('footer.privateTripSurabaya', 'Private Trip Surabaya (Airport)')}
                </a>
              </li>
              <li>
                <a 
                  href="/picnic" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== '/picnic') {
                      window.history.pushState({}, '', '/picnic');
                    }
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="text-white hover:text-[#0996F5] hover:underline transition-colors block py-0.5"
                >
                  {t('footer.picnicExperience', 'Bromo Picnic Experience')}
                </a>
              </li>
              <li>
                <a href="/paket/sewa-trail-sukapura" className="text-white hover:text-[#0996F5] hover:underline transition-colors block py-0.5">
                  {t('footer.trailRental', 'Trail Bike Rental Sukapura')}
                </a>
              </li>
              <li className="pt-1.5 border-t border-white/20">
                <a href="/tentang-kami" className="text-white hover:text-[#FFF700] hover:underline transition-colors block py-0.5 flex items-center gap-1 font-bold">
                  <span>🏢 {t('navbar.aboutUs', 'Tentang Kami & Legalitas')}</span>
                </a>
              </li>
              <li>
                <a href="/artikel" className="text-[#FFF700] font-extrabold hover:underline transition-colors block py-0.5 flex items-center gap-1">
                  <span>📖 {t('navbar.articles', 'Artikel & Budaya')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Rute & Jalur Masuk */}
          <div className="space-y-2.5">
            <div className="text-white font-black text-xs uppercase tracking-wider mb-2">
              {t('footer.gatesTitle', 'Pintu Gerbang TNBTS')}
            </div>
            <ul className="space-y-2 text-[#B8C6D4]">
              <li>
                <span className="text-white font-bold">Sukapura (Probolinggo): </span>
                <span className="text-[#B8C6D4]">{t('footer.sukapuraDesc', 'Pintu utama hotel & Cemorolawang')}</span>
              </li>
              <li>
                <span className="text-white font-bold">Tosari (Pasuruan): </span>
                <span className="text-[#B8C6D4]">{t('footer.tosariDesc', 'Akses tercepat ke Penanjakan 1')}</span>
              </li>
              <li>
                <span className="text-white font-bold">Gubugklakah (Malang): </span>
                <span className="text-[#B8C6D4]">{t('footer.gubugklakahDesc', 'Rute Jemplang & Savana apel')}</span>
              </li>
              <li>
                <span className="text-white font-bold">{t('footer.batuLabel', 'Kota Batu:')} </span>
                <span className="text-[#B8C6D4]">{t('footer.batuDesc', 'Penjemputan villa & resort keluarga')}</span>
              </li>
            </ul>
          </div>

          {/* Kontak & Alamat Resmi with Google Maps Link */}
          <div className="space-y-3.5">
            <div className="text-white font-black text-xs uppercase tracking-wider mb-2">
              {t('footer.contactOfficial', 'Customer Support & Basecamp')}
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#FFF700] shrink-0 mt-0.5" />
              <div>
                <a
                  href="mailto:cs@wisatabromo.co"
                  className="text-white font-mono font-bold hover:underline transition-colors block"
                >
                  cs@wisatabromo.co
                </a>
                <div className="text-[11px] text-white/80">{t('footer.emailSub', 'Layanan email resmi 24/7')}</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#FFF700] shrink-0 mt-0.5" />
              <div>
                <a
                  href="https://wa.me/6281222290318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-mono font-bold hover:underline transition-colors block"
                >
                  +62 812 2229 0318
                </a>
                <div className="text-[11px] text-white/80">{t('footer.phoneSub', 'Hotline WhatsApp Reservasi')}</div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <MapPin className="w-4 h-4 text-[#FFF700] shrink-0 mt-0.5" />
              <div className="text-[11px] text-white/90 leading-tight space-y-1.5">
                <div>
                  <strong className="text-white">{t('footer.basecampMalang', 'Basecamp Malang:')} </strong><br />
                  {t('footer.malangAddr', 'Jalan Raya Gubugklakah no 147, Malang')}
                </div>
                <div>
                  <strong className="text-white">{t('footer.basecampProbolinggo', 'Basecamp Probolinggo:')} </strong><br />
                  {t('footer.probolinggoAddr', 'Jalan Pasar Sayur no 43, Sukapura')}
                </div>
                <div className="pt-2">
                  <a
                    href="https://maps.app.goo.gl/s2RnoqJqDLtZSEvP7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#EAF6FF] text-[#0996F5] rounded-xl font-black text-[11px] transition-colors shadow-sm min-h-[38px]"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#0996F5]" />
                    <span>{t('footer.gmapsButton', 'Google Maps Basecamp')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#B8C6D4] text-[11px]">
          <div>
            © 2019 - 2026 <span className="text-white font-bold">wisatabromo.co</span>. {t('footer.copyright', 'Seluruh Hak Cipta Dilindungi Undang-Undang.')}
          </div>
          <div className="flex items-center gap-4 text-[#B8C6D4]">
            <a href="#tips-dan-panduan" className="hover:text-[#0996F5] hover:underline">{t('footer.termsOfService', 'Ketentuan Layanan')}</a>
            <span aria-hidden="true">·</span>
            <a href="#budaya-tengger" className="hover:text-[#0996F5] hover:underline">{t('footer.tenggerGuide', 'Panduan Suku Tengger')}</a>
            <span aria-hidden="true">·</span>
            <a href="https://maps.app.goo.gl/s2RnoqJqDLtZSEvP7" target="_blank" rel="noopener noreferrer" className="hover:text-[#0996F5] flex items-center gap-1">
              <span>Google Maps</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span aria-hidden="true">·</span>
            <a href="#admin" className="hover:text-[#FFF700] text-[#B8C6D4] flex items-center gap-1 font-semibold">
              <span>{t('footer.adminPortal', 'Admin Portal')}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
