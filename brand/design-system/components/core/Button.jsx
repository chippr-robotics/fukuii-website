import React from 'react';

const SIZES = {
  sm: { padding: '0.5rem 1.25rem', fontSize: 'var(--text-sm)' },
  md: { padding: '0.75rem 1.75rem', fontSize: 'var(--text-base)' },
  lg: { padding: '0.875rem 2rem', fontSize: 'var(--text-md)' },
};

/**
 * Fukuii button. `primary` is a solid green action (sharp corners, matching
 * the hero + cell aesthetic); `gradient` is the green→gold emphasis CTA;
 * `secondary` is a bordered, quiet action.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  rounded = false,
  leftIcon = null,
  rightIcon = null,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: '#fff',
      border: '1px solid var(--accent)',
      filter: hover && !disabled ? 'brightness(1.08)' : 'none',
    },
    gradient: {
      background: 'var(--accent)',
      color: '#fff',
      border: '1px solid var(--accent)',
      filter: hover && !disabled ? 'brightness(1.08)' : 'none',
      boxShadow: hover && !disabled ? '0 6px 26px -8px rgba(80,160,96,0.5)' : '0 4px 18px -8px rgba(80,160,96,0.4)',
    },
    secondary: {
      background: 'var(--bg-card)',
      color: hover && !disabled ? 'var(--text)' : 'var(--text-muted)',
      border: `1px solid ${hover && !disabled ? 'var(--border-strong)' : 'var(--border)'}`,
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--accent)' : 'var(--text-muted)',
      border: `1px solid ${hover && !disabled ? 'var(--accent)' : 'var(--border)'}`,
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 700,
    lineHeight: 1.1,
    textDecoration: 'none',
    borderRadius: rounded || variant === 'gradient' ? 'var(--radius-md)' : '0',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    whiteSpace: 'nowrap',
    transition: 'all var(--dur-base) var(--ease-out)',
    ...variants[variant],
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };
  const content = <>{leftIcon}{children}{rightIcon}</>;

  if (href && !disabled) {
    return <a href={href} style={base} {...handlers} {...rest}>{content}</a>;
  }
  return <button type="button" disabled={disabled} style={base} {...handlers} {...rest}>{content}</button>;
}
