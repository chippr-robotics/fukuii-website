import React from 'react';

const TONES = {
  default:  { fg: 'var(--text-muted)',  bg: 'var(--bg-card)',                bd: 'var(--border)' },
  green:    { fg: 'var(--fk-green-3)',   bg: 'rgba(80,160,96,0.08)',          bd: 'rgba(80,160,96,0.4)' },
  gold:     { fg: 'var(--fk-gold-2)',    bg: 'rgba(214,181,107,0.08)',        bd: 'rgba(214,181,107,0.4)' },
};

// Roadmap / status vocabulary → tone mapping
const STATUS = { Primary: 'green', 'In Progress': 'green', Stable: 'green', Planned: 'default', Roadmap: 'default', Alpha: 'gold' };

/**
 * Monospace pill badge — the Fukuii status vocabulary (Primary, In Progress,
 * Planned, Roadmap) and chain/capability labels. Pass `tone` directly or a
 * `status` string that maps to the right tone.
 */
export function Badge({ children, tone, status, dot = false, style = {}, ...rest }) {
  const resolved = tone || (status && STATUS[status]) || 'default';
  const t = TONES[resolved] || TONES.default;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        fontWeight: 500,
        letterSpacing: '0.04em',
        padding: '0.25rem 0.625rem',
        borderRadius: 'var(--radius-pill)',
        border: `1px solid ${t.bd}`,
        background: t.bg,
        color: t.fg,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor', flex: 'none' }} />}
      {children || status}
    </span>
  );
}
