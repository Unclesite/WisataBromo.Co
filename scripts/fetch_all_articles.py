import urllib.request
import re
import json
import os
import html

def clean_html(raw_html):
    # Remove scripts, styles
    cleaned = re.sub(r'<script.*?</script>', '', raw_html, flags=re.DOTALL | re.IGNORECASE)
    cleaned = re.sub(r'<style.*?</style>', '', cleaned, flags=re.DOTALL | re.IGNORECASE)
    # Replace breaks and paragraphs with newlines
    cleaned = re.sub(r'<br\s*/?>', '\n', cleaned)
    cleaned = re.sub(r'</p>', '\n\n', cleaned)
    # Remove all tags
    cleaned = re.sub(r'<[^>]+>', '', cleaned)
    # Unescape
    cleaned = html.unescape(cleaned)
    # Normalize whitespaces
    lines = [line.strip() for line in cleaned.split('\n') if line.strip()]
    return lines

def fetch_article(url):
    print(f"Fetching: {url}")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Failed {url}: {e}")
        return None

    # Title
    title_match = re.search(r'<h1[^>]*class=[\'"][^\'"]*entry-title[^\'"]*[\'"][^>]*>(.*?)</h1>', content, re.DOTALL | re.IGNORECASE)
    if not title_match:
        title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
        title = title_match.group(1).split(' - ')[0].split(' | ')[0].strip() if title_match else url.split('/')[-1]
    else:
        title = re.sub(r'<[^>]+>', '', title_match.group(1)).strip()
    title = html.unescape(title)

    # Date
    date_match = re.search(r'<time[^>]*class=[\'"][^\'"]*entry-date[^\'"]*[^>]*>(.*?)</time>', content, re.DOTALL | re.IGNORECASE)
    if not date_match:
        date_match = re.search(r'property=[\'"]article:published_time[\'"] content=[\'"]([^\'"]+)[\'"]', content, re.IGNORECASE)
        pub_date = date_match.group(1)[:10] if date_match else "2026"
    else:
        pub_date = re.sub(r'<[^>]+>', '', date_match.group(1)).strip()

    # Image (Featured)
    img_match = re.search(r'property=[\'"]og:image[\'"] content=[\'"]([^\'"]+)[\'"]', content, re.IGNORECASE)
    if not img_match:
        img_match = re.search(r'<img[^>]*class=[\'"][^\'"]*wp-post-image[^\'"]*[\'"][^>]*src=[\'"]([^\'"]+)[\'"]', content, re.IGNORECASE)
    image_url = img_match.group(1) if img_match else ""

    # Category
    cat_match = re.search(r'rel=[\'"]category tag[\'"][^>]*>(.*?)</a>', content, re.IGNORECASE)
    category_name = cat_match.group(1).strip() if cat_match else "Tips & Budaya Bromo"

    # Main content
    entry_content_match = re.search(r'<div[^>]*class=[\'"][^\'"]*entry-content[^\'"]*[\'"][^>]*>(.*?)</div>\s*<!-- \.entry-content', content, re.DOTALL | re.IGNORECASE)
    if not entry_content_match:
        entry_content_match = re.search(r'<div[^>]*class=[\'"][^\'"]*entry-content[^\'"]*[\'"][^>]*>(.*?)</div>', content, re.DOTALL | re.IGNORECASE)

    raw_entry = entry_content_match.group(1) if entry_content_match else ""
    paragraphs = clean_html(raw_entry)

    # Filter out footer/sharing junk
    clean_paragraphs = []
    for p in paragraphs:
        if any(ign in p.lower() for ign in ['share this:', 'bagikan ini:', 'related posts', 'pos terkait', 'tinggalkan balasan', 'leave a comment']):
            break
        if len(p) > 20 or p.startswith('•') or p.startswith('-') or (':' in p and len(p) > 10):
            clean_paragraphs.append(p)

    slug = url.rstrip('/').split('/')[-1]

    return {
        "slug": slug,
        "url": url,
        "title": title,
        "publishDate": pub_date,
        "imageUrl": image_url,
        "category": category_name,
        "content": clean_paragraphs
    }

def main():
    with open("scripts/blog_urls.json", "r") as f:
        urls = json.load(f)

    articles = []
    for u in urls:
        art = fetch_article(u)
        if art and len(art["content"]) > 0:
            articles.append(art)

    print(f"\nSuccessfully parsed {len(articles)} articles!")
    with open("scripts/parsed_articles.json", "w", encoding="utf-8") as f:
        json.dump(articles, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
