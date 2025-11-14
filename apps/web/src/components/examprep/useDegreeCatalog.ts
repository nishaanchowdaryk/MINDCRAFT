'use client';

import { useMemo, useState } from 'react';

export type DegreeBranch = {
  id: string;
  name: string;
  semesters: string[];
};

export type DegreeProgram = {
  id: string;
  title: string;
  branches: DegreeBranch[];
};

const DEGREE_CATALOG: DegreeProgram[] = [
  {
    id: 'ug',
    title: 'Undergraduate',
    branches: [
      { id: 'cs', name: 'Computer Science', semesters: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'] },
      { id: 'ece', name: 'Electronics', semesters: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'] }
    ]
  },
  {
    id: 'pg',
    title: 'Postgraduate',
    branches: [
      { id: 'ai', name: 'AI & ML', semesters: ['Sem 1', 'Sem 2', 'Sem 3'] },
      { id: 'ds', name: 'Data Science', semesters: ['Sem 1', 'Sem 2', 'Sem 3'] }
    ]
  },
  {
    id: 'diploma',
    title: 'Diploma',
    branches: [
      { id: 'robotics', name: 'Robotics', semesters: ['Sem 1', 'Sem 2'] }
    ]
  }
];

export const useDegreeCatalog = () => {
  const programs = useMemo(() => DEGREE_CATALOG, []);
  const [degreeId, setDegreeId] = useState(programs[0].id);
  const [branchId, setBranchId] = useState(programs[0].branches[0].id);
  const [semester, setSemester] = useState(programs[0].branches[0].semesters[0]);

  const activeDegree = programs.find((program) => program.id === degreeId) ?? programs[0];
  const activeBranch =
    activeDegree.branches.find((branch) => branch.id === branchId) ?? activeDegree.branches[0];

  return {
    programs,
    degreeId,
    branchId,
    semester,
    setDegreeId,
    setBranchId,
    setSemester,
    activeDegree,
    activeBranch
  };
};
