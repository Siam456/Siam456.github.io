interface StatTileProps {
  value: string;
  label: string;
  tone: "primary" | "accent";
}

const toneClasses: Record<StatTileProps["tone"], string> = {
  primary: "bg-gradient-to-br from-primary to-primary-dark",
  accent: "bg-gradient-to-br from-accent to-accent-dark",
};

export function StatTile({ value, label, tone }: StatTileProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-5 text-white ${toneClasses[tone]}`}
    >
      <div className="absolute -right-4 -top-6 h-20 w-20 rounded-full bg-white/10" />
      <div className="absolute -bottom-8 -right-10 h-24 w-24 rounded-full bg-white/10" />
      <p className="relative font-display text-3xl font-extrabold">{value}</p>
      <p className="relative mt-1 text-sm text-white/85">{label}</p>
    </div>
  );
}
