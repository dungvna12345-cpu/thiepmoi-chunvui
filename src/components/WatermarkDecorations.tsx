'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Họa tiết hoa hồng nét vẽ chỉ vàng chìm nền (Gold Line-Art Rose Watermark)
 */
export function GoldRoseWatermark({
  opacity = 0.12,
  position = 'center',
  size = 'medium',
  className = '',
}: {
  opacity?: number;
  position?: 'center' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}) {
  const getPosClass = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 -translate-x-1/4 -translate-y-1/4';
      case 'top-right':
        return 'top-0 right-0 translate-x-1/4 -translate-y-1/4';
      case 'bottom-left':
        return 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4';
      case 'bottom-right':
        return 'bottom-0 right-0 translate-x-1/4 translate-y-1/4';
      case 'center':
      default:
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'w-64 h-64 sm:w-80 sm:h-80';
      case 'large':
        return 'w-[450px] h-[450px] sm:w-[650px] sm:h-[650px]';
      case 'medium':
      default:
        return 'w-80 h-80 sm:w-[480px] sm:h-[480px]';
    }
  };

  return (
    <div
      className={`absolute pointer-events-none select-none z-0 ${getPosClass()} ${getSizeClass()} ${className}`}
      style={{ opacity }}
    >
      <Image
        src="/images/decor/gold_rose_watermark.webp"
        alt="Gold Line Art Rose Watermark"
        fill
        sizes="(max-width: 640px) 300px, 600px"
        className="object-contain"
      />
    </div>
  );
}

/**
 * Họa tiết hoa hồng chỉ vàng góc thiệp (Gold Corner Rose Line-Art)
 */
export function GoldCornerRose({
  position = 'top-right',
  opacity = 0.18,
  className = '',
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  opacity?: number;
  className?: string;
}) {
  const getStyle = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 -rotate-90 scale-x-[-1]';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0 rotate-180';
      case 'bottom-right':
        return 'bottom-0 right-0 rotate-90 scale-y-[-1]';
    }
  };

  return (
    <div
      className={`absolute pointer-events-none select-none z-0 w-36 h-36 sm:w-56 sm:h-56 ${getStyle()} ${className}`}
      style={{ opacity }}
    >
      <Image
        src="/images/decor/gold_corner_rose.webp"
        alt="Gold Corner Rose"
        fill
        sizes="220px"
        className="object-contain"
      />
    </div>
  );
}

/**
 * Đính hoa nhỏ xinh vào mép thẻ / card (Delicate Small Floral Attachment)
 */
export function AttachedSmallFlower({
  position = 'top-right',
  size = 'small',
  className = '',
}: {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  size?: 'tiny' | 'small' | 'medium';
  className?: string;
}) {
  const isLeft = position.includes('left');
  const src = isLeft
    ? '/images/decor/floral_branch_clipping_left.webp'
    : '/images/decor/floral_branch_clipping.webp';

  const getSizeClass = () => {
    switch (size) {
      case 'tiny':
        return 'w-12 sm:w-16';
      case 'medium':
        return 'w-24 sm:w-32';
      case 'small':
      default:
        return 'w-16 sm:w-22';
    }
  };

  const getPosClass = () => {
    switch (position) {
      case 'top-left':
        return '-top-3 -left-3 sm:-top-4 sm:-left-4 -rotate-12';
      case 'top-right':
        return '-top-3 -right-3 sm:-top-4 sm:-right-4 rotate-12';
      case 'bottom-left':
        return '-bottom-3 -left-3 sm:-bottom-4 sm:-left-4 -rotate-12';
      case 'bottom-right':
        return '-bottom-3 -right-3 sm:-bottom-4 sm:-right-4 rotate-12';
    }
  };

  return (
    <div
      className={`absolute aspect-[2/3] z-30 pointer-events-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] ${getPosClass()} ${getSizeClass()} ${className}`}
    >
      <Image
        src={src}
        alt="Attached Small Floral Accent"
        fill
        sizes="100px"
        className="object-contain"
      />
    </div>
  );
}

/**
 * Họa tiết hoa hồng và dây leo chìm trang trí góc thiệp (Corner Rose & Botanical Watermark SVG)
 */
export function CornerFloralWatermark({
  position = 'top-left',
  opacity = 0.08,
  className = '',
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  opacity?: number;
  className?: string;
}) {
  return <GoldCornerRose position={position} opacity={opacity * 1.8} className={className} />;
}

/**
 * Họa tiết trái tim lụa chìm ở giữa nền (Center Heart & Damask Watermark)
 */
export function HeartDamaskWatermark({
  opacity = 0.05,
  className = '',
}: {
  opacity?: number;
  className?: string;
}) {
  return <GoldRoseWatermark opacity={opacity * 2.2} size="medium" className={className} />;
}

/**
 * Hoa văn góc chỉ vàng cổ điển hoàng gia (Filigree Gold Corner Flourish)
 */
export function FiligreeGoldCorner({
  position = 'top-left',
  className = '',
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}) {
  const getStyle = () => {
    switch (position) {
      case 'top-left':
        return 'top-2 left-2';
      case 'top-right':
        return 'top-2 right-2 rotate-90';
      case 'bottom-right':
        return 'bottom-2 right-2 rotate-180';
      case 'bottom-left':
        return 'bottom-2 left-2 -rotate-90';
    }
  };

  return (
    <div
      className={`absolute w-8 h-8 sm:w-10 sm:h-10 pointer-events-none text-[#C59B55] z-20 ${getStyle()} ${className}`}
    >
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M2 38V14C2 7.37258 7.37258 2 14 2H38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M6 38V16C6 10.4772 10.4772 6 16 6H38" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.75" />
        <circle cx="14" cy="14" r="2.5" fill="currentColor" fillOpacity="0.9" />
        <path d="M2 2L14 14" stroke="currentColor" strokeWidth="1" strokeOpacity="0.8" />
        <path d="M14 5C11 9 9 11 5 14" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.85" />
      </svg>
    </div>
  );
}

/**
 * Dải phân cách hoa văn thanh nhã (Delicate Botanical Floral Divider)
 */
export function BotanicalDivider({ className = '', color = '#C59B55' }: { className?: string; color?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 pointer-events-none select-none ${className}`}>
      <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C59B55]/50" />
      
      <svg
        width="44"
        height="16"
        viewBox="0 0 44 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#C59B55]"
      >
        <path
          d="M22 2 C18 6, 12 7, 7 5 C12 11, 19 10, 22 14 C25 10, 32 11, 37 5 C32 7, 26 6, 22 2 Z"
          fill={color}
          fillOpacity="0.4"
        />
        {/* Little Red Heart at center */}
        <path
          d="M22 6 C21 4.5, 19 4.5, 19 6.5 C19 8, 22 10.5, 22 10.5 C22 10.5, 25 8, 25 6.5 C25 4.5, 23 4.5, 22 6 Z"
          fill="#C92A42"
          fillOpacity="0.8"
        />
      </svg>

      <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C59B55]/50" />
    </div>
  );
}

/**
 * Con dấu sáp hoàng kim nhỏ đính kèm (Royal Gold Wax Monogram Seal)
 */
export function RoyalMonogramSeal({ className = '', text = 'TN & NN' }: { className?: string; text?: string }) {
  return (
    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#E2B96A] via-[#C59B55] to-[#9C7532] text-white font-serif text-[9px] tracking-wider uppercase shadow-md border-2 border-white/80 ring-2 ring-[#C59B55]/50 select-none ${className}`}>
      <span className="font-semibold drop-shadow-xs">{text}</span>
    </div>
  );
}

