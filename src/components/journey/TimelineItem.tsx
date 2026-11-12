"use client";

import { motion } from "framer-motion";
import type { DevelopmentJourney } from "@/data/journey";
import { Chip } from "@/components/ui/Chip";

export function TimelineItem({ item, index }: { item: DevelopmentJourney; index: number }) {
  return (
    <motion.li
      className="group relative grid grid-cols-[36px_1fr] gap-5 pb-9 last:pb-0 sm:gap-6"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg)] text-[10px] font-bold text-[var(--fg)] transition-colors duration-200 group-hover:bg-[var(--chip)]">
        {item.number}
      </div>
      <div className="pt-0.5">
        <Chip>{item.tag}</Chip>
        <h4 className="mt-3 text-[17px] font-semibold tracking-[-0.025em] text-[var(--fg)]">
          {item.title}
        </h4>
        <p className="mt-2 max-w-[560px] text-[12px] leading-6 text-[var(--muted)]">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}
