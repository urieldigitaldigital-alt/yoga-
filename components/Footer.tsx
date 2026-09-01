import Link from "next/link";
import { footer, instagramHref, site, whatsappHref } from "@/lib/content";

export function Footer() {
  const wa = whatsappHref("Hola, quiero saber más.");
  const ig = instagramHref;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso-deep py-16 text-ivory/80 sm:py-20">
      <div className="container-editorial flex flex-col items-center gap-10 text-center">
        <Link href="#inicio" className="font-serif-display italic text-2xl text-ivory">
          {site.brandName}
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans-ui text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/70 transition-colors hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href={ig ?? "#contacto"}
            target={ig ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="font-sans-ui text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/70 transition-colors hover:text-ivory"
          >
            Instagram
          </a>
          <span className="text-ivory/20">·</span>
          <a
            href={wa ?? "#contacto"}
            target={wa ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="font-sans-ui text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ivory/70 transition-colors hover:text-ivory"
          >
            WhatsApp
          </a>
        </div>

        <p className="font-sans-ui text-[0.68rem] tracking-wide text-ivory/40">
          © {year} {site.brandName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
