import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { InstagramIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { contact, instagramHref, place, site, whatsappHref } from "@/lib/content";

export function Contact() {
  const wa = whatsappHref("Hola, quiero saber más sobre las próximas actividades.");
  const ig = instagramHref;

  const items = [
    {
      label: "WhatsApp",
      description: "Escribinos y te respondemos a la brevedad.",
      icon: WhatsAppIcon,
      href: wa,
    },
    {
      label: "Instagram",
      description: "Seguí las novedades y clases del instituto.",
      icon: InstagramIcon,
      href: ig,
    },
    {
      label: "Ubicación",
      description: place.address || site.city,
      icon: PinIcon,
      href: place.mapsUrl || undefined,
    },
  ].filter((item) => item.href);

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

        <RevealGroup className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-3">
          {items.map(({ label, description, icon: Icon, href }) => (
            <RevealItem key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center gap-3 rounded-2xl bg-ivory px-6 py-8 text-center shadow-card transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-ivory transition-colors duration-300 group-hover:bg-terracotta-deep">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-serif-display text-lg text-ink">{label}</span>
                <span className="font-sans-ui text-sm font-light leading-relaxed text-ink/65">
                  {description}
                </span>
              </a>
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
