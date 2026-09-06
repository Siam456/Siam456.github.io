export interface StatDef {
  label: string;
  tone: "primary" | "accent";
}

/** Facts pulled straight from the resume, rendered as gradient stat tiles in the hero. */
export const impactStats: StatDef[] = [
  { label: "Years in production engineering", tone: "primary" },
  { label: "Shipped projects", tone: "accent" },
  { label: "IOC records enriched at Anomali", tone: "primary" },
];
