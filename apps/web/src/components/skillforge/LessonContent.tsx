'use client';

import { useLesson } from './useLesson';
import EditorPlaceholder from './EditorPlaceholder';

export type LessonContentProps = {
  lessonId: string | null;
};

const LessonContent = ({ lessonId }: LessonContentProps) => {
  const { lesson, loading } = useLesson(lessonId);

  return (
    <section className="space-y-4" aria-live="polite">
      <header className="space-y-2">
        <h1 className="text-lg font-semibold text-text">{lesson.title}</h1>
        <p className="text-sm text-muted">{loading ? 'Loading lesson…' : lesson.description}</p>
        <ul className="flex flex-wrap gap-2 text-xs text-muted">
          {lesson.objectives.map((objective) => (
            <li key={objective} className="rounded-full border border-border px-2 py-1">
              {objective}
            </li>
          ))}
        </ul>
      </header>
      <EditorPlaceholder code={lesson.code} />
    </section>
  );
};

export default LessonContent;
