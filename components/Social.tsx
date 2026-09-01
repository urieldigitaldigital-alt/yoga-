import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { closing, instagramHref, whatsappHref } from "@/lib/content";

export function Social() {
  const wa = whatsappHref("Hola, quiero conocer más sobre las próximas experiencias.");
  const ig = instagramHref;

  return (
    <section className="relative overflow-hidden bg-espresso py-28 sm:py-36">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <MediaFrame
          src={closing.media.src}
          label={closing.media.label}
          index={2}
          rounded={false}
          minimal
          className="h-full w-full"
        />
      </div>
      <div className="absolute inset-0 bg-espresso/70" />

      <div className="container-editorial relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance font-serif-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
            {closing.title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-balance font-sans-ui text-sm font-light text-ivory/75">
            {closing.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button href={closing.ctaPrimary.href} variant="ghost">
            {closing.ctaPrimary.label}
          </Button>
          <Button href={closing.ctaSecondary.href} variant="line-light">
            {closing.ctaSecondary.label}
          </Button>
        </Reveal>

        <Reveal delay={0.3} className="mt-20 flex flex-col items-center gap-5 border-t border-ivory/15 pt-12">
          <p className="font-serif-display italic text-xl text-ivory">
            {closing.socialTitle}
          </p>
          <p className="max-w-sm text-balance font-sans-ui text-sm font-light text-ivory/70">
            {closing.socialSubtitle}
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href={ig ?? "#contacto"} variant="outline-light" external={Boolean(ig)}>
              Instagram
            </Button>
            <Button href={wa ?? "#contacto"} variant="outline-light" external={Boolean(wa)}>
              WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
