import { FadeIn } from "@/components/ui/FadeIn";

const LAYERS = [
  {
    name: "consensus module",
    tag: "pluggable",
    description:
      "Engine API, beacon root handling, fork choice integration. ETChash today; pluggable tomorrow.",
    accent: false,
  },
  {
    name: "fukuii-env",
    tag: "infrastructure",
    description:
      "Networking, JSON-RPC, sync controllers, Prometheus metrics, storage glue.",
    accent: false,
  },
  {
    name: "fukuii-core",
    tag: "foundation",
    description:
      "EVM, state trie, RLP, txpool. Chain-agnostic. The library you’d reach for to build the next client.",
    accent: true,
  },
] as const;

export function ArchitectureSection() {
  return (
    <section className="section-fk" id="architecture">
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "3rem", maxWidth: "52ch" }}>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Three layers, cleanly separated.
            </h2>
            <p className="section-subtitle">
              Chain-agnostic at the bottom, opinionated at the top. Swap consensus without touching
              the EVM.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div
            style={{
              maxWidth: 560,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {LAYERS.map((layer, i) => (
              <div key={layer.name}>
                <div
                  className="card-fk"
                  style={{
                    padding: "1.5rem 1.75rem",
                    borderColor: layer.accent ? "var(--accent)" : undefined,
                    borderWidth: layer.accent ? 1 : undefined,
                    background: layer.accent ? "var(--accent-soft)" : "var(--bg-card)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <code
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: layer.accent ? "var(--accent)" : "var(--text)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {layer.name}
                    </code>
                    <span
                      className="badge-fk"
                      style={layer.accent ? { borderColor: "var(--accent)", color: "var(--accent)" } : undefined}
                    >
                      {layer.tag}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {layer.description}
                  </p>
                </div>

                {i < LAYERS.length - 1 && (
                  <div className="layer-connector" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
