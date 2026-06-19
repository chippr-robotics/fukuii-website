// ETC network hashrate — current value + multi-timeframe history
// ISR: revalidates at most once per hour (not per page request)
// Sources:
//   Current:  Blockscout /api/v2/blocks/{height} → difficulty / avg_block_time → TH/s
//   History:  same formula, 14 sampled blocks per timeframe, all fetched in parallel

const BLOCKSCOUT = "https://etc.blockscout.com/api/v2";
const ETC_AVG_BLOCK_TIME_S = 13;

export type TimePeriod = "week" | "month" | "year" | "all";

export interface HashratePoint {
  label: string;
  hashrateTHs: number;
}

export type HashrateHistories = Record<TimePeriod, HashratePoint[]>;

// ─── Current hashrate (Blockscout difficulty) ─────────────────────────────────

const FALLBACK_THS = 210;

interface BlockscoutStats {
  total_blocks: string;
}

export async function fetchHashrateTHs(): Promise<number> {
  try {
    const statsRes = await fetch(`${BLOCKSCOUT}/stats`, {
      next: { revalidate: 3600 },
    });
    if (!statsRes.ok) throw new Error(`stats ${statsRes.status}`);
    const stats: BlockscoutStats = await statsRes.json();
    const currentHeight = parseInt(stats.total_blocks, 10);
    if (!currentHeight) throw new Error("no height");
    const block = await fetchBlock(currentHeight);
    if (!block) throw new Error("no block");
    const difficulty = parseFloat(block.difficulty);
    if (!difficulty) throw new Error("no difficulty");
    return Math.round((difficulty / ETC_AVG_BLOCK_TIME_S / 1e12) * 10) / 10;
  } catch {
    return FALLBACK_THS;
  }
}

// ─── Historical hashrate (Blockscout blocks) ─────────────────────────────────

interface BlockscoutBlock {
  difficulty: string;
  timestamp: string;
  height: number;
}

const NUM_POINTS = 14;

// How many blocks span each timeframe
const TIMEFRAME_BLOCKS: Record<TimePeriod, (currentHeight: number) => number> =
  {
    week: () => Math.round((7 * 24 * 3600) / ETC_AVG_BLOCK_TIME_S),
    month: () => Math.round((30 * 24 * 3600) / ETC_AVG_BLOCK_TIME_S),
    year: () => Math.round((365 * 24 * 3600) / ETC_AVG_BLOCK_TIME_S),
    all: (h) => h, // genesis → now
  };

function formatLabel(isoTimestamp: string, period: TimePeriod): string {
  const d = new Date(isoTimestamp);
  const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  const day = d.getUTCDate();
  const year = d.getUTCFullYear();
  const hours = d.getUTCHours();

  if (period === "week") {
    return hours === 0 ? `${month} ${day}` : `${month} ${day} 12:00`;
  }
  if (period === "month") {
    return `${month} ${day}`;
  }
  if (period === "year") {
    return `${month} '${String(year).slice(2)}`;
  }
  // all: show year + month for older points, year only for well-separated points
  return `${month} '${String(year).slice(2)}`;
}

async function fetchBlock(height: number): Promise<BlockscoutBlock | null> {
  try {
    const res = await fetch(`${BLOCKSCOUT}/blocks/${height}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function fetchHashrateHistoryFor(
  period: TimePeriod,
  currentHeight: number,
): Promise<HashratePoint[]> {
  const totalBlocks = TIMEFRAME_BLOCKS[period](currentHeight);
  const intervalBlocks = Math.floor(totalBlocks / (NUM_POINTS - 1));

  const blocks = await Promise.all(
    Array.from({ length: NUM_POINTS }, (_, i) => {
      // oldest first: i=0 is furthest back, i=13 is current
      const stepsBack = NUM_POINTS - 1 - i;
      const height = Math.max(1, currentHeight - stepsBack * intervalBlocks);
      return fetchBlock(height);
    }),
  );

  const points: HashratePoint[] = [];
  for (const block of blocks) {
    if (!block) continue;
    const difficulty = parseFloat(block.difficulty);
    if (!difficulty) continue;
    const hashrateTHs =
      Math.round((difficulty / ETC_AVG_BLOCK_TIME_S / 1e12) * 10) / 10;
    points.push({ label: formatLabel(block.timestamp, period), hashrateTHs });
  }
  return points;
}

// Fetches all four timeframes in parallel — called once at ISR build time
export async function fetchAllHashrateHistories(): Promise<HashrateHistories> {
  // Get current block height first
  let currentHeight = 0;
  try {
    const res = await fetch(`${BLOCKSCOUT}/stats`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data: BlockscoutStats = await res.json();
      currentHeight = parseInt(data.total_blocks, 10);
    }
  } catch {
    /* fall through — empty histories */
  }

  if (!currentHeight) {
    return { week: [], month: [], year: [], all: [] };
  }

  const [week, month, year, all] = await Promise.all([
    fetchHashrateHistoryFor("week", currentHeight),
    fetchHashrateHistoryFor("month", currentHeight),
    fetchHashrateHistoryFor("year", currentHeight),
    fetchHashrateHistoryFor("all", currentHeight),
  ]);

  return { week, month, year, all };
}
