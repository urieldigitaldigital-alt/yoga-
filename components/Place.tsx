import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCarousel } from "@/components/ui/VideoCarousel";
import { place, placeVideos, site } from "@/lib/content";

function PinIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M13 24C13 24 21 16.4 21 10.5C21 6.08 17.42 2.5 13 2.5C8.58 2.5 5 6.08 5 10.5C5 16.4 13 24 13 24Z" />
      <circle cx="13" cy="10.5" r="3" />
    </svg>
  );
}

function LocationMap({ mapQuery }: { mapQuery: string }) {
  if (!mapQuery) {
    return (
      <div className="relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#d8ddc9] via-[#c7cfb2] to-[#a9b596] px-8 text-center shadow-card">
        <div className="absolute inset-2.5 rounded-xl border border-espresso/15" />
        <span className="text-espresso/50">
          <PinIcon />
        </span>
        <span className="font-sans-ui text-[0.6rem] font-medium uppercase tracking-[0.2em] text-espresso/60">
          Mapa — pendiente
        </span>
        <span className="font-serif-display text-sm italic leading-snug text-espresso/70">
          Agregar la dirección real en lib/content.ts para mostrar la ubicación en el mapa
        </span>
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card">
      <iframe
        src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del espacio"
      />
    </div>
  );
}

export function Place() {
  return (
    <section id="lugar" className="bg-sand/40 py-24 sm:py-32">
      <div className="container-editorial">
        <Reveal className="max-w-xl">
          <Eyebrow>{place.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-balance font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
            {place.title}
          </h2>
          <p className="mt-4 max-w-lg font-sans-ui text-sm font-light leading-relaxed text-ink/65">
            {place.body}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <VideoCarousel items={placeVideos} />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal delay={0.15}>
            <LocationMap mapQuery={place.mapQuery} />
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col justify-center gap-6">
            <div>
              <span className="font-sans-ui text-[0.65rem] font-medium uppercase tracking-[0.15em] text-stone-dark">
                Ubicación
              </span>
              <p className="mt-1 font-serif-display text-lg text-ink">
                {place.address || site.city}
              </p>
            </div>
            <Button href={place.cta.href} variant="outline" className="w-fit" external>
              {place.cta.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
