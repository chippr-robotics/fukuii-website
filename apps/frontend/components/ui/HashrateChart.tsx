"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { HashrateHistories, TimePeriod } from "@/lib/api/hashrate";

interface Props {
  histories: HashrateHistories;
  currentTHs: number;
}

const PERIODS: { key: TimePeriod; label: string }[] = [
  { key: "week", label: "7D" },
  { key: "month", label: "30D" },
  { key: "year", label: "1Y" },
  { key: "all", label: "All" },
];

export function HashrateChart({ histories, currentTHs }: Props) {
  const [period, setPeriod] = useState<TimePeriod>("week");
  const chartGreen = "#4d8a28";
  const data = histories[period];

  if (!data || data.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-elev)]">
        <p className="text-xs text-[var(--text-subtle)]">
          {currentTHs.toFixed(1)} TH/s — chart unavailable
        </p>
      </div>
    );
  }

  const min = Math.min(...data.map((d) => d.hashrateTHs));
  const max = Math.max(...data.map((d) => d.hashrateTHs));
  const pad = Math.max((max - min) * 0.2, 5);

  return (
    <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] px-4 pb-3 pt-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-subtle)]">
          Network Hashrate
        </p>
        <div className="flex gap-0.5 rounded-lg border border-[var(--border)] p-0.5">
          {PERIODS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setPeriod(key)}
              className={`rounded-md px-2.5 py-1 font-mono text-[10px] transition-colors duration-150 ${
                period === key
                  ? "bg-[var(--accent)] text-white font-semibold"
                  : "text-[var(--text-subtle)] hover:text-[var(--text-muted)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={120}>
        <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="hashrateGradFk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartGreen} stopOpacity={0.18} />
              <stop offset="95%" stopColor={chartGreen} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="label"
            tick={{ fill: "var(--text-subtle)", fontSize: 9, fontFamily: "monospace" }}
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={[Math.max(0, min - pad), max + pad]}
            tick={{ fill: "var(--text-subtle)", fontSize: 9, fontFamily: "monospace" }}
            axisLine={false}
            tickLine={false}
            width={36}
            tickFormatter={(v: number) => `${v.toFixed(0)}`}
          />
          <Tooltip
            contentStyle={{
              background: "var(--bg-elev)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              fontSize: 11,
              fontFamily: "monospace",
              color: "var(--text)",
            }}
            formatter={(value) => [`${Number(value).toFixed(1)} TH/s`, "Hashrate"]}
            labelStyle={{ color: "var(--text-subtle)", marginBottom: 2 }}
            cursor={{ stroke: "var(--accent)", strokeWidth: 1, strokeDasharray: "4 2" }}
          />
          <Area
            type="monotone"
            dataKey="hashrateTHs"
            stroke={chartGreen}
            strokeWidth={1.5}
            fill="url(#hashrateGradFk)"
            dot={false}
            activeDot={{ r: 3, fill: chartGreen, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
