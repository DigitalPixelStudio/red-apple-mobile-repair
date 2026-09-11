"use client";
import { useRef, useState, useEffect } from "react";
import Reveal from "./Reveal";

const CASES = [
  { before: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=800&q=80", after: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80", label: "Screen Replacement" },
  { before: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80", after: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80", label: "Water Damage Revival" },
  { before: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80", after: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80", label: "Battery Health Restore" },
];

function Slider({ before, after, label }: { before: string; after: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = (x: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(5, Math.min(95, ((x - r.left) / r.width) * 100)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      update(x);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onUp); };
  }, []);

  return (
    <div className="rounded-[28px] overflow-hidden shadow-lg shadow-black/5">
      <div ref={ref} className="ba-slider relative aspect-[4/3]"
        onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
        onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX); }}>
        <div className="ba-before">
          <img src={before} alt={`Before — ${label}`} className="h-full w-full object-cover" loading="lazy"/>
          <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-sm">Before</span>
        </div>
        <div className="ba-after" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={after} alt={`After — ${label}`} className="h-full w-full object-cover" loading="lazy"/>
          <span className="absolute bottom-4 right-4 rounded-full bg-[#ff2d55]/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-sm">After</span>
        </div>
        <div className="ba-handle" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#1d1d1f]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 4l-6 8 6 8M16 4l6 8-6 8"/></svg>
          </div>
        </div>
      </div>
      <div className="bg-white p-5">
        <div className="text-[15px] font-bold text-[#1d1d1f]">{label}</div>
        <div className="text-[13px] text-[#86868b]">Drag to compare · Real customer device</div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="section-apple bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Real results</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">See the <span className="gradient-text">difference.</span></h2>
          <p className="section-subtitle mx-auto mt-5">Drag the slider to see actual before and after transformations from our workshop.</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <Slider before={c.before} after={c.after} label={c.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
