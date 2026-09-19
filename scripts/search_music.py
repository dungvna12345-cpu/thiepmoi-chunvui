import urllib.request
import urllib.parse
import json
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

# Let's search Zing/NhacCuaTui or open public CDNs for "Yes I Do"
query = "Cuoi Nhau Di Yes I Do Bui Anh Tuan"
search_url = f"https://api.chiasenhac.vn/api/search?q={urllib.parse.quote(query)}&page=1"
try:
    req = urllib.request.Request(search_url, headers=headers)
    with urllib.request.urlopen(req, context=ctx) as r:
        res = json.loads(r.read().decode('utf-8'))
        print("CSN result:", res)
except Exception as e:
    print("CSN error:", e)
