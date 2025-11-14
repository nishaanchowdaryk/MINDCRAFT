'use client';

export type SessionListProps = {
  sessions: Array<{ id: string; title: string; lastUpdated: string }>;
  activeId: string;
  onSelect: (id: string) => void;
};

const SessionList = ({ sessions, activeId, onSelect }: SessionListProps) => {
  return (
    <nav aria-label="Copilot sessions" className="space-y-2">
      {sessions.map((session) => (
        <button
          key={session.id}
          type="button"
          onClick={() => onSelect(session.id)}
          className={`w-full rounded-md border px-3 py-2 text-left text-sm focus:outline-none focus:ring-2 focus:ring-text ${
            session.id === activeId ? 'border-text bg-surface font-semibold' : 'border-border text-text'
          }`}
          aria-current={session.id === activeId ? 'page' : undefined}
        >
          <span className="block">{session.title}</span>
          <span className="text-xs text-muted">{session.lastUpdated}</span>
        </button>
      ))}
    </nav>
  );
};

export default SessionList;
