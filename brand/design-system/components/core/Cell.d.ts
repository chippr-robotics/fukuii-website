import * as React from 'react';

/**
 * The brand's signature bordered container — sharp corners, mono label, optional CTA bar.
 * @startingPoint section="Core" subtitle="Cell grid — geth-inspired shared-edge layout" viewport="700x260"
 */
export interface CellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Documentary mono label above the content. */
  label?: string;
  /** CTA bar text at the bottom of the cell. */
  cta?: string;
  /** Href for the CTA bar. */
  ctaHref?: string;
  /** Use the elevated surface fill. @default false */
  elevated?: boolean;
  /** Tint with accent-soft (e.g. a "Primary" cell). @default false */
  accent?: boolean;
  /** Inner padding. @default "2rem" */
  padding?: string;
  children?: React.ReactNode;
}

export interface CellGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns. @default 2 */
  columns?: number;
  children?: React.ReactNode;
}

export function Cell(props: CellProps): JSX.Element;
export function CellGrid(props: CellGridProps): JSX.Element;
