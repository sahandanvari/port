import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { meta } from "@/content/meta";
import {
  resumeContact,
  resumeSummary,
  resumeSkills,
  resumeCredentials,
} from "@/content/resumePage";
import { experienceEntries } from "@/content/experience";
import { Footer } from "@/sections/Footer";

export function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16 print:max-w-none print:p-0">
      <div className="mb-10 flex items-center justify-between print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="link-arrow-back" aria-hidden>
            →
          </span>
          Home
        </Link>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Print
          </button>
          <a
            href="/resume.pdf"
            download="Sahand-Anvari-Resume.pdf"
            className="rounded-lg border border-foreground px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Download PDF
          </a>
        </div>
      </div>

      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight print:text-3xl">
          {meta.name}
        </h1>
        <p className="mt-2 text-lg text-accent-foreground font-medium print:text-base">
          Product Designer · Design Systems Lead
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {resumeContact.location} ·{" "}
          <a
            href={`mailto:${resumeContact.email}`}
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {resumeContact.email}
          </a>
        </p>
        <p className="mt-5 text-sm leading-relaxed text-foreground/90 print:mt-2 print:text-xs print:leading-snug">
          {resumeSummary}
        </p>
      </motion.header>

      <section
        className="mt-10 print:mt-5"
        aria-labelledby="exp-heading"
      >
        <h2
          id="exp-heading"
          className="eyebrow print:text-[11px]"
        >
          Experience
        </h2>
        <ul className="mt-5 space-y-7 print:mt-2 print:space-y-3">
          {experienceEntries.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground print:text-sm">
                    {job.role}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5 print:text-xs">
                    {job.company} · {job.location}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full border border-border px-2 py-0.5 capitalize print:hidden">
                    {job.type.replace("-", " ")}
                  </span>
                  <time className="tabular-nums">{job.period}</time>
                </div>
              </div>
              <ul className="mt-2.5 space-y-1.5 text-sm text-foreground/90 list-disc pl-5 print:mt-1 print:space-y-0.5 print:text-[11px] print:leading-snug">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 print:mt-3" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="eyebrow print:text-[11px]">
          Skills
        </h2>
        <ul className="mt-4 flex flex-wrap gap-1.5 print:mt-2">
          {resumeSkills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-accent/25 bg-accent/5 px-2.5 py-1 text-xs text-foreground/90 print:border-border print:bg-transparent print:py-0.5"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 print:mt-3" aria-labelledby="cred-heading">
        <h2 id="cred-heading" className="eyebrow print:text-[11px]">
          Conferences & awards
        </h2>
        <ul className="mt-4 space-y-1.5 text-sm text-foreground/90 list-disc pl-5 print:mt-1.5 print:space-y-0.5 print:text-[11px]">
          {resumeCredentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm text-muted-foreground print:hidden">
        Case studies:{" "}
        <Link to="/design-systems" className="underline underline-offset-4">
          Design systems overview
        </Link>{" "}
        ·{" "}
        <Link to="/#work" className="underline underline-offset-4">
          All work
        </Link>
      </p>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
