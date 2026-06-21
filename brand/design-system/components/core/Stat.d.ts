import * as React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The metric value (rendered in accent green, tabular). */
  value: React.ReactNode;
  /** Mono label beside the value. */
  label: string;
}

/** Status-strip metric — accent number + mono label, inline. */
export function Stat(props: StatProps): JSX.Element;
