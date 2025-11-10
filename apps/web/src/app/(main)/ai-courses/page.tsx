'use client';

import CourseDetail from '@/components/courses/CourseDetail';
import CourseGrid from '@/components/courses/CourseGrid';
import { useCoursesCatalog } from '@/components/courses/useCoursesCatalog';

const AICoursesPage = () => {
  const catalog = useCoursesCatalog();

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-text">Library</h2>
        <CourseGrid courses={catalog.courses} activeCourseId={catalog.activeCourse.id} onSelect={catalog.setActiveId} />
      </section>
      <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <CourseDetail course={catalog.activeCourse} />
        <div className="hidden lg:block" aria-hidden>
          <div className="rounded-md border border-border bg-surface p-6 shadow-card">
            <h3 className="text-base font-semibold text-text">Creator Studio</h3>
            <p className="mt-2 text-sm text-muted">
              Launch your own AI-powered courses with templates, analytics, and community tools.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICoursesPage;
