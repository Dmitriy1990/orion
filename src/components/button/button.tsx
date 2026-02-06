import { useMemo, type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'outline';
  className?: string;
  disabled?: boolean;
};

export const Button = (props: Props) => {
  const { variant, className, disabled, children } = props;

  const variantClass = useMemo(() => {
    switch (variant) {
      case 'outline':
        return '';
      case 'primary':
        return '';
      default:
        return '';
    }
  }, []);

  return (
    <button
      className={clsx(
        'inline-flex px-9 py-2.5 cursor-pointer font-semibold min-h-12',
        disabled && 'cursor-not-allowed',
        className,
      )}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};
