"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { developmentJourney } from "@/data/journey";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <ol ref={ref} className="relative border-t border-[var(--line)] pt-6">
      <motion.span
        aria-hidden="true"
        className="absolute left-[17px] top-[61px] bottom-7 w-px origin-top bg-[var(--line)]"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.15, ease: "easeOut" }}
      />
      {developmentJourney.map((item, index) => (
        <TimelineItem key={item.number} item={item} index={index} />
      ))}
    </ol>
  );
}
