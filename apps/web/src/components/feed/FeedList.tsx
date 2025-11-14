'use client';

import FeedCard from './FeedCard';
import { useFeed } from './useFeed';

const FeedList = () => {
  const { posts, loadMore, hasMore, loading } = useFeed();

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <FeedCard key={post.id} item={post} />
      ))}
      <div className="flex justify-center">
        {hasMore ? (
          <button
            type="button"
            onClick={loadMore}
            className="focus-ring rounded-md border border-border px-4 py-2 text-sm font-medium text-text hover:bg-surface"
          >
            {loading ? 'Loading…' : 'Load more'}
          </button>
        ) : (
          <span className="text-sm text-muted">You have reached the end.</span>
        )}
      </div>
    </div>
  );
};

export default FeedList;
