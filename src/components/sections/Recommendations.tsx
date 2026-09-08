import { FiLinkedin } from "react-icons/fi";
import { Section } from "../layout/Section";
import { recommendations } from "../../lib/data";
import type { Recommendation } from "../../lib/data/recommendations";

const pullQuotes: Record<number, string> = {
  1: "On critical projects, Hasib bhai has been my go-to discussion partner—his insights, clarity, and depth of knowledge are second to none.",
  2: "He takes ownership. He delivered a custom e-commerce site single-handedly, and the client was very happy with it.",
  3: "His attention to detail made a significant contribution to our systems' resilience and scalability. He also excels at mentoring junior people.",
  4: "Hasibul is an outstanding professional across development, cloud infrastructure, and DevOps—and an asset to any project.",
  5: "His outstanding ownership and ability to meet client requirements effectively make him an awesome teammate.",
};

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((part) => part[0]).join("");
}

function Author({ item }: { item: Recommendation }) {
  return (
    <div className="flex items-center gap-3">
      <div className="recommendation-avatar" data-tone={item.id} data-avatar={item.avatar}>{initials(item.name)}</div>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-ink">{item.name}</p>
        <p className="mt-0.5 truncate text-xs text-muted">{item.designation} · {item.company}</p>
        <p className="mt-1 text-[10px] text-faint">{item.date} · {item.relationship}</p>
      </div>
      <a href={item.linkedin} target="_blank" rel="noreferrer" className="ml-auto rounded-full border border-line p-2 text-faint transition hover:border-primary hover:text-primary" aria-label={`View ${item.name} on LinkedIn`}>
        <FiLinkedin className="h-4 w-4" />
      </a>
    </div>
  );
}

function SupportingQuote({ item }: { item: Recommendation }) {
  return (
    <article className="min-w-0 border-t border-line py-9 lg:py-10">
      <blockquote className="text-base font-medium leading-8 text-ink">“{pullQuotes[item.id]}”</blockquote>
      <div className="mt-7"><Author item={item} /></div>
    </article>
  );
}

export function Recommendations() {
  const [featured, ...supporting] = recommendations;

  return (
    <Section id="recommendations" eyebrow="Recommendations" title="Good work is" titleMuted="remembered by people" description="A few words from teammates who have worked with me directly." className="bg-surface-alt">
      <div className="grid min-w-0 border-t border-line lg:grid-cols-[1.08fr_.92fr]">
        <div className="min-w-0 lg:border-r lg:border-line lg:pr-16">
          <article className="relative flex flex-col justify-between py-10 lg:py-14">
            <span className="font-display text-7xl leading-none text-primary-dark/70" aria-hidden="true">“</span>
            <blockquote className="my-10 max-w-2xl font-display text-2xl font-semibold leading-[1.5] tracking-[-0.025em] text-ink md:text-3xl">
              {pullQuotes[featured.id]}
            </blockquote>
            <Author item={featured} />
          </article>
          <SupportingQuote item={supporting[0]} />
        </div>

        <div className="min-w-0 lg:pl-16">
          {supporting.slice(1).map((item) => <SupportingQuote key={item.id} item={item} />)}
        </div>
      </div>
    </Section>
  );
}
