import { SITE, wa } from "@/lib/site";

const SOCIALS = [
  { icon: "📸", label: "Instagram", href: "#" },
  { icon: "📘", label: "Facebook", href: "#" },
  { icon: "🐦", label: "X", href: "#" },
  { icon: "🎥", label: "YouTube", href: "#" },
  { icon: "📍", label: "Google", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.04] bg-white pb-32 pt-16 lg:pb-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="inline-flex items-center gap-3">
              <img src="/icon.svg" alt="Red Apple" className="h-10 w-10 rounded-xl" />
              <div>
                <div className="font-apple text-[17px] font-bold text-[#1d1d1f]">Red Apple Mobile Repair</div>
                <div className="text-[12px] text-[#86868b]">Specialist iPhone repair · Bengaluru</div>
              </div>
            </a>
            <p className="mt-4 max-w-[400px] font-apple text-[14px] leading-relaxed text-[#86868b]">
              Expert iPhone repair with genuine-grade parts, 90-day warranty, free doorstep pickup and most repairs done in 30 minutes.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-xl bg-[#f5f5f7] text-sm transition-all hover:bg-[#ff2d55]/10 hover:scale-110" title={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86868b]">Services</div>
            <ul className="mt-5 space-y-3 font-apple text-[14px] text-[#6e6e73]">
              {["Screen Replacement", "Battery Replacement", "Back Glass Repair", "Water Damage", "Camera Repair", "Software Unlock"].map((s) => (
                <li key={s}><a href="#repairs" className="transition-colors hover:text-[#1d1d1f]">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86868b]">Contact</div>
            <ul className="mt-5 space-y-3 font-apple text-[14px] text-[#6e6e73]">
              <li className="leading-relaxed">📍 {SITE.address}</li>
              <li>🕙 {SITE.hours}</li>
              <li><a href={SITE.phoneHref} className="font-semibold text-[#1d1d1f] hover:text-[#ff2d55]">📞 {SITE.phone}</a></li>
              <li><a href={wa("Hi Red Apple! 🍎")} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#30d158] hover:text-[#30d158]/80">💬 WhatsApp</a></li>
              <li><a href="https://g.page/redapplerepair" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1d1d1f] hover:text-[#ff2d55]">📍 Google Maps</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[0.04] pt-8 text-[12px] text-[#86868b] sm:flex-row">
          <div>© {new Date().getFullYear()} Red Apple Mobile Repair · Halasuru, Bengaluru 560008</div>
          <div className="flex items-center gap-2">
            <span>Crafted with 🔥 by</span>
            <a href="https://pixel-forge.dev" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1d1d1f] hover:text-[#ff2d55]">Pixel Forge</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
