import React from 'react';
import { cn } from '../../lib/utils';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  hasBorder?: boolean;
  surface?: 'base' | 'surface' | 'darker';
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  containerSize = 'lg',
  hasBorder = false,
  surface = 'base',
  className,
  ...props
}) => {
  const surfaceStyles = {
    base: 'bg-[#070B14]',
    surface: 'bg-[#0B1120]/70',
    darker: 'bg-[#05080F]',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-20 sm:py-28 relative overflow-hidden',
        hasBorder && 'border-t border-slate-800/80',
        surfaceStyles[surface],
        className
      )}
      {...props}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};
