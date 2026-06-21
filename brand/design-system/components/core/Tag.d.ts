import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colorway. @default "green" */
  tone?: 'green' | 'blue' | 'teal' | 'violet' | 'amber' | 'muted';
  children?: React.ReactNode;
}

/** Monospace protocol/capability tag for the compatibility matrix and feature lists. */
export function Tag(props: TagProps): JSX.Element;
