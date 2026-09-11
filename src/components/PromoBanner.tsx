"use client";
import { wa } from "@/lib/site";
import Reveal from "./Reveal";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-[#1d1d1f] py-20">
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#ff2d55]/20 blur-[120px]"/>
        <div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-[#ff9500]/20 blur-[120px]"/>
      </div>
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center lg:px-8">
        <Reveal>
          <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-5 py-2 text-[12px] font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff2d55]/20">🎉 Limited Time Offer</span>
          <h2 className="mt-4 font-apple text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight text-white">
            Get <span className="bg-gradient-to-r from-[#ff2d55] to-[#ff9500] bg-clip-text text-transparent">20% OFF</span> on your first repair
          </h2>
          <p className="mx-auto mt-5 max-w-[500px] font-apple text-[16px] leading-relaxed text-white/60">
            New to Red Apple Mobile Store? Welcome! Enjoy 20% off on any repair service. Just show this page or mention this offer on WhatsApp.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={wa("Hi! I want to claim my 20% first-time discount. 🍎🎉")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#ff2d55]/20 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-[#ff2d55]/30">
              💬 Claim on WhatsApp
            </a>
            <span className="text-[13px] text-white/40">No coupon needed · Just mention this offer</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
