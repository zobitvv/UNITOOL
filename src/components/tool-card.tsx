'use client';

import React from 'react';
import type { Tool } from '@/lib/tools';
import { cn } from '@/lib/utils';
import { Card, CardTitle } from '@/components/ui/card';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Open in same window/tab as requested
    window.location.href = tool.href;
  };

  return (
    <div
      onClick={handleClick}
      className="block cursor-pointer active:scale-95 transition-transform"
    >
      <Card
        className={cn(
          'flex flex-col items-center justify-center p-4 gap-2 transition-all duration-200 hover:bg-accent border shadow-none bg-background text-center h-full min-h-[110px]'
        )}
      >
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 flex-shrink-0 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-[11px] font-semibold leading-tight group-hover:text-primary transition-colors">
          {tool.title}
        </CardTitle>
      </Card>
    </div>
  );
}
