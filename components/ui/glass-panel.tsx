import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassPanel({ children, className, hover = false }: GlassPanelProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[rgba(57,255,20,0.18)] bg-[#0D1511]/80 backdrop-blur-xl',
        hover &&
          'transition-all duration-300 hover:bg-[#0D1511] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10',
        className
      )}
    >
      {children}
    </div>
  );
}
