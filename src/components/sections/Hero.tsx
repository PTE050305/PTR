"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react";
import { hero } from "@/data/hero";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { SkillsStrip } from "@/components/hero/SkillsStrip";
import { StatsRow } from "@/components/hero/StatsRow";

export function Hero() {
  return (
    <>
      <section id="home" className="bg-[var(--bg)] text-[var(--fg)]">
        <div className="mx-auto grid max-w-[1100px] gap-14 px-5 pb-16 pt-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-20">
          <div>
            <motion.div className="flex flex-wrap items-center gap-3 text-[9px] font-semibold tracking-[0.14em] text-[var(--muted)]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <span aria-hidden="true" className="relative h-2 w-2 rounded-full bg-[var(--fg)] after:absolute after:-inset-1 after:animate-ping after:rounded-full after:bg-[var(--dot)]" />
              <span>{hero.eyebrow}</span>
              <span aria-hidden="true" className="h-px w-8 bg-[var(--line)]" />
              <span>{hero.eyebrowDetail}</span>
            </motion.div>
            <motion.h1 className="mt-7 max-w-[650px] text-[clamp(3.2rem,7vw,6.4rem)] font-bold leading-[0.94] tracking-[-0.075em]" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}>
              {hero.headlineParts.map((part) => <span className="block" key={part.text}>{part.text}</span>)}
            </motion.h1>
            <motion.p className="mt-7 text-lg tracking-[-0.025em] text-[var(--muted)]" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.18 }}>
              {hero.introLead} <strong className="font-semibold text-[var(--fg)]">{hero.introName}</strong>
            </motion.p>
            <motion.p className="mt-4 max-w-[480px] text-sm leading-7 text-[var(--muted)]" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.24 }}>{hero.description}</motion.p>
            <motion.div className="mt-7 flex flex-wrap gap-3" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.3 }}>
              <Button href="/resume.pdf" download>{hero.buttons.resume}<ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" /></Button>
              <Button href="#contact" variant="secondary">{hero.buttons.contact}<ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Button>
            </motion.div>
            <div className="mt-10"><StatsRow /></div>
            <a href="#about" className="mt-10 inline-flex items-center gap-2 text-[9px] font-semibold tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--fg)]">
              SCROLL TO EXPLORE <ChevronDown size={13} className="animate-bounce" />
            </a>
          </div>
          <HeroVisual />
        </div>
        <SkillsStrip />
      </section>
    </>
  );
}
