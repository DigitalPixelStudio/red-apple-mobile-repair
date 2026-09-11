import { SITE, wa } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/60 pb-28 pt-14 lg:pb-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-400 text-white shadow-lg shadow-red-500/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2C9.5 4.6 8 7.3 8 10.2 8 13.9 10.5 16 12 16s4-2.1 4-5.8C16 7.3 14.5 4.6 12 2zm0 18c-4.4 0-8-1.6-8-4.5 0-1.8 1.2-3.3 3-4.2v2.5c-.9.5-1.5 1.1-1.5 1.7 0 1.5 2.7 2.5 6.5 2.5s6.5-1 6.5-2.5c0-.6-.6-1.2-1.5-1.7v-2.5c1.8.9 3 2.4 3 4.2 0 2.9-3.6 4.5-8 4.5z"/></svg>
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-bold text-white">Red Apple Mobile Repair</span>
                <span className="block text-xs text-zinc-500">Specialist iPhone repair · Bengaluru</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Precision iPhone repair with premium care — genuine-grade parts, 90-day warranty, free doorstep pickup and repairs in as little as 30 minutes.
            </p>
            <div className="mt-5 flex gap-2">
              {["🍎", "📱", "🔋", "🪞", "💧"].map((e) => (
                <span key={e} className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm">{e}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Services</div>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
              {["Screen Replacement", "Battery Replacement", "Back Glass Repair", "Water Damage Revival", "Camera Repair", "Software Unlock"].map((s) => (
                <li key={s}><a href="#repairs" className="transition-colors hover:text-white">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="leading-relaxed">📍 {SITE.address}</li>
              <li>🕙 {SITE.hours}</li>
              <li><a href={SITE.phoneHref} className="font-semibold text-white hover:text-red-400">📞 {SITE.phone}</a></li>
              <li>
                <a href={wa("Hi Red Apple! 🍎")} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-400 hover:text-emerald-300">
                  💬 WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row">
          <div>© {new Date().getFullYear()} Red Apple Mobile Repair · #36, Halasuru, Bengaluru 560008</div>
          <div className="flex items-center gap-2">
            <span>Website crafted with 🔥 by</span>
            <a href="https://pixel-forge.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-bold text-white transition-colors hover:text-red-400">
              <span className="grid h-5 w-5 place-items-center rounded-md bg-gradient-to-br from-red-500 to-orange-400 text-[10px]">PF</span>
              Pixel Forge
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
