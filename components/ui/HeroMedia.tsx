"use client";

import { useEffect, useState } from "react";
import { MediaFrame } from "@/components/ui/MediaFrame";

type HeroMediaProps = {
  src?: string;
  mobileSrc?: string;
  label: string;
};

const MOBILE_QUERY = "(max-width: 767px)";

// Usamos una imagen animada (WebP) en vez de <video>: los navegadores nunca
// bloquean ni pausan la animación de una imagen (a diferencia del autoplay de
// video, que algunos sistemas suprimen con "Reducir movimiento" activado).
// Esto garantiza que se reproduzca sola, siempre, en cualquier plataforma.
export function HeroMedia({ src, mobileSrc, label }: HeroMediaProps) {
  // Arranca con la versión de escritorio para que el primer HTML (SSR) ya
  // tenga la imagen real, sin placeholder.
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={activeSrc}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
