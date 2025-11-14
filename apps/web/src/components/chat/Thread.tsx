'use client';

import { useEffect, useRef } from 'react';

export type ThreadProps = {
  messages: Array<{ id: string; author: string; content: string; timestamp: string }>;
};

const Thread = ({ messages }: ThreadProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div ref={ref} className="flex h-[420px] flex-col gap-3 overflow-y-auto rounded-md border border-border bg-bg p-4">
      {messages.map((message) => (
        <div key={message.id} className="space-y-1 rounded-md border border-border bg-surface p-3 text-sm shadow-card">
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="font-medium text-text">{message.author}</span>
            <span>{message.timestamp}</span>
          </div>
          <p className="text-text">{message.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Thread;
