import { SectionWrapper } from "@/components/SectionWrapper";
import { meta } from "@/content/meta";

export function Contact() {
  return (
    <SectionWrapper
      maxWidth="prose"
      id="contact"
      className="text-center border-t border-border/60"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
        Contact
      </p>
      <h2 className="heading-2 mb-6">Get in touch</h2>
      <p className="body-lg text-muted-foreground mb-8">
        I'm always interested in talking about design systems, token
        architecture, agentic workflows, and how to make teams move faster. If
        you're working on MCP retrieval, machine-readable contracts, or
        guardrails for AI-generated UI, I'd like to hear about it.
      </p>
      <div className="flex items-center justify-center gap-4">
        <a
          href={meta.social.email}
          className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
        >
          Send an email
        </a>
        <a
          href={meta.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          LinkedIn
        </a>
      </div>
    </SectionWrapper>
  );
}
