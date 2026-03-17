import { useEffect, useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme-mode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = saved ? saved === "dark" : prefersDark;
    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
  }, []);

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme-mode", dark ? "dark" : "light");
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    applyTheme(newDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
      {/* Dark mode toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.414 9.172a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707zM5 13a1 1 0 100 2H4a1 1 0 100-2h1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="text-center max-w-2xl">
        <h1 className="heading-1 mb-6">Sahand Anvari</h1>
        <p className="heading-3 text-muted-foreground mb-4">
          Design Systems Lead
        </p>

        <div className="h-1 w-24 bg-border mx-auto mb-8" />

        <p className="body-lg text-muted-foreground mb-12 leading-relaxed">
          Building design infrastructure that lets entire products rebrand by
          swapping one file.
          <br />
          Coming soon with the full story.
        </p>

        {/* Social links */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://linkedin.com/in/sahand"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sahandanvari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@sahandanvari.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sahand Anvari
      </div>
    </div>
  );
}

export default App;
