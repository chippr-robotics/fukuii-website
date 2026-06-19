// Dual-source ETC network stats from Blockscout + CoinGecko
// Fetched server-side with ISR (revalidate every 10 minutes)

export interface EtcStats {
  // Blockscout
  price: number;
  priceChange24h: number;
  marketCap: number;
  totalBlocks: number;
  totalTransactions: number;
  totalAddresses: number;
  averageBlockTimeMs: number;
  transactionsToday: number;
  gasPriceAvg: number;
  networkUtilization: number;
  // CoinGecko
  marketCapRank: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number;
  ath: number;
}

const FALLBACK: EtcStats = {
  price: 8.99,
  priceChange24h: 0,
  marketCap: 1_400_000_000,
  totalBlocks: 24_182_000,
  totalTransactions: 142_750_000,
  totalAddresses: 601_000_000,
  averageBlockTimeMs: 13_000,
  transactionsToday: 9_600,
  gasPriceAvg: 8.0,
  networkUtilization: 0.35,
  marketCapRank: 57,
  volume24h: 73_000_000,
  circulatingSupply: 155_900_000,
  maxSupply: 210_700_000,
  ath: 167.09,
};

interface BlockscoutStatsResponse {
  coin_price: string;
  coin_price_change_percentage: number;
  market_cap: string;
  total_blocks: string;
  total_transactions: string;
  total_addresses: string;
  average_block_time: number;
  transactions_today: string;
  gas_prices: { slow: number; average: number; fast: number };
  network_utilization_percentage: number;
}

interface CoinGeckoResponse {
  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
    market_cap_rank: number;
    total_volume: { usd: number };
    circulating_supply: number;
    max_supply: number | null;
    price_change_percentage_24h: number;
    ath: { usd: number };
  };
}

async function fetchBlockscout(): Promise<Partial<EtcStats>> {
  const res = await fetch("https://etc.blockscout.com/api/v2/stats", {
    next: { revalidate: 600 },
  });
  if (!res.ok) throw new Error(`Blockscout ${res.status}`);
  const data: BlockscoutStatsResponse = await res.json();

  return {
    price: parseFloat(data.coin_price) || FALLBACK.price,
    priceChange24h: data.coin_price_change_percentage ?? 0,
    marketCap: parseFloat(data.market_cap) || FALLBACK.marketCap,
    totalBlocks: parseInt(data.total_blocks, 10) || FALLBACK.totalBlocks,
    totalTransactions:
      parseInt(data.total_transactions, 10) || FALLBACK.totalTransactions,
    totalAddresses:
      parseInt(data.total_addresses, 10) || FALLBACK.totalAddresses,
    averageBlockTimeMs: data.average_block_time || FALLBACK.averageBlockTimeMs,
    transactionsToday:
      parseInt(data.transactions_today, 10) || FALLBACK.transactionsToday,
    gasPriceAvg: data.gas_prices?.average ?? FALLBACK.gasPriceAvg,
    networkUtilization:
      data.network_utilization_percentage ?? FALLBACK.networkUtilization,
  };
}

async function fetchCoinGecko(): Promise<Partial<EtcStats>> {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/ethereum-classic?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false",
    { next: { revalidate: 600 } },
  );
  if (!res.ok) throw new Error(`CoinGecko ${res.status}`);
  const data: CoinGeckoResponse = await res.json();
  const md = data.market_data;

  return {
    price: md.current_price?.usd,
    priceChange24h: md.price_change_percentage_24h,
    marketCap: md.market_cap?.usd,
    marketCapRank: md.market_cap_rank,
    volume24h: md.total_volume?.usd,
    circulatingSupply: md.circulating_supply,
    maxSupply: md.max_supply ?? FALLBACK.maxSupply,
    ath: md.ath?.usd,
  };
}

export async function fetchEtcStats(): Promise<EtcStats> {
  const [blockscoutResult, coingeckoResult] = await Promise.allSettled([
    fetchBlockscout(),
    fetchCoinGecko(),
  ]);

  const blockscout =
    blockscoutResult.status === "fulfilled" ? blockscoutResult.value : {};
  const coingecko =
    coingeckoResult.status === "fulfilled" ? coingeckoResult.value : {};

  // CoinGecko fields take priority where both sources overlap (price, marketCap)
  return {
    ...FALLBACK,
    ...blockscout,
    ...coingecko,
  };
}
