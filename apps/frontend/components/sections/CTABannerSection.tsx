import { FadeIn } from "@/components/ui/FadeIn";

export function CTABannerSection() {
  return (
    <section style={{ paddingBlock: "5rem" }}>
      <div className="container-fk">
        <FadeIn>
          <div
            className="cta-glass"
            style={{
              padding: "clamp(2rem, 5vw, 3.5rem)",
              textAlign: "center",
              maxWidth: 640,
              marginInline: "auto",
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
                maxWidth: "52ch",
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
                href="https://github.com/chippr-robotics/fukuii/issues"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.6875rem 1.5rem",
                  borderRadius: "var(--radius-md)",
                  background: "linear-gradient(135deg, var(--fk-green-3) 0%, var(--fk-gold) 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px -4px rgba(77,138,40,0.4)",
                }}
              >
                Report an issue
              </a>
              <a
                href="https://github.com/chippr-robotics/fukuii/discussions"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.6875rem 1.5rem",
                  borderRadius: "var(--radius-md)",
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
