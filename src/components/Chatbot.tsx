"use client";

import { useEffect, useRef, useState } from "react";
import { CHAT_ANSWERS, wa } from "@/lib/site";

type Msg = { from: "user" | "bot"; text: string };

const QUICK = ["💰 Prices", "🕙 Timings", "📍 Location", "🚗 Free pickup", "🛡️ Warranty"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: "Hi! 👋 I'm the Red Apple assistant. Ask me about prices, repairs, pickup or timings — or tap a shortcut below. 🍎" }]);
  const [input, setInput] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  const botReply = (q: string): string => {
    const lower = q.toLowerCase();
    const hit = CHAT_ANSWERS.find((a) => a.keys.some((k) => lower.includes(k)));
    if (hit) return hit.reply;
    if (lower.includes("quote") || lower.includes("book")) {
      return "Great! Tap the button below and I'll open WhatsApp with your request pre-filled. 🚀";
    }
    return "I can help with prices, repairs, pickup, warranty & store info! Tap a shortcut below or try asking differently. For anything else, our team is one WhatsApp tap away. 💬";
  };

  const send = (text?: string) => {
    const value = (text ?? input).trim();
    if (!value) return;
    setMsgs((m) => [...m, { from: "user", text: value }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", text: botReply(value) }]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  return (
    <>
      {/* launcher */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open assistant"
        className={`fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-400 text-white shadow-2xl shadow-red-500/40 transition-all duration-300 hover:scale-110 lg:bottom-6 lg:right-6 ${open ? "rotate-90" : ""}`}
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 3C7 3 3 6.6 3 11c0 1.8.6 3.5 1.7 4.9-.2 1.3-.8 2.6-1.7 3.7 2.2-.2 4-1 5.3-2 1.1.4 2.4.6 3.7.6 5 0 9-3.6 9-8s-4-7.2-9-7.2zM8 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
        )}
        {!open && <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-black bg-emerald-400" />}
      </button>

      {/* panel */}
      <div className={`fixed bottom-36 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-white/15 bg-zinc-950/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:bottom-24 lg:right-6 ${open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
        <div className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-500 px-5 py-4">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/20 text-xl">🍎</span>
          <div>
            <div className="text-sm font-bold text-white">Red Apple Assistant</div>
            <div className="flex items-center gap-1.5 text-[11px] text-red-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Online · replies instantly
            </div>
          </div>
        </div>

        <div ref={boxRef} className="flex h-80 flex-col gap-3 overflow-y-auto p-4">
          {msgs.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.from === "user" ? "rounded-br-md bg-gradient-to-r from-red-500 to-orange-400 text-white" : "rounded-bl-md bg-white/10 text-zinc-200"
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white/10 px-4 py-3">
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:120ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:240ms]" />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 px-4 pb-2">
          {QUICK.map((q) => (
            <button key={q} onClick={() => send(q.replace(/^\S+\s/, ""))}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/10">
              {q}
            </button>
          ))}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex items-center gap-2 border-t border-white/10 p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about repairs, prices…"
            className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-red-500"
          />
          <button type="submit" aria-label="Send" className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-red-500 to-orange-400 text-white transition-transform hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3.4 20.4l17.6-8.4L3.4 3.6 3.4 10l12 2-12 2z"/></svg>
          </button>
        </form>

        <a href={wa("Hi Red Apple! I need help with a repair. 🍎")} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-500/15 py-3 text-sm font-bold text-emerald-300 transition-colors hover:bg-emerald-500/25">
          💬 Continue on WhatsApp for a human
        </a>
      </div>
    </>
  );
}
