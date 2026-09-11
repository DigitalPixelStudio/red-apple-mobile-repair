import Reveal from "./Reveal";
import { wa } from "@/lib/site";

export default function CorporateSection() {
  return (
    <section className="section-apple bg-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ff2d55]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-[#ff2d55]">🏢 For Businesses</span>
              <h2 className="mt-4 font-apple text-[32px] font-bold text-[#1d1d1f] leading-tight lg:text-[40px]">Fleet repair for<br/>your <span className="gradient-text">company.</span></h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#86868b]">Manage multiple iPhone repairs for your team or organisation. Dedicated account manager, bulk pricing, priority turnaround, and monthly invoicing.</p>
              <ul className="mt-6 space-y-3 text-[14px] text-[#1d1d1f]">
                {["Bulk discount on 5+ devices", "Dedicated account manager", "Priority same-day turnaround", "Monthly consolidated invoicing", "Free doorstep pickup for all devices"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><span className="text-[#30d158]">✓</span> {item}</li>
                ))}
              </ul>
              <a href={wa("Hi! We need corporate repair for our team. How does bulk pricing work?")} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-7 py-3.5 text-[14px] font-bold text-white transition-all hover:scale-[1.03]">
                💼 Get Corporate Quote
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-[32px] bg-[#f5f5f7] p-8">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team working together" className="w-full rounded-2xl object-cover" loading="lazy"/>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="text-[24px] font-bold text-[#1d1d1f]">500+</div>
                  <div className="text-[12px] text-[#86868b]">Corporate devices repaired</div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="text-[24px] font-bold text-[#1d1d1f]">48h</div>
                  <div className="text-[12px] text-[#86868b]">Average fleet turnaround</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
