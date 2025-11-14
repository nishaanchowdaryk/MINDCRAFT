'use client';

import Image from 'next/image';
import { Card } from '@mindcraft/ui';

import CommentThread from './CommentThread';
import ReactionBar from './ReactionBar';

type FeedMedia = {
  id: string;
  alt: string;
  src: string;
};

type FeedComment = {
  id: string;
  author: string;
  message: string;
  timestamp: string;
};

export type FeedCardProps = {
  item: {
    id: string;
    author: string;
    handle: string;
    timeAgo: string;
    content: string;
    media?: FeedMedia[];
    commentsPreview: FeedComment[];
  };
};

const FeedCard = ({ item }: FeedCardProps) => {
  const { author, handle, timeAgo, content, media = [], commentsPreview } = item;

  return (
    <Card className="space-y-4">
      <header className="flex items-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-border text-sm font-medium text-text">
          {author.slice(0, 2).toUpperCase()}
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="font-semibold text-text">{author}</span>
            <span>@{handle}</span>
            <span aria-hidden>•</span>
            <span>{timeAgo}</span>
          </div>
          <div className="space-y-2 text-sm leading-relaxed text-text">
            {content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </header>
      {media.length ? (
        <div className="overflow-hidden rounded-md border border-border">
          <div className="flex snap-x gap-2 overflow-x-auto p-2">
            {media.map((item) => (
              <div key={item.id} className="relative h-48 min-w-[200px] flex-1 snap-center overflow-hidden rounded-md bg-border">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 400px, 70vw"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <ReactionBar onReact={(reaction) => console.info(`Reacted with ${reaction}`)} />
      <CommentThread
        comments={commentsPreview}
        onExpand={() => console.info(`Open comments for post ${item.id}`)}
      />
    </Card>
  );
};

export default FeedCard;
