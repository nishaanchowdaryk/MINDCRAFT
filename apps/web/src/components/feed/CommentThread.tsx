'use client';

import { Button } from '@mindcraft/ui';

type Comment = {
  id: string;
  author: string;
  message: string;
  timestamp: string;
};

export type CommentThreadProps = {
  comments: Comment[];
  onExpand?: () => void;
};

const CommentThread = ({ comments, onExpand }: CommentThreadProps) => {
  if (!comments.length) return null;

  return (
    <div className="mt-4 space-y-3 rounded-md border border-border bg-bg p-3">
      <ul className="space-y-2">
        {comments.map((comment) => (
          <li key={comment.id} className="text-sm leading-relaxed">
            <span className="font-medium text-text">{comment.author}</span>{' '}
            <span className="text-muted">• {comment.timestamp}</span>
            <p className="text-text">{comment.message}</p>
          </li>
        ))}
      </ul>
      <Button type="button" variant="ghost" size="sm" onClick={onExpand}>
        View full thread
      </Button>
    </div>
  );
};

export default CommentThread;
