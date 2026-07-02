import { useTheme } from "@/theme/use-theme";
import {
  FONT_OPTIONS_BODY,
  FONT_OPTIONS_DISPLAY,
  FONT_OPTIONS_HEADING,
} from "@/theme/defaults";

function FontSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly { label: string; value: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <span className="text-xs text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-border bg-background px-2 py-1.5 text-sm text-foreground"
        style={{ fontFamily: value }}
      >
        {options.map((f) => (
          <option key={f.label} value={f.value}>
            {f.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TypographyControl() {
  const { values, update } = useTheme();

  return (
    <div className="space-y-3">
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        Typography
      </label>

      <FontSelect
        label="Display (hero)"
        value={values.fontDisplay}
        options={FONT_OPTIONS_DISPLAY}
        onChange={(fontDisplay) => update({ fontDisplay })}
      />
      <FontSelect
        label="Headings"
        value={values.fontHeading}
        options={FONT_OPTIONS_HEADING}
        onChange={(fontHeading) => update({ fontHeading })}
      />
      <FontSelect
        label="Body"
        value={values.fontBody}
        options={FONT_OPTIONS_BODY}
        onChange={(fontBody) => update({ fontBody })}
      />

      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Base size</span>
          <span className="text-xs tabular-nums text-foreground">
            {values.textBase}px
          </span>
        </div>
        <input
          type="range"
          min={12}
          max={20}
          step={1}
          value={values.textBase}
          onChange={(e) => update({ textBase: Number(e.target.value) })}
          className="mt-1 w-full accent-foreground"
        />
      </div>
    </div>
  );
}
