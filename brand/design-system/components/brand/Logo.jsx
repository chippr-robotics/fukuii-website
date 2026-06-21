import React from 'react';

/**
 * Fukuii lockup — the FUKUII wordmark with its mono sublabel. Optionally
 * shows the hex mascot logo (pass `hex` with the image src). The wordmark
 * is DM Sans 700 with wide tracking.
 */
export function Logo({ hex = null, sublabel = 'Ethereum Virtual Machine Client', size = 'md', stacked = false, style = {}, ...rest }) {
  const sizes = {
    sm: { word: '0.9375rem', sub: '0.5625rem', img: 28, track: '0.06em' },
    md: { word: '1.0625rem', sub: '0.625rem', img: 36, track: '0.06em' },
    lg: { word: '2.25rem', sub: '0.625rem', img: 96, track: '0.22em' },
  };
  const s = sizes[size] || sizes.md;
  const wordmark = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', textAlign: stacked ? 'center' : 'left' }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: s.word, letterSpacing: s.track, color: 'var(--text)', lineHeight: 1.1 }}>FUKUII</span>
      {sublabel && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: s.sub, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-subtle)', lineHeight: 1 }}>{sublabel}</span>
      )}
    </div>
  );
  return (
    <div style={{ display: 'inline-flex', flexDirection: stacked ? 'column' : 'row', alignItems: 'center', gap: stacked ? '1rem' : '0.625rem', ...style }} {...rest}>
      {hex && <img src={hex} alt="Fukuii" width={s.img} height={s.img} style={{ width: s.img, height: s.img, objectFit: 'contain' }} />}
      {wordmark}
    </div>
  );
}
