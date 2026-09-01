import Image from "next/image";

type MediaFrameProps = {
  src?: string;
  poster?: string;
  label: string;
  kind?: "image" | "video";
  index?: number;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: boolean;
  minimal?: boolean;
  elevated?: boolean;
};

const TONES = [
  "from-[#e7dcc4] via-[#ddccab] to-[#c9bfae]",
  "from-[#d8ddc9] via-[#c7cfb2] to-[#a9b596]",
  "from-[#e3d3c2] via-[#d3b99e] to-[#b99a7c]",
  "from-[#ece4d4] via-[#dbcdb0] to-[#c2b190]",
];

function CameraMark() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="opacity-40"
    >
      <rect x="3" y="8" width="24" height="16" rx="1.5" />
      <circle cx="15" cy="16" r="5" />
      <path d="M10 8L12 4.5H18L20 8" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="opacity-40"
    >
      <circle cx="15" cy="15" r="12.5" />
      <path d="M12.5 10.5L20 15L12.5 19.5V10.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MediaFrame({
  src,
  poster,
  label,
  kind = "image",
  index = 0,
  className = "",
  imgClassName = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  rounded = true,
  minimal = false,
  elevated = false,
}: MediaFrameProps) {
  const tone = TONES[index % TONES.length];
  const roundedClass = rounded ? "rounded-2xl" : "";
  const shadowClass = elevated ? "shadow-card-lg" : "";

  if (src) {
    return (
      <div className={`relative overflow-hidden ${roundedClass} ${shadowClass} ${className}`}>
        {kind === "video" ? (
          <video
            className={`h-full w-full object-cover ${imgClassName}`}
            src={src}
            poster={poster || undefined}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <Image
            src={src}
            alt={label}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover ${imgClassName}`}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${roundedClass} ${shadowClass} grain-overlay bg-gradient-to-br ${tone} ${className}`}
    >
      {!minimal && (
        <>
          <div className="absolute inset-2.5 rounded-xl border border-espresso/15" />
          <div className="absolute inset-0 flex items-center justify-center text-espresso">
            {kind === "video" ? <PlayMark /> : <CameraMark />}
          </div>
        </>
      )}
      <div
        className={`absolute inset-x-3 flex flex-col gap-1 ${minimal ? "bottom-3 items-end text-right" : "bottom-3"}`}
      >
        <span
          className={`font-sans-ui text-[0.6rem] font-medium uppercase tracking-[0.2em] ${
            minimal ? "text-ivory/70" : "text-espresso/60"
          }`}
        >
          {kind === "video" ? "Video real — pendiente" : "Fotografía real — pendiente"}
        </span>
        {!minimal && (
          <span className="font-serif-display text-[0.8rem] italic leading-snug text-espresso/70">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
