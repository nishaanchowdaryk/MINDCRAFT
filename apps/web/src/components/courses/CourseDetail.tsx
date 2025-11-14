'use client';

import { Button, Card } from '@mindcraft/ui';

import AIQA from './AIQA';
import SyllabusAccordion from './SyllabusAccordion';

export type CourseDetailProps = {
  course: {
    id: string;
    title: string;
    description: string;
    price: string;
    tags: string[];
    syllabus: Array<{ id: string; title: string; lessons: string[] }>;
  };
};

const CourseDetail = ({ course }: CourseDetailProps) => {
  return (
    <div className="space-y-6">
      <Card className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-text">{course.title}</h1>
          <p className="text-sm text-muted">{course.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-border px-3 py-1 text-sm font-semibold text-text">
            {course.price}
          </span>
          {course.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        <Button type="button" variant="primary" size="md">
          Enroll now
        </Button>
      </Card>
      <SyllabusAccordion sections={course.syllabus} />
      <AIQA />
    </div>
  );
};

export default CourseDetail;
