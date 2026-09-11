import Reveal from "./Reveal";
import { wa } from "@/lib/site";

const AREAS = [
  "Halasuru", "Indiranagar", "Koramangala", "MG Road", "Ulsoor",
  "Whitefield", "HSR Layout", "BTM Layout", "Jayanagar", "JP Nagar",
  "Electronic City", "Marathahalli", "Bellandur", "HSR Layout",
  "Banashankari", "Rajajinagar", "Basavanagudi", "Frazer Town",
];

export default function ServiceAreas() {
  return (
    <section className="section-apple bg-white">
      <div className="mx-auto max-w-[1000px] px-6 text-center lg:px-8">
        <Reveal>
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Service areas</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Free pickup across<br/><span className="gradient-text">all of Bangalore.</span></h2>
          <p className="section-subtitle mx-auto mt-5">We offer free doorstep pickup and drop in these neighborhoods and beyond.</p>
        </Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {AREAS.map((a, i) => (
            <Reveal key={a} delay={i * 30}>
              <span className="inline-block rounded-full border border-black/[0.06] bg-[#f5f5f7] px-4 py-2 text-[13px] font-medium text-[#1d1d1f] transition-all hover:bg-[#ff2d55]/10 hover:border-[#ff2d55]/20 hover:text-[#ff2d55]">{a}</span>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300} className="mt-8">
          <a href={wa("Hi! I need pickup from my area. 🚗")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-7 py-3.5 text-[14px] font-bold text-white transition-all hover:scale-[1.03]">
            💬 Check if we cover your area
          </a>
        </Reveal>
      </div>
    </section>
  );
}
