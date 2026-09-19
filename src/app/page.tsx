'use client';

import React, { useState } from 'react';
import EnvelopeModal from '@/components/EnvelopeModal';
import PetalCanvas from '@/components/PetalCanvas';
import MusicPlayer from '@/components/MusicPlayer';
import AutoScroller from '@/components/AutoScroller';
import HeroSection from '@/components/HeroSection';
import WeddingCalendarSection from '@/components/WeddingCalendarSection';
import GallerySection from '@/components/GallerySection';
import EditorialCrescendoSection from '@/components/EditorialCrescendoSection';
import EventsSection from '@/components/EventsSection';
import WeddingTimelineSection from '@/components/WeddingTimelineSection';
import GiftSection from '@/components/GiftSection';
import WishesSection from '@/components/WishesSection';
import RsvpSection from '@/components/RsvpSection';
import FooterSection from '@/components/FooterSection';
import AdminModal from '@/components/AdminModal';

export default function WeddingPage() {
  const [hasStartedMusic, setHasStartedMusic] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleEnvelopeOpen = () => {
    setHasStartedMusic(true);
  };

  return (
    <main className="min-h-screen relative bg-[#FFFDF9] text-[#2C2224] selection:bg-[#C92A42] selection:text-white">
      {/* 3D Wax Seal Envelope Opening Modal */}
      <EnvelopeModal onOpen={handleEnvelopeOpen} />

      {/* Fresh Rose Petals & Golden Sparkles Canvas */}
      <PetalCanvas />

      {/* Floating Vinyl Music Player */}
      <MusicPlayer autoPlayTrigger={hasStartedMusic} />

      {/* Cinematic Hands-free Auto Scroller */}
      <AutoScroller enabled={hasStartedMusic} />

      {/* 1. BÌA THIỆP: POSTER CƯỚI CÓ DẤU ẤN (THE VOW Editorial Cover) */}
      <HeroSection />

      {/* 2. LỊCH ẢNH: TẤM THIỆP ĐẶC BIỆT (Tháng 09/2026 & Trái tim vẽ tay) */}
      <WeddingCalendarSection />

      {/* 3. ALBUM: DÀN ẢNH NHƯ TẠP CHÍ CƯỚI (Bố cục nhịp điệu & Lightbox) */}
      <GallerySection />

      {/* 6. ĐOẠN CAO TRÀO: "Từ hôm nay, chúng mình là nhà" */}
      <EditorialCrescendoSection />

      {/* 7. LỜI MỜI VÀ THÔNG TIN HÔN LỄ */}
      <EventsSection />

      {/* 8. LỊCH TRÌNH DẠ TIỆC: 5 Giai đoạn đón khách, nghi thức & khai tiệc */}
      <WeddingTimelineSection />

      {/* 11. HỘP MỪNG CƯỚI & VIETQR */}
      <GiftSection />

      {/* 12. SỔ LƯU BÚT & LỜI CHÚC PHÚC */}
      <WishesSection />

      {/* 13. THIỆP HỒI ĐÁP (R.S.V.P Carte-réponse) */}
      <RsvpSection />

      {/* 14. TRANG CUỐI ALBUM: Lời cảm ơn & Chữ ký Thành Nhớ & Ngọc Ngân */}
      <FooterSection onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Admin Modal for Couple to View RSVPs */}
      <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </main>
  );
}

