import { FadeIn } from "@/components/ui/FadeIn";

const FEATURES = [
  {
    emoji: "⚡",
    title: "SNAP Sync",
    body: "6-phase pipeline with adaptive batching. Pruning modes for full, fast, and archive nodes. Syncs Ethereum Classic in hours, not days.",
  },
  {
    emoji: "🔗",
    title: "Engine API V1–V4",
    body: "Prague/Electra validated on Sepolia with Lighthouse CL. Full payload lifecycle, withdrawals, blob transactions, and engine_getClientVersionV1.",
  },
  {
    emoji: "🤖",
    title: "MCP Server",
    body: "First EVM client with built-in Model Context Protocol server. Agentic operations, AI-native JSON-RPC tooling for automated infrastructure management.",
  },
  {
    emoji: "🔏",
    title: "SLSA Level 3",
    body: "Reproducible builds, Cosign keyless signing, CycloneDX SBOM. Every release is cryptographically attested and auditable end-to-end.",
  },
  {
    emoji: "🧪",
    title: "3,621 Tests",
    body: "14 Hive compliance simulators, nightly Ethereum Foundation test vectors. Continuous validation against reference clients across both ETC and ETH.",
  },
  {
    emoji: "🏛",
    title: "Mantis Foundation",
    body: "Forked from IOHK's battle-tested Mantis client. Proven cryptographic foundation built by the team behind Cardano's Haskell and Scala toolchain.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section className="section-fk" id="features" style={{ background: "var(--bg-elev)" }}>
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "3rem" }}>
            <h2 className="section-title">Core Capabilities</h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={Math.floor(i / 2) * 80 + (i % 2) * 40}>
              <div
                className="card-fk"
                style={{ padding: "1.75rem", height: "100%" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span
                    style={{
                      fontSize: "1.625rem",
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                    aria-hidden="true"
                  >
                    {f.emoji}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: "0.5rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      {f.body}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
