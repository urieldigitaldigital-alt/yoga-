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
  const videoRef = useRef<HTMLVideoElement>(null);
  // Arranca directo con el video de escritorio (sin gate de "montado"): así el
  // primer HTML que ve cualquier visitante ya es el video real, nunca un
  // placeholder con ícono de play.
  const [activeSrc, setActiveSrc] = useState(src ?? mobileSrc);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => {
      setActiveSrc(mq.matches && mobileSrc ? mobileSrc : (src ?? mobileSrc));
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [src, mobileSrc]);

  // Algunos navegadores (sobre todo iOS Safari) pueden pausar el video de
  // fondo al volver de otra app o por presión de memoria. Lo retomamos apenas
  // la página vuelve a estar visible, sin que el usuario tenga que tocar nada.
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
    video.addEventListener("loadedmetadata", tryPlay);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", tryPlay);
    window.addEventListener("focus", tryPlay);

    return () => {
      video.removeEventListener("pause", tryPlay);
      video.removeEventListener("loadedmetadata", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", tryPlay);
      window.removeEventListener("focus", tryPlay);
    };
  }, [activeSrc]);

  if (!activeSrc) {
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
        key={activeSrc}
        className="absolute inset-0 h-full w-full object-cover"
        src={activeSrc}
        poster={poster || undefined}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        disableRemotePlayback
        controls={false}
        preload="auto"
      >
        <track kind="captions" />
      </video>
    </div>
  );
}
