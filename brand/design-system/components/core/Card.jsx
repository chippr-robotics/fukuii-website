import React from 'react';

/**
 * Rounded surface card (card-fk) — soft green-tinted fill, hairline border,
 * lifts and gains a gold glow ring on hover. For editorial/feature content
 * that isn't part of the bordered cell grid.
 */
export function Card({ children, interactive = true, padding = '2rem', style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${hover ? 'var(--border-strong)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: hover ? 'var(--shadow-glow)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'border-color 200ms, box-shadow 200ms, transform 200ms',
        padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
