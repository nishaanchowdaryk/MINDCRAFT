import PostComposer from '@/components/feed/PostComposer';
import FeedList from '@/components/feed/FeedList';
import RightSidebar from '@/components/feed/RightSidebar';

const HomePage = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      <div className="space-y-6">
        <PostComposer />
        <FeedList />
      </div>
      <div className="hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
