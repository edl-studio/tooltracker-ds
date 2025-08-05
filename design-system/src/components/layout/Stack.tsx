import React from 'react';
import { cn } from '@/lib/utils';
import { LayoutProps } from '@/types';

interface StackProps extends LayoutProps {
  children: React.ReactNode
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ 
    className, 
    children, 
    direction = 'column', 
    align = 'stretch', 
    justify = 'start',
    gap = 'md',
    padding,
    margin,
    ...props 
  }, ref) => {
    const directionClasses = {
      row: 'flex-row',
      column: 'flex-col',
    };

    const alignClasses = {
      start: direction === 'row' ? 'items-start' : 'items-start',
      center: direction === 'row' ? 'items-center' : 'items-center',
      end: direction === 'row' ? 'items-end' : 'items-end',
      stretch: direction === 'row' ? 'items-stretch' : 'items-stretch',
    };

    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    };

    const gapClasses = {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-12',
      '3xl': 'gap-16',
      '4xl': 'gap-24',
      '5xl': 'gap-32',
    };

    const paddingClasses = padding ? {
      none: 'p-0',
      xs: 'p-1',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
      '2xl': 'p-12',
      '3xl': 'p-16',
      '4xl': 'p-24',
      '5xl': 'p-32',
    }[padding] : '';

    const marginClasses = margin ? {
      none: 'm-0',
      xs: 'm-1',
      sm: 'm-2',
      md: 'm-4',
      lg: 'm-6',
      xl: 'm-8',
      '2xl': 'm-12',
      '3xl': 'm-16',
      '4xl': 'm-24',
      '5xl': 'm-32',
    }[margin] : '';

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          directionClasses[direction],
          alignClasses[align],
          justifyClasses[justify],
          gapClasses[gap],
          paddingClasses,
          marginClasses,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

export { Stack };
export type { StackProps }; 