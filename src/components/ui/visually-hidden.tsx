import * as Hidden from '@radix-ui/react-visually-hidden';
import { ReactNode } from 'react';

export default function VisuallyHidden({ children }: { children: ReactNode }) {
  return <Hidden.Root>{children}</Hidden.Root>;
}
