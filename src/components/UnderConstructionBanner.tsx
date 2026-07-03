import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const DISMISS_KEY = "portfolio-wip-banner-dismissed";

/** Small dismissible "under construction" notice while content is being filled in. */
export function UnderConstructionBanner() {
  const reduceMotion = useReducedMotion();
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(DISMISS_KEY) === "1",
  );

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {!dismissed ? (
        <motion.div
          role="status"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="glass fixed inset-x-0 bottom-20 z-40 mx-auto flex w-fit max-w-[calc(100%-2rem)] items-center gap-2.5 rounded-full py-2 pl-4 pr-2 text-xs text-foreground md:bottom-5 print:hidden"
        >
          <span aria-hidden>🚧</span>
          <span className="font-medium">
            Under construction — screenshots and demos are on their way.
          </span>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss notice"
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M2.5 2.5l7 7m0-7l-7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
