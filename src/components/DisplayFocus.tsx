"use client";
import Reveal from "./Reveal";
import { wa } from "@/lib/site";
import { track } from "@/lib/analytics";

const REPAIRS = [
  { title: "Front Display", time: "~45 min", icon: "📱", desc: "OEM-grade OLED with True Tone. Clear, bright, exact-fit panels for every iPhone model.", tag: "Most popular" },
  { title: "Back Glass", time: "~60 min", icon: "🪞", desc: "Laser-aligned factory-grade back glass. MagSafe-compatible with a seamless finish.", tag: "Pro Max specialist" },
  { title: "Screen + Back Combo", time: "Same day", icon: "🔁", desc: "Both sides of your iPhone restored in one visit — with a priority lane for Pro & Pro Max.", tag: "Best value" },
];

export default function DisplayFocus() {
  return (
    <section id="display" className="section-apple relative overflow-hidden bg-[#f5f5f7]">
      <div className="red-blob pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#ff2d55]">Where we excel</p>
          <h2 className="section-title font-apple mt-3 text-[#1d1d1f]">iPhone display &amp; back glass <span className="gradient-text">specialists.</span></h2>
          <p className="section-subtitle mx-auto mt-5">Cracked glass is our daily bread. Every iPhone — from 6 to 16 Pro Max — restored to like-new with precision tools and genuine-grade panels.</p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {REPAIRS.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <div className="ring-card relative h-full overflow-hidden rounded-[30px] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/[0.08]">
                <span className="absolute right-5 top-5 rounded-full bg-[#ff2d55]/10 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wide text-[#ff2d55]">{r.tag}</span>
                <span className="grid h-16 w-16 place-items-center rounded-[20px] bg-gradient-to-br from-[#ff2d55] to-[#ff9500] text-[26px] shadow-lg shadow-[#ff2d55]/25">{r.icon}</span>
                <h3 className="mt-6 font-apple text-[20px] font-bold text-[#1d1d1f]">{r.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#86868b]">{r.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-[12.5px] font-semibold text-[#86868b]">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-[#30d158]" /> {r.time} while you wait
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={120}>
          <a href={wa("Hi! I need an iPhone display / back glass replacement. What's the estimate? 📱")}
            target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { source: "display_focus" })}
            className="cta-primary">
            Get a Display Quote on WhatsApp →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
