"use client";
import { useEffect, useState } from "react";
import { SITE, wa } from "@/lib/site";
import { track } from "@/lib/analytics";

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed bottom-5 left-1/2 z-[60] w-[calc(100vw-2rem)] max-w-[560px] -translate-x-1/2 transition-all duration-500 ${
      show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
    }`}>
      <div className="glass flex items-center gap-2 rounded-full bg-white/85 p-2 shadow-2xl backdrop-blur-2xl">
        <a href="#quote" onClick={() => track("quote_started", { source: "sticky" })}
          className="flex-1 rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-5 py-3 text-center text-[13.5px] font-bold text-white">
          🧮 Get Estimate
        </a>
        <a href={wa("Hi Red Apple Mobile Repair! I need a repair. 🍎")} target="_blank" rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { source: "sticky" })}
          className="flex-1 rounded-full bg-[#25D366] px-5 py-3 text-center text-[13.5px] font-bold text-white">
          💬 WhatsApp
        </a>
        <a href={SITE.phoneHref} onClick={() => track("call_click", { source: "sticky" })}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#1d1d1f] text-white">📞</a>
      </div>
    </div>
  );
}
