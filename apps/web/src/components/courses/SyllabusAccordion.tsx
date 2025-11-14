'use client';

import { useState } from 'react';

export type SyllabusAccordionProps = {
  sections: Array<{ id: string; title: string; lessons: string[] }>;
};

const SyllabusAccordion = ({ sections }: SyllabusAccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(sections[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {sections.map((section) => {
        const open = section.id === openId;
        return (
          <div key={section.id} className="rounded-md border border-border bg-bg">
            <button
              type="button"
              onClick={() => setOpenId(open ? null : section.id)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-text focus:outline-none focus:ring-2 focus:ring-text"
              aria-expanded={open}
            >
              {section.title}
              <span className="text-xs text-muted">{open ? '−' : '+'}</span>
            </button>
            {open ? (
              <ul className="space-y-2 border-t border-border px-4 py-3 text-sm text-muted">
                {section.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default SyllabusAccordion;
