"use client";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";
import { track } from "@/lib/analytics";

const RATINGS = [
  { label: "Quality of service", val: 5 },
  { label: "Expert knowledge", val: 5 },
  { label: "Transparent pricing", val: 5 },
  { label: "Speed of repair", val: 5 },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section-apple bg-white">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#ff2d55]">Reviews</p>
          <h2 className="section-title font-apple mt-3 text-[#1d1d1f]">Trusted by <span className="gradient-text">Halasuru &amp; Bengaluru.</span></h2>
          <p className="section-subtitle mx-auto mt-5">A 4.9★ rating on Google from hundreds of Apple device owners — read the real thing below.</p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-[720px]">
          <div className="rounded-[30px] glass p-8 text-center md:p-10">
            <div className="flex items-center justify-center gap-1 text-[26px]">
              {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#ff9500]">★</span>)}
            </div>
            <div className="mt-3 font-apple text-[54px] font-extrabold leading-none tracking-tight">{SITE.rating}</div>
            <div className="mt-2 text-[14px] font-semibold text-[#1d1d1f]">Based on {SITE.ratingCount}+ Google reviews</div>
            <div className="mx-auto mt-6 max-w-[420px] space-y-3 text-left">
              {RATINGS.map((r) => (
                <div key={r.label} className="flex items-center gap-3">
                  <span className="w-40 shrink-0 text-[12.5px] font-semibold text-[#6e6e73]">{r.label}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/[0.06]">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500]" style={{ width: "100%" }} />
                  </div>
                  <span className="text-[12.5px] font-bold text-[#1d1d1f]">{r.val}.0</span>
                </div>
              ))}
            </div>
            <a
              href={SITE.mapsReviewUrl} target="_blank" rel="noopener noreferrer"
              onClick={() => track("map_click", { source: "reviews" })}
              className="cta-outline mt-8"
            >
              ⭐ Read Google Reviews
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
