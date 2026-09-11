"use client";
import { useEffect, useState } from "react";

const STATES = [
  { icon: "📱", text: "Display · 45 min", sub: "from ₹1,499" },
  { icon: "🔋", text: "Battery · 30 min", sub: "from ₹1,299" },
  { icon: "🪞", text: "Back Glass · 60 min", sub: "from ₹1,799" },
  { icon: "💧", text: "Water Rescue · Same day", sub: "from ₹2,499" },
];

export default function DynamicIsland() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % STATES.length), 3500);
    return () => clearInterval(t);
  }, []);

  const s = STATES[idx];

  return (
    <a href="#selector" className="fixed left-1/2 top-4 z-40 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/[0.08] bg-black/70 px-5 py-2.5 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-[#ff2d55]/30 md:flex">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#ff2d55] to-[#ff9500] text-sm shadow-md shadow-[#ff2d55]/20">{s.icon}</span>
      <span className="leading-tight">
        <span className="block text-[13px] font-semibold text-white">{s.text}</span>
        <span className="block text-[10px] text-[#86868b]">Live · {s.sub}</span>
      </span>
      <span className="relative ml-1 flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#30d158] opacity-60"/>
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#30d158]"/>
      </span>
    </a>
  );
}
