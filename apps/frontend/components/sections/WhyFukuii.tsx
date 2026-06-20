"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const BLOCKS = [
  {
    label: "EVM CLIENT DIVERSITY",
    heading: "One implementation dominating a chain is a protocol risk.",
    body: "Ethereum Classic and Ethereum each lean on a single dominant execution client. When one implementation controls more than 90% of nodes, a consensus bug doesn't take down an operator; it takes down the network. Fukuii is a credible independent alternative: same EIPs, same wire protocol, different codebase, different language, different team. That separation is the point.",
  },
  {
    label: "WHY SCALA 3 OVER GO OR .NET",
    heading: "The JVM has run global financial infrastructure for 30 years.",
    body: "The world's trading desks, central clearing systems, and sovereign settlement layers already run on the JVM. Scala 3 gives Fukuii algebraic data types, exhaustive pattern matching, and a type system that makes a whole class of consensus-critical bugs unrepresentable: errors the compiler rejects before they ever reach a block. Go is simple; .NET is Microsoft. Scala on the JVM is what you reach for when correctness and operational tooling (JFR, async-profiler, JMX, heap dumps) are non-negotiable.",
  },
  {
    label: "AGENTIC INFRASTRUCTURE",
    heading: "The first EVM client with a built-in MCP server.",
    body: "Model Context Protocol is an open standard that lets AI agents call structured tools. Fukuii ships an MCP server that exposes node state, sync progress, peer counts, and block data to any MCP-compatible agent. Infrastructure automation, anomaly detection, and runbook execution wire straight into a running node. No custom scripts, no polling endpoints.",
  },
  {
    label: "NO LICENSE METER RUNNING",
    heading: "No commercial subscription. No vendor in the critical path.",
    body: "Fukuii's actor runtime is Apache Pekko, the community fork of Akka taken before Lightbend's move to the Business Source License in 2022. From Akka 2.7.x onward, companies above a revenue threshold must buy a commercial Lightbend subscription to run it in production. Apache Pekko, under the Apache Software Foundation, carries no such obligation. There is no BSL exposure to underwrite — a line item that matters to legal and procurement at every institution in your stack.",
  },
] as const;

const LINKS = [
  {
    text: "Building infrastructure on EVM?",
    cta: "MCP tooling docs",
    href: "https://fukuii.com/",
    external: true,
  },
  {
    text: "Running a mining or staking operation?",
    cta: "Operator guide",
    href: "https://fukuii.com/for-operators/",
    external: true,
  },
  {
    text: "Contributing to the codebase?",
    cta: "Developer docs",
    href: "https://fukuii.com/developers/",
    external: true,
  },
] as const;

export function WhyFukuii() {
  return (
    <section className="section-fk section-bordered" id="why" style={{ background: "var(--bg-elev)" }}>
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "3.5rem", maxWidth: "52ch" }}>
            <span className="cell-label">Why Fukuii</span>
            <h2 className="section-title">
              A different runtime. A different guarantee.
            </h2>
          </div>
        </FadeIn>

        {/* Editorial blocks — stacked, generous spacing */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            marginBottom: "4rem",
            maxWidth: "64ch",
          }}
        >
          {BLOCKS.map((block, i) => (
            <FadeIn key={block.label} delay={i * 100}>
              <div>
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

        {/* Quick links table */}
        <FadeIn delay={200}>
          <div
            style={{
              border: "1px solid var(--border)",
              maxWidth: 720,
            }}
          >
            {LINKS.map((link, i) => (
              <div
                key={link.cta}
                className="why-link-row"
                style={{ borderTop: i === 0 ? "none" : undefined }}
              >
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {link.text}
                </p>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    transition: "opacity 150ms",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  }}
                >
                  {link.cta}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
