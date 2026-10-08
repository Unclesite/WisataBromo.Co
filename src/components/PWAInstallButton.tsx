import React, { useState } from 'react';
import { Download, Smartphone, X, CheckCircle2, Share2, PlusSquare, Monitor, Laptop, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'navbar' | 'floating' | 'banner' | 'footer' | 'mobile-menu';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'navbar',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  // If already installed, hide prompt
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      setIsInstalling(true);
      try {
        await install();
      } finally {
        setIsInstalling(false);
      }
    } else {
      setShowGuideModal(true);
    }
  };

  // 1. Navbar compact pill
  if (variant === 'navbar') {
    return (
      <>
        <button
          type="button"
          onClick={handleInstallClick}
          disabled={isInstalling}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xs ${className}`}
          title="Install aplikasi WisataBromo di Desktop & Mobile"
        >
          <Download className={`w-3.5 h-3.5 ${isInstalling ? 'animate-bounce' : ''}`} />
          <span>Install App</span>
        </button>

        {showGuideModal && (
          <UniversalInstallModal isIOS={isIOS} onClose={() => setShowGuideModal(false)} />
        )}
      </>
    );
  }

  // 2. Mobile menu drawer item
  if (variant === 'mobile-menu') {
    return (
      <>
        <button
          type="button"
          onClick={handleInstallClick}
          className={`w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-between bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xs cursor-pointer ${className}`}
        >
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Install Aplikasi WisataBromo.co</span>
          </div>
          <span className="text-[10px] bg-white/20 text-white font-black px-2 py-0.5 rounded-md">
            Desktop / Mobile
          </span>
        </button>

        {showGuideModal && (
          <UniversalInstallModal isIOS={isIOS} onClose={() => setShowGuideModal(false)} />
        )}
      </>
    );
  }

  // 3. Footer button
  if (variant === 'footer') {
    return (
      <>
        <button
          type="button"
          onClick={handleInstallClick}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer border border-white/20 ${className}`}
        >
          <Download className="w-4 h-4 text-emerald-400" />
          <span>Install Aplikasi (Desktop & Mobile)</span>
        </button>

        {showGuideModal && (
          <UniversalInstallModal isIOS={isIOS} onClose={() => setShowGuideModal(false)} />
        )}
      </>
    );
  }

  return null;
};

// Universal Install Modal for Desktop PC, Tablet, Android, and iOS Safari
const UniversalInstallModal: React.FC<{ isIOS: boolean; onClose: () => void }> = ({ isIOS, onClose }) => {
  const isInIframe = typeof window !== 'undefined' && window.self !== window.top;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl relative border border-slate-200 text-[#111318] max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#102a56] to-[#0996f5] flex items-center justify-center text-white shadow-md">
            <Monitor className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-black text-[#102a56]">Install WisataBromo.co</h3>
            <p className="text-xs text-slate-500">Mode Horizontal (Desktop &amp; Tab) · Vertikal (HP)</p>
          </div>
        </div>

        {/* If inside iframe (e.g. AI Studio preview), provide direct tab button */}
        {isInIframe && (
          <div className="mb-4 p-3.5 bg-blue-50 border border-blue-200 rounded-2xl">
            <div className="flex items-center gap-2 font-bold text-xs text-[#102a56]">
              <Sparkles className="w-4 h-4 text-[#0996f5]" />
              <span>Buka di Tab Browser Mandiri:</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              Jika sedang membuka di dalam panel AI Studio, buka di tab browser baru agar ikon <strong>Install (📥)</strong> muncul otomatis di address bar Chrome Desktop &amp; Tablet:
            </p>
            <a
              href={window.location.origin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#0996f5] hover:bg-[#0782d6] text-white text-xs font-black rounded-xl shadow-xs transition-colors"
            >
              <span>Buka di Tab Baru Google Chrome</span>
              <Share2 className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        <div className="space-y-4 text-xs text-slate-700">
          {/* Desktop & Tablet Section */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#102a56]">
              <Laptop className="w-4 h-4 text-[#0996f5]" />
              <span>Desktop &amp; Tablet (Mode Horizontal / Landscape):</span>
            </div>
            <ol className="list-decimal pl-4 space-y-1 text-slate-600">
              <li>Buka di <strong>Google Chrome</strong> atau <strong>Microsoft Edge</strong>.</li>
              <li>Klik ikon **Install (📥)** di bagian kanan kolom alamat (address bar), ATAU klik titik tiga <strong>( ⋮ )</strong> &gt; pilih <strong>&quot;Install WisataBromo...&quot;</strong>.</li>
              <li>Aplikasi terpasang dan akan selalu terbuka dalam <strong>tampilan horizontal penuh (landscape)</strong>.</li>
            </ol>
          </div>

          {/* Android / Chrome Mobile Section */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#102a56]">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>HP Mobile (Mode Vertikal / Potret):</span>
            </div>
            <ol className="list-decimal pl-4 space-y-1 text-slate-600">
              <li>Ketuk menu titik tiga <strong>( ⋮ )</strong> di pojok kanan atas browser Chrome.</li>
              <li>Pilih opsi <strong>&quot;Install Aplikasi&quot;</strong> atau <strong>&quot;Tambahkan ke Layar Utama&quot;</strong>.</li>
              <li>Aplikasi di HP akan otomatis tampil rapi dalam <strong>mode vertikal</strong>.</li>
            </ol>
          </div>

          {/* iOS / Safari Section */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#102a56]">
              <Share2 className="w-4 h-4 text-[#0996f5]" />
              <span>iPhone / iPad (Safari):</span>
            </div>
            <ol className="list-decimal pl-4 space-y-1 text-slate-600">
              <li>Ketuk tombol <strong>Share / Bagikan</strong> di bar Safari.</li>
              <li>Pilih <strong>&quot;Add to Home Screen&quot; (Tambah ke Layar Utama)</strong>.</li>
            </ol>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full py-3 bg-[#0996f5] hover:bg-[#0782d6] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-md"
        >
          Mengerti &amp; Tutup
        </button>
      </div>
    </div>
  );
};
