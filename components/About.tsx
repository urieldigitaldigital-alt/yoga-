import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { purpose } from "@/lib/content";

export function About() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="container-editorial">
        <div className="relative">
          <Reveal y={26}>
            <Parallax className="aspect-[4/5] w-full rounded-2xl sm:aspect-[16/10] lg:aspect-[16/9]">
              <MediaFrame
                src={purpose.media.src}
                label={purpose.media.label}
                index={1}
                className="h-full w-full"
              />
            </Parallax>
          </Reveal>

          <Reveal delay={0.2} y={20} className="relative sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:w-[46%] sm:items-center lg:w-[38%]">
            <div className="-mt-10 rounded-2xl bg-ivory p-8 shadow-card-lg sm:mt-0 sm:ml-8 sm:p-10 lg:p-12">
              <Eyebrow>{purpose.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-balance font-serif-display text-2xl leading-snug text-ink sm:text-[1.75rem]">
                {purpose.title}
              </h2>
              <p className="mt-5 font-serif-display italic text-lg text-terracotta-deep">
                “{purpose.highlight}”
              </p>
              <Button href={purpose.cta.href} variant="line" className="mt-7">
                {purpose.cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
