import { cn } from '@/lib/utils';

const badgeVariants = {
  default: 'bg-purple-600 hover:bg-purple-700 text-white',
  secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
  destructive: 'bg-red-600 hover:bg-red-700 text-white',
  outline: 'border border-purple-600 text-purple-600',
};

function Badge({ className, variant = 'default', ...props }) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
