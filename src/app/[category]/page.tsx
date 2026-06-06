'use client';

import React, { use } from 'react';
import { tools, ToolCategory } from '@/lib/tools';
import { ToolCard } from '@/components/tool-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ArrowLeft } from 'lucide-react';
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
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 -ml-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-extrabold tracking-tight border-b pb-4">
            {categoryName}
          </h1>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredTools.map((tool) => (
              <ToolCard
                key={`${tool.category}-${tool.slug}`}
                tool={tool}
                isHighlighted={false}
                isFavorite={false}
                onToggleFavorite={() => {}}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No tools found in this category.</p>
          </div>
        )}
      </main>
      
      <footer className="py-6 border-t bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Toolbox AI.
          </p>
        </div>
      </footer>
    </div>
  );
}
