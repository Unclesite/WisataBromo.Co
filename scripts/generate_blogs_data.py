import urllib.request
import re
import json
import os
import html

# Download and map images
image_urls = {
    "imgPerlengkapan": "https://wisatabromo.co/wp-content/uploads/2025/01/Salinan-dari-Salinan-dari-Salinan-dari-Desain-Tanpa-Judul-1200x540.png",
    "imgBahasaTengger": "https://wisatabromo.co/wp-content/uploads/2025/11/1000888286-1290x540.png",
    "imgAsalUsul": "https://wisatabromo.co/wp-content/uploads/2022/06/7-1200x540.png",
    "imgGayaBersarung": "https://wisatabromo.co/wp-content/uploads/2025/11/1000888899-1290x540.jpg",
    "imgAsimilasiSiwaBudha": "https://wisatabromo.co/wp-content/uploads/2022/06/6-9-1200x540.jpg",
    "imgGunungBrahma": "https://wisatabromo.co/wp-content/uploads/2025/11/1000888293-1290x540.png",
    "imgJejakSiwaBudha": "https://wisatabromo.co/wp-content/uploads/2022/06/10-9-1200x540.jpg",
    "imgKudaBromo": "https://wisatabromo.co/wp-content/uploads/2022/06/1-8-1200x540.jpg",
    "imgLautanAwan": "https://wisatabromo.co/wp-content/uploads/2022/06/1-1200x540.png",
    "img3Jalur": "https://wisatabromo.co/wp-content/uploads/2022/06/9-8-1200x540.jpg",
    "imgEdelweis": "https://wisatabromo.co/wp-content/uploads/2025/10/2_20251024_153421_0000-1290x540.png",
    "imgKapasitasJeep": "https://wisatabromo.co/wp-content/uploads/2022/06/18_20250124_181308_0017-1200x540.jpg",
    "imgMusimTerbaik": "https://wisatabromo.co/wp-content/uploads/2022/06/Salinan-dari-Desain-Tanpa-Judul_20250124_054740_0000-1200x540.jpg",
    "imgLedokAmprong": "https://wisatabromo.co/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-13-at-19.13.35-1-1080x540.jpeg",
    "imgPesonaBromo": "https://wisatabromo.co/wp-content/uploads/2022/06/6-9-1200x540.jpg",
    "imgPuraPoten": "https://wisatabromo.co/wp-content/uploads/2022/06/11-3-1200x540.jpg",
    "imgKementerian": "https://wisatabromo.co/wp-content/uploads/2022/06/Desain-tanpa-judul-11-1290x540.png",
    "imgTipsBus": "https://wisatabromo.co/wp-content/uploads/2022/06/Salinan-dari-Desain-Tanpa-Judul-4-1200x540.png",
    "imgTipsKereta": "https://wisatabromo.co/wp-content/uploads/2022/06/Salinan-dari-Desain-Tanpa-Judul-5-1200x540.png",
    "imgToiletBromo": "https://wisatabromo.co/wp-content/uploads/2022/06/Salinan-dari-Desain-Tanpa-Judul-6-1200x540.png",
}

def download_images():
    os.makedirs("src/assets/images", exist_ok=True)
    local_files = {}
    for var_name, url in image_urls.items():
        ext = "png" if ".png" in url else "jpg"
        filename = f"{var_name.lower()}_wisatabromo.{ext}"
        filepath = os.path.join("src/assets/images", filename)
        if not os.path.exists(filepath) or os.path.getsize(filepath) < 1000:
            print(f"Downloading {url} -> {filepath}")
            try:
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=15) as resp, open(filepath, 'wb') as f:
                    f.write(resp.read())
            except Exception as e:
                print(f"Error downloading {url}: {e}")
        local_files[var_name] = f"../assets/images/{filename}"
    return local_files

if __name__ == "__main__":
    download_images()
    print("All images downloaded successfully!")
