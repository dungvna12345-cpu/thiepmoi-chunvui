import os
from PIL import Image, ImageOps

opt_dir = "public/images/wedding_opt"
crop_dir = "public/images/custom_crops"
os.makedirs(crop_dir, exist_ok=True)

def crop_and_save(src_path, crop_box_rel, out_path, target_size=None):
    with Image.open(src_path) as img:
        img = ImageOps.exif_transpose(img)
        w, h = img.size
        # crop_box_rel is (left_pct, top_pct, right_pct, bottom_pct)
        box = (
            int(crop_box_rel[0] * w),
            int(crop_box_rel[1] * h),
            int(crop_box_rel[2] * w),
            int(crop_box_rel[3] * h),
        )
        cropped = img.crop(box)
        if target_size:
            cropped = cropped.resize(target_size, Image.Resampling.LANCZOS)
        cropped.save(out_path, "JPEG", quality=90, optimize=True)
        print(f"Saved {out_path} ({cropped.size})")

# 1. Groom Portrait (from H2H09645 / H2H08248 - focus on Groom)
crop_and_save(
    os.path.join(opt_dir, "H2H09645.jpg"),
    (0.08, 0.05, 0.58, 0.65),  # Groom upper body & face
    os.path.join(crop_dir, "groom_portrait.jpg"),
    (900, 1200)
)

# 2. Bride Portrait (from H2H09645 / H2H08466 - focus on Bride)
crop_and_save(
    os.path.join(opt_dir, "H2H09645.jpg"),
    (0.42, 0.05, 0.92, 0.65),  # Bride upper body & face
    os.path.join(crop_dir, "bride_portrait.jpg"),
    (900, 1200)
)

# 3. Groom Vows Portrait (warm look from H2H09145 or H2H08248)
crop_and_save(
    os.path.join(opt_dir, "H2H08248.jpg"),
    (0.38, 0.06, 0.88, 0.60),
    os.path.join(crop_dir, "groom_vows.jpg"),
    (800, 1000)
)

# 4. Bride Vows Portrait (tender look from H2H08466)
crop_and_save(
    os.path.join(opt_dir, "H2H08466.jpg"),
    (0.05, 0.12, 0.60, 0.70),
    os.path.join(crop_dir, "bride_vows.jpg"),
    (800, 1000)
)

# 5. Groom detail (Bowtie & Tuxedo suit)
crop_and_save(
    os.path.join(opt_dir, "H2H09645.jpg"),
    (0.20, 0.18, 0.48, 0.45),
    os.path.join(crop_dir, "groom_detail.jpg"),
    (400, 300)
)

# 6. Bride detail (Red Rose Bouquet & Lace)
crop_and_save(
    os.path.join(opt_dir, "H2H09645.jpg"),
    (0.48, 0.35, 0.78, 0.60),
    os.path.join(crop_dir, "bride_detail.jpg"),
    (400, 300)
)

print("Custom crops prepared successfully!")
