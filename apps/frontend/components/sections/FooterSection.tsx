"use client";

import Image from "next/image";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/chippr-robotics/fukuii",
    external: true,
  },
  {
    label: "Docker Hub",
    href: "https://hub.docker.com/r/chipprbots/fukuii",
    external: true,
  },
  {
    label: "Docs",
    href: "https://chippr-robotics.github.io/fukuii",
    external: true,
  },
  {
    label: "Releases",
    href: "https://github.com/chippr-robotics/fukuii/releases",
    external: true,
  },
] as const;

export function FooterSection() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-elev)",
        padding: "2.5rem 0",
      }}
    >
      <div className="container-fk">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            <Image
              src="/fukuii-hex-logo.png"
              alt="Fukuii"
              width={32}
              height={32}
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

          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.25rem 1.5rem",
              justifyContent: "center",
            }}
          >
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 150ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--text-muted)";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--text-subtle)",
              lineHeight: 1.6,
            }}
          >
            Maintained by Chippr Robotics LLC · Apache 2.0 · Forked from Mantis (IOHK)
          </p>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--fk-gold-2)",
              background: "rgba(214, 181, 107, 0.08)",
              border: "1px solid rgba(214, 181, 107, 0.25)",
              borderRadius: 6,
              padding: "0.375rem 0.875rem",
              letterSpacing: "0.04em",
            }}
          >
            ALPHA SOFTWARE — Not production ready
          </p>
        </div>
      </div>
    </footer>
  );
}
