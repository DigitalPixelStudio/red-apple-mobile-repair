import Reveal from "./Reveal";

const FEATURES = [
  { icon: "🔬", t: "Micro-soldering station", d: "Chip-level repair bench for IC, motherboard and flex repair — the repair most shops can't do." },
  { icon: "💡", t: "OEM-grade parts library", d: "Thousands of tested original-grade panels, batteries, cameras and flexes in stock." },
  { icon: "🧪", t: "Ultrasonic cleaner", d: "Professional cleaning tank for water damage revival — removes corrosion at a microscopic level." },
  { icon: "📊", t: "Full diagnostic suite", d: "Before and after health reports on every repair — battery, display, camera, sensors." },
  { icon: "🔧", t: "Precision tools", d: "JIS screwdrivers, suction cups, heat guns and ESD-safe workstations." },
  { icon: "🛡️", t: "Dust-free environment", d: "Clean work area with anti-static protection for display replacements and internal repairs." },
];

export default function Workshop() {
  return (
    <section id="workshop" className="section-apple relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#ff2d55]/[0.02] to-transparent"/>
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Behind the bench</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Where precision<br/>meets <span className="gradient-text">craftsmanship.</span></h2>
          <p className="section-subtitle mx-auto mt-5">Every repair happens in a purpose-built, ESD-safe workspace with professional-grade equipment.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={i * 70} className="glass-card group rounded-[24px] p-7 transition-all duration-300 hover:border-[#ff2d55]/15">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-apple text-[17px] font-bold text-[#1d1d1f]">{f.t}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[#86868b]">{f.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
