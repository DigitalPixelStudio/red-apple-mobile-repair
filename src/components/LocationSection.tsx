"use client";
import Reveal from "./Reveal";
import { SITE, wa } from "@/lib/site";
import { track } from "@/lib/analytics";

const INFO = [
  { icon: "📍", label: "Address", value: SITE.address },
  { icon: "🕙", label: "Timings", value: SITE.hours },
  { icon: "🚇", label: "Metro", value: "Halasuru Metro — 1 min walk" },
  { icon: "🚗", label: "Pickup & drop", value: "Free across Bengaluru" },
];

export default function LocationSection() {
  return (
    <section id="visit" className="section-apple bg-[#f5f5f7]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#ff2d55]">Visit us</p>
          <h2 className="section-title font-apple mt-3 text-[#1d1d1f]">Easy to reach. <span className="gradient-text">Right in Halasuru.</span></h2>
          <p className="section-subtitle mx-auto mt-5">One minute from Halasuru Metro, opposite Bhadra Landmark on Mahatma Gandhi Road. Walk in — or order a free pickup.</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {INFO.map((it) => (
                <div key={it.label} className="flex items-start gap-4 rounded-[22px] bg-white p-5 shadow-sm">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#ff2d55]/10 to-[#ff9500]/10 text-[20px]">{it.icon}</span>
                  <div>
                    <div className="text-[12.5px] font-bold text-[#1d1d1f]">{it.label}</div>
                    <div className="mt-0.5 text-[13px] leading-relaxed text-[#6e6e73]">{it.value}</div>
                  </div>
                </div>
              ))}
              <div className="mt-auto flex flex-wrap gap-2.5">
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"
                  onClick={() => track("map_click", { source: "location" })}
                  className="cta-dark flex-1 text-center text-[13px]">🧭 Get Directions</a>
                <a href={wa("Hi! I'd like directions / free pickup. 📍")} target="_blank" rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { source: "location" })}
                  className="cta-primary flex-1 text-center text-[13px]">💬 WhatsApp</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <div className="overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-lg">
              <iframe
                src={SITE.mapsEmbed}
                width="100%" height="460" style={{ border: 0 }} allowFullScreen loading="lazy"
                className="block w-full" title="Red Apple Mobile Repair location — Google Maps"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
