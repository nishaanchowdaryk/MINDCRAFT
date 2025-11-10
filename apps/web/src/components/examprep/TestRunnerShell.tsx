'use client';

import { Button, Card } from '@mindcraft/ui';

export type TestRunnerShellProps = {
  prompt: string;
  questions: Array<{ id: string }>;
  activeIndex: number;
  timeLabel: string;
  onSelect: (index: number) => void;
  onSubmit: () => void;
};

const TestRunnerShell = ({ prompt, questions, activeIndex, timeLabel, onSelect, onSubmit }: TestRunnerShellProps) => {
  return (
    <Card className="space-y-4" header="Mock Test">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
        <span>Time remaining: <span className="font-semibold text-text">{timeLabel}</span></span>
        <Button type="button" variant="outline" size="sm" onClick={onSubmit}>
          Submit test
        </Button>
      </div>
      <p className="rounded-md border border-border bg-bg p-4 text-sm leading-relaxed text-text" aria-live="polite">
        {prompt}
      </p>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <button
            key={question.id}
            type="button"
            onClick={() => onSelect(index)}
            className={`h-8 w-8 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-text ${
              index === activeIndex ? 'border-text bg-text text-bg' : 'border-border text-text'
            }`}
            aria-label={`Question ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default TestRunnerShell;
