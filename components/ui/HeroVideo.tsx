"use client";

import { useEffect, useState } from "react";
import { MediaFrame } from "@/components/ui/MediaFrame";

type HeroVideoProps = {
  src?: string;
  mobileSrc?: string;
  poster?: string;
  label: string;
};

const MOBILE_QUERY = "(max-width: 767px)";

export function HeroVideo({ src, mobileSrc, poster, label }: HeroVideoProps) {
  const [viewport, setViewport] = useState<{ mounted: boolean; isMobile: boolean }>({
    mounted: false,
    isMobile: false,
  });

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setViewport({ mounted: true, isMobile: mq.matches });
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { mounted, isMobile } = viewport;
  const activeSrc = isMobile && mobileSrc ? mobileSrc : src;

  if (!mounted || !activeSrc) {
    return (
      <MediaFrame
        kind="video"
        label={label}
        index={0}
        rounded={false}
        priority
        minimal
        className="h-full w-full"
      />
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-espresso">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={activeSrc}
        poster={poster || undefined}
        autoPlay
        muted
        loop
        playsInline
      >
        <track kind="captions" />
      </video>
    </div>
  );
}
