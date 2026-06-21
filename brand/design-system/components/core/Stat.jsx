import React from 'react';

/**
 * Status-strip statistic — a large accent-green number beside a mono label.
 * Used in the metrics band (tests passing, networks supported, …).
 */
export function Stat({ value, label, style = {}, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', ...style }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: 'var(--text-xl)',
        lineHeight: 1,
        color: 'var(--accent)',
        fontVariantNumeric: 'tabular-nums',
      }}>{value}</span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-subtle)',
        letterSpacing: '0.03em',
      }}>{label}</span>
    </div>
  );
}
