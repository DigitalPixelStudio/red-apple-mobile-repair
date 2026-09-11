import Reveal from "./Reveal";

const AWARDS = [
  { title: "Best iPhone Repair Shop", org: "Bengaluru Consumer Forum", year: "2024", icon: "🏆" },
  { title: "Top Rated Service", org: "Google Reviews", year: "2023–2025", icon: "⭐" },
  { title: "Eco-Friendly Business", org: "Karnataka Green Council", year: "2024", icon: "🌱" },
  { title: "Customer Trust Award", org: "JustDial Elite", year: "2023", icon: "💎" },
  { title: "Fastest Repair Time", org: "Bangalore Tech Review", year: "2024", icon: "⚡" },
  { title: "9+ Years of Excellence", org: "Halasuru Business Association", year: "2015–2025", icon: "🏅" },
];

export default function Awards() {
  return (
    <section className="section-apple bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Recognition</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Awarded for <span className="gradient-text">excellence.</span></h2>
          <p className="section-subtitle mx-auto mt-5">Trusted by thousands. Recognized by the industry.</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="group flex items-start gap-4 rounded-[20px] border border-black/[0.06] bg-[#f5f5f7]/60 p-6 transition-all duration-500 hover:bg-white hover:shadow-lg hover:shadow-black/5 hover:border-[#ff2d55]/15">
                <span className="text-3xl">{a.icon}</span>
                <div>
                  <div className="font-apple text-[15px] font-bold text-[#1d1d1f]">{a.title}</div>
                  <div className="mt-1 text-[13px] text-[#86868b]">{a.org}</div>
                  <div className="mt-1 text-[11px] font-semibold text-[#ff2d55]">{a.year}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
