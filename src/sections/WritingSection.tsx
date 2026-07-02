import { Link } from "react-router-dom";
import { SectionWrapper } from "@/components/SectionWrapper";
import { writingPosts } from "@/content/writing";

export function WritingSection() {
  const featured = [...writingPosts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 6);

  return (
    <SectionWrapper
      id="writing"
      maxWidth="wide"
      className="!py-sp-16 md:!py-sp-20 border-t border-border/60"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
        <div>
        <p className="eyebrow mb-3">Ideas</p>
        <h2 className="heading-2">What I think</h2>
        <p className="body-base text-muted-foreground mt-3 max-w-xl">
          Short essays on tokens, governance, and AI-ready systems. The full
          build stories are in{" "}
          <Link to="/#work" className="underline underline-offset-4">
            Work
          </Link>
          .
        </p>
        </div>
        <Link
          to="/writing"
          className="text-sm link-accent shrink-0 inline-flex items-center gap-1"
        >
          View all
          <span aria-hidden className="link-arrow">
            →
          </span>
        </Link>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/writing/${post.slug}`}
              className="group flex h-full flex-col rounded-xl border border-border bg-card/40 p-5 md:p-6 hover:bg-muted/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <time
                dateTime={post.publishedAt}
                className="text-xs tabular-nums text-muted-foreground"
              >
                {post.publishedAt}
              </time>
              <h3 className="font-heading text-lg font-semibold text-foreground mt-3 group-hover:underline underline-offset-4 decoration-border leading-snug">
                {post.title}
              </h3>
              <p className="body-base text-muted-foreground mt-2 line-clamp-3 flex-1">
                {post.dek}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-accent/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-4 text-sm font-medium text-foreground inline-flex items-center gap-1">
                Read
                <span aria-hidden className="link-arrow">
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
