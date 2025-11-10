import { forwardRef, type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const classNames = (
  ...classes: Array<string | false | null | undefined>
): string => classes.filter(Boolean).join(' ');

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-bg hover:opacity-90 active:scale-[0.98]',
  outline: 'border border-text text-text bg-transparent hover:bg-text/10 active:scale-[0.98]',
  ghost: 'text-text bg-transparent hover:bg-text/10 active:scale-[0.98]'
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-base'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      type = 'button',
      disabled,
      'aria-disabled': ariaDisabled,
      ...props
    },
    ref
  ) => {
    const isAriaDisabled = disabled || ariaDisabled;

    return (
      <button
        ref={ref}
        type={type}
        className={classNames(
          'inline-flex items-center justify-center font-medium rounded-md transition duration-fast ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mc-text)]',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled}
        aria-disabled={isAriaDisabled || undefined}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
