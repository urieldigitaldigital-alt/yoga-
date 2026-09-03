import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { faq } from "@/lib/content";

function PlusIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="shrink-0 transition-transform duration-300 ease-out group-open:rotate-45"
    >
      <path d="M9 2.5V15.5M2.5 9H15.5" />
    </svg>
  );
}

export function FAQ() {
  return (
    <section id="preguntas-frecuentes" className="bg-sand/40 py-24 sm:py-32">
      <div className="container-editorial">
        <Reveal className="max-w-xl">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-balance font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
            {faq.title}
          </h2>
        </Reveal>

        <RevealGroup className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {faq.items.map((item) => (
            <RevealItem key={item.question}>
              <details className="group rounded-2xl bg-ivory p-6 shadow-card open:shadow-card-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-serif-display text-lg leading-snug text-ink">
                    {item.question}
                  </span>
                  <span className="text-espresso">
                    <PlusIcon />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl font-sans-ui text-sm font-light leading-relaxed text-ink/65">
                  {item.answer}
                </p>
              </details>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
