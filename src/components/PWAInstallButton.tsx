import React, { useState } from 'react';
import { Download, Smartphone, X, CheckCircle2, Share2, PlusSquare } from 'lucide-react';
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
  const [showIOSGuide, setShowIOSGuide] = useState(false);
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
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  // 1. Navbar compact pill
  if (variant === 'navbar') {
    if (!isInstallable && !isIOS) return null;

    return (
      <>
        <button
          type="button"
          onClick={handleInstallClick}
          disabled={isInstalling}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xs ${className}`}
          title="Install aplikasi WisataBromo di Google Chrome"
        >
          <Download className={`w-3.5 h-3.5 ${isInstalling ? 'animate-bounce' : ''}`} />
          <span>Install App</span>
        </button>

        {showIOSGuide && (
          <IOSInstallModal onClose={() => setShowIOSGuide(false)} />
        )}
      </>
    );
  }

  // 2. Mobile menu drawer item
  if (variant === 'mobile-menu') {
    if (!isInstallable && !isIOS) return null;

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
            Chrome / PWA
          </span>
        </button>

        {showIOSGuide && (
          <IOSInstallModal onClose={() => setShowIOSGuide(false)} />
        )}
      </>
    );
  }

  // 3. Footer button
  if (variant === 'footer') {
    if (!isInstallable && !isIOS) return null;

    return (
      <>
        <button
          type="button"
          onClick={handleInstallClick}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer border border-white/20 ${className}`}
        >
          <Download className="w-4 h-4 text-emerald-400" />
          <span>Install Aplikasi (Google Chrome)</span>
        </button>

        {showIOSGuide && (
          <IOSInstallModal onClose={() => setShowIOSGuide(false)} />
        )}
      </>
    );
  }

  return null;
};

// Modal Guide for iOS Safari users
const IOSInstallModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl relative border border-slate-200 text-[#111318]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#102a56] to-[#3d72fe] flex items-center justify-center text-white shadow-md">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-black text-[#102a56]">Install di iPhone / iPad</h3>
            <p className="text-xs text-slate-500">WisataBromo.co Web App</p>
          </div>
        </div>

        <div className="space-y-3 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#3d72fe] text-white font-bold flex items-center justify-center shrink-0 text-xs">
              1
            </div>
            <div className="pt-0.5">
              Tekan tombol <strong>Share / Bagikan</strong> <Share2 className="w-3.5 h-3.5 inline mx-1 text-[#3d72fe]" /> di bar bawah browser Safari.
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#3d72fe] text-white font-bold flex items-center justify-center shrink-0 text-xs">
              2
            </div>
            <div className="pt-0.5">
              Gulir ke bawah lalu pilih menu <strong>Add to Home Screen (Tambah ke Layar Utama)</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-1 text-slate-700" />.
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
              ✓
            </div>
            <div className="pt-0.5">
              Tekan <strong>Tambah (Add)</strong> di pojok kanan atas. Ikon aplikasi akan langsung terpasang di layar utama HP Anda!
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full py-2.5 bg-[#3d72fe] hover:bg-[#2b5ae0] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
        >
          Mengerti
        </button>
      </div>
    </div>
  );
};
