'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Play,
  Pause,
  LayoutGrid,
  Layers,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import {
  CornerFloralWatermark,
  BotanicalDivider,
  HeartDamaskWatermark,
  GoldRoseWatermark,
  AttachedSmallFlower,
} from '@/components/WatermarkDecorations';
import { WEDDING_DATA } from '@/lib/weddingData';

const ALBUM_PHOTOS = [
  { id: 1, src: '/images/wedding_opt/H2H09645.jpg' },
  { id: 2, src: '/images/wedding_opt/H2H09190.jpg' },
  { id: 3, src: '/images/wedding_opt/H2H08876.jpg' },
  { id: 4, src: '/images/wedding_opt/H2H09703.jpg' },
  { id: 5, src: '/images/wedding_opt/H2H09145.jpg' },
  { id: 6, src: '/images/wedding_opt/H2H08970.jpg' },
  { id: 7, src: '/images/wedding_opt/H2H08466.jpg' },
  { id: 8, src: '/images/wedding_opt/H2H08137.jpg' },
  { id: 9, src: '/images/wedding_opt/H2H09425.jpg' },
  { id: 10, src: '/images/wedding_opt/H2H09433.jpg' },
  { id: 11, src: '/images/wedding_opt/H2H08248.jpg' },
  { id: 12, src: '/images/wedding_opt/H2H09497.jpg' },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Drag / Swipe State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchDelta, setTouchDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const total = ALBUM_PHOTOS.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setActiveIndex((index + total) % total);
  };

  // Autoplay Timer (every 3.8s)
  useEffect(() => {
    if (!isAutoPlay || isHovered || isDragging || lightboxIndex !== null || viewMode !== '3d') {
      return;
    }

    const timer = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, isDragging, lightboxIndex, viewMode, nextSlide]);

  // Touch Handlers for Mobile Swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchDelta(0);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentX = e.targetTouches[0].clientX;
    setTouchDelta(currentX - touchStart);
  };

  const handleTouchEnd = () => {
    if (touchStart === null) return;
    if (touchDelta > 45) {
      prevSlide();
    } else if (touchDelta < -45) {
      nextSlide();
    }
    setTouchStart(null);
    setTouchDelta(0);
    setIsDragging(false);
  };

  // Mouse Handlers for Desktop Dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
    setTouchDelta(0);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || touchStart === null) return;
    setTouchDelta(e.clientX - touchStart);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (touchDelta > 45) {
      prevSlide();
    } else if (touchDelta < -45) {
      nextSlide();
    }
    setTouchStart(null);
    setTouchDelta(0);
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
    setIsHovered(false);
  };

  // Lightbox Handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxPhoto = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex + 1) % total);
      }
    },
    [lightboxIndex, total]
  );

  const prevLightboxPhoto = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex - 1 + total) % total);
      }
    },
    [lightboxIndex, total]
  );

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextLightboxPhoto();
        if (e.key === 'ArrowLeft') prevLightboxPhoto();
      } else if (viewMode === '3d') {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, viewMode, nextLightboxPhoto, prevLightboxPhoto, nextSlide, prevSlide]);

  return (
    <section
      id="gallery-section"
      className="py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-[#FAF4EC] via-[#FFFDF9] to-[#FAF5EE] text-[#2C2224] select-none border-t border-[#EFE6D8] relative overflow-hidden"
    >
      {/* Background Watermarks */}
      <CornerFloralWatermark position="top-left" opacity={0.08} />
      <CornerFloralWatermark position="bottom-right" opacity={0.08} />
      <GoldRoseWatermark position="center" opacity={0.07} size="large" />
      <HeartDamaskWatermark opacity={0.03} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Masthead */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C59B55]/40 rounded-full text-[#C92A42] text-[11px] uppercase tracking-[0.25em] font-serif font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Wedding Photo Album</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2C2224] tracking-wide font-normal uppercase">
              ALBUM ẢNH
            </h2>
            <BotanicalDivider />
          </div>
        </ScrollReveal>

        {/* Controls: Mode Switcher & Autoplay Toggle */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10 font-serif text-xs">
            
            {/* View Mode Toggle */}
            <div className="inline-flex p-1 bg-white border border-[#EFE6D8] rounded-full shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode('3d')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full uppercase tracking-wider text-[11px] font-semibold transition-all cursor-pointer ${
                  viewMode === '3d'
                    ? 'bg-[#C92A42] text-white shadow-xs'
                    : 'text-[#736266] hover:text-[#C92A42]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Trượt Ngang 3D</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full uppercase tracking-wider text-[11px] font-semibold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#C92A42] text-white shadow-xs'
                    : 'text-[#736266] hover:text-[#C92A42]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Lưới Tất Cả ({total})</span>
              </button>
            </div>

            {/* Autoplay Toggle (Only in 3D mode) */}
            {viewMode === '3d' && (
              <button
                type="button"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`p-2 rounded-full border transition-all cursor-pointer shadow-2xs ${
                  isAutoPlay
                    ? 'bg-white border-[#C59B55]/60 text-[#C92A42] hover:bg-[#FFF0F3]'
                    : 'bg-[#FFFDF9] border-[#EFE6D8] text-[#736266] hover:border-[#C92A42]'
                }`}
                title={isAutoPlay ? 'Tạm dừng tự chạy' : 'Bật tự chuyển ảnh'}
                aria-label={isAutoPlay ? 'Tạm dừng tự chạy' : 'Bật tự chuyển ảnh'}
              >
                {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>
            )}

          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* VIEW 1: 3D COVERFLOW HORIZONTAL CAROUSEL (KHÔNG CÓ CHỮ ĐÈ ẢNH)             */}
        {/* ========================================================================= */}
        {viewMode === '3d' && (
          <div
            ref={containerRef}
            className="relative w-full py-4 overflow-hidden touch-pan-y"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* Carousel Stage */}
            <div className="relative w-full h-[460px] sm:h-[550px] md:h-[610px] flex items-center justify-center perspective-[1200px]">
              
              {ALBUM_PHOTOS.map((photo, index) => {
                // Compute shortest distance around circular list
                let diff = (index - activeIndex + total) % total;
                if (diff > total / 2) diff -= total;

                const isActive = diff === 0;
                const isAdjacent = Math.abs(diff) === 1;
                const isVisible = Math.abs(diff) <= 2;

                if (!isVisible) return null;

                // Responsive translation step (percentages)
                const translateX = diff * 58; // percentage offset
                const scale = isActive ? 1 : isAdjacent ? 0.82 : 0.68;
                const opacity = isActive ? 1 : isAdjacent ? 0.72 : 0.35;
                const rotateY = diff === 0 ? 0 : diff > 0 ? -12 : 12;
                const zIndex = 20 - Math.abs(diff);

                return (
                  <div
                    key={photo.id}
                    onClick={() => {
                      if (isActive) {
                        openLightbox(index);
                      } else {
                        goToSlide(index);
                      }
                    }}
                    style={{
                      transform: `translate3d(calc(-50% + ${translateX}%), -50%, 0) scale(${scale}) rotateY(${rotateY}deg)`,
                      opacity,
                      zIndex,
                      transition: isDragging ? 'none' : 'transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.55s ease',
                    }}
                    className={`absolute top-1/2 left-1/2 w-[270px] sm:w-[340px] md:w-[390px] aspect-[3/4] cursor-pointer rounded-3xl overflow-hidden select-none transition-shadow duration-300 ${
                      isActive
                        ? 'shadow-[0_25px_60px_-15px_rgba(201,42,66,0.35)] ring-2 ring-[#FFD782]/80 ring-offset-4 ring-offset-[#FFFDF9]'
                        : 'shadow-lg hover:opacity-90'
                    }`}
                  >
                    {/* Inner Photo Container - Clean Image Only */}
                    <div className="relative w-full h-full bg-stone-100 rounded-3xl overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={`Ảnh cưới ${photo.id}`}
                        fill
                        sizes="(max-width: 640px) 280px, 400px"
                        priority={isActive || isAdjacent}
                        className="object-cover object-center filter contrast-[1.02] brightness-[1.01]"
                        draggable={false}
                      />

                      {/* Small Corner Flower Accent on Active Slide */}
                      {isActive && (
                        <AttachedSmallFlower position="top-right" size="tiny" />
                      )}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Left & Right Floating Navigation Chevrons */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Ảnh trước"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#2C2224] hover:text-[#C92A42] border border-[#C59B55]/50 shadow-md hover:shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Ảnh kế tiếp"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#2C2224] hover:text-[#C92A42] border border-[#C59B55]/50 shadow-md hover:shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Dot Pagination Indicators */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
              {ALBUM_PHOTOS.map((_, idx) => {
                const isCur = idx === activeIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={`Chuyển tới ảnh ${idx + 1}`}
                    className={`transition-all duration-300 cursor-pointer rounded-full ${
                      isCur
                        ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-[#C92A42] shadow-xs'
                        : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#D4C3B3] hover:bg-[#C92A42]/60'
                    }`}
                  />
                );
              })}
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: EDITORIAL GRID VIEW (CLEAN PHOTOS ONLY)                            */}
        {/* ========================================================================= */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {ALBUM_PHOTOS.map((photo, idx) => (
              <ScrollReveal
                key={photo.id}
                animation="zoom-in"
                duration={700}
                delay={idx * 50}
                className="col-span-1 aspect-[3/4]"
              >
                <div
                  onClick={() => openLightbox(idx)}
                  className="group relative w-full h-full cursor-pointer p-2 sm:p-2.5 bg-white border border-[#EFE6D8] shadow-sm hover:shadow-xl hover:border-[#C59B55]/60 transition-all duration-500 rounded-2xl flex flex-col overflow-hidden"
                >
                  <div className="relative w-full h-full overflow-hidden bg-stone-100 rounded-xl">
                    <Image
                      src={photo.src}
                      alt={`Ảnh cưới ${photo.id}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-center filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Romantic Bottom Note */}
        <ScrollReveal animation="fade-up" delay={200} className="mt-14 sm:mt-16 text-center">
          <div className="inline-block p-6 sm:p-8 bg-white/80 border border-[#EFE6D8] rounded-2xl max-w-2xl mx-auto shadow-2xs backdrop-blur-xs relative overflow-visible">
            <AttachedSmallFlower position="top-right" size="tiny" />
            <Heart className="w-4 h-4 text-[#C92A42] fill-[#C92A42] mx-auto mb-3" />
            <p className="font-heading text-xl sm:text-2xl text-[#2C2224] italic font-normal">
              &ldquo;Khoảnh khắc bên nhau là mãi mãi, hạnh phúc tròn đầy theo năm tháng.&rdquo;
            </p>
            <span className="text-[10px] font-serif text-[#C59B55] tracking-[0.25em] uppercase font-semibold block mt-2">
              {WEDDING_DATA.groom.name} &amp; {WEDDING_DATA.bride.name} &bull; {WEDDING_DATA.weddingDate.formattedDate}
            </span>
          </div>
        </ScrollReveal>

      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN LIGHTBOX MODAL                                                 */}
      {/* ========================================================================= */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 select-none"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between text-white px-2 sm:px-4 py-2 z-50">
            <span className="text-xs font-serif text-white/70 tracking-widest">
              {lightboxIndex + 1} / {total}
            </span>
            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
              aria-label="Đóng ảnh"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Main Stage */}
          <div
            className="relative w-full flex-1 flex items-center justify-center max-w-5xl my-2 px-8 sm:px-14"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevLightboxPhoto}
              className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 cursor-pointer shadow-lg"
              aria-label="Ảnh trước"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextLightboxPhoto}
              className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 cursor-pointer shadow-lg"
              aria-label="Ảnh kế tiếp"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Frame */}
            <div className="relative w-full h-[65vh] sm:h-[70vh] flex items-center justify-center">
              <Image
                src={ALBUM_PHOTOS[lightboxIndex].src}
                alt={`Ảnh cưới ${ALBUM_PHOTOS[lightboxIndex].id}`}
                fill
                sizes="(max-width: 1024px) 95vw, 1200px"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div
            className="w-full max-w-4xl flex items-center justify-center gap-2 overflow-x-auto py-2 px-4 scrollbar-none z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {ALBUM_PHOTOS.map((thumb, idx) => {
              const isSelected = idx === lightboxIndex;
              return (
                <button
                  key={thumb.id}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-[#D4AF37] scale-110 shadow-lg'
                      : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/60'
                  }`}
                >
                  <Image
                    src={thumb.src}
                    alt={`Ảnh nhỏ ${thumb.id}`}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>

        </div>
      )}

    </section>
  );
}
