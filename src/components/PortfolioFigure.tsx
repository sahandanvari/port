interface PortfolioFigureProps {
  src?: string;
  alt: string;
  caption: string;
  /** When no src yet */
  placeholder?: boolean;
}

export function PortfolioFigure({
  src,
  alt,
  caption,
  placeholder,
}: PortfolioFigureProps) {
  return (
    <figure className="my-8 rounded-lg border border-border bg-muted/20 overflow-hidden">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover max-h-[420px]"
          loading="lazy"
        />
      ) : (
        <div
          className="flex min-h-[200px] items-center justify-center px-6 py-16 text-center text-sm text-muted-foreground"
          role="img"
          aria-label={alt}
        >
          {placeholder !== false ? (
            <span className="max-w-xs">
              [ADD SCREENSHOT]
              <span className="block mt-2 text-xs opacity-80">{caption}</span>
            </span>
          ) : (
            caption
          )}
        </div>
      )}
      <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}
