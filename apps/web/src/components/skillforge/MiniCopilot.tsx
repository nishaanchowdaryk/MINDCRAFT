'use client';

import { useState } from 'react';
import { Button, Card } from '@mindcraft/ui';

const actions = [
  { id: 'explain', label: 'Explain' },
  { id: 'hint', label: 'Hint' },
  { id: 'examples', label: 'Examples' }
];

const responses: Record<string, string> = {
  explain: 'Break the task into semantic regions: header, navigation, and main content blocks.',
  hint: 'Consider using CSS Grid with repeat(auto-fit, minmax())) for adaptive columns.',
  examples: 'Check the SkillForge gallery for dashboard layouts and accessible form patterns.'
};

const MiniCopilot = () => {
  const [active, setActive] = useState(actions[0].id);

  return (
    <Card header="Mini Copilot" className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {actions.map((action) => (
          <Button
            key={action.id}
            type="button"
            variant={active === action.id ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActive(action.id)}
          >
            {action.label}
          </Button>
        ))}
      </div>
      <div className="rounded-md border border-border bg-bg p-3 text-sm leading-relaxed text-text">
        {responses[active]}
      </div>
    </Card>
  );
};

export default MiniCopilot;
