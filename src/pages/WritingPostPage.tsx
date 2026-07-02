import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { getWritingPost, writingPosts } from "@/content/writing";
import { Footer } from "@/sections/Footer";

export function WritingPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getWritingPost(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/writing" replace />;

  const others = writingPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
      <Link
        to="/writing"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <span className="link-arrow-back" aria-hidden>
          →
        </span>
        All ideas
      </Link>

      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4">
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          <span>{post.readTime}</span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          {post.title}
        </h1>
        <p className="body-lg text-muted-foreground mt-5 leading-relaxed">
          {post.dek}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-accent/25 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        {post.relatedWorkSlug ? (
          <p className="mt-6">
            <Link
              to={`/work/${post.relatedWorkSlug}`}
              className="text-sm link-accent inline-flex items-center gap-1 border-b border-accent/40 pb-0.5 hover:border-accent transition-colors"
            >
              Read the full story
              <span aria-hidden className="link-arrow">
                →
              </span>
            </Link>
          </p>
        ) : null}
      </motion.header>

      <div className="mt-14 space-y-12">
        {post.sections.map((section, sectionIndex) => (
          <motion.section
            key={section.heading}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 * sectionIndex }}
          >
            <h2
              id={`w-section-${sectionIndex}`}
              className="font-heading text-xl font-semibold mb-4 scroll-mt-28"
            >
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.body.split("\n\n").map((paragraph, j) => (
                <p
                  key={j}
                  className="body-base text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-20 pt-10 border-t border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-6">
            More writing
          </h3>
          <ul className="space-y-4">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/writing/${p.slug}`}
                  className="group block font-heading font-semibold text-foreground hover:underline underline-offset-4"
                >
                  {p.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {p.dek}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Footer />
    </article>
  );
}
