import React from 'react';
import MainNav from '@/components/headers/main-nav';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import ModeToggle from './ModeToggle';
import MobileNav from './mobile-nav';
import { buttonVariants } from '../ui/button';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 w-full max-w-screen-2xl items-center justify-between">
        <div className="flex">
          <CodeBracketIcon className=" mr-5 h-6 w-6 opacity-80" />
        </div>
        <MainNav />

        <div className="flex items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <MobileNav />
            <Link href="/" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <GitHubLogoIcon className="h-5 w-5 fill-current" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href="/" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <TwitterLogoIcon className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>

            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
