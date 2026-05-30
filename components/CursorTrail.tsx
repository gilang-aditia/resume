"use client";

import { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  age: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trail = useRef<TrailPoint[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const raf = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouse);

    const TOTAL = 28;
    const SPACING = 6;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.current.unshift({ ...mouse.current, age: 0 });
      if (trail.current.length > TOTAL) {
        trail.current = trail.current.slice(0, TOTAL);
      }

      for (let i = 0; i < trail.current.length; i++) {
        trail.current[i].age++;
      }

      for (let i = 0; i < trail.current.length - 1; i++) {
        const p0 = trail.current[Math.max(0, i - 1)];
        const p1 = trail.current[i];
        const p2 = trail.current[i + 1];
        const p3 = trail.current[Math.min(trail.current.length - 1, i + 2)];

        const t = 1 - i / TOTAL;
        const alpha = t * 0.6;
        const width = t * 8 + 2;
        const hue = (i * 12 + Date.now() * 0.02) % 360;

        ctx.beginPath();
        ctx.moveTo(
          p0.x * 0.5 + p1.x * 0.5,
          p0.y * 0.5 + p1.y * 0.5,
        );
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        ctx.strokeStyle = `hsla(${hue}, 80%, 60%, ${alpha})`;
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      const head = trail.current[0];
      if (head && head.x > 0 && head.y > 0) {
        const size = 8;
        const hue = Date.now() * 0.05 % 360;
        ctx.beginPath();
        ctx.arc(head.x, head.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 90%, 70%, 0.9)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(head.x, head.y, size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 100%, 90%, 0.8)`;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    };

    raf.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
}
