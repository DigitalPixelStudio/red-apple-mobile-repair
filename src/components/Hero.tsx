"use client";

import { useRef, useState } from "react";
import { SITE, wa } from "@/lib/site";

export default function Hero() {
  const wrap = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -10, y: px * 12 });
  };

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[140px]" />
        <div className="absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-[-80px] h-72 w-72 rounded-full bg-red-500/10 blur-[100px]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            Halasuru · Bangalore · Open today {SITE.hours}
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Precision repair.
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              Premium care.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Bangalore&apos;s expert iPhone repair studio — genuine-grade parts, 90-day warranty,
            free doorstep pickup, and most repairs done in{" "}
            <span className="font-semibold text-white">30 minutes</span> while you wait.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#selector"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-red-500/30 transition-all hover:scale-[1.03] hover:shadow-red-500/50"
            >
              Get Instant Quote
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a
              href={wa("Hi Red Apple! I need an iPhone repair. Please help. 🍎")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              💬 WhatsApp Us
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
            >
              📞 {SITE.phone}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-7 sm:max-w-md">
            {[
              { v: SITE.rating + "★", l: `${SITE.ratingCount} reviews` },
              { v: "30 min", l: "avg. repair time" },
              { v: SITE.customers, l: "devices repaired" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-xl font-extrabold text-white sm:text-2xl">{s.v}</div>
                <div className="mt-0.5 text-[11px] leading-tight text-zinc-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D phone */}
        <div
          ref={wrap}
          onMouseMove={onMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          className="relative mx-auto w-full max-w-[380px] [perspective:1200px]"
        >
          <div
            className="relative transition-transform duration-200 ease-out"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            {/* phone frame */}
            <div className="relative mx-auto aspect-[9/19] w-full max-w-[300px] rounded-[2.6rem] border border-white/15 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black p-2 shadow-2xl shadow-black/80">
              <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-red-600 via-red-700 to-black">
                <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:18px_18px]" />
                <div className="absolute left-1/2 top-2.5 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
                <div className="absolute bottom-6 left-0 right-0 px-5">
                  <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                    <div className="text-[10px] uppercase tracking-widest text-red-200">Repair Status</div>
                    <div className="mt-1 text-sm font-bold text-white">Screen Replacement</div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-orange-300 to-white" />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-red-100">
                      <span>45 min</span><span>Done ✅</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating chips */}
            {[
              { top: "6%", left: "-10%", t: "🔋 Battery", s: "30 min" },
              { top: "30%", right: "-14%", t: "🪞 Back Glass", s: "60 min" },
              { bottom: "8%", left: "-14%", t: "📱 OLED Display", s: "45 min" },
            ].map((c, i) => (
              <div
                key={i}
                style={c as React.CSSProperties}
                className="absolute z-10 animate-float rounded-2xl border border-white/15 bg-zinc-950/90 px-4 py-2.5 shadow-xl backdrop-blur-xl"
              >
                <div className="text-xs font-bold text-white">{c.t}</div>
                <div className="text-[10px] text-zinc-400">{c.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* trusted strip */}
      <div className="relative mx-auto mt-16 max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-600">Repair specialists for</span>
          {["iPhone 16 Pro Max", "iPhone 15 Pro", "iPhone 14", "iPhone 13", "iPhone 12", "iPhone 11", "iPhone X", "& older"].map((m) => (
            <span key={m} className="text-xs font-semibold text-zinc-400">{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
