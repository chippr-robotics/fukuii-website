import Image from "next/image";
import { HexCanvas } from "@/components/ui/HexCanvas";

interface Platform {
  label: string;
  icon: React.ReactNode;
}

const PLATFORMS: Platform[] = [
  {
    label: "Linux",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587.17 1.23.336 1.98.336.744 0 1.39-.166 1.98-.335.24.482.68.83 1.208.946.752.2 1.692-.005 2.616-.471.862-.463 1.96-.399 2.777-.599.405-.131.765-.267.94-.601.174-.339.142-.804-.106-1.483-.074-.242-.016-.572.04-.97.028-.136.055-.338.055-.537.003-.208-.043-.413-.133-.602-.206-.41-.55-.544-.864-.68-.312-.133-.598-.2-.797-.4-.214-.238-.404-.57-.663-.839a.42.42 0 00-.11-.135c.123-.806-.009-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.066-1.49 1.055-5.964-3.17-6.298-.166-.013-.326-.021-.48-.021zm0 1.257c.115 0 .237.004.359.012 2.986.237 2.269 3.748 2.201 5.522-.085 2.079.45 3.338 1.465 4.611.974 1.2 2.051 2.717 2.584 4.264.27.79.404 1.567.215 2.226-.062.218-.194.392-.304.548l-.135.205c-.11-.055-.217-.117-.326-.175-.56-.294-1.195-.528-1.862-.528-.63 0-1.244.173-1.74.474-.496.3-.997.544-1.497.544-.5 0-1.001-.243-1.497-.544a3.11 3.11 0 00-1.74-.474c-.667 0-1.302.234-1.862.528-.11.058-.217.12-.326.175l-.135-.205c-.11-.156-.242-.33-.304-.548-.189-.659-.055-1.436.215-2.226.533-1.547 1.61-3.064 2.584-4.264 1.015-1.273 1.55-2.532 1.465-4.611C10.235 5.017 9.52 1.506 12.504 1.506v-.249z" />
      </svg>
    ),
  },
  {
    label: "macOS",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    ),
  },
  {
    label: "Windows",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 88 88" fill="currentColor">
        <path d="M0 12.4L35.7 7.5l.016 34.4-35.7.2zm35.7 33.5.028 34.5L.03 75.5l-.003-29.8zm4.3-38.9L87.3 0v41.5l-47.3.4zm47.3 39.8-.014 41.3-47.3-6.7-.066-34.7z" />
      </svg>
    ),
  },
  {
    label: "Docker",
    icon: (
      <svg aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.301 2.612-2.176 1.252-1.402 1.994-2.965 2.53-4.311h.218c1.335 0 2.159-.53 2.61-1.122.271-.355.515-.83.317-1.168l-.195-.03z" />
      </svg>
    ),
  },
];

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
          className="cell-grid-2col"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* Left cell: identical to landing hero left cell */}
          <div
            className="hero-cell-overlay"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "2.5rem",
              minHeight: 520,
              textAlign: "center",
            }}
          >
            <Image
              src="/fukuii-hex-logo.svg"
              alt=""
              width={320}
              height={320}
              priority
              unoptimized
              aria-hidden="true"
              style={{ marginTop: "2rem" }}
            />

            <p
              style={{
                fontSize: "clamp(1.375rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                textAlign: "center",
                width: "100%",
                padding: "0 1.25rem",
                marginTop: "1.5rem",
              }}
            >
              The execution client built to{" "}
              <span style={{ color: "var(--accent)" }}>finance&apos;s standard.</span>
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "auto",
                paddingTop: "2rem",
                width: "100%",
              }}
            >
              <a
                href="https://github.com/chippr-robotics/fukuii/releases"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  border: "1px solid var(--accent)",
                  padding: "0.75rem 1.75rem",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                Download
              </a>
              <a
                href="https://github.com/chippr-robotics/fukuii"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "1px solid var(--border-strong)",
                  color: "var(--text-muted)",
                  padding: "0.75rem 1.5rem",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>

            <div className="os-platform-row" style={{ justifyContent: "center", marginBlock: "1rem 0" }}>
              {PLATFORMS.map((p) => (
                <span key={p.label} className="os-pill">
                  {p.icon}
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right cell: page-specific content */}
          <div
            className="hero-cell-overlay"
            style={{
              borderLeft: "1px solid var(--border)",
              padding: "clamp(2.5rem, 4vw, 3.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <span className="cell-label">{eyebrow}</span>
            <h1 className="section-title" style={{ marginBottom: 0 }}>
              {title}
            </h1>
            <p className="section-subtitle" style={{ margin: 0, maxWidth: "52ch" }}>
              {description}
            </p>
            {ctas && ctas.length > 0 && (
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
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
      </div>
    </section>
  );
}
