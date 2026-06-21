import React from 'react';

/**
 * Text field — hairline input on the green-tinted card surface, green focus
 * ring. Set `as="textarea"` for multiline; `mono` for technical entry.
 */
export function Input({ label, as = 'input', error = null, mono = false, id, rows = 4, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `in-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const Tag = as === 'textarea' ? 'textarea' : 'input';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-subtle)',
        }}>{label}</label>
      )}
      <Tag
        id={fieldId}
        rows={as === 'textarea' ? rows : undefined}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        aria-invalid={!!error}
        style={{
          width: '100%',
          borderRadius: 'var(--radius-sm)',
          border: `1px solid ${error ? 'var(--color-error)' : (focus ? 'var(--accent)' : 'var(--border-strong)')}`,
          background: 'var(--bg-card)',
          padding: '0.75rem 1rem',
          fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
          fontSize: 'var(--text-base)',
          color: 'var(--text)',
          outline: 'none',
          boxShadow: focus && !error ? '0 0 0 3px var(--accent-soft)' : 'none',
          resize: as === 'textarea' ? 'none' : undefined,
          transition: 'border-color 150ms, box-shadow 150ms',
        }}
        {...rest}
      />
      {error && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-error)' }}>{error}</span>}
    </div>
  );
}
