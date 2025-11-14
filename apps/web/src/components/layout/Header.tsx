'use client';

import type { ReactNode } from 'react';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-text focus-visible:outline-offset-2';

type HeaderProps = {
  title: ReactNode;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-border bg-surface px-4 py-3 backdrop-blur-sm">
      <div className="min-w-0 text-base font-semibold text-text">{title}</div>
      <div className="flex flex-1 items-center justify-center">
        <label className="relative w-full max-w-xl" aria-label="Search">
          <span className="sr-only">Search</span>
          <input
            type="search"
            placeholder="Search MindCraft"
            className={`w-full rounded-md border border-border bg-surface px-4 py-2 text-sm text-text placeholder:text-muted shadow-none transition focus:border-text focus:shadow-card ${focusRing}`}
          />
        </label>
      </div>
      <button
        type="button"
        className={`flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-sm font-medium text-text shadow-card transition ${focusRing}`}
        aria-haspopup="menu"
        aria-label="User menu"
      >
        MC
      </button>
    </header>
  );
};

export default Header;
