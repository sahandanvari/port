import { useReducedMotion } from "framer-motion";
import type { CaseStudyImageAspect } from "@/content/case-studies/types";

const aspectClass: Record<CaseStudyImageAspect, string> = {
  wide: "min-h-[220px] md:min-h-[280px]",
  figure: "min-h-[180px] md:min-h-[220px]",
  pair: "min-h-[160px] md:min-h-[200px]",
};

export type CaseStudyMediaProps = {
  label: string;
  aspect: CaseStudyImageAspect;
  /** Image path, or poster frame when `videoSrc` is set */
  src?: string;
  videoSrc?: string;
  alt?: string;
  /** Fill the frame edge-to-edge (default). Use `contain` for UI captures. */
  fit?: "cover" | "contain";
  className?: string;
};

export function CaseStudyMedia({
  label,
  aspect,
  src,
  videoSrc,
  alt,
  fit = "cover",
  className = "",
}: CaseStudyMediaProps) {
  const reduceMotion = useReducedMotion();
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  const frameClass =
    className ||
    `w-full bg-muted/30 ${fitClass} ${aspectClass[aspect]}`;

  if (videoSrc && !reduceMotion) {
    return (
      <video
        src={videoSrc}
        poster={src}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-label={alt ?? label}
        className={frameClass}
      />
    );
  }

  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        className={frameClass}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center px-6 py-10 text-center ${aspectClass[aspect]}`}
      role="img"
      aria-label={label}
    >
      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
        {videoSrc ? "[Add video + poster]" : "[Add screenshot]"}
      </span>
      <span className="mt-3 max-w-md text-xs leading-relaxed text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
