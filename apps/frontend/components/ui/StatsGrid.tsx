import { FadeIn } from "@/components/ui/FadeIn";

interface Stat {
  value: string;
  unit?: string;
  label: string;
  context?: string;
  contextColor?: "green" | "red" | "muted";
}

export function StatsGrid({
  stats,
  variant = "section",
}: {
  stats: Stat[];
  variant?: "hero" | "section";
}) {
  if (variant === "hero") {
    return (
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 100}>
            <div>
              <p className="text-4xl font-bold font-mono tracking-tight text-[var(--accent)] md:text-5xl">
                {s.value}
                {s.unit && (
                  <span className="ml-1 text-lg text-[var(--text-muted)] md:text-xl">
                    {s.unit}
                  </span>
                )}
              </p>
              <p className="mt-2 text-xs text-[var(--text-muted)]">
                {s.label}
              </p>
              {s.context && (
                <p
                  className={`mt-1 text-xs ${
                    s.contextColor === "green"
                      ? "text-[var(--fk-green-3)]"
                      : s.contextColor === "red"
                        ? "text-red-500"
                        : "text-[var(--text-muted)]"
                  }`}
                >
                  {s.context}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s, i) => (
        <FadeIn key={s.label} delay={i * 100} className="h-full">
          <div className="h-full rounded-xl border-t-2 border-[var(--accent)] bg-[var(--bg-elev)] p-6">
            <p className="text-3xl font-bold font-mono tracking-tight text-[var(--accent)] md:text-4xl">
              {s.value}
              {s.unit && (
                <span className="ml-1 text-sm text-[var(--text-muted)]">
                  {s.unit}
                </span>
              )}
            </p>
            <p className="mt-2 text-sm font-semibold">{s.label}</p>
            {s.context && (
              <p
                className={`mt-1 text-xs ${
                  s.contextColor === "green"
                    ? "text-[var(--fk-green-3)]"
                    : s.contextColor === "red"
                      ? "text-red-500"
                      : "text-[var(--text-muted)]"
                }`}
              >
                {s.context}
              </p>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
