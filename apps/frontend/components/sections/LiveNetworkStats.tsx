import { Suspense } from "react";
import { fetchHashrateTHs, fetchAllHashrateHistories } from "@/lib/api/hashrate";
import { fetchEtcStats } from "@/lib/api/etc-stats";
import { HashrateChart } from "@/components/ui/HashrateChart";
import { StatsGrid } from "@/components/ui/StatsGrid";

export const revalidate = 3600;

async function NetworkStatsInner() {
  const [hashrateTHs, histories, stats] = await Promise.all([
    fetchHashrateTHs(),
    fetchAllHashrateHistories(),
    fetchEtcStats(),
  ]);

  const priceChangeSign = stats.priceChange24h >= 0 ? "+" : "";
  const statCards = [
    {
      value: `${hashrateTHs.toFixed(1)}`,
      unit: "TH/s",
      label: "Network Hashrate",
      context: "Ethereum Classic PoW",
    },
    {
      value: stats.totalBlocks.toLocaleString(),
      label: "Total Blocks",
    },
    {
      value: (stats.totalTransactions / 1_000_000).toFixed(1),
      unit: "M",
      label: "Total Transactions",
    },
    {
      value: `$${stats.price.toFixed(2)}`,
      label: "ETC Price",
      context: `${priceChangeSign}${stats.priceChange24h.toFixed(2)}% 24h`,
      contextColor: stats.priceChange24h >= 0 ? ("green" as const) : ("red" as const),
    },
  ];

  return (
    <div>
      <StatsGrid stats={statCards} variant="section" />
      <HashrateChart histories={histories} currentTHs={hashrateTHs} />
    </div>
  );
}

function StatsFallback() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1rem",
      }}
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 88,
            borderRadius: "var(--radius-md)",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      ))}
    </div>
  );
}

export async function LiveNetworkStats() {
  return (
    <section className="section-fk" id="network-stats">
      <div className="container-fk">
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 className="section-title">ETC Network — Live</h2>
          <p
            className="section-subtitle"
            style={{ marginTop: "0.5rem" }}
          >
            Real-time Ethereum Classic network statistics via Blockscout.
          </p>
        </div>
        <Suspense fallback={<StatsFallback />}>
          <NetworkStatsInner />
        </Suspense>
      </div>
    </section>
  );
}
