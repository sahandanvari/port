import { SectionWrapper } from "@/components/SectionWrapper";
import { aboutParagraphs } from "@/content/about";
import type { ReactNode } from "react";

function paragraphToNodes(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function About() {
  return (
    <SectionWrapper
      maxWidth="prose"
      id="about"
      className="border-t border-border/60"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
        About
      </p>
      <h2 className="heading-2 mb-8">Making systems that ship</h2>
      <div className="space-y-5">
        {aboutParagraphs.map((paragraph, i) => (
          <p key={i} className="body-lg text-muted-foreground leading-relaxed">
            {paragraphToNodes(paragraph)}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
