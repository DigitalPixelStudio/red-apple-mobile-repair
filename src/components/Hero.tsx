"use client";
import { SITE, wa } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#f5f5f7]">
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5f5f7] to-[#f5f5f7]"/>
        <div className="absolute top-[5%] left-[10%] h-[500px] w-[500px] rounded-full bg-[#ff2d55]/[0.04] blur-[160px]"/>
        <div className="absolute bottom-[10%] right-[5%] h-[400px] w-[400px] rounded-full bg-[#ff9500]/[0.04] blur-[140px]"/>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-32 pb-20 text-center lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/60 px-5 py-2 text-[13px] font-medium text-[#86868b] shadow-sm backdrop-blur-sm">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#30d158]"/>
          Open now · Halasuru, Bangalore
        </div>

        <h1 className="hero-apple font-apple text-[#1d1d1f]">
          The best place
          <br />
          <span className="gradient-text">to fix your iPhone.</span>
        </h1>

        <p className="hero-sub mt-7 font-apple">
          Expert technicians. Genuine-grade parts. 90-day warranty. Most repairs done in 30 minutes while you wait — right next to Halasuru Metro.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#selector" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#ff2d55]/15 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-[#ff2d55]/25">
            Get your instant quote
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href={wa("Hi Red Apple! I need a repair. 🍎")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-4 text-[15px] font-semibold text-[#1d1d1f] shadow-sm transition-all hover:bg-black/[0.03]">
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Hero image */}
        <div className="mx-auto mt-16 max-w-[900px] overflow-hidden rounded-[32px] shadow-2xl shadow-black/10">
          <img src="https://images.unsplash.com/photo-1621768216002-5ac171876625?w=1200&q=80" alt="iPhone repair in progress at Red Apple" className="h-[300px] w-full object-cover sm:h-[450px] lg:h-[520px]" loading="eager"/>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-16 grid max-w-[700px] grid-cols-2 gap-8 border-t border-black/[0.06] pt-10 sm:grid-cols-4">
          {[
            { v: SITE.rating + "★", l: "from " + SITE.ratingCount + " reviews" },
            { v: SITE.avgRepairTime + " min", l: "average repair" },
            { v: SITE.warrantyDays + "-day", l: "warranty" },
            { v: SITE.customers, l: "devices fixed" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-apple text-[28px] font-bold text-[#1d1d1f] lg:text-[32px]">{s.v}</div>
              <div className="mt-1 text-[12px] text-[#86868b]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#1d1d1f]" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </div>
    </section>
  );
}
