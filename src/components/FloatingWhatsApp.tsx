import React from 'react';

/**
 * Floating WhatsApp Bubble Component for WisataBromo.co
 * Always visible immediately on mobile (320px - 430px) and desktop.
 * Connects directly to CS WhatsApp 081222290318 with formatted inquiry message.
 */

const WA_PHONE = '6281222290318';
const WA_MESSAGE = `Halo WisataBromo.co 👋\n\nSaya tertarik dengan paket wisata Gunung Bromo. 😊\n\nBoleh minta informasi mengenai pilihan paket wisata, harga, fasilitas, dan jadwal keberangkatan yang tersedia?\n\nTerima kasih.`;

export const FloatingWhatsApp: React.FC = () => {
  const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <div
      className="fixed z-[9999] pointer-events-auto"
      style={{
        right: 'calc(16px + env(safe-area-inset-right, 0px))',
        bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp CS WisataBromo.co"
        className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white rounded-full transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer shadow-lg px-3 py-2.5 sm:px-4 sm:py-3 select-none"
        style={{
          boxShadow: '0 8px 24px -2px rgba(37, 211, 102, 0.5), 0 4px 10px -2px rgba(7, 26, 43, 0.2)',
          minHeight: '52px',
        }}
      >
        {/* Subtle Online Pulse Indicator Ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200 border-2 border-[#25D366]"></span>
        </span>

        {/* WhatsApp Official Clean Vector Icon */}
        <div className="w-8 h-8 flex items-center justify-center shrink-0">
          <svg
            className="w-7 h-7 fill-white drop-shadow-sm"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </div>

        {/* Desktop text label */}
        <div className="hidden sm:flex flex-col text-left pr-1.5">
          <span className="text-[10px] font-bold text-emerald-100 tracking-wider uppercase leading-tight">
            Online 24 Jam
          </span>
          <span className="text-sm font-black text-white tracking-tight leading-none mt-0.5">
            Chat WhatsApp
          </span>
        </div>

        {/* Mobile text label (Fits gracefully on 320px–430px) */}
        <span className="inline-block sm:hidden text-xs font-black tracking-tight text-white pr-0.5 whitespace-nowrap">
          Chat WA
        </span>
      </a>
    </div>
  );
};
