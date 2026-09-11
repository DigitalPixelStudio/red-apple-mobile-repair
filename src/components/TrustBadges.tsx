import Reveal from "./Reveal";

const BADGES = [
  { icon: "🛡️", t: "90-Day Warranty", d: "On every part and repair" },
  { icon: "🔬", t: "Genuine Parts", d: "OEM-grade quality tested" },
  { icon: "💳", t: "Pay After Approval", d: "No hidden charges" },
  { icon: "🚗", t: "Free Pickup & Drop", d: "Doorstep across Bangalore" },
  { icon: "⏱️", t: "30-Min Average", d: "Fast, while-you-wait service" },
  { icon: "🔒", t: "Data Privacy", d: "Your data stays on your phone" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-[#f5f5f7] border-y border-black/[0.04]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {BADGES.map((b, i) => (
            <Reveal key={b.t} delay={i * 50} className="text-center">
              <div className="text-2xl">{b.icon}</div>
              <div className="mt-2 text-[13px] font-bold text-[#1d1d1f]">{b.t}</div>
              <div className="text-[11px] text-[#86868b]">{b.d}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
