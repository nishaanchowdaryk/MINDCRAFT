'use client';

import { useState } from 'react';
import { Button, Card } from '@mindcraft/ui';

import { useFlashcards } from './useFlashcards';

const GRADES = [
  { key: 'again', label: 'Again' },
  { key: 'hard', label: 'Hard' },
  { key: 'good', label: 'Good' },
  { key: 'easy', label: 'Easy' }
];

const FlashcardDrawer = () => {
  const { current, flipped, flip, grade } = useFlashcards();
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`transition-all ${expanded ? 'max-h-[320px]' : 'max-h-12'}`}>
      <Card className="space-y-4" header="Flashcards">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="focus-ring rounded-md border border-border px-3 py-1 text-xs font-medium text-text"
          aria-expanded={expanded}
        >
          {expanded ? 'Collapse' : 'Expand'}
        </button>
        {expanded ? (
          <div className="space-y-4">
            <button
              type="button"
              onClick={flip}
              className="w-full rounded-md border border-border bg-bg p-4 text-left text-sm leading-relaxed text-text focus:outline-none focus:ring-2 focus:ring-text"
              aria-pressed={flipped}
            >
              <span className="block font-semibold text-muted">{flipped ? 'Answer' : 'Prompt'}</span>
              <span>{flipped ? current.back : current.front}</span>
            </button>
            <div className="flex flex-wrap gap-2">
              {GRADES.map((item) => (
                <Button key={item.key} type="button" variant="outline" size="sm" onClick={() => grade(item.label)}>
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        ) : null}
      </Card>
    </aside>
  );
};

export default FlashcardDrawer;
