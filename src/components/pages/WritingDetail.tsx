import { useMemo } from "react";
import { FiArrowLeft, FiClock, FiLink, FiShare2 } from "react-icons/fi";
import { Container } from "../layout/Container";
import { ClockDiagram } from "./ClockDiagram";
import { DelegationDiagram } from "./DelegationDiagram";
import { articles, profile } from "../../lib/data";
import type { ArticleBlock } from "../../lib/data/writing";
import { renderInline, slugify } from "../../lib/inline";
import { useActiveSection } from "../../hooks/useActiveSection";

interface WritingDetailProps {
  slug: string;
  onBack: () => void;
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 id={slugify(block.text)}>{block.text}</h2>;
    case "paragraph":
      return <p>{renderInline(block.text)}</p>;
    case "pullquote":
      return <blockquote>{renderInline(block.text)}</blockquote>;
    case "code":
      return (
        <pre>
          <code>{block.code}</code>
        </pre>
      );
    case "diagram":
      return block.variant === "delegation" ? <DelegationDiagram /> : <ClockDiagram />;
    case "clock":
      return (
        <div className="clock">
          <div className="clock-id">
            CLOCK
            <span className="num">{block.id}</span>
          </div>
          <div>
            <span className="verdict">{block.verdict}</span>
            <h3>{block.title}</h3>
            {block.paragraphs.map((text) => (
              <p key={text}>{renderInline(text)}</p>
            ))}
          </div>
        </div>
      );
    case "rules":
      return (
        <div className="rules">
          {block.items.map((item) => (
            <div key={item.title} className="rule-item">
              <h3>{renderInline(item.title)}</h3>
              <p>{renderInline(item.body)}</p>
            </div>
          ))}
        </div>
      );
    case "symptoms":
      return (
        <dl className="symptoms">
          {block.items.map((item) => (
            <div key={item.term} className="symptom">
              <dt>{item.term}</dt>
              <dd>{renderInline(item.description)}</dd>
            </div>
          ))}
        </dl>
      );
    default:
      return null;
  }
}

export function WritingDetail({ slug, onBack }: WritingDetailProps) {
  const article = articles.find((entry) => entry.slug === slug) ?? articles[0];
  const headings = useMemo(
    () =>
      article.blocks.filter((block) => block.type === "heading") as Extract<
        ArticleBlock,
        { type: "heading" }
      >[],
    [article],
  );
  const headingIds = useMemo(() => headings.map((block) => slugify(block.text)), [headings]);
  const activeId = useActiveSection(headingIds);

  return (
    <main className="min-h-screen bg-bg pt-16 text-ink">
      <header className="article-hero">
        <div className="section-blueprint" aria-hidden="true">
          <span className="section-line section-line-left" />
          <span className="section-line section-line-top" />
          <span className="section-plus section-plus-left" />
        </div>
        <Container>
          <a
            href="/writing"
            onClick={(event) => {
              event.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted transition hover:text-primary"
          >
            <FiArrowLeft /> All writing
          </a>
          <div className="mt-16 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[.1em] text-primary">
              {article.tags.map((tag, index) => (
                <span key={tag} className="flex items-center gap-3">
                  {index > 0 && <span className="h-px w-8 bg-line" />}
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-6 font-display text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold leading-[.88] tracking-[-.065em]">
              {article.titleLines[0]}
              <br />
              <span className="text-ghost-fade">{article.titleLines[1]}</span>
            </h1>
            <p className="mt-9 max-w-3xl text-xl leading-8 text-muted md:text-2xl md:leading-9">
              {renderInline(article.standfirst)}
            </p>
            {article.meter && (
              <div className="mt-8 max-w-xl" aria-hidden="true">
                <div className="flex h-2.5 overflow-hidden rounded-sm border border-line">
                  <div className="bg-primary" style={{ width: `${article.meter.fillPercent}%` }} />
                  <div className="bg-red-400/70 dark:bg-red-500/60" style={{ width: `${article.meter.overPercent}%` }} />
                </div>
                <div className="mt-2 flex justify-between font-mono text-[11px] uppercase tracking-[.06em] text-faint">
                  <span>{article.meter.leftLabel}</span>
                  <span className="font-semibold text-red-500">{article.meter.rightLabel}</span>
                </div>
              </div>
            )}
            <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-line pt-6 text-xs text-faint">
              <strong className="text-ink">{profile.name}</strong>
              <span>{article.date}</span>
              <span className="inline-flex items-center gap-1.5">
                <FiClock /> {article.readTime} read
              </span>
              <span className="ml-auto hidden items-center gap-3 sm:flex">
                <FiLink />
                <FiShare2 />
              </span>
            </div>
          </div>
        </Container>
      </header>

      <Container className="py-16 md:py-24">
        <div className="article-layout">
          <aside className="article-toc">
            <p>On this page</p>
            {headings.map((block) => {
              const id = slugify(block.text);
              return (
                <a key={block.text} href={`#${id}`} aria-current={activeId === id ? "true" : undefined}>
                  {block.text}
                </a>
              );
            })}
          </aside>
          <article className="article-prose">
            <p className="article-lede">{renderInline(article.standfirst)}</p>
            {article.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}

            <footer className="article-signoff">
              <span>Written by</span>
              <strong>{profile.name}</strong>
              <p>{profile.role} building products, platforms, and applied AI systems.</p>
            </footer>
          </article>
        </div>
      </Container>
    </main>
  );
}
