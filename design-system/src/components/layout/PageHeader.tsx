import * as React from "react"
import { Icon } from '@/components/ui/icon/icon'
import { Button } from '@/components/ui/button/button'
import { Badge } from '@/components/ui/badge/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select/select'
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string;
  badgeCount?: number;
  actions?: Array<{
    label: string;
    variant?: 'primary' | 'outline';
    iconLeft?: string;
    iconRight?: string;
    onClick?: () => void;
  }> | React.ReactNode[];
  showSearch?: boolean;
  showCategoryFilter?: boolean;
  onSearchChange?: (value: string) => void;
  onCategoryChange?: (value: string) => void;
  className?: string;
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ 
    title, 
    badgeCount, 
    actions = [], 
    showSearch = false, 
    showCategoryFilter = false,
    onSearchChange,
    onCategoryChange,
    className,
    ...props 
  }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          'relative w-full',
          className
        )}
        {...props}
      >
        <div className="relative w-full">
          <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start pb-4 pt-9 relative w-full">
            {/* Title and Actions Row */}
            <div className="box-border content-stretch flex flex-row items-start justify-between px-4 sm:px-6 md:px-8 lg:px-12 relative shrink-0 w-full">
              {/* Page Title with Badge */}
              <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0">
                <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[var(--content-primary)] text-[36px] text-left text-nowrap"
                     style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  <h1 className="block leading-[1.2] whitespace-pre">{title}</h1>
                </div>
                {badgeCount !== undefined && (
                  <div className="flex flex-row items-end self-stretch">
                    <div className="box-border content-stretch flex flex-col gap-2.5 h-full items-end justify-end px-0 py-1.5 relative shrink-0">
                      <Badge variant="default" className="text-sm font-medium">
                        {badgeCount}
                      </Badge>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions Container */}
              {actions.length > 0 && (
                <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0">
                  {actions.map((action, index) => {
                    // Check if action is a React element (JSX)
                    if (React.isValidElement(action)) {
                      return action;
                    }
                    // Handle legacy action objects
                    return (
                      <Button
                        key={index}
                        variant={(action as any).variant || 'primary'}
                        onClick={(action as any).onClick}
                        iconLeft={(action as any).iconLeft}
                        iconRight={(action as any).iconRight}
                      >
                        {(action as any).label}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Search and Filter Row */}
            {(showSearch || showCategoryFilter) && (
              <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-4 sm:px-6 md:px-8 lg:px-12 relative shrink-0 w-full">
                {/* Search Input */}
                {showSearch && (
                  <div className="w-64">
                    <div className="bg-[var(--background-controls)] hover:bg-[var(--background-controls-hover)] transition-colors relative rounded-sm w-full border border-[var(--border-weak)]">
                      <div className="flex flex-row items-center overflow-clip relative w-full h-full">
                        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-3 py-2 relative w-full">
                          <Icon 
                            size={20} 
                            className="text-[var(--content-tertiary)] shrink-0"
                          >
                            <path d="M784-120 532-372q-30 24-69 38.5T384-320q-108 0-184-76t-76-184q0-108 76-184t184-76q108 0 184 76t76 184q0 44-14.5 83T532-372l252 252-56 56ZM384-400q75 0 127.5-52.5T564-580q0-75-52.5-127.5T384-760q-75 0-127.5 52.5T204-580q0 75 52.5 127.5T384-400Z" />
                          </Icon>
                          <input
                            type="text"
                            placeholder="Search"
                            className="basis-0 font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[var(--content-tertiary)] text-[14px] text-left bg-transparent outline-none placeholder:text-[var(--content-tertiary)]"
                            style={{ fontFamily: 'Satoshi, sans-serif' }}
                            onChange={(e) => onSearchChange?.(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Category Filter */}
                {showCategoryFilter && (
                  <div className="shrink-0">
                    <Select onValueChange={onCategoryChange}>
                      <SelectTrigger className="bg-[var(--background-controls)] hover:bg-[var(--background-controls-hover)] transition-colors border-[var(--border-weak)] h-9 px-3 py-2 rounded-sm">
                        <SelectValue 
                          placeholder="All categories"
                          className="font-normal text-[var(--content-primary)] text-[14px] leading-[1.4]"
                          style={{ fontFamily: 'Satoshi, sans-serif' }}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All categories</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="productivity">Productivity</SelectItem>
                        <SelectItem value="analytics">Analytics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

PageHeader.displayName = 'PageHeader';

export { PageHeader };
export type { PageHeaderProps }; 