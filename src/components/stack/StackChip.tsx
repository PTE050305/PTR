import { createElement } from "react";
import { getStackIcon } from "./icons";
import type { StackItem } from "@/data/stack";

export function StackChip({ item }: { item: StackItem }) {
  const color = item.color ? { color: item.color } : undefined;

  return (
    <span className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--chip)] px-3 py-1.5 text-[11px] text-[var(--fg)] transition-transform duration-200 hover:-translate-y-px">
      {createElement(getStackIcon(item.icon), {
        "aria-hidden": true,
        size: 16,
        style: color,
        className: "transition-transform duration-200 group-hover:scale-110",
      })}
      {item.label}
    </span>
  );
}
