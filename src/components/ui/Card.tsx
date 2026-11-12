export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-[var(--line)] bg-[var(--bg)] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:shadow-none ${className}`}>
      {children}
    </div>
  );
}
