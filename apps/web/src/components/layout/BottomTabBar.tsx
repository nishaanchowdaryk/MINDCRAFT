'use client';

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
    <rect x="5" y="5" width="14" height="14" rx="4" ry="4" />
  </svg>
);

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-text focus-visible:outline-offset-2';

export const BottomTabBar = () => {
  const pathname = usePathname();
  const activeHref = getActiveNavHref(pathname);

  return (
    <nav
      aria-label="Bottom tab bar"
      className="sticky bottom-0 z-40 flex w-full items-center justify-between border-t border-border bg-surface px-4 py-2 backdrop-blur-sm lg:hidden"
      role="navigation"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeHref === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={`relative flex flex-1 flex-col items-center gap-1 px-2 py-1 text-xs transition ${focusRing}`}
          >
            {isActive && (
              <span className="absolute inset-x-3 top-0 h-0.5 rounded-full bg-text" aria-hidden="true" />
            )}
            <IconPlaceholder className={isActive ? 'text-text' : 'text-muted'} />
            <span className={isActive ? 'font-medium text-text' : 'text-muted'}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomTabBar;
