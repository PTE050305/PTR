"use client";

import type { HeroBadge } from "@/data/hero";
import { motion } from "framer-motion";

export function FloatingBadge({ badge }: { badge: HeroBadge }) {
  return (
    <motion.div
      className={`absolute z-10 rounded-lg border border-[var(--line)] bg-[var(--bg)] px-3 py-2 text-[9px] font-semibold tracking-[0.12em] text-[var(--fg)] shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-none ${
        badge.position === "top"
          ? "right-[-10px] top-12 animate-[hero-float_4s_ease-in-out_infinite]"
          : "bottom-10 left-[-10px] animate-[hero-float_3.4s_ease-in-out_infinite]"
      }`}
      animate={{ y: [0, badge.position === "top" ? -4 : 4, 0] }}
      transition={{ duration: badge.position === "top" ? 4 : 3.4, repeat: Infinity, ease: "easeInOut" }}
    >
      {badge.accent && <span aria-hidden="true" className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--fg)]" />}
      {badge.text}
    </motion.div>
  );
}
