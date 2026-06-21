import type { Metadata } from "next";
import NavHeader from "@/components/sections/NavHeader";
import { FooterSection } from "@/components/sections/FooterSection";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Fukuii's three-layer architecture: chain-agnostic EVM core, infrastructure layer, and pluggable consensus module. Swap consensus without touching the EVM.",
};

const LAYERS = [
  {
    tag: "PLUGGABLE",
    name: "consensus module",
    description:
      "Engine API, beacon root handling, fork choice integration. Ethash today; pluggable tomorrow.",
    accent: false,
  },
  {
    tag: "INFRASTRUCTURE",
    name: "fukuii-env",
    description:
      "Networking, JSON-RPC, sync controllers, Prometheus metrics, storage glue.",
    accent: false,
  },
  {
    tag: "FOUNDATION",
    name: "fukuii-core",
    description:
      "EVM, state trie, RLP, txpool. Chain-agnostic. The library you'd reach for to build the next client.",
    accent: true,
  },
] as const;

export default function ArchitecturePage() {
  return (
    <main>
      <NavHeader />
      <section className="section-fk">
        <div className="container-fk">
          <FadeIn>
            <div style={{ marginBottom: "3rem" }}>
              <span className="cell-label">Architecture</span>
              <h1 className="section-title" style={{ marginBottom: "0.75rem" }}>
                Three layers, cleanly separated.
              </h1>
              <p className="section-subtitle">
                Chain-agnostic at the bottom, opinionated at the top. The three-layer split is what
                makes the Orbita roadmap possible: swapping consensus modules, adding multi-chain
                execution, and native L2 derivation all operate above the{" "}
                <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.9em" }}>fukuii-core</code>{" "}
                boundary.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                border: "1px solid var(--border)",
              }}
            >
              {LAYERS.map((layer, i) => (
                <div
                  key={layer.name}
                  style={{
                    padding: "2rem 1.75rem",
                    borderRight: i < LAYERS.length - 1 ? "1px solid var(--border)" : "none",
                    background: layer.accent ? "var(--accent-soft)" : "transparent",
                  }}
                >
                  <span
                    className="cell-label"
                    style={layer.accent ? { color: "var(--accent)" } : undefined}
                  >
                    {layer.tag}
                  </span>
                  <code
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: layer.accent ? "var(--accent)" : "var(--text)",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {layer.name}
                  </code>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div style={{ marginTop: "2.5rem" }}>
              <a
                href="/#roadmap"
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
                See the Orbita roadmap
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
