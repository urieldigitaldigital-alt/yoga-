import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "dark" | "light" | "terracotta";
  className?: string;
};

const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
  dark: "bg-espresso/90 text-ivory",
  light: "bg-ivory/95 text-ink",
  terracotta: "bg-terracotta-deep/95 text-ivory",
};

export function Badge({ children, tone = "dark", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 font-sans-ui text-[0.65rem] font-medium uppercase tracking-[0.14em] shadow-card backdrop-blur-sm ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
