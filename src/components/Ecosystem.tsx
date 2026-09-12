"use client";
import Reveal from "./Reveal";
import { DEVICE_FAMILIES, wa } from "@/lib/site";
import { track } from "@/lib/analytics";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-apple bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#ff2d55]">The whole Apple ecosystem</p>
          <h2 className="section-title font-apple mt-3 text-[#1d1d1f]">One specialist store for <span className="gradient-text">every Apple device.</span></h2>
          <p className="section-subtitle mx-auto mt-5">From the latest iPhone 16 Pro Max to a classic iPod — if Apple made it, we can fix it.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {DEVICE_FAMILIES.map((d, i) => (
            <Reveal key={d.id} delay={i * 60}>
              <a
                href={d.id === "software" ? "#software" : "#quote"}
                onClick={() => track("service_view", { service: d.name })}
                className="group block h-full rounded-[26px] glass p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/[0.07]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-[18px] bg-gradient-to-br from-[#ff2d55]/10 to-[#ff9500]/10 text-[26px] transition-transform group-hover:scale-110">
                    {d.icon}
                  </span>
                  <span className="rounded-full border border-black/[0.06] bg-white/70 px-2.5 py-1 text-[10.5px] font-semibold text-[#86868b]">{d.tag}</span>
                </div>
                <h3 className="mt-5 font-apple text-[17px] font-bold text-[#1d1d1f]">{d.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#86868b]">{d.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-bold text-[#ff2d55] opacity-0 transition-opacity group-hover:opacity-100">
                  Get a quote →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={120}>
          <a href={wa("Hi! Which Apple devices do you repair?")} target="_blank" rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { source: "ecosystem" })}
            className="cta-outline">
            💬 Not sure? Ask us on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
