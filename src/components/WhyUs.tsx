import Reveal from "./Reveal";

const POINTS = [
  { icon: "🛡️", t: "90-Day Warranty", d: "On every part & repair. Displays and batteries carry 6-month health guarantees." },
  { icon: "🔬", t: "Genuine-Grade Parts", d: "OEM-level quality panels, batteries & flexes — with a written diagnostic report." },
  { icon: "🥇", t: "4.9★ from 905 Reviews", d: "Ranked among Bangalore's most trusted repair studios across Google & JustDial." },
  { icon: "⚡", t: "30-Minute Most Repairs", d: "Certified technicians who repair screens, batteries & ports while you wait." },
  { icon: "🚗", t: "Free Doorstep Pickup", d: "Drop your device from home anywhere in Bangalore — we bring it back fixed." },
  { icon: "💰", t: "Pay After Approval", d: "You approve the fix and price before we touch your device. No hidden charges." },
];

export default function WhyUs() {
  return (
    <Reveal as="section" id="why" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-red-300">
            💎 Why Red Apple
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Built like Apple. <span className="text-zinc-500">Priced for Bangalore.</span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.t} delay={i * 60} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-red-500/30">
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-3 font-display text-lg font-bold text-white">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
