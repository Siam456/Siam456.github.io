import { Section } from "../layout/Section";

const principles = [
  ["Design for failure", "I model retries, partial results, tool failure, and recovery before calling an AI workflow production-ready."],
  ["Keep judgment visible", "Automation should expose evidence and uncertainty. Humans stay involved where confidence or consequence demands it."],
  ["Treat latency as product", "Streaming, concurrency, and interruption handling shape how intelligent a system feels—not just its model choice."],
  ["Build clear boundaries", "Agents, tools, state, and infrastructure should have explicit contracts that can evolve and be observed independently."],
];

export function About() {
  return (
    <Section id="principles" eyebrow="How I work" title="Engineering judgment" titleMuted="before novelty" description="The principles I use when an AI proof of concept has to become dependable software." className="bg-surface-alt">
      <div className="grid border-t border-line md:grid-cols-2">
        {principles.map(([title, text], index) => (
          <article key={title} className="border-b border-line py-9 md:px-10 md:py-12 md:odd:pl-0 md:even:border-l md:even:pr-0">
            <span className="font-mono text-[10px] text-faint">0{index + 1}</span>
            <h3 className="mt-5 font-display text-xl font-bold text-ink">{title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
