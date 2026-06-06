'use client';

import React from 'react';
import { tools, ToolCategory } from '@/lib/tools';
import { ToolCard } from '@/components/tool-card';
import { Card, CardContent } from '@/components/ui/card';
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
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Toolbox AI Directory
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore hundreds of tools powered by TinyWow.
          </p>
        </div>

        <div className="grid gap-12">
          {categories.map((category) => {
            const categoryTools = tools.filter((t) => t.category === category).slice(0, 10);
            return (
              <section key={category} className="space-y-6">
                <div className="flex items-center justify-between border-b pb-2">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {category}
                  </h2>
                  <Link 
                    href={`/${categoryPaths[category]}`}
                    className="flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View all {category}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {categoryTools.map((tool) => (
                    <ToolCard
                      key={`${tool.category}-${tool.slug}`}
                      tool={tool}
                      isHighlighted={false}
                      isFavorite={false}
                      onToggleFavorite={() => {}}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <footer className="py-12 border-t mt-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Toolbox AI. All tools provided by TinyWow.
          </p>
        </div>
      </footer>
    </div>
  );
}
