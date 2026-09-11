"use client";
import Reveal from "./Reveal";

const CASES = [
  {
    beforeImg: "https://placehold.co/800x600/e8e0e0/1d1d1f?text=Before%0ACracked+Screen&font=Inter",
    afterImg: "https://placehold.co/800x600/d1f4d1/1d1d1f?text=After%0APerfectly+Restored&font=Inter",
    label: "Screen Replacement",
    desc: "Shattered glass to crystal-clear display in 30 minutes"
  },
  {
    beforeImg: "https://placehold.co/800x600/ffe0cc/1d1d1f?text=Before%0AWater+Damage&font=Inter",
    afterImg: "https://placehold.co/800x600/d6f0ff/1d1d1f?text=After%0AFull+Recovery&font=Inter",
    label: "Water Damage Revival",
    desc: "Submerged device brought back to full functionality"
  },
  {
    beforeImg: "https://placehold.co/800x600/ffd6d6/1d1d1f?text=Before%0ADead+Battery&font=Inter",
    afterImg: "https://placehold.co/800x600/d6ffe6/1d1d1f?text=After%0A100%25+Health&font=Inter",
    label: "Battery Health Restore",
    desc: "From zero charge to all-day battery performance"
  }
];

export default function BeforeAfter() {
  return (
    <section id="before-after" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-[family-name:var(--font-inter)] text-sm font-semibold uppercase tracking-[0.2em] text-[#86868b]">
            Real Results
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
            See the <span className="bg-gradient-to-r from-[#ff2d55] to-[#ff9500] bg-clip-text text-transparent">difference.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#86868b]">
            Real repairs from our Halasuru workshop. Every device, every fix — guaranteed.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.label} delay={i * 120}>
              <div className="group overflow-hidden rounded-3xl bg-[#f5f5f7] shadow-lg shadow-black/5 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1">
                {/* Before/After Image Grid */}
                <div className="grid grid-cols-2 gap-0">
                  {/* Before */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] w-full">
                      <img
                        src={c.beforeImg}
                        alt={`Before ${c.label} — Red Apple Mobile Store`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      Before
                    </span>
                  </div>
                  {/* After */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] w-full">
                      <img
                        src={c.afterImg}
                        alt={`After ${c.label} — Red Apple Mobile Store`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="absolute top-3 right-3 rounded-full bg-[#ff2d55]/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      After
                    </span>
                  </div>
                </div>
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1d1d1f]">{c.label}</h3>
                  <p className="mt-2 text-sm text-[#86868b] leading-relaxed">{c.desc}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#ff2d55]/10 px-3 py-1 text-xs font-semibold text-[#ff2d55]">
                      ✅ Real Customer Device
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
