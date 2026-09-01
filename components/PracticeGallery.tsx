import { MediaFrame } from "@/components/ui/MediaFrame";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { practicePhotos } from "@/lib/content";

export function PracticeGallery() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="container-editorial">
        <RevealGroup className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {practicePhotos.map((photo, i) => (
            <RevealItem key={photo.src} className="group">
              <MediaFrame
                src={photo.src}
                label={photo.label}
                index={i}
                elevated
                className="aspect-[3/4] w-full"
                imgClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.05]"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
