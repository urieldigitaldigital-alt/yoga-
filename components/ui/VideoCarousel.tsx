"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MediaFrame } from "@/components/ui/MediaFrame";

type CarouselItem = {
  src?: string;
  label: string;
};

const SPEED = 0.65; // 1 = scroll 1:1 with horizontal distance; lower = finishes faster

function VideoCard({ item, index }: { item: CarouselItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      if (isVisibleRef.current) video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(video);

    const events = ["loadedmetadata", "loadeddata", "canplay", "pause"];
    events.forEach((evt) => video.addEventListener(evt, tryPlay));
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      events.forEach((evt) => video.removeEventListener(evt, tryPlay));
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="relative h-full aspect-[9/16] shrink-0 overflow-hidden rounded-2xl shadow-card">
      {item.src ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={item.src}
          muted
          loop
          playsInline
          webkit-playsinline="true"
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
        />
      ) : (
        <MediaFrame kind="video" label={item.label} index={index} className="h-full w-full" />
      )}
    </div>
  );
}

export function VideoCarousel({ items }: { items: CarouselItem[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ distance: 0, viewportHeight: 0 });

  useEffect(() => {
    const update = () => {
      if (!trackRef.current || !viewportRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = viewportRef.current.offsetWidth;
      const viewportHeight = viewportRef.current.offsetHeight;
      setDims({ distance: Math.max(0, trackWidth - viewportWidth), viewportHeight });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [items.length]);

  const { distance, viewportHeight } = dims;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${viewportHeight + distance * SPEED}px` }}
      className="relative"
    >
      <div
        ref={viewportRef}
        className="sticky top-24 flex h-[380px] items-center overflow-hidden sm:h-[420px]"
      >
        <motion.div ref={trackRef} className="flex h-full gap-5" style={{ x }}>
          {items.map((item, i) => (
            <VideoCard key={item.label} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
