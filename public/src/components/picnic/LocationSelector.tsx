import React from 'react';
import { MapPin, Check, AlertCircle } from 'lucide-react';
import { PicnicLocation } from '../../types/picnic';
import { formatRupiah } from '../../utils/picnicPricingEngine';

interface LocationSelectorProps {
  locations: PicnicLocation[];
  selectedLocationId?: string;
  selectedLocation?: PicnicLocation;
  onSelectLocation: (location: PicnicLocation) => void;
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({
  locations = [],
  selectedLocationId,
  selectedLocation,
  onSelectLocation
}) => {
  const activeLocationId = selectedLocation?.id || selectedLocationId;
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-black text-[#0B1220] flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#0996F5]" />
            <span>Pilih Lokasi Gelaran Piknik</span>
          </h4>
          <p className="text-[11px] text-[#526273] mt-0.5">
            Biaya logistik pengantaran makanan segar &amp; instalasi set property estetik berlaku per rombongan
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {locations.map((loc) => {
          const isSelected = activeLocationId === loc.id;
          const isAvailable = loc.active;

          return (
            <div
              key={loc.id}
              onClick={() => {
                if (isAvailable) {
                  onSelectLocation(loc);
                }
              }}
              className={`relative rounded-2xl border transition-all overflow-hidden flex flex-col justify-between ${
                !isAvailable
                  ? 'opacity-65 bg-slate-100 border-slate-300 cursor-not-allowed select-none'
                  : isSelected
                  ? 'border-[#0996F5] bg-[#EAF6FF]/80 ring-2 ring-[#0996F5]/30 cursor-pointer shadow-md'
                  : 'border-slate-200 bg-white hover:border-[#0996F5]/50 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              {/* Location Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200">
                <img
                  src={loc.imageUrl}
                  alt={loc.name}
                  className={`w-full h-full object-cover ${!isAvailable ? 'grayscale-[60%]' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Status Badges */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1">
                  {loc.elevation && (
                    <span className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md">
                      {loc.elevation}
                    </span>
                  )}

                  {!isAvailable && (
                    <span className="text-[10px] font-black text-white bg-amber-600/90 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{loc.unavailableLabel || 'Sementara Tidak Tersedia'}</span>
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2 left-2.5 right-2 text-white">
                  <div className="font-black text-sm drop-shadow-xs">
                    {loc.name}
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                <p className="text-[11px] text-[#526273] leading-relaxed line-clamp-2">
                  {loc.description}
                </p>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between gap-1 text-xs">
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                      Transport &amp; Property
                    </div>
                    <div className={`font-mono font-black ${isAvailable ? 'text-[#0996F5]' : 'text-slate-500'}`}>
                      {formatRupiah(loc.transportFee)}
                    </div>
                  </div>

                  {isAvailable ? (
                    isSelected ? (
                      <span className="w-6 h-6 rounded-full bg-[#0996F5] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-[#0996F5] bg-white border border-[#0996F5]/40 px-2 py-1 rounded-lg">
                        Pilih
                      </span>
                    )
                  ) : (
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-md">
                      Tutup
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
