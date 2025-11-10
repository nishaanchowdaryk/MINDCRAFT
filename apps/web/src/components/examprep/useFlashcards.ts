'use client';

import { useCallback, useState } from 'react';

type Flashcard = {
  id: string;
  front: string;
  back: string;
};

const CARDS: Flashcard[] = [
  {
    id: 'card-1',
    front: 'Explain the difference between supervised and unsupervised learning.',
    back: 'Supervised models learn from labeled data, unsupervised models infer structure from unlabeled data.'
  },
  {
    id: 'card-2',
    front: 'What is big O of binary search?',
    back: 'Binary search runs in O(log n) time complexity.'
  },
  {
    id: 'card-3',
    front: 'Define overfitting.',
    back: 'When a model memorizes training data patterns, losing ability to generalize.'
  }
];

export const useFlashcards = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = CARDS[index];

  const flip = useCallback(() => setFlipped((value) => !value), []);

  const grade = useCallback(
    (label: string) => {
      console.info(`Flashcard graded: ${label}`);
      setFlipped(false);
      setIndex((value) => (value + 1) % CARDS.length);
    },
    []
  );

  return {
    cards: CARDS,
    current,
    index,
    flipped,
    flip,
    grade
  };
};
