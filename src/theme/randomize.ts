import type { ThemeValues } from "./defaults";
import {
  FONT_OPTIONS_BODY,
  FONT_OPTIONS_DISPLAY,
  FONT_OPTIONS_HEADING,
} from "./defaults";

const pick = <T>(arr: readonly T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const RADII = [0, 0.25, 0.5, 0.625, 0.875, 1.25] as const;

/**
 * Roll a whole coherent theme, not just colors: the accent hue is kept
 * in harmony with the primary (same, adjacent, or complementary), and
 * heading font usually follows the display font so type stays composed.
 * Mode, base text size, and spacing are left alone — those are layout
 * choices, not flavor.
 */
export function randomizeTheme(): Partial<ThemeValues> {
  const primaryHue = 1 + Math.floor(Math.random() * 360);
  const offsets = [0, 30, -30, 150, 180];
  const offset = offsets[Math.floor(Math.random() * offsets.length)];
  const accentHue = ((primaryHue + offset + 360) % 360) || 360;

  const fontDisplay = pick(FONT_OPTIONS_DISPLAY).value;
  const fontHeading =
    Math.random() < 0.6 ? fontDisplay : pick(FONT_OPTIONS_HEADING).value;

  return {
    primaryHue,
    accentHue,
    saturation: 40 + Math.floor(Math.random() * 50),
    fontDisplay,
    fontHeading,
    fontBody: pick(FONT_OPTIONS_BODY).value,
    radius: pick(RADII),
    glassBlur: 8 + Math.floor(Math.random() * 21),
    ambientStrength: Math.round((0.4 + Math.random() * 0.6) * 10) / 10,
  };
}
