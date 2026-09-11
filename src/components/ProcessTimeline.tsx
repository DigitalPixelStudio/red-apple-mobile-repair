import Reveal from "./Reveal";

const STEPS = [
  { n: 1, icon: "💬", t: "Book online", d: "WhatsApp us your iPhone model and issue, or use our instant quote tool.", color: "#ff2d55" },
  { n: 2, icon: "🚗", t: "Free pickup", d: "We collect your device from your doorstep — anywhere in Bangalore, at no cost.", color: "#ff9500" },
  { n: 3, icon: "🔬", t: "Free diagnosis", d: "Our engineers run a full diagnostic and share a transparent quote before any work begins.", color: "#ff2d55" },
  { n: 4, icon: "⚡", t: "Expert repair", d: "Genuine-grade parts, precision tools, and most repairs completed in 30–60 minutes.", color: "#ff9500" },
  { n: 5, icon: "✅", t: "Quality check", d: "Every repair passes a multi-point quality inspection before we hand it back.", color: "#ff2d55" },
  { n: 6, icon: "🛡️", t: "Warranty delivered", d: "Pay only after you approve. 90-day warranty. 6-month guarantee on batteries and displays.", color: "#ff9500" },
];

export default function ProcessTimeline() {
  return (
    <section className="section-apple bg-[#f5f5f7]">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Our process</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Six steps to<br/>a <span className="gradient-text">perfect repair.</span></h2>
        </Reveal>
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#ff2d55]/30 via-[#ff9500]/30 to-[#ff2d55]/30 sm:left-1/2 sm:-translate-x-px"/>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} className={`relative flex items-start gap-6 mb-12 last:mb-0 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5 border border-black/[0.06]">
                <span className="text-lg">{s.icon}</span>
              </div>
              {/* Content */}
              <div className={`flex-1 sm:w-1/2 ${i % 2 === 0 ? "sm:pl-12 sm:text-left" : "sm:pr-12 sm:text-right"}`}>
                <div className="font-apple text-[13px] font-bold uppercase tracking-widest" style={{ color: s.color }}>Step {s.n}</div>
                <h3 className="mt-1 font-apple text-[19px] font-bold text-[#1d1d1f]">{s.t}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-[#86868b]">{s.d}</p>
              </div>
              {/* Spacer for layout */}
              <div className="hidden sm:block sm:w-1/2"/>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
