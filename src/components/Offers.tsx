import Reveal from "./Reveal";
import { wa } from "@/lib/site";

const OFFERS = [
  { title: "Student Discount", desc: "Show your student ID and get 15% off any repair. Valid on all iPhone models.", badge: "15% OFF", icon: "🎓" },
  { title: "Free Screen Protector", desc: "Get a free tempered glass with every display replacement. Limited time.", badge: "FREE", icon: "🛡️" },
  { title: "Refer a Friend", desc: "Refer a friend and both of you get ₹200 off on your next repair.", badge: "₹200 OFF", icon: "🤝" },
  { title: "Senior Citizen Special", desc: "Customers above 60 years get 10% off on all services. We care for everyone.", badge: "10% OFF", icon: "👴" },
];

export default function Offers() {
  return (
    <section className="section-apple bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Special offers</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Savings that <span className="gradient-text">shine.</span></h2>
          <p className="section-subtitle mx-auto mt-5">Exclusive deals to make your repair experience even better.</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OFFERS.map((o, i) => (
            <Reveal key={o.title} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#ff2d55]/10 hover:border-[#ff2d55]/20 hover:-translate-y-1">
                <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-3 py-1 text-[11px] font-bold text-white shadow-sm">{o.badge}</span>
                <div className="mb-4 text-4xl">{o.icon}</div>
                <h3 className="font-apple text-[17px] font-bold text-[#1d1d1f]">{o.title}</h3>
                <p className="mt-2 font-apple text-[13px] leading-relaxed text-[#86868b]">{o.desc}</p>
                <a href={wa(`Hi! I want to avail the ${o.title} offer. 🍎`)} target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#ff2d55] transition-colors hover:text-[#ff2d55]/80">
                  Claim now
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
