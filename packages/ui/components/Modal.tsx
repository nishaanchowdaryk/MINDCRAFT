import {
  type PropsWithChildren,
  useEffect,
  useId,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  title?: string;
}

const focusableSelectors =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export const Modal = ({ open, onClose, title, children }: ModalProps) => {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const generatedId = useId();
  const titleId = title ? `${generatedId}-title` : undefined;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const focusable = dialog.querySelectorAll<HTMLElement>(focusableSelectors);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab' && focusable.length > 0) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    if (first) {
      first.focus();
    } else {
      dialog.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!mounted || !open) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4" onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-[90vw] max-w-xl rounded-md bg-white p-6 shadow-card focus:outline-none"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-muted transition duration-fast hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mc-text)]"
          aria-label="Close"
        >
          &times;
        </button>
        {title ? (
          <h2 id={titleId} className="mb-4 text-xl font-semibold text-text">
            {title}
          </h2>
        ) : null}
        <div className="text-text">{children}</div>
      </div>
    </div>,
    document.body
  );
};
