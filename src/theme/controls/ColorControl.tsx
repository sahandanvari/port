import { useTheme } from "@/theme/use-theme";

function HueSlider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (hue: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="flex items-center gap-1.5 text-xs tabular-nums text-foreground">
          <span
            className="inline-block h-3 w-3 rounded-full border border-border"
            style={{
              backgroundColor:
                value === 0 ? "hsl(0 0% 30%)" : `hsl(${value} 60% 50%)`,
            }}
          />
          {value}°
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={360}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-foreground"
      />
    </div>
  );
}

export function ColorControl() {
  const { values, update } = useTheme();

  return (
    <div className="space-y-3">
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        Color
      </label>

      <HueSlider
        label="Primary hue"
        value={values.primaryHue}
        onChange={(hue) => update({ primaryHue: hue })}
      />
      <HueSlider
        label="Accent hue"
        value={values.accentHue}
        onChange={(hue) => update({ accentHue: hue })}
      />

      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Saturation</span>
          <span className="text-xs tabular-nums text-foreground">
            {values.saturation}%
          </span>
        </div>
        <input
          type="range"
          min={10}
          max={100}
          step={5}
          value={values.saturation}
          onChange={(e) => update({ saturation: Number(e.target.value) })}
          className="mt-1 w-full accent-foreground"
        />
      </div>
    </div>
  );
}
