import os
import glob
from PIL import Image

opt_dir = "public/images/wedding_opt"
files = sorted(glob.glob(os.path.join(opt_dir, "*.jpg")))

# Create a small HTML gallery for verification
html_content = """<!DOCTYPE html>
<html>
<head>
<title>Wedding Photos Catalog</title>
<style>
body { font-family: sans-serif; background: #FAF5EE; padding: 20px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.card { background: white; padding: 10px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center; }
img { width: 100%; height: 380px; object-fit: cover; border-radius: 4px; }
h3 { margin: 10px 0 5px; font-size: 14px; }
</style>
</head>
<body>
<h1>12 Wedding Photos of Vũ Thành Nhớ & Lê Ngọc Ngân</h1>
<div class="grid">
"""

for f in files:
    name = os.path.basename(f)
    html_content += f"""
    <div class="card">
      <img src="/images/wedding_opt/{name}" alt="{name}" />
      <h3>{name}</h3>
    </div>
    """

html_content += """
</div>
</body>
</html>
"""

os.makedirs("public", exist_ok=True)
with open("public/photo_catalog.html", "w", encoding="utf-8") as out:
    out.write(html_content)

print("Catalog created at public/photo_catalog.html")
