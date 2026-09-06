interface BadgeProps {
  children: string;
  tone?: "default" | "primary" | "accent";
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "bg-surface-alt text-muted",
  primary: "bg-primary-soft text-primary-dark",
  accent: "bg-accent-soft text-accent",
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
