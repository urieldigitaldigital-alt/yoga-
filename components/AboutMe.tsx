import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_JOIN_MESSAGE, aboutMe, whatsappHref } from "@/lib/content";

export function AboutMe() {
  const cta = whatsappHref(WHATSAPP_JOIN_MESSAGE) ?? aboutMe.cta.href;
  const external = Boolean(whatsappHref(WHATSAPP_JOIN_MESSAGE));

  return (
    <section id="sobre-mi" className="bg-ivory py-28 sm:py-40">
      <div className="container-editorial grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal>
          <Parallax className="aspect-[4/5] w-full rounded-2xl sm:aspect-[3/4]" strength={45}>
            <MediaFrame
              src={aboutMe.media.src}
              label={aboutMe.media.label}
              index={1}
              elevated
              className="h-full w-full"
              placeholderIcon={
                <Image
                  src="/logo.png"
                  alt="Sol Naciente"
                  width={200}
                  height={200}
                  className="h-28 w-28 object-contain opacity-90 sm:h-36 sm:w-36"
                />
              }
            />
          </Parallax>
        </Reveal>

        <Reveal delay={0.15}>
          <Eyebrow>{aboutMe.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-balance font-serif-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            {aboutMe.greeting}
          </h2>
          <p className="mt-6 max-w-lg font-sans-ui text-sm font-light leading-relaxed text-ink/65">
            {aboutMe.body}
          </p>
          <p className="relative mt-8 max-w-md font-serif-display text-2xl italic leading-snug text-terracotta-deep">
            <span aria-hidden className="mr-1 text-terracotta-deep/30">
              “
            </span>
            {aboutMe.highlight}
          </p>

          <div className="mt-8 max-w-md rounded-2xl bg-sage/10 p-6">
            <span className="font-sans-ui text-[0.65rem] font-medium uppercase tracking-[0.18em] text-sage-deep">
              {aboutMe.nameOrigin.eyebrow}
            </span>
            <p className="mt-3 font-serif-display text-base italic leading-relaxed text-ink/80">
              {aboutMe.nameOrigin.text}
            </p>
          </div>

          <Button href={cta} variant="solid" className="mt-9" external={external}>
            {aboutMe.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
