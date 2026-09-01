import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "outline-light" | "ghost" | "line" | "line-light";
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center gap-2.5 font-sans-ui text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors duration-500 ease-out";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid:
    "bg-espresso text-ivory px-7 py-3.5 rounded-full shadow-card hover:bg-terracotta-deep hover:shadow-card-lg",
  outline:
    "border border-ink/25 text-ink px-7 py-3.5 rounded-full hover:border-ink hover:bg-ink hover:text-ivory",
  "outline-light":
    "border border-ivory/40 text-ivory px-7 py-3.5 rounded-full hover:border-ivory hover:bg-ivory hover:text-espresso",
  ghost:
    "border border-ivory/50 text-ivory px-7 py-3.5 rounded-full hover:border-ivory hover:bg-ivory/10",
  line: "text-ink hover:text-terracotta-deep",
  "line-light": "text-ivory hover:text-ivory/70",
};

export function Button({
  href,
  children,
  variant = "line",
  className = "",
  external,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content =
    variant === "line" || variant === "line-light" ? (
      <span className="group inline-flex items-center gap-2">
        {children}
        <span
          aria-hidden
          className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    ) : (
      children
    );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
