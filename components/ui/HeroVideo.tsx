"use client";

import { useEffect, useRef, useState } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setViewport({ mounted: true, isMobile: mq.matches });
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { mounted, isMobile } = viewport;
  const activeSrc = isMobile && mobileSrc ? mobileSrc : src;

  // iOS Safari a veces pausa el video de fondo (al volver de otra app, al
  // recuperar memoria, etc). Lo retomamos apenas la página vuelve a estar visible.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSrc) return;

    video.muted = true;

    const tryPlay = () => {
      video.play().catch(() => {});
    };
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };

    tryPlay();
    video.addEventListener("pause", tryPlay);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", tryPlay);
    window.addEventListener("focus", tryPlay);

    return () => {
      video.removeEventListener("pause", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", tryPlay);
      window.removeEventListener("focus", tryPlay);
    };
  }, [activeSrc]);

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
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={activeSrc}
        poster={poster || undefined}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        disableRemotePlayback
        preload="auto"
      >
        <track kind="captions" />
      </video>
    </div>
  );
}
