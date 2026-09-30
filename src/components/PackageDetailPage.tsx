import React, { useEffect, useState } from 'react';
import { TourPackage } from '../types';
import { 
  ArrowLeft, MapPin, Clock, Calendar, Users, Star, Check, AlertCircle, 
  PhoneCall, Send, ShieldCheck, ExternalLink, Camera, Sparkles,
  Car, Mountain, ChevronRight, Share2, HelpCircle, Flame, CheckCircle2,
  Info, Luggage, Navigation, DollarSign
} from 'lucide-react';

interface PackageDetailPageProps {
  packageItem: TourPackage;
  allPackages: TourPackage[];
  onBackToHome: () => void;
  onBookNow: (pkg: TourPackage) => void;
  onSelectRelatedPackage: (pkg: TourPackage) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({
  packageItem,
  allPackages,
  onBackToHome,
  onBookNow,
  onSelectRelatedPackage,
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

  const relatedPackages = allPackages
    .filter((p) => p.id !== packageItem.id && (p.category === packageItem.category || p.startCity === packageItem.startCity))
    .slice(0, 3);

  const fallbackRelated = relatedPackages.length > 0 
    ? relatedPackages 
    : allPackages.filter((p) => p.id !== packageItem.id).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Halo Admin WisataBromo.co, saya ingin reservasi paket "${packageItem.title}" (${formatRupiah(packageItem.price)} ${packageItem.priceUnit}). Mohon info jadwal ketersediaan tanggalnya.`
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen py-6 sm:py-10 text-[#111318] animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Bar: Breadcrumb & Share */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#eaf2ff] text-[#102a56] hover:text-[#3d72fe] border border-slate-200 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Kembali ke Katalog Paket</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Link Tersalin!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#3d72fe]" />
                  <span>Bagikan Halaman</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Hero Image & Main Title Card */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl mb-8">
          {packageItem.imageUrl && (
            <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full bg-slate-900 overflow-hidden">
              <img
                src={packageItem.imageUrl}
                alt={packageItem.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

              {/* Floating badges on image */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-white bg-[#102a56]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ffc928]" />
                  <span>Titik Start: {packageItem.startLocationName}</span>
                </span>

                {packageItem.badge && (
                  <span className={`text-xs font-extrabold px-3 py-1.5 rounded-xl backdrop-blur-md shadow-sm ${
                    packageItem.category === 'trail'
                      ? 'bg-[#ea0610] text-white'
                      : 'bg-[#ffc928] text-[#102a56]'
                  }`}>
                    {packageItem.badge}
                  </span>
                )}
              </div>

              {/* Bottom Hero Info */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <div className="flex items-center gap-2 mb-1.5 text-xs sm:text-sm text-[#ffc928] font-bold">
                  <Star className="w-4 h-4 fill-[#ffc928]" />
                  <span>{packageItem.rating.toFixed(1)}</span>
                  <span className="text-white/80 font-normal">({packageItem.reviewsCount} Wisatawan Puas)</span>
                  <span className="text-white/50">·</span>
                  <span className="text-white/90 capitalize font-medium">{packageItem.category.replace('_', ' ')}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight drop-shadow-lg">
                  {packageItem.title}
                </h1>
              </div>
            </div>
          )}

          {/* Specifications Ribbon (Clean responsive layout that wraps without text clipping) */}
          <div className="p-5 sm:p-6 bg-white border-b border-slate-100">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl mb-5">
              {packageItem.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-[#102a56]">
              {/* Box 1: Durasi Trip */}
              <div className="p-3.5 bg-[#eaf2ff]/70 border border-[#3d72fe]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Clock className="w-5 h-5 text-[#3d72fe] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Durasi Trip</div>
                  <div className="font-extrabold text-xs sm:text-sm leading-snug mt-0.5 break-words">{packageItem.duration}</div>
                </div>
              </div>

              {/* Box 2: Jam Berangkat (Target element: wraps cleanly without overflow on mobile/tablet) */}
              <div className="p-3.5 bg-[#eaf2ff]/70 border border-[#3d72fe]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Calendar className="w-5 h-5 text-[#3d72fe] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Jadwal Berangkat</div>
                  <div className="font-extrabold text-xs sm:text-sm leading-snug mt-0.5 break-words text-[#102a56]">
                    {packageItem.departureTime}
                  </div>
                </div>
              </div>

              {/* Box 3: Kapasitas */}
              <div className="p-3.5 bg-[#eaf2ff]/70 border border-[#3d72fe]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Users className="w-5 h-5 text-[#3d72fe] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Kapasitas</div>
                  <div className="font-extrabold text-xs sm:text-sm leading-snug mt-0.5 break-words">
                    {packageItem.category === 'open_trip'
                      ? '1 Orang Pasti Jalan'
                      : `${packageItem.minPax} - ${packageItem.maxPax} Pax`}
                  </div>
                </div>
              </div>

              {/* Box 4: Armada */}
              <div className="p-3.5 bg-[#eaf2ff]/70 border border-[#3d72fe]/20 rounded-2xl flex items-start gap-3 min-w-0">
                <Car className="w-5 h-5 text-[#3d72fe] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Armada Resmi</div>
                  <div className="font-extrabold text-xs sm:text-sm leading-snug mt-0.5 break-words">Jeep 4x4 Land Cruiser FJ40</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Content Grid: Details Left, Sticky Booking Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Tabs, Itinerary, Inclusions, Meeting Point, FAQs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Interactive Section Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-xs overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'itinerary'
                    ? 'bg-[#3d72fe] text-white shadow-sm'
                    : 'text-[#102a56] hover:bg-slate-100'
                }`}
              >
                Jadwal & Itinerary
              </button>
              <button
                onClick={() => setActiveTab('fasilitas')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'fasilitas'
                    ? 'bg-[#3d72fe] text-white shadow-sm'
                    : 'text-[#102a56] hover:bg-slate-100'
                }`}
              >
                Fasilitas & Include
              </button>
              <button
                onClick={() => setActiveTab('lokasi')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'lokasi'
                    ? 'bg-[#3d72fe] text-white shadow-sm'
                    : 'text-[#102a56] hover:bg-slate-100'
                }`}
              >
                Titik Jemput & Rute
              </button>
              <button
                onClick={() => setActiveTab('tips')}
                className={`flex-1 py-2.5 px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'tips'
                    ? 'bg-[#3d72fe] text-white shadow-sm'
                    : 'text-[#102a56] hover:bg-slate-100'
                }`}
              >
                Tips & Pakaian
              </button>
            </div>

