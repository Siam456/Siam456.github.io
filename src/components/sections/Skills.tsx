import { FiActivity, FiCloud, FiDatabase, FiGitBranch, FiLayout } from "react-icons/fi";
import { Section } from "../layout/Section";
import { CodeEditor } from "./CodeEditor";

const capabilities = [
  { icon: FiGitBranch, tone:"teal", label: "Agent systems", tools: "LangGraph · LangChain · MCP · RAG", text: "Designing stateful, tool-using workflows with routing, parallel execution, streaming, memory, and human review." },
  { icon: FiLayout, tone:"violet", label: "Frontend & web platforms", tools: "React · Next.js · TypeScript · Tailwind CSS · Turborepo", text: "Building polished customer and administrative experiences, reusable design systems, SSR applications, and maintainable monorepo platforms." },
  { icon: FiDatabase, tone:"blue", label: "Backend & data", tools: "Python · FastAPI · Node.js · PostgreSQL · Redis", text: "Building asynchronous APIs, durable state models, queues, caching, search, and real-time application backends." },
  { icon: FiActivity, tone:"violet", label: "Real-time infrastructure", tools: "WebSockets · LiveKit · Asterisk · SIP", text: "Connecting models and applications to low-latency voice, media, streaming, and telephony systems with interruption-aware control." },
  { icon: FiCloud, tone:"amber", label: "Cloud delivery", tools: "AWS · EKS · Lambda · Docker · CI/CD", text: "Taking services from local development to observable, repeatable, and dependable production environments." },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Technical capabilities" title="Tools selected" titleMuted="around the system" description="The technologies matter because of what they enable—not because they belong in a checklist." className="bg-surface-alt">
      <div className="grid border-t border-line md:grid-cols-2">
        {capabilities.map((item, index) => (
          <article key={item.label} className={`border-b border-line py-10 md:px-10 md:py-12 md:odd:pl-0 md:even:border-l md:even:pr-0 ${index === capabilities.length - 1 ? "md:col-span-2 md:border-l-0 md:pl-0" : ""}`}>
            <div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><span className={`capability-icon capability-icon-${item.tone}`}><item.icon /></span><h3 className="font-display text-xl font-bold text-ink">{item.label}</h3></div><span className="font-mono text-[9px] text-faint">0{index + 1}</span></div>
            <p className="mt-4 font-mono text-[10px] leading-5 text-primary">{item.tools}</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted">{item.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 md:mt-24">
        <p className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
          A deep agent, wired to real tools
        </p>
        <CodeEditor />
      </div>
    </Section>
  );
}
