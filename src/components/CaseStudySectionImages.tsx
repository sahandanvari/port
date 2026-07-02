import type { CaseStudySectionImage } from "@/content/case-studies/types";
import { CaseStudyMedia } from "@/components/CaseStudyMedia";

export function CaseStudySectionImages({
  images,
}: {
  images: CaseStudySectionImage[];
}) {
  if (!images.length) return null;

  const isPair = images.length >= 2 && images.every((i) => i.aspect === "pair");

  return (
    <div
      className={
        isPair ? "mt-8 grid gap-4 sm:grid-cols-2" : "mt-8 space-y-4"
      }
    >
      {images.map((image) => (
        <figure
          key={image.label}
          className="overflow-hidden rounded-lg border border-border bg-muted/20"
        >
          <CaseStudyMedia
            label={image.label}
            aspect={image.aspect}
            src={image.src}
            videoSrc={image.videoSrc}
            alt={image.alt}
            fit={image.fit}
          />
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            {image.label}
            {image.videoSrc ? (
              <span className="ml-1.5 text-[10px] uppercase tracking-wider text-accent-foreground/80">
                · demo
              </span>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
