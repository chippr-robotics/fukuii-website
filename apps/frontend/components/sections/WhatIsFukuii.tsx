import { FadeIn } from "@/components/ui/FadeIn";

const FACTS = [
  {
    label: "CONSENSUS MODEL",
    value: "One binary. PoW Ethash and PoS Engine API.",
  },
  {
    label: "LANGUAGE STACK",
    value: "Scala 3 LTS · Pekko Typed Actors · JVM.",
  },
  {
    label: "NETWORK COVERAGE",
    value: "ETC, ETH, Mordor, Sepolia, and growing.",
  },
] as const;

export function WhatIsFukuii() {
  return (
    <section className="section-fk" id="what">
      <div className="container-fk">
        <FadeIn>
          <div className="what-grid">
            {/* Left cell: editorial paragraphs */}
            <div
              style={{
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRight: "1px solid var(--border)",
              }}
            >
              <div>
                <span className="cell-label">About</span>
                <h2 className="cell-h2" style={{ marginBottom: "1.5rem" }}>
                  What is Fukuii?
                </h2>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                    marginBottom: "1.25rem",
                  }}
                >
                  Fukuii is the only Scala EVM execution client. Built on Scala&nbsp;3 LTS
                  and Pekko Typed Actors, it runs any EVM-compatible network from a single
                  binary. Today that means Ethereum Classic, the largest Proof-of-Work EVM,
                  alongside Ethereum mainnet and Sepolia via Engine API V1 through V4.
                  As Fukuii stabilizes, the same binary will extend to sidechains, L2 rollups,
                  and private consortium chains.
                </p>
              </div>

              <a
                href="#quickstart"
                className="cell-cta"
                style={{ marginTop: "2rem" }}
              >
                Get started with Fukuii
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Right cell: fact-boxes */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {FACTS.map((fact, i) => (
                <div
                  key={fact.label}
                  className="fact-box"
                  style={{
                    borderBottom: i < FACTS.length - 1 ? "1px solid var(--border)" : "none",
                    flex: 1,
                  }}
                >
                  <span className="cell-label">{fact.label}</span>
                  <p
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      lineHeight: 1.4,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {fact.value}
                  </p>
                </div>
              ))}

              <a
                href="https://github.com/chippr-robotics/fukuii"
                target="_blank"
                rel="noopener noreferrer"
                className="cell-cta"
              >
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
