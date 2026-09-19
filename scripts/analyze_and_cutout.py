import os
import glob
from PIL import Image, ImageOps
import rembg

opt_dir = "public/images/wedding_opt"
cutout_dir = "public/images/wedding_cutouts"
os.makedirs(cutout_dir, exist_ok=True)

files = sorted(glob.glob(os.path.join(opt_dir, "*.jpg")))

print(f"Generating cutouts for {len(files)} files...")
for f in files:
    filename = os.path.basename(f)
    base_name = os.path.splitext(filename)[0]
    out_cutout = os.path.join(cutout_dir, f"{base_name}_cutout.png")
    
    # Process cutout for all files
    if not os.path.exists(out_cutout):
        try:
            print(f"Processing cutout for {filename}...")
            with Image.open(f) as img:
                # Resize for crisp web transparent PNG cutout (max 1400px)
                img_small = img.copy()
                img_small.thumbnail((1400, 1400), Image.Resampling.LANCZOS)
                output = rembg.remove(img_small)
                output.save(out_cutout, "PNG")
                print(f"Saved {out_cutout}")
        except Exception as e:
            print(f"Error on {filename}: {e}")

print("All cutouts generated successfully!")
