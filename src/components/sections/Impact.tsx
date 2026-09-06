import { FiCpu, FiLayers, FiRadio } from "react-icons/fi";
import { Section } from "../layout/Section";

const outcomes = [
  { number: "01", icon: FiCpu, tone: "teal", title: "AI & agent systems", text: "Orchestrating specialized agents that reason, use tools, share context, and keep people involved in critical decisions." },
  { number: "02", icon: FiLayers, tone: "violet", title: "Full-stack product engineering", text: "Taking products from interface to backend through APIs, data models, search, caching, and polished user experiences." },
  { number: "03", icon: FiRadio, tone: "amber", title: "Cloud & real-time infrastructure", text: "Operating services on AWS and building low-latency voice, media, streaming, and deployment infrastructure." },
];

export function Impact() {
  return (
    <Section id="impact" eyebrow="Engineering scope" title="Across the stack," titleMuted="from interface to infrastructure" description="The work spans product engineering, backend systems, applied AI, and the infrastructure that keeps them dependable.">
      <div className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((item) => (
          <article key={item.number} className="group border-b border-line py-9 sm:px-7 sm:even:border-l lg:border-b-0 lg:py-12 lg:first:pl-0 lg:not-first:border-l lg:last:pr-0">
            <div className="flex items-center justify-between"><span className={`scope-icon scope-icon-${item.tone}`}><item.icon /></span><span className="font-mono text-[10px] text-faint">{item.number}</span></div>
            <h3 className="mt-7 font-display text-lg font-bold tracking-[-0.02em] text-ink transition-colors group-hover:text-primary">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
