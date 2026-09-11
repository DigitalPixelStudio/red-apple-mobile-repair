"use client";
import { SITE, wa } from "@/lib/site";

export default function DynamicBar() {
  return (
    <div className="dynamic-bar relative z-50 px-4 py-2.5 text-center text-[13px] font-semibold text-white">
      <span>🔥 Walk-in or book a free pickup today — </span>
      <a href={wa("Hi! I want a repair. 🍎")} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/80">WhatsApp now</a>
      <span className="mx-2 opacity-50">|</span>
      <span>Most repairs done in 30 minutes ✨</span>
    </div>
  );
}
