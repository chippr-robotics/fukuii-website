import type { Metadata } from "next";
import NavHeader from "@/components/sections/NavHeader";
import { FooterSection } from "@/components/sections/FooterSection";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Runtime Stack",
  description:
    "Full dependency manifest for Fukuii: Scala 3.3 LTS, JDK 25, Apache Pekko, RocksDB 10.x, and more. Every dependency ships in a signed CycloneDX SBOM.",
};

interface StackRow {
  readonly layer: string;
  readonly library: string;
  readonly version: string;
}

const STACK_ROWS: readonly StackRow[] = [
  { layer: "Language", library: "Scala 3 LTS", version: "3.3.8" },
  { layer: "JDK", library: "OpenJDK", version: "25.0.3" },
  { layer: "Actor system", library: "Apache Pekko (actor + typed + streams)", version: "1.6.0" },
  { layer: "HTTP / WebSocket / GraphQL", library: "Apache Pekko HTTP", version: "1.3.0" },
  { layer: "GraphQL engine", library: "Sangria (EIP-1767)", version: "4.2.18" },
  { layer: "Storage", library: "RocksDB JNI", version: "10.10.1.1" },
  { layer: "In-memory cache", library: "Caffeine / Scaffeine", version: "3.2.4 / 5.3.0" },
  { layer: "Crypto", library: "Bouncy Castle", version: "1.84" },
  { layer: "BLS12-381", library: "Hyperledger Besu BLS", version: "1.0.0" },
  { layer: "KZG / EIP-4844", library: "jc-kzg-4844", version: "1.0.0" },
  { layer: "Effects", library: "Cats Effect 3", version: "3.6.3" },
  { layer: "Streaming", library: "fs2", version: "3.12.2" },
  { layer: "FP core", library: "Cats", version: "2.13.0" },
  { layer: "Codec / RLP", library: "scodec-core / scodec-bits", version: "2.3.3 / 1.2.1" },
  { layer: "Networking", library: "Netty", version: "4.1.131.Final" },
  { layer: "Network discovery", library: "UPnP via JUPnP", version: "3.0.4" },
  { layer: "Serialization", library: "json4s / circe", version: "4.0.7 / 0.14.15" },
  { layer: "Metrics", library: "Prometheus Java client", version: "1.3.10" },
  { layer: "Metrics", library: "Micrometer (JMX + Prometheus)", version: "1.16.6" },
  { layer: "Observability", library: "Kamon", version: "2.8.1" },
  { layer: "Logging", library: "Logback / scala-logging / log4cats", version: "1.5.34 / 3.9.6 / 2.8.0" },
  { layer: "Compression", library: "snappy-java", version: "1.1.10.8" },
] as const;

const CALLOUTS = [
  "RocksDB 10.10.1.1: Meta released 10.x in late 2025, current bleeding edge.",
  "Pekko 1.6.0: latest stable Akka successor under Apache governance.",
  "Scala 3.3.8 LTS: updated June 2026, the most recent patch release.",
  "JDK 25: current LTS, released September 2025.",
  "Cats Effect 3 + fs2: fully migrated off Monix.",
];

export default function StackPage() {
  return (
    <main>
      <NavHeader />
      <section className="section-fk">
        <div className="container-fk">
          <FadeIn>
            <div style={{ marginBottom: "2.5rem" }}>
              <span className="cell-label">Runtime stack</span>
              <h1 className="section-title" style={{ marginBottom: "0.75rem" }}>
                Runtime stack
              </h1>
              <p className="section-subtitle">
                A current stack, on purpose. Production infrastructure runs on supported foundations,
                not frozen ones. Scala 3.3 LTS, JDK 25 LTS, RocksDB 10.x, maintained to the latest
                stable across the board. Every dependency ships in a signed CycloneDX SBOM with each
                release.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div
              style={{
                border: "1px solid var(--border)",
                overflow: "hidden",
                marginBottom: "2rem",
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 2fr 1fr",
                  background: "var(--bg-card)",
                  borderBottom: "1px solid var(--border)",
                  padding: "0.625rem 1.25rem",
                }}
              >
                {["Layer", "Library", "Version"].map((col) => (
                  <span
                    key={col}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--text-subtle)",
                    }}
                  >
                    {col}
                  </span>
                ))}
              </div>

              {STACK_ROWS.map((row, i) => (
                <div
                  key={`${row.layer}-${row.library}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.2fr 2fr 1fr",
                    padding: "0.75rem 1.25rem",
                    borderBottom: i < STACK_ROWS.length - 1 ? "1px solid var(--border)" : "none",
                    background: i % 2 === 0 ? "transparent" : "var(--bg-card)",
                    gap: "0.75rem",
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.layer}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.library}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.version}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div
              style={{
                border: "1px solid var(--border)",
                padding: "1.5rem 2rem",
              }}
            >
              <span className="cell-label">Notable versions</span>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  marginTop: "0.75rem",
                }}
              >
                {CALLOUTS.map((note) => (
                  <li
                    key={note}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        flexShrink: 0,
                        marginTop: "0.05em",
                      }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
