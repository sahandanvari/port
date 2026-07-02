import { useTheme } from "./use-theme";

export function ThemeToggle() {
  const { values, update } = useTheme();

  function toggle() {
    update({ mode: values.mode === "dark" ? "light" : "dark" });
  }

  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-5 z-50 p-2.5 rounded-lg bg-muted/80 backdrop-blur-sm hover:bg-muted transition-colors border border-border/50"
      aria-label="Toggle theme"
    >
      {values.mode === "dark" ? (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.414 9.172a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707zM5 13a1 1 0 100 2H4a1 1 0 100-2h1z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
