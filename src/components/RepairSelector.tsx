"use client";

import { useState } from "react";
import { MODELS, REPAIRS, wa, SITE } from "@/lib/site";
import Reveal from "./Reveal";

const CONDITIONS = ["Cracked / Damaged", "Not Powering On", "Water / Liquid", "Random Issue", "Looks fine but acting up"];
const METHODS = ["Free Pickup & Drop 🚗", "Visit Store 📍"];

const STEPS = ["Model", "Repair", "Condition", "How", "Details"];

export default function RepairSelector() {
  const [step, setStep] = useState(0);
  const [model, setModel] = useState("");
  const [repair, setRepair] = useState("");
  const [condition, setCondition] = useState("");
  const [method, setMethod] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const rep = REPAIRS.find((r) => r.name === repair);

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSend = () => {
    const msg = `📱 *Red Apple Repair Quote Request*\n\n` +
      `Model: ${model}\nRepair: ${repair}\nCondition: ${condition}\nService: ${method}\nCustomer: ${name}\nPhone: ${phone}\n\n` +
      `Please share the final quote. 🍎`;
    window.open(wa(msg), "_blank");
  };

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <Reveal as="section" id="selector" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-red-300">
            ⚡ Instant Quote Tool
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Get your price in{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">30 seconds</span>
          </h2>
        </div>

        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-black/10 bg-zinc-950/80 backdrop-blur-2xl">
          {/* progress */}
          <div className="border-b border-black/10 px-8 pt-8">
            <div className="flex items-center justify-between">
              {STEPS.map((s, i) => (
                <div key={s} className={`flex items-center ${i > 0 ? "ml-2" : ""}`}>
                  <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold transition-colors ${
                    i <= step ? "bg-gradient-to-br from-red-500 to-orange-400 text-[#1d1d1f]" : "bg-black/[0.04] text-[#86868b]"
                  }`}>
                    {i < step ? "✓" : i + 1}
                  </span>
                  <span className={`ml-2 hidden text-xs font-semibold sm:inline ${i === step ? "text-[#1d1d1f]" : "text-[#86868b]"}`}>{s}</span>
                  {i < STEPS.length - 1 && <span className={`mx-2 hidden h-px w-5 sm:block ${i < step ? "bg-red-500/60" : "bg-black/[0.04]"}`} />}
                </div>
              ))}
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-black/[0.04]">
              <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="px-8 py-8">
            {step === 0 && (
              <div>
                <div className="mb-4 text-sm font-semibold text-[#1d1d1f]">Select your iPhone model</div>
                <div className="grid gap-2 max-h-64 overflow-y-auto pr-1">
                  {MODELS.map((m) => (
                    <button key={m} onClick={() => { setModel(m); next(); }}
                      className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                        model === m ? "border-red-500 bg-red-500/10 text-[#1d1d1f]" : "border-black/10 bg-white/5 text-[#1d1d1f] hover:bg-black/[0.04]"
                      }`}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <div className="mb-4 text-sm font-semibold text-[#1d1d1f]">What needs fixing?</div>
                <div className="grid gap-2 max-h-64 overflow-y-auto pr-1">
                  {REPAIRS.map((r) => (
                    <button key={r.id} onClick={() => { setRepair(r.name); next(); }}
                      className="rounded-xl border border-black/10 bg-white/5 px-4 py-3 text-left transition-all hover:bg-black/[0.04]">
                      <span className="text-sm font-semibold text-[#1d1d1f]">{r.icon} {r.name}</span>
                      <span className="ml-3 inline-block rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-bold text-orange-300">from {r.price}</span>
                      <div className="mt-1 text-xs text-[#86868b]">{r.desc} · ~{r.time}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="mb-4 text-sm font-semibold text-[#1d1d1f]">Describe the issue</div>
                <div className="grid gap-2 max-h-64 overflow-y-auto pr-1">
                  {CONDITIONS.map((c) => (
                    <button key={c} onClick={() => { setCondition(c); next(); }}
                      className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                        condition === c ? "border-red-500 bg-red-500/10 text-[#1d1d1f]" : "border-black/10 bg-white/5 text-[#1d1d1f] hover:bg-black/[0.04]"
                      }`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="mb-4 text-sm font-semibold text-[#1d1d1f]">How should we handle it?</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {METHODS.map((m) => (
                    <button key={m} onClick={() => { setMethod(m); next(); }}
                      className={`rounded-xl border px-5 py-5 text-left text-sm font-semibold transition-all ${
                        method === m ? "border-red-500 bg-red-500/10 text-[#1d1d1f]" : "border-black/10 bg-white/5 text-[#1d1d1f] hover:bg-black/[0.04]"
                      }`}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <div className="mb-4 text-sm font-semibold text-[#1d1d1f]">Your details</div>
                <div className="space-y-3">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-black/10 bg-white/5 px-4 py-3 text-sm text-[#1d1d1f] placeholder-[#86868b] outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" />
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" type="tel" className="w-full rounded-xl border border-black/10 bg-white/5 px-4 py-3 text-sm text-[#1d1d1f] placeholder-[#86868b] outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" />
                </div>
                <div className="mt-4 rounded-xl border border-black/10 bg-white/5 p-4">
                  <div className="text-xs text-[#86868b]">Your quote summary</div>
                  <div className="mt-2 space-y-1 text-sm text-[#1d1d1f]">
                    <div>📱 {model}</div>
                    <div>🔧 {repair}</div>
                    <div>⚡ {condition}</div>
                    <div>🚗 {method}</div>
                    {rep && <div className="mt-2 font-bold text-orange-300">From {rep.price} · ~{rep.time}</div>}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between">
              {step > 0 && (
                <button onClick={prev} className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#86868b] transition-colors hover:text-[#1d1d1f]">
                  ← Back
                </button>
              )}
              <div />
              {step < 4 ? (
                <button disabled={(step === 0 && !model) || (step === 1 && !repair) || (step === 2 && !condition) || (step === 3 && !method)}
                  onClick={next}
                  className="rounded-xl bg-gradient-to-r from-red-500 to-orange-400 px-6 py-2.5 text-sm font-bold text-[#1d1d1f] shadow-lg shadow-red-500/20 transition-all hover:shadow-red-500/40 disabled:opacity-40">
                  Next →
                </button>
              ) : (
                <button onClick={handleSend} disabled={!name || !phone}
                  className="rounded-xl bg-gradient-to-r from-red-500 to-orange-400 px-6 py-2.5 text-sm font-bold text-[#1d1d1f] shadow-lg shadow-red-500/20 transition-all hover:shadow-red-500/40 disabled:opacity-40">
                  Send on WhatsApp →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
