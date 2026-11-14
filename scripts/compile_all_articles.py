import urllib.request
import re
import json
import os
import html

urls = [
    "https://wisatabromo.co/3-jalur-masuk-gunung-bromo-tosari-sukapura-dan-jemplang",
    "https://wisatabromo.co/apa-saja-yang-harus-dibawa-saat-ke-bromo",
    "https://wisatabromo.co/artikel-profesionalisme-wisatabromo-co-dalam-menghandle-kegiatan-kementerian",
    "https://wisatabromo.co/asal-usul-nama-tengger-antara-keteguhan-gunung-luhur-budaya-dan-warisan-siwa-budha-majapahit",
    "https://wisatabromo.co/asimilasi-ajaran-siwa-budha-warisan-majapahit-yang-hidup-di-tengger",
    "https://wisatabromo.co/bahasa-tengger-jejak-asli-jawa-kuno-yang-bertahan-di-lereng-bromo",
    "https://wisatabromo.co/bromo-pesona-alam-ikonik-di-jawa-timur-yang-tak-pernah-redup",
    "https://wisatabromo.co/edelweis-bromo-bunga-abadi-dari-lereng-wonokitri",
    "https://wisatabromo.co/gaya-bersarung-perempuan-suku-tengger-simbol-status-sosial-dan-identitas-budaya",
    "https://wisatabromo.co/gunung-brahma-ketika-dewa-india-menjadi-jiwa-jawa",
    "https://wisatabromo.co/jejak-siwa-budha-di-punggung-tengger-agama-asli-warisan-majapahit-yang-bertahan-di-lereng-bromo",
    "https://wisatabromo.co/kapasitas-jeep-bromo-berapa-orang-bisa-dalam-satu-jeep",
    "https://wisatabromo.co/lautan-awan-di-gunung-bromo-rahasia-di-balik-keindahan-alam-yang-menakjubkan",
    "https://wisatabromo.co/lembah-bromo-ledok-amprong-surga-tersembunyi-di-lereng-bromo",
    "https://wisatabromo.co/mengenal-pura-luhur-poten-tempat-suci-di-kaki-gunung-bromo",
    "https://wisatabromo.co/menunggangi-kuda-di-gunung-bromo-tarif-tips-dan-pengalaman-seru-yang-tak-terlupakan",
    "https://wisatabromo.co/musim-terbaik-ke-bromo-dan-pesonanya-di-setiap-waktu",
    "https://wisatabromo.co/paket-wisata-bromo",
    "https://wisatabromo.co/panduan-lengkap-fasilitas-toilet-di-bromo",
    "https://wisatabromo.co/perlengkapan-yang-harus-dibawa-saat-ke-bromo",
    "https://wisatabromo.co/tips-hemat-trip-ke-bromo-naik-bus-dari-kota-asal",
    "https://wisatabromo.co/tips-trip-ke-bromo-naik-kereta-api-dari-kota-asal-%f0%9f%9a%82%f0%9f%8c%8b"
]

