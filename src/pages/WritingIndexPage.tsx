import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { writingPosts } from "@/content/writing";
import { Footer } from "@/sections/Footer";

export function WritingIndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sorted = [...writingPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <span className="link-arrow-back" aria-hidden>
          →
        </span>
        Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="eyebrow mb-3">Ideas</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          What I think
        </h1>
        <p className="body-lg text-muted-foreground mt-4 max-w-2xl">
          Opinions and ideas from building two design systems — the full
          stories live in{" "}
          <Link
            to="/#work"
            className="text-foreground underline underline-offset-4 decoration-border"
          >
            Work
          </Link>
          .
        </p>
      </motion.div>

      <ul className="mt-14 divide-y divide-border border-t border-border">
        {sorted.map((post, i) => (
          <motion.li
            key={post.slug}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * i }}
          >
            <Link
              to={`/writing/${post.slug}`}
              className="group block py-8 hover:bg-muted/20 -mx-4 px-4 rounded-lg transition-colors"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xs text-muted-foreground mb-2">
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:underline underline-offset-4">
                {post.title}
              </h2>
              <p className="body-base text-muted-foreground mt-2">{post.dek}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] uppercase tracking-wide text-muted-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}
