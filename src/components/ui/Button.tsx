import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <a
      className={`group inline-flex min-h-11 items-center justify-center gap-3 rounded-lg px-5 text-xs font-medium transition duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fg)] ${
        variant === "primary"
        ? "border border-[var(--line)] bg-[var(--chip)] text-[var(--fg)] hover:border-[var(--fg)]"
          : "border border-[var(--fg)] text-[var(--fg)] hover:bg-[var(--chip)]"
      } ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
