"use client";
import { useEffect, useState } from "react";
import { SITE, wa } from "@/lib/site";

const LINKS = [
  { href: "#repairs", label: "Repairs" },
  { href: "#selector", label: "Get Quote" },
  { href: "#why", label: "Why Us" },
  { href: "#workshop", label: "Workshop" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.06]" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <img src="/icon.svg" alt="Red Apple" className="h-9 w-9 rounded-xl" />
          <span className="font-apple text-[15px] font-semibold tracking-tight text-white">Red Apple</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] font-medium text-[#86868b] transition-colors hover:text-white">{l.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={wa("Hi Red Apple! I'd like a repair quote. 🍎")} target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:brightness-110 hover:scale-[1.02]">
            💬 WhatsApp
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white lg:hidden">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18"/> : <path d="M4 8h16M4 12h16M4 16h16"/>}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mb-4 rounded-3xl border border-white/[0.08] bg-black/90 p-6 backdrop-blur-2xl lg:hidden">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-[15px] font-medium text-[#f5f5f7] hover:bg-white/5">{l.label}</a>
          ))}
          <a href={wa("Hi Red Apple! 🍎")} target="_blank" rel="noopener noreferrer" className="mt-4 block rounded-xl bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-5 py-3 text-center text-[15px] font-semibold text-white">💬 WhatsApp Us</a>
        </div>
      )}
    </header>
  );
}
