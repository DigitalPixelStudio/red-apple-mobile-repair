import { TESTIMONIALS } from "@/lib/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="reviews" className="section-apple">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Customer love</p>
          <h2 className="section-title font-apple text-white mt-3">4.9/5 from <span className="gradient-text">905+ customers.</span></h2>
          <p className="section-subtitle mx-auto mt-5">Real feedback from real people. Verified across Google, JustDial, and word-of-mouth referrals.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 70} className="glass-card group flex flex-col rounded-[28px] p-7 transition-all duration-300 hover:border-[#ff2d55]/15">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#ff2d55] to-[#ff9500] text-[13px] font-bold text-white">{t.avatar}</div>
                <div>
                  <div className="text-[14px] font-bold text-white">{t.name}</div>
                  <div className="text-[12px] text-[#86868b]">{t.area} · {t.service}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5 text-[13px] text-[#ff9500]">★★★★★</div>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#a1a1a6]">&ldquo;{t.text}&rdquo;</p>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[12px] text-[#6e6e73]">Representative customer feedback shared on public review platforms. Individual experiences may vary.</p>
      </div>
    </section>
  );
}
