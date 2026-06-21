import { FadeIn } from "@/components/ui/FadeIn";

export function CTABannerSection() {
  return (
    <section className="section-fk">
      <div className="container-fk">
        <FadeIn>
          <div
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg-elev)",
              padding: "clamp(2rem, 5vw, 3.5rem)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw + 0.5rem, 2.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text)",
                marginBottom: "1rem",
              }}
            >
              Run a node. Tell us what you see.
            </h2>

            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                marginBottom: "2rem",
                maxWidth: 560,
                marginInline: "auto",
              }}
            >
              Operator feedback shapes the road to v1.0: sync behavior, peering, resource profiles,
              the things only a running node reveals.
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://github.com/chippr-robotics/fukuii/releases"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  background: "var(--accent)",
                  border: "1px solid var(--accent)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Download
              </a>
              <a
                href="https://github.com/chippr-robotics/fukuii/discussions"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.75rem 1.5rem",
                  border: "1px solid var(--border-strong)",
                  background: "var(--bg-card)",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                Join discussions
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
