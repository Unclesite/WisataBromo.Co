#!/bin/bash
# WisataBromo.co GitHub Push Helper Script
# Usage: ./push-github.sh <GITHUB_PERSONAL_ACCESS_TOKEN>

TOKEN="$1"

if [ -z "$TOKEN" ]; then
  echo "❌ Error: Token GitHub belum disertakan."
  echo "Penggunaan: ./push-github.sh ghp_TOKEN_ANDA"
  echo ""
  echo "Buat token di: https://github.com/settings/tokens (centang 'repo')"
  exit 1
fi

echo "🚀 Menghubungkan ke https://github.com/Unclesite/WisataBromo.Co..."
git remote add origin "https://Unclesite:${TOKEN}@github.com/Unclesite/WisataBromo.Co.git" 2>/dev/null || git remote set-url origin "https://Unclesite:${TOKEN}@github.com/Unclesite/WisataBromo.Co.git"
git branch -M main

echo "📦 Memulai git push ke branch main..."
git push -u origin main --force

if [ $? -eq 0 ]; then
  echo "✅ Berhasil melakukan push ke https://github.com/Unclesite/WisataBromo.Co!"
  # Bersihkan token dari URL remote setelah selesai untuk keamanan
  git remote set-url origin "https://github.com/Unclesite/WisataBromo.Co.git"
else
  echo "⚠️ Gagal melakukan push. Pastikan token memiliki izin 'repo'."
fi
