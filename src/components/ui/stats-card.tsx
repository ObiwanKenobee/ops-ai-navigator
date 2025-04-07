
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ className, title, value, icon: Icon, description, trend, variant = 'default', ...props }, ref) => {
    const variantStyles = {
      default: {
        background: 'bg-card',
        border: 'border-border',
        icon: 'text-atlas-teal',
        value: 'text-foreground',
      },
      success: {
        background: 'bg-atlas-success/10',
        border: 'border-atlas-success/20',
        icon: 'text-atlas-success',
        value: 'text-atlas-success',
      },
      warning: {
        background: 'bg-atlas-warning/10',
        border: 'border-atlas-warning/20',
        icon: 'text-atlas-warning',
        value: 'text-atlas-warning',
      },
      danger: {
        background: 'bg-atlas-danger/10',
        border: 'border-atlas-danger/20',
        icon: 'text-atlas-danger',
        value: 'text-atlas-danger',
      },
    };

    return (
      <Card 
        ref={ref} 
        className={cn(
          'overflow-hidden', 
          variantStyles[variant].background,
          variantStyles[variant].border,
          className
        )} 
        {...props}
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          {Icon && <Icon className={cn("h-4 w-4", variantStyles[variant].icon)} />}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-1 animate-fade-in">
            <span className={cn(variantStyles[variant].value)}>{value}</span>
          </div>
          {(description || trend) && (
            <div className="flex items-center text-xs">
              {trend && (
                <span className={cn(
                  "mr-1 font-medium",
                  trend.isPositive ? "text-atlas-success" : "text-atlas-danger"
                )}>
                  {trend.isPositive ? '+' : ''}{trend.value}%
                </span>
              )}
              {description && (
                <span className="text-muted-foreground">{description}</span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
);

StatsCard.displayName = 'StatsCard';

export { StatsCard };
