"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

// ─── Layer 1: Install tabs ───────────────────────────────────────────────────

type InstallTab = "linux" | "macos" | "windows" | "docker";

const INSTALL_TABS: { id: InstallTab; label: string }[] = [
  { id: "linux", label: "Linux" },
  { id: "macos", label: "macOS" },
  { id: "windows", label: "Windows" },
  { id: "docker", label: "Docker" },
];

const INSTALL_CODE: Record<InstallTab, string> = {
  linux: `# 1. Install JDK 25 LTS via SDKMAN
curl -s "https://get.sdkman.io" | bash
sdk install java 25-tem

# 2. Download the latest release
wget https://github.com/chippr-robotics/fukuii/releases/latest/download/fukuii-assembly-<ver>.jar

# 3. Verify
java -jar fukuii-assembly-<ver>.jar --version`,

  macos: `# 1. Install JDK 25 LTS via Homebrew
brew install openjdk@25
sudo ln -sfn $(brew --prefix)/opt/openjdk@25/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-25.jdk

# 2. Download the latest release
curl -LO https://github.com/chippr-robotics/fukuii/releases/latest/download/fukuii-assembly-<ver>.jar

# 3. Verify
java -jar fukuii-assembly-<ver>.jar --version`,

  windows: `# 1. Install JDK 25 LTS via winget (run PowerShell as Administrator)
winget install Microsoft.OpenJDK.25

# 2. Download the latest release
Invoke-WebRequest \`
  -Uri "https://github.com/chippr-robotics/fukuii/releases/latest/download/fukuii-assembly-<ver>.jar" \`
  -OutFile fukuii.jar

# 3. Verify
java -jar fukuii.jar --version`,

  docker: `# No JDK required — the image bundles everything
docker pull ghcr.io/chippr-robotics/fukuii:latest

# Verify
docker run ghcr.io/chippr-robotics/fukuii:latest --version`,
};

const SOURCE_BUILD_CODE = `# Requires JDK 25 LTS + sbt (Scala build tool)
git clone https://github.com/chippr-robotics/fukuii
cd fukuii && sbt assembly
# Output: target/fukuii-assembly-<ver>.jar`;

// ─── Layer 2: Network table ───────────────────────────────────────────────────

const NETWORKS = [
  { name: "Ethereum Classic", arg: "etc",     consensus: "PoW",                      chainId: "61" },
  { name: "Mordor",           arg: "mordor",  consensus: "PoW testnet",               chainId: "63" },
  { name: "Ethereum mainnet", arg: "eth",     consensus: "PoS (needs a CL)",         chainId: "1" },
  { name: "Sepolia",          arg: "sepolia", consensus: "PoS testnet (needs a CL)", chainId: "11155111" },
];

// ─── Layer 3: Next-steps cards ────────────────────────────────────────────────

const NEXT_STEPS = [
  {
    title: "Run a validator (PoS)",
    body: "Pair a consensus client, enable the Engine API with a JWT secret. Mainnet staking requires 32 ETH.",
    href: "https://docs.fukuii.com/validator",
  },
  {
    title: "Mine (PoW)",
    body: "Configure a coinbase address and connect a miner. Applies to Ethereum Classic and Mordor.",
    href: "https://docs.fukuii.com/mining",
  },
  {
    title: "Archive node",
    body: "Full history retained. See hardware tiers below for disk sizing.",
    href: "https://docs.fukuii.com/archive",
  },
  {
    title: "Run as a service",
    body: "Keep the node running under systemd (Linux), launchd (macOS), or a Windows Service.",
    href: "https://docs.fukuii.com/service",
  },
];

// ─── Hardware table ───────────────────────────────────────────────────────────

