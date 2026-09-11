import Reveal from "./Reveal";

const STEPS = [
  { n: "01", icon: "💬", t: "Get a quote", d: "Use the 30-second tool or WhatsApp us your model and issue." },
  { n: "02", icon: "🚗", t: "Free pickup", d: "We collect your device from your door — anywhere in Bangalore." },
  { n: "03", icon: "⚡", t: "Fast repair", d: "Expert techs fix most issues in 30–60 minutes with genuine parts." },
  { n: "04", icon: "🛡️", t: "Warranty", d: "Pay only after approval. Every repair covered by a 90-day warranty." },
];

export default function HowItWorks() {
  return (
    <section className="section-apple relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#ff2d55]/[0.03] to-transparent"/>
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">How it works</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Zero hassle.<br/>Full transparency.</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="glass-card group relative rounded-[24px] p-7 transition-all duration-300 hover:border-[#ff2d55]/20">
              <div className="font-display text-[48px] font-extrabold text-[#1d1d1f]/[0.04] group-hover:text-[#ff2d55]/10 transition-colors duration-300">{s.n}</div>
              <div className="mt-1 text-3xl">{s.icon}</div>
              <h3 className="mt-3 font-apple text-[17px] font-bold text-[#1d1d1f]">{s.t}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[#86868b]">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
