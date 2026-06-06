'use client';

import React from 'react';
import { tools, ToolCategory } from '@/lib/tools';
import { ToolCard } from '@/components/tool-card';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const categoryPaths: Record<ToolCategory, string> = {
    'AI Write': 'write',
    'Image Tools': 'image',
    'Pdf Tools': 'pdf',
    'Video Tools': 'video',
    'Converter Tools': 'converter',
    'Web Tools': 'web',
    'Other Tools': 'other',
  };

  const categories = Object.keys(categoryPaths) as ToolCategory[];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex-1 container max-w-2xl mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-1">
            Toolbox AI
          </h1>
          <p className="text-sm text-muted-foreground">
            Fast access to TinyWow tools.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((category) => {
            const categoryTools = tools.filter((t) => t.category === category).slice(0, 8);
            return (
              <section key={category} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">
                    {category}
                  </h2>
                  <Link 
                    href={`/${categoryPaths[category]}`}
                    className="text-xs font-medium text-primary hover:underline flex items-center"
                  >
                    All
                    <ChevronRight className="h-3 w-3 ml-0.5" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 gap-1">
                  {categoryTools.map((tool) => (
                    <ToolCard
                      key={`${tool.category}-${tool.slug}`}
                      tool={tool}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <footer className="py-8 border-t mt-12 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            Powered by TinyWow
          </p>
        </div>
      </footer>
    </div>
  );
}
