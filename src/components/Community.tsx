import Reveal from "./Reveal";
import { wa } from "@/lib/site";

const EVENTS = [
  { title: "Free Phone Health Checkup", desc: "Bring your iPhone for a complimentary diagnostic — battery health, screen check, and software review. No appointment needed.", date: "Every Saturday", icon: "🩺" },
  { title: "Data Safety Workshop", desc: "Learn how to back up your data, enable 2FA, and protect your iPhone from threats. Free for all customers.", date: "Monthly", icon: "🔒" },
  { title: "Student Repair Day", desc: "Special 20% off for students on the first Saturday of every month. Show your college ID.", date: "1st Saturday", icon: "🎓" },
];

export default function Community() {
  return (
    <section className="section-apple bg-[#f5f5f7]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Community</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">More than a <span className="gradient-text">repair shop.</span></h2>
          <p className="section-subtitle mx-auto mt-5">We believe in giving back to the community that trusts us with their devices.</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <div className="group overflow-hidden rounded-[24px] border border-black/[0.06] bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#ff2d55]/10 hover:border-[#ff2d55]/20">
                <div className="h-2 w-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500]"/>
                <div className="p-7">
                  <span className="mb-3 inline-block text-3xl">{e.icon}</span>
                  <span className="ml-2 inline-block rounded-full bg-[#f5f5f7] px-3 py-1 text-[11px] font-semibold text-[#86868b]">{e.date}</span>
                  <h3 className="mt-3 font-apple text-[17px] font-bold text-[#1d1d1f]">{e.title}</h3>
                  <p className="mt-2 font-apple text-[13px] leading-relaxed text-[#86868b]">{e.desc}</p>
                  <a href={wa(`Hi! I'm interested in the ${e.title} event. 🍎`)} target="_blank" rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#ff2d55] transition-colors hover:text-[#ff2d55]/80">
                    Learn more
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
