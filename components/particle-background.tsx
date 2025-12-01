"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  twinkle: boolean;
  twinklePhase: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const colors = ["#5CA4B5", "#164254", "#FFFFFF", "#94A3B8"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          twinkle: Math.random() > 0.7,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawParticle = (p: Particle, time: number) => {
      let alpha = 0.6;
      let size = p.size;

      if (p.twinkle) {
        alpha = 0.3 + Math.sin(time * 0.002 + p.twinklePhase) * 0.7;
        size = p.size * (0.8 + Math.sin(time * 0.002 + p.twinklePhase) * 0.4);
      }

      ctx!.beginPath();
      ctx!.arc(p.x, p.y, size, 0, Math.PI * 2);
      ctx!.fillStyle = p.color
        .replace(")", `, ${alpha})`)
        .replace("rgb", "rgba")
        .replace("#", "");

      // Convert hex to rgba
      const hex = p.color.replace("#", "");
      const r = Number.parseInt(hex.substring(0, 2), 16);
      const g = Number.parseInt(hex.substring(2, 4), 16);
      const b = Number.parseInt(hex.substring(4, 6), 16);
      ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

      ctx!.fill();

      // Add glow effect for twinkle particles
      if (p.twinkle && alpha > 0.7) {
        ctx!.shadowBlur = 10;
        ctx!.shadowColor = p.color;
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(92, 164, 181, ${0.15 * (1 - dist / 120)})`;
            ctx!.lineWidth = 0.5;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
    };

    const animate = (time: number) => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        drawParticle(p, time);
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
