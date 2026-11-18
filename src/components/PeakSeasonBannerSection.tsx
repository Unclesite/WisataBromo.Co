import React from 'react';
import { Megaphone, Clock, ShieldCheck, ArrowRight, AlertTriangle, Users, Car, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface PeakSeasonBannerSectionProps {
  onOpenBooking?: () => void;
}

export const PeakSeasonBannerSection: React.FC<PeakSeasonBannerSectionProps> = ({ onOpenBooking }) => {
  const { language, t } = useLanguage();

  const getWaText = () => {
    if (language === 'zh') {
      return '您好，WisataBromo.co 客服，我想咨询2026年12月18日-2027年1月5日圣诞与元旦新年旺季的出行排期与席位配额。';
    }
    if (language === 'en') {
      return 'Hello WisataBromo.co team, I would like to inquire about availability and schedule for the Christmas & New Year Peak Season (18 December 2026 - 5 January 2027).';
    }
    return 'Halo Admin WisataBromo.co, saya ingin bertanya ketersediaan kuota & jadwal untuk Peak Season Natal & Tahun Baru (18 Desember 2026 - 5 Januari 2027).';
  };

  const whatsappUrl = `https://wa.me/6281222290318?text=${encodeURIComponent(getWaText())}`;

  return (
    <section id="peak-season-alert" className="relative py-8 sm:py-12 bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0F172A] text-white border-y border-[#fff700]/30 overflow-hidden shadow-2xl">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#fff700]/15 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Diagonal subtle stripe pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFF700_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-[#fff700]/40 rounded-3xl p-5 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          {/* Top Urgency Ribbon Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff700] text-black text-xs font-black uppercase tracking-wider shadow-lg shadow-[#fff700]/30 animate-pulse border border-[#fff700]">
              <Megaphone className="w-4 h-4 text-black" />
              <span>{t('peakSeason.badge', 'PEAK SEASON NATAL & TAHUN BARU')}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff700]/10 border border-[#fff700]/30 text-[#fff700] text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-[#fff700]" />
              <span>{t('peakSeason.period', 'Periode 18 Desember 2026 - 5 Januari 2027')}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Main Heading & Message (8 cols) */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                {t('peakSeason.heading', 'Peak Season Natal & Tahun Baru')} <br className="hidden sm:inline" />
                <span className="text-[#fff700] drop-shadow-sm">
                  {t('peakSeason.dates', '18 Desember 2026 – 5 Januari 2027')}
                </span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-medium leading-relaxed">
                <strong className="text-[#fff700] font-extrabold underline decoration-[#fff700] underline-offset-4 flex-inline items-center gap-1">
                  <AlertTriangle className="w-4 h-4 text-[#fff700] inline mr-1" />
                  {t('peakSeason.alertTitle', 'Seat Terbatas / Jeep Hampir Habis!')}
                </strong>{' '}
                {t('peakSeason.alertDescription', 'Permintaan armada Jeep FJ40 & kuota tiket masuk TNBTS melonjak tinggi. Hubungi admin via WhatsApp untuk tanya jadwal dan amankan seat liburanmu!')}
              </p>

              {/* Status Badges & Counter */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{t('peakSeason.jeepStatus', 'Status Armada Jeep')}</div>
                    <div className="text-sm font-black text-[#fff700] flex items-center gap-1.5">
                      <span>{t('peakSeason.jeepAvail', 'Ketersediaan ~8% Terakhir')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-[#fff700]/20 border border-[#fff700]/30 flex items-center justify-center text-[#fff700] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{t('peakSeason.slotStatus', 'Slot Open & Private Trip')}</div>
                    <div className="text-sm font-black text-white flex items-center gap-1.5">
                      <span className="text-emerald-400">{t('peakSeason.slotFilled', '92% Seat Terisi')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Column (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-center items-stretch space-y-3 pt-2 lg:pt-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 sm:py-4 px-3 sm:px-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-500 hover:from-emerald-400 hover:to-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 sm:gap-2.5 group min-h-[52px] sm:min-h-[56px] text-center"
              >
                <MessageCircle className="w-5 h-5 text-white fill-white/20 group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-xs sm:text-base font-extrabold sm:font-black text-center leading-tight tracking-tight">
                  {t('peakSeason.askButton', 'Tanya untuk Tanggal Peak Season')}
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-300 font-medium text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('peakSeason.responseBadge', 'Respon Cepat WhatsApp 24/7 & Garansi Berangkat')}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
