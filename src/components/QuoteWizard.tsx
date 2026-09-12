"use client";
import { useMemo, useState } from "react";
import { z } from "zod";
import { QUOTE_DEVICES, REPAIR_TYPES, wa } from "@/lib/site";
import { track } from "@/lib/analytics";

const customerSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid phone number"),
});

type Step = "device" | "model" | "repair" | "details";

const STEPS: { key: Step; label: string }[] = [
  { key: "device", label: "Device" },
  { key: "model", label: "Model" },
  { key: "repair", label: "Repair" },
  { key: "details", label: "Your details" },
];

export default function QuoteWizard({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState<Step>("device");
  const [device, setDevice] = useState("");
  const [model, setModel] = useState("");
  const [repair, setRepair] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const deviceDef = useMemo(() => QUOTE_DEVICES.find((d) => d.id === device), [device]);

  const goDevice = (id: string) => {
    setDevice(id); setModel(""); setRepair(""); 
    track("device_selected", { device: id });
    setStep("model");
  };
  const goModel = (m: string) => { setModel(m); track("model_selected", { device, model: m }); setStep("repair"); };
  const goRepair = (r: string) => { setRepair(r); track("quote_started", { device, model, repair: r }); setStep("details"); };

  const submit = () => {
    const res = customerSchema.safeParse({ name, phone });
    if (!res.success) {
      const e: Record<string, string> = {};
      for (const issue of res.error.issues) e[issue.path[0] as string] = issue.message;
      setErrors(e);
      return;
    }
    setErrors({});
    track("quote_completed", { device, model, repair });
    track("lead_created", { device, model, repair, source: "quote_wizard" });
    setSent(true);
    const msg =
      `🔧 *New Repair Quotation Request*\n\n` +
      `📱 Device: ${deviceDef?.label ?? device}\n` +
      `🏷️ Model: ${model}\n` +
      `🛠️ Repair: ${repair}\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n\n` +
      `Please share the estimate. Thank you!`;
    window.open(wa(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`mx-auto ${compact ? "max-w-[560px]" : "max-w-[720px]"}`}>
      {/* Step indicator */}
      <div className="mb-8 flex items-center justify-center gap-2">
        {STEPS.map((s, i) => {
          const order: Step[] = ["device", "model", "repair", "details"];
          const activeIdx = order.indexOf(step);
          const active = i <= activeIdx;
          return (
            <div key={s.key} className="flex items-center gap-2">
              <div className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-bold transition-all ${
                active ? "bg-[#1d1d1f] text-white" : "bg-black/[0.04] text-[#86868b]"
              }`}>
                <span className={`grid h-5 w-5 place-items-center rounded-full text-[10px] ${active ? "bg-white/20" : "bg-black/[0.05]"}`}>{i + 1}</span>
                {s.label}
              </div>
              {i < 3 && <span className={`h-px w-6 ${i < activeIdx ? "bg-[#1d1d1f]" : "bg-black/10"}`} />}
            </div>
          );
        })}
      </div>

      <div className="rounded-[30px] glass p-7 md:p-10">
        {sent && (
          <div className="py-10 text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#30d158]/10 text-[40px]">✅</div>
            <h3 className="mt-6 font-apple text-[22px] font-bold">Opening WhatsApp…</h3>
            <p className="mt-2 text-[14px] text-[#86868b]">Your request is ready. Hit send and our team will reply with your estimate — usually within minutes.</p>
            <button onClick={() => { setSent(false); setStep("device"); }} className="cta-outline mt-8">New quote</button>
          </div>
        )}

        {!sent && step === "device" && (
          <div>
            <h3 className="text-center font-apple text-[19px] font-bold">What is your device?</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              {QUOTE_DEVICES.map((d) => (
                <button key={d.id} onClick={() => goDevice(d.id)}
                  className="rounded-2xl border border-black/[0.07] bg-white/80 px-4 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-[#ff2d55]/40 hover:shadow-lg">
                  <span className="text-[20px]">🔧</span>
                  <span className="mt-2 block text-[13.5px] font-bold text-[#1d1d1f]">{d.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {!sent && step === "model" && deviceDef && (
          <div>
            <h3 className="text-center font-apple text-[19px] font-bold">Select your {deviceDef.label} model</h3>
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {deviceDef.models.map((m) => (
                <button key={m} onClick={() => goModel(m)}
                  className="rounded-2xl border border-black/[0.07] bg-white/80 px-5 py-3.5 text-left text-[13.5px] font-semibold text-[#1d1d1f] transition-all hover:-translate-y-0.5 hover:border-[#ff2d55]/40 hover:shadow-lg">
                  {m}
                </button>
              ))}
            </div>
            <button onClick={() => setStep("device")} className="mt-6 text-[12.5px] font-semibold text-[#86868b] hover:text-[#1d1d1f]">← Back</button>
          </div>
        )}

        {!sent && step === "repair" && (
          <div>
            <h3 className="text-center font-apple text-[19px] font-bold">What needs to be fixed?</h3>
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {REPAIR_TYPES.map((r) => (
                <button key={r} onClick={() => goRepair(r)}
                  className="rounded-2xl border border-black/[0.07] bg-white/80 px-5 py-3.5 text-left text-[13.5px] font-semibold text-[#1d1d1f] transition-all hover:-translate-y-0.5 hover:border-[#ff2d55]/40 hover:shadow-lg">
                  {r}
                </button>
              ))}
            </div>
            <button onClick={() => setStep("model")} className="mt-6 text-[12.5px] font-semibold text-[#86868b] hover:text-[#1d1d1f]">← Back</button>
          </div>
        )}

        {!sent && step === "details" && (
          <div>
            <div className="mb-6 rounded-2xl bg-[#1d1d1f] p-6 text-white">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">Your selection</div>
                  <div className="mt-1 text-[15px] font-bold">{deviceDef?.label} · {model}</div>
                  <div className="text-[13px] text-white/70">{repair}</div>
                </div>
                <button onClick={() => setStep("device")} className="rounded-full bg-white/10 px-4 py-2 text-[12px] font-semibold hover:bg-white/20">Change</button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-[12.5px] font-bold text-[#1d1d1f]">Your name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name"
                  className="mt-2 w-full rounded-2xl border border-black/[0.08] bg-white px-5 py-3.5 text-[14px] outline-none transition-colors placeholder:text-[#b0b0b5] focus:border-[#ff2d55]/50" />
                {errors.name && <p className="mt-1.5 text-[12px] font-semibold text-[#ff2d55]">{errors.name}</p>}
              </div>
              <div>
                <label className="text-[12.5px] font-bold text-[#1d1d1f]">Phone / WhatsApp number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 …" inputMode="tel"
                  className="mt-2 w-full rounded-2xl border border-black/[0.08] bg-white px-5 py-3.5 text-[14px] outline-none transition-colors placeholder:text-[#b0b0b5] focus:border-[#ff2d55]/50" />
                {errors.phone && <p className="mt-1.5 text-[12px] font-semibold text-[#ff2d55]">{errors.phone}</p>}
              </div>
            </div>

            <div className="mt-7 flex flex-col items-center gap-3">
              <button onClick={submit} className="cta-primary w-full sm:w-auto">
                Get My Estimate on WhatsApp →
              </button>
              <button onClick={() => setStep("repair")} className="text-[12.5px] font-semibold text-[#86868b] hover:text-[#1d1d1f]">← Back</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
