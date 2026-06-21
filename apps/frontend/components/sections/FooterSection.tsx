"use client";

import Image from "next/image";

const COLS = [
  {
    heading: "Product",
    links: [
      { label: "What is Fukuii?", href: "/#what" },
      { label: "Features", href: "/features" },
      { label: "Stack", href: "/stack" },
      { label: "Architecture", href: "/architecture" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Download", href: "https://github.com/chippr-robotics/fukuii/releases", external: true },
      { label: "Guide", href: "/guide" },
      { label: "Documentation", href: "https://fukuii.com", external: true },
      { label: "GitHub", href: "https://github.com/chippr-robotics/fukuii", external: true },
      { label: "Docker", href: "https://ghcr.io/chippr-robotics/fukuii", external: true },
    ],
  },
] as const;

export function FooterSection() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-elev)",
        padding: "3.5rem 0 2rem",
      }}
    >
      <div className="container-fk">
        {/* Main grid: brand block + 3 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2.5rem 3rem",
            marginBottom: "3rem",
            justifyItems: "center",
            textAlign: "center",
          }}
        >
          {/* Product column — left */}
          {[COLS[0]].map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-subtle)",
                  marginBottom: "0.875rem",
                }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        transition: "color 150ms",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Brand block — center */}
          <div>
            <a
              href="/"
              style={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
                marginBottom: "0.875rem",
              }}
            >
              <Image
                src="/fukuii-hex-logo.png"
                alt="Fukuii"
                width={120}
                height={120}
              />
            </a>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-subtle)",
                lineHeight: 1.65,
                maxWidth: "28ch",
              }}
            >
              Fukuii is a Scala execution client for Ethereum and the EVM ecosystem. Feature-complete, sovereign-grade, open source, from solo operators to sovereign funds.
            </p>
          </div>

          {/* Resources column — right */}
          {[COLS[1]].map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-subtle)",
                  marginBottom: "0.875rem",
                }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        transition: "color 150ms",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem 1.5rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--text-subtle)",
            }}
          >
            © 2026 Chippr Robotics LLC · Apache 2.0 · Forked from Mantis (IOHK)
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              color: "var(--text-subtle)",
              letterSpacing: "0.04em",
            }}
          >
            package com.chipprbots
          </p>
        </div>
      </div>
    </footer>
  );
}
