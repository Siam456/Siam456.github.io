/** Timing/handoff diagram for "Agents Pay to Talk": the orchestrator must re-emit its collected
 * context as an escaped string argument to task(), billing it as output tokens and truncating it
 * at the max_tokens ceiling before the specialist ever sees it. */
export function DelegationDiagram() {
  return (
    <figure className="my-10 overflow-x-auto rounded-md border border-line bg-surface p-6">
      <svg
        viewBox="0 0 920 360"
        role="img"
        className="block h-auto min-w-[41rem] w-full text-ink"
        aria-label="Diagram: the orchestrator holds a collected-context block as input tokens, but must re-generate it verbatim as an escaped string argument to the task tool, so the handoff is billed as output and truncates at the max_tokens ceiling."
      >
        <defs>
          <marker id="a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <polygon points="0,1 10,5 0,9" fill="currentColor" />
          </marker>
          <marker id="a2cut" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <polygon points="0,1 10,5 0,9" fill="#b02a5b" />
          </marker>
        </defs>

        <rect x="1" y="34" width="250" height="150" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
        <text x="16" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="12.5" fontWeight="600" fill="currentColor">ORCHESTRATOR</text>
        <text x="16" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.6">context window</text>
        <rect x="16" y="94" width="219" height="30" fill="#2c6e69" opacity="0.2" stroke="#2c6e69" strokeWidth="1" />
        <text x="26" y="113" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="currentColor">collected context (tool results)</text>
        <text x="16" y="146" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="#2c6e69" fontWeight="600">already here — as INPUT tokens</text>
        <text x="16" y="166" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.55">cheap, already paid for</text>

        <line x1="255" y1="109" x2="330" y2="109" stroke="currentColor" strokeWidth="1.5" opacity="0.6" markerEnd="url(#a2)" />
        <text x="292" y="98" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.65">must re-emit</text>

        <rect x="334" y="34" width="290" height="150" fill="none" stroke="#b02a5b" strokeWidth="1.5" />
        <text x="349" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="12.5" fontWeight="600" fill="#b02a5b">task() TOOL CALL</text>
        <text x="349" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.6">escaped string argument</text>

        <rect x="349" y="94" width="260" height="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <rect x="349" y="94" width="150" height="30" fill="#2c6e69" opacity="0.55" />
        <rect x="499" y="94" width="110" height="30" fill="#b02a5b" opacity="0.28" />
        <line x1="499" y1="86" x2="499" y2="132" stroke="#b02a5b" strokeWidth="2.5" />
        <text x="499" y="146" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fontWeight="600" fill="#b02a5b">max_tokens 4096</text>
        <text x="349" y="166" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="#b02a5b" fontWeight="600">re-generated — as OUTPUT tokens</text>

        <line x1="628" y1="109" x2="700" y2="109" stroke="#b02a5b" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#a2cut)" />
        <text x="664" y="98" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="#b02a5b">truncated</text>

        <rect x="704" y="34" width="214" height="150" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
        <text x="719" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="12.5" fontWeight="600" fill="currentColor">SPECIALIST</text>
        <text x="719" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.6">fresh context window</text>
        <rect x="719" y="94" width="184" height="30" fill="#b02a5b" opacity="0.18" stroke="#b02a5b" strokeWidth="1" strokeDasharray="4 3" />
        <text x="729" y="113" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="currentColor">half the context block</text>
        <text x="719" y="146" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.6">inherits nothing else:</text>
        <text x="719" y="164" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.6">no messages, no tool results</text>

        <line x1="0" y1="232" x2="918" y2="232" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <text x="0" y="262" fontFamily="IBM Plex Mono, monospace" fontSize="11.5" fontWeight="600" fill="currentColor" opacity="0.75">WHERE IT SURFACES</text>

        <g fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="currentColor">
          <rect x="0" y="278" width="196" height="34" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <text x="14" y="300" opacity="0.7">generation stops</text>
          <line x1="200" y1="295" x2="232" y2="295" stroke="currentColor" strokeWidth="1.2" opacity="0.45" markerEnd="url(#a2)" />

          <rect x="238" y="278" width="196" height="34" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <text x="252" y="300" opacity="0.7">specialist degrades</text>
          <line x1="438" y1="295" x2="470" y2="295" stroke="currentColor" strokeWidth="1.2" opacity="0.45" markerEnd="url(#a2)" />

          <rect x="476" y="278" width="196" height="34" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <text x="490" y="300" opacity="0.7">report is thin</text>
          <line x1="676" y1="295" x2="708" y2="295" stroke="#b02a5b" strokeWidth="1.2" markerEnd="url(#a2cut)" />

          <rect x="714" y="278" width="204" height="34" fill="none" stroke="#b02a5b" strokeWidth="1.5" />
          <text x="728" y="300" fill="#b02a5b" fontWeight="600">VerdictParseError</text>
        </g>
        <text x="0" y="338" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.55">
          no exception is raised at any step until the last one — the cap sets finish_reason, it does not error
        </text>
      </svg>
      <figcaption className="mt-5 max-w-3xl border-t border-line pt-4 font-mono text-xs leading-relaxed text-muted">
        The context block already exists in the orchestrator&rsquo;s window as input tokens. Because
        delegation is stateless, moving it to the specialist costs a full re-generation of every
        token — billed as output, and capped by <code>max_tokens</code>. When the cap cuts the
        escaped string mid-write, nothing raises; the failure travels three more stages before
        surfacing as a parse error in an unrelated module.
      </figcaption>
    </figure>
  );
}
