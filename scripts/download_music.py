import urllib.request
import urllib.parse
import json
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

# Try direct CDNs for "Yes I Do" / "I Do"
urls = [
    "https://c1-ex-swe.nixcdn.com/NhacCuaTui980/CuoiNhauDiYesIDo-BuiAnhTuanHienHo-5973788.mp3",
    "https://vnso-zn-16-tf-mp3-s1-m-zmp3.zmdcdn.me/38c1187eb34399e50d52/7800742194689626490?authen=exp=1700000000~acl=/38c1187eb34399e50d52/*~hmac=test",
]

# Let's search internet archive for 911 I do or yes i do
try:
    search_api = "https://archive.org/advancedsearch.php?q=title%3A%28%22I+Do%22+OR+%22Yes+I+Do%22+OR+%22Cuoi+Nhau+Di%22%29+AND+mediatype%3Aaudio&fl[]=identifier,title&rows=10&output=json"
    req = urllib.request.Request(search_api, headers=headers)
    with urllib.request.urlopen(req, context=ctx) as r:
        data = json.loads(r.read().decode('utf-8'))
        docs = data.get('response', {}).get('docs', [])
        print("Archive docs:", docs)
        for doc in docs:
            ident = doc['identifier']
            meta_url = f"https://archive.org/metadata/{ident}"
            req2 = urllib.request.Request(meta_url, headers=headers)
            with urllib.request.urlopen(req2, context=ctx) as r2:
                meta = json.loads(r2.read().decode('utf-8'))
                files = meta.get('files', [])
                for f in files:
                    if f.get('name', '').endswith('.mp3'):
                        mp3_url = f"https://archive.org/download/{ident}/{urllib.parse.quote(f['name'])}"
                        print("Found mp3 candidate:", doc['title'], mp3_url)
except Exception as e:
    print("Archive error:", e)
