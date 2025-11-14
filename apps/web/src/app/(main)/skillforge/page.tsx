'use client';

import { useMemo, useState } from 'react';

import LessonContent from '@/components/skillforge/LessonContent';
import LessonList from '@/components/skillforge/LessonList';
import MiniCopilot from '@/components/skillforge/MiniCopilot';
import { useCourses } from '@/components/skillforge/useCourses';

const SkillForgePage = () => {
  const { courses } = useCourses();
  const initialLesson = useMemo(() => courses[0]?.lessons[0]?.id ?? null, [courses]);
  const [activeLesson, setActiveLesson] = useState<string | null>(initialLesson);

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,260px)_minmax(0,1fr)_minmax(0,280px)]">
      <LessonList selected={activeLesson} onSelect={setActiveLesson} />
      <LessonContent lessonId={activeLesson} />
      <div className="hidden xl:block">
        <MiniCopilot />
      </div>
    </div>
  );
};

export default SkillForgePage;
