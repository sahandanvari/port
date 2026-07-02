import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PortfolioFigure } from "@/components/PortfolioFigure";
import { Footer } from "@/sections/Footer";

const slots = [
  {
    alt: "Figma component properties panel showing variants and props",
    caption:
      "Component spec density — proves variant + prop discipline for handoff.",
  },
  {
    alt: "Documentation site component page with Design and Develop tabs",
    caption:
      "Dual-audience documentation — shows how the same component answers different questions.",
  },
  {
    alt: "Storybook or doc site with live theme switcher",
    caption:
      "Live theming — proves token wiring without one-off styles per example.",
  },
  {
    alt: "Token table or JSON export snippet in IDE",
    caption: "Structured tokens — proves naming layers and build-ready output.",
  },
  {
    alt: "Contribution workflow diagram or issue template screenshot",
    caption:
      "Governance artifact — proves intake is repeatable, not ad hoc Slack requests.",
  },
  {
    alt: "Analytics or spreadsheet summarizing adoption or audit burndown",
    caption:
      "Metrics or proxy dashboard — label measured vs estimated in caption text.",
  },
] as const;

export function ArtifactsGalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
      <Link
        to="/design-systems"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <span className="link-arrow-back" aria-hidden>
          →
        </span>
        Design systems
      </Link>

      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
        Artifacts gallery
      </h1>
      <p className="body-lg text-muted-foreground mt-4">
        Placeholder frames for screenshots you can drop into{" "}
        <code className="text-xs bg-muted px-1 py-0.5 rounded">
          public/portfolio-placeholders/
        </code>{" "}
        and wire via{" "}
        <code className="text-xs bg-muted px-1 py-0.5 rounded">
          PortfolioFigure
        </code>{" "}
        props later.
      </p>

      <div className="mt-12 space-y-10">
        {slots.map((s) => (
          <PortfolioFigure key={s.caption} alt={s.alt} caption={s.caption} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
