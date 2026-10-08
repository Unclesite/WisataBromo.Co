import React, { useState } from 'react';
import { PicnicPackage } from '../../types/picnic';
import { PackageCard } from './PackageCard';

interface PackageGridProps {
  packages: PicnicPackage[];
  onSelectPackage: (pkg: PicnicPackage) => void;
}

export const PackageGrid: React.FC<PackageGridProps> = ({ packages, onSelectPackage }) => {
  const [filterType, setFilterType] = useState<'all' | 'selectable' | 'fixed'>('all');

  const filteredPackages = packages.filter((pkg) => {
    if (!pkg.active) return false;
    if (filterType === 'all') return true;
    return pkg.type === filterType;
  });

  return (
    <div className="space-y-8">
      {/* Tab Filter */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-1">
        <button
          type="button"
          onClick={() => setFilterType('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer min-h-[40px] whitespace-nowrap ${
            filterType === 'all'
              ? 'bg-[#0996F5] text-white shadow-md shadow-[#0996F5]/20'
              : 'bg-white text-[#0B1220] hover:bg-[#EAF6FF] border border-[#DCEAF5]'
          }`}
        >
          Semua Paket Piknik ({packages.length})
        </button>
        <button
          type="button"
          onClick={() => setFilterType('selectable')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer min-h-[40px] whitespace-nowrap ${
            filterType === 'selectable'
              ? 'bg-[#0996F5] text-white shadow-md shadow-[#0996F5]/20'
              : 'bg-white text-[#0B1220] hover:bg-[#EAF6FF] border border-[#DCEAF5]'
          }`}
        >
          Pilihan Menu Custom (Paket 1–4)
        </button>
        <button
          type="button"
          onClick={() => setFilterType('fixed')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer min-h-[40px] whitespace-nowrap ${
            filterType === 'fixed'
              ? 'bg-[#0996F5] text-white shadow-md shadow-[#0996F5]/20'
              : 'bg-white text-[#0B1220] hover:bg-[#EAF6FF] border border-[#DCEAF5]'
          }`}
        >
          Paket Spesial BBQ &amp; Steamboat (4 Paket)
        </button>
      </div>

      {/* Grid: 1 col on mobile, 2 cols on tablet, 3-4 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        {filteredPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            packageItem={pkg}
            onSelect={onSelectPackage}
          />
        ))}
      </div>
    </div>
  );
};
