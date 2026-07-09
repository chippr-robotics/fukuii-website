import { FadeIn } from "@/components/ui/FadeIn";

const BLOCKS = [
  {
    label: "INDEPENDENT BY CONSTRUCTION",
    heading: "A client whose failure modes don't correlate with everyone else's.",
    body: "Running a node built on an independent lineage — not forked from or transpiled out of the dominant Go implementation — changes the risk profile at the network layer. Fukuii shares the EIPs and wire protocol but nothing else: different codebase, different language, different team, different failure modes. A consensus bug in a Go implementation does not propagate to a JVM implementation, and vice versa.",
  },
  {
    label: "THE PREFERRED STACK",
    heading: "A type system that rejects consensus bugs before they reach a block.",
    body: "Serious infrastructure runs on the JVM, the runtime trading desks and clearing systems have trusted for decades, and its operational tooling (JFR, async-profiler, JMX, heap dumps) comes for free. Fukuii goes one layer further. Scala 3's algebraic data types, exhaustive pattern matching, and type system make entire classes of consensus-critical bugs impossible to express, caught at compile time rather than discovered in production. The JVM is the foundation; Scala is why correctness is structural.",
  },
  {
    label: "AGENTIC INFRASTRUCTURE",
    heading: "An EVM client with a built-in MCP server.",
    body: "Model Context Protocol is an open standard that lets AI agents call structured tools. Fukuii ships an MCP server that exposes node state, sync progress, peer counts, and block data to any MCP-compatible agent. Infrastructure automation, anomaly detection, and runbook execution wire straight into a running node.",
  },
] as const;

export function WhyFukuii() {
  return (
    <section className="section-fk section-bordered" id="why" style={{ background: "var(--bg-elev)" }}>
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "3.5rem" }}>
            <span className="cell-label">Why Fukuii</span>
            <h2 className="section-title">
              A different runtime. A different guarantee.
            </h2>
          </div>
        </FadeIn>

        {/* Editorial blocks — bordered rows */}
        <div
          style={{
            border: "1px solid var(--border)",
          }}
        >
          {BLOCKS.map((block, i) => (
            <FadeIn key={block.label} delay={i * 80}>
              <div
                style={{
                  borderTop: i === 0 ? "none" : "1px solid var(--border)",
                  padding: "1.75rem 2.5rem",
                }}
              >
                <span className="cell-label">{block.label}</span>
                <h3
                  style={{
                    fontSize: "clamp(1.125rem, 2vw + 0.5rem, 1.5rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                    lineHeight: 1.3,
                    marginBottom: "0.875rem",
                  }}
                >
                  {block.heading}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                  }}
                >
                  {block.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
