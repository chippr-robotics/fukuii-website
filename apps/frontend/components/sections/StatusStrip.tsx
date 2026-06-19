"use client";

import { CountUp } from "@/components/ui/CountUp";

const STATS = [
  { to: 3621, label: "tests passing", suffix: "" },
  { to: 14, label: "Hive simulators", suffix: "" },
  { to: 4, label: "networks supported", suffix: "+" },
  { to: 3, label: "sync modes", suffix: "" },
] as const;

export function StatusStrip() {
  return (
    <div className="status-strip">
      <div className="container-fk">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem 3rem",
            justifyContent: "center",
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  lineHeight: 1,
                  color: "var(--accent)",
                }}
              >
                <CountUp to={stat.to} />
                {stat.suffix}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-subtle)",
                  letterSpacing: "0.03em",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
