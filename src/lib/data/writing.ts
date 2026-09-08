export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "code"; code: string }
  | { type: "pullquote"; text: string }
  | { type: "diagram"; variant: "clocks" | "delegation" }
  | {
      type: "clock";
      id: string;
      verdict: string;
      title: string;
      paragraphs: string[];
    }
  | { type: "rules"; items: { title: string; body: string }[] }
  | { type: "symptoms"; items: { term: string; description: string }[] };

export interface ArticleMeter {
  fillPercent: number;
  overPercent: number;
  leftLabel: string;
  rightLabel: string;
}

export interface Article {
  slug: string;
  tags: string[];
  category: string;
  titleLines: [string, string];
  standfirst: string;
  date: string;
  readTime: string;
  summary: string;
  meter?: ArticleMeter;
  blocks: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "four-clocks-one-stall",
    tags: ["Engineering", "Agent Runtime", "Postmortem"],
    category: "Agent Runtime",
    titleLines: ["Four Clocks,", "One Stall"],
    standfirst:
      "How a streaming LLM call hung forever with a timeout configured — then died early with the same timeout configured.",
    date: "Sep 2026",
    readTime: "9 min",
    summary:
      "A production postmortem on why four separate timeout mechanisms all declined to fire when a streaming LLM call stalled — and how the fix later killed a perfectly healthy job.",
    blocks: [
      {
        type: "paragraph",
        text: "We run a fleet of agents that read from a Redis queue, call a large language model, and write a structured verdict back. One afternoon the queue stopped draining. The pod was `Running`. CPU was flat. Memory was flat. Nothing had crashed, nothing had restarted, and nothing had fired an alert. Work simply stopped arriving at the other end.",
      },
      {
        type: "paragraph",
        text: "The cause was a single non-responding model completion parked on an `await` that no clock was bounding. Fixing it took ten minutes. Understanding *why* four separate timeout mechanisms all declined to fire took considerably longer — and produced the more interesting result: two months later the same setting, now configured, killed a perfectly healthy job.",
      },
      { type: "paragraph", text: "This is a post about the fact that \"the timeout\" is not one thing." },

      { type: "heading", text: "The hang" },
      { type: "paragraph", text: "The worker's consume loop is unremarkable:" },
      {
        type: "code",
        code: `while self._running:
    await self._slots.acquire()          # bounded concurrency
    item = await redis.blpop(queue_key, timeout=2)
    ...
    verdict = await self._executor.evaluate(item)   # parked here, forever`,
      },
      {
        type: "paragraph",
        text: "`evaluate` runs an agent: a few tool calls, then a streaming completion. The completion opened its HTTP connection, streamed a little, and then went quiet. Not closed. Not errored. Quiet.",
      },
      {
        type: "paragraph",
        text: "Because the consumer coroutine never returned, it never released its concurrency slot. With concurrency at its default of one, that pod stopped consuming entirely. Other pods kept working, so the queue drained slowly rather than not at all — precisely the failure shape that evades a \"queue depth is zero\" check and evades a human eyeballing a dashboard.",
      },
      { type: "paragraph", text: "Recovery was a manual pod restart." },

      { type: "heading", text: "Why Kubernetes didn't help" },
      {
        type: "paragraph",
        text: "This deserves its own paragraph, because the intuition that the orchestrator is a backstop is common and wrong here.",
      },
      {
        type: "paragraph",
        text: "A coroutine blocked on a socket read consumes no CPU and allocates no memory. The pod was not OOMKilled — there was nothing to kill. The liveness probe was an HTTP endpoint, and the event loop was entirely healthy: it was serving that endpoint promptly the whole time. Exactly one coroutine was stuck, and from the outside a process with one stuck coroutine is indistinguishable from a process with no work to do.",
      },
      {
        type: "pullquote",
        text: "Health checks answer \"is this process alive\". They do not answer \"is this process making progress\".",
      },

      { type: "heading", text: "What the clocks were actually watching" },
      {
        type: "paragraph",
        text: "Before the inventory, the mechanism — because two of the four clocks measure different signals on the same socket, and that difference is the entire bug.",
      },
      { type: "diagram", variant: "clocks" },

      { type: "heading", text: "The four clocks" },
      {
        type: "paragraph",
        text: "There were four candidate mechanisms that could have bounded this call. All four were present in the system. None of them fired.",
      },
      {
        type: "clock",
        id: "01",
        verdict: "Absent — and insufficient",
        title: "The provider request timeout",
        paragraphs: [
          "The obvious one: the HTTP client's timeout. Ours is the OpenAI SDK over httpx.",
          "On the Bedrock path this had been configured from the beginning, because botocore's default read timeout is 60 seconds — too short for large-context calls, so someone had already been forced to think about it and had set it to 300. The Azure path had no equivalent. The chat model was constructed without a `timeout`, the SDK default applied, and the completion could hang indefinitely.",
          "That asymmetry is the whole reason this bug existed on one provider and not the other. Nobody decided the Azure path should be unbounded; it was unbounded because nothing had forced the question.",
          "But there is a subtler problem, which matters even when you *do* set it. **httpx's read timeout is not a bound on the call.** It is a bound on the gap between socket reads, and any arriving bytes reset it. SSE streams send periodic keepalive frames — comment lines carrying no content, existing precisely to stop intermediaries dropping an idle connection. To httpx, a keepalive is bytes. A stream emitting keepalives forever while producing no content looks perfectly healthy, no matter how large the timeout.",
        ],
      },
      {
        type: "clock",
        id: "02",
        verdict: "Unset — default governing",
        title: "The stream chunk timeout",
        paragraphs: [
          "`langchain_openai` has a second, separate knob: `stream_chunk_timeout`. It measures something genuinely different — the silence between *parsed content chunks*. Keepalives do not reset it, because keepalives are not content.",
          "This is the clock that actually corresponds to the question you care about: has the model produced anything in a while?",
          "Nobody had set it. That felt harmless at the time. It was not.",
        ],
      },
      {
        type: "clock",
        id: "03",
        verdict: "Missing entirely",
        title: "A wall clock on the unit of work",
        paragraphs: [
          "Even with a correct per-call bound, an agent turn is many calls: tool invocations, sub-agent runs, retries, a final synthesis. A bound on each call is not a bound on the turn.",
          "There was no `asyncio.wait_for` around the unit of work. This is the clock that guarantees a concurrency slot always comes back regardless of what went wrong inside — and it was missing.",
        ],
      },
      {
        type: "clock",
        id: "04",
        verdict: "Not applicable here",
        title: "The job envelope",
        paragraphs: [
          "The runtime does have a wall-clock budget wrapping a job end to end. It applies to jobs submitted over HTTP through the job lifecycle.",
          "Worker-mode runs are not lifecycle jobs. They never entered that envelope. The one clock that would have caught this categorically did not apply to the code path where it happened. There was also a stream watchdog in the streaming adapter, inert at its default of zero.",
        ],
      },
      {
        type: "paragraph",
        text: "Four mechanisms: one absent and structurally insufficient, one unset, one missing, one inapplicable. The gap was not a bug in any of them. It was the space between them, which no single owner was looking at.",
      },

      { type: "heading", text: "The fix, and the second incident" },
      {
        type: "paragraph",
        text: "We set the request timeout on the Azure path to 300 seconds, matching Bedrock, with the SDK's own retry (`max_retries=2`) behind it — a timeout is only a fail-fast guarantee if something then retries. We wrapped each queue item in `asyncio.wait_for` with a generous per-item budget, so the concurrency slot is guaranteed to return. And we moved the slot acquisition *before* the `BLPOP`, so a pod only claims what it can actually start and the rest of the queue stays available to other pods.",
      },
      { type: "paragraph", text: "Two months later, a large case-review job died outright with `StreamChunkTimeoutError`." },
      {
        type: "paragraph",
        text: "The prompt was around 344,000 tokens, running on a reasoning model. Reasoning models go quiet: they spend real wall-clock time on internal reasoning before emitting visible content. This one went silent for over two minutes mid-stream, which for that workload is entirely normal behavior.",
      },
      { type: "paragraph", text: "The request timeout was 300 seconds and had plenty of headroom. The job died anyway, at 120." },
      {
        type: "pullquote",
        text: "We configured the loose clock and left the tight clock at a value nobody had chosen. The tight clock wins.",
      },
      {
        type: "paragraph",
        text: "This is the part worth carrying away. Setting one timeout and not the other does not leave the other disabled. It leaves it at a default picked by a library author who had no idea what your prompts look like — and if that default is tighter than the one you *did* set, your configured value is decorative.",
      },

      { type: "heading", text: "What we actually changed" },
      { type: "paragraph", text: "One setting now drives both:" },
      {
        type: "code",
        code: `def azure_timeout_kwargs(settings) -> dict:
    timeout = getattr(settings, "llm_request_timeout_seconds", 0) or 0
    if timeout <= 0:
        return {}
    return {
        "timeout": float(timeout),              # whole call; reset by any bytes
        "max_retries": 2,                       # a timeout needs a retry behind it
        "stream_chunk_timeout": float(timeout), # silence between content chunks
    }`,
      },
      {
        type: "paragraph",
        text: "The reasoning: \"how long do we tolerate silence from the model\" is *one* operator decision, not two. Two environment variables would have let them drift apart again, and the failure when they drift is silent in both directions — too loose and you hang, too tight and you kill healthy work. Neither shows up as an error in the component that owns the setting.",
      },
      { type: "paragraph", text: "We added a single retry at the call site, capped deliberately at one:" },
      {
        type: "code",
        code: `except TimeoutError as exc:
    # Streaming can't resume mid-stream: a retry re-sends the entire
    # prompt. On a 344k-token prompt that is expensive. One retry is
    # insurance against a one-off stall, not a substitute for a
    # correct timeout.`,
      },
      {
        type: "paragraph",
        text: "Two details in that catch are worth noting. `StreamChunkTimeoutError` subclasses the builtin `TimeoutError` by design, so callers can catch it without importing a private module path — a small piece of library courtesy that makes the retry robust to the library reorganizing itself. And a deliberate job cancellation surfaces as `asyncio.CancelledError`, not `TimeoutError`, so it passes through the retry loop untouched. Retrying work a human just cancelled is its own small outage.",
      },

      { type: "heading", text: "Rules we now apply" },
      {
        type: "rules",
        items: [
          {
            title: "Every await crossing a network boundary needs a bound you chose",
            body: "Not a bound that exists — one you picked, for a reason you can state.",
          },
          {
            title: "Know what each clock measures",
            body: "\"Timeout\" covers at least four distinct quantities: time between socket reads, time between semantic units of content, time for one call, and time for one unit of work. They are not interchangeable, and the tightest applicable one governs.",
          },
          {
            title: "An unset timeout is not \"no timeout\"",
            body: "It is a default chosen by someone who has never seen your workload. Enumerate the defaults you are inheriting.",
          },
          {
            title: "Liveness is not progress",
            body: "Keepalives defeat inter-byte timeouts for the same reason a `Running` pod defeats a liveness probe: both prove the machinery is turning, not that the work is advancing. Alert on work age and queue drain rate, not on process health.",
          },
          {
            title: "Bound the unit of work, not just the call",
            body: "The per-call timeout fails a stalled completion fast. The per-item wall clock is what guarantees the resource — the slot, the connection, the consumer — comes back no matter what happened inside.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "The hang and the false kill were the same misunderstanding, run in opposite directions. Both came from treating a stack of independent clocks as though it were one.",
      },
    ],
  },
  {
    slug: "agents-pay-to-talk",
    tags: ["Engineering", "Multi-Agent Systems", "Root Cause"],
    category: "Multi-Agent Systems",
    titleLines: ["Agents Pay", "to Talk"],
    standfirst:
      "A multi-agent pipeline failed on large inputs and succeeded on small ones. The error was a JSON parse failure. The cause was `max_tokens`.",
    date: "Sep 2026",
    readTime: "8 min",
    summary:
      "A root-cause writeup on why stateless sub-agent delegation turns a shared context block into re-generated output tokens — and why that silently truncates at the platform's max_tokens ceiling.",
    meter: {
      fillPercent: 62,
      overPercent: 38,
      leftLabel: "context block transcribed as output",
      rightLabel: "cut at 4096",
    },
    blocks: [
      {
        type: "paragraph",
        text: "Our incident-investigation pipeline is a small hierarchy: an orchestrator agent collects context, then delegates to specialist sub-agents — one that investigates, one that validates hypotheses, one that writes the final decision. It worked. Then it started failing, but only on incidents with more than one or two linked alerts.",
      },
      {
        type: "paragraph",
        text: "The exception was `IncidentVerdictParseError`: the pipeline reached the end, produced a report, and the report could not be parsed into a verdict. Naturally we went looking at the parser, then at the prompt, then at the model's JSON habits.",
      },
      {
        type: "paragraph",
        text: "The cause was none of those. It was a platform-wide `LLM_MAX_TOKENS=4096`, and the reason it bit is the thing worth writing down:",
      },
      {
        type: "pullquote",
        text: "In a system with stateless sub-agent delegation, the handoff between agents is generated output. Your output cap is not just a limit on the answer — it is a limit on how much one agent can say to another.",
      },

      { type: "heading", text: "Stateless delegation" },
      { type: "paragraph", text: "The delegation primitive looks like a function call. It is not one." },
      {
        type: "paragraph",
        text: "When the orchestrator hands work to a specialist, it does so by calling a `task()` tool. In `deepagents`, as in most agent frameworks with a sub-agent abstraction, that delegation is **stateless**: the sub-agent starts on a fresh thread, with a fresh context window. It does not inherit the orchestrator's messages. It does not inherit its tool results. It gets exactly one thing — the arguments to `task()`.",
      },
      { type: "diagram", variant: "delegation" },
      {
        type: "paragraph",
        text: "So if the specialist needs the collected context — linked alerts, deduplicated entities, enrichment results, prior triage hypotheses — the orchestrator has to *put it in the arguments*. Which means the model has to **write it out, token by token, as an escaped JSON string**.",
      },
      { type: "paragraph", text: "That transcription is generated output. It is billed as output. And it is capped by `max_tokens`." },
      {
        type: "paragraph",
        text: "This is the part that doesn't feel true until you say it out loud. The context block already exists. It's sitting right there in the orchestrator's context window, having arrived as tool results. Moving it three inches sideways into a sub-agent costs a full re-generation of every token in it — and counts against a ceiling that was set with \"how long should an answer be?\" in mind.",
      },

      { type: "heading", text: "Why it looked like flakiness" },
      {
        type: "paragraph",
        text: "Our collected-context block grows with the number of linked alerts. One alert: comfortably under the cap. Two alerts: reliably over it.",
      },
      {
        type: "paragraph",
        text: "When a generation hits `max_tokens`, it does not raise. It stops. The model was mid-way through an escaped JSON string argument, and the output ends there — a truncated tool call, a specialist that receives a malformed or half-populated payload, and a pipeline that keeps going with degraded input.",
      },
      {
        type: "paragraph",
        text: "The failure then surfaces at the *end*, in a different module, as a parse error on the final verdict. There is no token error anywhere in the logs, because nothing errored. The only honest signal was a `finish_reason` we weren't looking at.",
      },
      { type: "paragraph", text: "Every property of this bug pointed away from the cause:" },
      {
        type: "symptoms",
        items: [
          { term: "Size-dependent", description: "so it looked like a context-window problem" },
          { term: "Non-deterministic", description: "so it looked like model flakiness" },
          { term: "Parse failure", description: "so it looked like a prompt or schema problem" },
          { term: "Silent", description: "so it looked like nothing at all, until the very last step" },
        ],
      },
      {
        type: "paragraph",
        text: "We also had a retry loop — two orchestrator attempts, the second on a fresh thread. That made things worse in the diagnostic sense: retries convert a structural failure into an intermittent one. The context block was still too big on attempt two. All the retry bought was a second identical truncation and a stronger impression that the model was just being unreliable.",
      },

      { type: "heading", text: "The red herring" },
      {
        type: "paragraph",
        text: "The most interesting wrong turn is worth preserving, because it was *extremely* plausible.",
      },
      {
        type: "paragraph",
        text: "`langchain_aws`'s `ChatBedrock` defaults `beta_use_converse_api=False` for every non-Nova model. That means a `bedrock:` model string silently resolves to Bedrock's older `InvokeModel` API rather than the modern, actively-maintained `Converse` API. A silent fallback to a legacy API, on exactly the calls that are truncating, is a *very* good suspect.",
      },
      {
        type: "paragraph",
        text: "It was not the cause. The legacy path honored the requested `max_tokens` perfectly well. It just happened to be requested as exactly 4096 by a platform-wide setting.",
      },
      {
        type: "paragraph",
        text: "We turned Converse on anyway, because it's the right API to be on. But it's flagged in the code as explicitly *not* the fix, and that comment has already earned its keep — a change that lands next to a real bug will get credited with fixing it forever unless somebody writes down that it didn't.",
      },

      { type: "heading", text: "The second trap" },
      {
        type: "paragraph",
        text: "While fixing this we found a related asymmetry that will catch anyone building on the same framework.",
      },
      {
        type: "paragraph",
        text: "Sub-agents accept a model as either a string or a resolved model instance. Those two paths do not behave the same:",
      },
      {
        type: "paragraph",
        text: "Pass a **string**, and the framework calls its own internal `resolve_model()` — which applies **no `max_tokens` at all**. Pass a **resolved instance**, and you get whatever you configured.",
      },
      {
        type: "paragraph",
        text: "So the orchestrator, constructed through the application's own factory, had a max-token setting. The sub-agents, constructed from a bare model string, silently had a different one. Same config file, same deployment, two different generation ceilings, depending on the type of one argument.",
      },
      { type: "paragraph", text: "The fix is to resolve the model to an instance once, up front, and pass that everywhere:" },
      {
        type: "code",
        code: `subagent_model = _resolve_model_with_max_tokens(
    subagent_model_str,
    settings,
    use_converse_api=True,
    max_tokens_override=_INCIDENT_MAX_TOKENS,   # 32768, not the platform 4096
)`,
      },

      { type: "heading", text: "Why not just raise the global" },
      {
        type: "paragraph",
        text: "The obvious fix is to raise `LLM_MAX_TOKENS` platform-wide and move on. We didn't, and the reason generalizes.",
      },
      {
        type: "paragraph",
        text: "That setting is shared by every domain in the platform — threat intelligence, detection, triage, incident response. Most of those calls produce short outputs and are nowhere near the ceiling. Raising the global would have changed nothing about their behavior except to remove a guardrail, while raising the worst-case cost and latency envelope for all of them.",
      },
      {
        type: "paragraph",
        text: "`max_tokens` is not really a correctness setting. It is a **budget per call shape**, and different call shapes have genuinely different budgets. A classification call that emits a verdict and a confidence score wants a low ceiling — it's a cheap sanity bound on a runaway generation. An orchestrator transcribing a context block into a delegation argument wants a high one. Those are not the same number, and there is no single value that serves both.",
      },
      { type: "paragraph", text: "So the override is per-call-site and named for its reason:" },
      {
        type: "code",
        code: `_INCIDENT_MAX_TOKENS = 32768   # orchestrator delegation + decision-writer JSON
_CASE_MAX_TOKENS     = 32768   # final synthesis: 16-section report in one response`,
      },
      {
        type: "paragraph",
        text: "The second constant is there because this recurred. Our case-review orchestrator emits, in a single response, a case description plus an entity graph, a timeline, correlations, attack chains, severity and scope, four recommendation arrays, and a sixteen-section report. It is the largest single-turn generation in the codebase, and it starved under the same shared 4096 cap in exactly the same way — short descriptions, thin report sections, and occasionally an unparseable cut-off response.",
      },
      { type: "paragraph", text: "Same root cause, different subsystem, six months apart. That's the signature of a constraint living at the wrong altitude." },

      { type: "heading", text: "One more, while we were in there" },
      {
        type: "paragraph",
        text: "The decision-writer sub-agent now gets its own model instance at `temperature=0.0`, separate from the exploratory sub-agents.",
      },
      {
        type: "paragraph",
        text: "It emits a verdict and a confidence classification, not an investigation. Re-evaluating the same incident and getting a different verdict because of sampling noise is not creativity, it's a bug that a human eventually has to arbitrate. The investigating agents keep a normal temperature, because exploration genuinely benefits from it.",
      },
      { type: "paragraph", text: "Temperature, like `max_tokens`, is a per-call-shape decision that a platform-wide default cannot make correctly." },

      { type: "heading", text: "What to take away" },
      {
        type: "rules",
        items: [
          {
            title: "Find out what your delegation primitive actually copies",
            body: "If sub-agent handoff is stateless, every byte of shared context crosses the boundary as regenerated output tokens. Read your framework's delegation implementation before you size any budget.",
          },
          {
            title: "A truncated generation is not an error",
            body: "It's a `finish_reason`. If nothing in your pipeline inspects it — or `stop_reason`, depending on the provider — you will experience every output-cap failure as a mysterious downstream parse error. Log it. Assert on it at parse boundaries.",
          },
          {
            title: "Retries hide structural failures",
            body: "A retry helps with transient faults and actively obscures deterministic ones. When a retry loop turns \"always fails on this input\" into \"usually fails on this input\", it has cost you the most useful diagnostic property the bug had.",
          },
          {
            title: "One global generation setting is one setting too few",
            body: "`max_tokens` and `temperature` are properties of a *call shape* — classification, exploration, transcription, synthesis — not of a platform. A single shared value silently mis-serves both extremes, and it fails quietly at the top end.",
          },
          {
            title: "Write down what didn't fix it",
            body: "The Converse API change shipped in the same commit as the real fix and is permanently labeled as unrelated. Without that note, the next engineer to see truncation would start from a false lead we already paid for.",
          },
        ],
      },
    ],
  },
];
