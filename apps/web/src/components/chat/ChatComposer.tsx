'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@mindcraft/ui';

export type ChatComposerProps = {
  onSend: (message: string) => void;
};

const ChatComposer = ({ onSend }: ChatComposerProps) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!value.trim()) return;
    onSend(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {['Attach', 'Code block', 'Template'].map((action) => (
          <button
            key={action}
            type="button"
            className="rounded-md border border-border px-3 py-1 text-xs text-muted hover:bg-surface focus:outline-none focus:ring-2 focus:ring-text"
          >
            {action}
          </button>
        ))}
      </div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        rows={3}
        placeholder="Message the room…"
        className="w-full rounded-md border border-border bg-bg p-3 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-text"
      />
      <div className="flex items-center justify-end">
        <Button type="submit" variant="primary" size="sm">
          Send
        </Button>
      </div>
    </form>
  );
};

export default ChatComposer;
