'use client';

import { Card } from '@mindcraft/ui';

const tools = [
  { id: 'notebook', title: 'Notebook', description: 'Capture research, snippets, and outcomes.' },
  { id: 'summarizer', title: 'Summarizer', description: 'Generate lesson summaries for learners.' },
  { id: 'image', title: 'Image Generator', description: 'Create illustration prompts for lessons.' },
  { id: 'export', title: 'Export', description: 'Send drafts to SkillForge or LMS.' }
];

const ToolsDrawer = () => {
  return (
    <aside className="space-y-3">
      {tools.map((tool) => (
        <Card key={tool.id} header={tool.title}>
          <p className="text-sm text-muted">{tool.description}</p>
        </Card>
      ))}
    </aside>
  );
};

export default ToolsDrawer;
