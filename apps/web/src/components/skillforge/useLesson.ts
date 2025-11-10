'use client';

import { useEffect, useMemo, useState } from 'react';

export type LessonDetail = {
  id: string;
  title: string;
  description: string;
  code: string;
  objectives: string[];
};

const LESSONS: Record<string, LessonDetail> = {
  'html-basics': {
    id: 'html-basics',
    title: 'Semantic HTML Essentials',
    description: 'Learn how to structure content using semantic tags and accessible patterns.',
    code: '<main>\n  <section aria-labelledby="intro">\n    <h1 id="intro">Semantic structure</h1>\n  </section>\n</main>',
    objectives: ['Use landmarks', 'Improve accessibility', 'Structure learning content']
  },
  'css-grid': {
    id: 'css-grid',
    title: 'Responsive Layout with CSS Grid',
    description: 'Build adaptive, multi-column dashboards with modern CSS Grid techniques.',
    code: '.layout {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}',
    objectives: ['Create responsive columns', 'Manage gaps', 'Align sections for readability']
  },
  'prompt-design': {
    id: 'prompt-design',
    title: 'Prompt Design Systems',
    description: 'Craft reusable prompt templates and evaluation loops for generative systems.',
    code: 'const prompt = `You are a coach. Help the learner debug the code.`;',
    objectives: ['Design guardrails', 'Plan evaluation metrics', 'Prototype workflows']
  }
};

export const useLesson = (lessonId: string | null) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState<LessonDetail | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!lessonId) return;
    setLoading(true);
    const timeout = setTimeout(() => {
      if (!cancelled) {
        setActive(LESSONS[lessonId] ?? null);
        setLoading(false);
      }
    }, 200);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [lessonId]);

  const fallback = useMemo<LessonDetail>(
    () => ({
      id: 'empty',
      title: 'Pick a lesson to begin',
      description: 'Select a module from the left to load lesson details and start building.',
      code: '// Select a lesson to load starter code',
      objectives: ['Choose a module', 'Review objectives', 'Start coding']
    }),
    []
  );

  return { lesson: active ?? fallback, loading };
};
