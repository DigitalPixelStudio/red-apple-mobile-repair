"use client";

import { useState } from "react";
import { FAQS } from "@/lib/site";
import Reveal from "./Reveal";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Reveal as="section" id="faq" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-red-300">
            ❓ Questions, Answered
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Everything you need to know
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-white sm:text-base">{f.q}</span>
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-zinc-300 transition-transform duration-300 ${openIdx === i ? "rotate-45" : ""}`}>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </button>
              <div className={`grid transition-all duration-300 ${openIdx === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-400">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
