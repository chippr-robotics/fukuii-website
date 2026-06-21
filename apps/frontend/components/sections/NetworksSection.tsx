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

function NetworkMeta({ net }: { net: Network }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", marginTop: "0.625rem" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
        {net.consensus}
      </span>
      {net.sync && (
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-subtle)" }}>
          {net.sync}
        </span>
      )}
      {net.fork && (
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-subtle)" }}>
          {net.fork}
        </span>
      )}
    </div>
  );
}

export function NetworksSection() {
  const primaryNet = NETWORKS.find((n) => n.wide)!;
  const narrowNets = NETWORKS.filter((n) => !n.wide);
  const N = narrowNets.length;
  // last row in a 2-col grid starts at this index
  const lastRowStart = N % 2 === 0 ? N - 2 : N - 1;

  return (
    <section className="section-fk" id="networks">
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "3rem" }}>
            <span className="cell-label">Networks</span>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              EVM networks.
            </h2>
            <p className="section-subtitle">
              Today: Ethereum Classic and Ethereum mainnet, each with their canonical testnet, running
              from a single binary with per-network chain definitions loaded at runtime. Tomorrow:
              Orbita-powered sidechains, OP-compatible L2 rollups, and private consortium chains,
              all inheriting the same EVM correctness guarantees. One runtime, many networks: the
              multi-instance architecture makes this composable rather than coincidental.
            </p>
          </div>
        </FadeIn>

        {/* Primary network — full-width bordered row */}
        <FadeIn delay={70}>
          <div
            style={{
              border: "1px solid var(--border)",
              borderBottom: "none",
              padding: "1.75rem",
              background: "var(--accent-soft)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "0.75rem",
                marginBottom: "0.25rem",
              }}
            >
              <div>
                <span className="cell-label" style={{ color: "var(--accent)" }}>
                  {primaryNet.badge}
                </span>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.01em",
                    marginBottom: 0,
                  }}
                >
                  {primaryNet.name}
                </h3>
              </div>
              <ChainIdBadge chainId={primaryNet.chainId} />
            </div>
            <NetworkMeta net={primaryNet} />
          </div>
        </FadeIn>

        {/* Other networks — 2-column cell grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            border: "1px solid var(--border)",
          }}
        >
          {narrowNets.map((net, j) => (
            <FadeIn key={net.name} delay={j * 70 + 140}>
              <div
                style={{
                  padding: "1.75rem",
                  height: "100%",
                  borderRight:
                    j % 2 === 0 && j + 1 < N
                      ? "1px solid var(--border)"
                      : undefined,
                  borderBottom:
                    j < lastRowStart ? "1px solid var(--border)" : undefined,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    marginBottom: "0.25rem",
                  }}
                >
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
                <NetworkMeta net={net} />
                {net.badge && (
                  <div style={{ marginTop: "1rem" }}>
                    <span className="badge-fk">{net.badge}</span>
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
