import { useState, useCallback, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./use-theme";
import { DEFAULTS, hueToTokens, type ThemeValues } from "./defaults";
import { applyGlassStyles, normalizeGlassBlur } from "./apply-glass-styles";

// v2: chromatic default hue + Bricolage Grotesque — bump so stale
// saved defaults don't shadow the new look.
const STORAGE_KEY = "portfolio-theme-v2";

function readStorage(): Partial<ThemeValues> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const saved = JSON.parse(raw) as Partial<ThemeValues>;
    // Coerce numeric sliders — JSON may store them as strings.
    if (saved.glassBlur != null) saved.glassBlur = Number(saved.glassBlur);
    if (saved.ambientStrength != null) {
      saved.ambientStrength = Number(saved.ambientStrength);
    }
    if (saved.textBase != null) saved.textBase = Number(saved.textBase);
    if (saved.radius != null) saved.radius = Number(saved.radius);
    if (saved.spacingUnit != null) saved.spacingUnit = Number(saved.spacingUnit);
    if (saved.primaryHue != null) saved.primaryHue = Number(saved.primaryHue);
    if (saved.accentHue != null) saved.accentHue = Number(saved.accentHue);
    if (saved.saturation != null) saved.saturation = Number(saved.saturation);
    return saved;
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
  const glassBlur = normalizeGlassBlur(v.glassBlur);
  const ambientStrength = Number.isFinite(v.ambientStrength)
    ? Math.max(0, Math.min(1, v.ambientStrength))
    : DEFAULTS.ambientStrength;
  s.setProperty("--glass-blur", `${glassBlur}px`);
  s.setProperty("--ambient-strength", String(ambientStrength));
  applyGlassStyles(glassBlur);

  // Spacing
  s.setProperty("--spacing-unit", `${v.spacingUnit}rem`);
  for (const n of [1, 2, 3, 4, 6, 8, 12, 16, 24]) {
    s.setProperty(`--spacing-${n}`, `${(v.spacingUnit * n).toFixed(4)}rem`);
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<ThemeValues>(() => {
    const saved = readStorage();
    const merged = { ...DEFAULTS, ...saved };
    merged.glassBlur = normalizeGlassBlur(merged.glassBlur);
    if (!Number.isFinite(merged.ambientStrength)) {
      merged.ambientStrength = DEFAULTS.ambientStrength;
    }
    return merged;
  });

  useEffect(() => {
    applyToDom(values);
  }, [values]);

  const update = useCallback((partial: Partial<ThemeValues>) => {
    setValues((prev) => {
      const next = { ...prev, ...partial };
      writeStorage(next);
      applyToDom(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setValues(DEFAULTS);
    writeStorage(DEFAULTS);
    applyToDom(DEFAULTS);
  }, []);

  return (
    <ThemeContext value={{ values, update, reset }}>{children}</ThemeContext>
  );
}
