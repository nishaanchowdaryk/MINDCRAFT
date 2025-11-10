export type NavSection =
  | 'Home'
  | 'SkillForge'
  | 'ExamPrep'
  | 'AI Copilot'
  | 'AI Courses'
  | 'Community';

type NavRoute = {
  section: NavSection;
  label: string;
  href: string;
};

export const NAV_ITEMS: NavRoute[] = [
  { section: 'Home', label: 'Home', href: '/' },
  { section: 'SkillForge', label: 'SkillForge', href: '/skillforge' },
  { section: 'ExamPrep', label: 'ExamPrep', href: '/examprep' },
  { section: 'AI Copilot', label: 'AI Copilot', href: '/ai-copilot' },
  { section: 'AI Courses', label: 'AI Courses', href: '/ai-courses' },
  { section: 'Community', label: 'Community', href: '/chat' }
];

const sectionPatterns: Array<{ pattern: string; section: NavSection }> = [
  { pattern: '/home', section: 'Home' },
  { pattern: '/skillforge', section: 'SkillForge' },
  { pattern: '/examprep', section: 'ExamPrep' },
  { pattern: '/ai-copilot', section: 'AI Copilot' },
  { pattern: '/ai-courses', section: 'AI Courses' },
  { pattern: '/chat', section: 'Community' },
  { pattern: '/', section: 'Home' }
];

export const SECTION_TABS: Record<NavSection, Array<{ label: string; href: string }>> = {
  Home: [
    { label: 'For You', href: '/home/for-you' },
    { label: 'Following', href: '/home/following' },
    { label: 'Trending', href: '/home/trending' },
    { label: 'Live', href: '/home/live' }
  ],
  SkillForge: [
    { label: 'Explore', href: '/skillforge/explore' },
    { label: 'My Courses', href: '/skillforge/my-courses' },
    { label: 'Projects', href: '/skillforge/projects' },
    { label: 'IDE', href: '/skillforge/ide' }
  ],
  ExamPrep: [
    { label: 'Degrees', href: '/examprep/degrees' },
    { label: 'Subjects', href: '/examprep/subjects' },
    { label: 'Flashcards', href: '/examprep/flashcards' },
    { label: 'Mock Tests', href: '/examprep/mock-tests' }
  ],
  'AI Copilot': [
    { label: 'Chat', href: '/ai-copilot/chat' },
    { label: 'Notebook', href: '/ai-copilot/notebook' },
    { label: 'Templates', href: '/ai-copilot/templates' },
    { label: 'History', href: '/ai-copilot/history' }
  ],
  'AI Courses': [
    { label: 'Library', href: '/ai-courses/library' },
    { label: 'My Courses', href: '/ai-courses/my-courses' },
    { label: 'Creator Studio', href: '/ai-courses/creator-studio' },
    { label: 'Marketplace', href: '/ai-courses/marketplace' }
  ],
  Community: [
    { label: 'DMs', href: '/chat/dms' },
    { label: 'Groups', href: '/chat/groups' },
    { label: 'Study Rooms', href: '/chat/study-rooms' },
    { label: 'Events', href: '/chat/events' }
  ]
};

export const getSectionFromPath = (pathname: string): NavSection => {
  const match = sectionPatterns.find(({ pattern }) =>
    pathname === pattern ? true : pathname.startsWith(pattern) && pattern !== '/'
  );

  if (match) {
    return match.section;
  }

  return 'Home';
};

export const getTabsForSection = (section: NavSection) => SECTION_TABS[section];

export const getActiveNavHref = (pathname: string): string => {
  const ordered = [...NAV_ITEMS].sort((a, b) => b.href.length - a.href.length);
  const match = ordered.find((item) => {
    if (item.href === '/') {
      return pathname === '/';
    }
    return pathname === item.href || pathname.startsWith(`${item.href}/`) || pathname.startsWith(item.href);
  });

  return match?.href ?? '/';
};
