import { TIPS } from "@/lib/site";
import Reveal from "./Reveal";

export default function Tips() {
  return (
    <section className="section-apple">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Care guide</p>
          <h2 className="section-title font-apple text-white mt-3">Make it <span className="gradient-text">last longer.</span></h2>
          <p className="section-subtitle mx-auto mt-5">Six habits that protect your iPhone and save you from expensive repairs.</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TIPS.map((t, i) => (
            <Reveal key={t.title} delay={i * 60} className="glass-card rounded-[24px] p-6">
              <div className="text-2xl">{t.icon}</div>
              <h3 className="mt-3 font-apple text-[15px] font-bold text-white">{t.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-[#86868b]">{t.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
