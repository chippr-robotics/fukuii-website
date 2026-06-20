"use client";

import { useEffect, useRef } from "react";

interface HexCell {
  x: number;
  y: number;
}

interface Node {
  x: number;
  y: number;
  phase: number;
  speed: number;
}

function isDark(): boolean {
  if (typeof document === "undefined") return true;
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "light") return false;
  if (theme === "dark") return true;
  return !window.matchMedia("(prefers-color-scheme: light)").matches;
}

export function HexCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const HEX_SIZE = 48;
    const HEX_W = HEX_SIZE * Math.sqrt(3);
    const HEX_H = HEX_SIZE * 2;

    let hexCells: HexCell[] = [];
    let nodes: Node[] = [];
    let animId: number;
    let logicalW = 0;
    let logicalH = 0;

    function buildGrid(w: number, h: number) {
      hexCells = [];
      nodes = [];
      const cols = Math.ceil(w / HEX_W) + 2;
      const rows = Math.ceil(h / (HEX_H * 0.75)) + 2;
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * HEX_W + (row % 2 === 0 ? 0 : HEX_W / 2);
          const y = row * (HEX_H * 0.75);
          hexCells.push({ x, y });

          // ~22% of cells become a node, scattered off the exact hex center
          if (Math.random() < 0.22) {
            const scatter = HEX_SIZE * 0.55;
            nodes.push({
              x: x + (Math.random() - 0.5) * scatter,
              y: y + (Math.random() - 0.5) * scatter,
              phase: Math.random() * Math.PI * 2,
              speed: 0.18 + Math.random() * 0.18,
            });
          }
        }
      }
    }

    function drawHex(x: number, y: number, size: number, color: string) {
      ctx!.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        i === 0 ? ctx!.moveTo(px, py) : ctx!.lineTo(px, py);
      }
      ctx!.closePath();
      ctx!.strokeStyle = color;
      ctx!.lineWidth = 0.6;
      ctx!.stroke();
    }

    function resize() {
      const dpr = window.devicePixelRatio ?? 1;
      const rect = canvas!.getBoundingClientRect();
      const w = Math.floor(rect.width);
      const h = Math.floor(rect.height);
      if (w === 0 || h === 0) return;
      logicalW = w;
      logicalH = h;
      canvas!.width = logicalW * dpr;
      canvas!.height = logicalH * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid(logicalW, logicalH);
    }

    function draw(time: number) {
      if (logicalW === 0 || logicalH === 0) {
        animId = requestAnimationFrame(draw);
        return;
      }

      const dark = isDark();
      const t = time / 1000;

      // Wave constants — two interfering diagonal waves for organic movement
      const W1_SPEED = 0.30;
      const W1_FX    = 0.0065;
      const W1_FY    = 0.0038;
      const W2_SPEED = 0.20;
      const W2_FX    = -0.0032;
      const W2_FY    =  0.0055;

      ctx!.clearRect(0, 0, logicalW, logicalH);

      // 1. Hex grid with travelling wave gradient on lines
      const cr = dark ? 80  : 45;
      const cg = dark ? 160 : 107;
      const cb = dark ? 96  : 64;
      const baseOpacity  = dark ? 0.07 : 0.10;
      const waveOpacity  = dark ? 0.24 : 0.20;

      hexCells.forEach((cell) => {
        const w1 = (Math.sin(t * W1_SPEED - cell.x * W1_FX - cell.y * W1_FY) + 1) / 2;
        const w2 = (Math.sin(t * W2_SPEED + cell.x * W2_FX - cell.y * W2_FY) + 1) / 2;
        const wave = (w1 + w2) / 2;
        const opacity = baseOpacity + wave * waveOpacity;
        drawHex(cell.x, cell.y, HEX_SIZE - 2, `rgba(${cr},${cg},${cb},${opacity.toFixed(3)})`);
      });

      // 2. Compute node pulses
      const GLOW_THRESHOLD = 0.82;
      const pulses = nodes.map((n) => (Math.sin(t * n.speed + n.phase) + 1) / 2);

      // 3. Active nodes → connecting lines
      const MAX_DIST = HEX_W * 3.2;
      const active: number[] = [];
      for (let i = 0; i < nodes.length; i++) {
        if ((pulses[i] ?? 0) > GLOW_THRESHOLD) active.push(i);
      }

      const connected = new Set<number>();
      for (let ai = 0; ai < active.length; ai++) {
        const i = active[ai]!;
        if (connected.has(i)) continue;
        const ni = nodes[i]!;
        const pi = pulses[i] ?? 0;

        for (let aj = ai + 1; aj < active.length; aj++) {
          const j = active[aj]!;
          if ((i + j) % 3 !== 0) continue;
          if (connected.has(j)) continue;
          const nj = nodes[j]!;
          if (Math.hypot(nj.x - ni.x, nj.y - ni.y) > MAX_DIST) continue;

          const minP = Math.min(pi, pulses[j] ?? 0);
          const opacity = ((minP - GLOW_THRESHOLD) / (1 - GLOW_THRESHOLD)) * 0.55;
          ctx!.beginPath();
          ctx!.moveTo(ni.x, ni.y);
          ctx!.lineTo(nj.x, nj.y);
          ctx!.strokeStyle = `rgba(${cr},${cg},${cb},${opacity.toFixed(3)})`;
          ctx!.lineWidth = 0.5;
          ctx!.stroke();

          connected.add(i);
          connected.add(j);
          break;
        }
      }

      // 4. Draw nodes
      const glowColor  = dark ? "rgba(112, 192, 128, 0.85)" : "rgba(80, 160, 96, 0.65)";
      const nodeColor  = dark ? "rgba(80, 160, 96, 0.70)"  : "rgba(45, 107, 64, 0.55)";
      const dimColor   = dark ? "rgba(80, 160, 96, 0.32)"  : "rgba(45, 107, 64, 0.28)";

      nodes.forEach((n, i) => {
        const pulse = pulses[i] ?? 0;
        if (pulse > 0.85) {
          const r = (3 + pulse * 4) / 2;
          const grad = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 3);
          grad.addColorStop(0, glowColor);
          grad.addColorStop(1, "rgba(112,192,128,0)");
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, r * 3, 0, Math.PI * 2);
          ctx!.fillStyle = grad;
          ctx!.fill();
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
          ctx!.fillStyle = nodeColor;
          ctx!.fill();
        } else if (pulse > 0.5) {
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, 0.75, 0, Math.PI * 2);
          ctx!.fillStyle = dimColor;
          ctx!.fill();
        }
      });

      animId = requestAnimationFrame(draw);
    }

    resize();
    animId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => { resize(); });
    ro.observe(canvas);

    const mo = new MutationObserver(() => {
      const dpr = window.devicePixelRatio ?? 1;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.6,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
