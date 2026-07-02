/**
 * Fixed hue-driven backdrop: three soft gradient orbs that drift slowly,
 * plus a film-grain overlay. Recolors live with the theme hue and gives
 * the liquid-glass chrome something colorful to refract.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden"
    >
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-orb ambient-orb-c" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
