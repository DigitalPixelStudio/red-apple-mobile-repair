import { SITE, wa } from "@/lib/site";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/redapplerepair", color: "#E4405F", svg: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { label: "Facebook", href: "https://facebook.com/redapplerepair", color: "#1877F2", svg: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: "YouTube", href: "https://youtube.com/@redapplerepair", color: "#FF0000", svg: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { label: "Telegram", href: "https://t.me/redapplerepair", color: "#0088CC", svg: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> },
  { label: "Google Business", href: "https://g.page/redapplerepair", color: "#4285F4", svg: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg> },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.04] bg-white pb-32 pt-16 lg:pb-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="inline-flex items-center gap-3">
              <img src="/icon.svg" alt="Red Apple Mobile Store" className="h-10 w-10 rounded-xl" />
              <div>
                <div className="font-apple text-[17px] font-bold text-[#1d1d1f]">Red Apple Mobile Store</div>
                <div className="text-[12px] text-[#86868b]">Specialist iPhone repair · Bengaluru</div>
              </div>
            </a>
            <p className="mt-4 max-w-[400px] font-apple text-[14px] leading-relaxed text-[#86868b]">
              Expert iPhone repair with genuine-grade parts, 90-day warranty, free doorstep pickup and most repairs done in 30 minutes.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-xl bg-[#f5f5f7] transition-all duration-300 hover:bg-[#f5f5f7] hover:scale-110 hover:shadow-md"
                  style={{ color: s.color }} title={s.label}>{s.svg}</a>
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
              <li><a href={wa("Hi Red Apple Mobile Store! 🍎")} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#30d158] hover:text-[#30d158]/80">💬 WhatsApp</a></li>
              <li><a href="https://g.page/redapplerepair" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1d1d1f] hover:text-[#ff2d55]">📍 Google Maps</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[0.04] pt-8 text-[12px] text-[#86868b] sm:flex-row">
          <div>© {new Date().getFullYear()} Red Apple Mobile Store · Halasuru, Bengaluru 560008</div>
          <div className="flex items-center gap-2">
            <span>Crafted with 🔥 by</span>
            <a href="https://pixel-forge.dev" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1d1d1f] hover:text-[#ff2d55]">Pixel Forge</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
