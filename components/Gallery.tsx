import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { gallery } from "@/lib/content";

const ASPECT: Record<(typeof gallery)[number]["orientation"], string> = {
  portrait: "aspect-[3/4]",
};

export function Gallery() {
  return (
    <section id="galeria" className="bg-ivory py-24 sm:py-32">
      <div className="container-editorial">
        <Reveal className="max-w-xl">
          <Eyebrow>Galería</Eyebrow>
          <h2 className="mt-4 text-balance font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
            Momentos reales de la práctica.
          </h2>
        </Reveal>

        <div className="mt-14 columns-2 gap-5 sm:columns-3 lg:columns-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.label}
              delay={(i % 4) * 0.08}
              y={22}
              className="mb-5 break-inside-avoid"
            >
              <div className="group">
                <MediaFrame
                  src={item.src}
                  label={item.label}
                  index={i}
                  className={`${ASPECT[item.orientation]} w-full`}
                  imgClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.05]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
