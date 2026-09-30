import React, { useState } from 'react';
import { ShieldCheck, Award, Sparkles, Play, ChevronLeft, ChevronRight, ExternalLink, CheckCircle2, Video, Building2 } from 'lucide-react';

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
    badgeColor: 'bg-[#ffc928] text-[#102a56]',
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
    badgeColor: 'bg-emerald-600 text-white',
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
    <section id="vip-kementerian" className="py-14 sm:py-18 bg-[#102a56] text-white relative overflow-hidden border-t border-b border-[#1b3a6b]">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3d72fe]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffc928]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffc928] text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <Award className="w-4 h-4" />
            <span>DIPERCAYA KEMENTERIAN & PEJABAT TINGGI NEGARA RI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3 text-balance">
            Bukti Pelayanan VVIP WisataBromo.co
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Komitmen pelayanan kelas VVIP terbukti nyata dengan kepercayaan para Menteri dan Kementerian Republik Indonesia dalam mendampingi perjalanan dinas maupun liburan keluarga di Bromo.
          </p>
        </div>

        {/* Carousel / Slider Container */}
        <div className="bg-white/5 border border-white/15 rounded-3xl p-5 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left 7 Columns: Embedded YouTube Video Player */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative aspect-[16/9] w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/15 group">
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
                          ? 'w-8 bg-[#ffc928]'
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
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer"
                    aria-label="Video sebelumnya"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextVideo}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors cursor-pointer"
                    aria-label="Video selanjutnya"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Dignitary Credentials & Details */}
            <div className="lg:col-span-5 space-y-4">
              {/* Active Badge */}
              <div className="flex items-center gap-2">
                <span className={`text-xs font-black px-3 py-1.5 rounded-xl shadow-xs ${currentVideo.badgeColor}`}>
                  {currentVideo.badgeText}
                </span>
                <span className="text-[11px] text-slate-300 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ffc928]" />
                  <span>Verified VVIP Service</span>
                </span>
              </div>

              {/* Title & VIP Name */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-1">
                  {currentVideo.vipName}
                </h3>
                <div className="text-xs text-[#ffc928] font-bold flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{currentVideo.role}</span>
                </div>
              </div>

              {/* Highlight Box */}
              <div className="p-3.5 bg-white/10 border border-white/15 rounded-2xl space-y-1.5">
                <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Fokus Layanan:
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white">
                  {currentVideo.highlight}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentVideo.description}
              </p>

              {/* Quick Tab Switch Buttons */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Pilih Dokumentasi Video:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {VIP_VIDEOS.map((v, i) => (
                    <button
                      key={v.id}
                      onClick={() => setActiveIndex(i)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        activeIndex === i
                          ? 'bg-[#3d72fe] text-white border-[#3d72fe] shadow-md shadow-[#3d72fe]/30 font-bold'
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
              <div className="flex items-center gap-2 text-[11px] text-slate-300 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standar armada prima, sopir disiplin, dan koordinasi resmi TNBTS.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 VIP Trust Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center text-xs">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ffc928]/20 text-[#ffc928] flex items-center justify-center font-bold shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-sm">Standar Pelayanan VVIP</div>
              <div className="text-slate-400 text-[11px]">Protokoler pejabat negara & delegasi instansi</div>
            </div>
          </div>

          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3d72fe]/20 text-[#3d72fe] flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-sm">Armada & Driver Resmi</div>
              <div className="text-slate-400 text-[11px]">Jeep Toyota FJ40 berizin lengkap TNBTS</div>
            </div>
          </div>

          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-sm">Dokumentasi Profesional</div>
              <div className="text-slate-400 text-[11px]">Tim fotografer & videografer dedicated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
