import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Base layout & ergonomics: min 44px touch target on mobile via padding / height
    const baseStyles =
      'group relative inline-flex items-center justify-center font-medium transition-all duration-200 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D1A]';

    // Proportional padding & vertical balance
    const sizeStyles = {
      sm: 'text-xs px-4 py-2 rounded-lg gap-1.5 h-9 font-semibold tracking-wide',
      md: 'text-sm px-5 py-2.5 rounded-xl gap-2 h-11 font-semibold tracking-tight',
      lg: 'text-base px-7 py-3 rounded-xl gap-2.5 h-12 font-semibold tracking-tight',
    };

    // Award-winning agency variants with hardware-inspired inner highlights
    const variantStyles = {
      primary:
        'bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] text-white border border-blue-400/40 shadow-[0_4px_16px_rgba(37,99,235,0.35),inset_0_1px_0_0_rgba(255,255,255,0.25)] hover:shadow-[0_6px_24px_rgba(59,130,246,0.5),inset_0_1px_0_0_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
      secondary:
        'bg-[#101A2D] text-white border border-white/10 hover:border-white/20 hover:bg-[#15233D] shadow-[0_2px_10px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
      outline:
        'bg-white/[0.03] text-white border border-white/15 hover:border-[#3B82F6]/60 hover:bg-blue-500/[0.08] hover:text-[#93C5FD] shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
      ghost:
        'bg-transparent text-[#94A3B8] hover:text-white hover:bg-white/[0.06] active:scale-[0.98]',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
