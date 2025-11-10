'use client';

import { useEffect, useState } from 'react';

type Subject = {
  id: string;
  name: string;
  tags: string[];
};

export type SubjectData = {
  subjects: Subject[];
};

const SUBJECTS: Subject[] = [
  { id: 'dsa', name: 'Data Structures & Algorithms', tags: ['MCQ', 'Mock Tests', 'Notes'] },
  { id: 'ml', name: 'Machine Learning', tags: ['Assignments', 'Projects', 'Flashcards'] },
  { id: 'os', name: 'Operating Systems', tags: ['Syllabus', 'Notes'] }
];

export const useSubjectData = (degreeId: string, branchId: string, semester: string) => {
  const [data, setData] = useState<SubjectData>({ subjects: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setData({ subjects: SUBJECTS.map((subject) => ({ ...subject, id: `${degreeId}-${branchId}-${semester}-${subject.id}` })) });
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [degreeId, branchId, semester]);

  return { data, loading };
};
