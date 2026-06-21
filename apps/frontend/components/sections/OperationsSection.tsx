import { FadeIn } from "@/components/ui/FadeIn";

interface CardData {
  title: string;
  lead: string;
  items: readonly string[];
  icon: React.ReactNode;
}

const CARDS: CardData[] = [
  {
    title: "Observability built in",
    lead: "Know what the node is doing.",
    items: [
      "Prometheus metrics + Grafana dashboards",
      "/health · /readiness · /buildinfo endpoints",
      "ResilientRollingFileAppender for disk pressure",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Predictable under load",
    lead: "Sync never starves the RPC.",
    items: [
      "3 isolated Pekko dispatchers (sync, rpc, general)",
      "Bootstrap checkpoints skip startup peer-wait",
      "Log rotation survives disk pressure",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Verifiable supply chain",
    lead: "Verify what you deploy.",
    items: [
      "Cosign-signed container images on GHCR",
      "SLSA Level 3 build provenance",
      "CycloneDX SBOM on every release",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
] as const;

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", marginTop: "0.875rem" }}>
      {items.map((item) => (
        <div key={item} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
          <span
            style={{
              color: "var(--accent)",
              flexShrink: 0,
              marginTop: "0.05em",
              fontWeight: 700,
              fontSize: "0.875rem",
              lineHeight: 1.5,
            }}
            aria-hidden="true"
          >
            ✓
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              lineHeight: 1.55,
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export function OperationsSection() {
  return (
    <section className="section-fk" id="operations" style={{ background: "var(--bg-elev)" }}>
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "3rem" }}>
            <span className="cell-label">Operations</span>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Designed for the people who run it.
            </h2>
            <p className="section-subtitle">
              Three isolated Pekko dispatchers ensure sync pressure never starves the RPC: the node
              stays responsive under full-load SNAP sync. Cosign-signed images, SLSA Level 3
              provenance, and a CycloneDX SBOM on every release mean you know exactly what you
              deployed and can prove it to anyone who asks. Prometheus metrics, Grafana dashboards,
              and liveness endpoints are built in, no sidecar, no plugin, no configuration required.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
            marginBottom: "1px",
            border: "1px solid var(--border)",
          }}
        >
          {CARDS.map((card, i) => (
            <FadeIn key={card.title} delay={i * 100}>
              <div className="cell-fk" style={{ padding: "1.75rem", height: "100%", border: "none", borderRight: i < CARDS.length - 1 ? "1px solid var(--border)" : undefined }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "var(--radius-sm)",
                    background: "var(--accent-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: "1.125rem",
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: "0.375rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.55,
                  }}
                >
                  {card.lead}
                </p>
                <CheckList items={card.items} />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div
            className="cell-fk"
            style={{
              borderLeft: "3px solid var(--accent)",
              padding: "1.25rem 2rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
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
              Runbooks, alerting guidance, and upgrade procedures live in the operator documentation.
            </p>
            <a
              href="https://docs.fukuii.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--accent)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Operator docs →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
