import json
import re

def main():
    with open("scripts/all_22_articles.json", "r", encoding="utf-8") as f:
        articles = json.load(f)

    # Image mapping
    slug_to_var = {
        "3-jalur-masuk-gunung-bromo-tosari-sukapura-dan-jemplang": "img3Jalur",
        "apa-saja-yang-harus-dibawa-saat-ke-bromo": "imgPerlengkapan",
        "perlengkapan-yang-harus-dibawa-saat-ke-bromo": "imgPerlengkapan",
        "artikel-profesionalisme-wisatabromo-co-dalam-menghandle-kegiatan-kementerian": "imgKementerian",
        "asal-usul-nama-tengger-antara-keteguhan-gunung-luhur-budaya-dan-warisan-siwa-budha-majapahit": "imgAsalUsul",
        "asimilasi-ajaran-siwa-budha-warisan-majapahit-yang-hidup-di-tengger": "imgAsimilasiSiwaBudha",
        "bahasa-tengger-jejak-asli-jawa-kuno-yang-bertahan-di-lereng-bromo": "imgBahasaTengger",
        "bromo-pesona-alam-ikonik-di-jawa-timur-yang-tak-pernah-redup": "imgPesonaBromo",
        "edelweis-bromo-bunga-abadi-dari-lereng-wonokitri": "imgEdelweis",
        "gaya-bersarung-perempuan-suku-tengger-simbol-status-sosial-dan-identitas-budaya": "imgGayaBersarung",
        "gunung-brahma-ketika-dewa-india-menjadi-jiwa-jawa": "imgGunungBrahma",
        "jejak-siwa-budha-di-punggung-tengger-agama-asli-warisan-majapahit-yang-bertahan-di-lereng-bromo": "imgJejakSiwaBudha",
        "kapasitas-jeep-bromo-berapa-orang-bisa-dalam-satu-jeep": "imgKapasitasJeep",
        "lautan-awan-di-gunung-bromo-rahasia-di-balik-keindahan-alam-yang-menakjubkan": "imgLautanAwan",
        "lembah-bromo-ledok-amprong-surga-tersembunyi-di-lereng-bromo": "imgLedokAmprong",
        "mengenal-pura-luhur-poten-tempat-suci-di-kaki-gunung-bromo": "imgPuraPoten",
        "menunggangi-kuda-di-gunung-bromo-tarif-tips-dan-pengalaman-seru-yang-tak-terlupakan": "imgKudaBromo",
        "musim-terbaik-ke-bromo-dan-pesonanya-di-setiap-waktu": "imgMusimTerbaik",
        "panduan-lengkap-fasilitas-toilet-di-bromo": "imgToiletBromo",
        "tips-hemat-trip-ke-bromo-naik-bus-dari-kota-asal": "imgTipsBus",
        "tips-trip-ke-bromo-naik-kereta-api-dari-kota-asal-%f0%9f%9a%82%f0%9f%8c%8b": "imgTipsKereta",
    }

    # Dedup map: merge perlengkapan into apa-saja, skip paket-wisata-bromo as standalone blog stub
    processed = []
    seen_topics = set()

    for a in articles:
        slug = a["slug"]
        if slug == "paket-wisata-bromo":
            continue
        if slug == "perlengkapan-yang-harus-dibawa-saat-ke-bromo":
            continue # Already handled in apa-saja-yang-harus-dibawa-saat-ke-bromo

        title = a["title"].replace(" – WisataBromo.Co", "").replace(" - WisataBromo.Co", "").strip()
        category = a.get("category", "Tips & Panduan Wisata")

        # Map category to ID
        cat_lower = category.lower()
        if "budaya" in cat_lower or "tengger" in cat_lower or "sarung" in slug or "asal-usul" in slug:
            cat_id = "budaya_tengger"
            cat_label = "Budaya & Tradisi"
        elif "siwa" in cat_lower or "sejarah" in cat_lower or "brahma" in slug or "pura" in slug:
            cat_id = "sejarah_spiritual"
            cat_label = "Sejarah & Kosmologi"
        elif "jeep" in slug or "jalur" in slug or "bus" in slug or "kereta" in slug or "toilet" in slug:
            cat_id = "transportasi"
            cat_label = "Transportasi & Fasilitas"
        elif "awan" in slug or "edelweis" in slug or "lembah" in slug or "musim" in slug:
            cat_id = "destinasi_alam"
            cat_label = "Spot & Pesona Alam"
        else:
            cat_id = "tips_wisata"
            cat_label = "Tips & Panduan Wisata"

        # Build clean excerpts
        content = a.get("content", [])
        excerpt = ""
        for p in content:
            if len(p) > 60 and not p.endswith(':') and not p.startswith('•'):
                excerpt = p[:180] + "..."
                break
        if not excerpt and content:
            excerpt = content[0][:180] + "..."

        # Generate keyTakeaways from top headings or bullet points
        takeaways = []
        for p in content:
            if p.startswith('•') and len(takeaways) < 4:
                takeaways.append(p.replace('• ', '').strip())
            elif p.endswith(':') and len(takeaways) < 4 and len(p) < 60:
                takeaways.append(p[:-1].strip())
        if len(takeaways) < 3:
            takeaways.append("Informasi dan panduan terverifikasi langsung dari tim lokal lapangan WisataBromo.co.")
            takeaways.append("Rekomendasi terbaik untuk kenyamanan liburan Anda di kawasan Bromo Tengger Semeru.")

        img_var = slug_to_var.get(slug, "imgSunriseJeep")

        post_obj = {
            "id": slug.replace("%f0%9f%9a%82%f0%9f%8c%8b", "kereta-api"),
            "slug": slug.replace("%f0%9f%9a%82%f0%9f%8c%8b", "kereta-api"),
            "title": title,
            "category": cat_id,
            "categoryLabel": cat_label,
            "readTime": "5 menit baca",
            "publishDate": a.get("publishDate", "2026"),
            "author": "Tim WisataBromo.co",
            "imgVar": img_var,
            "excerpt": excerpt,
            "tags": [cat_label, "Bromo", "WisataBromo.co", "Info Wisata"],
            "keyTakeaways": takeaways[:4],
            "content": content
        }
        processed.append(post_obj)

    print(f"Compiled {len(processed)} clean unique articles.")

    # Write output TypeScript
    ts_lines = [
        "import { BlogPost } from '../types';",
        "import imgSunriseJeep from '../assets/images/bromo_sunrise_jeep_1790773945206.jpg';",
        "import imgSeaClouds from '../assets/images/bromo_sea_clouds_1790773968204.jpg';",
        "import imgJeepTosari from '../assets/images/bromo_jeep_tosari_1790773985603.jpg';",
        "import imgPicnicSavana from '../assets/images/bromo_picnic_savana_1790773999908.jpg';",
        "import imgTrailAdventure from '../assets/images/bromo_trail_adventure_1790774015834.jpg';",
        "import imgWidodarenCliff from '../assets/images/bromo_widodaren_cliff_1790774506404.jpg';",
        "import imgGoldenHour from '../assets/images/bromo_golden_hour_1790774487968.jpg';",
        "import imgGayaBersarung from '../assets/images/imggayabersarung_wisatabromo.jpg';",
        "import imgGadisSavana from '../assets/images/gadis_sarung_berkuda_savana.jpg';",
        "import imgBerkudaBatok from '../assets/images/1000888899-2048x1733.jpg';",
        "import imgGadisBatokStanding from '../assets/images/1000888911-scaled.jpg';",
        "import imgBerkudaPanorama from '../assets/images/1000888899-1290x540.jpg';",
        "import imgPerlengkapan from '../assets/images/imgperlengkapan_wisatabromo.png';",
        "import imgBahasaTengger from '../assets/images/imgbahasatengger_wisatabromo.png';",
        "import imgAsalUsul from '../assets/images/imgasalusul_wisatabromo.png';",
        "import imgAsimilasiSiwaBudha from '../assets/images/imgasimilasisiwabudha_wisatabromo.jpg';",
        "import imgGunungBrahma from '../assets/images/imggunungbrahma_wisatabromo.png';",
        "import imgJejakSiwaBudha from '../assets/images/imgjejaksiwabudha_wisatabromo.jpg';",
        "import imgKudaBromo from '../assets/images/imgkudabromo_wisatabromo.jpg';",
        "import imgLautanAwan from '../assets/images/imglautanawan_wisatabromo.png';",
        "import img3Jalur from '../assets/images/img3jalur_wisatabromo.jpg';",
        "import imgEdelweis from '../assets/images/imgedelweis_wisatabromo.png';",
        "import imgKapasitasJeep from '../assets/images/imgkapasitasjeep_wisatabromo.jpg';",
        "import imgMusimTerbaik from '../assets/images/imgmusimterbaik_wisatabromo.jpg';",
        "import imgLedokAmprong from '../assets/images/imgledokamprong_wisatabromo.jpg';",
        "import imgPesonaBromo from '../assets/images/imgpesonabromo_wisatabromo.jpg';",
        "import imgPuraPoten from '../assets/images/imgpurapoten_wisatabromo.jpg';",
        "import imgKementerian from '../assets/images/imgkementerian_wisatabromo.png';",
        "import imgTipsBus from '../assets/images/imgtipsbus_wisatabromo.png';",
        "import imgTipsKereta from '../assets/images/imgtipskereta_wisatabromo.png';",
        "import imgToiletBromo from '../assets/images/imgtoiletbromo_wisatabromo.png';",
        "",
        "export const BLOG_POSTS: BlogPost[] = ["
    ]

    for p in processed:
        ts_lines.append("  {")
        ts_lines.append(f"    id: {json.dumps(p['id'])},")
        ts_lines.append(f"    slug: {json.dumps(p['slug'])},")
        ts_lines.append(f"    title: {json.dumps(p['title'])},")
        ts_lines.append(f"    category: {json.dumps(p['category'])},")
        ts_lines.append(f"    categoryLabel: {json.dumps(p['categoryLabel'])},")
        ts_lines.append(f"    readTime: {json.dumps(p['readTime'])},")
        ts_lines.append(f"    publishDate: {json.dumps(p['publishDate'])},")
        ts_lines.append(f"    author: {json.dumps(p['author'])},")
        ts_lines.append(f"    imageUrl: {p['imgVar']},")
        ts_lines.append(f"    excerpt: {json.dumps(p['excerpt'])},")
        ts_lines.append(f"    tags: {json.dumps(p['tags'])},")
        ts_lines.append(f"    keyTakeaways: {json.dumps(p['keyTakeaways'])},")

        # If sarung article, preserve galleryImages
        if "sarung" in p["id"]:
            ts_lines.append("    galleryImages: [")
            ts_lines.append("      { url: imgGayaBersarung, caption: 'Dokumentasi 4 gaya bersarung perempuan Tengger dari gadis hingga janda bersama tokoh pemangku adat (Sumber: detikJatim / WisataBromo.co).', alt: 'Gaya bersarung perempuan Suku Tengger dari gadis hingga janda' },")
            ts_lines.append("      { url: imgGadisSavana, caption: 'Gadis muda Suku Tengger mengenakan sarung bermotif etnik Nusantara saat menunggang kuda di padang Savana Bromo.', alt: 'Gadis muda Tengger bersarung menunggang kuda di savana Bromo' },")
            ts_lines.append("      { url: imgBerkudaBatok, caption: 'Eksotisme tradisi bersarung berpadu dengan aktivitas berkuda di Lautan Pasir dan kaki Gunung Batok serta kawah aktif Bromo.', alt: 'Perempuan Tengger berkuda di Lautan Pasir berlatar Gunung Batok' },")
            ts_lines.append("      { url: imgGadisBatokStanding, caption: 'Potret kebanggaan generasi muda Tengger melestarikan busana sarung di tengah keindahan alam kaldera Gunung Bromo.', alt: 'Potret perempuan Tengger dan kuda berlatar belakang Gunung Batok Bromo' },")
            ts_lines.append("      { url: imgBerkudaPanorama, caption: 'Panorama memukau Lautan Pasir Bromo: keselarasan abadi antara manusia, budaya bersarung, dan lanskap alam pegunungan.', alt: 'Panorama berkuda di lautan pasir kaldera Bromo' }")
            ts_lines.append("    ],")

        # If perlengkapan, preserve ratesTable
        if "harus-dibawa" in p["id"]:
            ts_lines.append("    ratesTable: [")
            ts_lines.append("      { item: 'Sewa Jaket Tebal di Basecamp', price: '± Rp 30.000 / jaket', note: 'Bisa sewa langsung saat transit jeep' },")
            ts_lines.append("      { item: 'Beli Kupluk / Beanie & Syal', price: 'Rp 20.000 – Rp 35.000', note: 'Banyak dijual warga lokal di spot sunrise' },")
            ts_lines.append("      { item: 'Sarung Tangan Hangat', price: 'Rp 15.000 – Rp 25.000', note: 'Wajib melindungi jari dari angin beku' },")
            ts_lines.append("      { item: 'Masker Debu & Pasir', price: 'Rp 5.000 – Rp 10.000', note: 'Berguna saat angin berpasir di kaldera' }")
            ts_lines.append("    ],")

        # If kuda, preserve ratesTable
        if "kuda" in p["id"]:
            ts_lines.append("    ratesTable: [")
            ts_lines.append("      { item: 'Sewa Kuda PP (Lautan Pasir - Tangga Kawah)', price: 'Rp 150.000 – Rp 200.000', note: 'Tarif resmi terdaftar paguyuban kuda Tengger' },")
            ts_lines.append("      { item: 'Sewa Kuda Sekali Jalan (One Way)', price: 'Rp 100.000 – Rp 150.000', note: 'Cocok jika ingin naik kuda lalu turun jalan kaki' },")
            ts_lines.append("      { item: 'Foto Bersama Kuda Saja', price: 'Rp 25.000 – Rp 50.000', note: 'Bebas berfoto beberapa jepretan dengan background estetik' }")
            ts_lines.append("    ],")

        # Content array
        ts_lines.append(f"    content: {json.dumps(p['content'], ensure_ascii=False)}")
        ts_lines.append("  },")

    ts_lines.append("];")
    ts_lines.append("")

    with open("src/data/blogsData.ts", "w", encoding="utf-8") as f:
        f.write("\n".join(ts_lines))

    print(f"Generated src/data/blogsData.ts successfully with {len(processed)} articles!")

if __name__ == "__main__":
    main()
