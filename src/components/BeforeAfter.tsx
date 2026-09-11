"use client";
import Reveal from "./Reveal";

const CASES = [
  {
    beforeImg: "https://picsum.photos/seed/broken-screen/800/600",
    afterImg: "https://picsum.photos/seed/fixed-screen/800/600",
    label: "Screen Replacement",
    desc: "Shattered glass to crystal-clear display in 30 minutes"
  },
  {
    beforeImg: "https://picsum.photos/seed/water-damage/800/600",
    afterImg: "https://picsum.photos/seed/water-fixed/800/600",
    label: "Water Damage Revival",
    desc: "Submerged device brought back to full functionality"
  },
  {
    beforeImg: "https://picsum.photos/seed/old-battery/800/600",
    afterImg: "https://picsum.photos/seed/new-battery/800/600",
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
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] w-full bg-[#e8e0e0]">
                      <img
                        src={c.beforeImg}
                        alt={`Before ${c.label} — Red Apple Mobile Store`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      Before
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] w-full bg-[#d1f4d1]">
                      <img
                        src={c.afterImg}
                        alt={`After ${c.label} — Red Apple Mobile Store`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="absolute top-3 right-3 rounded-full bg-[#ff2d55]/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      After
                    </span>
                  </div>
                </div>
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
