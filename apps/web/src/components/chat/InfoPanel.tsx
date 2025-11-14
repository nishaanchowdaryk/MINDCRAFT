'use client';

import { Card } from '@mindcraft/ui';

export type InfoPanelProps = {
  room: {
    name: string;
    participants: Array<{ id: string; name: string; status: 'online' | 'offline' }>;
  };
};

const InfoPanel = ({ room }: InfoPanelProps) => {
  return (
    <Card header="Room info" className="space-y-3">
      <div>
        <h3 className="text-sm font-semibold text-text">Participants</h3>
        <ul className="mt-2 space-y-2 text-sm text-muted">
          {room.participants.map((participant) => (
            <li key={participant.id} className="flex items-center justify-between">
              <span>{participant.name}</span>
              <span className={participant.status === 'online' ? 'text-success' : 'text-muted'}>
                {participant.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-text">Pinned resources</h3>
        <ul className="mt-2 space-y-1 text-sm text-muted">
          <li>Design spec.md</li>
          <li>ExamPrep rollout plan</li>
        </ul>
      </div>
    </Card>
  );
};

export default InfoPanel;