const REQUIREMENTS = [
  { tier: "Home node",    ram: "8 GB",     disk: "500 GB" },
  { tier: "Professional", ram: "16 GB",    disk: "1 TB" },
  { tier: "Enterprise",   ram: "32–64 GB", disk: "2–4 TB" },
  { tier: "Archive",      ram: "64 GB+",   disk: "4 TB+" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function QuickStartSection() {
  const [installTab, setInstallTab] = useState<InstallTab>("linux");

  return (
    <section className="section-fk" id="quickstart">
      <div className="container-fk">

        {/* Section intro */}
        <FadeIn>
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Quick Start
            </h2>
            <p className="section-subtitle">
              Test on Mordor testnet, deploy via Cosign-signed Docker images on GHCR, or pair with
              any consensus client for Ethereum Sepolia, all from the same binary. The node
              self-reports its build version, commit hash, and build provenance at{" "}
              <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.9em" }}>/buildinfo</code>.
              Requires JDK 25 LTS.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <pre className="code-block">
            <code>{`docker run ghcr.io/chippr-robotics/fukuii mordor`}</code>
          </pre>
        </FadeIn>

        <FadeIn delay={120}>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              marginTop: "1.25rem",
            }}
          >
            From an 8 GB home node to a 64 GB+ archive node, the same binary scales from solo
            operator to institutional deployment.
          </p>
        </FadeIn>

        {/* ── Layer 1: Install ── */}
        <FadeIn delay={160}>
          <div style={{ marginTop: "3.5rem" }}>
            <span className="cell-label">Layer 1 — Install</span>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                marginTop: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              Get the binary onto your machine. Native installs require JDK 25 LTS; the Docker
              image bundles everything.
            </p>

            {/* Tab bar */}
            <div
              style={{
                display: "flex",
                gap: 0,
                borderBottom: "1px solid var(--border)",
                marginBottom: 0,
              }}
            >
              {INSTALL_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setInstallTab(tab.id)}
                  style={{
                    padding: "0.625rem 1.25rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    color: installTab === tab.id ? "var(--accent)" : "var(--text-subtle)",
                    background: "transparent",
                    border: "none",
                    borderBottom:
                      installTab === tab.id
                        ? "2px solid var(--accent)"
                        : "2px solid transparent",
                    cursor: "pointer",
                    transition: "color 150ms, border-color 150ms",
                    marginBottom: "-1px",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code block */}
            <div
              className="code-block"
              style={{
                border: "1px solid var(--border)",
                borderTop: "none",
                borderRadius: 0,
              }}
            >
              <pre
                style={{
                  margin: 0,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  lineHeight: 1.7,
                  color: "var(--text)",
                  padding: "1.5rem",
                  overflowX: "auto",
                  whiteSpace: "pre",
                }}
              >
                {INSTALL_CODE[installTab]}
              </pre>
            </div>

            {/* Build from source collapsible */}
            <details
              style={{
                marginTop: "1rem",
                border: "1px solid var(--border)",
              }}
            >
              <summary
                style={{
                  padding: "0.75rem 1.25rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  color: "var(--text-subtle)",
                  cursor: "pointer",
                  listStyle: "none",
                  userSelect: "none",
                }}
              >
                ▶ Build from source (advanced — requires Scala toolchain)
              </summary>
              <div
                className="code-block"
                style={{
                  border: "none",
                  borderTop: "1px solid var(--border)",
                  borderRadius: 0,
                }}
              >
                <pre
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    lineHeight: 1.7,
                    color: "var(--text)",
                    padding: "1.5rem",
                    overflowX: "auto",
                    whiteSpace: "pre",
                  }}
                >
                  {SOURCE_BUILD_CODE}
                </pre>
              </div>
            </details>
          </div>
        </FadeIn>

        {/* ── Layer 2: Run a node ── */}
        <FadeIn delay={80}>
          <div style={{ marginTop: "3.5rem" }}>
            <span className="cell-label">Layer 2 — Run a node</span>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                marginTop: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              Once installed, the network is a single argument. The same binary runs every network
              below.
            </p>

            {/* Network table */}
            <div style={{ border: "1px solid var(--border)", overflow: "hidden" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr 2fr 1fr",
                  background: "var(--bg-card)",
                  borderBottom: "1px solid var(--border)",
                  padding: "0.625rem 1.25rem",
                }}
              >
                {["Network", "Argument", "Consensus", "Chain ID"].map((col) => (
                  <span
                    key={col}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--text-subtle)",
                    }}
                  >
                    {col}
                  </span>
                ))}
              </div>
              {NETWORKS.map((row, i) => (
                <div
                  key={row.arg}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 1fr 2fr 1fr",
                    padding: "0.75rem 1.25rem",
                    borderBottom: i < NETWORKS.length - 1 ? "1px solid var(--border)" : "none",
                    background: i % 2 === 0 ? "transparent" : "var(--bg-card)",
                  }}
                >
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}>
                    {row.name}
                  </span>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--accent)" }}>
                    {row.arg}
                  </code>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                    {row.consensus}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                    {row.chainId}
                  </span>
                </div>
              ))}
            </div>

            {/* Run commands */}
            <div
              className="code-block"
              style={{ border: "1px solid var(--border)", borderTop: "none", borderRadius: 0 }}
            >
              <pre
                style={{
                  margin: 0,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  lineHeight: 1.7,
                  color: "var(--text)",
                  padding: "1.5rem",
                  overflowX: "auto",
                  whiteSpace: "pre",
                }}
              >
                {`# Native\njava -jar fukuii-assembly-<ver>.jar <network>\n\n# Docker\ndocker run -v fukuii-data:/var/lib/fukuii \\\n  ghcr.io/chippr-robotics/fukuii:latest <network>`}
              </pre>
            </div>

            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-subtle)",
                lineHeight: 1.6,
                marginTop: "0.875rem",
              }}
            >
              Proof-of-Stake networks require a paired consensus client. See Next steps below.
            </p>
          </div>
        </FadeIn>

        {/* ── Layer 3: Next steps ── */}
        <FadeIn delay={80}>
          <div style={{ marginTop: "3.5rem" }}>
            <span className="cell-label">Next steps</span>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                marginTop: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              A syncing full node is the default. These add a role on top of it. Mining applies to
              Proof-of-Work networks; validating applies to Proof-of-Stake networks.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {NEXT_STEPS.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-fk"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1.5rem",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: "0.375rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.55,
                      }}
                    >
                      {card.body}
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, color: "var(--text-subtle)", marginTop: 2 }}
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── Hardware requirements ── */}
        <FadeIn delay={80}>
          <div style={{ marginTop: "3.5rem" }}>
            <span className="cell-label">Hardware requirements</span>
            <div
              style={{
                border: "1px solid var(--border)",
                overflow: "hidden",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  background: "var(--bg-card)",
                  borderBottom: "1px solid var(--border)",
                  padding: "0.625rem 1.25rem",
                }}
              >
                {["Tier", "RAM", "Disk"].map((col) => (
                  <span
                    key={col}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--text-subtle)",
                    }}
                  >
                    {col}
                  </span>
                ))}
              </div>
              {REQUIREMENTS.map((row, i) => (
                <div
                  key={row.tier}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    padding: "0.75rem 1.25rem",
                    borderBottom: i < REQUIREMENTS.length - 1 ? "1px solid var(--border)" : "none",
                    background: i % 2 === 0 ? "transparent" : "var(--bg-card)",
                  }}
                >
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}>
                    {row.tier}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                    {row.ram}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                    {row.disk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
