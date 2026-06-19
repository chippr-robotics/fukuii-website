import { FadeIn } from "@/components/ui/FadeIn";

type PhaseStatus = "active" | "planned";

interface Phase {
  number: string;
  name: string;
  codename: string;
  status: PhaseStatus;
  description: string;
}

const PHASES: Phase[] = [
  {
    number: "1",
    name: "fukuii-env",
    codename: "In Progress",
    status: "active",
    description:
      "Extract per-chain config structure. One binary, multiple network environments. Declarative chain definitions that can be loaded at runtime without recompilation.",
  },
  {
    number: "2",
    name: "Multi-Instance Runtime",
    codename: "Planned",
    status: "planned",
    description:
      "Single process manages multiple chains concurrently. One fukuii, many networks. Shared EVM runtime with isolated state per chain.",
  },
  {
    number: "3",
    name: "Checkpoint Consensus (Orbita PoA)",
    codename: "Planned",
    status: "planned",
    description:
      "PoA sidechain checkpointing to parent chain. Pluggable consensus via the Orbita framework. Enables private and consortium chains with ETC or ETH as the anchor.",
  },
  {
    number: "4",
    name: "OP-Style Derivation",
    codename: "Planned",
    status: "planned",
    description:
      "L2 block derivation from L1 batches and blobs. Native L2 without a separate sequencer binary. Fukuii becomes the execution layer for OP-compatible rollups.",
  },
];

export function RoadmapSection() {
  return (
    <section
      className="section-fk"
      id="roadmap"
      style={{ background: "var(--bg-elev)" }}
    >
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "0.75rem" }}>
            <h2 className="section-title">Roadmap — The Orbita Vision</h2>
          </div>
          <p className="section-subtitle" style={{ marginBottom: "3.5rem" }}>
            Fukuii{"'"}s architecture is evolving toward a multi-instance, consensus-agnostic runtime.
          </p>
        </FadeIn>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            position: "relative",
          }}
        >
          {PHASES.map((phase, i) => (
            <FadeIn key={phase.number} delay={i * 100}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.5rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0,
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: `2px solid ${phase.status === "active" ? "var(--accent)" : "var(--border)"}`,
                      background:
                        phase.status === "active"
                          ? "var(--accent-soft)"
                          : "var(--bg-card)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      color:
                        phase.status === "active"
                          ? "var(--accent)"
                          : "var(--text-subtle)",
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    {phase.number}
                  </div>
                  {i < PHASES.length - 1 && (
                    <div
                      style={{
                        width: 2,
                        flex: 1,
                        minHeight: 32,
                        background:
                          i === 0
                            ? "linear-gradient(to bottom, var(--accent), var(--border))"
                            : "var(--border)",
                        marginBlock: "4px",
                      }}
                    />
                  )}
                </div>

                <div
                  className={phase.status === "active" ? "card-fk" : ""}
                  style={{
                    padding: phase.status === "active" ? "1.5rem" : "0.5rem 0 2rem 0",
                    marginBottom: i === PHASES.length - 1 ? 0 : undefined,
                    borderLeft:
                      phase.status === "active"
                        ? "2px solid var(--accent)"
                        : undefined,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      flexWrap: "wrap",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Phase {phase.number} — {phase.name}
                    </h3>
                    <span
                      className={`badge-fk ${phase.status === "active" ? "badge-green" : ""}`}
                    >
                      {phase.codename}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {phase.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
