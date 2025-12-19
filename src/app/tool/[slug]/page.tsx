import { tools } from '@/lib/tools';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
             <Button variant="outline" size="icon" asChild>
                <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Back to home</span>
                </Link>
            </Button>
            <div>
                <h1 className="text-lg font-semibold">{tool.title}</h1>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          </div>
          <Button asChild variant="outline">
            <a href={tool.href} target="_blank" rel="noopener noreferrer">
              Open in new tab
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>
      <main className="flex-1 flex flex-col">
        <iframe
          src={tool.href}
          title={tool.title}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </main>
    </div>
  );
}
