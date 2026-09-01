import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-sand/40 py-24 sm:py-28">
      <div className="container-editorial">
        <Reveal className="text-center">
          <Eyebrow className="justify-center">Testimonios</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-lg text-balance font-serif-display text-2xl leading-snug text-ink sm:text-3xl">
            Lo que dicen quienes compartieron el camino.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {testimonials.map((t, i) => (
            <RevealItem key={i} className="text-center">
              <p className="font-serif-display italic text-lg leading-relaxed text-ink/75">
                “{t.quote}”
              </p>
              <p className="mt-5 font-sans-ui text-[0.72rem] font-medium uppercase tracking-[0.18em] text-stone-dark">
                {t.name}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
