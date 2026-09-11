"use client";

import { useEffect, useState } from "react";
import { wa } from "@/lib/site";

const STATES = [
  { icon: "📱", text: "Front Display — 45 min", sub: "from ₹1,499" },
  { icon: "🔋", text: "Battery — 30 min", sub: "from ₹1,299" },
  { icon: "🪞", text: "Back Glass — 60 min", sub: "from ₹1,799" },
  { icon: "🔌", text: "Charging Port — 40 min", sub: "from ₹999" },
];

export default function DynamicIsland() {
  const [idx, setIdx] = useState(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % STATES.length);
      setPulse(true);
      setTimeout(() => setPulse(false), 300);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  const s = STATES[idx];

  return (
    <a
      href="#selector"
      className="fixed left-1/2 top-4 z-40 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/15 bg-black/80 px-5 py-2.5 shadow-2xl shadow-red-500/10 backdrop-blur-2xl transition-transform duration-300 hover:scale-105 md:flex"
      aria-label="Live repair status widget"
    >
      <span className={`grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-red-500 to-orange-400 text-sm shadow-md shadow-red-500/30 ${pulse ? "scale-110" : ""} transition-transform duration-300`}>
        {s.icon}
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-semibold text-white">{s.text}</span>
        <span className="block text-[10px] text-zinc-400">Live queue · {s.sub}</span>
      </span>
      <span className="relative ml-1 flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
    </a>
  );
}
