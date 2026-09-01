"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        style={{ originX: 0 }}
        className={`h-px w-8 ${tone === "light" ? "bg-ivory/60" : "bg-terracotta-deep"}`}
      />
      <span className={`eyebrow ${tone === "light" ? "!text-ivory/70" : ""}`}>{children}</span>
    </div>
  );
}
