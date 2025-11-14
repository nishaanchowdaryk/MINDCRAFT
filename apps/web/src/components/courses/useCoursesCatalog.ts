'use client';

import { useMemo, useState } from 'react';

type SyllabusSection = {
  id: string;
  title: string;
  lessons: string[];
};

export type Course = {
  id: string;
  title: string;
  description: string;
  price: string;
  tags: string[];
  syllabus: SyllabusSection[];
};

const COURSES: Course[] = [
  {
    id: 'course-ai-storytelling',
    title: 'AI Storytelling Workshop',
    description: 'Design compelling AI-generated narratives using ethical guardrails and co-creation techniques.',
    price: '$89',
    tags: ['Intermediate', '6 modules', 'Hands-on'],
    syllabus: [
      { id: 'intro', title: 'Foundations', lessons: ['Principles', 'Workflow overview'] },
      { id: 'craft', title: 'Narrative Craft', lessons: ['Character prompts', 'Tone controls'] },
      { id: 'evaluate', title: 'Evaluation', lessons: ['Review loops', 'Feedback systems'] }
    ]
  },
  {
    id: 'course-ai-educator',
    title: 'AI Educator Studio',
    description: 'Build adaptive courseware with dynamic assessments and analytics hooks.',
    price: '$129',
    tags: ['Advanced', 'Project-based'],
    syllabus: [
      { id: 'research', title: 'Learner Research', lessons: ['Personas', 'Needs assessment'] },
      { id: 'design', title: 'Curriculum Design', lessons: ['Module mapping', 'AI co-design'] },
      { id: 'deploy', title: 'Launch & Measure', lessons: ['Pilot planning', 'Analytics setup'] }
    ]
  },
  {
    id: 'course-ai-visuals',
    title: 'Generative Visual Design',
    description: 'Prototype multi-modal learning aids and imagery for blended courses.',
    price: '$99',
    tags: ['Creative', '4 weeks'],
    syllabus: [
      { id: 'sketch', title: 'Sketching', lessons: ['Prompt boards', 'Visual references'] },
      { id: 'render', title: 'Rendering', lessons: ['Lighting basics', 'Consistency'] },
      { id: 'deliver', title: 'Delivery', lessons: ['Formats', 'Accessibility checks'] }
    ]
  }
];

export const useCoursesCatalog = () => {
  const [activeId, setActiveId] = useState<string | null>(COURSES[0].id);
  const courses = useMemo(() => COURSES, []);
  const activeCourse = courses.find((course) => course.id === activeId) ?? courses[0];

  return { courses, activeCourse, setActiveId };
};
