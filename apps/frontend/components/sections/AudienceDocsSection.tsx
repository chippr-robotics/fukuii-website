import { FadeIn } from "@/components/ui/FadeIn";

const DOCS = [
  {
    title: "Getting started",
    body: "Installation, configuration, network setup.",
    href: "https://docs.fukuii.com/getting-started/",
  },
  {
    title: "SRE / production",
    body: "Metrics, alerts, runbooks, and rollback.",
    href: "https://docs.fukuii.com/for-operators/",
  },
  {
    title: "Developers",
    body: "RPC reference, MCP tools, contributing.",
    href: "https://docs.fukuii.com/developers/",
  },
] as const;

export function AudienceDocsSection() {
  return (
    <section className="section-fk">
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Documentation
            </h2>
            <p className="section-subtitle">
              Start here, wherever you are in the stack.
            </p>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {DOCS.map((doc, i) => (
            <FadeIn key={doc.title} delay={i * 80}>
              <a
                href={doc.href}
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
                    {doc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    {doc.body}
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
