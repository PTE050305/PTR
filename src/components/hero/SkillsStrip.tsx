"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { hero } from "@/data/hero";

export function SkillsStrip() {
  const items = [...hero.skills, ...hero.skills];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div className="overflow-hidden border-y border-[var(--line)] bg-[var(--chip)] py-6 text-[var(--fg)]">
      <motion.div
        className="mx-auto flex min-w-max items-center justify-center gap-5 px-5 md:gap-8"
        animate={isMobile ? { x: [0, -420] } : undefined}
        transition={isMobile ? { duration: 28, repeat: Infinity, ease: "linear" } : undefined}
        whileHover={isMobile ? { animationPlayState: "paused" } : undefined}
      >
        {items.map((skill, index) => (
          <span className="flex items-center gap-5 whitespace-nowrap text-[10px] font-semibold tracking-[0.14em] md:gap-8" key={`${skill}-${index}`}>
            {skill}<span aria-hidden="true" className="text-sm text-[var(--fg)]">✳</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
