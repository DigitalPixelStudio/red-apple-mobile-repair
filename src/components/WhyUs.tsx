import Reveal from "./Reveal";

const POINTS = [
  { icon: "🛡️", t: "90-Day Warranty", d: "On every part & repair. Displays and batteries carry 6-month health guarantees." },
  { icon: "🔬", t: "Genuine-Grade Parts", d: "OEM-quality panels, batteries and flexes — with a written diagnostic report." },
  { icon: "🥇", t: "4.9★ from 905 Reviews", d: "Ranked among Bangalore's most trusted repair studios on Google and JustDial." },
  { icon: "⚡", t: "30-Minute Average", d: "Most repairs — screen, battery, port — done while you wait at the studio." },
  { icon: "🚗", t: "Free Doorstep Pickup", d: "We collect and deliver your device anywhere in Bangalore. Zero hassle." },
  { icon: "💰", t: "Pay After Approval", d: "You approve the fix before we charge. No hidden costs, no surprises." },
  { icon: "🧠", t: "Chip-Level Engineers", d: "Motherboard, IC and micro-soldering work — the repair others can't do." },
  { icon: "📱", t: "All Models Supported", d: "iPhone 6 through iPhone 16 Pro Max — every variant, every generation." },
  { icon: "⏰", t: "Open Every Day", d: "10:30 AM to 9:00 PM, 7 days a week. Including weekends and holidays." },
];

export default function WhyUs() {
  return (
    <section id="why" className="section-apple">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Why Red Apple</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Built like Apple.<br/><span className="text-[#86868b]">Priced for Bangalore.</span></h2>
        </Reveal>
        {/* Bento layout for first 3 items */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.t} delay={i * 60} className="glass-card group rounded-[24px] p-7 transition-all duration-300 hover:border-[#ff2d55]/20 hover:shadow-xl hover:shadow-[#ff2d55]/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/[0.06] to-transparent text-2xl">{p.icon}</div>
              <h3 className="mt-4 font-apple text-[17px] font-bold text-[#1d1d1f]">{p.t}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[#86868b]">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
