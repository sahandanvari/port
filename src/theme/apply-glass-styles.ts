import { DEFAULTS } from "./defaults";

const GLASS_STYLE_ID = "portfolio-theme-glass";

/** Clamp glass blur to the Effects slider range. */
export function normalizeGlassBlur(value: number): number {
  if (!Number.isFinite(value)) return DEFAULTS.glassBlur;
  return Math.max(0, Math.min(32, Math.round(value)));
}

/**
 * SVG filter references in backdrop-filter render only in Chromium.
 * Safari and Firefox parse `blur() url(#liquid)` fine (so @supports
 * matches) but then silently drop the WHOLE filter — no blur at all.
 * Gate the liquid refraction on an actual Chromium runtime instead.
 */
const supportsLiquidRefraction =
  typeof navigator !== "undefined" &&
  "chrome" in window &&
  CSS.supports("backdrop-filter", "blur(1px) url(#liquid)");

/**
 * Chromium often skips repainting backdrop-filter when only a CSS
 * variable inside blur() changes. Inject literal px values so the slider
 * updates glass surfaces immediately.
 */
export function applyGlassStyles(blurPx: number) {
  const blur = normalizeGlassBlur(blurPx);
  let tag = document.getElementById(GLASS_STYLE_ID) as HTMLStyleElement | null;
  if (!tag) {
    tag = document.createElement("style");
    tag.id = GLASS_STYLE_ID;
    document.head.appendChild(tag);
  }

  const liquid = supportsLiquidRefraction ? " url(#liquid)" : "";
  const lightGlass = `blur(${blur}px) saturate(180%) brightness(1.06)`;
  const darkGlass = `blur(${blur}px) saturate(150%) brightness(0.88)`;
  const lightPill = `blur(${blur}px) saturate(115%) brightness(1.05)`;
  const darkPill = `blur(${blur}px) saturate(115%) brightness(1.1)`;

  tag.textContent = `
    .glass {
      backdrop-filter: ${lightGlass} !important;
      -webkit-backdrop-filter: ${lightGlass} !important;
    }
    .glass-strong {
      backdrop-filter: ${lightGlass}${liquid} !important;
      -webkit-backdrop-filter: ${lightGlass}${liquid} !important;
    }
    .dark .glass {
      backdrop-filter: ${darkGlass} !important;
      -webkit-backdrop-filter: ${darkGlass} !important;
    }
    .dark .glass-strong {
      backdrop-filter: ${darkGlass}${liquid} !important;
      -webkit-backdrop-filter: ${darkGlass}${liquid} !important;
    }
    .nav-pill-glass {
      backdrop-filter: ${lightPill} !important;
      -webkit-backdrop-filter: ${lightPill} !important;
    }
    .dark .nav-pill-glass {
      backdrop-filter: ${darkPill} !important;
      -webkit-backdrop-filter: ${darkPill} !important;
    }
  `;
}
