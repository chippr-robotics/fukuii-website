import { FadeIn } from "@/components/ui/FadeIn";

export function QuickStartSection() {
  return (
    <section className="section-fk" id="quickstart">
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Quick Start
            </h2>
            <p className="section-subtitle">
              Test on Mordor testnet, deploy via Cosign-signed Docker images on GHCR, or pair with
              any consensus client for Ethereum Sepolia, all from the same binary. The node
              self-reports its build version, commit hash, and SLSA provenance at{" "}
              <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.9em" }}>/buildinfo</code>.
              Requires JDK 25 LTS.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <pre className="code-block">
            <code>{`docker run ghcr.io/chippr-robotics/fukuii --network mordor`}</code>
          </pre>
        </FadeIn>

        <FadeIn delay={120}>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              marginTop: "1.25rem",
              marginBottom: "1.5rem",
            }}
          >
            From an 8 GB home node to a 64 GB+ archive node, the same binary scales from solo
            operator to institutional deployment.
          </p>
          <a
            href="/guide"
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
            Full quick start
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
