import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('pwa_prompt_dismissed');
    if (isDismissed === 'true') {
      setDismissed(true);
    }
  }, []);

  if (isInstalled || !isInstallable || dismissed) {
    return null;
  }

  const handleInstall = async () => {
    setIsInstalling(true);
    try {
      await install();
    } finally {
      setIsInstalling(false);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('pwa_prompt_dismissed', 'true');
  };

  return (
    <aside
      aria-label="Install Aplikasi Web"
      className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 animate-slideUp"
    >
      <div className="bg-[#102a56] text-white p-4 rounded-2xl shadow-2xl border border-[#3d72fe]/40 backdrop-blur-md flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3d72fe] to-emerald-500 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
          <Download className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Install dari Google Chrome</span>
          </div>
          <p className="text-xs text-slate-200 mt-0.5 leading-snug">
            Pasang <strong>WisataBromo.co</strong> di layar utama untuk akses instan &amp; pemesanan lebih cepat.
          </p>

          <div className="flex items-center gap-2 mt-3">
            <button
              type="button"
              onClick={handleInstall}
              disabled={isInstalling}
              className="px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg text-xs font-black shadow-sm transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isInstalling ? 'Memasang...' : 'Install Sekarang'}</span>
            </button>

            <button
              type="button"
              onClick={handleDismiss}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              Nanti Saja
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDismiss}
          className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-md"
          aria-label="Tutup notifikasi install"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
