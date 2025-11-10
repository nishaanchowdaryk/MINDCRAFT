'use client';

import { useMemo, useState } from 'react';

import AnalyticsPanel from '@/components/examprep/AnalyticsPanel';
import DegreeSelector from '@/components/examprep/DegreeSelector';
import FlashcardDrawer from '@/components/examprep/FlashcardDrawer';
import SubjectList from '@/components/examprep/SubjectList';
import SubjectTabs, { SubjectTab } from '@/components/examprep/SubjectTabs';
import TestRunnerShell from '@/components/examprep/TestRunnerShell';
import { useDegreeCatalog } from '@/components/examprep/useDegreeCatalog';
import { usePractice } from '@/components/examprep/usePractice';
import { useSubjectData } from '@/components/examprep/useSubjectData';

const ExamPrepPage = () => {
  const degree = useDegreeCatalog();
  const [tab, setTab] = useState<SubjectTab>('Syllabus');
  const { data, loading } = useSubjectData(degree.degreeId, degree.branchId, degree.semester);
  const practice = usePractice();

  const prompt = useMemo(() => practice.activeQuestion.prompt, [practice.activeQuestion.prompt]);

  return (
    <div className="space-y-6">
      <DegreeSelector
        programs={degree.programs}
        degreeId={degree.degreeId}
        branchId={degree.branchId}
        semester={degree.semester}
        onDegreeChange={degree.setDegreeId}
        onBranchChange={degree.setBranchId}
        onSemesterChange={degree.setSemester}
      />
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-4">
          <SubjectTabs active={tab} onChange={setTab} />
          <div aria-live="polite">
            {loading ? <p className="text-sm text-muted">Loading subjects…</p> : <SubjectList subjects={data.subjects} />}
          </div>
        </div>
        <div className="space-y-4">
          <TestRunnerShell
            prompt={prompt}
            questions={practice.questions}
            activeIndex={practice.activeIndex}
            timeLabel={practice.timeLabel}
            onSelect={practice.select}
            onSubmit={() => console.info('Submit mock test')}
          />
          <FlashcardDrawer />
        </div>
        <div className="hidden lg:block">
          <AnalyticsPanel />
        </div>
      </div>
    </div>
  );
};

export default ExamPrepPage;
