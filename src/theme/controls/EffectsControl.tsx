import { useTheme } from "@/theme/use-theme";

/** Sliders for the liquid-glass blur and ambient orb intensity. */
export function EffectsControl() {
  const { values, update } = useTheme();

  return (
    <div className="space-y-3">
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        Effects
      </label>

      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Glass blur</span>
          <span className="text-xs tabular-nums text-foreground">
            {values.glassBlur}px
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={32}
          step={2}
          value={values.glassBlur}
          onChange={(e) => update({ glassBlur: Number(e.target.value) })}
          className="mt-1 w-full accent-foreground"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Ambient glow</span>
          <span className="text-xs tabular-nums text-foreground">
            {Math.round(values.ambientStrength * 100)}%
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={values.ambientStrength}
          onChange={(e) =>
            update({ ambientStrength: Number(e.target.value) })
          }
          className="mt-1 w-full accent-foreground"
        />
      </div>
    </div>
  );
}
