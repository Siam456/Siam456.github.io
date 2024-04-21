import { CodeBracketIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function SiteFooter() {
  return (
    <div>
      <div className="flex h-64 w-full items-center justify-center border-b">
        <CodeBracketIcon className="h-10 text-muted-foreground" />
      </div>
      <div className="flex h-28 w-full items-center justify-center border-b">
        <p>
          Designed and developed by{' '}
          <span className="text-indigo-500 ">Hasibul Hasan</span> © 2024
        </p>
      </div>
    </div>
  );
}
