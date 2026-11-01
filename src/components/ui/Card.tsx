import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-[#101A2D]/70 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300',
        hoverEffect &&
          'hover:border-[#3B82F6]/50 hover:bg-[#101A2D]/95 hover:shadow-xl hover:shadow-blue-950/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
