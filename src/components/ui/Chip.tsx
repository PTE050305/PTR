export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit rounded-full bg-[var(--chip)] px-2.5 py-1 text-[10px] font-semibold tracking-[0.01em] text-[var(--fg)]">
      {children}
    </span>
  );
}
