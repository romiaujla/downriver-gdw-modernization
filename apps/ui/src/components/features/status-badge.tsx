type StatusBadgeProps = {
  label: string;
};

export function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <div className="status-badge">
      <span aria-hidden="true" className="status-dot" />
      {label}
    </div>
  );
}
