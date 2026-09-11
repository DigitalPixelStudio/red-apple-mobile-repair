import { REPAIRS, wa } from "@/lib/site";
import Reveal from "./Reveal";

export default function Services() {
  const bentoItems = REPAIRS.filter((r) => r.bento);
  const normalItems = REPAIRS.filter((r) => !r.bento);

  return (
    <section id="repairs" className="section-apple">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Every iPhone repair</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Specialist repairs.<br/>Transparent pricing.</h2>
          <p className="section-subtitle mx-auto mt-5">Indicative starting prices. Final quote after free diagnosis. Every repair backed by a 90-day warranty.</p>
        </Reveal>

        {/* Bento grid — featured repairs */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bentoItems.map((r, i) => (
            <Reveal key={r.id} delay={i * 80} className="glass-card group relative overflow-hidden rounded-[28px] p-8 transition-all duration-500 hover:border-[#ff2d55]/20 hover:shadow-2xl hover:shadow-[#ff2d55]/5 lg:row-span-1">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ff2d55]/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"/>
              <div className="flex items-start justify-between">
                <span className="text-4xl">{r.icon}</span>
                <span className="rounded-full bg-[#ff9500]/10 px-4 py-1.5 text-[12px] font-bold text-[#ff9500]">from {r.price}</span>
              </div>
              <h3 className="mt-5 font-apple text-[20px] font-bold text-[#1d1d1f]">{r.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#86868b]">{r.desc}</p>
              <div className="mt-5 flex items-center justify-between text-[13px]">
                <span className="text-[#86868b]">⏱️ {r.time}</span>
                <a href={wa(`Hi! Quote for ${r.name} (${r.price}) 🍎`)} target="_blank" rel="noopener noreferrer"
                  className="font-semibold text-[#ff2d55] transition-colors hover:text-[#ff9500]">Get Quote →</a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Normal grid */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {normalItems.map((r, i) => (
            <Reveal key={r.id} delay={i * 60} className="glass-card group rounded-[24px] p-6 transition-all duration-300 hover:border-[#ff2d55]/20">
              <div className="flex items-start justify-between">
                <span className="text-2xl">{r.icon}</span>
                <span className="text-[12px] font-bold text-[#ff9500]">from {r.price}</span>
              </div>
              <h3 className="mt-3 font-apple text-[16px] font-bold text-[#1d1d1f]">{r.name}</h3>
              <p className="mt-1 text-[13px] text-[#86868b]">{r.desc}</p>
              <div className="mt-3 flex items-center justify-between text-[12px]">
                <span className="text-[#86868b]">⏱️ {r.time}</span>
                <a href={wa(`Hi! Quote for ${r.name} 🍎`)} target="_blank" rel="noopener noreferrer"
                  className="font-semibold text-[#ff2d55]">Get Quote →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
