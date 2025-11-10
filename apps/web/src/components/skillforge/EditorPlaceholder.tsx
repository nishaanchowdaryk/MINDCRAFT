'use client';

import { useState } from 'react';
import { Button, Card } from '@mindcraft/ui';

const TABS = ['Instructions', 'Editor', 'Console'] as const;

type Tab = (typeof TABS)[number];

export type EditorPlaceholderProps = {
  code: string;
};

const EditorPlaceholder = ({ code }: EditorPlaceholderProps) => {
  const [tab, setTab] = useState<Tab>('Editor');

  return (
    <Card className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {TABS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={`rounded-md px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-text ${
                tab === item ? 'bg-text text-bg' : 'bg-surface text-muted border border-border'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {['Run', 'Test', 'Save'].map((label) => (
            <Button key={label} type="button" variant="outline" size="sm" disabled>
              {label}
            </Button>
          ))}
        </div>
      </div>
      <div className="rounded-md border border-border bg-bg">
        {tab === 'Instructions' ? (
          <div className="space-y-3 p-4 text-sm text-muted">
            <p>Review the objectives and plan your approach before coding.</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Understand the lesson goals.</li>
              <li>Break down the UI into reusable components.</li>
              <li>Test locally with the SkillForge console.</li>
            </ol>
          </div>
        ) : null}
        {tab === 'Editor' ? (
          <pre className="overflow-auto bg-surface p-4 text-sm text-text">
            <code>{code}</code>
          </pre>
        ) : null}
        {tab === 'Console' ? (
          <div className="space-y-2 bg-bg p-4 text-sm text-success">
            <p>Console ready. Waiting for run command…</p>
            <p className="text-muted">Outputs will appear here once you execute the lesson tasks.</p>
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default EditorPlaceholder;
