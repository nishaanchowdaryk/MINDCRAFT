'use client';

import { useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavSection } from '@/lib/nav';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-text focus-visible:outline-offset-2';

type SecondaryNavProps = {
  section: NavSection;
  tabs: Array<{ label: string; href: string }>;
};

export const SecondaryNav = ({ section, tabs }: SecondaryNavProps) => {
  const pathname = usePathname();
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const activeHref = useMemo(() => {
    const exact = tabs.find((tab) => pathname === tab.href);
    if (exact) return exact.href;
    const prefix = tabs.find((tab) => pathname.startsWith(tab.href));
    return prefix?.href ?? tabs[0]?.href ?? '';
  }, [pathname, tabs]);

  useEffect(() => {
    tabRefs.current = [];
  }, [tabs]);

  useEffect(() => {
    if (!activeHref) return;
    const index = tabs.findIndex((tab) => tab.href === activeHref);
    const node = tabRefs.current[index];
    if (node) {
      node.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
    }
  }, [activeHref, tabs]);

  return (
    <div className="relative border-b border-border bg-bg">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-bg to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-bg to-transparent" aria-hidden="true" />
      <div className="overflow-x-auto">
        <nav
          aria-label={`Secondary navigation for ${section}`}
          className="min-w-full"
          role="navigation"
          onKeyDown={(event) => {
            const { key } = event;
            if (key !== 'ArrowRight' && key !== 'ArrowLeft') {
              return;
            }
            event.preventDefault();
            const refs = tabRefs.current;
            const activeIndex = refs.findIndex((ref) => ref === document.activeElement);
            const fallbackIndex = refs.findIndex((ref) => ref?.getAttribute('href') === activeHref);
            const currentIndex = activeIndex >= 0 ? activeIndex : fallbackIndex >= 0 ? fallbackIndex : 0;
            const offset = key === 'ArrowRight' ? 1 : -1;
            const nextIndex = (currentIndex + offset + refs.length) % refs.length;
            refs[nextIndex]?.focus();
            refs[nextIndex]?.scrollIntoView({ inline: 'center', block: 'nearest' });
          }}
        >
          <ul className="flex w-full gap-4 px-4 py-3 text-sm">
            {tabs.map((tab, index) => {
              const isActive = activeHref === tab.href;
              return (
                <li key={tab.href} className="flex-shrink-0">
                  <Link
                    href={tab.href}
                    aria-controls="content"
                    aria-current={isActive ? 'page' : undefined}
                    className={`inline-flex items-center whitespace-nowrap rounded-md px-2 pb-2 pt-1 text-sm transition ${focusRing} ${
                      isActive ? 'border-b-2 border-text font-medium text-text' : 'border-b-2 border-transparent text-muted'
                    }`}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                  >
                    {tab.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SecondaryNav;
