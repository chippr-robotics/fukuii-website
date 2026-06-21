import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Hover lift + glow. @default true */
  interactive?: boolean;
  /** Inner padding. @default "2rem" */
  padding?: string;
  children?: React.ReactNode;
}

/** Rounded surface card with hover lift and gold glow ring. */
export function Card(props: CardProps): JSX.Element;
