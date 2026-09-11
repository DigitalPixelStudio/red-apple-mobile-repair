"use client";
import { useEffect, useRef, useState } from "react";
import { CHAT_ANSWERS, wa } from "@/lib/site";

type Msg = { from: "user" | "bot"; text: string };
const QUICK = ["💰 Prices", "⌚ Timings", "📍 Address", "🚗 Free pickup", "🛡️ Warranty"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: "Hi! 👋 I'm the Red Apple assistant. Ask me about prices, repairs, pickup or timings — or tap a shortcut below." }]);
  const [input, setInput] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => { boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" }); }, [msgs, typing, open]);

  const botReply = (q: string): string => {
    const lower = q.toLowerCase();
    const hit = CHAT_ANSWERS.find((a) => a.keys.some((k) => lower.includes(k)));
    if (hit) return hit.reply;
    if (lower.includes("quote") || lower.includes("book")) return "Tap the button below and I'll open WhatsApp with your request pre-filled. 🚀";
    return "I can help with prices, repairs, pickup, warranty & store info! Tap a shortcut below or ask differently. 💬";
  };

  const send = (text?: string) => {
    const value = (text ?? input).trim();
    if (!value) return;
    setMsgs((m) => [...m, { from: "user", text: value }]);
    setInput("");
    setTyping(true);
    setTimeout(() => { setMsgs((m) => [...m, { from: "bot", text: botReply(value) }]); setTyping(false); }, 700 + Math.random() * 400);
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} aria-label="Open assistant"
        className={`fixed bottom-24 right-5 z-50 grid h-[56px] w-[56px] place-items-center rounded-2xl bg-gradient-to-br from-[#ff2d55] to-[#ff9500] text-white shadow-2xl shadow-[#ff2d55]/30 transition-all duration-300 hover:scale-110 lg:bottom-8 lg:right-8 ${open ? "rotate-90" : ""}`}>
        {open ? <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          : <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 3C7 3 3 6.6 3 11c0 1.8.6 3.5 1.7 4.9-.2 1.3-.8 2.6-1.7 3.7 2.2-.2 4-1 5.3-2 1.1.4 2.4.6 3.7.6 5 0 9-3.6 9-8s-4-7.2-9-7.2zM8 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>}
        {!open && <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-black bg-[#30d158]"/>}
      </button>

      <div className={`fixed bottom-[108px] right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0a0a0a]/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:bottom-28 lg:right-8 ${open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#ff2d55] to-[#ff9500] px-6 py-5">
          <img src="/icon.svg" alt="" className="h-10 w-10 rounded-xl" />
          <div>
            <div className="font-apple text-[14px] font-bold text-white">Red Apple Assistant</div>
            <div className="flex items-center gap-1.5 text-[11px] text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-[#30d158]"/> Online</div>
          </div>
        </div>

        <div ref={boxRef} className="flex h-[320px] flex-col gap-3 overflow-y-auto p-4">
          {msgs.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${
                m.from === "user" ? "rounded-br-md bg-gradient-to-r from-[#ff2d55] to-[#ff9500] text-white" : "rounded-bl-md bg-white/[0.06] text-[#f5f5f7]"}`}>{m.text}</div>
            </div>
          ))}
          {typing && <div className="flex justify-start"><div className="flex gap-1 rounded-2xl rounded-bl-md bg-white/[0.06] px-4 py-3">
            <span className="h-2 w-2 animate-bounce rounded-full bg-[#86868b]"/><span className="h-2 w-2 animate-bounce rounded-full bg-[#86868b] [animation-delay:120ms]"/><span className="h-2 w-2 animate-bounce rounded-full bg-[#86868b] [animation-delay:240ms]"/>
          </div></div>}
        </div>

        <div className="flex flex-wrap gap-2 px-4 pb-2">
          {QUICK.map((q) => (
            <button key={q} onClick={() => send(q.replace(/^\S+\s/, ""))} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium text-[#a1a1a6] transition-colors hover:bg-white/[0.06]">{q}</button>
          ))}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex items-center gap-2 border-t border-white/[0.06] p-3">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about repairs…"
            className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-[13px] text-white placeholder-[#86868b] outline-none focus:border-[#ff2d55]"/>
          <button type="submit" aria-label="Send" className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-[#ff2d55] to-[#ff9500] text-white transition-transform hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3.4 20.4l17.6-8.4L3.4 3.6v6.8l12 1.6-12 1.6z"/></svg>
          </button>
        </form>

        <a href={wa("Hi Red Apple! I need help. 🍎")} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#30d158]/10 py-3 text-[13px] font-bold text-[#30d158] transition-colors hover:bg-[#30d158]/20">💬 Continue on WhatsApp</a>
      </div>
    </>
  );
}
