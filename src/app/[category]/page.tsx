'use client';

import React, { use } from 'react';
import { tools, ToolCategory } from '@/lib/tools';
import { ToolCard } from '@/components/tool-card';
import { notFound } from 'next/navigation';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryPath } = use(params);

  const categoryMap: Record<string, ToolCategory> = {
    'write': 'AI Write',
    'image': 'Image Tools',
    'pdf': 'Pdf Tools',
    'video': 'Video Tools',
    'converter': 'Converter Tools',
    'web': 'Web Tools',
    'other': 'Other Tools',
  };

  const categoryName = categoryMap[categoryPath];

  if (!categoryName) {
    notFound();
  }

  const filteredTools = tools.filter((t) => t.category === categoryName);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex-1 container max-w-2xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">
            {categoryName}
          </h1>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 gap-1">
            {filteredTools.map((tool) => (
              <ToolCard
                key={`${tool.category}-${tool.slug}`}
                tool={tool}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-sm text-muted-foreground">No tools available.</p>
          </div>
        )}
      </main>
      
      <footer className="py-6 border-t bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            Toolbox AI
          </p>
        </div>
      </footer>
    </div>
  );
}
