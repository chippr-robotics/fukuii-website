"use client";

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
          <div style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
            <span className="cell-label">Stack</span>
            <h2 className="section-title" style={{ marginBottom: "0.875rem" }}>
              Built on what already works.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                marginBottom: "0.75rem",
              }}
            >
              A current stack, on purpose. Scala 3.3 LTS, JDK 25 LTS, RocksDB 10.x. The runtime
              is maintained to the latest stable across the board, because the real risk to a
              minority-chain client isn&apos;t a missing feature. It&apos;s abandonment.
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-subtle)",
                lineHeight: 1.65,
              }}
            >
              Every dependency below ships in a signed CycloneDX SBOM with each release.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
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

        <FadeIn delay={160}>
          <div style={{ marginTop: "1.25rem" }}>
            <a
              href="https://fukuii.com/"
              target="_blank"
              rel="noopener noreferrer"
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
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              Full dependency manifest, generated from our CycloneDX SBOM
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
