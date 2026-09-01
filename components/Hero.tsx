"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { hero } from "@/lib/content";

const ease = [0.22, 0.61, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] w-full items-end bg-espresso"
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <HeroVideo
          src={hero.media.src}
          mobileSrc={hero.media.mobileSrc}
          poster={hero.media.poster}
          label={hero.media.label}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-espresso/35" />

      <div className="container-editorial relative z-10 flex w-full flex-col items-center pb-20 pt-28 text-center sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="font-sans-ui text-[0.72rem] font-medium uppercase tracking-[0.32em] text-ivory/85"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.4 }}
          className="mt-6 text-balance font-serif-display text-[3rem] leading-[1.05] text-ivory sm:text-[4.25rem] lg:text-[5.5rem]"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.65 }}
          className="mt-6 max-w-md text-balance font-sans-ui text-[0.95rem] font-light text-ivory/85"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          <Button href={hero.ctaPrimary.href} variant="ghost">
            {hero.ctaPrimary.label}
          </Button>
          <Button href={hero.ctaSecondary.href} variant="line-light">
            {hero.ctaSecondary.label}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block text-ivory/70"
          aria-hidden
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
