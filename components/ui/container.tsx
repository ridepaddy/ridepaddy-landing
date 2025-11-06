import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'full';
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        {
          'max-w-[1920px]': size === 'default',
          'max-w-7xl': size === 'narrow',
          'max-w-none': size === 'full',
        },
        className
      )}
    >
      {children}
    </div>
  );
}
