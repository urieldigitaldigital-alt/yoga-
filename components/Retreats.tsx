import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_JOIN_MESSAGE, retreats, whatsappHref } from "@/lib/content";

export function Retreats() {
  const cta = whatsappHref(WHATSAPP_JOIN_MESSAGE) ?? retreats.cta.href;

  return (
    <section id="retiros" className="bg-ivory py-24 sm:py-32">
      <div className="container-editorial">
        <Reveal className="max-w-2xl">
          <Eyebrow>{retreats.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-balance font-serif-display text-4xl leading-tight text-ink sm:text-5xl">
            {retreats.title}
          </h2>
          <p className="mt-4 font-sans-ui text-[0.72rem] font-medium uppercase tracking-[0.18em] text-terracotta-deep">
            {retreats.reach}
          </p>
        </Reveal>

        <Reveal delay={0.15} y={26} className="relative mt-14 pb-16 sm:pb-24">
          <Parallax className="aspect-[4/5] w-full rounded-2xl shadow-card-lg sm:aspect-[16/9]" strength={50}>
            <MediaFrame
              src={retreats.media.src}
              label={retreats.media.label}
              index={2}
              className="h-full w-full"
            />
          </Parallax>
          <Badge tone="light" className="absolute left-8 top-8">
            {retreats.tag}
          </Badge>
          <div className="relative -mt-16 mx-4 rounded-2xl bg-ivory p-8 shadow-card-lg sm:absolute sm:inset-x-0 sm:bottom-0 sm:mx-0 sm:mt-0 sm:max-w-md sm:translate-y-12 sm:p-10">
            <p className="font-sans-ui text-sm font-light leading-relaxed text-ink/65">
              {retreats.description}
            </p>
            <Button href={cta} variant="solid" className="mt-6" external={Boolean(whatsappHref(WHATSAPP_JOIN_MESSAGE))}>
              {retreats.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
