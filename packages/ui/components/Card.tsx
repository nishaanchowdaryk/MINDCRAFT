import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
}

export const Card = ({
  header,
  footer,
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={[
        'bg-surface rounded-md shadow-card border border-border p-4 md:p-6',
        className
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {header ? <div className="mb-4 text-base font-medium text-text">{header}</div> : null}
      <div className="text-text">{children}</div>
      {footer ? <div className="mt-4 text-sm text-muted">{footer}</div> : null}
    </div>
  );
};
