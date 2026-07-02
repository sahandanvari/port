import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ChromeContextValue = {
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  themePanelOpen: boolean;
  setThemePanelOpen: (open: boolean) => void;
  toggleThemePanel: () => void;
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
  toggleChat: () => void;
};

const ChromeContext = createContext<ChromeContextValue | null>(null);

export function PortfolioChromeProvider({ children }: { children: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [themePanelOpen, setThemePanelOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

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
