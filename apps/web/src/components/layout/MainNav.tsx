'use client';

import { useMemo, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_ITEMS, getActiveNavHref } from '@/lib/nav';

const IconPlaceholder = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={`h-6 w-6 ${className ?? ''}`.trim()}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="4" y="4" width="16" height="16" rx="4" ry="4" />
  </svg>
);

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-text focus-visible:outline-offset-2';

export const MainNav = () => {
  const pathname = usePathname();
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const activeHref = useMemo(() => getActiveNavHref(pathname), [pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className="hidden h-full w-24 flex-col border-r border-border bg-surface py-6 lg:flex"
      role="navigation"
      onKeyDown={(event) => {
        const { key } = event;
        if (key !== 'ArrowDown' && key !== 'ArrowUp') {
          return;
        }
        event.preventDefault();
        const refs = itemRefs.current;
        const activeIndex = refs.findIndex((ref) => ref === document.activeElement);
        const fallbackIndex = refs.findIndex((ref) => ref?.getAttribute('href') === activeHref);
        const currentIndex = activeIndex >= 0 ? activeIndex : fallbackIndex >= 0 ? fallbackIndex : 0;
        const offset = key === 'ArrowDown' ? 1 : -1;
        const nextIndex = (currentIndex + offset + refs.length) % refs.length;
        refs[nextIndex]?.focus();
      }}
    >
      <ul className="flex flex-1 flex-col gap-2 px-3">
        {NAV_ITEMS.map((item, index) => {
          const isActive = activeHref === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative flex flex-col items-center gap-2 rounded-md px-2 py-3 text-sm text-muted transition ${focusRing} hover:bg-bg`}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-text" aria-hidden="true" />
                )}
                <IconPlaceholder className={isActive ? 'text-text' : 'text-muted'} />
                <span className={`text-center ${isActive ? 'font-semibold text-text' : 'text-muted'}`}>
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNav;
