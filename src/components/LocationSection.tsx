import { SITE, wa } from "@/lib/site";
import Reveal from "./Reveal";

export default function LocationSection() {
  return (
    <Reveal as="section" id="contact" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-red-300">
              📍 Visit The Studio
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Right next to <span className="text-orange-400">Halasuru Metro</span>
            </h2>
            <div className="mt-6 space-y-4 text-sm text-zinc-300">
              <p className="leading-relaxed">📌 {SITE.address}</p>
              <p>🕙 Open daily: <span className="font-semibold text-white">{SITE.hours}</span></p>
              <p>📞 <a href={SITE.phoneHref} className="font-semibold text-white hover:text-red-400">{SITE.phone}</a></p>
              <p>⭐ Rated 4.9/5 by 905+ customers</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Halasuru+Police+Station,+Bengaluru+560008" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-red-500/20 transition-all hover:scale-[1.03]">
                🧭 Get Directions
              </a>
              <a href={wa("Hi Red Apple! I'm on my way / need directions. 🍎")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                💬 WhatsApp
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Red Apple Mobile Repair — Halasuru, Bengaluru"
              src="https://www.google.com/maps?q=Halasuru%20Police%20Station%2C%20Bengaluru%20560008&output=embed"
              className="h-full min-h-[320px] w-full grayscale-[35%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
