import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const base =
  "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-2";

const variants = {
  primary: "bg-flare text-white hover:bg-[#d85a26] shadow-[0_10px_30px_-12px_rgba(240,109,56,0.65)]",
  secondary: "bg-ink text-cream hover:bg-[#0a3335]",
  ghost: "border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/5",
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const isExternal = href.startsWith("http");
  const Comp: any = isExternal ? "a" : Link;
  return (
    <Comp
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      >
        <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Comp>
  );
}
