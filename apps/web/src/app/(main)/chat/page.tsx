'use client';

import ChatComposer from '@/components/chat/ChatComposer';
import ConversationList from '@/components/chat/ConversationList';
import InfoPanel from '@/components/chat/InfoPanel';
import Thread from '@/components/chat/Thread';
import { useChat } from '@/components/chat/useChat';

const ChatPage = () => {
  const chat = useChat();

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,220px)_minmax(0,2fr)_minmax(0,260px)]">
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-muted">Rooms</h2>
        <ConversationList rooms={chat.rooms} activeRoomId={chat.activeRoomId} onSelect={chat.setActiveRoomId} />
      </div>
      <div className="space-y-4">
        <Thread messages={chat.activeRoom.messages} />
        <ChatComposer onSend={chat.sendMessage} />
      </div>
      <div className="hidden xl:block">
        <InfoPanel room={chat.activeRoom} />
      </div>
    </div>
  );
};

export default ChatPage;
