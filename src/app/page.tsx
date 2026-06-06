'use client';

import React from 'react';
import { tools, ToolCategory } from '@/lib/tools';
import { ToolCard } from '@/components/tool-card';
import { ThemeToggle } from '@/components/theme-toggle';
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
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-center">
              Toolbox AI
            </h1>
            <p className="text-center text-muted-foreground text-sm mt-2">
              Professional tools, simplified for you.
            </p>
          </div>
          <div className="absolute right-4 top-8 md:right-8">
            <ThemeToggle />
          </div>
        </div>

        <div className="space-y-12">
          {categories.map((category) => {
            const categoryTools = tools.filter((t) => t.category === category);
            // Show priority tools first, then the rest (up to 10 for preview)
            const previewTools = categoryTools.slice(0, 10);
            
            return (
              <section key={category} className="space-y-4">
                <div className="flex items-center justify-between border-b border-muted-foreground/10 pb-2">
                  <h2 className="text-lg font-bold text-foreground/90">
                    {category}
                  </h2>
                  <Link 
                    href={`/${categoryPaths[category]}`}
                    className="text-[10px] font-bold text-primary flex items-center bg-primary/5 px-2 py-1 rounded border border-primary/10 hover:bg-primary/10 transition-colors"
                  >
                    VIEW ALL
                    <ChevronRight className="h-3 w-3 ml-0.5" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {previewTools.map((tool) => (
                    <ToolCard
                      key={`${tool.category}-${tool.slug}-${tool.title}`}
                      tool={tool}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <footer className="py-10 border-t mt-12 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            FAST AI ACCESS
          </p>
        </div>
      </footer>
    </div>
  );
}
