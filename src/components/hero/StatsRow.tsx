"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { hero } from "@/data/hero";

function Count({ value, display }: { value: number; display: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }
    let frame = 0;
    const started = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - started) / 700, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{inView && count > 0 ? String(count).padStart(display.length, "0") : display}</span>;
}

export function StatsRow() {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-5 border-t border-[var(--line)] pt-5">
      {hero.stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55 + index * 0.08 }}
        >
          <p className="text-2xl font-semibold tracking-[-0.06em] text-[var(--fg)]"><Count value={stat.value} display={stat.display} /></p>
          <p className="mt-1 max-w-[120px] text-[10px] leading-4 text-[var(--muted)]">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
