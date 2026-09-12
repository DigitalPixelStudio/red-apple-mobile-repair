"use client";
import Link from "next/link";
import { SITE, wa, SERVICE_PAGES } from "@/lib/site";
import { track } from "@/lib/analytics";

const SOCIALS = [
  { label: "Instagram", icon: "📷", href: SITE.gmbUrl, note: "via Google Business" },
  { label: "Facebook", icon: "👍", href: SITE.gmbUrl, note: "via Google Business" },
  { label: "YouTube", icon: "▶️", href: SITE.gmbUrl, note: "via Google Business" },
  { label: "Telegram", icon: "✈️", href: SITE.gmbUrl, note: "via Google Business" },
  { label: "Google Business", icon: "⭐", href: SITE.gmbUrl, note: "Verified listing" },
];

export default function Footer() {
  return (
    <footer className="bg-[#161617] text-white">
      {/* Long GIANT map strip */}
      <div className="relative h-[380px] w-full overflow-hidden">
        <iframe
          src={SITE.mapsEmbed.replace("&z=16", "&z=15")}
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
          className="absolute inset-0 h-full w-full grayscale-[25%] contrast-[1.02]" title="Red Apple Mobile Repair — map"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161617] via-transparent to-transparent" />
        <div className="absolute bottom-8 left-1/2 z-10 w-[92%] max-w-[560px] -translate-x-1/2">
          <div className="glass rounded-[24px] p-6 text-center bg-white/90 backdrop-blur-2xl">
            <div className="text-[13px] font-bold text-[#1d1d1f]">🍎 Red Apple Mobile Repair — Halasuru, Bengaluru</div>
            <div className="mt-1 text-[12px] text-[#6e6e73]">{SITE.address}</div>
            <div className="mt-3 flex justify-center gap-2.5">
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" onClick={() => track("map_click", { source: "footer" })}
                className="rounded-full bg-[#1d1d1f] px-4 py-2 text-[12px] font-bold text-white hover:opacity-90">🧭 Directions</a>
              <a href={wa("Hi! I'm at the map location. 🍎")} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { source: "footer_map" })}
                className="rounded-full bg-[#25D366] px-4 py-2 text-[12px] font-bold text-white hover:brightness-105">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#ff2d55] to-[#ff9500] text-[20px]">🍎</span>
              <div>
                <div className="font-apple text-[15px] font-bold">Red Apple</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff5e3a]">Mobile Repair</div>
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-white/50">The Apple repair specialist of Halasuru, Bengaluru. iPhone, iPad, Watch, AirPods, Mac &amp; MacBook — hardware, software and data recovery.</p>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">Services</div>
            <ul className="mt-5 space-y-2.5">
              {SERVICE_PAGES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[13px] text-white/60 transition-colors hover:text-white">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">Company</div>
            <ul className="mt-5 space-y-2.5">
              <li><Link href="/quote" className="text-[13px] text-white/60 hover:text-white">Get a Quote</Link></li>
              <li><Link href="/repair-status" className="text-[13px] text-white/60 hover:text-white">Repair Status</Link></li>
              <li><Link href="/contact" className="text-[13px] text-white/60 hover:text-white">Contact</Link></li>
              <li><a href="#faq" className="text-[13px] text-white/60 hover:text-white">FAQ</a></li>
              <li><Link href="/sitemap.xml" className="text-[13px] text-white/60 hover:text-white">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">Contact</div>
            <ul className="mt-5 space-y-3 text-[13px] text-white/60">
              <li>📍 {SITE.address}</li>
              <li>🕙 {SITE.hours}</li>
              <li><a href={SITE.phoneHref} className="hover:text-white">📞 {SITE.phone}</a></li>
              <li><a href={wa("Hi Red Apple Mobile Repair! 🍎")} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#25D366] hover:brightness-110">💬 WhatsApp</a></li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={`${s.label} · ${s.note}`}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.08] text-[17px] transition-all hover:-translate-y-0.5 hover:bg-white/20">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-7 text-[12px] text-white/40 sm:flex-row">
          <div>© {new Date().getFullYear()} Red Apple Mobile Repair · Halasuru, Bengaluru 560008</div>
          <div className="text-[11px]">Apple is a trademark of Apple Inc. We are an independent repair service — not affiliated with Apple Inc.</div>
        </div>
      </div>
    </footer>
  );
}
