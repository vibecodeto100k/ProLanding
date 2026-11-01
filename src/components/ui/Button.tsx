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
    // Base layout & accessibility
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D1A]';

    // Proportional padding (width ≈ 2x height)
    const sizeStyles = {
      sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5 h-8',
      md: 'text-sm px-5 py-2.5 rounded-xl gap-2 h-10',
      lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 h-12',
    };

    // Design system variants
    const variantStyles = {
      primary:
        'bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white hover:from-[#60A5FA] hover:to-[#3B82F6] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] border border-blue-400/30',
      secondary:
        'bg-[#101A2D] text-[#FFFFFF] hover:bg-[#1A2844] border border-white/10 hover:border-white/20 active:scale-[0.98]',
      outline:
        'bg-transparent text-[#FFFFFF] border border-white/15 hover:border-[#3B82F6] hover:bg-[#101A2D]/60 hover:text-[#60A5FA] active:scale-[0.98]',
      ghost:
        'bg-transparent text-[#A3AEC2] hover:text-[#FFFFFF] hover:bg-[#101A2D]/50 active:scale-[0.98]',
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
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
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
