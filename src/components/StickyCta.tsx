"use client";

import { useEffect, useState } from "react";
import { SITE, wa } from "@/lib/site";

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-500 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`}>
      <div className="mx-3 mb-3 grid grid-cols-3 gap-2 rounded-2xl border border-white/15 bg-zinc-950/90 p-2 shadow-2xl backdrop-blur-xl">
        <a href={SITE.phoneHref} className="flex flex-col items-center justify-center gap-1 rounded-xl bg-white/5 py-2.5 text-white">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>
          <span className="text-[11px] font-semibold">Call</span>
        </a>
        <a href="#selector" className="flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-red-500 to-orange-400 py-2.5 text-white shadow-lg shadow-red-500/25">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
          <span className="text-[11px] font-bold">Get Quote</span>
        </a>
        <a href={wa("Hi Red Apple! I need a repair. 🍎")} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 rounded-xl bg-emerald-500/90 py-2.5 text-white">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
