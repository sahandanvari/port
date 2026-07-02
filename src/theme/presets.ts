import type { ThemeValues } from "./defaults";
import { DEFAULTS } from "./defaults";

export interface ThemePreset {
  name: string;
  values: Partial<ThemeValues>;
}

/**
 * Each preset moves several axes at once (hue, fonts, radius, effects)
 * to show the token system re-skinning the whole site coherently.
 */
export const presets: ThemePreset[] = [
  {
    name: "Default",
    values: { ...DEFAULTS },
  },
  {
    name: "Editorial",
    values: {
      primaryHue: 345,
      accentHue: 25,
      saturation: 55,
      fontDisplay: '"Fraunces", Georgia, serif',
      fontHeading: '"Fraunces", Georgia, serif',
      fontBody: '"Georgia", "Times New Roman", serif',
      radius: 0.25,
      glassBlur: 12,
      ambientStrength: 0.7,
    },
  },
  {
    name: "Tech",
    values: {
      primaryHue: 150,
      accentHue: 190,
      saturation: 70,
      fontDisplay: '"Space Grotesk", system-ui, sans-serif',
      fontHeading: '"Space Grotesk", system-ui, sans-serif',
      fontBody: '"Inter", system-ui, sans-serif',
      radius: 0.375,
      glassBlur: 20,
      ambientStrength: 1,
    },
  },
  {
    name: "Sunset",
    values: {
      primaryHue: 25,
      accentHue: 345,
      saturation: 75,
      fontDisplay: '"Bricolage Grotesque", system-ui, sans-serif',
      fontHeading: '"Bricolage Grotesque", system-ui, sans-serif',
      fontBody: '"DM Sans", system-ui, sans-serif',
      radius: 1,
      glassBlur: 24,
      ambientStrength: 1,
    },
  },
  {
    name: "Mono",
    values: {
      primaryHue: 0,
      accentHue: 0,
      saturation: 60,
      fontDisplay: '"Syne", system-ui, sans-serif',
      fontHeading: '"DM Sans", system-ui, sans-serif',
      fontBody: '"DM Sans", system-ui, sans-serif',
      radius: 0.625,
      glassBlur: 16,
      ambientStrength: 0.4,
    },
  },
  {
    name: "Compact",
    values: {
      spacingUnit: 0.2,
      radius: 0.375,
      textBase: 14,
    },
  },
  {
    name: "Sharp",
    values: {
      radius: 0,
      glassBlur: 8,
    },
  },
];
