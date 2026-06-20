"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

type Tab = "mordor" | "docker" | "sepolia";

const REQUIREMENTS = [
  { tier: "Home node", ram: "8 GB", disk: "500 GB" },
  { tier: "Professional", ram: "16 GB", disk: "1 TB" },
  { tier: "Enterprise", ram: "32–64 GB", disk: "2–4 TB" },
  { tier: "Archive", ram: "64 GB+", disk: "4 TB+" },
] as const;

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

  sepolia: `# Engine API mode — pair with any CL
java -Xmx8g \\
  -Dfukuii.network=sepolia \\
  -Dfukuii.engine.enabled=true \\
  -Dfukuii.engine.jwt-secret=/path/to/jwt.hex \\
  -jar target/fukuii-assembly-<ver>.jar sepolia

# Then start your consensus client:
# Lighthouse · Prysm · Teku · Lodestar · Nimbus
# --execution-endpoint=http://localhost:8551`,
};

const TAB_LABELS: Record<Tab, string> = {
  mordor: "Mordor SNAP",
  docker: "Docker",
  sepolia: "Sepolia + CL",
};

export function QuickStartSection() {
  const [tab, setTab] = useState<Tab>("mordor");

  return (
    <section className="section-fk" id="quickstart">
      <div className="container-fk" style={{ maxWidth: 800 }}>
        <FadeIn>
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Quick Start
            </h2>
            <p className="section-subtitle">
              Up and running in minutes, whether you&apos;re testing on Mordor, deploying via Docker, or pairing
              with a consensus client for Ethereum. Requires JDK 25 LTS.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div
            style={{
              display: "flex",
              gap: "0.25rem",
              borderBottom: "1px solid var(--border)",
              marginBottom: "1.5rem",
            }}
          >
            {(["mordor", "docker", "sepolia"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "6px 6px 0 0",
                  border: "1px solid transparent",
                  borderBottom: "none",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "background 150ms, color 150ms, border-color 150ms",
                  background: tab === t ? "var(--bg-elev)" : "transparent",
                  color: tab === t ? "var(--text)" : "var(--text-muted)",
                  borderColor: tab === t ? "var(--border)" : "transparent",
                  marginBottom: tab === t ? -1 : 0,
                }}
              >
                {TAB_LABELS[t]}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <pre className="code-block">
            <code>{CODE[tab]}</code>
          </pre>
        </FadeIn>

        {tab === "sepolia" && (
          <FadeIn delay={140}>
            <div
              style={{
                marginTop: "1rem",
                padding: "0.875rem 1.125rem",
                background: "var(--accent-soft)",
                border: "1px solid rgba(77,138,40,0.3)",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                lineHeight: 1.55,
              }}
            >
              Fukuii implements Engine API V1–V4. The JWT secret must match your consensus client&apos;s
              configuration. Prague/Electra validated on Sepolia with Lighthouse.
            </div>
          </FadeIn>
        )}

        <FadeIn delay={160}>
          <div style={{ marginTop: "2.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-subtle)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.875rem",
              }}
            >
              Hardware Requirements
            </p>
            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "var(--bg-card)",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {["Tier", "RAM", "Disk"].map((col) => (
                      <th
                        key={col}
                        style={{
                          padding: "0.625rem 1rem",
                          textAlign: "left",
                          fontWeight: 600,
                          color: "var(--text-subtle)",
                          fontSize: "0.75rem",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {REQUIREMENTS.map((row, i) => (
                    <tr
                      key={row.tier}
                      style={{
                        borderBottom:
                          i < REQUIREMENTS.length - 1
                            ? "1px solid var(--border)"
                            : undefined,
                        background: i % 2 === 0 ? "transparent" : "var(--bg-card)",
                      }}
                    >
                      <td style={{ padding: "0.625rem 1rem", color: "var(--text)", fontWeight: 500 }}>
                        {row.tier}
                      </td>
                      <td style={{ padding: "0.625rem 1rem", color: "var(--text-muted)" }}>
                        {row.ram}
                      </td>
                      <td style={{ padding: "0.625rem 1rem", color: "var(--text-muted)" }}>
                        {row.disk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
