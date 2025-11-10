'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

type FeedItem = {
  id: string;
  author: string;
  handle: string;
  timeAgo: string;
  content: string;
  media?: Array<{ id: string; alt: string; src: string }>;
  commentsPreview: Array<{ id: string; author: string; message: string; timestamp: string }>;
};

const MOCK_POSTS: FeedItem[] = Array.from({ length: 12 }).map((_, index) => ({
  id: `post-${index + 1}`,
  author: ['Maya Chen', 'Alex Brooks', 'Priya Shah'][index % 3],
  handle: ['maya', 'alex', 'priya'][index % 3],
  timeAgo: `${index + 1}h ago`,
  content:
    index % 2 === 0
      ? 'Working on a new adaptive learning path for calculus.\nFeedback welcome!'
      : 'Just shipped a new SkillForge module on React hooks. Includes interactive sandboxes and quizzes.' ,
  media:
    index % 3 === 0
      ? [
          {
            id: `media-${index}-1`,
            alt: 'Dashboard preview',
            src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80'
          }
        ]
      : undefined,
  commentsPreview: [
    {
      id: `comment-${index}-1`,
      author: 'Jordan',
      message: 'Love the layout—excited to try this out!',
      timestamp: '2h ago'
    }
  ]
}));

export const useFeed = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const pageSize = 4;

  const posts = useMemo(() => MOCK_POSTS.slice(0, page * pageSize), [page]);
  const hasMore = posts.length < MOCK_POSTS.length;

  const loadMore = useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setPage((prev) => prev + 1);
    setLoading(false);
  }, [hasMore, loading]);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasMore || loading) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loadMore, loading]);

  return { posts, hasMore, loadMore, loading };
};
