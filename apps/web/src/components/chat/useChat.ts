'use client';

import { useCallback, useMemo, useState } from 'react';

type Participant = {
  id: string;
  name: string;
  status: 'online' | 'offline';
};

type Message = {
  id: string;
  author: string;
  content: string;
  timestamp: string;
};

type Room = {
  id: string;
  name: string;
  participants: Participant[];
  messages: Message[];
};

const ROOMS: Room[] = [
  {
    id: 'room-ai-foundry',
    name: 'AI Foundry',
    participants: [
      { id: 'maya', name: 'Maya Chen', status: 'online' },
      { id: 'jordan', name: 'Jordan Reed', status: 'offline' }
    ],
    messages: [
      { id: 'm-1', author: 'Maya Chen', content: 'Let’s sync on the SkillForge widget design.', timestamp: '10:12' },
      { id: 'm-2', author: 'Jordan Reed', content: 'Sharing the latest prototype now.', timestamp: '10:14' }
    ]
  },
  {
    id: 'room-learning-ops',
    name: 'Learning Ops',
    participants: [
      { id: 'priya', name: 'Priya Shah', status: 'online' },
      { id: 'alex', name: 'Alex Brooks', status: 'online' }
    ],
    messages: [
      { id: 'm-3', author: 'Priya Shah', content: 'ExamPrep analytics deck is ready for review.', timestamp: '09:08' }
    ]
  }
];

export const useChat = () => {
  const [activeRoomId, setActiveRoomId] = useState(ROOMS[0].id);
  const [rooms, setRooms] = useState(ROOMS);

  const activeRoom = useMemo(
    () => rooms.find((room) => room.id === activeRoomId) ?? rooms[0],
    [rooms, activeRoomId]
  );

  const sendMessage = useCallback(
    (content: string) => {
      setRooms((prev) =>
        prev.map((room) =>
          room.id === activeRoomId
            ? {
                ...room,
                messages: [
                  ...room.messages,
                  {
                    id: `msg-${Date.now()}`,
                    author: 'You',
                    content,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  }
                ]
              }
            : room
        )
      );
    },
    [activeRoomId]
  );

  return {
    rooms,
    activeRoom,
    activeRoomId,
    setActiveRoomId,
    sendMessage
  };
};
