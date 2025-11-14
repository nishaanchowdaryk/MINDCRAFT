'use client';

import { Card } from '@mindcraft/ui';

export type CourseCardProps = {
  course: {
    id: string;
    title: string;
    description: string;
    price: string;
    tags: string[];
  };
  active: boolean;
  onSelect: (id: string) => void;
};

const CourseCard = ({ course, active, onSelect }: CourseCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(course.id)}
      className={`w-full text-left focus:outline-none focus:ring-2 focus:ring-text ${active ? 'scale-[1.01]' : ''}`}
    >
      <Card
        header={course.title}
        className={`h-full transition ${active ? 'border-text shadow-card' : ''}`}
        footer={course.tags.join(' · ')}
      >
        <div className="space-y-3">
          <p className="text-sm text-muted">{course.description}</p>
          <span className="text-sm font-semibold text-text">{course.price}</span>
        </div>
      </Card>
    </button>
  );
};

export default CourseCard;
