import React, { useEffect, useState } from 'react';
import { TourPackage } from '../types';
import { 
  ArrowLeft, MapPin, Clock, Calendar, Users, Star, Check, AlertCircle, 
  PhoneCall, Send, ShieldCheck, ExternalLink, Sparkles,
  Car, Share2, Luggage, Navigation
} from 'lucide-react';

interface PackageDetailPageProps {
  packageItem: TourPackage;
  onBackToHome: () => void;
  onBookNow: (pkg: TourPackage) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({
  packageItem,
  onBackToHome,
  onBookNow,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'fasilitas' | 'lokasi' | 'tips'>('itinerary');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${packageItem.title} - WisataBromo.co Official`;
    window.location.hash = `paket-${packageItem.id}`;
  }, [packageItem.id, packageItem.title]);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo Admin WisataBromo.co, saya ingin reservasi paket "${packageItem.title}" (${formatRupiah(packageItem.price)} ${packageItem.priceUnit}). Mohon info jadwal ketersediaan tanggalnya.`
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen py-5 sm:py-10 text-[#111318] animate-fadeIn pb-28 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation Bar: Breadcrumb & Share */}
        <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-white hover:bg-[#e5f4ff] text-[#111318] hover:text-[#0996f5] border border-slate-200 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer group min-h-[42px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-[#0996f5]" />
            <span>Kembali ke Katalog Paket</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-100 text-[#111318] border border-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer min-h-[42px]"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Link Tersalin!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#0996f5]" />
                <span className="hidden xs:inline">Bagikan</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Image & Main Title Card (Clean Visual Presence) */}
        <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mb-6 sm:mb-8">
          {packageItem.imageUrl && (
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-900 overflow-hidden">
              <img
                src={packageItem.imageUrl}
                alt={packageItem.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>

              {/* Floating badges on image */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2">
                <span className="text-[11px] sm:text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ffc928]" />
                  <span>Start: {packageItem.startLocationName}</span>
                </span>

                {packageItem.badge && (
                  <span className={`text-[11px] sm:text-xs font-extrabold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl backdrop-blur-md shadow-sm ${
                    packageItem.category === 'trail'
                      ? 'bg-[#ea0610] text-white'
                      : 'bg-[#ffc928] text-[#111318]'
                  }`}>
                    {packageItem.badge}
                  </span>
                )}
              </div>

              {/* Bottom Hero Info */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white">
                <div className="flex items-center gap-2 mb-1 text-xs text-[#ffc928] font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#ffc928]" />
                  <span>{packageItem.rating.toFixed(1)}</span>
                  <span className="text-white/80 font-normal">({packageItem.reviewsCount} Ulasan Tamu)</span>
                </div>
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight drop-shadow-md text-balance">
                  {packageItem.title}
                </h1>
              </div>
            </div>
          )}

          {/* Quick Specifications Ribbon (Clean F-Pattern on Mobile) */}
          <div className="p-4 sm:p-6 bg-[#ffffff] border-b border-slate-100">
            <p className="text-xs sm:text-sm text-[#111318]/80 leading-relaxed max-w-4xl mb-4 sm:mb-5">
              {packageItem.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[#111318]">
              {/* Box 1: Durasi Trip */}
              <div className="p-3 sm:p-3.5 bg-[#e5f4ff]/70 border border-[#0996f5]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Clock className="w-5 h-5 text-[#0996f5] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Durasi Trip</div>
                  <div className="font-black text-xs sm:text-sm leading-snug mt-0.5 break-words">{packageItem.duration}</div>
                </div>
              </div>

              {/* Box 2: Jam Berangkat */}
              <div className="p-3 sm:p-3.5 bg-[#e5f4ff]/70 border border-[#0996f5]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Calendar className="w-5 h-5 text-[#0996f5] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Jadwal Berangkat</div>
                  <div className="font-black text-xs sm:text-sm leading-snug mt-0.5 break-words text-[#111318]">
                    {packageItem.departureTime}
                  </div>
                </div>
              </div>

              {/* Box 3: Kapasitas */}
              <div className="p-3 sm:p-3.5 bg-[#e5f4ff]/70 border border-[#0996f5]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Users className="w-5 h-5 text-[#0996f5] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Kapasitas</div>
                  <div className="font-black text-xs sm:text-sm leading-snug mt-0.5 break-words">
                    {packageItem.category === 'open_trip'
                      ? '1 Orang Pasti Jalan'
                      : `${packageItem.minPax} - ${packageItem.maxPax} Pax`}
                  </div>
                </div>
              </div>

              {/* Box 4: Armada */}
              <div className="p-3 sm:p-3.5 bg-[#e5f4ff]/70 border border-[#0996f5]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Car className="w-5 h-5 text-[#0996f5] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Armada Resmi</div>
                  <div className="font-black text-xs sm:text-sm leading-snug mt-0.5 break-words">Jeep Toyota FJ40 TNBTS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Content Grid: Details Left, Sticky Booking Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Tabs, Itinerary, Inclusions, Meeting Point, FAQs */}
          <div className="md:col-span-7 lg:col-span-8 space-y-5 sm:space-y-6">
            
            {/* Interactive Section Tabs (Horizontal Scroll on Mobile) */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#ffffff] border border-slate-200 rounded-2xl shadow-xs overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer min-h-[42px] ${
                  activeTab === 'itinerary'
                    ? 'bg-[#0996f5] text-white shadow-sm'
                    : 'text-[#111318] hover:bg-slate-100'
                }`}
              >
                Jadwal & Itinerary
              </button>
              <button
                onClick={() => setActiveTab('fasilitas')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer min-h-[42px] ${
                  activeTab === 'fasilitas'
                    ? 'bg-[#0996f5] text-white shadow-sm'
                    : 'text-[#111318] hover:bg-slate-100'
                }`}
              >
                Fasilitas & Include
              </button>
              <button
                onClick={() => setActiveTab('lokasi')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer min-h-[42px] ${
                  activeTab === 'lokasi'
                    ? 'bg-[#0996f5] text-white shadow-sm'
                    : 'text-[#111318] hover:bg-slate-100'
                }`}
              >
                Titik Jemput
              </button>
              <button
                onClick={() => setActiveTab('tips')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer min-h-[42px] ${
                  activeTab === 'tips'
                    ? 'bg-[#0996f5] text-white shadow-sm'
                    : 'text-[#111318] hover:bg-slate-100'
                }`}
              >
                Tips & Pakaian
              </button>
            </div>

            {/* Tab 1: Itinerary */}
            {activeTab === 'itinerary' && (
              <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 space-y-4 sm:space-y-5 shadow-sm animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h2 className="text-base sm:text-lg font-black text-[#111318] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#0996f5]" />
                    <span>Jadwal Perjalanan (Itinerary Jam)</span>
                  </h2>
                  <span className="text-xs text-slate-500 font-medium">WIB</span>
                </div>

                <div className="space-y-4 relative pl-5 border-l-2 border-[#0996f5]/30 ml-2">
                  {packageItem.itinerary.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-[#0996f5] border-2 border-white shadow-xs"></div>
                      <div className="text-xs font-mono font-bold text-[#0996f5] bg-[#e5f4ff] inline-block px-2.5 py-0.5 rounded-md">
                        {step.time} WIB
                      </div>
                      <div className="text-sm font-extrabold text-[#111318] mt-1">{step.activity}</div>
                      <div className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{step.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Fasilitas Include & Exclude */}
            {activeTab === 'fasilitas' && (
              <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 space-y-5 sm:space-y-6 shadow-sm animate-fadeIn">
                <h2 className="text-base sm:text-lg font-black text-[#111318] flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Sparkles className="w-5 h-5 text-[#0996f5]" />
                  <span>Rincian Fasilitas Lengkap</span>
                </h2>

                {/* Highlights */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#111318] uppercase tracking-wider">
                    Keunggulan Paket:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {packageItem.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2.5">
                    <div className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Fasilitas Termasuk (Include):</span>
                    </div>
                    <ul className="space-y-2 text-xs text-emerald-950">
                      {packageItem.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-2xl space-y-2.5">
                    <div className="text-xs font-extrabold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-[#ea0610]" />
                      <span>Tidak Termasuk (Exclude):</span>
                    </div>
                    <ul className="space-y-2 text-xs text-rose-950">
                      {packageItem.exclusions.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#ea0610] font-bold">✕</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Meeting Point & Lokasi */}
            {activeTab === 'lokasi' && (
              <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 space-y-4 sm:space-y-5 shadow-sm animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h2 className="text-base sm:text-lg font-black text-[#111318] flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-[#0996f5]" />
                    <span>Titik Penjemputan</span>
                  </h2>
                  <a
                    href="https://maps.app.goo.gl/s2RnoqJqDLtZSEvP7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0996f5] hover:underline"
                  >
                    <span>Peta Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-4 bg-[#e5f4ff] border border-[#0996f5]/25 rounded-2xl space-y-1.5">
                  <div className="text-xs font-bold text-[#0996f5]">Wilayah Jemput:</div>
                  <div className="text-xs sm:text-sm text-[#111318] leading-relaxed font-semibold">
                    {packageItem.meetingPoint}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5 text-xs text-slate-600 leading-relaxed">
                  <div className="font-bold text-[#111318]">Prosedur Penjemputan:</div>
                  <div>1. Driver kami menghubungi H-1 keberangkatan via WhatsApp untuk konfirmasi jam dan plat armada.</div>
                  <div>2. Harap siap 15 menit sebelum kedatangan mobil penjemputan.</div>
                </div>
              </div>
            )}

            {/* Tab 4: Tips & Perlengkapan */}
            {activeTab === 'tips' && (
              <div className="bg-[#ffffff] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 space-y-4 sm:space-y-5 shadow-sm animate-fadeIn">
                <h2 className="text-base sm:text-lg font-black text-[#111318] flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Luggage className="w-5 h-5 text-[#0996f5]" />
                  <span>Perlengkapan Wajib (Suhu 2°C - 10°C)</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-[#111318]">🧥 Jaket Gunung Tebal / Windbreaker</div>
                    <div className="text-slate-600 text-[11px]">Suhu fajar di Penanjakan bisa mencapai 2°C – 6°C.</div>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-[#111318]">🧤 Sarung Tangan & Kupluk / Beanie</div>
                    <div className="text-slate-600 text-[11px]">Melindungi telapak tangan dan telinga dari angin dingin.</div>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-[#111318]">😷 Masker Debu & Kacamata Hitam</div>
                    <div className="text-slate-600 text-[11px]">Sangat berguna saat di Lautan Pasir dan Kawah.</div>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-[#111318]">👟 Sepatu Kets / Trekking Nyaman</div>
                    <div className="text-slate-600 text-[11px]">Hindari sandal jepit atau sepatu berhak tinggi.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Pricing Card & Direct Booking */}
          <div className="md:col-span-5 lg:col-span-4 space-y-5 md:sticky md:top-20 lg:top-24">
            
            {/* Price Box */}
            <div className="bg-[#ffffff] border-2 border-[#0996f5]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#0996f5] uppercase tracking-wider">
                  Tarif Resmi WisataBromo.co
                </span>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-lg">
                  Resmi TNBTS
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#0996f5] font-mono tabular-nums">
                  {formatRupiah(packageItem.price)}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {packageItem.priceUnit}
                </div>
              </div>

              {packageItem.priceWithDoc && packageItem.priceWithDoc !== packageItem.price && (
                <div className="p-3 bg-[#e5f4ff] rounded-xl text-xs text-[#111318] flex items-center justify-between border border-[#0996f5]/20">
                  <span className="font-bold">Plus Dokumentasi:</span>
                  <span className="font-mono font-black text-[#0996f5]">
                    {formatRupiah(packageItem.priceWithDoc)}
                  </span>
                </div>
              )}

              {/* Pricing Tiers if private surabaya */}
              {packageItem.pricingTiers && (
                <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-[11px] border border-slate-200">
                  <div className="font-bold text-[#111318]">Tarif Tier per Peserta:</div>
                  <div className="grid grid-cols-2 gap-1 text-slate-600 font-medium">
                    <div>2 Pax: Rp 1.550rb/org</div>
                    <div>4 Pax: Rp 800rb/org</div>
                    <div>6 Pax: Rp 570rb/org</div>
                    <div>&gt;10 Pax: Rp 470rb/org</div>
                  </div>
                </div>
              )}

              {/* Primary Action Button (Touch-Friendly Min 48px) */}
              <div className="space-y-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => onBookNow(packageItem)}
                  className="w-full py-4 px-4 text-xs sm:text-sm font-black text-white bg-[#0996f5] hover:bg-[#0782d6] rounded-xl transition-all shadow-lg shadow-[#0996f5]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95 min-h-[48px]"
                >
                  <Send className="w-4 h-4 text-[#ffc928]" />
                  <span>Hitung Biaya & Pesan Sekarang</span>
                </button>

                <a
                  href={`https://wa.me/6281222290318?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-bold text-[#111318] hover:text-[#0996f5] bg-[#e5f4ff] hover:bg-[#d8e7ff] rounded-xl transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <PhoneCall className="w-4 h-4 text-[#0996f5]" />
                  <span>Konsultasi WA (+62 812 2229 0318)</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>PT Global Travel Healing</span>
                </div>
                <div>• Tiket TNBTS Resmi & Asuransi Perjalanan</div>
                <div>• E-Tiket & Invoice PDF resmi otomatis</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Quick Booking Bar (Only on phones < 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#ffffff]/98 backdrop-blur-md border-t border-slate-200/90 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="min-w-0">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Mulai Dari</div>
          <div className="text-lg font-mono font-black text-[#0996f5] leading-tight truncate">
            {formatRupiah(packageItem.price)}
          </div>
        </div>
        <button
          type="button"
          onClick={() => onBookNow(packageItem)}
          className="px-5 py-2.5 text-xs font-black text-white bg-[#0996f5] hover:bg-[#0782d6] rounded-xl shadow-md shadow-[#0996f5]/25 flex items-center gap-1.5 active:scale-95 cursor-pointer whitespace-nowrap min-h-[44px]"
        >
          <span>Pesan Sekarang</span>
          <Send className="w-3.5 h-3.5 text-[#ffc928]" />
        </button>
      </div>
    </div>
  );
};
