'use client';

import ChatWindow from '@/components/copilot/ChatWindow';
import Composer from '@/components/copilot/Composer';
import SessionList from '@/components/copilot/SessionList';
import ToolsDrawer from '@/components/copilot/ToolsDrawer';
import { useCopilot } from '@/components/copilot/useCopilot';

const CopilotPage = () => {
  const copilot = useCopilot();

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,240px)_minmax(0,2fr)_minmax(0,260px)]">
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-muted">Sessions</h2>
        <SessionList sessions={copilot.sessions} activeId={copilot.activeSession} onSelect={copilot.setActiveSession} />
      </div>
      <div className="space-y-4">
        <ChatWindow messages={copilot.messages} streaming={copilot.streaming} />
        <Composer onSend={copilot.sendMessage} disabled={copilot.streaming} />
      </div>
      <div className="hidden xl:block">
        <ToolsDrawer />
      </div>
    </div>
  );
};

export default CopilotPage;
