import type { Metadata } from "next";
import NavHeader from "@/components/sections/NavHeader";
import { FooterSection } from "@/components/sections/FooterSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "The path to every EVM network: Fukuii's roadmap from today's two primary networks to a single runtime for any EVM chain, from L1s and sidechains to L2 rollups and private networks.",
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
      <PageHero
        eyebrow="Roadmap"
        title="Fukuii's roadmap"
        description="Fukuii runs two primary networks today. This roadmap grows it into a single runtime for many: additional L1s, sidechains, L2 rollups, and private networks, all from the same binary."
        ctas={[
          { label: "Quick Start", href: "/guide" },
        ]}
      />
      <RoadmapSection />
      <section className="section-fk">
        <div className="container-fk">

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
