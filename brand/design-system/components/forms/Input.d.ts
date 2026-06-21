import * as React from 'react';

/**
 * Text field with hairline border and green focus ring.
 * @startingPoint section="Forms" subtitle="Input + textarea, label, mono, error" viewport="700x200"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  /** Uppercase mono label above the field. */
  label?: string;
  /** Render a multiline textarea. @default "input" */
  as?: 'input' | 'textarea';
  /** Error message — red border + text. */
  error?: string;
  /** Monospace value (ports, hex, chain IDs). @default false */
  mono?: boolean;
  /** Textarea rows. @default 4 */
  rows?: number;
}

export function Input(props: InputProps): JSX.Element;
