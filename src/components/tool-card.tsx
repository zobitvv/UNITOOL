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
    // Open in a new tab ("outside") as requested
    window.open(tool.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      className="block cursor-pointer active:scale-95 transition-transform h-full"
    >
      <Card
        className={cn(
          'flex flex-col items-center justify-center p-3 gap-2 transition-all duration-200 hover:bg-accent border shadow-none bg-background text-center h-full min-h-[90px]'
        )}
      >
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 flex-shrink-0 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <CardTitle className="text-[10px] font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2 px-1">
          {tool.title}
        </CardTitle>
      </Card>
    </div>
  );
}
