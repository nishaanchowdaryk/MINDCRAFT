'use client';

import { useCallback, useMemo, useState } from 'react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

type Session = {
  id: string;
  title: string;
  lastUpdated: string;
};

const SESSIONS: Session[] = [
  { id: 'session-1', title: 'Adaptive quiz builder', lastUpdated: '5m ago' },
  { id: 'session-2', title: 'Course outline brainstorm', lastUpdated: '1h ago' },
  { id: 'session-3', title: 'Exam analytics summary', lastUpdated: '1d ago' }
];

async function* createTokenStream(prompt: string) {
  const base = `Here is a structured plan for ${prompt.toLowerCase()}. Focus on learner outcomes and feedback loops.`;
  const tokens = base.split(' ');
  for (const token of tokens) {
    await new Promise((resolve) => setTimeout(resolve, 120));
    yield `${token} `;
  }
}

export const useCopilot = () => {
  const [activeSession, setActiveSession] = useState(SESSIONS[0].id);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'assistant-initial',
      role: 'assistant',
      content: 'Welcome back! Ready to continue building your learning flow?'
    }
  ]);
  const [streaming, setStreaming] = useState(false);

  const sessions = useMemo(() => SESSIONS, []);

  const sendMessage = useCallback(async (input: string) => {
    if (!input.trim()) return;
    const timestamp = Date.now();
    const userMessage: Message = { id: `user-${timestamp}`, role: 'user', content: input };
    const assistantId = `assistant-${timestamp}`;
    setMessages((prev) => [...prev, userMessage, { id: assistantId, role: 'assistant', content: '' }]);
    setStreaming(true);

    let aggregated = '';
    for await (const token of createTokenStream(input)) {
      aggregated += token;
      setMessages((prev) =>
        prev.map((message) => (message.id === assistantId ? { ...message, content: aggregated } : message))
      );
    }

    setStreaming(false);
  }, []);

  return {
    sessions,
    activeSession,
    setActiveSession,
    messages,
    sendMessage,
    streaming
  };
};
