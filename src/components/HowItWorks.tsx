import Reveal from "./Reveal";

const STEPS = [
  { n: "01", icon: "💬", t: "Get a quote", d: "Use the 30-second quote tool or WhatsApp us your model + issue for an instant estimate." },
  { n: "02", icon: "🚗", t: "Free pickup", d: "Inside Bangalore? We pick your device up from your door — free. Or walk in to our Halasuru studio." },
  { n: "03", icon: "⚡", t: "Fast repair", d: "Genius-level techs fix most issues in 30–60 minutes with genuine-grade parts and full diagnostics." },
  { n: "04", icon: "🛡️", t: "Warranty", d: "Pick up your device, pay only after you're happy, and stay covered by a 90-day service warranty." },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-red-300">
            ⚡ How It Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Zero hassle. <span className="text-zinc-500">Full transparency.</span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="font-display text-4xl font-extrabold text-white/10">{s.n}</div>
              <div className="mt-2 text-3xl">{s.icon}</div>
              <h3 className="mt-3 font-display text-lg font-bold text-white">{s.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
