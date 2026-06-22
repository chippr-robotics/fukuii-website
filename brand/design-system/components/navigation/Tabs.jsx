import React from 'react';

/**
 * Underline tab bar (tab-btn) — green active indicator. Controlled or
 * uncontrolled; render panels yourself keyed on the active id.
 */
export function Tabs({ items = [], value, defaultValue, onChange, style = {} }) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = (id) => { if (value === undefined) setInternal(id); onChange && onChange(id); };
  return (
    <div role="tablist" style={{ display: 'flex', gap: '0.25rem', borderBottom: '1px solid var(--border)', overflowX: 'auto', ...style }}>
      {items.map((it) => (
        <button
          key={it.id}
          type="button"
          role="tab"
          aria-selected={it.id === active}
          className={`tab-btn${it.id === active ? ' tab-active' : ''}`}
          onClick={() => select(it.id)}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
