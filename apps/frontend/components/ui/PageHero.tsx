import { HexCanvas } from "@/components/ui/HexCanvas";

interface Cta {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  ctas?: Cta[];
}

export function PageHero({ eyebrow, title, description, ctas }: PageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <HexCanvas />
      <div className="container-fk" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="hero-cell-overlay"
          style={{
            border: "1px solid var(--border)",
            padding: "clamp(3rem, 6vw, 4.5rem) clamp(2rem, 4vw, 3.5rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <span className="cell-label">{eyebrow}</span>
          <h1
            className="section-title"
            style={{ marginBottom: 0 }}
          >
            {title}
          </h1>
          <p
            className="section-subtitle"
            style={{ margin: 0, maxWidth: "62ch" }}
          >
            {description}
          </p>
          {ctas && ctas.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                paddingTop: "0.5rem",
              }}
            >
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  {...(cta.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  style={
                    cta.primary
                      ? {
                          background: "var(--accent)",
                          color: "#fff",
                          border: "1px solid var(--accent)",
                          padding: "0.75rem 1.75rem",
                          fontWeight: 700,
                          fontSize: "0.9375rem",
                          textDecoration: "none",
                        }
                      : {
                          border: "1px solid var(--border-strong)",
                          color: "var(--text-muted)",
                          padding: "0.75rem 1.5rem",
                          fontWeight: 600,
                          fontSize: "0.9375rem",
                          textDecoration: "none",
                        }
                  }
                >
                  {cta.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
