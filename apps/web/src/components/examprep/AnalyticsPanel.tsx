'use client';

import { Card } from '@mindcraft/ui';

const weakTopics = ['Dynamic Programming', 'Probability', 'Compiler Design'];

const AnalyticsPanel = () => {
  return (
    <Card header="Insights" className="space-y-4">
      <div className="space-y-2 text-sm text-text">
        <div className="flex items-center justify-between">
          <span>Completion</span>
          <span className="text-muted">72%</span>
        </div>
        <div className="h-2 rounded-full bg-border">
          <div className="h-2 rounded-full bg-text" style={{ width: '72%' }} aria-hidden />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-text">Focus next on</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {weakTopics.map((topic) => (
            <span key={topic} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AnalyticsPanel;
