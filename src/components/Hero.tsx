"use client";
import { SITE, wa } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Cinematic gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a14] via-[#0a0a0a] to-[#000]"/>
        <div className="absolute top-[10%] left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#ff2d55]/8 blur-[180px]"/>
        <div className="absolute bottom-[10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#ff9500]/5 blur-[140px]"/>
        <div className="absolute top-[20%] left-[-5%] h-[300px] w-[300px] rounded-full bg-[#ff2d55]/5 blur-[120px]"/>
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:40px_40px]"/>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-32 pb-20 text-center lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2 text-[13px] font-medium text-[#86868b] backdrop-blur-sm">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#30d158]"/>
          Open now · Halasuru, Bangalore
        </div>

        {/* Apple-style massive heading */}
        <h1 className="hero-apple font-apple text-white">
          The best place
          <br />
          <span className="gradient-text">to fix your iPhone.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-[600px] font-apple text-[17px] leading-[1.6] text-[#86868b] lg:text-[19px]">
          Expert technicians. Genuine-grade parts. 90-day warranty. Most repairs done in 30 minutes while you wait — right next to Halasuru Metro.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#selector" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-[#ff2d55]/20 transition-all hover:scale-[1.03] hover:shadow-[#ff2d55]/35">
            Get your instant quote
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a href={wa("Hi Red Apple! I need a repair. 🍎")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-7 py-4 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/[0.08]">
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Stats row — Apple minimal style */}
        <div className="mx-auto mt-20 grid max-w-[700px] grid-cols-2 gap-8 border-t border-white/[0.06] pt-10 sm:grid-cols-4">
          {[
            { v: SITE.rating + "★", l: "from " + SITE.ratingCount + " reviews" },
            { v: SITE.avgRepairTime + " min", l: "average repair" },
            { v: SITE.warrantyDays + "-day", l: "warranty on all repairs" },
            { v: SITE.customers, l: "devices fixed" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-apple text-[28px] font-bold text-white lg:text-[32px]">{s.v}</div>
              <div className="mt-1 text-[12px] text-[#86868b]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </div>
    </section>
  );
}
