import os
import glob
from PIL import Image, ImageOps

src_dir = "public/images/wedding"
opt_dir = "public/images/wedding_opt"
os.makedirs(opt_dir, exist_ok=True)

files = sorted(glob.glob(os.path.join(src_dir, "*.jpg")))

print(f"Found {len(files)} files.")
for f in files:
    filename = os.path.basename(f)
    try:
        with Image.open(f) as img:
            img = ImageOps.exif_transpose(img)
            w, h = img.size
            ratio = "portrait" if h > w else "landscape"
            print(f"{filename}: {w}x{h} ({ratio})")
            
            # Save web optimized version (max 1800px dimension)
            img_opt = img.copy()
            img_opt.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
            out_path = os.path.join(opt_dir, filename)
            img_opt.save(out_path, "JPEG", quality=88, optimize=True)
            
            # Also create webp for faster web loading
            webp_name = os.path.splitext(filename)[0] + ".webp"
            img_opt.save(os.path.join(opt_dir, webp_name), "WEBP", quality=85)
    except Exception as e:
        print(f"Error {filename}: {e}")

print("Done optimizing photos.")
