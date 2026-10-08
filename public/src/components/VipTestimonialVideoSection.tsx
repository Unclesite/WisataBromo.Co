import React, { useState } from 'react';
import { ShieldCheck, Award, Sparkles, ChevronLeft, ChevronRight, CheckCircle2, Building2 } from 'lucide-react';

interface VipVideoItem {
  id: string;
  youtubeId: string;
  title: string;
  vipName: string;
  role: string;
  institution: string;
  highlight: string;
  description: string;
  badgeText: string;
  badgeColor: string;
  duration: string;
}

const VIP_VIDEOS: VipVideoItem[] = [
  {
    id: 'menaker-prof-yassierli',
    youtubeId: 'XlrXdRstWOs',
    title: 'Pelayanan Kunjungan Kerja & Wisata Eksklusif Menteri Ketenagakerjaan RI',
    vipName: 'Prof. Yassierli, S.T., M.T., Ph.D.',
    role: 'Menteri Ketenagakerjaan Republik Indonesia',
    institution: 'Kementerian Ketenagakerjaan RI (Kemnaker)',
    highlight: 'Armada Jeep FJ40 VVIP & Protokol Pelayanan Pejabat Negara',
    description: 'WisataBromo.co dipercaya secara resmi mendampingi perjalanan rombongan Menteri Ketenagakerjaan RI, Prof. Yassierli, dalam agenda kunjungan kerja dan eksplorasi keindahan kaldera Bromo dengan standar kenyamanan VVIP.',
    badgeText: 'Menteri Ketenagakerjaan RI',
    badgeColor: 'bg-[#FFF700] text-[#0B1220]',
    duration: 'Dokumentasi Resmi'
  },
  {
    id: 'kemenhut-ri',
    youtubeId: '5_6LMctafJM',
    title: 'Ekspedisi & Kunjungan Resmi Kementerian Kehutanan Republik Indonesia',
    vipName: 'Delegasi Kementerian Kehutanan RI',
    role: 'Kementerian Kehutanan Republik Indonesia',
    institution: 'Kementerian Kehutanan RI (Kemenhut)',
    highlight: 'Dukungan Logistik & Armada Jeep Konservasi Kawasan TNBTS',
    description: 'Pelayanan armada Jeep 4x4 dan pemandu lokal berizin resmi TNBTS dalam mendampingi delegasi Kementerian Kehutanan RI melintasi kawasan konservasi, lautan pasir, dan savana Bromo.',
    badgeText: 'Kementerian Kehutanan RI',
    badgeColor: 'bg-emerald-500 text-white',
    duration: 'Dokumentasi Resmi'
  }
];

