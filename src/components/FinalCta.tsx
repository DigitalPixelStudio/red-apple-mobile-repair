"use client";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";
import { track } from "@/lib/analytics";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#1d1d1f] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[-20%] h-[400px] w-[400px] rounded-full bg-[#ff2d55]/[0.18] blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[10%] h-[400px] w-[400px] rounded-full bg-[#ff9500]/[0.15] blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-[820px] px-6 text-center lg:px-8">
        <Reveal>
          <div className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#ff2d55] to-[#ff9500] text-[28px] shadow-2xl shadow-[#ff2d55]/40">🍎</div>
          <h2 className="font-apple text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight">
            Your Apple device,<br /><span className="gradient-text">fixed right.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-relaxed text-white/60">
            Tell us the device and the issue — we&rsquo;ll reply with an exact estimate and a slot, usually within minutes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#quote" onClick={() => track("quote_started", { source: "final_cta" })} className="cta-primary">Get Instant Estimate</a>
            <a href={SITE.phoneHref} onClick={() => track("call_click", { source: "final_cta" })} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-[15px] font-bold backdrop-blur-xl transition-all hover:bg-white/20">📞 {SITE.phone}</a>
          </div>
          <p className="mt-6 text-[12.5px] text-white/40">Free diagnosis · No hidden charges · Pay only when it works</p>
        </Reveal>
      </div>
    </section>
  );
}
