import { FadeIn } from "@/components/ui/FadeIn";

interface Network {
  name: string;
  chainId: number;
  consensus: string;
  sync?: string;
  fork?: string;
  badge?: string;
  badgeColor?: "green" | "gold" | "muted";
  scalaLang?: boolean;
}

const NETWORKS: Network[] = [
  {
    name: "Ethereum Classic",
    chainId: 61,
    consensus: "PoW / Ethash",
    sync: "SNAP sync",
    fork: "Olympia fork",
    badge: "Primary",
    badgeColor: "green",
    scalaLang: true,
  },
  {
    name: "Mordor",
    chainId: 63,
    consensus: "PoW / Ethash",
    sync: "SNAP sync",
    fork: "ETC testnet",
  },
  {
    name: "Ethereum Mainnet",
    chainId: 1,
    consensus: "PoS via Engine API",
    sync: "SNAP sync",
    fork: "Prague / Electra",
  },
  {
    name: "Sepolia",
    chainId: 11155111,
    consensus: "PoS via Engine API",
    fork: "Validated",
    badge: "Tested",
    badgeColor: "green",
  },
  {
    name: "Holesky",
    chainId: 17000,
    consensus: "PoS via Engine API",
    fork: "PoS testnet",
  },
  {
    name: "Custom / Consortium",
    chainId: 0,
    consensus: "Pluggable consensus",
    fork: "PoA sidechains",
    badge: "Coming via Orbita",
    badgeColor: "gold",
  },
];

function ChainIdBadge({ chainId }: { chainId: number }) {
  if (chainId === 0) {
    return (
      <span
        className="badge-fk"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
      >
        custom
      </span>
    );
  }
  return (
    <span
      className="badge-fk"
      style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
    >
      chain {chainId}
    </span>
  );
}

export function NetworksSection() {
  return (
    <section className="section-fk" id="networks">
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "3rem" }}>
            <h2 className="section-title">Supported Networks</h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {NETWORKS.map((net, i) => (
            <FadeIn key={net.name} delay={i * 70}>
              <div
                className="card-fk"
                style={{
                  padding: "1.5rem",
                  height: "100%",
                  borderTop: net.badge === "Primary" ? "2px solid var(--accent)" : undefined,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.875rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    {net.scalaLang && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 24,
                          height: 24,
                          borderRadius: 6,
                          background: "#DC322F",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "0.6875rem",
                          fontFamily: "var(--font-mono)",
                          flexShrink: 0,
                        }}
                        title="Scala"
                        aria-label="Scala"
                      >
                        Sc
                      </span>
                    )}
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {net.name}
                    </h3>
                  </div>
                  <ChainIdBadge chainId={net.chainId} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {net.consensus}
                  </span>
                  {net.sync && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--text-subtle)",
                      }}
                    >
                      {net.sync}
                    </span>
                  )}
                  {net.fork && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--text-subtle)",
                      }}
                    >
                      {net.fork}
                    </span>
                  )}
                </div>

                {net.badge && (
                  <div style={{ marginTop: "1rem" }}>
                    <span
                      className={`badge-fk ${
                        net.badgeColor === "green"
                          ? "badge-green"
                          : net.badgeColor === "gold"
                            ? "badge-gold"
                            : ""
                      }`}
                    >
                      {net.badge}
                    </span>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
