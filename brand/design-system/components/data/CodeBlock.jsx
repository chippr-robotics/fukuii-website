import React from 'react';

/**
 * Command / code panel (code-block). Near-black, monospace, with a copy
 * affordance. Pass `code` as a string; optional `label` chrome.
 */
export function CodeBlock({ code = '', label = null, style = {}, ...rest }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    try { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1400); } catch (e) {}
  };
  return (
    <div style={{ position: 'relative', ...style }} {...rest}>
      {label && (
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', textTransform: 'uppercase',
          letterSpacing: '0.1em', color: 'var(--text-subtle)', marginBottom: '0.5rem',
        }}>{label}</div>
      )}
      <button
        onClick={copy}
        style={{
          position: 'absolute', top: label ? '1.9rem' : '0.65rem', right: '0.65rem',
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', fontWeight: 600,
          padding: '0.25rem 0.55rem', cursor: 'pointer',
          color: copied ? 'var(--fk-green-3)' : 'var(--text-subtle)',
          background: copied ? 'rgba(80,160,96,0.1)' : 'rgba(0,0,0,0.3)',
          border: `1px solid ${copied ? 'rgba(80,160,96,0.4)' : 'var(--border)'}`,
          borderRadius: '6px', transition: 'all 150ms',
        }}
      >{copied ? 'Copied' : 'Copy'}</button>
      <pre className="code-block" style={{ margin: 0 }}><code>{code}</code></pre>
    </div>
  );
}
