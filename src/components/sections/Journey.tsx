"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/journey/Timeline";
import { LeadershipCard } from "@/components/journey/LeadershipCard";
import { InterestsCard } from "@/components/journey/InterestsCard";

export function Journey({ compact = false }: { compact?: boolean }) {
  return (
    <section id="journey" className={compact ? "section" : "bg-[var(--bg)] py-16 text-[var(--fg)] sm:py-24"}>
      <div className={compact ? "wrap" : "mx-auto max-w-[1100px] px-5 sm:px-8"}>
        {compact ? (
          <div className="section-topline">
            <div className="section-heading">
              <span className="section-index">03</span>
              <h2>— journey</h2>
            </div>
            <a className="text-link" href="/journey">full history →</a>
          </div>
        ) : (
          <motion.header
            className="mb-14 max-w-[560px]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.065em] sm:text-6xl">
              The journey <span>so far.</span>
            </h1>
            <p className="mt-5 max-w-[480px] text-sm leading-6 text-[var(--muted)]">
              Every project, role, and challenge has helped shape how I approach technology.
            </p>
          </motion.header>
        )}

        <div className={compact ? "max-w-3xl" : "grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16"}>
          <div>
            <div className="mb-6 flex items-center justify-between border-b border-[var(--line)] pb-4">
              <h2 className="text-sm font-semibold text-[var(--fg)]">Development journey</h2>
              <span className="text-[10px] font-medium text-[var(--subtle)]">01–04</span>
            </div>
            <Timeline />
          </div>
          {!compact && (
            <aside className="space-y-5">
              <LeadershipCard />
              <InterestsCard />
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
