import React from 'react';
import { TourPackage, StartCity, TripCategory } from '../types';
import { Clock, MapPin, Check, ArrowRight, Info, Users, Star, Sparkles, Eye } from 'lucide-react';

interface PackageExplorerProps {
  packages: TourPackage[];
  selectedCategory: TripCategory;
  selectedCity: StartCity;
  onSelectCategory: (category: TripCategory) => void;
  onSelectCity: (city: StartCity) => void;
  onViewDetails: (pkg: TourPackage) => void;
  onBookPackage: (pkg: TourPackage) => void;
}

export const PackageExplorer: React.FC<PackageExplorerProps> = ({
  packages,
  selectedCategory,
  selectedCity,
  onSelectCategory,
  onSelectCity,
  onViewDetails,
  onBookPackage,
}) => {
  // Filter logic
  const filteredPackages = packages.filter((pkg) => {
    const matchesCategory =
      selectedCategory === 'all' ? true : pkg.category === selectedCategory;
    const matchesCity = selectedCity === 'all' ? true : (pkg.category === 'picnic' || pkg.startCity === selectedCity);
    return matchesCategory && matchesCity;
  });

  const categoryTabs: { id: TripCategory; label: string }[] = [
    { id: 'all', label: 'Semua Paket' },
    { id: 'open_trip', label: 'Open Trip (Sharing)' },
    { id: 'private_trip', label: 'Private Trip (Jeep FJ40)' },
    { id: 'long_jeep', label: 'Long Jeep (9 Pax)' },
    { id: 'picnic', label: 'Bromo Picnic (8 Pilihan Menu)' },
    { id: 'trail', label: 'Sewa Trail Sukapura' },
  ];

  const cityFilters: { id: StartCity; label: string }[] = [
    { id: 'all', label: 'Semua Start' },
    { id: 'malang', label: 'Start Malang' },
    { id: 'batu', label: 'Start Batu' },
    { id: 'surabaya', label: 'Start Surabaya' },
    { id: 'sukapura', label: 'Start Sukapura' },
    { id: 'tosari', label: 'Start Tosari' },
    { id: 'gubugklakah', label: 'Start Gubugklakah' },
  ];

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="paket-wisata" className="py-14 sm:py-18 bg-[#ffffff] text-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Traveloka / OTA Style) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="text-xs font-black text-[#0996F5] tracking-wider mb-2 uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FFF700]" />
            <span>PILIHAN PAKET LENGKAP & HARGA RESMI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0B1220] mb-3 text-balance">
            Katalog Paket Wisata & Sewa Jeep Bromo
          </h2>
          <p className="text-[#0B1220]/75 text-xs sm:text-base leading-relaxed">
            Pilihan open trip hemat harian mulai Rp 275.000/orang, private sewa jeep eksklusif start dari 6 titik, armada Long Jeep 9 pax, hingga paket piknik estetik dan petualangan motor trail.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-[#EAF6FF] border border-[#0996F5]/20 rounded-2xl max-w-4xl mx-auto mb-5 shadow-xs">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'picnic') {
                    const el = document.getElementById('picnic-experience') || document.getElementById('piknik-dan-trail');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                      return;
                    }
                  }
                  onSelectCategory(tab.id);
                }}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer min-h-[40px] ${
                  isActive
                    ? 'bg-[#0996F5] text-white shadow-md shadow-[#0996F5]/25'
                    : 'text-[#0B1220] hover:bg-white hover:text-[#0996F5]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          <span className="text-xs font-bold text-[#0B1220] mr-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#0996F5]" /> Titik Start:
          </span>
          {cityFilters.map((city) => {
            const isActive = selectedCity === city.id;
            return (
              <button
                key={city.id}
                onClick={() => onSelectCity(city.id)}
                className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors border cursor-pointer min-h-[34px] ${
                  isActive
                    ? 'bg-[#0996F5] text-white border-[#0996F5] font-bold shadow-xs'
                    : 'bg-[#ffffff] text-[#0B1220] border-slate-200 hover:border-[#0996F5] hover:text-[#0996F5]'
                }`}
              >
                {city.label}
              </button>
            );
          })}
        </div>

        {/* Packages Grid with Perfectly Aligned Cards */}
        {filteredPackages.length === 0 ? (
          <div className="text-center py-16 bg-[#EAF6FF]/50 border border-slate-200 rounded-3xl p-8">
            <Info className="w-10 h-10 text-[#0996F5] mx-auto mb-3 opacity-80" />
            <h3 className="text-base font-bold text-[#0B1220] mb-1">
              Tidak ada paket yang sesuai dengan filter
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Coba atur ulang filter kategori atau kota keberangkatan untuk melihat opsi lainnya.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                onSelectCity('all');
              }}
              className="text-xs px-5 py-2.5 bg-[#0996F5] hover:bg-[#071A2B] text-white font-bold rounded-xl transition-colors cursor-pointer min-h-[42px]"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#ffffff] border border-slate-200/90 hover:border-[#0996F5] rounded-3xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#0996F5]/10 overflow-hidden group h-full"
              >
                <div className="flex flex-col flex-1">
                  {/* Photo Header (Clickable -> Navigates to Package Detail Page) */}
                  {pkg.imageUrl && (
                    <div 
                      onClick={() => onViewDetails(pkg)}
                      title={`Buka detail ${pkg.title}`}
                      className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 cursor-pointer shrink-0"
                    >
                      <img
                        src={pkg.imageUrl}
                        alt={pkg.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-600 ease-out"
                      />
                      {/* Gradient Overlay for Tag Visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 border border-white/20">
                          <MapPin className="w-3 h-3 text-[#FFF700]" />
                          <span>{pkg.startLocationName}</span>
                        </span>

                        {pkg.badge && (
                          <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg backdrop-blur-md shadow-xs ${
                            pkg.category === 'trail' 
                              ? 'bg-[#ea0610] text-white' 
                              : 'bg-[#FFF700] text-[#071A2B]'
                          }`}>
                            {pkg.badge}
                          </span>
                        )}
                      </div>

                      {/* Bottom Image Overlay Bar */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white">
                        <span className="font-semibold text-[11px] bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md">
                          {pkg.duration}
                        </span>
                        <span className="flex items-center gap-1 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md font-mono text-[11px] font-bold text-[#FFF700]">
                          <Star className="w-3 h-3 fill-[#FFF700] text-[#FFF700]" />
                          <span>{pkg.rating.toFixed(1)}</span>
                          <span className="text-white/80 font-sans font-normal">({pkg.reviewsCount})</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card Content Area */}
                  <div className="p-5 sm:p-6 pb-4 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Title (Consistent 2-line height for aligned grid rows) */}
                      <h3 
                        onClick={() => onViewDetails(pkg)}
                        role="button"
                        tabIndex={0}
                        title={`Buka detail ${pkg.title}`}
                        className="text-base sm:text-lg font-black text-[#0B1220] group-hover:text-[#0996F5] transition-colors mb-1.5 leading-snug cursor-pointer hover:underline line-clamp-2 min-h-[2.75rem]"
                      >
                        {pkg.title}
                      </h3>

                      <p className="text-xs text-[#526273] line-clamp-2 min-h-[2rem] mb-3.5 leading-relaxed">
                        {pkg.subtitle}
                      </p>
                    </div>

                    {/* Price Block (Clean Traveloka OTA Layout with Zero Overlapping) */}
                    <div className="p-3.5 bg-[#EAF6FF]/70 border border-[#DCEAF5] rounded-2xl mb-3.5 space-y-1">
                      <div className="flex items-center justify-between gap-1 text-[11px]">
                        <span className="font-bold text-[#526273] uppercase tracking-wider text-[10px]">Tarif Mulai</span>
                        {pkg.priceWithDoc && pkg.priceWithDoc !== pkg.price && (
                          <span className="text-[#0996F5] text-[10px] font-black bg-white/90 px-2 py-0.5 rounded-md border border-[#0996F5]/20">
                            +Doc {formatRupiah(pkg.priceWithDoc)}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                        <span className="text-xl sm:text-2xl font-black text-[#0996F5] font-mono tabular-nums leading-none tracking-tight">
                          {formatRupiah(pkg.price)}
                        </span>
                        <span className="text-xs font-bold text-[#526273] whitespace-nowrap">
                          {pkg.priceUnit}
                        </span>
                      </div>
                    </div>

                    {/* Key Details line */}
                    <div className="space-y-1.5 text-xs text-[#0B1220]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#0996F5] shrink-0" />
                        <span className="text-[#526273] font-medium">Jadwal:</span>
                        <span className="font-bold text-[#0B1220] truncate">{pkg.departureTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#0996F5] shrink-0" />
                        <span className="text-[#526273] font-medium">Kapasitas:</span>
                        <span className="font-bold text-[#0B1220]">
                          {pkg.category === 'open_trip'
                            ? '1 Orang Pasti Jalan'
                            : `${pkg.minPax} - ${pkg.maxPax} pax / armada`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-3.5 sm:p-4 pt-3 bg-[#F4FAFF] border-t border-[#DCEAF5] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onViewDetails(pkg)}
                    className="flex-1 py-2.5 px-2 text-xs font-bold text-[#0B1220] hover:text-[#0996F5] bg-white hover:bg-[#EAF6FF] border border-[#DCEAF5] hover:border-[#0996F5]/40 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs min-h-[42px]"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#0996F5]" />
                    <span>Detail Paket</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onBookPackage(pkg)}
                    className="flex-1 py-2.5 px-2 text-xs font-black text-white bg-[#0996F5] hover:bg-[#071A2B] rounded-xl transition-colors flex items-center justify-center gap-1 shadow-md shadow-[#0996F5]/20 cursor-pointer active:scale-95 min-h-[42px]"
                  >
                    <span>Pesan Cepat</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
