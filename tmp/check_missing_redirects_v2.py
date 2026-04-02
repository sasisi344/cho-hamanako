
import re
import os
from urllib.parse import urlparse, unquote
import json

def normalize_path(path):
    if not path.startswith('/'):
        path = '/' + path
    if not path.endswith('/') and '.' not in path:
        path = path + '/'
    return path

# Read astro.config.mjs
with open(r'c:\Users\sasis\344dev\cho-hama\astro.config.mjs', 'r', encoding='utf-8') as f:
    config_content = f.read()

redirected_paths = set()
redirect_matches = re.findall(r'"(/[^"]+)":\s*"(/[^"]+)"', config_content)
for old, new in redirect_matches:
    redirected_paths.add(normalize_path(old))

# Read checklist.md
with open(r'c:\Users\sasis\344dev\cho-hama\data-set\301redirect\checklist.md', 'r', encoding='utf-8') as f:
    checklist_content = f.read()

rows = re.findall(r'\| (\[[\s x]\]) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|', checklist_content)

missing_but_file_exists = []
missing_and_no_file = []

CONTENT_ROOT = r'c:\Users\sasis\344dev\cho-hama\src\content\blog'

for status, title, wp_url, astro_path in rows:
    title = title.strip()
    wp_url = wp_url.strip()
    astro_path = astro_path.strip().strip('"')
    
    if not wp_url.startswith('http'):
        continue
    
    parsed_url = urlparse(wp_url)
    wp_path = normalize_path(unquote(parsed_url.path))
    
    if wp_path in redirected_paths:
        continue

    # Try to find the file
    file_exists = False
    possible_file_paths = []
    
    if astro_path.startswith('/blog/'):
        rel_path = astro_path[6:] # remove /blog/
        possible_file_paths.append(os.path.join(CONTENT_ROOT, rel_path, 'index.mdx'))
        possible_file_paths.append(os.path.join(CONTENT_ROOT, rel_path, 'index.md'))
        possible_file_paths.append(os.path.join(CONTENT_ROOT, rel_path + '.mdx'))
        possible_file_paths.append(os.path.join(CONTENT_ROOT, rel_path + '.md'))
    elif 'src\\content\\blog' in astro_path:
        # It's a full path
        possible_file_paths.append(os.path.join(astro_path, 'index.mdx'))
        possible_file_paths.append(os.path.join(astro_path, 'index.md'))
        possible_file_paths.append(astro_path + '.mdx')
        possible_file_paths.append(astro_path + '.md')
    
    actual_file = None
    for p in possible_file_paths:
        if os.path.exists(p):
            file_exists = True
            actual_file = p
            break
    
    item = {
        'title': title,
        'wp_url': wp_url,
        'wp_path': wp_path,
        'astro_path': astro_path,
        'file_path': actual_file
    }
    
    if file_exists:
        missing_but_file_exists.append(item)
    else:
        missing_and_no_file.append(item)

results = {
    "missing_but_file_exists": missing_but_file_exists,
    "missing_and_no_file": missing_and_no_file
}

with open(r'c:\Users\sasis\344dev\cho-hama\tmp\redirect_missing_details.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"Results saved to c:\\Users\\sasis\\344dev\\cho-hama\\tmp\\redirect_missing_details.json")
print(f"Exists in Astro but no redirect: {len(missing_but_file_exists)}")
print(f"Not in Astro yet: {len(missing_and_no_file)}")
