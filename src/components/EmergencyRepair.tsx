import Reveal from "./Reveal";
import { wa, SITE } from "@/lib/site";

export default function EmergencyRepair() {
  return (
    <section className="section-apple relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff2d55]/[0.03] via-transparent to-[#ff9500]/[0.03]"/>
      <div className="relative mx-auto max-w-[1000px] px-6 text-center lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#ff2d55]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-[#ff2d55]">
            🚨 Emergency Service
          </span>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-4">Phone died?<br/><span className="gradient-text">We can fix it today.</span></h2>
          <p className="section-subtitle mx-auto mt-5">Dropped in water? Screen shattered before a meeting? We offer priority same-day repair for urgent cases. Walk in or book a free emergency pickup.</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={wa(`🔴 EMERGENCY REPAIR — ${SITE.phone} needs urgent fix!`)} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#ff2d55]/15 transition-all hover:scale-[1.03]">
              🚨 Emergency WhatsApp
            </a>
            <a href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-4 text-[15px] font-semibold text-[#1d1d1f] shadow-sm transition-all hover:bg-black/[0.03]">
              📞 Call Now — {SITE.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