export const VipTestimonialVideoSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentVideo = VIP_VIDEOS[activeIndex];

  const nextVideo = () => {
    setActiveIndex((prev) => (prev + 1) % VIP_VIDEOS.length);
  };

  const prevVideo = () => {
    setActiveIndex((prev) => (prev - 1 + VIP_VIDEOS.length) % VIP_VIDEOS.length);
  };

  return (
    <section id="vip-kementerian" className="py-12 sm:py-16 lg:py-20 bg-[#071A2B] text-white relative overflow-hidden border-t border-b border-[#0d2a45]">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#0996F5]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#FFF700]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Centered with clean mobile hierarchy) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFF700] text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <Award className="w-4 h-4 text-[#FFF700]" />
            <span>BUKTI LAYANAN VVIP PEJABAT NEGARA RI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2.5 sm:mb-3 text-balance">
            Dipercaya Oleh Kementerian Republik Indonesia
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto text-balance">
            Standar pelayanan VVIP terbaik dengan armada Toyota Land Cruiser FJ40 prima, driver berlisensi resmi, dan koordinasi protokoler Taman Nasional Bromo Tengger Semeru.
          </p>
        </div>

        {/* Carousel / Slider Container */}
        <div className="bg-white/5 border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
            
            {/* Left 7 Columns: Embedded YouTube Video Player */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative aspect-[16/9] w-full bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/15">
                <iframe
                  key={currentVideo.youtubeId}
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>

              {/* Slider Navigation Dots & Arrows */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  {VIP_VIDEOS.map((vid, idx) => (
                    <button
                      key={vid.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeIndex === idx
                          ? 'w-8 bg-[#FFF700]'
                          : 'w-2.5 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Lihat video ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevVideo}
                    className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/10 transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                    aria-label="Video sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextVideo}
                    className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/10 transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                    aria-label="Video selanjutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Dignitary Credentials & Details */}
            <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
              {/* Active Badge */}
              <div className="flex items-center gap-2">
                <span className={`text-xs font-black px-3 py-1.5 rounded-xl shadow-xs ${currentVideo.badgeColor}`}>
                  {currentVideo.badgeText}
                </span>
                <span className="text-[11px] text-slate-300 flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFF700]" />
                  <span>Pelayanan Resmi VVIP</span>
                </span>
              </div>

              {/* Title & VIP Name */}
              <div>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight mb-1">
                  {currentVideo.vipName}
                </h3>
                <div className="text-xs text-[#FFF700] font-bold flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{currentVideo.role}</span>
                </div>
              </div>

              {/* Highlight Box */}
              <div className="p-3.5 bg-white/10 border border-white/15 rounded-2xl space-y-1">
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Fasilitas & Standar Pelayanan:
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                  {currentVideo.highlight}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {currentVideo.description}
              </p>

              {/* Quick Tab Switch Buttons (Clean Touch Friendly) */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Pilih Dokumentasi Video Kementerian:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {VIP_VIDEOS.map((v, i) => (
                    <button
                      key={v.id}
                      onClick={() => setActiveIndex(i)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer min-h-[44px] ${
                        activeIndex === i
                          ? 'bg-[#0996F5] text-white border-[#0996F5] shadow-md shadow-[#0996F5]/30 font-bold'
                          : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10 text-xs'
                      }`}
                    >
                      <div className="text-[11px] font-black truncate">{v.badgeText}</div>
                      <div className="text-[10px] opacity-80 truncate">{v.institution}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* VVIP Service Assurance */}
              <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Armada Jeep prima, sopir terlatih, dan briefing rute profesional.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 VIP Trust Stats Cards (Clean F-Pattern & Mobile-Friendly Centered Alignment) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mt-6 sm:mt-8">
          {/* Card 1 */}
          <div className="p-4 sm:p-5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl sm:rounded-3xl flex items-center sm:flex-col sm:items-center sm:text-center text-left gap-3.5 sm:gap-3 transition-all duration-200 shadow-sm">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF700]/20 border border-[#FFF700]/30 text-[#FFF700] flex items-center justify-center font-bold shrink-0 shadow-xs">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFF700]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-black text-white text-sm sm:text-base leading-snug">Standar Pelayanan VVIP</div>
              <div className="text-slate-300 text-xs sm:text-[11px] leading-relaxed mt-0.5">Protokoler pejabat negara & delegasi instansi RI</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 sm:p-5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl sm:rounded-3xl flex items-center sm:flex-col sm:items-center sm:text-center text-left gap-3.5 sm:gap-3 transition-all duration-200 shadow-sm">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0996F5]/25 border border-[#0996F5]/40 text-[#0996F5] flex items-center justify-center font-bold shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-black text-white text-sm sm:text-base leading-snug">Armada & Driver Resmi</div>
              <div className="text-slate-300 text-xs sm:text-[11px] leading-relaxed mt-0.5">Jeep Toyota Land Cruiser FJ40 berizin lengkap TNBTS</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 sm:p-5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl sm:rounded-3xl flex items-center sm:flex-col sm:items-center sm:text-center text-left gap-3.5 sm:gap-3 transition-all duration-200 shadow-sm">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold shrink-0 shadow-xs">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-black text-white text-sm sm:text-base leading-snug">Dokumentasi Profesional</div>
              <div className="text-slate-300 text-xs sm:text-[11px] leading-relaxed mt-0.5">Tim fotografer & videografer kamera DSLR/Mirrorless</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
