import { FadeIn } from "@/components/ui/FadeIn";

const HIGHLIGHTS = [
  "Engine API V1–V4",
  "SNAP sync",
  "ETH68 / ETH69 wire protocols",
  "Built-in MCP server",
  "Prometheus + Grafana out of the box",
] as const;

export function FeaturesSection() {
  return (
    <section className="section-fk" id="features" style={{ background: "var(--bg-elev)" }}>
      <div className="container-fk">

        {/* Section header — bordered row above the highlights */}
        <FadeIn>
          <div
            style={{
              border: "1px solid var(--border)",
              borderBottom: "none",
              padding: "1.75rem 2.5rem",
            }}
          >
            <span className="cell-label">Features</span>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Built to the EVM standard.
            </h2>
            <p className="section-subtitle">
              Feature-complete against go-ethereum and Besu: every wire protocol, sync strategy, and
              consensus mode tracked against the reference implementations. Performance-sensitive paths
              draw from Nethermind and Reth where Go and Rust solved problems the JVM ecosystem
              hadn&apos;t prioritized. Prometheus metrics, Grafana dashboards, and health endpoints ship
              in the binary, no third-party plugin required.
            </p>
          </div>
        </FadeIn>

        {/* Highlights strip — 5 cells */}
        <FadeIn delay={80}>
          <div
            style={{
              border: "1px solid var(--border)",
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
            }}
          >
            {HIGHLIGHTS.map((item, i) => (
              <div
                key={item}
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRight: i < HIGHLIGHTS.length - 1 ? "1px solid var(--border)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text)",
                    lineHeight: 1.45,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div style={{ marginTop: "1.5rem" }}>
            <a
              href="/features"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--accent)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
              }}
            >
              Full capability matrix
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
