import { useEffect, useRef, useId, useCallback } from "react";
import mermaid from "mermaid";

function getComputedColor(varName: string): string {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  if (!raw) return "#888";
  return `hsl(${raw})`;
}

interface MermaidDiagramProps {
  chart: string;
  caption?: string;
}

export function MermaidDiagram({ chart, caption }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "_");

  const render = useCallback(async () => {
    if (!containerRef.current) return;

    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      themeVariables: {
        primaryColor: getComputedColor("--muted"),
        primaryTextColor: getComputedColor("--foreground"),
        primaryBorderColor: getComputedColor("--border"),
        lineColor: getComputedColor("--muted-foreground"),
        secondaryColor: getComputedColor("--accent"),
        tertiaryColor: getComputedColor("--card"),
        fontSize: "13px",
      },
    });

    try {
      const { svg } = await mermaid.render(`mermaid${id}`, chart);
      if (containerRef.current) {
        containerRef.current.innerHTML = svg;
      }
    } catch {
      if (containerRef.current) {
        containerRef.current.innerHTML =
          '<p class="text-sm text-muted-foreground italic">Diagram rendering unavailable.</p>';
      }
    }
  }, [chart, id]);

  useEffect(() => {
    render();
  }, [render]);

  return (
    <figure className="my-8 rounded-xl border border-border bg-card p-6 overflow-x-auto">
      <div
        ref={containerRef}
        className="flex justify-center [&_svg]:max-w-full"
      />
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
