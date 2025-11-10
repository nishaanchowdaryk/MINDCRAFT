'use client';

import CourseCard from './CourseCard';

export type CourseGridProps = {
  courses: Array<{ id: string; title: string; description: string; price: string; tags: string[] }>;
  activeCourseId: string;
  onSelect: (id: string) => void;
};

const CourseGrid = ({ courses, activeCourseId, onSelect }: CourseGridProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} active={course.id === activeCourseId} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default CourseGrid;
