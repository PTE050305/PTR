"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { hero } from "@/data/hero";
import { FloatingBadge } from "./FloatingBadge";

export function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const bounds = visualRef.current?.getBoundingClientRect();
    if (!bounds) return;
    rotateY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
    rotateX.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 5);
  }

  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={visualRef}
      className="relative mx-auto w-full max-w-[390px] lg:ml-auto"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
    >
      <div className="relative aspect-[390/405] overflow-visible rounded-[120px_120px_24px_24px] border border-[var(--line)] bg-[var(--chip)] p-6 shadow-[0_24px_55px_rgba(0,0,0,0.08)] dark:shadow-none">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[inherit] opacity-30 [background-image:linear-gradient(var(--dot)_1px,transparent_1px),linear-gradient(90deg,var(--dot)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        {hero.photoUrl ? (
          <Image
            src={hero.photoUrl}
            alt="Peter Victor D. Dawis"
            fill
            sizes="(max-width: 768px) 100vw, 390px"
            className="rounded-[inherit] object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-end text-[clamp(7rem,18vw,12.5rem)] font-bold leading-none tracking-[-0.14em] text-[var(--fg)]">
              <span>PD</span><span aria-hidden="true" className="mb-[0.15em] ml-2 h-5 w-5 bg-[var(--fg)]" />
            </div>
          </div>
        )}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[9px] font-semibold tracking-[0.18em] text-[var(--fg)]">
          <span>{hero.photoUrl ? "PETER VICTOR D. DAWIS" : "YOUR PHOTO HERE"}</span>
          <span aria-hidden="true" className="text-sm tracking-normal">↗</span>
        </div>
        {hero.badges.map((badge) => <FloatingBadge key={badge.text} badge={badge} />)}
      </div>
    </motion.div>
  );
}
