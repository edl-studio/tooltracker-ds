import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';
import { Button } from '../button/button';

export function TestTooltip() {
  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Test Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a test tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
} 