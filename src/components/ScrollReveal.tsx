'use client';

import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'slide-left' 
  | 'slide-right' 
  | 'zoom-in' 
  | 'flip-up';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  className = '',
  threshold = 0.12,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Calculate base styles depending on state and animation type
  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1) rotate(0deg)';

    switch (animation) {
      case 'fade-up':
        return 'translate3d(0, 50px, 0)';
      case 'fade-down':
        return 'translate3d(0, -50px, 0)';
      case 'slide-left':
        return 'translate3d(-70px, 0, 0)';
      case 'slide-right':
        return 'translate3d(70px, 0, 0)';
      case 'zoom-in':
        return 'scale(0.90) translate3d(0, 20px, 0)';
      case 'flip-up':
        return 'perspective(1200px) rotateX(25deg) translate3d(0, 45px, 0)';
      default:
        return 'translate3d(0, 50px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
