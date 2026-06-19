import { FadeIn } from "@/components/ui/FadeIn";

const CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "JVM/Scala 3 Diversity",
    body: "Independent dependency tree from Go/Rust clients. Satisfies risk frameworks requiring multiple independent client implementations across different language ecosystems.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "No Network Lock-in",
    body: "One binary: ETC mainnet, Ethereum mainnet, testnets, custom chains. Eliminate the operational overhead of maintaining separate clients for each network you support.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Verifiable Supply Chain",
    body: "SLSA Level 3 provenance, CycloneDX SBOM, Cosign keyless signatures. SOC2 audit and institutional procurement ready. Every release is reproducible and tamper-evident.",
  },
] as const;

export function WhatIsFukuii() {
  return (
    <section className="section-fk" id="why">
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "3rem" }}>
            <h2 className="section-title">Why Fukuii?</h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {CARDS.map((card, i) => (
            <FadeIn key={card.title} delay={i * 100}>
              <div
                className="card-fk"
                style={{ padding: "2rem", height: "100%" }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--radius-sm)",
                    background: "var(--accent-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: "1.25rem",
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: "0.625rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {card.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
