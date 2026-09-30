import React from 'react';
import { TourPackage, StartCity, TripCategory } from '../types';
import { Clock, MapPin, Check, ArrowRight, Info, Users, Star } from 'lucide-react';

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
    const matchesCity = selectedCity === 'all' ? true : pkg.startCity === selectedCity;
    return matchesCategory && matchesCity;
  });

  const categoryTabs: { id: TripCategory; label: string }[] = [
    { id: 'all', label: 'Semua Paket' },
    { id: 'open_trip', label: 'Open Trip (Sharing)' },
    { id: 'private_trip', label: 'Private Trip (Jeep FJ40)' },
    { id: 'long_jeep', label: 'Long Jeep (9 Pax)' },
    { id: 'picnic', label: 'Paket Piknik Bromo' },
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
    <section id="paket-wisata" className="py-14 sm:py-16 bg-white text-[#111318]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="text-xs font-extrabold text-[#3d72fe] tracking-wider mb-2 uppercase">
            PILIHAN PAKET LENGKAP & TRANSPARAN
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#102a56] mb-3 text-balance">
            Daftar Paket & Harga Resmi WisataBromo.co
          </h2>
          <p className="text-[#111318]/75 text-xs sm:text-base leading-relaxed">
            Pilihan open trip hemat mulai Rp 275.000/orang, private sewa jeep eksklusif start dari 6 titik, armada Long Jeep 9 pax, hingga paket piknik estetik dan petualangan motor trail.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-[#eaf2ff] border border-[#3d72fe]/20 rounded-2xl max-w-4xl mx-auto mb-5 shadow-xs">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#3d72fe] text-white shadow-md shadow-[#3d72fe]/25'
                    : 'text-[#102a56] hover:bg-white hover:text-[#3d72fe]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          <span className="text-xs font-bold text-[#102a56] mr-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#3d72fe]" /> Titik Start:
          </span>
          {cityFilters.map((city) => {
            const isActive = selectedCity === city.id;
            return (
              <button
                key={city.id}
                onClick={() => onSelectCity(city.id)}
                className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-colors border cursor-pointer ${
                  isActive
                    ? 'bg-[#102a56] text-white border-[#102a56] font-bold shadow-xs'
                    : 'bg-white text-[#102a56] border-slate-200 hover:border-[#3d72fe] hover:text-[#3d72fe]'
                }`}
              >
                {city.label}
              </button>
            );
          })}
        </div>

        {/* Packages Grid */}
        {filteredPackages.length === 0 ? (
          <div className="text-center py-16 bg-[#eaf2ff]/50 border border-slate-200 rounded-2xl p-8">
            <Info className="w-10 h-10 text-[#3d72fe] mx-auto mb-3 opacity-80" />
            <h3 className="text-base font-bold text-[#102a56] mb-1">
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
              className="text-xs px-4 py-2 bg-[#3d72fe] hover:bg-[#2b5ae0] text-white font-bold rounded-xl transition-colors cursor-pointer"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-slate-200 hover:border-[#3d72fe] rounded-3xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#3d72fe]/10 overflow-hidden group"
              >
                <div>
                  {/* Photo Header (Clickable -> Navigates to Package Detail Page) */}
                  {pkg.imageUrl && (
                    <div 
                      onClick={() => onViewDetails(pkg)}
                      title={`Buka detail ${pkg.title}`}
                      className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 cursor-pointer"
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
                        <span className="text-[11px] font-bold text-white bg-[#102a56]/85 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 border border-white/20">
                          <MapPin className="w-3.5 h-3.5 text-[#ffc928]" />
                          <span>{pkg.startLocationName}</span>
                        </span>

                        {pkg.badge && (
                          <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg backdrop-blur-md shadow-xs ${
                            pkg.category === 'trail' 
                              ? 'bg-[#ea0610] text-white' 
                              : 'bg-[#ffc928] text-[#102a56]'
                          }`}>
                            {pkg.badge}
                          </span>
                        )}
                      </div>

                      {/* Bottom Image Overlay Bar */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white">
                        <span className="font-semibold text-[11px] bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                          {pkg.duration}
                        </span>
                        <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md font-mono text-[11px] font-bold text-[#ffc928]">
                          <Star className="w-3 h-3 fill-[#ffc928] text-[#ffc928]" />
                          <span>{pkg.rating.toFixed(1)}</span>
                          <span className="text-white/80 font-sans font-normal">({pkg.reviewsCount})</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card Content Area */}
                  <div className="p-5 sm:p-6 pb-4">
                    {/* Title (Clickable -> Navigates to Package Detail Page) */}
                    <h3 
                      onClick={() => onViewDetails(pkg)}
                      role="button"
                      tabIndex={0}
                      title={`Buka detail ${pkg.title}`}
                      className="text-base sm:text-lg font-extrabold text-[#102a56] group-hover:text-[#3d72fe] transition-colors mb-1.5 leading-snug cursor-pointer hover:underline"
                    >
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-[#111318]/75 line-clamp-2 mb-3.5 leading-relaxed">
                      {pkg.subtitle}
                    </p>

                    {/* Price Block */}
                    <div className="py-3 px-3.5 bg-[#eaf2ff] border border-[#3d72fe]/20 rounded-2xl mb-3.5">
                      <div className="text-[11px] text-[#102a56]/70 font-semibold flex items-center justify-between">
                        <span>Tarif Resmi:</span>
                        {pkg.priceWithDoc && pkg.priceWithDoc !== pkg.price && (
                          <span className="text-[#3d72fe] text-[10px] font-bold">
                            +Doc: {formatRupiah(pkg.priceWithDoc)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-xl font-black text-[#102a56] font-mono tabular-nums">
                          {formatRupiah(pkg.price)}
                        </span>
                        <span className="text-xs text-slate-600 font-medium">
                          {pkg.priceUnit}
                        </span>
                      </div>
                    </div>

                    {/* Key Details line */}
                    <div className="space-y-1.5 text-xs text-[#111318] mb-3.5">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#3d72fe] shrink-0" />
                        <span className="text-slate-500">Jadwal:</span>
                        <span className="font-semibold text-[#102a56] truncate">{pkg.departureTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#3d72fe] shrink-0" />
                        <span className="text-slate-500">Kapasitas:</span>
                        <span className="font-semibold text-[#102a56]">
                          {pkg.category === 'open_trip'
                            ? '1 Orang Pasti Jalan'
                            : `${pkg.minPax} - ${pkg.maxPax} pax / armada`}
                        </span>
                      </div>
                    </div>

                    {/* Highlights Bullet List */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-[#102a56] uppercase tracking-wider">
                        Fasilitas Unggulan:
                      </div>
                      {pkg.highlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#111318]/85">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight text-[11px] sm:text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-3.5 sm:p-4 pt-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onViewDetails(pkg)}
                    className="flex-1 py-2 sm:py-2.5 px-2 text-xs font-bold text-[#102a56] hover:text-[#3d72fe] bg-white hover:bg-[#eaf2ff] border border-slate-300 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                  >
                    <span>Detail Rute</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onBookPackage(pkg)}
                    className="flex-1 py-2 sm:py-2.5 px-2 text-xs font-bold text-white bg-[#3d72fe] hover:bg-[#2b5ae0] rounded-xl transition-colors flex items-center justify-center gap-1 shadow-md shadow-[#3d72fe]/20 cursor-pointer active:scale-95"
                  >
                    <span>Pesan Cepat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
