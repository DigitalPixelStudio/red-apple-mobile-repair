"use client";
import { SITE, wa } from "@/lib/site";
import { track } from "@/lib/analytics";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#f5f5f7]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5f5f7] to-white" />
        <div className="absolute left-[8%] top-[8%] h-[520px] w-[520px] rounded-full bg-[#ff2d55]/[0.07] blur-[160px]" />
        <div className="absolute bottom-[6%] right-[6%] h-[460px] w-[460px] rounded-full bg-[#ff9500]/[0.08] blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.03]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 pt-32 text-center lg:px-8">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-[13px] font-semibold text-[#1d1d1f]">
          <span className="flex h-2 w-2 rounded-full bg-[#30d158]"><span className="h-full w-full animate-ping rounded-full bg-[#30d158] opacity-70" /></span>
          Open now · {SITE.area} · {SITE.hours.split("(")[0].trim()}
        </div>

        <h1 className="hero-apple font-apple text-[#1d1d1f]">
          Apple repairs,
          <br />
          <span className="gradient-text">mastered.</span>
        </h1>

        <p className="hero-sub mt-7 font-apple">
          iPhone · iPad · AirPods · Apple Watch · MacBook. Displays, back glass, batteries,
          water damage, firmware & data recovery — done right, done fast, with a 90-day warranty.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#quote" onClick={() => track("quote_started", { source: "hero" })} className="cta-primary">
            Get Instant Estimate →
          </a>
          <a
            href={wa("Hi Red Apple Mobile Repair! I need help with my Apple device. 🍎")}
            target="_blank" rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { source: "hero" })}
            className="cta-outline"
          >
            💬 WhatsApp Us
          </a>
        </div>

        <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] font-medium text-[#86868b]">
          <span>✅ 4.9★ Google rating</span>
          <span>✅ 90-day warranty</span>
          <span>✅ Free pickup &amp; drop</span>
          <span>✅ Most repairs in 30 min</span>
        </div>

        {/* Device showcase */}
        <div className="tilt-wrap mx-auto mt-16 max-w-[900px]">
          <div className="tilt-inner grid grid-cols-2 gap-4 md:grid-cols-5">
            {[
              { label: "iPhone", sub: "Display · Back glass · Battery", emoji: "📱", grad: "from-[#ff2d55] to-[#ff9500]" },
              { label: "iPad", sub: "Screens & logic boards", emoji: "🖥️", grad: "from-[#ff9500] to-[#ff5e3a]" },
              { label: "Apple Watch", sub: "Screens · battery · sensors", emoji: "⌚", grad: "from-[#ff5e3a] to-[#ff2d55]" },
              { label: "AirPods", sub: "Battery & case repair", emoji: "🎧", grad: "from-[#ff2d55] to-[#ff9500]" },
              { label: "MacBook & Mac", sub: "Display · battery · boards", emoji: "💻", grad: "from-[#ff9500] to-[#ff2d55]" },
            ].map((d) => (
              <div key={d.label} className={`glass-card rounded-3xl p-5 text-left col-span-2 md:col-span-1 ${d.label === "iPhone" ? "row-span-1" : ""}`}>
                <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${d.grad} text-[22px] shadow-lg`}>{d.emoji}</div>
                <div className="mt-4 text-[14.5px] font-bold text-[#1d1d1f]">{d.label}</div>
                <div className="mt-1 text-[11.5px] leading-relaxed text-[#86868b]">{d.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
