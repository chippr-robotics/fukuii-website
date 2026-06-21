import { FadeIn } from "@/components/ui/FadeIn";

interface StackRow {
  readonly component: string;
  readonly what: string;
  readonly why: string;
}

const STACK_ROWS: readonly StackRow[] = [
  {
    component: "Scala 3.3 LTS · JDK 25",
    what: "Language and runtime",
    why: "A current, maintained foundation, not a frozen one.",
  },
  {
    component: "Apache Pekko",
    what: "Actor runtime",
    why: "Open Apache license; no commercial subscription, no vendor lock.",
  },
  {
    component: "RocksDB",
    what: "Storage engine",
    why: "The same proven embedded store the EVM client world relies on.",
  },
  {
    component: "Cats Effect 3 · fs2",
    what: "Concurrency",
    why: "Pure-functional effects; correctness extended into the runtime.",
  },
  {
    component: "Bouncy Castle · BLS12-381 · KZG",
    what: "Cryptography",
    why: "Audited primitives shared with the wider Ethereum ecosystem.",
  },
  {
    component: "Netty · Micrometer · Prometheus",
    what: "Networking and observability",
    why: "The JVM operational toolchain, the part that matters at 3 a.m.",
  },
] as const;

export function StackSection() {
  return (
    <section className="section-fk" id="stack">
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="cell-label">Stack</span>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Built on what already works.
            </h2>
            <p className="section-subtitle">
              A current stack, on purpose. Scala 3.3 LTS, JDK 25 LTS, RocksDB 10.x, maintained to
              the latest stable across the board. Production infrastructure runs on supported
              foundations, not frozen ones. This is what active engineering looks like in a
              dependency manifest.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div
            style={{
              border: "1px solid var(--border)",
              overflow: "hidden",
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1.5fr",
                background: "var(--bg-card)",
                borderBottom: "1px solid var(--border)",
                padding: "0.625rem 1.25rem",
              }}
            >
              {["Component", "What it is", "Why it matters"].map((col) => (
                <span
                  key={col}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--text-subtle)",
                  }}
                >
                  {col}
                </span>
              ))}
            </div>

            {/* Data rows */}
            {STACK_ROWS.map((row, i) => (
              <div
                key={row.component}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1.5fr",
                  padding: "0.875rem 1.25rem",
                  borderBottom: i < STACK_ROWS.length - 1 ? "1px solid var(--border)" : "none",
                  background: i % 2 === 0 ? "transparent" : "var(--bg-card)",
                  gap: "0.75rem",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    lineHeight: 1.5,
                  }}
                >
                  {row.component}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {row.what}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {row.why}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
