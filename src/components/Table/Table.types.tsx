import type { ReactNode } from 'react';

export interface TableProps {
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}
