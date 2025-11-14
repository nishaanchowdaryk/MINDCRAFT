'use client';

import { useEffect, useRef } from 'react';

export type ChatWindowProps = {
  messages: Array<{ id: string; role: 'user' | 'assistant'; content: string }>;
  streaming: boolean;
};

const ChatWindow = ({ messages, streaming }: ChatWindowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="flex h-[420px] flex-col gap-4 overflow-y-auto rounded-md border border-border bg-bg p-4"
      role="log"
      aria-live="polite"
    >
      {messages.map((message) => (
        <div
          key={message.id}
          className={`max-w-[85%] rounded-md border px-3 py-2 text-sm leading-relaxed shadow-card ${
            message.role === 'assistant'
              ? 'self-start border-border bg-surface text-text'
              : 'self-end border-text bg-text text-bg'
          }`}
        >
          {message.content || (message.role === 'assistant' && streaming ? 'Thinking…' : '')}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
