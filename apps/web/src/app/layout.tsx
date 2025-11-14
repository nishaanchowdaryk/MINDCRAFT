import type { ReactNode } from 'react';
import { applyCssVars } from '@mindcraft/ui';

import AppShell from '@/components/layout/AppShell';

import './globals.css';

const cssVars = applyCssVars();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
      </head>
      <body className="bg-bg text-text">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
