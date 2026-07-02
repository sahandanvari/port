import { motion, useReducedMotion } from "framer-motion";
import { meta } from "@/content/meta";
import { SocialLinks } from "@/components/SocialLinks";

const enter = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-16 pt-4 md:px-8 md:pb-24 md:pt-10"
    >
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_auto] md:gap-16">
        {/* Copy */}
        <div>
          <motion.p
            {...enter}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow mb-6"
          >
            {meta.title}
          </motion.p>
          <motion.h1
            {...enter}
            transition={{ duration: 0.4, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.98] tracking-tight text-foreground"
          >
            <span className="block font-bold">{meta.name.split(" ")[0]}</span>
            <span className="text-gradient-accent block font-extralight">
              {meta.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>
          <motion.p
            {...enter}
            transition={{ duration: 0.4, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed font-body"
          >
            {meta.oneLiner}
          </motion.p>
          <motion.div
            {...enter}
            transition={{ duration: 0.4, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <SocialLinks />
            <a
              href="#work"
              className="border-b border-accent pb-0.5 text-sm font-medium text-accent-foreground transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent-foreground hover:text-accent"
            >
              View case studies
            </a>
          </motion.div>
          <motion.p
            {...enter}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Vancouver, BC · Canada
          </motion.p>
        </div>

        {/* Portrait — blended into the page, no frame */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-72 md:w-[28rem]"
        >
          {/* Glowing circle bed the cutout rises out of */}
          <div aria-hidden className="hero-circle absolute inset-x-0 bottom-0 aspect-square" />
          <div className="hero-float relative">
            {/* Cutout portrait overflows the top of the circle */}
            <div className="hero-cutout-clip relative">
              <img
                src="/portrait-cutout.png"
                alt="Portrait of Sahand Anvari"
                width={852}
                height={889}
                className="relative block w-full object-contain grayscale contrast-[1.08] brightness-[1.04]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
