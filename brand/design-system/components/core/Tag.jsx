import React from 'react';

const TONES = ['green', 'blue', 'teal', 'violet', 'amber', 'muted'];

/**
 * Protocol / capability tag — small monospace pill used in the protocol
 * compatibility matrix and feature lists. Colorways: green, blue, teal,
 * violet, amber, muted.
 */
export function Tag({ children, tone = 'green', style = {}, ...rest }) {
  const t = TONES.includes(tone) ? tone : 'green';
  return (
    <span className={`proto-tag proto-tag--${t}`} style={style} {...rest}>
      {children}
    </span>
  );
}
