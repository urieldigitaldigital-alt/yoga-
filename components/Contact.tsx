import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import {
  INSTAGRAM_USERNAME,
  WHATSAPP_NUMBER,
  contact,
  instagramHref,
  place,
  site,
  whatsappHref,
} from "@/lib/content";

export function Contact() {
  const wa = whatsappHref("Hola, quiero saber más sobre las próximas actividades.");
  const ig = instagramHref;

  const items = [
    {
      label: "WhatsApp",
      value: WHATSAPP_NUMBER ? `+${WHATSAPP_NUMBER}` : "[COMPLETAR]",
      href: wa,
    },
    {
      label: "Instagram",
      value: INSTAGRAM_USERNAME ? `@${INSTAGRAM_USERNAME}` : "[COMPLETAR]",
      href: ig,
    },
    {
      label: "Email",
      value: site.email,
      href: site.email && site.email !== "[COMPLETAR]" ? `mailto:${site.email}` : undefined,
    },
    {
      label: "Ubicación",
      value: place.address || site.city,
      href: place.mapsUrl || undefined,
    },
  ];

  return (
    <section id="contacto" className="bg-sand/40 py-24 sm:py-32">
      <div className="container-editorial text-center">
        <Reveal>
          <Eyebrow className="justify-center">{contact.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-balance font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance font-sans-ui text-sm font-light leading-relaxed text-ink/65">
            {contact.body}
          </p>
        </Reveal>

        <RevealGroup className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {items.map((item) => (
            <RevealItem key={item.label} className="flex flex-col items-center gap-2">
              <span className="font-sans-ui text-[0.65rem] font-medium uppercase tracking-[0.2em] text-stone-dark">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif-display text-base text-ink transition-colors hover:text-terracotta-deep"
                >
                  {item.value}
                </a>
              ) : (
                <span className="font-serif-display text-base text-ink/70">{item.value}</span>
              )}
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <Button href={wa ?? "#contacto"} variant="solid" className="mt-14" external={Boolean(wa)}>
            {contact.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
