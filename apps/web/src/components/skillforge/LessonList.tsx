'use client';

import { useMemo } from 'react';

import { useCourses } from './useCourses';

export type LessonListProps = {
  selected: string | null;
  onSelect: (lessonId: string) => void;
};

const statusStyles: Record<string, string> = {
  completed: 'bg-success/10 text-success border-success/40',
  'in-progress': 'bg-primary/5 text-text border-border',
  locked: 'bg-muted/10 text-muted border-border'
};

const LessonList = ({ selected, onSelect }: LessonListProps) => {
  const { courses } = useCourses();
  const lessons = useMemo(() => courses.flatMap((course) => course.lessons), [courses]);

  return (
    <aside className="space-y-4" aria-label="Lesson list">
      {courses.map((course) => (
        <section key={course.id} className="space-y-2">
          <h2 className="text-sm font-semibold text-muted">{course.title}</h2>
          <ul className="space-y-2">
            {course.lessons.map((lesson) => {
              const isSelected = selected === lesson.id;
              return (
                <li key={lesson.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(lesson.id)}
                    disabled={lesson.status === 'locked'}
                    className={`flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition hover:bg-surface focus:outline-none focus:ring-2 focus:ring-text ${
                      isSelected ? 'border-text bg-surface font-semibold' : 'border-border'
                    } ${lesson.status === 'locked' ? 'cursor-not-allowed opacity-60' : ''}`}
                  >
                    <span>{lesson.title}</span>
                    <span
                      className={`ml-3 rounded-full border px-2 py-0.5 text-xs ${statusStyles[lesson.status]}`}
                    >
                      {lesson.duration}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <p className="text-xs text-muted">{lessons.length} lessons available.</p>
    </aside>
  );
};

export default LessonList;
