"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { interests } from "@/data/journey";
import { Card } from "@/components/ui/Card";

export function InterestsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
    >
      <Card>
        <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[var(--fg)]">
          Professional interests
        </h3>
        <ul className="mt-5 divide-y divide-[var(--line)] border-t border-[var(--line)]">
          {interests.map((interest) => (
            <li key={interest.number}>
              <a
                href="#contact"
                className="group flex min-h-11 items-center gap-3 transition-colors hover:bg-[var(--chip)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fg)]"
              >
                <span className="text-[10px] font-semibold text-[var(--subtle)]">{interest.number}</span>
                <span className="flex-1 text-[11px] font-semibold text-[var(--fg)]">{interest.title}</span>
                <ArrowUpRight aria-hidden="true" size={12} className="text-[var(--subtle)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
