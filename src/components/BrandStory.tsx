import Reveal from "./Reveal";

export default function BrandStory() {
  return (
    <section className="section-apple relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#ff9500]/[0.02] to-transparent"/>
      <div className="relative mx-auto max-w-[800px] px-6 text-center lg:px-8">
        <Reveal>
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Our story</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Nine years of<br/>fixing what <span className="gradient-text">matters.</span></h2>
          <div className="mt-8 space-y-4 font-apple text-[16px] leading-[1.8] text-[#86868b]">
            <p>
              Red Apple started in 2015 as a small repair counter near Halasuru Metro. Today, we&apos;re one of Bangalore&apos;s most trusted iPhone repair studios — with over <span className="font-semibold text-[#1d1d1f]">10,000 devices repaired</span> and a <span className="font-semibold text-[#1d1d1f]">4.9/5 rating from 905+ customers</span>.
            </p>
            <p>
              We believe repair should be honest, fast, and affordable. That&apos;s why every fix comes with a written diagnostic, genuine-grade parts, and a 90-day warranty. No hidden charges, no guesswork.
            </p>
            <p>
              From screen replacements to chip-level motherboard work, we handle every repair with the same standard of precision — because your iPhone deserves better than a quick fix.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="rounded-full bg-[#f5f5f7] px-5 py-2 text-[13px] font-medium text-[#86868b]">📍 Halasuru, Bengaluru</span>
            <span className="rounded-full bg-[#f5f5f7] px-5 py-2 text-[13px] font-medium text-[#86868b]">🗓️ Since 2015</span>
            <span className="rounded-full bg-[#f5f5f7] px-5 py-2 text-[13px] font-medium text-[#86868b]">⭐ 4.9/5</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
