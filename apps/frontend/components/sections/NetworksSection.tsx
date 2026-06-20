import { FadeIn } from "@/components/ui/FadeIn";

interface Network {
  name: string;
  chainId: number;
  consensus: string;
  sync?: string;
  fork?: string;
  badge?: string;
  badgeColor?: "green" | "gold" | "muted";
  wide?: boolean;
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
    wide: true,
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
    fork: "ETH testnet",
  },
  {
    name: "Holesky",
    chainId: 17000,
    consensus: "PoS via Engine API",
    fork: "PoS testnet",
  },
  {
    name: "Private & L2 Chains",
    chainId: 0,
    consensus: "Pluggable consensus",
    fork: "PoA · Orbita · OP-compatible",
    badge: "Roadmap",
    badgeColor: "muted",
  },
];

function ChainIdBadge({ chainId }: { chainId: number }) {
  return (
    <span
      className="badge-fk"
      style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}
    >
      {chainId === 0 ? "custom" : `chain ${chainId}`}
    </span>
  );
}

export function NetworksSection() {
  return (
    <section className="section-fk" id="networks">
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "3rem", maxWidth: "60ch" }}>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              EVM networks.
            </h2>
            <p className="section-subtitle">
              Today: the largest PoW EVM and the largest PoS EVM, each with its testnet.
              Tomorrow: sidechains, L2 rollups, and private chains from the same binary.
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
          {NETWORKS.map((net, i) => (
            <FadeIn key={net.name} delay={i * 70}>
              <div
                className="card-fk"
                style={{
                  padding: "1.5rem",
                  height: "100%",
                  borderTop: net.badge === "Primary" ? "2px solid var(--accent)" : undefined,
                  gridColumn: net.wide ? "span 2" : undefined,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.875rem" }}>
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
                      className={`badge-fk${
                        net.badgeColor === "green"
                          ? " badge-green"
                          : net.badgeColor === "gold"
                            ? " badge-gold"
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
