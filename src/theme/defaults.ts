export interface ThemeValues {
  mode: "light" | "dark";
  primaryHue: number;
  /** Accent can diverge from primary for two-tone themes. */
  accentHue: number;
  /** 0–100 — global chroma multiplier applied to every chromatic token. */
  saturation: number;
  fontDisplay: string;
  fontHeading: string;
  fontBody: string;
  textBase: number;
  radius: number;
  spacingUnit: number;
  /** Backdrop blur of the liquid-glass chrome, in px. */
  glassBlur: number;
  /** Opacity of the drifting ambient orbs, 0–1. */
  ambientStrength: number;
}

export const DEFAULTS: ThemeValues = {
  mode: "light",
  primaryHue: 258,
  accentHue: 258,
  saturation: 60,
  fontDisplay: '"Bricolage Grotesque", system-ui, sans-serif',
  fontHeading: '"Bricolage Grotesque", system-ui, sans-serif',
  fontBody: '"DM Sans", system-ui, sans-serif',
  textBase: 16,
  radius: 0.625,
  spacingUnit: 0.25,
  glassBlur: 16,
  ambientStrength: 1,
};

const SANS_FONTS = [
  {
    label: "Bricolage Grotesque",
    value: '"Bricolage Grotesque", system-ui, sans-serif',
  },
  { label: "Space Grotesk", value: '"Space Grotesk", system-ui, sans-serif' },
  { label: "Syne", value: '"Syne", system-ui, sans-serif' },
  { label: "DM Sans", value: '"DM Sans", system-ui, sans-serif' },
  { label: "Inter", value: '"Inter", system-ui, sans-serif' },
  { label: "System UI", value: "system-ui, -apple-system, sans-serif" },
] as const;

const SERIF_FONTS = [
  { label: "Fraunces", value: '"Fraunces", Georgia, serif' },
  { label: "Instrument Serif", value: '"Instrument Serif", Georgia, serif' },
  { label: "Georgia", value: '"Georgia", "Times New Roman", serif' },
] as const;

export const FONT_OPTIONS_DISPLAY = [...SANS_FONTS, ...SERIF_FONTS];
export const FONT_OPTIONS_HEADING = [...SANS_FONTS, ...SERIF_FONTS];
export const FONT_OPTIONS_BODY = [
  { label: "DM Sans", value: '"DM Sans", system-ui, sans-serif' },
  { label: "Inter", value: '"Inter", system-ui, sans-serif' },
  { label: "Space Grotesk", value: '"Space Grotesk", system-ui, sans-serif' },
  { label: "System UI", value: "system-ui, -apple-system, sans-serif" },
  { label: "Georgia", value: '"Georgia", "Times New Roman", serif' },
  { label: "Fraunces", value: '"Fraunces", Georgia, serif' },
] as const;

/**
 * Generate HSL color strings from primary/accent hues and a global
 * saturation multiplier. Hue 0 = neutral monochrome. Accent hue may
 * diverge from primary for two-tone themes.
 *
 * The two modes are deliberately different materials, not inversions:
 * - light = "paper + frosted glass": neutral white canvas, color lives
 *   only in accents, so the page feels airy and editorial.
 * - dark = "night + smoked glass": the canvas itself is steeped in the
 *   primary hue (background, cards, borders, muted text all carry a
 *   trace of it), so the page feels immersive and the accents glow.
 */
export function hueToTokens(
  primaryHue: number,
  accentHue: number,
  saturation: number,
  mode: "light" | "dark",
) {
  // Scale a base saturation percentage by the global multiplier
  const sat = (base: number) =>
    `${Math.round((base * saturation) / 60)}%`;
  const pChroma = primaryHue > 0;
  const aChroma = accentHue > 0;

  if (mode === "light") {
    return {
      background: "0deg 0% 100%",
      foreground: "0deg 0% 8.5%",
      card: "0deg 0% 98%",
      cardForeground: "0deg 0% 8.5%",
      primary: pChroma ? `${primaryHue}deg ${sat(60)} 45%` : "0deg 0% 15%",
      primaryForeground: "0deg 0% 100%",
      muted: "0deg 0% 96%",
      mutedForeground: "0deg 0% 45%",
      accent: aChroma ? `${accentHue}deg ${sat(55)} 50%` : "0deg 0% 20%",
      accentForeground: aChroma
        ? `${accentHue}deg ${sat(60)} 35%`
        : "0deg 0% 15%",
      accentSoft: aChroma ? `${accentHue}deg ${sat(45)} 97%` : "0deg 0% 98%",
      ring: aChroma ? `${accentHue}deg ${sat(55)} 50%` : "0deg 0% 25%",
      border: "0deg 0% 90%",
    };
  }

  return {
    background: pChroma ? `${primaryHue}deg ${sat(24)} 6%` : "0deg 0% 7%",
    foreground: pChroma ? `${primaryHue}deg ${sat(10)} 95%` : "0deg 0% 95%",
    card: pChroma ? `${primaryHue}deg ${sat(20)} 10%` : "0deg 0% 11%",
    cardForeground: pChroma
      ? `${primaryHue}deg ${sat(10)} 95%`
      : "0deg 0% 95%",
    primary: pChroma ? `${primaryHue}deg ${sat(60)} 65%` : "0deg 0% 85%",
    primaryForeground: pChroma ? `${primaryHue}deg ${sat(30)} 5%` : "0deg 0% 5%",
    muted: pChroma ? `${primaryHue}deg ${sat(15)} 13%` : "0deg 0% 15%",
    mutedForeground: pChroma
      ? `${primaryHue}deg ${sat(10)} 66%`
      : "0deg 0% 65%",
    accent: aChroma ? `${accentHue}deg ${sat(55)} 62%` : "0deg 0% 78%",
    accentForeground: aChroma
      ? `${accentHue}deg ${sat(65)} 76%`
      : "0deg 0% 95%",
    accentSoft: aChroma ? `${accentHue}deg ${sat(35)} 13%` : "0deg 0% 12%",
    ring: aChroma ? `${accentHue}deg ${sat(50)} 62%` : "0deg 0% 70%",
    border: pChroma ? `${primaryHue}deg ${sat(16)} 19%` : "0deg 0% 20%",
  };
}
