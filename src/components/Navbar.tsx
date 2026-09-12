"use client";
import { useEffect, useState } from "react";
import { SITE, wa } from "@/lib/site";
import { track } from "@/lib/analytics";

const LINKS = [
  { href: "#ecosystem", label: "Devices" },
  { href: "#repairs", label: "Repairs" },
  { href: "#software", label: "Software & Recovery" },
  { href: "#process", label: "How It Works" },
  { href: "#quote", label: "Get Quote" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 400 && y > last && !open);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "glass border-b border-black/[0.06]" : "bg-transparent"}`}
    >
      {/* Liquid glass nav */}
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Red Apple Mobile Repair home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#ff2d55] to-[#ff9500] font-black text-white shadow-lg shadow-[#ff2d55]/25 transition-transform group-hover:scale-105">
            🍎
          </span>
          <span className="leading-tight">
            <span className="block font-apple text-[14px] font-bold tracking-tight text-[#1d1d1f]">Red Apple</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff2d55]">Mobile Repair</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] font-medium text-[#86868b] transition-colors hover:text-[#1d1d1f]">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={wa("Hi Red Apple Mobile Repair! I need a repair estimate. 🍎")}
            target="_blank" rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { source: "navbar" })}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-[13px] font-bold text-white transition-all hover:brightness-105 hover:scale-[1.03] shadow-md shadow-[#25D366]/25"
          >
            WhatsApp
          </a>
          <a
            href={SITE.phoneHref}
            onClick={() => track("call_click", { source: "navbar" })}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[13px] font-semibold text-[#1d1d1f] backdrop-blur-xl transition-colors hover:bg-white"
          >
            Call
          </a>
          <button
            onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full glass text-[#1d1d1f] xl:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 12h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mb-4 rounded-3xl glass p-6 shadow-2xl xl:hidden">
          <div className="grid gap-1">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-[15px] font-medium text-[#1d1d1f] hover:bg-black/[0.04]">
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <a href={wa("Hi Red Apple Mobile Repair! 🍎")} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl bg-[#25D366] px-5 py-3 text-center text-[14px] font-bold text-white">💬 WhatsApp</a>
            <a href={SITE.phoneHref} className="flex-1 rounded-xl border border-black/10 bg-white px-5 py-3 text-center text-[14px] font-semibold">📞 Call</a>
          </div>
        </div>
      )}
    </header>
  );
}
