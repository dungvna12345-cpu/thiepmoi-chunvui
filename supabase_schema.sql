-- ==============================================================================
-- BẢNG DỮ LIỆU SUPABASE CHO THIỆP CƯỚI: THÀNH NHỚ & NGỌC NGÂN
-- ==============================================================================
-- Hướng dẫn: Mở Supabase Dashboard -> Vào mục "SQL Editor" -> Dán toàn bộ mã này -> Nhấn "RUN"

-- 1. Bảng Lời Chúc (Wishes)
CREATE TABLE IF NOT EXISTS public.wishes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    relation TEXT DEFAULT 'Bạn bè',
    message TEXT NOT NULL,
    emoji TEXT DEFAULT '❤️',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Bật RLS (Row Level Security) cho bảng wishes
ALTER TABLE public.wishes ENABLE ROW LEVEL SECURITY;

-- Cho phép tất cả mọi người đọc danh sách lời chúc
CREATE POLICY "Cho phép đọc lời chúc công khai" 
ON public.wishes FOR SELECT 
USING (true);

-- Cho phép tất cả khách mời gửi lời chúc mới
CREATE POLICY "Cho phép gửi lời chúc công khai" 
ON public.wishes FOR INSERT 
WITH CHECK (true);

-- 2. Bảng Xác Nhận Tham Dự (RSVPs)
CREATE TABLE IF NOT EXISTS public.rsvps (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT,
    side TEXT DEFAULT 'groom', -- 'groom' (Nhà Trai) hoặc 'bride' (Nhà Gái)
    guests_count INTEGER DEFAULT 1,
    attending TEXT DEFAULT 'yes', -- 'yes' (Tham dự) hoặc 'no' (Không thể đến)
    note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Bật RLS cho bảng rsvps
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

-- Cho phép khách gửi thông tin xác nhận
CREATE POLICY "Cho phép gửi RSVP công khai" 
ON public.rsvps FOR INSERT 
WITH CHECK (true);

-- Cho phép đọc RSVP (để hiển thị thống kê dâu rể)
CREATE POLICY "Cho phép đọc RSVP công khai" 
ON public.rsvps FOR SELECT 
USING (true);

-- 3. Bảng Lượt Thả Tim Chúc Phúc (Likes)
CREATE TABLE IF NOT EXISTS public.likes (
    id INTEGER PRIMARY KEY DEFAULT 1,
    count INTEGER DEFAULT 999
);

-- Khởi tạo bản ghi mặc định cho lượt thả tim
INSERT INTO public.likes (id, count)
VALUES (1, 999)
ON CONFLICT (id) DO NOTHING;

ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cho phép đọc lượt like" 
ON public.likes FOR SELECT 
USING (true);

CREATE POLICY "Cho phép cập nhật lượt like" 
ON public.likes FOR UPDATE 
USING (true);

-- Hàm RPC tăng like an toàn
CREATE OR REPLACE FUNCTION increment_likes()
RETURNS void AS $$
BEGIN
  UPDATE public.likes
  SET count = count + 1
  WHERE id = 1;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
