import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { experience } from "../../lib/data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career progression" title="One company," titleMuted="expanding ownership" description="From learning the delivery craft to designing agent platforms and guiding technical decisions." className="bg-surface">
      <div className="grid gap-12 border-t border-line pt-10 md:grid-cols-[250px_1fr] md:gap-16 md:pt-14">
        <div className="md:sticky md:top-28 md:self-start">
          <h3 className="font-display text-2xl font-bold text-ink">Brain Station 23</h3>
          <p className="mt-2 text-sm text-muted">Dhaka, Bangladesh</p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">January 2022 — Present</p>
        </div>

        <div className="relative ml-2 border-l border-line pl-8 md:ml-0 md:pl-12">
          {experience.map((entry, index) => (
            <motion.article key={entry.role} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="timeline-entry relative pb-14 last:pb-0">
              <span className="timeline-node" aria-hidden="true"><span /></span>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div><span className="font-mono text-[9px] text-faint">0{index + 1}</span><h4 className="mt-2 font-display text-xl font-bold text-ink">{entry.role}</h4></div>
                <p className="shrink-0 text-xs font-semibold text-primary">{entry.start} — {entry.end}</p>
              </div>
              <ul className="mt-5 max-w-3xl space-y-3">
                {entry.highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-7 text-muted"><span className="mt-3 h-px w-3 shrink-0 bg-primary" />{highlight}</li>)}
              </ul>
              <p className="mt-5 font-mono text-[9px] leading-5 text-faint">{entry.stack.join(" · ")}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
