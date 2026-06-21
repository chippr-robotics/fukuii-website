"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

type Tab = "mordor" | "docker" | "sepolia";

const CODE: Record<Tab, string> = {
  mordor: `# Requires JDK 25 LTS + sbt
git clone https://github.com/chippr-robotics/fukuii
cd fukuii && sbt assembly
java -Xmx4g \\
  -Dfukuii.datadir=/var/lib/fukuii \\
  -Dfukuii.network=mordor \\
  -jar target/fukuii-assembly-<ver>.jar mordor`,
  docker: `docker pull ghcr.io/chippr-robotics/fukuii:latest
docker run -d --name fukuii \\
  -p 8553:8553 -p 30305:30305 \\
  -v fukuii-data:/var/lib/fukuii \\
  ghcr.io/chippr-robotics/fukuii:latest etc`,
  sepolia: `# Engine API mode: pair with any CL
java -Xmx8g \\
  -Dfukuii.network=sepolia \\
  -Dfukuii.engine.enabled=true \\
  -Dfukuii.engine.jwt-secret=/path/to/jwt.hex \\
  -jar target/fukuii-assembly-<ver>.jar sepolia

# Then start your consensus client:
# Lighthouse · Prysm · Teku · Lodestar · Nimbus
# --execution-endpoint=http://localhost:8551`,
};

const TABS: { id: Tab; label: string }[] = [
  { id: "mordor", label: "Mordor SNAP" },
  { id: "docker", label: "Docker" },
  { id: "sepolia", label: "Sepolia + CL" },
];

const REQUIREMENTS = [
  { tier: "Home node", ram: "8 GB", disk: "500 GB" },
  { tier: "Professional", ram: "16 GB", disk: "1 TB" },
  { tier: "Enterprise", ram: "32–64 GB", disk: "2–4 TB" },
  { tier: "Archive", ram: "64 GB+", disk: "4 TB+" },
];

export function QuickStartInstall() {
  const [active, setActive] = useState<Tab>("mordor");

  return (
    <>
      {/* Tab bar */}
      <FadeIn delay={80}>
        <div
          style={{
            display: "flex",
            gap: 0,
            borderBottom: "1px solid var(--border)",
            marginBottom: 0,
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                padding: "0.625rem 1.25rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: active === tab.id ? "var(--accent)" : "var(--text-subtle)",
                background: "transparent",
                border: "none",
                borderBottom:
                  active === tab.id
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
            {CODE[active]}
          </pre>
        </div>
      </FadeIn>

      {/* Hardware requirements */}
      <FadeIn delay={160}>
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
                  borderBottom:
                    i < REQUIREMENTS.length - 1 ? "1px solid var(--border)" : "none",
                  background: i % 2 === 0 ? "transparent" : "var(--bg-card)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  {row.tier}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {row.ram}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {row.disk}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </>
  );
}
