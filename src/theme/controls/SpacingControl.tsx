import { useTheme } from "@/theme/use-theme";

export function SpacingControl() {
  const { values, update } = useTheme();

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Spacing
        </label>
        <span className="text-xs tabular-nums text-foreground">
          {values.spacingUnit.toFixed(3)}rem
        </span>
      </div>
      <input
        type="range"
        min={0.125}
        max={0.5}
        step={0.025}
        value={values.spacingUnit}
        onChange={(e) => update({ spacingUnit: Number(e.target.value) })}
        className="mt-2 w-full accent-foreground"
      />
      <div className="mt-2 flex items-end gap-0.5">
        {[1, 2, 4, 8].map((n) => (
          <div
            key={n}
            className="bg-primary/30 border border-primary/50"
            style={{
              width: `${values.spacingUnit * n}rem`,
              height: `${values.spacingUnit * n}rem`,
              minWidth: 4,
              minHeight: 4,
            }}
          />
        ))}
      </div>
    </div>
  );
}
