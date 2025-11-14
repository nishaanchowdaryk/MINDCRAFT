'use client';

import { Card } from '@mindcraft/ui';

const qaPairs = [
  { question: 'How does this course adapt to learners?', answer: 'Dynamic assessments adjust module difficulty based on quiz performance and reflection prompts.' },
  { question: 'Is there mentor support?', answer: 'Live studio sessions run weekly with async peer reviews in the community hub.' }
];

const AIQA = () => {
  return (
    <Card header="AI Q&A" className="space-y-3">
      {qaPairs.map((pair) => (
        <div key={pair.question} className="space-y-1">
          <p className="text-sm font-semibold text-text">{pair.question}</p>
          <p className="text-sm text-muted">{pair.answer}</p>
        </div>
      ))}
    </Card>
  );
};

export default AIQA;
