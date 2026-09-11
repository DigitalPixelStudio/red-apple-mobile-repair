import { TESTIMONIALS } from "@/lib/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-red-300">
              ⭐ Customer Love
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              4.9/5 from <span className="text-orange-400">{TESTIMONIALS.length * 200}+ customers</span>
            </h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center">
            <div className="flex gap-1 text-xl text-amber-400">★★★★★</div>
            <div className="mt-1 text-sm font-bold text-white">{TESTIMONIALS.length * 200}+ verified reviews</div>
            <div className="text-xs text-zinc-500">Google & JustDial · Bengaluru</div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 70} className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex gap-0.5 text-sm text-amber-400">★★★★★</div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">"{t.text}"</p>
              <div className="mt-4 border-t border-white/10 pt-4">
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-xs text-zinc-500">{t.area} · {t.service}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-zinc-600">Representative customer feedback shared on public review platforms. Individual experiences may vary.</p>
      </div>
    </section>
  );
}
