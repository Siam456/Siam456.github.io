/** Timing diagram for the "Four Clocks, One Stall" article: keepalive bytes keep resetting the
 * request timeout so it never fires, while the parsed-content-chunk timeout counts through 170s
 * of model silence and fires at 120s. */
export function ClockDiagram() {
  return (
    <figure className="my-10 overflow-x-auto rounded-md border border-line bg-surface p-6">
      <svg
        viewBox="0 0 900 400"
        role="img"
        className="block h-auto min-w-[40rem] w-full text-ink"
        aria-label="Timing diagram: keepalive bytes keep resetting the request timeout so it never fires, while the parsed-content-chunk timeout counts through 170 seconds of model silence and fires at 120 seconds."
      >
        <defs>
          <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <polygon points="0,1 10,5 0,9" fill="currentColor" />
          </marker>
        </defs>

        <text x="0" y="60" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="700" fill="currentColor">BYTES ON SOCKET</text>
        <text x="0" y="76" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.6">content + keepalives</text>
        <line x1="0" y1="92" x2="880" y2="92" stroke="currentColor" strokeWidth="1" opacity="0.22" />

        <rect x="90" y="72" width="51" height="20" fill="#c77e0c" opacity="0.85" />
        <rect x="577" y="72" width="283" height="20" fill="#c77e0c" opacity="0.85" />
        <g stroke="#3b8ca6" strokeWidth="2.5">
          <line x1="167" y1="78" x2="167" y2="92" /><line x1="206" y1="78" x2="206" y2="92" />
          <line x1="244" y1="78" x2="244" y2="92" /><line x1="283" y1="78" x2="283" y2="92" />
          <line x1="321" y1="78" x2="321" y2="92" /><line x1="360" y1="78" x2="360" y2="92" />
          <line x1="398" y1="78" x2="398" y2="92" /><line x1="437" y1="78" x2="437" y2="92" />
          <line x1="475" y1="78" x2="475" y2="92" /><line x1="514" y1="78" x2="514" y2="92" />
          <line x1="552" y1="78" x2="552" y2="92" />
        </g>
        <text x="360" y="60" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fill="#3b8ca6" fontWeight="700">SSE keepalives every ~15s</text>

        <text x="0" y="150" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="700" fill="currentColor">PARSED CONTENT</text>
        <text x="0" y="166" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.6">what the model emitted</text>
        <line x1="0" y1="182" x2="880" y2="182" stroke="currentColor" strokeWidth="1" opacity="0.22" />
        <rect x="90" y="162" width="51" height="20" fill="#c77e0c" opacity="0.85" />
        <rect x="577" y="162" width="283" height="20" fill="#c77e0c" opacity="0.85" />
        <line x1="141" y1="172" x2="577" y2="172" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.45" />
        <text x="359" y="153" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="700" fill="currentColor" opacity="0.75">170s of silence — model reasoning</text>

        <text x="0" y="240" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="700" fill="currentColor">CLOCK 1</text>
        <text x="0" y="256" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.6">request timeout 300s</text>
        <g stroke="#3b8ca6" strokeWidth="7" opacity="0.75">
          <line x1="143" y1="245" x2="165" y2="245" /><line x1="169" y1="245" x2="204" y2="245" />
          <line x1="208" y1="245" x2="242" y2="245" /><line x1="246" y1="245" x2="281" y2="245" />
          <line x1="285" y1="245" x2="319" y2="245" /><line x1="323" y1="245" x2="358" y2="245" />
          <line x1="362" y1="245" x2="396" y2="245" /><line x1="400" y1="245" x2="435" y2="245" />
          <line x1="439" y1="245" x2="473" y2="245" /><line x1="477" y1="245" x2="512" y2="245" />
          <line x1="516" y1="245" x2="550" y2="245" /><line x1="554" y1="245" x2="575" y2="245" />
        </g>
        <text x="620" y="249" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#3b8ca6" fontWeight="700">reset by every keepalive — never exceeds 15s</text>

        <text x="0" y="308" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="700" fill="currentColor">CLOCK 2</text>
        <text x="0" y="324" fontFamily="JetBrains Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.6">chunk timeout, unset</text>
        <rect x="141" y="306" width="308" height="9" fill="#bc463d" opacity="0.85" />
        <line x1="449" y1="292" x2="449" y2="330" stroke="#bc463d" strokeWidth="2.5" />
        <text x="459" y="304" fontFamily="JetBrains Mono, monospace" fontSize="11.5" fontWeight="700" fill="#bc463d">FIRES at 120s — library default</text>
        <text x="459" y="322" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#bc463d" opacity="0.85">job killed 70s before content resumes</text>

        <line x1="90" y1="362" x2="880" y2="362" stroke="currentColor" strokeWidth="1.5" opacity="0.5" markerEnd="url(#ar)" />
        <g fontFamily="JetBrains Mono, monospace" fontSize="10.5" fill="currentColor" opacity="0.6" textAnchor="middle">
          <text x="90" y="380">0s</text>
          <text x="347" y="380">100s</text>
          <text x="603" y="380">200s</text>
          <text x="860" y="380">300s</text>
        </g>
      </svg>
      <figcaption className="mt-5 max-w-3xl border-t border-line pt-4 font-mono text-xs leading-relaxed text-muted">
        One stalled completion, two clocks, opposite failures. httpx&rsquo;s read timeout bounds the
        gap between <em>socket reads</em>, so every SSE keepalive resets it and a 300s budget never
        gets past 15s of elapsed count. <code>stream_chunk_timeout</code> bounds the gap between{" "}
        <em>parsed content chunks</em>, which keepalives do not reset — so it correctly saw the
        silence, and killed the job at a 120s default nobody had chosen.
      </figcaption>
    </figure>
  );
}
