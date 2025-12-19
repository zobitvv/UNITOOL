'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { tools, Tool } from '@/lib/tools';
import { getAiRecommendation } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Search, LoaderCircle, Sparkles, AlertTriangle, Star, Frown } from 'lucide-react';
import { ToolCard } from '@/components/tool-card';
import { Logo } from '@/components/logo';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

type Recommendation = {
  toolTitle: string;
  reason: string;
} | null;

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [aiInput, setAiInput] = useState('');
  const [aiResult, setAiResult] = useState<Recommendation>(null);
  const [aiError, setAiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedTool, setHighlightedTool] = useState<string | null>(null);

  const toolRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const storedFavorites = localStorage.getItem('toolFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (toolTitle: string) => {
    const newFavorites = favorites.includes(toolTitle)
      ? favorites.filter((fav) => fav !== toolTitle)
      : [...favorites, toolTitle];
    setFavorites(newFavorites);
    localStorage.setItem('toolFavorites', JSON.stringify(newFavorites));
  };
  
  const categories = useMemo(() => ['All', 'Favorites', ...new Set(tools.map((t) => t.category))], []);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const isInFavorites = favorites.includes(tool.title);
      const matchesCategory =
        activeCategory === 'All' ||
        (activeCategory === 'Favorites' && isInFavorites) ||
        tool.category === activeCategory;
      
      const matchesSearch =
        search === '' ||
        tool.title.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory, favorites]);

  useEffect(() => {
    if (highlightedTool && toolRefs.current[highlightedTool]) {
      toolRefs.current[highlightedTool]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      const timer = setTimeout(() => setHighlightedTool(null), 3000); // Remove highlight after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [highlightedTool]);

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;

    setIsLoading(true);
    setAiResult(null);
    setAiError(null);
    setHighlightedTool(null);

    const result = await getAiRecommendation(aiInput);

    if (result.data) {
      setAiResult(result.data);
      setHighlightedTool(result.data.toolTitle);
    } else {
      setAiError(result.error || 'An unexpected error occurred.');
    }
    setIsLoading(false);
  };
  
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Logo />
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    The Ultimate AI-Powered Toolkit
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A massive collection of free tools to solve your problems. Can't find what you need? Let our AI guide you.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md shadow-2xl">
                  <CardHeader>
                    <CardTitle>Let AI find the right tool</CardTitle>
                    <CardDescription>Describe what you want to do, and we'll suggest the best tool for the job.</CardDescription>
                  </CardHeader>
                  <form onSubmit={handleAiSubmit}>
                    <CardContent>
                      <div className="space-y-2">
                        <Input
                          id="ai-prompt"
                          placeholder="e.g., 'I need to make a PDF smaller'"
                          value={aiInput}
                          onChange={(e) => setAiInput(e.target.value)}
                          disabled={isLoading}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-4">
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? <LoaderCircle className="animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                        Get Recommendation
                      </Button>
                      {aiResult && (
                         <Alert>
                           <Sparkles className="h-4 w-4" />
                           <AlertTitle>We recommend: {aiResult.toolTitle}</AlertTitle>
                           <AlertDescription>{aiResult.reason}</AlertDescription>
                         </Alert>
                      )}
                      {aiError && (
                        <Alert variant="destructive">
                           <AlertTriangle className="h-4 w-4" />
                           <AlertTitle>Error</AlertTitle>
                           <AlertDescription>{aiError}</AlertDescription>
                         </Alert>
                      )}
                    </CardFooter>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className="w-full py-12 md:py-24">
          <div className="container space-y-8 px-4 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">Explore Our Tools</h2>
                <p className="text-muted-foreground">
                  Browse by category or search for the perfect tool.
                </p>
              </div>
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search tools..."
                  className="pl-10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category)}
                  className="gap-2"
                >
                  {category === 'Favorites' && <Star className="h-4 w-4" />}
                  {category}
                </Button>
              ))}
            </div>

            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredTools.map((tool) => (
                  <div key={tool.title} ref={(el) => (toolRefs.current[tool.title] = el)}>
                    <ToolCard
                      tool={tool}
                      isHighlighted={highlightedTool === tool.title}
                      isFavorite={favorites.includes(tool.title)}
                      onToggleFavorite={() => toggleFavorite(tool.title)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
                <Frown className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">No tools found</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Toolbox AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
