"use client";
import Reveal from "./Reveal";
import { PROCESS_STEPS } from "@/lib/site";

export default function ProcessSection() {
  return (
    <section id="process" className="section-apple bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#ff2d55]">The Red Apple way</p>
          <h2 className="section-title font-apple mt-3 text-[#1d1d1f]">Simple, transparent, <span className="gradient-text">worry-free.</span></h2>
          <p className="section-subtitle mx-auto mt-5">You always know what&rsquo;s happening with your device — before, during and after the repair.</p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={(i % 3) * 90}>
              <div className="group relative h-full overflow-hidden rounded-[26px] glass p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="font-apple absolute -right-2 -top-4 text-[64px] font-black text-black/[0.05] transition-colors group-hover:text-[#ff2d55]/10">{s.step}</span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1d1d1f] text-[20px] shadow-lg">{s.icon}</span>
                <h3 className="mt-5 font-apple text-[17px] font-bold text-[#1d1d1f]">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#86868b]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
