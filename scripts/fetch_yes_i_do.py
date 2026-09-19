import urllib.request
import urllib.parse
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

# Test CDN endpoints
test_urls = [
    # Cưới Nhau Đi (Yes I Do) - Bùi Anh Tuấn, Hiền Hồ
    "https://c1-ex-swe.nixcdn.com/NhacCuaTui980/CuoiNhauDiYesIDo-BuiAnhTuanHienHo-5973788.mp3",
    "https://audio.jukehost.co.uk/v61qQ6V5b6n2H7f3UqMh9b6oG9y8s7e5/CuoiNhauDi.mp3",
    "https://raw.githubusercontent.com/dungvna12345-cpu/thiepmoi-chunvui/main/public/audio/yes_i_do.mp3"
]

for u in test_urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=10) as r:
            if r.status == 200:
                content = r.read()
                if len(content) > 100000: # at least 100KB
                    with open('public/audio/yes_i_do.mp3', 'wb') as f:
                        f.write(content)
                    print(f"Successfully downloaded {len(content)} bytes from {u}")
                    break
    except Exception as e:
        print(f"Failed {u}: {e}")
