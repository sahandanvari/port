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

/* ---------------------------------------------------------------
 * WCAG contrast — users can pick any hue/saturation, so every token
 * that renders as TEXT is clamped to meet contrast against its
 * backdrop. Backgrounds keep the raw hue; only text roles shift.
 * ------------------------------------------------------------- */

function hslToLuminance(h: number, s: number, l: number): number {
  const sN = s / 100;
  const lN = l / 100;
  const c = (1 - Math.abs(2 * lN - 1)) * sN;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lN - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const lin = (v: number) => {
    const ch = v + m;
    return ch <= 0.03928 ? ch / 12.92 : Math.pow((ch + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function contrastRatio(lumA: number, lumB: number): number {
  const [hi, lo] = lumA >= lumB ? [lumA, lumB] : [lumB, lumA];
  return (hi + 0.05) / (lo + 0.05);
}

interface Hsl {
  h: number;
  s: number;
  l: number;
}

/**
 * Nudge lightness away from the backdrop until the color reads at the
 * target ratio (WCAG AA body text = 4.5:1). Hue and saturation are
 * preserved so the theme identity survives — only legibility is fixed.
 */
function ensureReadable(color: Hsl, bg: Hsl, target = 4.5): Hsl {
  const bgLum = hslToLuminance(bg.h, bg.s, bg.l);
  const darken = bgLum > 0.5;
  let l = color.l;
  for (let i = 0; i < 100; i++) {
    if (contrastRatio(hslToLuminance(color.h, color.s, l), bgLum) >= target) {
      break;
    }
    l += darken ? -1 : 1;
    if (l <= 0 || l >= 100) break;
  }
  return { ...color, l: Math.max(0, Math.min(100, l)) };
}

const hslStr = ({ h, s, l }: Hsl) => `${h}deg ${s}% ${l}%`;

/** Best-contrast text color (near-white or near-black) for a given bg. */
function textOn(bg: Hsl): string {
  const bgLum = hslToLuminance(bg.h, bg.s, bg.l);
  const whiteRatio = contrastRatio(1, bgLum);
  const blackRatio = contrastRatio(0.008, bgLum); // ~lightness 8%
  return whiteRatio >= blackRatio ? "0deg 0% 100%" : "0deg 0% 8%";
}

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
  const satN = (base: number) => Math.round((base * saturation) / 60);
  const sat = (base: number) => `${satN(base)}%`;
  const pChroma = primaryHue > 0;
  const aChroma = accentHue > 0;

  if (mode === "light") {
    const bg: Hsl = { h: 0, s: 0, l: 100 };
    // Text roles: clamp against the white canvas. `primary` and
    // `accentForeground` render as body-size text → 4.5:1 (AA).
    // `accent` renders as large/display text and UI accents → 3:1.
    const primary = pChroma
      ? ensureReadable({ h: primaryHue, s: satN(60), l: 45 }, bg, 4.5)
      : { h: 0, s: 0, l: 15 };
    const accent = aChroma
      ? ensureReadable({ h: accentHue, s: satN(55), l: 50 }, bg, 3)
      : { h: 0, s: 0, l: 20 };
    const accentFg = aChroma
      ? ensureReadable({ h: accentHue, s: satN(60), l: 35 }, bg, 4.5)
      : { h: 0, s: 0, l: 15 };

    return {
      background: hslStr(bg),
      foreground: "0deg 0% 8.5%",
      card: "0deg 0% 98%",
      cardForeground: "0deg 0% 8.5%",
      primary: hslStr(primary),
      // Button text: pick white or near-black per the clamped primary.
      primaryForeground: textOn(primary),
      muted: "0deg 0% 96%",
      mutedForeground: "0deg 0% 45%",
      accent: hslStr(accent),
      accentForeground: hslStr(accentFg),
      accentSoft: aChroma ? `${accentHue}deg ${sat(45)} 97%` : "0deg 0% 98%",
      ring: hslStr(accent),
      border: "0deg 0% 90%",
    };
  }

  const bg: Hsl = pChroma
    ? { h: primaryHue, s: satN(24), l: 6 }
    : { h: 0, s: 0, l: 7 };
  const primary = pChroma
    ? ensureReadable({ h: primaryHue, s: satN(60), l: 65 }, bg, 4.5)
    : { h: 0, s: 0, l: 85 };
  const accent = aChroma
    ? ensureReadable({ h: accentHue, s: satN(55), l: 62 }, bg, 3)
    : { h: 0, s: 0, l: 78 };
  const accentFg = aChroma
    ? ensureReadable({ h: accentHue, s: satN(65), l: 76 }, bg, 4.5)
    : { h: 0, s: 0, l: 95 };

  return {
    background: hslStr(bg),
    foreground: pChroma ? `${primaryHue}deg ${sat(10)} 95%` : "0deg 0% 95%",
    card: pChroma ? `${primaryHue}deg ${sat(20)} 10%` : "0deg 0% 11%",
    cardForeground: pChroma
      ? `${primaryHue}deg ${sat(10)} 95%`
      : "0deg 0% 95%",
    primary: hslStr(primary),
    primaryForeground: textOn(primary),
    muted: pChroma ? `${primaryHue}deg ${sat(15)} 13%` : "0deg 0% 15%",
    mutedForeground: pChroma
      ? `${primaryHue}deg ${sat(10)} 66%`
      : "0deg 0% 65%",
    accent: hslStr(accent),
    accentForeground: hslStr(accentFg),
    accentSoft: aChroma ? `${accentHue}deg ${sat(35)} 13%` : "0deg 0% 12%",
    ring: hslStr(accent),
    border: pChroma ? `${primaryHue}deg ${sat(16)} 19%` : "0deg 0% 20%",
  };
}
