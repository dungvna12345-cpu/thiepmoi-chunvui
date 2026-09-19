'use client';

import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
}

export default function PetalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const brightRomanticColors = [
      '#E84D67', // Fresh bright rose
      '#F472B6', // Sakura soft pink
      '#FB7185', // Coral blush rose
      '#FFD1DC', // Pastel pearl pink
      '#D4AF37', // Sparkling gold speck
      '#E5C07B', // Soft golden glow
    ];

    // Petal count optimized for high smoothness
    const petalCount = window.innerWidth < 768 ? 10 : 16;
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 8 + 6,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: Math.random() * 0.35 + 0.25, // Gentle, slow romantic drift
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.8,
        color: brightRomanticColors[Math.floor(Math.random() * brightRomanticColors.length)],
        opacity: Math.random() * 0.35 + 0.2,
      });
    }

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate((petal.rotation * Math.PI) / 180);
      ctx.globalAlpha = petal.opacity;

      if (petal.color === '#D4AF37' || petal.color === '#E5C07B') {
        // Gold sparkle dot / 4-point sparkle star
        ctx.fillStyle = petal.color;
        ctx.beginPath();
        ctx.arc(0, 0, petal.size / 3.2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Realistic curved rose petal shape
        ctx.fillStyle = petal.color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(
          petal.size / 2,
          -petal.size / 2,
          petal.size,
          petal.size / 3,
          0,
          petal.size
        );
        ctx.bezierCurveTo(
          -petal.size,
          petal.size / 3,
          -petal.size / 2,
          -petal.size / 2,
          0,
          0
        );
        ctx.fill();
      }

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.x += p.speedX + Math.sin(p.y * 0.008) * 0.3;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ opacity: 0.75 }}
    />
  );
}

