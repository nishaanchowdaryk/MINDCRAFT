'use client';

import { FormEvent, KeyboardEvent, useCallback, useState } from 'react';
import { Button, Card } from '@mindcraft/ui';

const actions = [
  { key: 'attach', label: 'Attach' },
  { key: 'ai', label: 'AI Assist' }
];

export type PostComposerProps = {
  onSubmit?: (content: string) => void;
};

const PostComposer = ({ onSubmit }: PostComposerProps) => {
  const [value, setValue] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!value.trim()) return;
      setSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      onSubmit?.(value.trim());
      setValue('');
      setSubmitting(false);
    },
    [onSubmit, value]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        const form = event.currentTarget.form;
        form?.requestSubmit();
      }
    },
    []
  );

  return (
    <Card aria-label="Create post" className="space-y-4" role="region">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="flex w-full flex-col gap-2 text-sm text-muted">
          Share something with the community
          <textarea
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            placeholder="What are you working on today?"
            className="min-h-[120px] w-full resize-y rounded-md border border-border bg-bg p-3 text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-text"
          />
        </label>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {actions.map((action) => (
              <Button
                key={action.key}
                type="button"
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <span aria-hidden className="h-2 w-2 rounded-full bg-text" />
                {action.label}
              </Button>
            ))}
          </div>
          <Button type="submit" variant="primary" size="md" disabled={submitting || !value.trim()}>
            {submitting ? 'Posting…' : 'Post'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default PostComposer;
