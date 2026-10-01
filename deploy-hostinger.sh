#!/bin/bash
# ==============================================================================
# WisataBromo.co - Hostinger Automated Deployment Script
# ==============================================================================

set -e

echo "🚀 [1/3] Memeriksa dependensi dan instalasi paket..."
npm install --legacy-peer-deps

echo "🔨 [2/3] Membangun bundle produksi (Vite Production Build)..."
npm run build

echo "📂 [3/3] Memindahkan aset ke web root public_html..."
if [ -d "../public_html" ]; then
  # Jika repository berada di folder terpisah satu tingkat di atas public_html
  cp -r dist/* ../public_html/
  cp public/.htaccess ../public_html/.htaccess 2>/dev/null || true
  echo "✅ Berhasil menyalin ke ../public_html"
elif [ -d "public_html" ]; then
  # Jika folder public_html berada di dalam root
  cp -r dist/* public_html/
  cp public/.htaccess public_html/.htaccess 2>/dev/null || true
  echo "✅ Berhasil menyalin ke ./public_html"
else
  echo "ℹ️ Folder public_html tidak terdeteksi di direktori relatif. File dist/ telah siap untuk diunggah."
fi

echo "🎉 Deployment selesai dengan sukses!"
