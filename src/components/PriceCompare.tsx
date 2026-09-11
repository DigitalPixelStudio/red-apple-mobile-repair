import Reveal from "./Reveal";
import { wa } from "@/lib/site";

const ROWS = [
  { repair: "Screen Replacement", redapple: "₹1,499", market: "₹2,500 – ₹4,000", saving: "Up to 63%" },
  { repair: "Battery Replacement", redapple: "₹1,299", market: "₹2,000 – ₹3,500", saving: "Up to 63%" },
  { repair: "Back Glass", redapple: "₹1,799", market: "₹3,000 – ₹5,000", saving: "Up to 64%" },
  { repair: "Charging Port", redapple: "₹999", market: "₹1,500 – ₹2,500", saving: "Up to 60%" },
  { repair: "Water Damage", redapple: "₹2,499", market: "₹4,000 – ₹7,000", saving: "Up to 64%" },
];

export default function PriceCompare() {
  return (
    <section className="section-apple relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#ff9500]/[0.02] to-transparent"/>
      <div className="relative mx-auto max-w-[1000px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Transparent pricing</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">See how you <span className="gradient-text">save.</span></h2>
        </Reveal>

        <Reveal delay={100} className="mt-14 overflow-hidden rounded-[24px] border border-black/[0.06]">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-black/[0.06] bg-[#f5f5f7]">
                  <th className="px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#86868b]">Repair</th>
                  <th className="px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#ff2d55]">Red Apple</th>
                  <th className="hidden px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#86868b] sm:table-cell">Market Range</th>
                  <th className="px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#30d158]">You Save</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={r.repair} className={`border-b border-white/[0.04] transition-colors hover:bg-[#f5f5f7] ${i === ROWS.length - 1 ? "border-b-0" : ""}`}>
                    <td className="px-6 py-4 text-[14px] font-medium text-[#1d1d1f]">{r.repair}</td>
                    <td className="px-6 py-4 text-[14px] font-bold text-[#ff2d55]">{r.redapple}</td>
                    <td className="hidden px-6 py-4 text-[14px] text-[#86868b] sm:table-cell">{r.market}</td>
                    <td className="px-6 py-4 text-[14px] font-bold text-[#30d158]">{r.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8 text-center">
          <a href={wa("Hi! I want the best price for my repair. 🍎")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-7 py-3.5 text-[14px] font-bold text-[#1d1d1f] transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-[#ff2d55]/20">
            💬 Get the best price on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
