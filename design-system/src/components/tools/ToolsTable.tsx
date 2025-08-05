import * as React from "react"
import { Icon } from '@/components/ui/icon/icon'
import { Button } from '@/components/ui/button/button'
import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { cn } from "@/lib/utils"

export interface ToolData {
  id: string;
  name: string;
  category: string;
  serialNumber: string;
  manufacturer: string;
  assignedTo?: {
    type: 'person' | 'container' | 'vehicle';
    name: string;
    initials?: string;
  };
}

interface ToolsTableProps {
  tools: ToolData[];
  onSelectTool?: (toolId: string) => void;
  onSelectAll?: (selected: boolean) => void;
  onAssignTool?: (toolId: string) => void;
  onSortChange?: (column: string, direction: 'asc' | 'desc') => void;
  className?: string;
}

const categoryConfig = {
  'Power tools': { color: '#325246', label: 'Power tools' },
  'Hand tools': { color: '#e08700', label: 'Hand tools' },
  'Fastening tools': { color: '#ff5a1f', label: 'Fastening tools' },
  'Safety Equipment': { color: '#1a73e8', label: 'Safety Equipment' },
  'Measuring Tools': { color: '#9c27b0', label: 'Measuring Tools' },
  'Heavy Equipment': { color: '#795548', label: 'Heavy Equipment' },
  'None': { color: '#dbe4eb', label: 'None' }
};

const ToolsTable = React.forwardRef<HTMLDivElement, ToolsTableProps>(
  ({ tools, onSelectTool, onSelectAll, onAssignTool, onSortChange, className, ...props }, ref) => {
    const [selectedTools, setSelectedTools] = React.useState<Set<string>>(new Set());


    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedTools(new Set(tools.map(tool => tool.id)));
      } else {
        setSelectedTools(new Set());
      }
      onSelectAll?.(checked);
    };

    const handleSelectTool = (toolId: string, checked: boolean) => {
      const newSelected = new Set(selectedTools);
      if (checked) {
        newSelected.add(toolId);
      } else {
        newSelected.delete(toolId);
      }
      setSelectedTools(newSelected);
      onSelectTool?.(toolId);
    };



    const isAllSelected = selectedTools.size === tools.length && tools.length > 0;
    const isSomeSelected = selectedTools.size > 0 && selectedTools.size < tools.length;

    const renderAssignedTo = (tool: ToolData) => {
      if (!tool.assignedTo) {
        return (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-6 w-6 p-0 border-[var(--border-weak)]"
              onClick={() => onAssignTool?.(tool.id)}
            >
              <Icon size={16}>
                {'more_vert'}
              </Icon>
            </Button>
            <span className="text-tertiary text-sm font-normal"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Assign tool
            </span>
          </div>
        );
      }

                let avatarContent;
          let bgColor = 'bg-brand';

          switch (tool.assignedTo.type) {
            case 'person':
              avatarContent = tool.assignedTo.initials ? (
                <span className="text-xs font-bold text-primary"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {tool.assignedTo.initials}
                </span>
              ) : (
                <Icon size={16} className="text-primary">
                  {'person'}
                </Icon>
              );
              break;
            case 'container':
              avatarContent = <Icon size={16} className="text-primary">
                {'build'}
              </Icon>;
              break;
            case 'vehicle':
              avatarContent = <Icon size={16} className="text-primary">
                {'folder'}
              </Icon>;
              break;
          }

      return (
        <div className="flex items-center gap-2">
          <div className={cn('flex items-center justify-center size-6 rounded-sm', bgColor)}>
            {avatarContent}
          </div>
          <span className="text-primary text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap"
                style={{ fontFamily: 'Satoshi, sans-serif' }}>
            {tool.assignedTo.name}
          </span>
        </div>
      );
    };

    return (
      <div 
        ref={ref}
        className={cn('w-full', className)}
        {...props}
      >
        {/* Table Header */}
        <div className="px-12">
                        <div className="flex items-center gap-4 py-4 border-b-2 border-primary">
            {/* Select All Checkbox */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <Checkbox
                  checked={isAllSelected}
                  indeterminate={isSomeSelected}
                  onCheckedChange={(checked) => handleSelectAll(checked as boolean)}
                />
              </div>
            </div>

            {/* Header Columns */}
            <div className="flex items-center w-[260px]">
              <span className="label-2xs-medium">
                NAME
              </span>
            </div>

            <div className="w-[196px]">
              <span className="label-2xs-medium">
                CATEGORY
              </span>
            </div>

            <div className="w-40">
              <span className="label-2xs-medium">
                SERIAL NUMBER
              </span>
            </div>

            <div className="w-32">
              <span className="label-2xs-medium">
                MANUFACTURER
              </span>
            </div>

            <div className="w-40">
              <span className="label-2xs-medium">
                ASSIGNED TO
              </span>
            </div>
          </div>
        </div>

        {/* Table Rows */}
        <div>
          {tools.map((tool) => {
            const isSelected = selectedTools.has(tool.id);
            const categoryInfo = categoryConfig[tool.category as keyof typeof categoryConfig] || categoryConfig['None'];

            return (
              <div 
                key={tool.id}
                className="hover:bg-controls-hover transition-colors group"
              >
                <div className="px-12">
                  <div className="flex items-center gap-4 py-5 border-b border-weak">
                  {/* Row Checkbox */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={(checked) => handleSelectTool(tool.id, checked as boolean)}
                      />
                    </div>
                  </div>

                  {/* Tool Name with Icon */}
                  <div className="flex items-center gap-4 w-[260px]">
                    <div className="bg-brand flex items-center justify-center w-8 h-8 rounded-sm">
                      <Icon size={20} className="text-primary">
                        {'folder'}
                      </Icon>
                    </div>
                    <span className="text-sm font-normal text-primary overflow-hidden text-ellipsis whitespace-nowrap"
                          style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {tool.name}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="w-[196px]">
                    <div className="bg-white border border-weak px-2 py-1 flex items-center gap-1.5 w-fit">
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: categoryInfo.color }}
                      />
                      <span className="text-sm font-normal text-primary"
                            style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        {categoryInfo.label}
                      </span>
                    </div>
                  </div>

                  {/* Serial Number */}
                  <div className="w-40">
                    <span className="text-sm font-normal text-primary"
                          style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {tool.serialNumber}
                    </span>
                  </div>

                  {/* Manufacturer */}
                  <div className="w-32">
                    <span className="text-sm font-normal text-primary"
                          style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {tool.manufacturer}
                    </span>
                  </div>

                  {/* Assigned To */}
                  <div className="w-40">
                    <div>
                      {renderAssignedTo(tool)}
                    </div>
                  </div>

                  {/* Actions (visible on hover) */}
                  <div className="flex-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 w-9 p-0 bg-white border-weak"
                    >
                      <Icon size={16}>
                        {'more_vert'}
                      </Icon>
                    </Button>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

ToolsTable.displayName = 'ToolsTable';

export { ToolsTable };
export type { ToolsTableProps }; 