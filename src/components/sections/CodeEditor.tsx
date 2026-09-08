import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FiFile, FiGitBranch, FiPackage, FiSearch } from "react-icons/fi";

type Tok = { c?: keyof typeof COLORS; t: string };

const COLORS = {
  kw: "text-[#569cd6]",
  ctrl: "text-[#c586c0]",
  fn: "text-[#dcdcaa]",
  type: "text-[#4ec9b0]",
  str: "text-[#ce9178]",
  arg: "text-[#9cdcfe]",
  com: "text-[#6a9955]",
  plain: "text-[#d4d4d4]",
} as const;

/** A LangChain "deep agent" wired to tools — typed out with syntax highlighting. */
const CODE: Tok[][] = [
  [{ c: "ctrl", t: "from" }, { t: " " }, { c: "type", t: "deepagents" }, { t: " " }, { c: "ctrl", t: "import" }, { t: " create_deep_agent" }],
  [{ c: "ctrl", t: "from" }, { t: " " }, { c: "type", t: "langchain.tools" }, { t: " " }, { c: "ctrl", t: "import" }, { t: " tool" }],
  [{ c: "ctrl", t: "from" }, { t: " " }, { c: "type", t: "langchain_anthropic" }, { t: " " }, { c: "ctrl", t: "import" }, { t: " ChatAnthropic" }],
  [],
  [{ c: "fn", t: "@tool" }],
  [{ c: "kw", t: "def" }, { t: " " }, { c: "fn", t: "search_docs" }, { t: "(" }, { c: "arg", t: "query" }, { t: ": " }, { c: "type", t: "str" }, { t: ") -> " }, { c: "type", t: "list" }, { t: ":" }],
  [{ t: "    " }, { c: "com", t: '"""Retrieve the most relevant passages."""' }],
  [{ t: "    " }, { c: "ctrl", t: "return" }, { t: " retriever." }, { c: "fn", t: "invoke" }, { t: "(query)" }],
  [],
  [{ t: "agent = " }, { c: "fn", t: "create_deep_agent" }, { t: "(" }],
  [{ t: "    model=" }, { c: "fn", t: "ChatAnthropic" }, { t: "(model=" }, { c: "str", t: '"claude-sonnet-4"' }, { t: ")," }],
  [{ t: "    tools=[search_docs, run_sql, send_email]," }],
  [{ t: "    instructions=" }, { c: "arg", t: "SYSTEM_PROMPT" }, { t: "," }],
  [{ t: "    subagents=[planner, researcher, writer]," }],
  [{ t: ")" }],
  [],
  [{ t: "state = agent." }, { c: "fn", t: "invoke" }, { t: "({" }, { c: "str", t: '"messages"' }, { t: ": [(" }, { c: "str", t: '"user"' }, { t: ", request)]})" }],
];

const TOTAL = CODE.reduce((sum, line, i) => sum + line.reduce((a, t) => a + t.t.length, 0) + (i < CODE.length - 1 ? 1 : 0), 0);

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Reveal `shown` characters across the doc, returning highlighted rows and the caret position. */
function renderWalk(shown: number) {
  let rem = shown;
  let caretLine = 1;
  let caretCol = 1;
  let caretPlaced = false;

  const rows = CODE.map((line, li) => {
    const spans: ReactNode[] = [];
    let col = 0;
    let ranOut = false;
    for (let ti = 0; ti < line.length; ti++) {
      const tok = line[ti];
      if (rem <= 0) {
        ranOut = true;
        break;
      }
      const s = tok.t.slice(0, rem);
      spans.push(
        <span key={ti} className={COLORS[tok.c ?? "plain"]}>
          {s}
        </span>,
      );
      rem -= s.length;
      col += s.length;
      if (s.length < tok.t.length) {
        ranOut = true;
        break;
      }
    }
    const lineLen = line.reduce((a, t) => a + t.t.length, 0);
    if (!caretPlaced && rem <= 0 && (ranOut || col === lineLen)) {
      caretLine = li + 1;
      caretCol = col + 1;
      caretPlaced = true;
    }
    rem -= 1;
    return { spans, li };
  });

  return { rows, caretLine, caretCol };
}

export function CodeEditor() {
  const [shown, setShown] = useState(prefersReduced ? TOTAL : 0);
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (prefersReduced) return;
    let n = 0;
    let hold = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 80);
      last = now;
      if (hold > 0) {
        hold -= dt;
        if (hold <= 0) {
          n = 0;
          setShown(0);
        }
      } else if (n < TOTAL) {
        n = Math.min(TOTAL, n + Math.max(1, Math.round(dt / 14)));
        setShown(n);
        if (n >= TOTAL) hold = 4200;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const { rows, caretLine, caretCol } = renderWalk(shown);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="code-ide-wrap"
    >
      <div className="code-ide" aria-hidden="true">
        <div className="code-ide-rail">
          <FiFile className="is-active" />
          <FiSearch />
          <FiGitBranch />
          <FiPackage />
        </div>
        <div className="code-ide-main">
          <div className="code-ide-tabs">
            <span className="tab is-active">
              <i className="dot" />
              deep_agent.py
            </span>
            <span className="tab">tools.py</span>
          </div>
          <div className="code-ide-editor">
            <div className="code-ide-gutter">
              {CODE.map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <pre className="code-ide-code">
              {rows.map((row) => (
                <div key={row.li} className="code-ide-line">
                  {row.spans}
                  {!prefersReduced && row.li + 1 === caretLine && <span className="code-ide-caret" />}
                </div>
              ))}
            </pre>
          </div>
          <div className="code-ide-status">
            <span className="seg-accent">
              <FiGitBranch /> main*
            </span>
            <span>Python 3.12.4</span>
            <span className="seg-end">
              Ln {caretLine}, Col {caretCol} · Spaces: 4 · UTF-8 · LF · deepagents
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
