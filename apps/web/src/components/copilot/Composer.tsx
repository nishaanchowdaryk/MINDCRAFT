'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@mindcraft/ui';

export type ComposerProps = {
  onSend: (message: string) => Promise<void> | void;
  disabled?: boolean;
};

const Composer = ({ onSend, disabled }: ComposerProps) => {
  const [value, setValue] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!value.trim()) return;
    await onSend(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        rows={3}
        placeholder="Ask the copilot for help…"
        className="w-full rounded-md border border-border bg-bg p-3 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-text"
      />
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-muted">Shift+Enter for newline</span>
        <Button type="submit" variant="primary" size="sm" disabled={disabled}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default Composer;
