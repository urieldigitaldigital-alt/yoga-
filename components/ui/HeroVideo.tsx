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

  // Forzamos la reproducción por script en vez de confiar solo en el atributo
  // "autoplay": algunos navegadores (Safari/iOS con "Reducir movimiento"
  // activado, o al recuperar memoria) ignoran el autoplay declarativo pero sí
  // respetan un play() disparado por código. Reintentamos en varios eventos y
  // con un chequeo periódico corto como red de seguridad.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSrc) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      video.play().catch(() => {});
    };
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };

    tryPlay();

    const events = ["loadedmetadata", "loadeddata", "canplay", "canplaythrough", "pause"];
    events.forEach((evt) => video.addEventListener(evt, tryPlay));
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", tryPlay);
    window.addEventListener("focus", tryPlay);

    // Red de seguridad: si por lo que sea sigue pausado, insistimos unos
    // segundos más sin quedar reintentando para siempre.
    let attempts = 0;
    const interval = window.setInterval(() => {
      attempts += 1;
      if (video.paused && !document.hidden) tryPlay();
      if (!video.paused || attempts > 10) window.clearInterval(interval);
    }, 500);

    return () => {
      events.forEach((evt) => video.removeEventListener(evt, tryPlay));
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", tryPlay);
      window.removeEventListener("focus", tryPlay);
      window.clearInterval(interval);
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
        disablePictureInPicture
        controls={false}
        preload="auto"
      >
        <track kind="captions" />
      </video>
    </div>
  );
}
