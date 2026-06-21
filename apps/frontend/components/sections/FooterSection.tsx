"use client";

import Image from "next/image";

const COLS = [
  {
    heading: "Project",
    links: [
      { label: "What is Fukuii?", href: "/#what" },
      { label: "Features", href: "/features" },
      { label: "Stack", href: "/stack" },
      { label: "Architecture", href: "/architecture" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Networks", href: "/#networks" },
      { label: "Operations", href: "/#operations" },
      { label: "Guide", href: "/guide" },
      { label: "Docs", href: "https://fukuii.com", external: true },
    ],
  },
  {
    heading: "Docs",
    links: [
      { label: "Documentation", href: "https://fukuii.com", external: true },
      { label: "Getting started", href: "https://fukuii.com/getting-started/", external: true },
      { label: "Developers", href: "https://fukuii.com/developers/", external: true },
      { label: "Operators", href: "https://fukuii.com/for-operators/", external: true },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/chippr-robotics/fukuii", external: true },
      { label: "Issues", href: "https://github.com/chippr-robotics/fukuii/issues", external: true },
      { label: "Discussions", href: "https://github.com/chippr-robotics/fukuii/discussions", external: true },
      { label: "Releases", href: "https://github.com/chippr-robotics/fukuii/releases", external: true },
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
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2.5rem 3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand block */}
          <div style={{ minWidth: 160 }}>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                marginBottom: "0.875rem",
              }}
            >
              <Image
                src="/fukuii-hex-logo.png"
                alt="Fukuii"
                width={30}
                height={30}
              />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text)",
                }}
              >
                Fukuii
              </span>
            </a>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-subtle)",
                lineHeight: 1.65,
                maxWidth: "22ch",
              }}
            >
              The only Scala EVM execution client. Sovereign-grade. Open source.
            </p>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
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
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
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
