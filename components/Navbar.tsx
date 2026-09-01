"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkColor = scrolled || open ? "text-ink" : "text-ivory";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        scrolled || open
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(42,35,27,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`container-editorial grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-700 ease-out ${
          scrolled ? "py-4" : "py-7"
        }`}
      >
        <nav className={`hidden lg:flex items-center gap-8 ${linkColor}`}>
          {nav.left.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans-ui text-[0.72rem] font-medium uppercase tracking-[0.2em] opacity-80 transition-opacity hover:opacity-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#inicio"
          className={`justify-self-center font-serif-display italic text-2xl tracking-tight transition-colors duration-700 ${linkColor}`}
        >
          {site.brandName}
        </Link>

        <div className="flex items-center justify-end gap-6">
          <nav className={`hidden lg:flex items-center gap-8 ${linkColor}`}>
            {nav.right.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans-ui text-[0.72rem] font-medium uppercase tracking-[0.2em] opacity-80 transition-opacity hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={nav.cta.href}
              className={`rounded-[2px] border px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                scrolled
                  ? "border-ink/30 text-ink hover:bg-ink hover:text-ivory"
                  : "border-ivory/60 text-ivory hover:bg-ivory/10"
              }`}
            >
              {nav.cta.label}
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden ${linkColor}`}
          >
            <span
              className={`h-px w-5 bg-current transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden bg-ivory lg:hidden"
          >
            <nav className="container-editorial flex flex-col gap-1 pb-10 pt-2">
              {nav.mobile.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-stone/30 py-4 font-serif-display text-xl text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={nav.cta.href}
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex w-fit items-center rounded-[2px] border border-ink/30 px-6 py-3 font-sans-ui text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink"
              >
                {nav.cta.label}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
