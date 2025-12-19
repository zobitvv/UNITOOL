import { Wrench } from 'lucide-react';
import React from 'react';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Back to homepage">
      <div className="bg-primary text-primary-foreground p-2 rounded-lg">
        <Wrench className="h-6 w-6" />
      </div>
      <span className="text-xl font-bold tracking-tight font-headline">Toolbox AI</span>
    </a>
  );
}
