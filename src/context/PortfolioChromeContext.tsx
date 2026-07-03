import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const THEME_STUDIO_SEEN_KEY = "theme-studio-seen";

type ChromeContextValue = {
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  themePanelOpen: boolean;
  setThemePanelOpen: (open: boolean) => void;
  toggleThemePanel: () => void;
  /** True until the visitor dismisses the first-run theme studio callout. */
  themeStudioIntro: boolean;
  dismissThemeStudioIntro: () => void;
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
  toggleChat: () => void;
};

const ChromeContext = createContext<ChromeContextValue | null>(null);

export function PortfolioChromeProvider({ children }: { children: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [themePanelOpen, setThemePanelOpen] = useState(false);
  const [themeStudioIntro, setThemeStudioIntro] = useState(
    () => localStorage.getItem(THEME_STUDIO_SEEN_KEY) !== "1",
  );
  const [chatOpen, setChatOpen] = useState(false);

  // First visit: open theme studio after the hero settles so visitors see "Try me" in context.
  useEffect(() => {
    if (!themeStudioIntro) return;
    const openTimer = window.setTimeout(() => setThemePanelOpen(true), 1400);
    return () => window.clearTimeout(openTimer);
  }, [themeStudioIntro]);

  const dismissThemeStudioIntro = useCallback(() => {
    localStorage.setItem(THEME_STUDIO_SEEN_KEY, "1");
    setThemeStudioIntro(false);
  }, []);

  const openMobileNav = useCallback(() => setMobileNavOpen(true), []);
  const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);
  const toggleThemePanel = useCallback(
    () => setThemePanelOpen((o) => !o),
    [],
  );
  const toggleChat = useCallback(() => setChatOpen((o) => !o), []);

  const value = useMemo(
    () => ({
      mobileNavOpen,
      setMobileNavOpen,
      openMobileNav,
      closeMobileNav,
      themePanelOpen,
      setThemePanelOpen,
      toggleThemePanel,
      themeStudioIntro,
      dismissThemeStudioIntro,
      chatOpen,
      setChatOpen,
      toggleChat,
    }),
    [
      mobileNavOpen,
      openMobileNav,
      closeMobileNav,
      themePanelOpen,
      toggleThemePanel,
      themeStudioIntro,
      dismissThemeStudioIntro,
      chatOpen,
      toggleChat,
    ],
  );

  return (
    <ChromeContext.Provider value={value}>{children}</ChromeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- context consumer hook
export function usePortfolioChrome() {
  const ctx = useContext(ChromeContext);
  if (!ctx) {
    throw new Error(
      "usePortfolioChrome must be used within PortfolioChromeProvider",
    );
  }
  return ctx;
}
