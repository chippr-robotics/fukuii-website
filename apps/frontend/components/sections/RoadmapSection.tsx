import { FadeIn } from "@/components/ui/FadeIn";

export function RoadmapSection() {
  return (
    <section
      className="section-fk"
      id="roadmap"
      style={{ background: "var(--bg-elev)" }}
    >
      <div className="container-fk">
        {/* Architecture bridge */}
        <FadeIn>
          <div
            className="cell-fk"
            style={{
              borderLeft: "3px solid var(--accent)",
              padding: "1.25rem 2rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                flex: 1,
                minWidth: "22ch",
              }}
            >
              A clean three-layer split, chain-agnostic core, infrastructure, and pluggable
              consensus, is what makes this roadmap possible. The detail lives in the
              architecture docs.
            </p>
            <a
              href="/architecture"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--accent)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
              }}
            >
              Full architecture
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={60}>
          <div style={{ marginBottom: "3rem" }}>
            <span className="cell-label">Roadmap</span>
            <h2 className="section-title">The path to every EVM network</h2>
            <p className="section-subtitle" style={{ marginTop: "0.75rem" }}>
              The end state is one execution layer that runs any EVM chain, not only the ones it was
              compiled for. Four phases get there: per-chain configuration, concurrent multi-chain
              execution, pluggable PoA consensus for sidechains and consortium networks, and native
              L2 derivation. Documentation, operator guides, and tooling mature alongside each phase.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
