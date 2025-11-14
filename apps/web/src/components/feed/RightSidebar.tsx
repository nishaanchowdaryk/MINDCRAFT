'use client';

import { Card } from '@mindcraft/ui';

const highlights = [
  { title: 'Weekly challenge', description: 'Build an adaptive quiz for calculus students.' },
  { title: 'Upcoming livestream', description: 'Pair-programming workshop with SkillForge mentors.' },
  { title: 'Community update', description: 'New study rooms launched for AI safety track.' }
];

const RightSidebar = () => {
  return (
    <aside className="space-y-4">
      {highlights.map((item) => (
        <Card key={item.title} header={item.title}>
          <p className="text-sm leading-relaxed text-muted">{item.description}</p>
        </Card>
      ))}
    </aside>
  );
};

export default RightSidebar;