def fetch_data(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error {url}: {e}")
        return ""

def download_image(img_url, dest_path):
    if not img_url:
        return False
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 1000:
        return True
    try:
        req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as resp, open(dest_path, 'wb') as out:
            out.write(resp.read())
        print(f"Downloaded image: {dest_path} ({os.path.getsize(dest_path)} bytes)")
        return True
    except Exception as e:
        print(f"Failed to download image {img_url}: {e}")
        return False

def clean_text(t):
    t = re.sub(r'<[^>]+>', ' ', t)
    t = html.unescape(t)
    return re.sub(r'\s+', ' ', t).strip()

def parse_full_article(url):
    data = fetch_data(url)
    if not data:
        return None

    # Title
    t_match = re.search(r'<h1[^>]*>(.*?)</h1>', data, re.DOTALL | re.IGNORECASE)
    if t_match:
        raw_t = t_match.group(1)
        title = clean_text(raw_t)
    else:
        t_match = re.search(r'<title>(.*?)</title>', data, re.IGNORECASE)
        title = clean_text(t_match.group(1).split(' - ')[0].split(' – ')[0].split(' | ')[0]) if t_match else "Artikel Wisata Bromo"

    # Featured Image
    img_match = re.search(r'property=[\'"]og:image[\'"] content=[\'"]([^\'"]+)[\'"]', data, re.IGNORECASE)
    if not img_match:
        img_match = re.search(r'<img[^>]*class=[\'"][^\'"]*wp-post-image[^\'"]*[\'"][^>]*src=[\'"]([^\'"]+)[\'"]', data, re.IGNORECASE)
    image_url = img_match.group(1) if img_match else ""

    # Publish Date
    date_match = re.search(r'<time[^>]*class=[\'"][^\'"]*entry-date[^\'"]*[^>]*>(.*?)</time>', data, re.DOTALL | re.IGNORECASE)
    if date_match:
        pub_date = clean_text(date_match.group(1))
    else:
        date_match = re.search(r'property=[\'"]article:published_time[\'"] content=[\'"]([^\'"]+)[\'"]', data, re.IGNORECASE)
        pub_date = date_match.group(1)[:10] if date_match else "2026"

    # Category
    cat_match = re.search(r'rel=[\'"]category tag[\'"][^>]*>(.*?)</a>', data, re.IGNORECASE)
    category = clean_text(cat_match.group(1)) if cat_match else "Panduan & Budaya Bromo"

    # Content extraction
    # First try entry-content
    entry_match = re.search(r'<div[^>]*class=[\'"][^\'"]*entry-content[^\'"]*[\'"][^>]*>(.*?)</div>\s*<!-- \.entry-content', data, re.DOTALL | re.IGNORECASE)
    if not entry_match:
        entry_match = re.search(r'<div[^>]*class=[\'"][^\'"]*entry-content[^\'"]*[\'"][^>]*>(.*?)</div>', data, re.DOTALL | re.IGNORECASE)

    if entry_match:
        raw_body = entry_match.group(1)
    else:
        # Fallback to main or body
        main_match = re.search(r'<main[^>]*>(.*?)</main>', data, re.DOTALL | re.IGNORECASE)
        raw_body = main_match.group(1) if main_match else data

    # Strip scripts & styles
    raw_body = re.sub(r'<script.*?</script>', '', raw_body, flags=re.DOTALL | re.IGNORECASE)
    raw_body = re.sub(r'<style.*?</style>', '', raw_body, flags=re.DOTALL | re.IGNORECASE)

    # Extract all headings, paragraphs, and list items in order
    nodes = re.findall(r'<(h[1-6]|p|li|blockquote)[^>]*>(.*?)</\1>', raw_body, re.DOTALL | re.IGNORECASE)
    paragraphs = []
    for tag, inner in nodes:
        cleaned = clean_text(inner)
        # ignore short menus, footer text, or sharing widgets
        if len(cleaned) < 15 and not cleaned.startswith('•'):
            continue
        if any(ign in cleaned.lower() for ign in ['share this:', 'bagikan ini:', 'related posts', 'pos terkait', 'tinggalkan balasan', 'leave a comment', 'copyright', 'all rights reserved', 'chat on whatsapp']):
            break
        # Format headings nicely
        if tag.startswith('h'):
            paragraphs.append(f"{cleaned}:")
        elif tag == 'li':
            paragraphs.append(f"• {cleaned}")
        else:
            paragraphs.append(cleaned)

    # Deduplicate consecutive identical paragraphs
    final_p = []
    for p in paragraphs:
        if not final_p or final_p[-1] != p:
            final_p.append(p)

    slug = url.rstrip('/').split('/')[-1]

    return {
        "slug": slug,
        "url": url,
        "title": title,
        "publishDate": pub_date,
        "imageUrl": image_url,
        "category": category,
        "content": final_p
    }

def main():
    os.makedirs("src/assets/images", exist_ok=True)
    all_articles = []

    print("Beginning fetch of all 22 articles...")
    for idx, u in enumerate(urls):
        print(f"[{idx+1}/{len(urls)}] Processing {u}")
        art = parse_full_article(u)
        if art:
            # Download image locally
            clean_slug = art["slug"].replace("%f0%9f%9a%82%f0%9f%8c%8b", "kereta-api")
            img_filename = f"blog_{clean_slug}.jpg"
            img_path = os.path.join("src/assets/images", img_filename)
            if art["imageUrl"]:
                ok = download_image(art["imageUrl"], img_path)
                art["localImage"] = img_filename if ok else ""
            else:
                art["localImage"] = ""

            all_articles.append(art)

    print(f"\nFinished parsing {len(all_articles)} articles.")
    with open("scripts/all_22_articles.json", "w", encoding="utf-8") as f:
        json.dump(all_articles, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
