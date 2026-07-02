import { useState, useCallback, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./use-theme";
import { DEFAULTS, hueToTokens, type ThemeValues } from "./defaults";

// v2: chromatic default hue + Bricolage Grotesque — bump so stale
// saved defaults don't shadow the new look.
const STORAGE_KEY = "portfolio-theme-v2";

function readStorage(): Partial<ThemeValues> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Partial<ThemeValues>) : {};
  } catch {
    return {};
  }
}

function writeStorage(v: ThemeValues) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(v));
}

function applyToDom(v: ThemeValues) {
  const el = document.documentElement;
  const s = el.style;

  // Mode
  el.classList.toggle("dark", v.mode === "dark");

  // Colors
  const colors = hueToTokens(v.primaryHue, v.accentHue, v.saturation, v.mode);
  s.setProperty("--background", colors.background);
  s.setProperty("--foreground", colors.foreground);
  s.setProperty("--card", colors.card);
  s.setProperty("--card-foreground", colors.cardForeground);
  s.setProperty("--primary", colors.primary);
  s.setProperty("--primary-foreground", colors.primaryForeground);
  s.setProperty("--muted", colors.muted);
  s.setProperty("--muted-foreground", colors.mutedForeground);
  s.setProperty("--accent", colors.accent);
  s.setProperty("--accent-foreground", colors.accentForeground);
  s.setProperty("--accent-soft", colors.accentSoft);
  s.setProperty("--ring", colors.ring);
  s.setProperty("--border", colors.border);

  // Typography
  s.setProperty("--font-display", v.fontDisplay);
  s.setProperty("--font-heading", v.fontHeading);
  s.setProperty("--font-body", v.fontBody);
  el.style.fontSize = `${v.textBase}px`;

  // Radius
  s.setProperty("--radius", `${v.radius}rem`);
  s.setProperty("--radius-sm", `${Math.max(0, v.radius - 0.25)}rem`);
  s.setProperty("--radius-md", `${v.radius}rem`);
  s.setProperty("--radius-lg", `${v.radius + 0.25}rem`);
  s.setProperty("--radius-xl", `${v.radius + 0.5}rem`);

  // Effects
  s.setProperty("--glass-blur", `${v.glassBlur}px`);
  s.setProperty("--ambient-strength", `${v.ambientStrength}`);

  // Spacing
  s.setProperty("--spacing-unit", `${v.spacingUnit}rem`);
  for (const n of [1, 2, 3, 4, 6, 8, 12, 16, 24]) {
    s.setProperty(`--spacing-${n}`, `${(v.spacingUnit * n).toFixed(4)}rem`);
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<ThemeValues>(() => {
    const saved = readStorage();
    return { ...DEFAULTS, ...saved };
  });

  useEffect(() => {
    applyToDom(values);
  }, [values]);

  const update = useCallback((partial: Partial<ThemeValues>) => {
    setValues((prev) => {
      const next = { ...prev, ...partial };
      writeStorage(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setValues(DEFAULTS);
    writeStorage(DEFAULTS);
    document.documentElement.style.cssText = "";
    document.documentElement.style.fontSize = `${DEFAULTS.textBase}px`;
  }, []);

  return (
    <ThemeContext value={{ values, update, reset }}>{children}</ThemeContext>
  );
}
