"use client";

import { motion } from "framer-motion";
import type { StackGroup } from "@/data/stack";
import styles from "./Stack.module.css";
import { StackChip } from "./StackChip";

export function StackCard({ group, index }: { group: StackGroup; index: number }) {
  return (
    <motion.article
      className={`${styles.card} p-6`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.cardNumber}>{group.number}</span>
        <span aria-hidden="true" className={styles.cardArrow}>↗</span>
      </div>
      <h3 className="mt-8 text-base font-medium tracking-[-0.02em] text-[var(--fg)]">{group.title}</h3>
      <p className="mt-2 text-xs leading-6 text-[var(--muted)]">{group.description}</p>
      <div className={`${styles.chips} mt-5`}>
        {group.items.map((item) => <StackChip item={item} key={item.label} />)}
      </div>
    </motion.article>
  );
}
