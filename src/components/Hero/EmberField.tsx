import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: "pink" | "purple" | "white";
  opacity: number;
};

const COLORS: Record<Ember["hue"], string> = {
  pink: "255,0,127",
  purple: "150,110,220",
  white: "255,255,255",
};

export default function EmberField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let embers: Ember[] = [];
    let raf = 0;

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      const count = Math.floor((canvas.width * canvas.height) / 16000);
      const hues: Ember["hue"][] = ["pink", "purple", "white"];
      embers = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -Math.random() * 0.35 - 0.05,
        size: Math.random() * 2 + 0.5,
        hue: hues[Math.floor(Math.random() * hues.length)],
        opacity: Math.random() * 0.5 + 0.15,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const e of embers) {
        e.x += e.vx;
        e.y += e.vy;
        if (e.y < -10) e.y = canvas.height + 10;
        if (e.x < -10) e.x = canvas.width + 10;
        if (e.x > canvas.width + 10) e.x = -10;

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLORS[e.hue]},${e.opacity})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
