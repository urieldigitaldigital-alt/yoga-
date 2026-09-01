import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { workshops } from "@/lib/content";

export function Workshops() {
  return (
    <section id="talleres" className="bg-ivory-dim py-28 sm:py-36">
      <div className="container-editorial grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>{workshops.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-balance font-serif-display text-4xl leading-tight text-ink sm:text-5xl">
            {workshops.title}
          </h2>
          <p className="mt-5 max-w-md font-sans-ui text-sm font-light leading-relaxed text-ink/65">
            {workshops.body}
          </p>

          <RevealGroup className="mt-9 flex flex-col gap-3">
            {workshops.items.map((item, i) => (
              <RevealItem
                key={item.name}
                className="flex items-start gap-4 rounded-2xl bg-ivory p-4 shadow-card sm:items-center"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/20 font-serif-display text-sm text-sage-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif-display text-lg leading-snug text-ink">{item.name}</span>
                <span className="ml-auto shrink-0 whitespace-nowrap pl-3 font-sans-ui text-xs uppercase tracking-[0.15em] text-stone-dark">
                  {item.detail}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Button href={workshops.cta.href} variant="outline" className="mt-9">
            {workshops.cta.label}
          </Button>
        </Reveal>

        <Reveal delay={0.15} y={26}>
          <Parallax className="aspect-[4/5] w-full rounded-2xl shadow-card-lg" strength={45}>
            <MediaFrame
              src={workshops.media.src}
              label={workshops.media.label}
              index={3}
              className="h-full w-full"
            />
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
