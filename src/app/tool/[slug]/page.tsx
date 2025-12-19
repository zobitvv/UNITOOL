'use client';
import { tools } from '@/lib/tools';
import { notFound } from 'next/navigation';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) {
    notFound();
  }
  
  const Icon = tool.icon;

  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" passHref>
                <Button variant="outline" size="icon" aria-label="Back to home">
                    <ArrowLeft className="h-4 w-4" />
                </Button>
            </Link>
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                </div>
                <h1 className="text-lg font-semibold">{tool.title}</h1>
            </div>
          </div>
          <a
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open in new tab
            </Button>
          </a>
        </div>
      </header>
      <main className="flex-1">
        <iframe
            src={tool.href}
            title={tool.title}
            className="w-full h-full border-0"
        />
      </main>
    </div>
  );
}
