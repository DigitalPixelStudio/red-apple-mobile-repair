"use client";
import Reveal from "./Reveal";
import { SERVICES, wa } from "@/lib/site";
import { track } from "@/lib/analytics";

export default function ServicesGrid() {
  return (
    <section id="repairs" className="section-apple bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#ff2d55]">Repair services</p>
          <h2 className="section-title font-apple mt-3 text-[#1d1d1f]">Every repair. <span className="gradient-text">One expert team.</span></h2>
          <p className="section-subtitle mx-auto mt-5">Hardware and software — handled by technicians who work on Apple devices every single day.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 80}>
              <div className={`group relative flex h-full flex-col rounded-[26px] p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                s.featured ? "bg-[#1d1d1f] text-white shadow-xl" : "glass"
              }`}>
                <div className="flex items-start justify-between">
                  <span className={`grid h-13 w-13 place-items-center rounded-[16px] p-3 text-[24px] ${s.featured ? "bg-white/10" : "bg-gradient-to-br from-[#ff2d55]/10 to-[#ff9500]/10"}`}>
                    {s.icon}
                  </span>
                  <span className={`text-[11px] font-semibold ${s.featured ? "text-white/60" : "text-[#86868b]"}`}>{s.time}</span>
                </div>
                <h3 className={`mt-5 font-apple text-[17px] font-bold ${s.featured ? "text-white" : "text-[#1d1d1f]"}`}>{s.title}</h3>
                <p className={`mt-2 text-[13px] leading-relaxed ${s.featured ? "text-white/70" : "text-[#86868b]"}`}>{s.desc}</p>
                <p className={`mt-2 text-[11.5px] font-semibold ${s.featured ? "text-[#ff9500]" : "text-[#ff2d55]"}`}>{s.devices}</p>
                <ul className={`mt-4 space-y-1.5 text-[12px] ${s.featured ? "text-white/70" : "text-[#6e6e73]"}`}>
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-1.5"><span className="text-[#30d158]">✓</span>{p}</li>
                  ))}
                </ul>
                <a
                  href={wa(`Hi! I need ${s.title}. Please share an estimate.`)}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { source: "services", service: s.title })}
                  className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-[12.5px] font-bold transition-all ${
                    s.featured ? "bg-white text-[#1d1d1f] hover:bg-white/90" : "bg-[#1d1d1f] text-white hover:opacity-90"
                  }`}
                >
                  💬 Get estimate
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
