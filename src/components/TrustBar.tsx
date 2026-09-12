"use client";
import Reveal from "./Reveal";
import { STATS } from "@/lib/site";

export default function TrustBar() {
  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-[1100px] px-6 lg:px-8">
      <Reveal>
        <div className="glass grid grid-cols-2 gap-y-8 rounded-[28px] px-6 py-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-apple text-[28px] font-extrabold tracking-tight text-[#1d1d1f]">{s.value}</div>
              <div className="mt-1 text-[12.5px] font-semibold text-[#1d1d1f]/80">{s.label}</div>
              <div className="mt-0.5 text-[11.5px] text-[#86868b]">{s.sub}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
