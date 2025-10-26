import React, { useRef, useEffect } from "react";
import * as flubber from "flubber";

const BLOB_COUNT = 7;

// ——— 1) Your raw SVG paths — same as before ———
const RAW_PATHS = [
  "M40.5,24C26.1,48.4,-30.2,49.2,-44,25.1C-57.7,1.1,-28.9,-47.8,-0.7,-48.2C27.5,-48.6,55,-0.5,40.5,24Z",
  "M60.2,-1C60.2,28.3,30.1,56.5,1,56.5C-28.1,56.5,-56.1,28.3,-56.1,-1C-56.1,-30.3,-28.1,-60.6,1,-60.6C30.1,-60.6,60.2,-30.3,60.2,-1Z",
  "M54.2,-43.2C68.4,-25.4,76.8,-3,73.1,18C69.3,38.9,53.4,58.4,34.6,64.7C15.8,71,-5.8,64,-27.5,54.6C-49.2,45.1,-70.9,33.1,-76.3,15.6C-81.7,-1.8,-70.8,-24.8,-55.3,-42.9C-39.9,-61,-20,-74.3,0,-74.3C20,-74.3,40,-61.1,54.2,-43.2Z",
  "M60.1,-60C76.2,-43.9,86.5,-22,81.6,-5C76.6,12.1,56.4,24.1,40.2,40.2C24.1,56.2,12.1,76.2,-3.4,79.6C-18.8,82.9,-37.5,69.6,-53,53.6C-68.4,37.5,-80.5,18.8,-81.6,-1.1C-82.7,-21,-72.8,-41.9,-57.4,-58.1C-41.9,-74.2,-21,-85.4,0.5,-85.9C22,-86.4,43.9,-76.1,60.1,-60Z",
];

// ——— 2) Precompute all pairwise interpolation functions ———
const interpFns: ((t: number) => string)[][] = RAW_PATHS.map((from) =>
  RAW_PATHS.map((to) => flubber.interpolate(from, to, { maxSegmentLength: 2 }))
);

// ——— 3) Color interpolation helpers ———
function lerpColor(
  a: [number, number, number],
  b: [number, number, number],
  t: number
): [number, number, number] {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}
function rgbToCSS(c: [number, number, number]): string {
  return `rgb(${c.map((v) => v | 0).join(",")})`;
}

// ——— 4) The React component ———
export default function CanvasBlobs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let W = canvas.clientWidth,
      H = canvas.clientHeight;
    canvas.width = W;
    canvas.height = H;

    // ——— 5) Initialize blob states with random sizes ———
    type Blob = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      from: number;
      to: number;
      t: number;
      c0: [number, number, number];
      c1: [number, number, number];
      size: number; // random size multiplier
    };
    const blobs: Blob[] = Array.from({ length: BLOB_COUNT }).map(() => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 100,
      vy: (Math.random() - 0.5) * 100,
      from: Math.floor(Math.random() * RAW_PATHS.length),
      to: Math.floor(Math.random() * RAW_PATHS.length),
      t: 0,
      c0: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
      c1: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
      size: 1 + Math.random() * 2, // size between 1× and 3×
    }));

    let last = performance.now();
    function frame(now: number) {
      const dt = (now - last) / 1000;
      last = now;

      ctx.clearRect(0, 0, W, H);

      blobs.forEach((b) => {
        // — physics —
        b.x += b.vx * dt;
        if (b.x < 0 || b.x > W) b.vx *= -1;
        b.y += b.vy * dt;
        if (b.y < 0 || b.y > H) b.vy *= -1;

        // — morph & color t —
        b.t += dt / 4; // 4s per morph
        if (b.t >= 1) {
          b.t = 0;
          b.from = b.to;
          b.to = (b.to + 1) % RAW_PATHS.length;
          b.c0 = b.c1;
          b.c1 = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
        }

        // — get morphed path & color —
        const pathStr = interpFns[b.from][b.to](b.t);
        const color = rgbToCSS(lerpColor(b.c0, b.c1, b.t));

        // — draw via Path2D with per-blob scale & shadow —
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.scale(b.size, b.size);
        // shadow settings
        ctx.shadowColor = "rgba(0,0,0,0.25)";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.fillStyle = color;
        const p2d = new Path2D(pathStr);
        ctx.fill(p2d);
        ctx.restore();
      });

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    // — handle resize —
    const onResize = () => {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        filter: "blur(40px)",
        mixBlendMode: "screen",
      }}
    />
  );
}
