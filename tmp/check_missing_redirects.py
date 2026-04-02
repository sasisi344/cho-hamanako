
import re
from urllib.parse import urlparse, unquote

def normalize_path(path):
    if not path.startswith('/'):
        path = '/' + path
    if not path.endswith('/') and '.' not in path:
        path = path + '/'
    return path

# Read astro.config.mjs
with open(r'c:\Users\sasis\344dev\cho-hama\astro.config.mjs', 'r', encoding='utf-8') as f:
    config_content = f.read()

# Extract redirects from astro.config.mjs
# Pattern: "/old/path/": "/new/path"
redirected_paths = set()
redirect_matches = re.findall(r'"(/[^"]+)":\s*"(/[^"]+)"', config_content)
for old, new in redirect_matches:
    redirected_paths.add(normalize_path(old))

# Read checklist.md
with open(r'c:\Users\sasis\344dev\cho-hama\data-set\301redirect\checklist.md', 'r', encoding='utf-8') as f:
    checklist_content = f.read()

# Extract rows from checklist.md
# | [ ] | Title | URL | AstroPath |
rows = re.findall(r'\| (\[[\s x]\]) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|', checklist_content)

missing_redirects = []

for status, title, wp_url, astro_path in rows:
    title = title.strip()
    wp_url = wp_url.strip()
    astro_path = astro_path.strip()
    
    if not wp_url.startswith('http'):
        continue
    
    parsed_url = urlparse(wp_url)
    wp_path = normalize_path(unquote(parsed_url.path))
    
    if wp_path not in redirected_paths:
        missing_redirects.append({
            'title': title,
            'wp_url': wp_url,
            'wp_path': wp_path,
            'astro_path': astro_path
        })


import json

results = {
    "total_rows_in_checklist": len(rows),
    "redirected_in_config": len(redirected_paths),
    "missing_redirects": missing_redirects
}

with open(r'c:\Users\sasis\344dev\cho-hama\tmp\redirect_comparison_results.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"Results saved to c:\\Users\\sasis\\344dev\\cho-hama\\tmp\\redirect_comparison_results.json")
