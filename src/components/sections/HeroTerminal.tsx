import { useEffect, useState } from "react";

type Line = { t: "cmd" | "ok" | "dim" | "def"; prompt?: string; text: string };

/** Real commands against real projects — typed out on a loop, one scene at a time. */
const scenes: Line[][] = [
  [
    { t: "cmd", prompt: "~", text: "whoami" },
    { t: "dim", text: "Hasibul Hasan · Senior Software Engineer" },
    { t: "cmd", prompt: "~", text: "ls work/" },
    { t: "def", text: "anomali  flamecart  neuraflow  cad  +8" },
  ],
  [
    { t: "cmd", prompt: "anomali", text: "./deploy --env staging" },
    { t: "dim", text: "building multi-agent SOC pipeline…" },
    { t: "ok", text: "✓ EKS rollout · 4 investigation agents healthy" },
  ],
  [
    { t: "cmd", prompt: "flamecart", text: "pnpm turbo build" },
    { t: "ok", text: "✓ storefront   ✓ dashboard   ✓ api" },
    { t: "dim", text: "3 apps · 1 type-safe Postgres schema" },
  ],
  [
    { t: "cmd", prompt: "neuraflow", text: "pnpm channels:status" },
    { t: "def", text: "web   whatsapp   teams   slack   sms" },
    { t: "dim", text: "one agent definition · five surfaces" },
  ],
  [
    { t: "cmd", prompt: "~", text: "kubectl get pods -n prod" },
    { t: "def", text: "orchestrator   3/3   Running" },
    { t: "def", text: "workers        6/6   Running" },
    { t: "ok", text: "all healthy · 0 restarts" },
  ],
  [
    { t: "cmd", prompt: "~", text: "git log --oneline -3" },
    { t: "def", text: "6ba53ca  anomali: parallel investigation agents" },
    { t: "def", text: "ace1136  neuraflow: channel-agnostic runtime" },
    { t: "def", text: "8e26350  flamecart: type-safe checkout flow" },
  ],
];

const toneClass: Record<Line["t"], string> = {
  cmd: "text-[#c9d1d9]",
  ok: "text-[#4ebf8b]",
  dim: "text-[#7d8590]",
  def: "text-[#c9d1d9]",
};

function Prompt({ dir }: { dir: string }) {
  return (
    <>
      <span className="text-[#4ebf8b]">❯</span>{" "}
      <span className="text-[#56b6c2]">{dir}</span>{" "}
    </>
  );
}

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function HeroTerminal() {
  const [lines, setLines] = useState<Line[]>(prefersReduced ? scenes[0] : scenes[5]);
  const [dir, setDir] = useState("~");
  const [typing, setTyping] = useState(!prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => timers.push(setTimeout(resolve, ms)));

    async function run() {
      while (!cancelled) {
        for (const scene of scenes) {
          if (cancelled) return;
          setDir(scene.find((l) => l.prompt)?.prompt ?? "~");
          setLines([]);
          await wait(280);
          for (const line of scene) {
            if (cancelled) return;
            if (line.t === "cmd") {
              setTyping(true);
              setLines((prev) => [...prev, { ...line, text: "" }]);
              for (let i = 1; i <= line.text.length; i++) {
                if (cancelled) return;
                await wait(26 + Math.random() * 46);
                setLines((prev) => {
                  const next = prev.slice();
                  next[next.length - 1] = { ...line, text: line.text.slice(0, i) };
                  return next;
                });
              }
              await wait(360);
            } else {
              setTyping(false);
              await wait(150);
              setLines((prev) => [...prev, line]);
            }
          }
          setTyping(false);
          await wait(2600);
        }
      }
    }

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="hero-term-wrap relative z-10 w-full lg:pl-4">
      <div className="hero-term" aria-hidden="true">
        <div className="hero-term-bar">
          <b style={{ background: "#ff5f57" }} />
          <b style={{ background: "#febc2e" }} />
          <b style={{ background: "#28c840" }} />
          <small>hasibul@bs23 — ~/work — zsh</small>
        </div>
        <div className="hero-term-body">
          {lines.map((line, i) => (
            <p key={i} className={toneClass[line.t]}>
              {line.t === "cmd" && <Prompt dir={line.prompt ?? dir} />}
              {line.text}
              {line.t === "cmd" && typing && i === lines.length - 1 && (
                <span className="hero-term-caret" />
              )}
            </p>
          ))}
          {!typing && (
            <p className="text-[#c9d1d9]">
              <Prompt dir={dir} />
              <span className="hero-term-caret" />
            </p>
          )}
        </div>
        <div className="hero-term-foot">
          <span className="seg-branch">git:(main)</span>
          <span className="seg-ok">✔ synced</span>
          <span>node v20 · py 3.12</span>
          <span className="seg-end">Dhaka · UTC+6</span>
        </div>
      </div>
    </div>
  );
}
