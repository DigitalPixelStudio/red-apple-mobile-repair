import { SITE, wa } from "@/lib/site";
import Reveal from "./Reveal";

export default function LocationSection() {
  return (
    <section id="contact" className="section-apple bg-[#f5f5f7]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Visit us</p>
          <h2 className="section-title font-apple text-[#1d1d1f] mt-3">Right next to<br/><span className="gradient-text">Halasuru Metro.</span></h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="glass-card flex flex-col rounded-[32px] p-9 lg:col-span-2">
            <div className="space-y-6">
              {[
                { icon: "📍", label: "Address", value: SITE.address, href: undefined },
                { icon: "🕙", label: "Open daily", value: SITE.hours, href: undefined },
                { icon: "📞", label: "Call us", value: SITE.phone, href: SITE.phoneHref },
                { icon: "💬", label: "WhatsApp", value: "Chat with our team", href: wa("Hi Red Apple! 🍎") },
                { icon: "🧭", label: "Directions", value: "Open in Google Maps", href: "https://www.google.com/maps/dir/?api=1&destination=Halasuru+Police+Station,+Bengaluru+560008" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#f5f5f7] text-lg">{c.icon}</span>
                  <div>
                    <div className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#86868b]">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-1 block font-apple text-[15px] font-semibold text-[#1d1d1f] hover:text-[#ff2d55]">{c.value}</a>
                    ) : (
                      <div className="mt-1 font-apple text-[15px] leading-relaxed text-[#6e6e73]">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-[32px] border border-black/[0.04] lg:col-span-3">
            <iframe title="Red Apple Mobile Store — Halasuru, Bengaluru"
              src="https://www.google.com/maps?q=Halasuru%20Police%20Station%2C%20Bengaluru%20560008&output=embed"
              className="h-full min-h-[450px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
