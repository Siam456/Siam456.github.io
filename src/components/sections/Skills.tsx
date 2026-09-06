import { FiActivity, FiCloud, FiDatabase, FiGitBranch } from "react-icons/fi";
import { Section } from "../layout/Section";

const capabilities = [
  { icon: FiGitBranch, tone:"teal", label: "Agent systems", tools: "LangGraph · LangChain · MCP · RAG", text: "Designing stateful, tool-using workflows with routing, parallel execution, streaming, memory, and human review." },
  { icon: FiDatabase, tone:"blue", label: "Backend & data", tools: "Python · FastAPI · Node.js · PostgreSQL · Redis", text: "Building asynchronous APIs, durable state models, queues, caching, and real-time application backends." },
  { icon: FiActivity, tone:"violet", label: "Real-time infrastructure", tools: "WebSockets · LiveKit · Asterisk · SIP", text: "Connecting models to low-latency audio and telephony systems with interruption-aware conversational control." },
  { icon: FiCloud, tone:"amber", label: "Cloud delivery", tools: "AWS · EKS · Lambda · Docker · CI/CD", text: "Taking services from local development to observable, repeatable production environments." },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Technical capabilities" title="Tools selected" titleMuted="around the system" description="The technologies matter because of what they enable—not because they belong in a checklist." className="bg-surface-alt">
      <div className="grid border-t border-line md:grid-cols-2">
        {capabilities.map((item, index) => (
          <article key={item.label} className="border-b border-line py-10 md:px-10 md:py-12 md:odd:pl-0 md:even:border-l md:even:pr-0">
            <div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><span className={`capability-icon capability-icon-${item.tone}`}><item.icon /></span><h3 className="font-display text-xl font-bold text-ink">{item.label}</h3></div><span className="font-mono text-[9px] text-faint">0{index + 1}</span></div>
            <p className="mt-4 font-mono text-[10px] leading-5 text-primary">{item.tools}</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
