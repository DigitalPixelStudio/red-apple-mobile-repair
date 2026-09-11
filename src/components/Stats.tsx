"use client";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site";
import Reveal from "./Reveal";

function Counter({ target, suffix }: { target: string; suffix: string }) {
  const [count, setCount] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const numeric = parseFloat(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const duration = 2000;
      const start = performance.now();
      const isFloat = target.includes(".");
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = eased * numeric;
        setCount(isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString());
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [numeric, target]);

  return <div ref={ref} className="font-apple text-[44px] font-bold text-white md:text-[56px]">{count}{suffix}</div>;
}

export default function Stats() {
  return (
    <section className="section-apple">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-apple text-[13px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Proven numbers</p>
          <h2 className="section-title font-apple text-white mt-3">
            Trusted by <span className="gradient-text">thousands</span> in Bangalore.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="glass-card rounded-3xl p-8 text-center">
              <div className="text-3xl">{s.icon}</div>
              <Counter target={s.value} suffix={s.suffix} />
              <p className="mt-2 text-[13px] text-[#86868b]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
