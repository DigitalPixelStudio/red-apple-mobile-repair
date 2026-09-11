import { REPAIRS, wa } from "@/lib/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <Reveal as="section" id="repairs" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-red-300">
            🍎 Every iPhone Repair
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Specialist repairs. <span className="text-zinc-500">Transparent prices.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
            Indicative starting prices — exact quote after free diagnosis. Every repair backed by a 90-day warranty.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REPAIRS.map((r, i) => (
            <Reveal key={r.id} delay={i * 60}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/10">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-2xl">{r.icon}</span>
                <span className="rounded-full bg-orange-400/10 px-3 py-1 text-xs font-bold text-orange-300">from {r.price}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{r.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{r.desc}</p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-zinc-500">⏱️ {r.time}</span>
                <a href={wa(`Hi! I need quote for ${r.name} (${r.price} starting). 🍎`)} target="_blank" rel="noopener noreferrer"
                  className="font-bold text-red-400 transition-colors hover:text-orange-300">Get Quote →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
