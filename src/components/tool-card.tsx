'use client';

import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import type { Tool } from '@/lib/tools';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ToolCardProps {
  tool: Tool;
  isHighlighted: boolean;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const categoryColors: { [key: string]: string } = {
  'AI Write': 'bg-[hsl(var(--chart-1)/.1)] text-[hsl(var(--chart-1))] border-[hsl(var(--chart-1)/.2)]',
  'Image Tools': 'bg-[hsl(var(--chart-2)/.1)] text-[hsl(var(--chart-2))] border-[hsl(var(--chart-2)/.2)]',
  'Pdf Tools': 'bg-[hsl(var(--chart-3)/.1)] text-[hsl(var(--chart-3))] border-[hsl(var(--chart-3)/.2)]',
  'Video Tools': 'bg-[hsl(var(--chart-4)/.1)] text-[hsl(var(--chart-4))] border-[hsl(var(--chart-4)/.2)]',
  'Converter Tools': 'bg-[hsl(var(--chart-5)/.1)] text-[hsl(var(--chart-5))] border-[hsl(var(--chart-5)/.2)]',
  'Web Tools': 'bg-[hsl(var(--chart-1)/.1)] text-[hsl(var(--chart-1))] border-[hsl(var(--chart-1)/.2)]',
  'Other Tools': 'bg-muted text-muted-foreground border-border/50',
};

export function ToolCard({ tool, isHighlighted, isFavorite, onToggleFavorite }: ToolCardProps) {
  const Icon = tool.icon;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite();
  };

  return (
    <Link
      href={tool.internalHref}
      className="block h-full group"
    >
      <Card
        className={cn(
          'h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1',
          isHighlighted && 'ring-2 ring-primary ring-offset-2 ring-offset-background'
        )}
      >
        <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 flex-shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-grow">
            <CardTitle className="text-base font-bold leading-tight group-hover:text-primary transition-colors">
              {tool.title}
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full shrink-0"
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Star className={cn('h-5 w-5', isFavorite ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground')} />
          </Button>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
            <CardDescription className="text-sm line-clamp-2">
                {tool.description}
            </CardDescription>
            <div className="mt-4">
                <Badge variant="outline" className={cn(categoryColors[tool.category] || categoryColors['Other Tools'])}>
                    {tool.category}
                </Badge>
            </div>
        </CardContent>
      </Card>
    </Link>
  );
}
