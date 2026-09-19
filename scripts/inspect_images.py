import os
import glob
from PIL import Image

opt_dir = "public/images/wedding_opt"
files = sorted(glob.glob(os.path.join(opt_dir, "*.jpg")))

print("Image summaries:")
for f in files:
    filename = os.path.basename(f)
    with Image.open(f) as img:
        print(f"{filename}: size={img.size}, mode={img.mode}")
