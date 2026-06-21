import * as React from 'react';

/**
 * Monospace pill badge carrying Fukuii's status vocabulary and labels.
 * @startingPoint section="Core" subtitle="Badges: Primary, In Progress, Planned, chain IDs" viewport="700x140"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Explicit color tone. */
  tone?: 'default' | 'green' | 'gold';
  /** Status word that maps to a tone (Primary/In Progress→green, Planned/Roadmap→default, Alpha→gold). Also used as label if no children. */
  status?: 'Primary' | 'In Progress' | 'Stable' | 'Planned' | 'Roadmap' | 'Alpha';
  /** Show a leading dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
