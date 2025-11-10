'use client';

import { Button } from '@mindcraft/ui';

const reactions = [
  { key: 'like', label: 'Like' },
  { key: 'comment', label: 'Comment' },
  { key: 'share', label: 'Share' }
];

export type ReactionBarProps = {
  onReact?: (reaction: string) => void;
};

const ReactionBar = ({ onReact }: ReactionBarProps) => {
  return (
    <div className="flex items-center gap-3">
      {reactions.map((reaction) => (
        <Button
          key={reaction.key}
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => onReact?.(reaction.key)}
          className="flex items-center gap-2"
        >
          <span aria-hidden className="h-2 w-2 rounded-full bg-muted" />
          {reaction.label}
        </Button>
      ))}
    </div>
  );
};

export default ReactionBar;
