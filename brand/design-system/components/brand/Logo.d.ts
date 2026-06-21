import * as React from 'react';

/**
 * The Fukuii wordmark lockup with mono sublabel, optionally the hex mascot.
 * @startingPoint section="Brand" subtitle="FUKUII wordmark lockup + hex mascot" viewport="700x220"
 */
export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image src for the hex mascot logo (assets/logo/fukuii-hex-logo.png). Omit for wordmark only. */
  hex?: string;
  /** Mono sublabel. @default "Ethereum Virtual Machine Client" */
  sublabel?: string;
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stack mark above wordmark (square / hero). @default false */
  stacked?: boolean;
}

export function Logo(props: LogoProps): JSX.Element;
