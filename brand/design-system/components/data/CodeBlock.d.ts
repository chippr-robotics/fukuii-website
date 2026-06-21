import * as React from 'react';

/**
 * Monospace command/code panel with copy button.
 * @startingPoint section="Data" subtitle="Copyable command / code block" viewport="700x160"
 */
export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The code/command text. */
  code: string;
  /** Optional uppercase label above the block. */
  label?: string;
}

export function CodeBlock(props: CodeBlockProps): JSX.Element;
