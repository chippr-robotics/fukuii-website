import { FadeIn } from "@/components/ui/FadeIn";

export function FeaturesSection() {
  return (
    <section className="section-fk" id="features" style={{ background: "var(--bg-elev)" }}>
      <div className="container-fk">

        <FadeIn>
          <div
            style={{
              border: "1px solid var(--border)",
              padding: "1.75rem 2.5rem",
            }}
          >
            <span className="cell-label">Features</span>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Built to the EVM standard.
            </h2>
            <p className="section-subtitle">
              Matches go-ethereum and Besu on wire protocols, sync strategy, and the Engine API,
              tracked against the reference implementations. Performance-sensitive paths draw from
              Nethermind and Reth, where .NET and Rust solved problems the JVM ecosystem hadn&apos;t
              prioritized. Prometheus metrics, Grafana dashboards, and health endpoints ship in the
              binary, no third-party plugin required.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
