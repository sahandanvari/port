import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { meta } from "@/content/meta";
import { usePortfolioChrome } from "@/context/PortfolioChromeContext";
import { PortfolioBrowseNav } from "@/components/PortfolioRightNav";
import { uiEnter, uiExit } from "@/lib/motion";

type NavItem = {
  label: string;
  href: string;
  match: (pathname: string) => boolean;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Work",
    href: "/#work",
    match: (p) => p === "/" || p.startsWith("/work"),
  },
  {
    label: "Ideas",
    href: "/writing",
    match: (p) => p.startsWith("/writing"),
  },
  {
    label: "Systems",
    href: "/design-systems",
    match: (p) => p === "/design-systems" || p === "/artifacts",
  },
  {
    label: "Resume",
    href: "/resume",
    match: (p) => p === "/resume",
  },
];

const DOCK_ITEMS = [
  { label: "Work", href: "/#work", icon: "briefcase" as const },
  { label: "Ideas", href: "/writing", icon: "pen" as const },
  { label: "Menu", href: "#menu", icon: "menu" as const },
];

/** Icon button with a small tooltip below (hover + keyboard focus). */
function HeaderIconButton({
  label,
  onClick,
  expanded,
  controls,
  badge = false,
  children,
}: {
  label: string;
  onClick: () => void;
  expanded?: boolean;
  controls?: string;
  /** Pulsing accent dot — "something to discover here". */
  badge?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        onClick={onClick}
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent/15 hover:text-accent-foreground"
        aria-label={label}
        aria-expanded={expanded}
        aria-controls={controls}
      >
        {children}
        {badge ? (
          <span className="absolute right-1 top-1 flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
        ) : null}
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within:opacity-100 group-hover:opacity-100"
      >
        {label}
      </span>
    </span>
  );
}

const STUDIO_SEEN_KEY = "theme-studio-seen";

/** Theme studio (incl. light/dark) and Ask assistant — one cluster. */
function HeaderActions() {
  const { toggleThemePanel, themePanelOpen } = usePortfolioChrome();
  const reduceMotion = useReducedMotion();
  // Pulse the palette icon until the studio has been opened once
  const [studioSeen, setStudioSeen] = useState(
    () => localStorage.getItem(STUDIO_SEEN_KEY) === "1",
  );
  // First visit: after a beat, a little "Try me" tooltip appears by itself
  const [tryMeOpen, setTryMeOpen] = useState(false);

  useEffect(() => {
    if (studioSeen) return;
    const show = setTimeout(() => setTryMeOpen(true), 1600);
    return () => clearTimeout(show);
  }, [studioSeen]);

  const markSeen = () => {
    localStorage.setItem(STUDIO_SEEN_KEY, "1");
    setStudioSeen(true);
    setTryMeOpen(false);
  };

  const openStudio = () => {
    toggleThemePanel();
    markSeen();
  };

  return (
    <div className="relative flex shrink-0 items-center gap-0.5">
      <AnimatePresence>
        {tryMeOpen && !themePanelOpen ? (
          <motion.span
            role="status"
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: -5, scale: 0.9 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.94 }
            }
            transition={uiEnter}
            className="glass pointer-events-none absolute right-0 top-full z-20 mt-2.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-medium text-foreground"
          >
            Try me
          </motion.span>
        ) : null}
      </AnimatePresence>
      <HeaderIconButton
        label="Theme studio — colors, fonts, light/dark"
        onClick={openStudio}
        expanded={themePanelOpen}
        badge={!studioSeen}
      >
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
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      </HeaderIconButton>
    </div>
  );
}

function DockIcon({ type }: { type: "briefcase" | "pen" | "menu" }) {
  if (type === "menu") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    );
  }
  if (type === "pen") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4Z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  );
}

function NavPillLinks() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <nav
      className="relative hidden items-center gap-0.5 md:flex"
      aria-label="Primary"
    >
      {NAV_ITEMS.map((item) => {
        const active = item.match(pathname);

        return (
          <Link
            key={item.label}
            to={item.href}
            aria-current={active ? "page" : undefined}
            className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-[color,background-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.96] ${
              active
                ? "text-accent-foreground"
                : "text-muted-foreground hover:bg-foreground/[0.045] hover:text-foreground dark:hover:bg-white/[0.06]"
            }`}
          >
            {active ? (
              <motion.span
                className="nav-pill-glass absolute inset-0"
                initial={
                  reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <span className="relative z-10">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function GlassNav() {
  const { pathname } = useLocation();
  const { mobileNavOpen, openMobileNav, closeMobileNav } = usePortfolioChrome();
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 32);
  });

  useEffect(() => {
    if (!mobileNavOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileNav();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileNavOpen, closeMobileNav]);

  return (
    <>
      {/* Desktop + mobile top bar */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-3 md:pt-4 print:hidden">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: scrolled ? 0.98 : 1 }}
          transition={uiEnter}
          className="glass-strong pointer-events-auto mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-full px-3 py-2 md:max-w-4xl md:px-4"
        >
          <Link
            to="/"
            className="font-heading shrink-0 text-sm font-semibold tracking-tight text-foreground transition-opacity duration-150 hover:opacity-80"
          >
            {meta.name.split(" ")[0]}{" "}
            <span className="font-normal text-muted-foreground">Anvari</span>
          </Link>

          <NavPillLinks />

          <HeaderActions />
        </motion.div>
      </header>

      {/* Mobile bottom dock */}
      <nav
        className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:hidden print:hidden"
        aria-label="Mobile navigation"
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...uiEnter, delay: reduceMotion ? 0 : 0.05 }}
          className="glass-strong pointer-events-auto mx-auto flex max-w-xs items-stretch justify-around rounded-full px-2 py-2"
        >
          {DOCK_ITEMS.map((item) => {
            const isMenu = item.icon === "menu";
            const active =
              !isMenu &&
              (item.label === "Work"
                ? pathname === "/" || pathname.startsWith("/work")
                : pathname.startsWith("/writing"));

            if (isMenu) {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={openMobileNav}
                  className="flex flex-1 flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-[10px] font-medium text-muted-foreground transition-colors duration-150 hover:bg-accent/15 hover:text-accent-foreground"
                  aria-expanded={mobileNavOpen}
                  aria-haspopup="dialog"
                >
                  <DockIcon type="menu" />
                  Menu
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex flex-1 flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-[10px] font-medium transition-colors duration-150 ${
                  active
                    ? "bg-accent/20 text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                }`}
              >
                <DockIcon type={item.icon} />
                {item.label}
              </Link>
            );
          })}
        </motion.div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileNavOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={uiExit}
              className="fixed inset-0 z-[45] bg-black/30 backdrop-blur-[2px] md:hidden"
              onClick={closeMobileNav}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={uiEnter}
              className="glass-strong fixed inset-y-0 right-0 z-[48] flex w-[min(300px,100vw)] flex-col md:hidden"
            >
              <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
                <span className="text-sm font-semibold text-primary">Menu</span>
                <button
                  type="button"
                  onClick={closeMobileNav}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors duration-150 hover:bg-accent/15 hover:text-foreground"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <PortfolioBrowseNav onNavigate={closeMobileNav} />
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
