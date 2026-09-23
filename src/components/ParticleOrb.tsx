"use client";

import { useEffect, useRef } from "react";

interface Particle {
  theta: number;       // position along the ring
  phi: number;         // tilt offset
  radiusOffset: number;
  size: number;
  speed: number;
  brightness: number;
  scatter: number;     // how far from the ring path
  scatterAngle: number;
}

interface Wisp {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  brightness: number;
  originTheta: number;
}

export default function ParticleOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 220;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const mainRadius = 72;

    // Ring tilt angles (to create 3D tilted crescent)
    const tiltX = 0.35;
    const tiltZ = -0.2;

    // Create ring particles — concentrated along the crescent arc
    const particles: Particle[] = [];
    const particleCount = 350;

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      
      // Density variation — more particles on the bright crescent side (top-right)
      const densityBias = Math.random();
      if (densityBias > 0.6 && theta > Math.PI * 0.8 && theta < Math.PI * 1.8) {
        // Skip some particles in the dim area to create crescent effect
        if (Math.random() > 0.3) continue;
      }

      const scatter = (Math.random() - 0.5) * 18 * (1 + Math.random());
      const scatterAngle = Math.random() * Math.PI * 2;

      particles.push({
        theta,
        phi: (Math.random() - 0.5) * 0.6,
        radiusOffset: mainRadius + (Math.random() - 0.5) * 8,
        size: 0.3 + Math.random() * 1.5,
        speed: 0.007 + Math.random() * 0.001,
        brightness: 0.3 + Math.random() * 0.7,
        scatter,
        scatterAngle,
      });
    }

    // Extra dense particles on the bright crescent arc
    for (let i = 0; i < 150; i++) {
      // Concentrate on the bright side (top-right crescent)
      const theta = (Math.random() * Math.PI * 1.2) - Math.PI * 0.3;
      
      particles.push({
        theta,
        phi: (Math.random() - 0.5) * 0.3,
        radiusOffset: mainRadius + (Math.random() - 0.5) * 5,
        size: 0.4 + Math.random() * 1.2,
        speed: 0.007 + Math.random() * 0.001,
        brightness: 0.6 + Math.random() * 0.4,
        scatter: (Math.random() - 0.5) * 10,
        scatterAngle: Math.random() * Math.PI * 2,
      });
    }

    // Wispy tendril particles
    const wisps: Wisp[] = [];
    const wispCount = 60;

    function createWisp(): Wisp {
      const originTheta = Math.random() * Math.PI * 2;
      // More wisps from the bottom area
      const fromBottom = originTheta > Math.PI * 0.5 && originTheta < Math.PI * 1.5;
      const r = mainRadius + (Math.random() - 0.5) * 10;

      const cosT = Math.cos(originTheta);
      const sinT = Math.sin(originTheta);
      const x3d = r * cosT;
      const y3d = r * sinT * Math.cos(tiltX);
      
      return {
        x: cx + x3d,
        y: cy + y3d,
        vx: (Math.random() - 0.5) * 0.4 + (fromBottom ? (Math.random() - 0.5) * 0.6 : 0),
        vy: fromBottom ? Math.random() * 0.5 + 0.2 : (Math.random() - 0.5) * 0.4,
        life: 0,
        maxLife: 40 + Math.random() * 60,
        size: 0.3 + Math.random() * 1.0,
        brightness: 0.15 + Math.random() * 0.25,
        originTheta,
      };
    }

    for (let i = 0; i < wispCount; i++) {
      const w = createWisp();
      w.life = Math.random() * w.maxLife;
      wisps.push(w);
    }

    let time = 0;
    let animId: number;

    let lastTime = 0;

    function project3D(theta: number, phi: number, radius: number, scatterX: number, scatterY: number) {
      // Position on ring
      let x = radius * Math.cos(theta);
      let y = radius * Math.sin(theta);
      let z = radius * Math.sin(phi) * 0.3;

      // Tilt around X axis
      const y1 = y * Math.cos(tiltX) - z * Math.sin(tiltX);
      const z1 = y * Math.sin(tiltX) + z * Math.cos(tiltX);

      // Tilt around Z axis
      const x2 = x * Math.cos(tiltZ) - y1 * Math.sin(tiltZ);
      const y2 = x * Math.sin(tiltZ) + y1 * Math.cos(tiltZ);

      // Add scatter
      const screenX = cx + x2 + scatterX;
      const screenY = cy + y2 + scatterY;

      // Depth-based opacity (front brighter, back dimmer)
      const depthFactor = 0.35 + (z1 + radius) / (radius * 2) * 0.65;

      return { screenX, screenY, depth: z1, depthFactor };
    }

    function draw(timestamp: number) {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      ctx!.clearRect(0, 0, size, size);
      
      // Update time based on real elapsed time (16.6ms is roughly 60fps)
      // 0.012 per frame at 60fps = ~0.00072 per ms
      time += deltaTime * 0.00072;

      // Ambient silver glow — left side
      const glow1 = ctx!.createRadialGradient(cx - 25, cy + 15, 0, cx - 25, cy + 15, 85);
      glow1.addColorStop(0, "rgba(200, 210, 230, 0.12)");
      glow1.addColorStop(0.5, "rgba(200, 210, 230, 0.04)");
      glow1.addColorStop(1, "transparent");
      ctx!.fillStyle = glow1;
      ctx!.fillRect(0, 0, size, size);

      // Ambient glow — top right (brighter, crescent side)
      const glow2 = ctx!.createRadialGradient(cx + 30, cy - 25, 0, cx + 30, cy - 25, 80);
      glow2.addColorStop(0, "rgba(220, 225, 240, 0.14)");
      glow2.addColorStop(0.5, "rgba(220, 225, 240, 0.05)");
      glow2.addColorStop(1, "transparent");
      ctx!.fillStyle = glow2;
      ctx!.fillRect(0, 0, size, size);

      // ── Subtle moon sphere in center ──
      const moonRadius = 32;
      // Base moon gradient (subtle crescent lighting)
      const moonGrad = ctx!.createRadialGradient(
        cx - 8, cy - 6, moonRadius * 0.1,
        cx + 4, cy + 4, moonRadius * 1.1
      );
      moonGrad.addColorStop(0, "rgba(180, 190, 210, 0.06)");
      moonGrad.addColorStop(0.5, "rgba(140, 150, 170, 0.04)");
      moonGrad.addColorStop(0.85, "rgba(100, 110, 130, 0.02)");
      moonGrad.addColorStop(1, "transparent");
      ctx!.fillStyle = moonGrad;
      ctx!.beginPath();
      ctx!.arc(cx, cy, moonRadius, 0, Math.PI * 2);
      ctx!.fill();

      // Subtle grainy texture on moon (random dots)
      ctx!.save();
      ctx!.globalAlpha = 0.03;
      ctx!.beginPath();
      ctx!.arc(cx, cy, moonRadius, 0, Math.PI * 2);
      ctx!.clip();
      for (let i = 0; i < 200; i++) {
        const gx = cx + (Math.random() - 0.5) * moonRadius * 2;
        const gy = cy + (Math.random() - 0.5) * moonRadius * 2;
        const gs = 0.3 + Math.random() * 0.8;
        ctx!.fillStyle = Math.random() > 0.5 ? "rgba(255,255,255,0.6)" : "rgba(120,130,150,0.5)";
        ctx!.beginPath();
        ctx!.arc(gx, gy, gs, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.restore();

      // Thin edge highlight on moon
      ctx!.save();
      ctx!.globalAlpha = 0.04;
      ctx!.strokeStyle = "rgba(200, 210, 230, 0.5)";
      ctx!.lineWidth = 0.5;
      ctx!.beginPath();
      ctx!.arc(cx, cy, moonRadius, 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.restore();

      // ── Draw ring particles ──
      const projected = particles.map((p) => {
        const currentTheta = p.theta + time * p.speed * 10;
        const scX = Math.cos(p.scatterAngle) * p.scatter;
        const scY = Math.sin(p.scatterAngle) * p.scatter;
        const proj = project3D(currentTheta, p.phi, p.radiusOffset, scX, scY);

        // Crescent brightness: bright spot rotates around the ring (wider spread)
        const crescentCenter = time * 0.5;
        const angleDiff = Math.cos(currentTheta - crescentCenter);
        const crescentFactor = 0.2 + Math.max(0, angleDiff) * 0.8 + Math.max(0, angleDiff * angleDiff) * 0.3;

        return {
          ...proj,
          size: p.size,
          brightness: p.brightness * proj.depthFactor * crescentFactor,
        };
      });

      // Sort by depth
      projected.sort((a, b) => a.depth - b.depth);

      for (const p of projected) {
        const alpha = Math.min(1, p.brightness);
        const sz = p.size * (0.7 + p.depthFactor * 0.5);

        if (alpha < 0.05) continue;

        // Silver color with varying warmth
        const silver = Math.floor(190 + p.brightness * 60);
        const silverB = Math.floor(200 + p.brightness * 55);

        // Glow for brighter particles
        if (sz > 0.5 && alpha > 0.15) {
          const glow = ctx!.createRadialGradient(
            p.screenX, p.screenY, 0,
            p.screenX, p.screenY, sz * 7
          );
          glow.addColorStop(0, `rgba(${silver}, ${silver}, ${silverB}, ${alpha * 0.35})`);
          glow.addColorStop(0.5, `rgba(${silver}, ${silver}, ${silverB}, ${alpha * 0.1})`);
          glow.addColorStop(1, "transparent");
          ctx!.fillStyle = glow;
          ctx!.beginPath();
          ctx!.arc(p.screenX, p.screenY, sz * 7, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Core dot
        ctx!.fillStyle = `rgba(${silver}, ${silver}, ${silverB}, ${alpha})`;
        ctx!.beginPath();
        ctx!.arc(p.screenX, p.screenY, sz, 0, Math.PI * 2);
        ctx!.fill();
      }

      // ── Draw bright crescent arc highlight ──
      ctx!.save();
      ctx!.globalCompositeOperation = "lighter";

      // Main bright arc — rotates with time (wider)
      const arcCenter = time * 0.5;
      for (let i = 0; i < 120; i++) {
        const t = arcCenter - Math.PI * 0.75 + (i / 120) * Math.PI * 1.5;
        const proj = project3D(t, 0, mainRadius, 0, 0);
        const arcBrightness = Math.sin((i / 120) * Math.PI) * 0.7;
        
        ctx!.fillStyle = `rgba(230, 235, 245, ${arcBrightness * proj.depthFactor})`;
        ctx!.beginPath();
        ctx!.arc(proj.screenX, proj.screenY, 1.5, 0, Math.PI * 2);
        ctx!.fill();

        // Stronger glow along arc
        const arcGlow = ctx!.createRadialGradient(
          proj.screenX, proj.screenY, 0,
          proj.screenX, proj.screenY, 12
        );
        arcGlow.addColorStop(0, `rgba(220, 225, 240, ${arcBrightness * 0.2 * proj.depthFactor})`);
        arcGlow.addColorStop(0.5, `rgba(210, 215, 235, ${arcBrightness * 0.06 * proj.depthFactor})`);
        arcGlow.addColorStop(1, "transparent");
        ctx!.fillStyle = arcGlow;
        ctx!.beginPath();
        ctx!.arc(proj.screenX, proj.screenY, 12, 0, Math.PI * 2);
        ctx!.fill();
      }

      ctx!.restore();

      // ── Draw wisps / tendrils ──
      for (let i = 0; i < wisps.length; i++) {
        const w = wisps[i];
        w.x += w.vx;
        w.y += w.vy;
        w.life++;

        if (w.life >= w.maxLife) {
          wisps[i] = createWisp();
          continue;
        }

        const lifeRatio = w.life / w.maxLife;
        const fadeIn = Math.min(1, lifeRatio * 5);
        const fadeOut = 1 - Math.pow(lifeRatio, 2);
        const alpha = w.brightness * fadeIn * fadeOut;

        if (alpha < 0.01) continue;

        ctx!.fillStyle = `rgba(195, 205, 220, ${alpha})`;
        ctx!.beginPath();
        ctx!.arc(w.x, w.y, w.size * fadeOut, 0, Math.PI * 2);
        ctx!.fill();

        // Small glow
        if (w.size > 0.5) {
          const wGlow = ctx!.createRadialGradient(w.x, w.y, 0, w.x, w.y, w.size * 4);
          wGlow.addColorStop(0, `rgba(210, 215, 230, ${alpha * 0.15})`);
          wGlow.addColorStop(1, "transparent");
          ctx!.fillStyle = wGlow;
          ctx!.beginPath();
          ctx!.arc(w.x, w.y, w.size * 4, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-[220px] h-[220px]"
      style={{ imageRendering: "auto" }}
    />
  );
}
