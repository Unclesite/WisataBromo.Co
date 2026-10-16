import urllib.request
import re
import json

def fetch_page(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

def main():
    base_url = "https://wisatabromo.co/blog/"
    html = fetch_page(base_url)
    if not html:
        print("Could not load blog page")
        return

    # Check max pages
    pages = set(re.findall(r'https?://wisatabromo\.co/blog/page/(\d+)/?', html))
    max_page = 1
    if pages:
        max_page = max(int(p) for p in pages)
    print(f"Max page detected: {max_page}")

    all_article_links = set()

    for p in range(1, max_page + 1):
        p_url = f"https://wisatabromo.co/blog/page/{p}/" if p > 1 else base_url
        print(f"Fetching page {p}: {p_url}")
        p_html = fetch_page(p_url) if p > 1 else html
        
        # Look for article links: often inside <article> or <h2 class="entry-title"><a href="...">
        links = re.findall(r'<h[23][^>]*class=[\'"][^\'"]*entry-title[^\'"]*[\'"][^>]*>\s*<a\s+href=[\'"]([^\'"]+)[\'"]', p_html)
        if not links:
            # Fallback regex for post links
            candidates = re.findall(r'href=[\'"](https?://wisatabromo\.co/([a-z0-9\-]+)/?)[\'"]', p_html)
            links = []
            for full_url, slug in candidates:
                if not any(x in slug for x in ['blog', 'category', 'tag', 'wp-', 'author', 'feed', 'page', 'sample-page', 'cart', 'checkout']):
                    links.append(full_url)
        
        print(f"Found {len(links)} links on page {p}")
        for l in links:
            all_article_links.add(l.rstrip('/'))

    print(f"\nTotal unique articles found: {len(all_article_links)}")
    for a in sorted(all_article_links):
        print(a)

    with open("scripts/blog_urls.json", "w") as f:
        json.dump(sorted(list(all_article_links)), f, indent=2)

if __name__ == "__main__":
    main()
