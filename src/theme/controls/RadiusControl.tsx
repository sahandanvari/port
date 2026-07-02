import { useTheme } from "@/theme/use-theme";

export function RadiusControl() {
  const { values, update } = useTheme();

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Radius
        </label>
        <span className="text-xs tabular-nums text-foreground">
          {values.radius.toFixed(2)}rem
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={1.5}
        step={0.125}
        value={values.radius}
        onChange={(e) => update({ radius: Number(e.target.value) })}
        className="mt-2 w-full accent-foreground"
      />
      <div className="mt-2 flex items-center gap-3">
        <div
          className="w-10 h-10 border border-border bg-muted"
          style={{ borderRadius: `${values.radius}rem` }}
        />
        <span className="text-xs text-muted-foreground">Preview</span>
      </div>
    </div>
  );
}
