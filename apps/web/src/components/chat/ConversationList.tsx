'use client';

export type ConversationListProps = {
  rooms: Array<{ id: string; name: string; messages: Array<{ id: string }>; participants: Array<{ id: string; status: string }> }>;
  activeRoomId: string;
  onSelect: (id: string) => void;
};

const ConversationList = ({ rooms, activeRoomId, onSelect }: ConversationListProps) => {
  return (
    <nav aria-label="Conversations" className="space-y-2">
      {rooms.map((room) => (
        <button
          key={room.id}
          type="button"
          onClick={() => onSelect(room.id)}
          className={`w-full rounded-md border px-3 py-2 text-left text-sm focus:outline-none focus:ring-2 focus:ring-text ${
            room.id === activeRoomId ? 'border-text bg-surface font-semibold' : 'border-border text-text'
          }`}
          aria-current={room.id === activeRoomId ? 'page' : undefined}
        >
          <div className="flex items-center justify-between">
            <span>{room.name}</span>
            <span className="text-xs text-muted">{room.messages.length}</span>
          </div>
          <p className="text-xs text-muted">{room.participants.map((p) => p.id).join(', ')}</p>
        </button>
      ))}
    </nav>
  );
};

export default ConversationList;
