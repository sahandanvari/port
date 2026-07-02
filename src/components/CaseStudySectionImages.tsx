import type { CaseStudySectionImage } from "@/content/case-studies/types";

const aspectClass: Record<CaseStudySectionImage["aspect"], string> = {
  wide: "min-h-[220px] md:min-h-[280px]",
  figure: "min-h-[180px] md:min-h-[220px]",
  pair: "min-h-[160px] md:min-h-[200px]",
};

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
        isPair
          ? "mt-8 grid gap-4 sm:grid-cols-2"
          : "mt-8 space-y-4"
      }
    >
      {images.map((image) => (
        <figure
          key={image.label}
          className="overflow-hidden rounded-lg border border-border bg-muted/20"
        >
          {image.src ? (
            <img
              src={image.src}
              alt={image.alt ?? image.label}
              className={`w-full object-cover ${aspectClass[image.aspect]}`}
              loading="lazy"
            />
          ) : (
            <div
              className={`flex flex-col items-center justify-center px-6 py-10 text-center ${aspectClass[image.aspect]}`}
              role="img"
              aria-label={image.label}
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                [Add screenshot]
              </span>
              <span className="mt-3 max-w-md text-xs leading-relaxed text-muted-foreground">
                {image.label}
              </span>
            </div>
          )}
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            {image.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
