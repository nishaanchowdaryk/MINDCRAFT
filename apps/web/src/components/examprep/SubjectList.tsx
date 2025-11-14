'use client';

import { Card } from '@mindcraft/ui';

export type SubjectListProps = {
  subjects: Array<{ id: string; name: string; tags: string[] }>;
};

const SubjectList = ({ subjects }: SubjectListProps) => {
  return (
    <div className="space-y-3">
      {subjects.map((subject) => (
        <Card key={subject.id} className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-text">{subject.name}</h3>
            <p className="text-xs text-muted">{subject.tags.join(' · ')}</p>
          </div>
          <button
            type="button"
            className="rounded-md border border-border px-3 py-2 text-xs font-medium text-text hover:bg-surface focus:outline-none focus:ring-2 focus:ring-text"
          >
            Review
          </button>
        </Card>
      ))}
    </div>
  );
};

export default SubjectList;
