"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const BADGES = [
  { label: "Scala 3", color: "#DC322F", bg: "rgba(220,50,47,0.10)", border: "rgba(220,50,47,0.30)" },
  { label: "JDK 25 LTS", color: "var(--fk-green-3)", bg: "rgba(77,138,40,0.10)", border: "rgba(77,138,40,0.35)" },
  { label: "SLSA L3", color: "var(--fk-green-3)", bg: "rgba(77,138,40,0.10)", border: "rgba(77,138,40,0.35)" },
  { label: "SNAP", color: "var(--fk-green-3)", bg: "rgba(77,138,40,0.10)", border: "rgba(77,138,40,0.35)" },
] as const;

export function HeroSection() {
  return (
    <>
      <div className="alpha-banner">
        ⚠ ALPHA — DO NOT USE IN PRODUCTION
      </div>

      <section className="hero-gradient section-fk" id="hero">
        <div className="container-fk">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <FadeIn>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Image
                    src="/fukuii-hex-logo.png"
                    width={180}
                    height={180}
                    alt="Fukuii mascot"
                    priority
                    style={{ filter: "drop-shadow(0 0 40px rgba(77,138,40,0.4))" }}
                  />
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {BADGES.map((b) => (
                    <span
                      key={b.label}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        letterSpacing: "0.04em",
                        padding: "0.25rem 0.625rem",
                        borderRadius: 9999,
                        border: `1px solid ${b.border}`,
                        background: b.bg,
                        color: b.color,
                      }}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>

                <div>
                  <h1
                    style={{
                      fontSize: "clamp(2rem, 4vw + 1rem, 3.5rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                      color: "var(--text)",
                      marginBottom: "1rem",
                    }}
                  >
                    The multi-EVM execution client.
                  </h1>
                  <p
                    style={{
                      fontSize: "clamp(1.0625rem, 1.5vw + 0.5rem, 1.25rem)",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                      maxWidth: "56ch",
                    }}
                  >
                    One binary, any network. Native PoW for Ethereum Classic. Engine API for Ethereum.
                  </p>
                </div>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-subtle)",
                    lineHeight: 1.7,
                    maxWidth: "52ch",
                  }}
                >
                  From home miners to enterprise infrastructure. Pluggable consensus, verifiable supply chain, MCP-native operations.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  <a
                    href="https://github.com/chippr-robotics/fukuii"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "var(--radius-md)",
                      background: "var(--accent)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      textDecoration: "none",
                      transition: "opacity 150ms",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  >
                    Get Started
                  </a>
                  <a
                    href="https://chippr-robotics.github.io/fukuii"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-strong)",
                      background: "transparent",
                      color: "var(--text-muted)",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      textDecoration: "none",
                      transition: "border-color 150ms, color 150ms",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-strong)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                    }}
                  >
                    Read Docs
                  </a>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-subtle)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Built as production-grade infrastructure for the full range of EVM deployment scenarios.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
