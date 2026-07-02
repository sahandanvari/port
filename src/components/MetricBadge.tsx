interface MetricBadgeProps {
  label: string;
  value: string;
}

export function MetricBadge({ label, value }: MetricBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/25 bg-accent/5 px-2.5 py-0.5 text-xs text-muted-foreground">
      <span className="font-semibold text-primary">{value}</span>
      {label}
    </span>
  );
}
