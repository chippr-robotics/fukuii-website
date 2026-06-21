import { FadeIn } from "@/components/ui/FadeIn";

interface NetEntry {
  name: string;
  chainId: number;
  tags: string[];
}

interface NetGroup {
  family: string;
  consensus: string;
  badgeLabel: string;
  badgeClass: string;
  accentColor: string;
  networks: NetEntry[];
}

const ETC_GROUP: NetGroup = {
  family: "Ethereum Classic",
  consensus: "Proof-of-Work / Ethash",
  badgeLabel: "PoW",
  badgeClass: "badge-fk badge-green",
  accentColor: "var(--fk-green-3)",
  networks: [
    { name: "Ethereum Classic", chainId: 61, tags: ["SNAP sync", "Olympia fork"] },
    { name: "Mordor",           chainId: 63, tags: ["ETC testnet"] },
  ],
};

const ETH_GROUP: NetGroup = {
  family: "Ethereum",
  consensus: "Proof-of-Stake / Engine API",
  badgeLabel: "PoS",
  badgeClass: "badge-fk badge-violet",
  accentColor: "#a78bfa",
  networks: [
    { name: "Ethereum Mainnet", chainId: 1,        tags: ["SNAP sync", "Fulu / Osaka (Fusaka)"] },
    { name: "Sepolia",          chainId: 11155111,  tags: ["ETH testnet"] },
    { name: "Holesky",          chainId: 17000,     tags: ["PoS testnet"] },
  ],
};

const PLANNED = [
  { label: "Private Chains", desc: "Custom genesis, pluggable consensus" },
  { label: "Sidechains",     desc: "Orbita-powered, checkpoint PoA" },
  { label: "L2 Rollups",     desc: "OP-compatible block derivation" },
];

function NetworkGroupBox({ group, borderLeft }: { group: NetGroup; borderLeft?: boolean }) {
  return (
    <div
      style={{
        borderLeft: borderLeft ? "1px solid var(--border)" : undefined,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Group header */}
      <div
        style={{
          padding: "1.5rem 1.75rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "0.75rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div>
          <span className="cell-label" style={{ color: group.accentColor }}>
            {group.consensus}
          </span>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: group.accentColor,
              marginBottom: 0,
            }}
          >
            {group.family}
          </h3>
        </div>
        <span className={group.badgeClass}>{group.badgeLabel}</span>
      </div>

      {/* Network rows */}
      {group.networks.map((net) => (
        <div
          key={net.name}
          style={{
            padding: "1.25rem 1.75rem",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <span
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "var(--text)",
                letterSpacing: "-0.01em",
              }}
            >
              {net.name}
            </span>
            {net.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-subtle)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className="badge-fk"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", whiteSpace: "nowrap", flexShrink: 0 }}
          >
            {net.chainId === 0 ? "custom" : `chain ${net.chainId}`}
          </span>
        </div>
      ))}
    </div>
  );
}

function PlannedBox({ item, divider }: { item: { label: string; desc: string }; divider?: boolean }) {
  return (
    <div
      style={{
        padding: "1.5rem 1.75rem",
        borderRight: divider ? "1px solid var(--border)" : undefined,
      }}
    >
      <span className="cell-label">Planned</span>
      <p
        style={{
          fontSize: "0.9375rem",
          fontWeight: 600,
          color: "var(--text)",
          letterSpacing: "-0.01em",
          marginBottom: "0.375rem",
        }}
      >
        {item.label}
      </p>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--text-subtle)",
        }}
      >
        {item.desc}
      </p>
    </div>
  );
}

export function NetworksSection() {
  return (
    <section className="section-fk section-bordered" id="networks">
      <div className="container-fk">
        <FadeIn>
          <div style={{ marginBottom: "3rem" }}>
            <span className="cell-label">Networks</span>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Supported Ethereum Virtual Machine Networks
            </h2>
            <p className="section-subtitle">
              Today: Ethereum Classic and Ethereum mainnet, each with their canonical testnet, running
              from a single binary with per-network chain definitions loaded at runtime. Tomorrow:
              Orbita-powered sidechains, OP-compatible L2 rollups, and private consortium chains,
              all inheriting the same EVM correctness guarantees.
            </p>
          </div>
        </FadeIn>

        {/* Two protocol boxes */}
        <FadeIn delay={70}>
          <div className="cell-grid-2col" style={{ border: "1px solid var(--border)", marginBottom: "1px" }}>
            <NetworkGroupBox group={ETC_GROUP} />
            <NetworkGroupBox group={ETH_GROUP} borderLeft />
          </div>
        </FadeIn>

        {/* Planned support */}
        <FadeIn delay={140}>
          <div
            style={{
              border: "1px solid var(--border)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
          >
            {PLANNED.map((item, i) => (
              <PlannedBox key={item.label} item={item} divider={i < 2} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
