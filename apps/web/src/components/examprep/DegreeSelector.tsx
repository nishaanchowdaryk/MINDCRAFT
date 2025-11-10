'use client';

import { DegreeBranch, DegreeProgram } from './useDegreeCatalog';

export type DegreeSelectorProps = {
  programs: DegreeProgram[];
  degreeId: string;
  branchId: string;
  semester: string;
  onDegreeChange: (id: string) => void;
  onBranchChange: (id: string) => void;
  onSemesterChange: (semester: string) => void;
};

const DegreeSelector = ({
  programs,
  degreeId,
  branchId,
  semester,
  onDegreeChange,
  onBranchChange,
  onSemesterChange
}: DegreeSelectorProps) => {
  const activeProgram = programs.find((program) => program.id === degreeId) ?? programs[0];
  const branches = activeProgram.branches;
  const activeBranch = branches.find((branch) => branch.id === branchId) ?? branches[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {programs.map((program) => (
          <button
            key={program.id}
            type="button"
            onClick={() => onDegreeChange(program.id)}
            className={`rounded-md px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-text ${
              program.id === degreeId ? 'bg-text text-bg' : 'border border-border bg-surface text-text'
            }`}
          >
            {program.title}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {branches.map((branch: DegreeBranch) => (
          <button
            key={branch.id}
            type="button"
            onClick={() => onBranchChange(branch.id)}
            className={`rounded-full border px-3 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-text ${
              branch.id === branchId ? 'border-text text-text' : 'border-border text-muted'
            }`}
          >
            {branch.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {activeBranch.semesters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onSemesterChange(item)}
            className={`rounded-md border px-3 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-text ${
              item === semester ? 'border-text text-text' : 'border-border text-muted'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DegreeSelector;
