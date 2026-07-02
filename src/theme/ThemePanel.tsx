import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioChrome } from "@/context/PortfolioChromeContext";
import { useTheme } from "./use-theme";
import { presets } from "./presets";
import { randomizeTheme } from "./randomize";
import { ColorControl } from "./controls/ColorControl";
import { TypographyControl } from "./controls/TypographyControl";
import { RadiusControl } from "./controls/RadiusControl";
import { SpacingControl } from "./controls/SpacingControl";
import { EffectsControl } from "./controls/EffectsControl";

export function ThemePanel() {
  const { themePanelOpen: open, setThemePanelOpen: setOpen } =
    usePortfolioChrome();
  const { values, update, reset } = useTheme();

  return (
    <>
      {/* Panel drawer — triggered from the header palette icon */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 z-50 h-full w-80 overflow-y-auto border-r border-border bg-background shadow-2xl"
            >
              <div className="p-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-heading text-sm font-semibold">
                    Theme studio
                  </h2>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1 rounded hover:bg-muted transition-colors"
                    aria-label="Close"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* What this is */}
                <p className="mb-4 text-[11px] leading-relaxed text-muted-foreground">
                  This whole site runs on design tokens — colors, type, glass,
                  radius and spacing are variables, not hardcoded styles.
                  Change anything here and every surface updates live.
                </p>

                {/* Full-theme randomizer */}
                <button
                  type="button"
                  onClick={() => update(randomizeTheme())}
                  className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-primary px-3 py-2.5 text-xs font-semibold text-primary-foreground shadow-[0_2px_14px_-4px_hsl(var(--accent)/0.5)] transition-[transform,box-shadow,filter] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_4px_18px_-4px_hsl(var(--accent)/0.6)] hover:brightness-105 active:scale-[0.98]"
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
                    <path d="M16 3h5v5" />
                    <path d="M4 20 21 3" />
                    <path d="M21 16v5h-5" />
                    <path d="m15 15 6 6" />
                    <path d="M4 4l5 5" />
                  </svg>
                  Surprise me — randomize everything
                </button>

                {/* Mode — segmented toggle; two materials, not an inversion */}
                <div className="mb-6">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Mode
                  </label>
                  <div
                    role="radiogroup"
                    aria-label="Color mode"
                    className="mt-2 grid grid-cols-2 gap-1 rounded-xl bg-muted p-1"
                  >
                    {(
                      [
                        { mode: "light", material: "Frosted" },
                        { mode: "dark", material: "Smoked" },
                      ] as const
                    ).map(({ mode, material }) => {
                      const active = values.mode === mode;
                      return (
                        <button
                          key={mode}
                          role="radio"
                          aria-checked={active}
                          onClick={() => update({ mode })}
                          className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2.5 transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            active
                              ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {mode === "light" ? (
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              aria-hidden
                            >
                              <circle cx="12" cy="12" r="4" />
                              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                            </svg>
                          ) : (
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden
                            >
                              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                            </svg>
                          )}
                          <span className="text-xs font-medium">
                            {mode.charAt(0).toUpperCase() + mode.slice(1)}
                          </span>
                          <span
                            className={`text-[10px] ${active ? "text-accent-foreground" : "opacity-60"}`}
                          >
                            {material}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                    {values.mode === "light"
                      ? "Frosted: neutral paper canvas, bright glass that lifts the backdrop, color only in accents."
                      : "Smoked: hue-steeped canvas, glass that darkens the backdrop, accent rim-light on edges."}
                  </p>
                </div>

                {/* Controls — glass effects sit right under color */}
                <div className="space-y-6">
                  <ColorControl />
                  <EffectsControl />
                  <TypographyControl />
                  <RadiusControl />
                  <SpacingControl />
                </div>

                {/* Presets */}
                <div className="mt-8">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Presets
                  </label>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {presets.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => update(p.values)}
                        className="rounded-md border border-border px-2.5 py-1 text-xs text-foreground hover:bg-muted transition-colors"
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset */}
                <button
                  onClick={reset}
                  className="mt-6 w-full rounded-md border border-border px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  Reset to defaults
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
