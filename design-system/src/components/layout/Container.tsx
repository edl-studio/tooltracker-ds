import React from 'react';
import { cn } from '@/lib/utils';
import { BaseComponentProps } from '@/types';

interface ContainerProps extends BaseComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  centered?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, maxWidth = 'lg', padding = 'md', centered = true, ...props }, ref) => {
    const maxWidthClasses = {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    };

    const paddingClasses = {
      none: '',
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          maxWidthClasses[maxWidth],
          paddingClasses[padding],
          centered && 'mx-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export { Container };
export type { ContainerProps }; 