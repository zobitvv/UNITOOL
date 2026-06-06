'use client';

import React from 'react';
import type { Tool } from '@/lib/tools';
import { cn } from '@/lib/utils';
import { Card, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  const handleMainClick = () => {
    window.open(tool.href, '_self');
  };

  return (
    <div className="relative group h-full">
      <div
        onClick={handleMainClick}
        className="block cursor-pointer active:scale-95 transition-transform h-full"
      >
        <Card
          className={cn(
            'flex flex-col items-center justify-center p-3 gap-2 transition-all duration-200 hover:bg-accent border shadow-none bg-background text-center h-full min-h-[110px]'
          )}
        >
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 flex-shrink-0 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="text-xs font-bold leading-tight line-clamp-2 px-1">
            {tool.title}
          </CardTitle>
        </Card>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <button
            onClick={(e) => e.stopPropagation()}
            className="absolute top-1.5 right-1.5 p-1 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors z-10"
            aria-label={`About ${tool.title}`}
          >
            <Info className="h-4 w-4" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[90vw] sm:max-w-[425px] rounded-lg">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <DialogTitle className="text-lg">{tool.title}</DialogTitle>
            </div>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {tool.description || `Use this ${tool.category.toLowerCase()} tool to ${tool.title.toLowerCase()}. Reliable and fast AI-powered processing.`}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
