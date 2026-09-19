'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, ArrowRight, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WEDDING_DATA } from '@/lib/weddingData';

interface EnvelopeModalProps {
  onOpen: () => void;
}

export default function EnvelopeModal({ onOpen }: EnvelopeModalProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  // Check if previously opened in this session
  useEffect(() => {
    try {
      const alreadyOpened = sessionStorage.getItem('wedding_envelope_opened');
      if (alreadyOpened) {
        setIsRemoved(true);
        onOpen();
      }
    } catch {}
  }, [onOpen]);

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);

    try {
      sessionStorage.setItem('wedding_envelope_opened', 'true');
      
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#D8B45F', '#E4CC86', '#A51D2D', '#FFF9ED', '#641D24'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.4 },
          colors: ['#E4CC86', '#D8B45F', '#FFFFFF', '#8F1724'],
        });
      }, 250);
    } catch {}

    onOpen();

    setTimeout(() => {
      setIsRemoved(true);
    }, 1100);
  };

  if (isRemoved) return null;

  return (
    <div
      onClick={handleOpenEnvelope}
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 select-none transition-all duration-700 backdrop-blur-md cursor-pointer overflow-y-auto ${
        isOpening
          ? 'opacity-0 pointer-events-none scale-105'
          : 'opacity-100 bg-[#351F1D]/90'
      }`}
      style={{
        minHeight: '100svh',
        background: 'radial-gradient(ellipse at center, #641D24 0%, #4A2926 50%, #351F1D 100%)',
      }}
      aria-label="Nhấn để mở thiệp cưới"
    >
      {/* Dynamic Ambient Luxury Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(216,180,95,0.15)_0%,transparent_65%)] pointer-events-none" />

      {/* Main Luxury Stage Container */}
      <div
        className="relative w-full max-w-[390px] sm:max-w-[420px] flex flex-col items-center text-center z-20 my-auto py-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================================= */}
        {/* 1. HEADER SECTION: Calligraphy & Couple Names                             */}
        {/* ========================================================================= */}
        <div className="mb-2 sm:mb-3 animate-fade-in text-center drop-shadow-md">
          <h1 className="font-script text-4xl sm:text-5xl text-[#FFF5E8] drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)] tracking-wide leading-tight">
            Ngày Chung Đôi
          </h1>
          
          <div className="flex items-center justify-center gap-2.5 mt-1 text-[11px] sm:text-xs font-serif uppercase tracking-[0.25em] text-[#E7D5C2]">
            <span className="w-7 sm:w-9 h-[1px] bg-[#D8B45F]/70" />
            <span className="font-medium">{WEDDING_DATA.groom.name} &bull; {WEDDING_DATA.bride.name}</span>
            <span className="w-7 sm:w-9 h-[1px] bg-[#D8B45F]/70" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. WEDDING CARD & ENVELOPE STAGE (TILTED TACTILE LUXURY STATIONERY)        */}
        {/* ========================================================================= */}
        <div
          onClick={handleOpenEnvelope}
          className="relative w-[305px] sm:w-[350px] h-[365px] sm:h-[405px] cursor-pointer group my-1 select-none"
        >
          {/* A. CÀNH HOA HỒNG ĐỎ GÀI CÙNG PHÍA SAU BỨC ẢNH TRONG LÒNG PHONG BÌ */}
          <div className="absolute -top-10 -left-6 sm:-left-8 w-32 sm:w-38 h-44 sm:h-52 pointer-events-none z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-6 -rotate-12 drop-shadow-2xl">
            <Image
              src="/images/decor/red_rose_branch_decor.webp"
              alt="Red Rose Branch"
              fill
              sizes="180px"
              className="object-contain filter brightness-[1.01]"
              priority
            />
          </div>

          {/* B. BÓ HOA CƯỚI GÓC DƯỚI BÊN PHẢI PHONG BÌ */}
          <div className="absolute -bottom-5 -right-5 sm:-right-7 w-28 sm:w-34 h-34 sm:h-42 pointer-events-none z-40 transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl">
            <Image
              src="/images/decor/red_rose_bouquet_decor.webp"
              alt="Red Rose Bouquet"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </div>

          {/* C. ENVELOPE BACK FLAP (NẮP PHONG BÌ MỞ NGƯỢC PHÍA SAU - BURGUNDY DEEP) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-[140px] sm:bottom-[160px] w-[270px] sm:w-[310px] h-[95px] sm:h-[110px] bg-gradient-to-t from-[#8F1724] to-[#55111B] border-t border-l border-r border-[#D8B45F]/60 rounded-t-2xl z-0 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
              boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.45)',
            }}
          >
            {/* Lớp vân giấy mờ tinh tế */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D8B45F_1px,transparent_1px)] [background-size:12px_12px]" />
          </div>

          {/* ======================================================================= */}
          {/* D. IVORY WEDDING CARD (TẤM THIỆP CƯỚI NGHIÊNG NHẸ NGHỆ THUẬT)            */}
          {/* ======================================================================= */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-1 w-[225px] sm:w-[258px] bg-[#FFF9ED] p-2.5 sm:p-3 rounded-2xl shadow-[0_16px_45px_rgba(0,0,0,0.55)] border border-[#D8B45F]/70 transition-all duration-700 ease-out z-15 ${
              isOpening
                ? '-translate-y-16 rotate-0 scale-105 shadow-2xl'
                : '-rotate-[3.5deg] group-hover:-translate-y-2.5 group-hover:-rotate-1'
            }`}
            style={{ transformOrigin: 'bottom center' }}
          >
            {/* Kẹp tim vàng tinh xảo ở góc trên bên trái tấm ảnh */}
            <div className="absolute -top-2.5 left-3.5 z-30 pointer-events-none drop-shadow-md">
              <svg width="22" height="26" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C8 0 2 3 2 9C2 15 12 23 12 23C12 23 22 15 22 9C22 3 16 0 12 4Z" stroke="#D8B45F" strokeWidth="2.5" fill="#E4CC86" fillOpacity="0.4" />
                <path d="M12 7C9.5 4 5 6 5 10C5 14 12 20 12 20C12 20 19 14 19 10C19 6 14.5 4 12 7Z" stroke="#D8B45F" strokeWidth="1.5" />
              </svg>
            </div>

            {/* 1. KHUNG ẢNH LỄ ĐƯỜNG: CHIẾM 65% CARD, HIỂN THỊ TRỌN VẸN CÔ DÂU CHÚ RỂ VÀ KIẾN TRÚC */}
            <div className="relative w-full aspect-[4/4.6] rounded-xl overflow-hidden bg-stone-100 border border-[#D8B45F]/40 shadow-inner">
              <Image
                src="/images/wedding_opt/H2H08970.jpg"
                alt="Đỗ Thành Nhớ & Phạm Thị Ngân"
                fill
                sizes="280px"
                className="object-cover object-[center_60%] filter brightness-[1.02] contrast-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#351F1D]/35 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* 2. PHẦN THÔNG TIN NGÀY CƯỚI TRÊN THIỆP (EDITORIAL TYPOGRAPHY) */}
            <div className="pt-2 pb-1 text-center font-serif">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#8F1724] font-bold">
                Ngày Chung Đôi
              </p>
              <p className="text-base sm:text-lg font-heading text-[#641D24] font-semibold tracking-widest leading-tight mt-0.5">
                29 &bull; 09 &bull; 2026
              </p>
              <p className="text-[9px] text-[#736266] italic font-medium">
                Lễ Thành Hôn
              </p>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* E. ENVELOPE FRONT BODY (THÂN PHONG BÌ PHÍA TRƯỚC - CHỈ CHE 30% THIỆP)    */}
          {/* ======================================================================= */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[275px] sm:w-[315px] h-[155px] sm:h-[175px] bg-gradient-to-b from-[#8F1724] via-[#7B131F] to-[#55101A] rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] border-b border-l border-r border-[#D8B45F]/60 z-25 pointer-events-none overflow-hidden"
            style={{
              clipPath: 'polygon(0% 0%, 50% 46%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            {/* Vân giấy nhung chìm cao cấp */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF9ED_1px,transparent_1px)] [background-size:10px_10px]" />

            {/* Ánh sáng 3D góc phản chiếu nhẹ */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,249,237,0.15) 0%, transparent 45%)',
              }}
            />

            {/* DÒNG CHỮ TRÂN TRỌNG KÍNH MỜI TRÊN THÂN PHONG BÌ */}
            <div className="absolute bottom-3 inset-x-0 text-center font-serif text-[10px] uppercase tracking-[0.25em] text-[#E4CC86] font-medium drop-shadow-sm flex items-center justify-center gap-2">
              <span className="text-[9px]">✤</span>
              <span>TRÂN TRỌNG KÍNH MỜI</span>
              <span className="text-[9px]">✤</span>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* F. WAX SEAL MONOGRAM (CON DẤU SÁP VÀNG KIM DẬP NỔI TRÁI TIM)            */}
          {/* ======================================================================= */}
          <div
            className={`absolute bottom-[72px] sm:bottom-[82px] left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ${
              isOpening ? 'opacity-0 scale-125' : 'opacity-100 scale-100'
            }`}
          >
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#E4CC86] via-[#D8B45F] to-[#9C7A2E] text-[#641D24] flex items-center justify-center shadow-[0_6px_22px_rgba(0,0,0,0.55)] border-2 border-[#FFF9ED] ring-1 ring-[#D8B45F] group-hover:scale-110 transition-transform animate-[pulse_3.5s_ease-in-out_infinite]">
              <Heart className="w-5 h-5 fill-[#641D24] text-[#641D24] drop-shadow-xs" />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. CTA BUTTON & HELPER TEXT SECTION                                       */}
        {/* ========================================================================= */}
        <div className="mt-3 sm:mt-4 space-y-2 flex flex-col items-center">
          {/* Primary Luxury CTA Button */}
          <button
            type="button"
            onClick={handleOpenEnvelope}
            className="w-[240px] sm:w-[270px] h-[52px] sm:h-[56px] inline-flex items-center justify-center gap-2.5 px-6 bg-gradient-to-r from-[#FFF9ED] via-white to-[#F7F0DF] text-[#8F1724] hover:text-[#641D24] border-[1.5px] border-[#D8B45F] rounded-full text-xs sm:text-sm font-serif uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer"
            aria-label="Mở thiệp cưới"
          >
            <Mail className="w-4 h-4 text-[#8F1724]" />
            <span>Mở Thiệp Cưới</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D8B45F]" />
          </button>

          {/* Helpful Subtitle */}
          <p className="text-[11px] text-[#E7D5C2]/75 font-serif tracking-wider italic font-light drop-shadow-xs">
            Chạm vào phong bì hoặc nhấn mở thiệp để bắt đầu
          </p>
        </div>

      </div>
    </div>
  );
}
