'use client';

import { useMemo } from 'react';

export type LessonSummary = {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'locked';
  duration: string;
};

export type Course = {
  id: string;
  title: string;
  lessons: LessonSummary[];
};

export const useCourses = () => {
  const courses = useMemo<Course[]>(
    () => [
      {
        id: 'frontend-101',
        title: 'Frontend Foundations',
        lessons: [
          { id: 'html-basics', title: 'Semantic HTML Essentials', status: 'completed', duration: '18 min' },
          { id: 'css-grid', title: 'Responsive Layout with CSS Grid', status: 'in-progress', duration: '26 min' },
          { id: 'accessibility', title: 'Accessible Components', status: 'locked', duration: '32 min' }
        ]
      },
      {
        id: 'ai-track',
        title: 'AI Product Studio',
        lessons: [
          { id: 'prompt-design', title: 'Prompt Design Systems', status: 'completed', duration: '22 min' },
          { id: 'copilot-ux', title: 'Building Copilot UX', status: 'in-progress', duration: '29 min' },
          { id: 'evaluation', title: 'LLM Evaluation Loops', status: 'locked', duration: '35 min' }
        ]
      }
    ],
    []
  );

  return { courses };
};
