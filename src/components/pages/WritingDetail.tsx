import { FiArrowLeft, FiClock, FiLink, FiShare2 } from "react-icons/fi";
import { Container } from "../layout/Container";

interface WritingDetailProps { slug: string; onBack: () => void; }

const articleMeta: Record<string, { category:string; title:string; muted:string; description:string; date:string; time:string }> = {
  "hello-world": { category:"Engineering notes", title:"Hello,", muted:"world.", description:"A first note on building software, learning in public, and why the smallest program still carries a big idea.", date:"September 6, 2026", time:"5 min" },
  "async-by-design": { category:"Backend systems", title:"Async by design:", muted:"keeping APIs responsive.", description:"Patterns for queues, caching, streaming, and background processing when product workflows grow beyond request and response.", date:"August 18, 2026", time:"7 min" },
  "voice-infrastructure-latency": { category:"Real-time", title:"Voice infrastructure", muted:"and the cost of latency.", description:"Lessons from joining SIP, Asterisk, LiveKit, and conversational agents into one interruption-friendly media pipeline.", date:"July 22, 2026", time:"6 min" },
  "dependable-interfaces": { category:"Product engineering", title:"The invisible work", muted:"behind dependable interfaces.", description:"Why polished products depend on data contracts, failure states, observability, and thoughtful administrative tools.", date:"June 14, 2026", time:"5 min" },
  "operable-aws-deployment": { category:"Cloud infrastructure", title:"From local service", muted:"to operable AWS deployment.", description:"A field guide to containers, EKS, configuration, debugging, and the production details architecture diagrams leave out.", date:"May 9, 2026", time:"9 min" },
};

export function WritingDetail({ slug, onBack }: WritingDetailProps) {
  const article = articleMeta[slug] ?? articleMeta["hello-world"];
  return (
    <main className="min-h-screen bg-bg pt-16 text-ink">
      <header className="article-hero">
        <div className="section-blueprint" aria-hidden="true"><span className="section-line section-line-left" /><span className="section-line section-line-top" /><span className="section-plus section-plus-left" /></div>
        <Container>
          <a href="/writing" onClick={(event) => { event.preventDefault(); onBack(); }} className="inline-flex items-center gap-2 text-xs font-semibold text-muted transition hover:text-primary"><FiArrowLeft /> All writing</a>
          <div className="mt-16 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[.1em] text-primary"><span>{article.category}</span><span className="h-px w-8 bg-line" /><span>Engineering journal</span></div>
            <h1 className="mt-6 font-display text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold leading-[.88] tracking-[-.065em]">{article.title}<br /><span className="text-faint">{article.muted}</span></h1>
            <p className="mt-9 max-w-3xl text-xl leading-8 text-muted md:text-2xl md:leading-9">{article.description}</p>
            <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-line pt-6 text-xs text-faint"><strong className="text-ink">Hasibul Hasan</strong><span>{article.date}</span><span className="inline-flex items-center gap-1.5"><FiClock /> {article.time} read</span><span className="ml-auto hidden items-center gap-3 sm:flex"><FiLink /><FiShare2 /></span></div>
          </div>
        </Container>
      </header>

      <Container className="py-16 md:py-24">
        <div className="article-layout">
          <aside className="article-toc"><p>On this page</p><a href="#beginning">The beginning</a><a href="#meaning">More than output</a><a href="#building">What I build</a><a href="#next">What comes next</a></aside>
          <article className="article-prose">
            <p className="article-lede">{article.description} This note focuses on the practical decisions, trade-offs, and production lessons behind that work.</p>

            <h2 id="beginning">The beginning is intentionally small</h2>
            <p>“Hello, world” is not impressive software. It has no database, no distributed architecture, no observability stack, and no users waiting for a release. That is precisely why it works as a beginning. It removes every distraction except the essential loop: write an instruction, run it, and observe the result.</p>
            <p>That loop remains intact even when the system grows. A production platform may contain services, queues, agent workflows, search indexes, cloud infrastructure, and carefully designed interfaces. Underneath it all, engineering is still the practice of expressing intent clearly enough for a machine—and a team—to act on it.</p>

            <pre><code><span>const</span> message = "Hello, world";{"\n"}{"\n"}console.log(message);</code></pre>

            <h2 id="meaning">More than output</h2>
            <p>The first successful output is a quiet confidence-building moment. The environment works. The assumptions are mostly correct. There is now a foundation to extend. Good engineering teams create versions of this moment throughout a project: thin vertical slices that prove the riskiest path before complexity accumulates.</p>
            <blockquote>Start with the smallest complete path. Make it observable. Then earn the right to add complexity.</blockquote>
            <p>This approach matters even more in AI systems. A convincing prototype can hide weak grounding, brittle tools, missing failure states, and unclear decision boundaries. I prefer to establish a dependable end-to-end path first—input, reasoning, action, evidence, and review—then deepen each part deliberately.</p>

            <h2 id="building">What I build from here</h2>
            <p>My work sits across the stack. Sometimes the challenge is an interface that makes a complicated workflow understandable. Sometimes it is an asynchronous backend that must remain responsive under load. Sometimes it is infrastructure, real-time media, or a group of specialized agents collaborating on a decision.</p>
            <ul><li>Product interfaces that make complex systems approachable.</li><li>Backend services with clear contracts and dependable failure handling.</li><li>Cloud and real-time infrastructure built to be operated, not merely deployed.</li><li>Applied AI workflows that preserve evidence and human judgment.</li></ul>

            <h2 id="next">What comes next</h2>
            <p>This writing space is where I will document the decisions behind that work: architecture trade-offs, lessons from production, patterns that held up, and ideas that did not. The goal is not to present perfect answers. It is to make the reasoning visible.</p>
            <p>So this is the first output—the simplest complete path. Hello, world.</p>

            <footer className="article-signoff"><span>Written by</span><strong>Hasibul Hasan</strong><p>Senior Software Engineer building products, platforms, and applied AI systems.</p></footer>
          </article>
        </div>
      </Container>
    </main>
  );
}
