'use client';

import { useCallback, useRef } from 'react';
import type { KeyboardEvent } from 'react';

const TAB_LABELS = ['Syllabus', 'Notes', 'PYQs', 'MCQ', 'Assignments', 'Practicals', 'Mock'] as const;

export type SubjectTab = (typeof TAB_LABELS)[number];

export type SubjectTabsProps = {
  active: SubjectTab;
  onChange: (tab: SubjectTab) => void;
};

const SubjectTabs = ({ active, onChange }: SubjectTabsProps) => {
  const listRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>('button');
      if (!buttons?.length) return;
      const currentIndex = Array.from(buttons).indexOf(event.currentTarget);
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        const next = buttons[(currentIndex + 1) % buttons.length];
        next.focus();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        const prev = buttons[(currentIndex - 1 + buttons.length) % buttons.length];
        prev.focus();
      }
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onChange(event.currentTarget.dataset.tab as SubjectTab);
      }
    },
    [onChange]
  );

  return (
    <div ref={listRef} role="tablist" aria-label="Subject content tabs" className="flex overflow-x-auto rounded-md border border-border bg-surface p-1">
      {TAB_LABELS.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={active === tab}
          data-tab={tab}
          onClick={() => onChange(tab)}
          onKeyDown={handleKeyDown}
          className={`min-w-[120px] rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-text ${
            active === tab ? 'bg-text text-bg' : 'text-muted'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SubjectTabs;
