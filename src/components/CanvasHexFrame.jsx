// CanvasHexFrame.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CanvasHexFrame() {
  const canvasRef = useRef(null);
  const shapesRef = useRef([]);
const stateRef = useRef({
    max: 0,
    mouse: { x: 0, y: 0, r: 0 },
    columns: 32,     // slightly calmer than 35
    rows: 28,
    baseScale: 0.98,
    minScale: 0.12,
    // Brand palette (lavender-heavy with purple/navy anchors)
    colors: [
      "#EAE4FE", "#EAE4FE", "#EAE4FE", // bias toward light lavender
      "#6C49B8",                       // brand purple
      "#3460B7",                       // cool tech blue
      "#1F2A44"                        // navy anchor (sparingly)
    ],
    rect: { left: 0, top: 0, width: 0, height: 0 }
  });

  const drawHex = (ctx, x, y, size, color) => {
    const angle = Math.PI / 3;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = i * angle;
      const px = x + size * Math.cos(a);
      const py = y + size * Math.sin(a);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.9;
    ctx.fill();
    ctx.globalAlpha = 1;
    // subtle edge so colors pop on light backgrounds
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.stroke();
  };

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d", { alpha: true });
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const buildGrid = () => {
      const st = stateRef.current;
      // crisp on retina
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      st.max = Math.max(innerWidth, innerHeight);
      st.mouse.r = st.max / 2.6;

      // CSS size
      c.style.width = innerWidth + "px";
      c.style.height = innerHeight + "px";
      // backing store size
      c.width = Math.floor(innerWidth * dpr);
      c.height = Math.floor(innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const rect = c.getBoundingClientRect();
      st.rect = { left: rect.left, top: rect.top };

      // rebuild shapes each time for consistent density
      const shapes = (shapesRef.current = []);
      const total = st.rows * st.columns;

      const hexSize = st.max / (st.columns + 1);
      const vSpace = hexSize / Math.tan(Math.PI / 6);

      for (let i = 0; i < total; i++) {
        const row = Math.floor(i / st.columns);
        const col = i % st.columns;
        const x = col * hexSize * 1.5 + 40; // slight inset
        const y = row * vSpace + (col % 2) * (vSpace / 2) + 40;

        const shape = {
          x,
          y,
          size: hexSize,
          scale: st.baseScale,
          scale2: 1,
          color: gsap.utils.random(st.colors)
        };
        shapes.push(shape);

        if (!prefersReduced && Math.random() > 0.5) {
          gsap
            .to(shape, {
              duration: 2,
              scale2: () => gsap.utils.random(0.65, 0.85),
              color: () => gsap.utils.random(st.colors),
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut"
            })
            .progress(Math.random());
        }
      }
    };

    const distance = (s, m) => Math.hypot(m.x - s.x, m.y - s.y);

    const render = () => {
      const st = stateRef.current;
      const shapes = shapesRef.current;
      ctx.clearRect(0, 0, c.width, c.height);

      for (const s of shapes) {
        if (!prefersReduced) {
          const d = distance(s, st.mouse);
          const target =
            d <= st.mouse.r
              ? Math.min(st.baseScale, 1 + (st.minScale - 1) * (1 - d / st.mouse.r))
              : st.baseScale;

          gsap.to(s, { duration: 3, ease: "power3", overwrite: false, scale: target });
        }
        drawHex(ctx, s.x, s.y, s.size * s.scale * s.scale2, s.color);
      }
    };

    const onPointerMove = e => {
      const st = stateRef.current;
      gsap.to(st.mouse, {
        x: e.clientX - st.rect.left,
        y: e.clientY - st.rect.top,
        duration: 0.2,
        overwrite: true
      });
    };

    const onResize = () => {
      buildGrid();
    };

    // initial build
    buildGrid();

    // seed mouse to center so it feels alive
    stateRef.current.mouse.x = innerWidth / 2;
    stateRef.current.mouse.y = innerHeight / 2;

    window.addEventListener("resize", onResize);
    // listen on window since the canvas is pointer-events none
    window.addEventListener("pointermove", onPointerMove);

    gsap.ticker.add(render);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      gsap.ticker.remove(render);
    };
  }, []);

  return (
     <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none" ></canvas>
  );
}
