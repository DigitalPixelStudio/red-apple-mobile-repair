"use client";
import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="section-apple bg-[#f5f5f7]">
      <div className="mx-auto max-w-[600px] px-6 text-center lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] bg-white p-10 shadow-xl shadow-black/[0.04] border border-black/[0.04]">
            <div className="text-4xl">📬</div>
            <h2 className="mt-4 font-apple text-[24px] font-bold text-[#1d1d1f]">iPhone care tips, every week.</h2>
            <p className="mt-2 text-[14px] text-[#86868b]">Free maintenance guides, repair offers, and Apple tips delivered to your inbox. No spam, ever.</p>
            {sent ? (
              <div className="mt-6 rounded-2xl bg-[#30d158]/10 p-4 text-[14px] font-semibold text-[#30d158]">✅ You&apos;re subscribed! Check your inbox.</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }} className="mt-6 flex gap-2">
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" type="email" required
                  className="flex-1 rounded-xl border border-black/[0.08] bg-[#f5f5f7] px-4 py-3 text-[14px] text-[#1d1d1f] placeholder-[#86868b] outline-none focus:border-[#ff2d55] focus:ring-2 focus:ring-[#ff2d55]/10"/>
                <button type="submit" className="rounded-xl bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-6 py-3 text-[14px] font-bold text-white transition-all hover:scale-[1.03]">Subscribe</button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
