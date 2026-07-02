import { Link } from "react-router-dom";
import { meta } from "@/content/meta";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16 border-t border-border/60">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {meta.name}
        </p>
        <div className="flex flex-wrap gap-6">
          <Link
            to="/design-systems"
            className="hover:text-foreground transition-colors"
          >
            Design systems
          </Link>
          <Link
            to="/resume"
            className="hover:text-foreground transition-colors"
          >
            Resume
          </Link>
          <Link
            to="/artifacts"
            className="hover:text-foreground transition-colors"
          >
            Artifacts
          </Link>
          <a
            href={meta.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <Link
            to="/writing"
            className="hover:text-foreground transition-colors"
          >
            Ideas
          </Link>
        </div>
      </div>
    </footer>
  );
}
