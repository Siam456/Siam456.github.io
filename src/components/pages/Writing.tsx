import { motion } from "framer-motion";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { Container } from "../layout/Container";
import { articles } from "../../lib/data";

interface WritingProps {
  onOpenArticle: (slug: string) => void;
}

export function Writing({ onOpenArticle }: WritingProps) {
  const [featured] = articles;

  return (
    <main className="min-h-screen bg-bg pt-16 text-ink">
      <section className="relative overflow-hidden border-b border-line py-24 md:py-32">
        <div className="section-blueprint" aria-hidden="true">
          <span className="section-line section-line-left" />
          <span className="section-line section-line-top" />
          <span className="section-plus section-plus-left" />
        </div>
        <Container>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-primary">Notes from the work</p>
            <h1 className="mt-5 font-display text-[clamp(3.7rem,8vw,7.8rem)] font-extrabold leading-[.9] tracking-[-.065em]">
              Writing about <span className="text-ghost-fade">systems that ship.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              Field notes on software architecture, applied AI, real-time infrastructure, and the
              product decisions that make complex systems useful.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-20 md:py-28">
        <Container>
          <article className="grid overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-card md:grid-cols-[1.15fr_.85fr]">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.1em] text-primary">
                <span>Featured essay</span>
                <span className="h-px w-8 bg-line" />
                <span>{featured.category}</span>
              </div>
              <h2 className="mt-7 max-w-2xl font-display text-3xl font-bold leading-tight tracking-[-.04em] md:text-5xl">
                {featured.titleLines.join(" ")}
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-muted">{featured.summary}</p>
              <div className="mt-9 flex items-center gap-4 text-xs text-faint">
                <span>{featured.date}</span>
                <span className="flex items-center gap-1.5">
                  <FiClock /> {featured.readTime}
                </span>
              </div>
              <a
                href={`/writing/${featured.slug}`}
                onClick={(event) => {
                  event.preventDefault();
                  onOpenArticle(featured.slug);
                }}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-primary"
              >
                Read article <FiArrowUpRight />
              </a>
            </div>
            <div className="writing-feature-art" aria-hidden="true">
              <div className="writing-ring" />
              <div className="writing-node writing-node-a">01</div>
              <div className="writing-node writing-node-b">04</div>
              <div className="writing-node writing-node-c">HITL</div>
            </div>
          </article>

          <div className="mt-20 flex items-end justify-between border-b border-line pb-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.1em] text-primary">The archive</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">Latest notes</h2>
            </div>
            <span className="text-xs text-faint">{articles.length.toString().padStart(2, "0")} articles</span>
          </div>
          <div>
            {articles.map((article, index) => (
              <a
                href={`/writing/${article.slug}`}
                onClick={(event) => {
                  event.preventDefault();
                  onOpenArticle(article.slug);
                }}
                key={article.slug}
                className="group grid gap-5 border-b border-line py-8 transition-colors hover:bg-surface-alt/55 md:grid-cols-[70px_1fr_2fr_auto] md:items-start md:px-4"
              >
                <span className="font-mono text-xs text-faint">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-primary">{article.category}</p>
                  <p className="mt-2 text-xs text-faint">
                    {article.date} · {article.readTime}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-[-.025em] transition-colors group-hover:text-primary md:text-2xl">
                    {article.titleLines.join(" ")}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{article.summary}</p>
                </div>
                <FiArrowUpRight className="mt-1 text-faint transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
