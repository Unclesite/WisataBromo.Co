import React from 'react';
import { TourPackage } from '../types';
import { X, Check, Clock, MapPin, AlertCircle, PhoneCall, Calendar, ChevronRight, ExternalLink } from 'lucide-react';

interface PackageDetailModalProps {
  packageItem: TourPackage | null;
  onClose: () => void;
  onProceedToBooking: (pkg: TourPackage) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  packageItem,
  onClose,
  onProceedToBooking,
}) => {
  if (!packageItem) return null;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo Admin WisataBromo.co, saya tertarik dengan "${packageItem.title}" (${formatRupiah(packageItem.price)} ${packageItem.priceUnit}). Mohon info ketersediaan tanggal dan cara pemesanannya.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl my-6">
        {/* Photo Banner Header if Available */}
        {packageItem.imageUrl && (
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-slate-900">
            <img
              src={packageItem.imageUrl}
              alt={packageItem.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Close Button on Image */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Over Photo */}
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <div className="text-xs font-bold text-[#ffc928] mb-0.5 flex items-center gap-1.5 flex-wrap">
                <MapPin className="w-3.5 h-3.5" />
                <span>Start: {packageItem.startLocationName}</span>
                <span aria-hidden="true" className="text-white/60">·</span>
                <span className="capitalize">{packageItem.category.replace('_', ' ')}</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-tight drop-shadow-md">
                {packageItem.title}
              </h3>
            </div>
          </div>
        )}

        {/* Modal Header details if no image, or subtitle bar */}
        <div className="p-4 sm:p-5 bg-[#eaf2ff] border-b border-slate-200">
          {!packageItem.imageUrl && (
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg sm:text-2xl font-extrabold text-[#102a56]">
                {packageItem.title}
              </h3>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-500 hover:text-[#102a56] hover:bg-white rounded-xl transition-colors cursor-pointer"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          <p className="text-xs sm:text-sm text-[#111318]/80">
            {packageItem.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-3 pt-2.5 border-t border-slate-200/80 text-xs text-[#102a56]">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-[#3d72fe]" />
              <span>{packageItem.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-[#3d72fe]" />
              <span>Jadwal: {packageItem.departureTime}</span>
            </div>
            <div className="ml-auto text-sm font-black text-[#102a56] font-mono tabular-nums">
              {formatRupiah(packageItem.price)} <span className="text-xs font-medium text-slate-500">{packageItem.priceUnit}</span>
            </div>
          </div>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-4 sm:p-6 space-y-5 max-h-[55vh] overflow-y-auto">
          {/* Meeting Point Alert & Map Link */}
          <div className="p-3.5 bg-[#eaf2ff]/60 border border-[#3d72fe]/20 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#111318]/90">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#3d72fe] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#102a56]">Meeting Point: </span>
                {packageItem.meetingPoint}
              </div>
            </div>
            {packageItem.mapUrl && (
              <a
                href={packageItem.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3d72fe] hover:underline shrink-0"
              >
                <span>Lihat Peta Basecamp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Itinerary Timeline */}
          <div>
            <h4 className="text-sm font-extrabold text-[#102a56] mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#3d72fe]" />
              Rencana Perjalanan (Itinerary)
            </h4>
            <div className="space-y-3 relative pl-4 border-l-2 border-[#3d72fe]/30">
              {packageItem.itinerary.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#3d72fe] border-2 border-white"></div>
                  <div className="text-xs font-mono font-bold text-[#3d72fe]">{step.time} WIB</div>
                  <div className="text-xs font-bold text-[#102a56] mt-0.5">{step.activity}</div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Inclusions */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Fasilitas Termasuk (Include):
              </div>
              <ul className="space-y-2 text-xs text-[#111318]/85">
                {packageItem.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="text-xs font-bold text-[#ea0610] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-[#ea0610]" />
                Tidak Termasuk (Exclude):
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {packageItem.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#ea0610] font-bold">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Note */}
          <div className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <span className="font-bold text-[#102a56]">Rekomendasi Peserta: </span>
            {packageItem.recommendedFor}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`https://wa.me/6281222290318?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-[#eaf2ff] text-[#102a56] hover:text-[#3d72fe] text-xs font-bold transition-colors shadow-2xs"
          >
            <PhoneCall className="w-4 h-4 text-emerald-600" />
            <span>Tanya Admin (+62 812 2229 0318)</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 sm:px-4 py-2 text-xs font-bold text-slate-600 hover:text-[#102a56] transition-colors cursor-pointer"
            >
              Tutup
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onProceedToBooking(packageItem);
              }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-xl transition-all shadow-md shadow-[#3d72fe]/20 flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Hitung Biaya & Pesan</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
