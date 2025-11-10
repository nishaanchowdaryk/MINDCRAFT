'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

type Question = {
  id: string;
  prompt: string;
};

const QUESTIONS: Question[] = Array.from({ length: 8 }).map((_, index) => ({
  id: `q-${index + 1}`,
  prompt: `Mock question ${index + 1}: Describe the complexity of merge sort in best, average, and worst cases.`
}));

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${m}:${s}`;
};

export const usePractice = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [remaining, setRemaining] = useState(20 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining((value) => Math.max(value - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const select = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const timeLabel = useMemo(() => formatTime(remaining), [remaining]);

  return {
    questions: QUESTIONS,
    activeIndex,
    select,
    remaining,
    timeLabel,
    activeQuestion: QUESTIONS[activeIndex]
  };
};
