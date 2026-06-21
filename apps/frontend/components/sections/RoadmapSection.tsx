import { FadeIn } from "@/components/ui/FadeIn";

type PhaseStatus = "active" | "planned";

interface Phase {
  number: string;
  name: string;
  codename: string;
  status: PhaseStatus;
}

const PHASES: Phase[] = [
  {
    number: "1",
    name: "fukuii-env",
    codename: "In Progress",
    status: "active",
  },
  {
    number: "2",
    name: "Multi-Instance Runtime",
    codename: "Planned",
    status: "planned",
  },
  {
    number: "3",
    name: "Checkpoint Consensus (Orbita PoA)",
    codename: "Planned",
    status: "planned",
  },
  {
    number: "4",
    name: "OP-Style Derivation",
    codename: "Planned",
    status: "planned",
  },
];

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
              consensus, is what makes the Orbita roadmap possible. The detail lives in the
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
            <h2 className="section-title">Roadmap — The Orbita Vision</h2>
            <p className="section-subtitle" style={{ marginTop: "0.75rem" }}>
              The end state is an execution layer that runs any EVM chain, not just the ones it was
              compiled for. Four phases get there: environment abstraction, concurrent multi-chain
              execution, pluggable PoA consensus, and native L2 derivation.
            </p>
          </div>
        </FadeIn>

        {/* Phase rows — condensed, name + status only */}
        <div style={{ border: "1px solid var(--border)" }}>
          {PHASES.map((phase, i) => (
            <FadeIn key={phase.number} delay={i * 80 + 120}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  alignItems: "center",
                  gap: "1.5rem",
                  padding: "1.25rem 1.75rem",
                  borderTop: i === 0 ? "none" : "1px solid var(--border)",
                  background: phase.status === "active" ? "var(--accent-soft)" : "transparent",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: phase.status === "active" ? "var(--accent)" : "var(--text-subtle)",
                  }}
                >
                  Phase {phase.number}
                </span>
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {phase.name}
                </h3>
                <span
                  className={`badge-fk${phase.status === "active" ? " badge-green" : ""}`}
                >
                  {phase.codename}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
