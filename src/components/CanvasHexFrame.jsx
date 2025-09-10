import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CanvasHexFrame() {
  const canvasRef = useRef(null);
  const shapesRef = useRef([]);
  const stateRef = useRef({
    max: 0,
    mouse: { x: 0, y: 0, r: 0 },
    columns: 35,
    rows: 35,
    baseScale: 0.98,
    minScale: 0.12,
    colors: ["rgb(0,0,99)", "rgb(200,50,200)", "rgb(23,23,223)", "rgb(80,80,235)"],
    rect: { left: 0, top: 0 }
  });

  // Draw one hex
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
    ctx.fill();
  };

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d", { alpha: true });

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setSizes = () => {
      const st = stateRef.current;
      st.max = Math.max(innerWidth, innerHeight);
      st.mouse.r = st.max / 2.6;
      c.width = innerWidth;
      c.height = innerHeight;
      const rect = c.getBoundingClientRect();
      st.rect = { left: rect.left, top: rect.top };

      const shapes = shapesRef.current;
      const total = st.rows * st.columns;
      const hexSize = st.max / (st.columns + 1);
      const vSpace = hexSize / Math.tan(Math.PI / 6);

      for (let i = 0; i < total; i++) {
        const row = Math.floor(i / st.columns);
        const col = i % st.columns;
        const x = col * hexSize * 1.5 + 40;     // slight inset from edges
        const y = row * vSpace + (col % 2) * (vSpace / 2) + 40;

        if (shapes.length < total) {
          const shape = {
            x, y,
            size: hexSize,
            scale: st.baseScale,
            scale2: 1,
            color: gsap.utils.random(st.colors)
          };
          shapes.push(shape);

          if (!prefersReduced && Math.random() > 0.5) {
            gsap.to(shape, {
              duration: 2,
              scale2: () => gsap.utils.random(0.65, 0.85),
              color: () => gsap.utils.random(st.colors),
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut"
            }).progress(Math.random());
          }
        } else {
          shapes[i].x = x;
          shapes[i].y = y;
          shapes[i].size = hexSize;
        }
      }
    };

    const distance = (shape, mouse) => {
      const dx = mouse.x - shape.x;
      const dy = mouse.y - shape.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const render = () => {
      const st = stateRef.current;
      const shapes = shapesRef.current;
      ctx.clearRect(0, 0, c.width, c.height);

      for (const s of shapes) {
        if (!prefersReduced) {
          const d = distance(s, st.mouse);
          const target =
            d <= st.mouse.r
              ? Math.min(
                  st.baseScale,
                  1 + (st.minScale - 1) * (1 - d / st.mouse.r)
                )
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

    const onResize = () => setSizes();

    setSizes();
    window.addEventListener("resize", onResize);
    c.addEventListener("pointermove", onPointerMove);
    c.addEventListener("pointerleave", () =>
      onPointerMove({ clientX: innerWidth / 2, clientY: innerHeight / 2 })
    );

    // GSAP ticker keeps your original feel
    const ticker = gsap.ticker.add(render);

    return () => {
      window.removeEventListener("resize", onResize);
      c.removeEventListener("pointermove", onPointerMove);
      gsap.ticker.remove(render);
    };
  }, []);

  // The canvas sits behind everything and never intercepts clicks
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
