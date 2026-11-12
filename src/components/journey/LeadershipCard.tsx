"use client";

import { motion } from "framer-motion";
import { leadership } from "@/data/journey";
import { Card } from "@/components/ui/Card";

export function LeadershipCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Card>
        <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[var(--fg)]">
          Leadership experience
        </h3>
        <div className="mt-5 divide-y divide-[var(--line)] border-t border-[var(--line)]">
          {leadership.map((entry) => (
            <div className="py-4 first:pb-4 last:pb-0" key={entry.role}>
              <p className="text-[10px] font-semibold text-[var(--subtle)]">{entry.years}</p>
              <p className="mt-1 text-[12px] font-semibold text-[var(--fg)]">{entry.role}</p>
              <p className="mt-1.5 text-[11px] leading-5 text-[var(--muted)]">{entry.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
