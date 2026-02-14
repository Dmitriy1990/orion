import { useMemo, type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
  className?: string;
  disabled?: boolean;
};

export const Button = (props: Props) => {
  const { variant = 'primary', className, disabled, children } = props;

  const variantClass = useMemo(() => {
    switch (variant) {
      case 'outline':
        return 'bg-primary-blue/20 border-primary-blue border-1 hover:bg-primary-blue/50';
      case 'primary':
        return 'bg-primary-blue hover:bg-secondary-blue';
      default:
        return '';
    }
  }, []);

  return (
    <button
      {...props}
      className={clsx(
        'inline-flex whitespace-nowrap px-9 py-2.5 appearance-none cursor-pointer font-semibold text-base text-white justify-center items-center rounded-[40px] transition-colors',
        className,
        variantClass,
        disabled && 'cursor-not-allowed',
      )}
      disabled={disabled}>
      {children}
    </button>
  );
};
