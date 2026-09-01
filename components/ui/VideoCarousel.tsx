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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(video);
    return () => observer.disconnect();
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
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!trackRef.current || !viewportRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = viewportRef.current.offsetWidth;
      setDistance(Math.max(0, trackWidth - viewportWidth));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [items.length]);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${420 + distance * SPEED}px` }}
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
