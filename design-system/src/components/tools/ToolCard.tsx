import * as React from "react"
import { Icon } from '@/components/ui/icon/icon'
import { Button } from '@/components/ui/button/button'
import { Card, CardContent } from '@/components/ui/card/card'
import { cn } from "@/lib/utils"

interface ToolCardProps {
  id: string;
  name: string;
  category: string;
  status: 'available' | 'assigned' | 'maintenance';
  assignedTo?: string;
  location?: string;
  image?: string;
  className?: string;
}

const statusConfig = {
  available: {
    label: 'Available',
    color: 'bg-green-100 text-green-800',
    icon: 'check_circle'
  },
  assigned: {
    label: 'Assigned',
    color: 'bg-blue-100 text-blue-800',
    icon: 'person'
  },
  maintenance: {
    label: 'Maintenance',
    color: 'bg-yellow-100 text-yellow-800',
    icon: 'build'
  }
};

const ToolCard = React.forwardRef<HTMLDivElement, ToolCardProps>(
  ({ id, name, category, status, assignedTo, location, image, className, ...props }, ref) => {
    const statusInfo = statusConfig[status];

    return (
      <Card 
        ref={ref}
        className={cn(
          'group hover:shadow-md transition-all duration-200 border border-weak',
          className
        )}
        {...props}
      >
        <CardContent className="p-0">
          {/* Tool Image/Icon */}
          <div className="aspect-square bg-flat rounded-sm flex items-center justify-center">
            {image ? (
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover rounded-sm"
              />
            ) : (
              <Icon 
                size={48} 
                className="text-tertiary"
              >
                <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-240h80v80h160v80H360v80h-80Zm-160-80v-80h240v80H120Z" />
              </Icon>
            )}
          </div>

          {/* Tool Details */}
          <div className="p-4 space-y-3">
            {/* Header */}
            <div className="space-y-1">
              <h3 className="font-medium text-primary text-base leading-tight"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {name}
              </h3>
              <p className="font-normal text-tertiary text-sm"
                 style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {category}
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
                             <div className={cn(
                 'px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1',
                 statusInfo.color
               )}>
                <Icon size={12}>
                  {statusInfo.icon === 'check_circle' && 'check_circle'}
                  {statusInfo.icon === 'person' && 'person'}
                  {statusInfo.icon === 'build' && 'build'}
                </Icon>
                {statusInfo.label}
              </div>
            </div>

            {/* Additional Info */}
            {(assignedTo || location) && (
              <div className="space-y-1 text-sm">
                {assignedTo && (
                  <div className="flex items-center gap-2 text-secondary">
                    <Icon size={16}>
                      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H160Z" />
                    </Icon>
                    <span className="font-normal"
                          style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {assignedTo}
                    </span>
                  </div>
                )}
                {location && (
                  <div className="flex items-center gap-2 text-secondary">
                    <Icon size={16}>
                      <path d="M480-320q33 0 56.5-23.5T560-400q0-33-23.5-56.5T480-480q-33 0-56.5 23.5T400-400q0 33 23.5 56.5T480-320Zm0-240q-66 0-113 47t-47 113q0 66 47 113t113 47q66 0 113-47t47-113q0-66-47-113t-113-47Zm0 320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
                    </Icon>
                    <span className="font-normal"
                          style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {location}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
              >
                <Icon size={16}>
                  <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm0 240q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Z" />
                </Icon>
                View
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="flex-1"
              >
                <Icon size={16}>
                  <path d="M200-200h57l391-391-28-28-391 391v28Zm-80 80v-128l544-544 128 128-544 544H120Zm128-128-28-28 28 28Zm128-128-28-28 28 28Z" />
                </Icon>
                Edit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
);

ToolCard.displayName = 'ToolCard';

export { ToolCard };
export type { ToolCardProps }; 