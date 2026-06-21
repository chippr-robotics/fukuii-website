import type { Metadata } from "next";
import NavHeader from "@/components/sections/NavHeader";
import { FooterSection } from "@/components/sections/FooterSection";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Fukuii's four-phase Orbita roadmap: environment abstraction, multi-instance runtime, pluggable PoA consensus, and OP-style L2 derivation.",
};

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
      "Single process, multiple chains running concurrently. Run ETC and Ethereum mainnet simultaneously, shared EVM runtime, isolated state and network stack per chain. One node, many networks.",
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

export default function RoadmapPage() {
  return (
    <main>
      <NavHeader />
      <section className="section-fk">
        <div className="container-fk">
          <FadeIn>
            <div style={{ marginBottom: "3.5rem" }}>
              <span className="cell-label">Roadmap</span>
              <h1 className="section-title">Roadmap — The Orbita Vision</h1>
              <p className="section-subtitle" style={{ marginTop: "0.75rem" }}>
                Fukuii&apos;s architecture is evolving toward a multi-instance, consensus-agnostic
                runtime: one process, multiple chains, with isolated state and network stacks per
                network. Each phase adds a layer: environment abstraction, concurrent chain execution,
                pluggable PoA consensus, then native L2 block derivation. The end state is an
                execution layer that runs any EVM chain, not just the ones it was compiled for.
              </p>
            </div>
          </FadeIn>

          {/* Phase rows — full descriptions */}
          <div style={{ border: "1px solid var(--border)" }}>
            {PHASES.map((phase, i) => (
              <FadeIn key={phase.number} delay={i * 100}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    alignItems: "start",
                    gap: "1.5rem",
                    padding: "1.75rem",
                    borderTop: i === 0 ? "none" : "1px solid var(--border)",
                    background: phase.status === "active" ? "var(--accent-soft)" : "transparent",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: phase.status === "active" ? "var(--accent)" : "var(--text-subtle)",
                      }}
                    >
                      Phase {phase.number}
                    </span>
                  </div>

                  <div>
                    <h2
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        letterSpacing: "-0.01em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {phase.name}
                    </h2>
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

                  <div style={{ paddingTop: "0.125rem" }}>
                    <span
                      className={`badge-fk${phase.status === "active" ? " badge-green" : ""}`}
                    >
                      {phase.codename}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
