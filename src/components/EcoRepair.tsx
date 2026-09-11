import Reveal from "./Reveal";

const STATS = [
  { value: "2,500+", label: "Devices saved from landfill", icon: "♻️" },
  { value: "85%", label: "Parts recycled or reused", icon: "🔄" },
  { value: "0", label: "Hazardous waste to landfill", icon: "🌍" },
];

export default function EcoRepair() {
  return (
    <section className="section-apple bg-[#f5f5f7]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#30d158]">Sustainability</p>
            <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Repair. Don't <span className="gradient-text">replace.</span></h2>
            <p className="mt-5 font-apple text-[16px] leading-relaxed text-[#86868b]">
              Every iPhone you repair instead of replacing saves up to 70kg of CO₂ emissions. We're committed to eco-friendly repair practices — from responsible e-waste disposal to using refurbished components wherever safe.
            </p>
            <p className="mt-4 font-apple text-[16px] leading-relaxed text-[#86868b]">
              Our workshop follows proper e-waste handling protocols. Old batteries, screens, and boards are sent to certified recyclers — nothing goes to landfill.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["E-Waste Certified Recycler", "No-Landfill Policy", "Refurbished Parts Program"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#30d158]/30 bg-[#30d158]/10 px-4 py-2 text-[12px] font-semibold text-[#30d158]">{tag}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="grid grid-cols-1 gap-4">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-5 rounded-[20px] border border-black/[0.06] bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <div className="font-apple text-[28px] font-bold text-[#1d1d1f]">{s.value}</div>
                    <div className="text-[13px] text-[#86868b]">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
