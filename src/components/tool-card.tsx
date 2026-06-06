'use client';

import React from 'react';
import Link from 'next/link';
import type { Tool } from '@/lib/tools';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

interface ToolCardProps {
  tool: Tool;
  isHighlighted?: boolean;
}

export function ToolCard({ tool, isHighlighted }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <Link
      href={tool.href}
      className="block group"
    >
      <Card
        className={cn(
          'flex flex-row items-center p-3 gap-3 transition-all duration-200 hover:bg-accent active:scale-95 border-none shadow-none bg-background/50',
          isHighlighted && 'bg-primary/5 border border-primary/20'
        )}
      >
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 flex-shrink-0 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-sm font-medium leading-tight group-hover:text-primary transition-colors flex-grow">
          {tool.title}
        </CardTitle>
      </Card>
    </Link>
  );
}
