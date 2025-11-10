'use client';

import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { getSectionFromPath, getTabsForSection } from '@/lib/nav';

import BottomTabBar from './BottomTabBar';
import Header from './Header';
import MainNav from './MainNav';
import SecondaryNav from './SecondaryNav';

type AppShellProps = {
  children: ReactNode;
};

export const AppShell = ({ children }: AppShellProps) => {
  const pathname = usePathname();

  const section = useMemo(() => getSectionFromPath(pathname ?? '/'), [pathname]);
  const tabs = useMemo(() => getTabsForSection(section), [section]);

  return (
    <div className="min-h-screen bg-bg text-text lg:grid lg:grid-cols-[96px_1fr]">
      <MainNav />
      <div className="flex min-h-screen flex-1 flex-col">
        <Header title={section} />
        <SecondaryNav section={section} tabs={tabs} />
        <main id="content" role="main" className="flex-1 px-4 pb-24 pt-6 lg:px-8 lg:pb-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6">{children}</div>
        </main>
      </div>
      <BottomTabBar />
    </div>
  );
};

export default AppShell;
