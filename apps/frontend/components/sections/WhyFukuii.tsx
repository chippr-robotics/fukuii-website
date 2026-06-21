import { FadeIn } from "@/components/ui/FadeIn";

const BLOCKS = [
  {
    label: "THE PREFERRED STACK",
    heading: "The stack global finance already runs on.",
    body: "Trading desks, central clearing systems, and sovereign settlement layers already run on the JVM. Fukuii's stack aligns with this infrastructure without adding a new runtime to manage. Scala 3 brings algebraic data types, exhaustive pattern matching, and a type system that makes entire classes of consensus-critical bugs unrepresentable: the compiler rejects them before they reach a block. Operational tooling (JFR, async-profiler, JMX, heap dumps) works out of the box because the JVM already has it. Go is simple; .NET is Microsoft. The JVM is what global finance chose, for reasons that apply equally to node operation.",
  },
  {
    label: "NO LICENSE METER RUNNING",
    heading: "No commercial subscription. No vendor in the critical path.",
    body: "Fukuii's actor runtime is Apache Pekko, the community fork of Akka taken before Lightbend's move to the Business Source License in 2022. From Akka 2.7.x onward, companies above a revenue threshold must buy a commercial Lightbend subscription to run it in production. Apache Pekko, under the Apache Software Foundation, carries no such obligation. There is no BSL exposure to underwrite, a line item that matters to legal and procurement at every institution in your stack.",
  },
  {
    label: "INDEPENDENT BY CONSTRUCTION",
    heading: "A client whose failure modes don't correlate with everyone else's.",
    body: "Running a node independent of the dominant implementation changes the risk profile at the network layer. Fukuii shares the EIPs and wire protocol but nothing else: different codebase, different language, different team, different failure modes. A consensus bug in a Go implementation does not propagate to a JVM implementation, and vice versa. Ethereum Classic and Ethereum each lean on a single dominant client today. Fukuii is the independent path.",
  },
  {
    label: "AGENTIC INFRASTRUCTURE",
    heading: "The first EVM client with a built-in MCP server.",
    body: "Model Context Protocol is an open standard that lets AI agents call structured tools. Fukuii ships an MCP server that exposes node state, sync progress, peer counts, and block data to any MCP-compatible agent. Infrastructure automation, anomaly detection, and runbook execution wire straight into a running node. No custom scripts, no polling endpoints.",
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
