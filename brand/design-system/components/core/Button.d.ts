import * as React from 'react';

/**
 * Action control — solid green primary, solid-green emphasis CTA, or bordered.
 * @startingPoint section="Core" subtitle="Buttons: primary, gradient, secondary, ghost" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual weight. @default "primary" */
  variant?: 'primary' | 'gradient' | 'secondary' | 'ghost';
  /** Control size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Render as a link. */
  href?: string;
  /** Disable interaction and dim. @default false */
  disabled?: boolean;
  /** Use a rounded (radius-md) corner instead of sharp. @default false */
  rounded?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
