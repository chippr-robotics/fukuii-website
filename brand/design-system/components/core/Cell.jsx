import React from 'react';

/**
 * Cell — the brand's signature container: sharp corners, hairline border,
 * a documentary mono `label` above the content, and an optional `cta` bar.
 * Compose several inside a CSS grid with gap:1px (use the `.cell-grid`
 * class or `CellGrid`) to get the geth-inspired shared-edge layout.
 */
export function Cell({ children, label, cta, ctaHref, elevated = false, accent = false, padding = '2rem', style = {}, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: accent ? 'var(--accent-soft)' : (elevated ? 'var(--bg-elev)' : 'var(--bg)'),
        ...style,
      }}
      {...rest}
    >
      <div style={{ padding, flex: 1 }}>
        {label && <span className="cell-label">{label}</span>}
        {children}
      </div>
      {cta && (
        <a className="cell-cta" href={ctaHref || '#'}>
          {cta}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      )}
    </div>
  );
}

/** Wrapper that lays cells out with shared 1px borders (the .cell-grid look). */
export function CellGrid({ children, columns = 2, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1px',
        background: 'var(--border)',
        border: '1px solid var(--border)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
