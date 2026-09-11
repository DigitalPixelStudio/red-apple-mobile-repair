"use client";

import { useEffect, useState } from "react";
import { SITE, wa } from "@/lib/site";

const LINKS = [
  { href: "#repairs", label: "Repairs" },
  { href: "#selector", label: "Get Quote" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Visit Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-400 shadow-lg shadow-red-500/30 transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
              <path d="M12 2C9.5 4.6 8 7.3 8 10.2 8 13.9 10.5 16 12 16s4-2.1 4-5.8C16 7.3 14.5 4.6 12 2zm0 18c-4.4 0-8-1.6-8-4.5 0-1.8 1.2-3.3 3-4.2v2.5c-.9.5-1.5 1.1-1.5 1.7 0 1.5 2.7 2.5 6.5 2.5s6.5-1 6.5-2.5c0-.6-.6-1.2-1.5-1.7v-2.5c1.8.9 3 2.4 3 4.2 0 2.9-3.6 4.5-8 4.5z"/>
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-tight text-white">Red Apple</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">Mobile Repair</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-zinc-300 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={wa("Hi Red Apple! I'd like a repair quote. 🍎")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/25 transition-all hover:shadow-red-500/50 hover:brightness-110 sm:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.7-1.3 1.3-1.8 1.4-.5 0-1 .2-3.4-.7-2.9-1.1-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.6c-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.2.5.1.7-.1l1-1.1c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4.1.2.1.7-.1 1.4z"/></svg>
            WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-4 mt-3 rounded-2xl border border-white/10 bg-zinc-950/95 p-4 backdrop-blur-xl lg:hidden">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