            {/* Tab 1: Itinerary */}
            {activeTab === 'itinerary' && (
              <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 space-y-5 shadow-sm animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h2 className="text-base sm:text-lg font-extrabold text-[#102a56] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#3d72fe]" />
                    <span>Jadwal Perjalanan (Itinerary Lengkap)</span>
                  </h2>
                  <span className="text-xs text-slate-500 font-medium">Waktu Indonesia Barat (WIB)</span>
                </div>

                <div className="space-y-4 relative pl-5 border-l-2 border-[#3d72fe]/30 ml-2">
                  {packageItem.itinerary.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#3d72fe] border-2 border-white shadow-xs"></div>
                      <div className="text-xs font-mono font-bold text-[#3d72fe] bg-[#eaf2ff] inline-block px-2 py-0.5 rounded-md">
                        {step.time} WIB
                      </div>
                      <div className="text-sm font-extrabold text-[#102a56] mt-1">{step.activity}</div>
                      <div className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{step.description}</div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Jadwal perjalanan bersifat fleksibel mengikuti situasi lalu lintas dan kondisi cuaca di kawasan kaldera Tengger.</span>
                </div>
              </div>
            )}

            {/* Tab 2: Fasilitas Include & Exclude */}
            {activeTab === 'fasilitas' && (
              <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 space-y-6 shadow-sm animate-fadeIn">
                <h2 className="text-base sm:text-lg font-extrabold text-[#102a56] flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Sparkles className="w-5 h-5 text-[#3d72fe]" />
                  <span>Rincian Fasilitas & Keunggulan Layanan</span>
                </h2>

                {/* Highlights */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-[#102a56] uppercase tracking-wider">
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
              <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 space-y-5 shadow-sm animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h2 className="text-base sm:text-lg font-extrabold text-[#102a56] flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-[#3d72fe]" />
                    <span>Titik Penjemputan & Meeting Point</span>
                  </h2>
                  {packageItem.mapUrl && (
                    <a
                      href={packageItem.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#3d72fe] hover:underline"
                    >
                      <span>Buka Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="p-4 bg-[#eaf2ff] border border-[#3d72fe]/25 rounded-2xl space-y-2">
                  <div className="text-xs font-bold text-[#102a56]">Alamat / Wilayah Jemput:</div>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {packageItem.meetingPoint}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs text-slate-600 leading-relaxed">
                  <div className="font-bold text-[#102a56]">Prosedur Penjemputan Driver:</div>
                  <div>1. Driver kami akan menghubungi Anda via WhatsApp H-1 sebelum keberangkatan untuk konfirmasi jam dan nomor plat armada.</div>
                  <div>2. Harap siap di lobby hotel / titik kumpul 15 menit sebelum estimasi kedatangan mobil penjemputan.</div>
                </div>
              </div>
            )}

            {/* Tab 4: Tips & Perlengkapan */}
            {activeTab === 'tips' && (
              <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 space-y-5 shadow-sm animate-fadeIn">
                <h2 className="text-base sm:text-lg font-extrabold text-[#102a56] flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Luggage className="w-5 h-5 text-[#3d72fe]" />
                  <span>Perlengkapan Wajib & Tips Suhu Dingin (2°C - 10°C)</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-[#102a56]">🧥 Jaket Gunung Tebal / Windbreaker</div>
                    <div className="text-slate-600 text-[11px]">Suhu fajar di Penanjakan bisa mencapai 2°C – 6°C.</div>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-[#102a56]">🧤 Sarung Tangan & Kupluk / Beanie</div>
                    <div className="text-slate-600 text-[11px]">Melindungi telapak tangan dan telinga dari angin gunung beku.</div>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-[#102a56]">😷 Masker Debu & Kacamata Hitam</div>
                    <div className="text-slate-600 text-[11px]">Sangat berguna saat berada di Lautan Pasir Berbisik dan Kawah.</div>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-[#102a56]">👟 Sepatu Kets / Trekking Nyaman</div>
                    <div className="text-slate-600 text-[11px]">Hindari memakai sandal jepit atau sepatu berhak tinggi (heels).</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column (4 cols): Sticky Pricing Card & Direct Booking */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
            {/* Price Box */}
            <div className="bg-white border-2 border-[#3d72fe]/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#3d72fe] uppercase tracking-wider">
                  Tarif Resmi WisataBromo.co
                </span>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                  Legal TNBTS
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#102a56] font-mono tabular-nums">
                  {formatRupiah(packageItem.price)}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {packageItem.priceUnit}
                </div>
              </div>

              {packageItem.priceWithDoc && packageItem.priceWithDoc !== packageItem.price && (
                <div className="p-3 bg-[#eaf2ff] rounded-xl text-xs text-[#102a56] flex items-center justify-between border border-[#3d72fe]/20">
                  <span className="font-semibold">Opsi Plus Dokumentasi:</span>
                  <span className="font-mono font-bold text-[#3d72fe]">
                    {formatRupiah(packageItem.priceWithDoc)}
                  </span>
                </div>
              )}

              {/* Pricing Tiers if private surabaya */}
              {packageItem.pricingTiers && (
                <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-[11px] border border-slate-200">
                  <div className="font-bold text-[#102a56]">Tarif Tier per Peserta:</div>
                  <div className="grid grid-cols-2 gap-1 text-slate-600">
                    <div>2 Pax: Rp 1.550rb/org</div>
                    <div>4 Pax: Rp 800rb/org</div>
                    <div>6 Pax: Rp 570rb/org</div>
                    <div>&gt;10 Pax: Rp 470rb/org</div>
                  </div>
                </div>
              )}

              {/* Primary Action Button */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => onBookNow(packageItem)}
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-xl transition-all shadow-lg shadow-[#3d72fe]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Hitung Biaya & Pesan Sekarang</span>
                </button>

                <a
                  href={`https://wa.me/6281222290318?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-bold text-[#102a56] hover:text-[#3d72fe] bg-[#eaf2ff] hover:bg-[#d8e7ff] rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>Konsultasi CS (+62 812 2229 0318)</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>PT Global Travel Healing</span>
                </div>
                <div>• Tiket TNBTS Resmi & Asuransi</div>
                <div>• Invoice PDF resmi dikirim ke Email</div>
              </div>
            </div>

            {/* Related Packages Recommendations */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-3 shadow-sm">
              <h3 className="text-xs font-extrabold text-[#102a56] uppercase tracking-wider">
                Paket Terkait Lainnya:
              </h3>
              <div className="space-y-2">
                {fallbackRelated.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelatedPackage(rel)}
                    className="p-3 bg-slate-50 hover:bg-[#eaf2ff] border border-slate-200 rounded-2xl transition-all cursor-pointer group"
                  >
                    <div className="text-xs font-extrabold text-[#102a56] group-hover:text-[#3d72fe] truncate">
                      {rel.title}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                      <span>Start: {rel.startLocationName}</span>
                      <span className="font-mono font-bold text-[#102a56]">{formatRupiah(rel.price)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
