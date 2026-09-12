"use client";
import Reveal from "./Reveal";
import { wa } from "@/lib/site";
import { track } from "@/lib/analytics";

const ITEMS = [
  { icon: "⚙️", title: "OS Installation", desc: "iOS / iPadOS / macOS installed with genuine Apple images. Clean, stable, updated." },
  { icon: "📦", title: "Firmware & Restore", desc: "DFU / Recovery mode restores, firmware updates, boot loops and stuck-Apple fixes." },
  { icon: "💾", title: "Data Recovery", desc: "Photos, contacts, WhatsApp chats and files recovered — logical or board-level." },
  { icon: "🔓", title: "Lawful Unlocking", desc: "Network unlocking, forgotten passcode recovery (with proof of ownership), account help." },
  { icon: "🐢", title: "Performance Repair", desc: "Slow devices, overheating, battery-drain — diagnosed and tuned at OS level." },
  { icon: "🛡️", title: "Setup & Troubleshoot", desc: "iCloud setup, sync issues, app crashes, migration and configuration." },
];

export default function SoftwareRecovery() {
  return (
    <section id="software" className="section-apple relative overflow-hidden bg-[#f5f5f7]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[0%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#ff9500]/[0.07] blur-[140px]" />
        <div className="absolute bottom-[5%] left-[0%] h-[380px] w-[380px] rounded-full bg-[#ff2d55]/[0.06] blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[12.5px] font-bold uppercase tracking-[0.22em] text-[#ff2d55]">Software &amp; recovery</p>
          <h2 className="section-title font-apple mt-3 text-[#1d1d1f]">Not just hardware — <span className="gradient-text">your data &amp; OS too.</span></h2>
          <p className="section-subtitle mx-auto mt-5">A separate dedicated desk for operating systems, firmware, recovery and everything software — handled with genuine Apple tools and zero data risk.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80}>
              <div className="group flex h-full gap-4 rounded-[24px] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#ff2d55]/10 to-[#ff9500]/10 text-[22px] transition-transform group-hover:scale-110">{it.icon}</span>
                <div>
                  <h3 className="font-apple text-[15.5px] font-bold text-[#1d1d1f]">{it.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#86868b]">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={120}>
          <a href={wa("Hi! I have an Apple software / recovery issue. Can you help? ⚙️")} target="_blank" rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { source: "software" })}
            className="cta-dark">
            Describe your issue on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
