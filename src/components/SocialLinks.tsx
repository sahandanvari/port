import { meta } from "@/content/meta";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href={meta.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
      >
        LinkedIn
      </a>
      <span className="text-border">|</span>
      <a
        href={meta.social.email}
        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
      >
        Email
      </a>
    </div>
  );
}
