import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { WHATSAPP_JOIN_MESSAGE, whatsappHref, yogaStyles } from "@/lib/content";

export function Yoga() {
  const cta = whatsappHref(WHATSAPP_JOIN_MESSAGE) ?? "#contacto";
  const external = Boolean(whatsappHref(WHATSAPP_JOIN_MESSAGE));

  return (
    <section id="yoga" className="bg-sand/50 py-24 sm:py-32">
      <div className="container-editorial">
        <Reveal className="max-w-xl">
          <Eyebrow>Yoga</Eyebrow>
          <h2 className="mt-5 text-balance font-serif-display text-4xl leading-tight text-ink sm:text-5xl">
            Distintas prácticas. Un mismo propósito:{" "}
            <em className="italic">encontrarte</em>.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {yogaStyles.map((style, i) => (
            <RevealItem key={style.id} className="group">
              <div className="relative overflow-hidden rounded-2xl">
                <MediaFrame
                  src={style.media.src}
                  label={style.media.label}
                  index={i}
                  elevated
                  className="aspect-[4/3] w-full"
                  imgClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.08]"
                />
                <Badge className="absolute left-4 top-4">Estilo {style.id}</Badge>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6 border-b border-ink/10 pb-6">
                <div>
                  <h3 className="font-serif-display text-xl text-ink">{style.name}</h3>
                  {style.description && (
                    <p className="mt-2 max-w-[42ch] font-sans-ui text-sm font-light leading-relaxed text-ink/65">
                      {style.description}
                    </p>
                  )}
                </div>
                <Button href={cta} variant="line" className="mt-2 shrink-0" external={external}>
                  Conocer más
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
