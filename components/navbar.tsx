'use client';

import Link from 'next/link';
import { contactData, navbarData } from '@/data/data';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center pb-4">
      {/* Faded background at the very bottom for a subtle dock effect */}
      <div className="bg-background/60 dark:bg-background/80 pointer-events-none fixed inset-x-0 bottom-0 h-16 to-transparent backdrop-blur-2xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />

      {/* Main pill navbar */}
      <div
        className={cn(
          'border-border/40 bg-card/80 pointer-events-auto relative flex w-auto max-w-2xl items-center gap-1 rounded-full border px-3 py-1.5 backdrop-blur-2xl',
          'dark:border-border/60 dark:bg-card/70 dark:shadow-md'
        )}
      >
        {/* Primary nav icons */}
        <div className="flex items-center gap-1">
          {navbarData.map((item) => {
            const Icon = item.icon;
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon-lg' }),
                      'bg-background/40 text-primary hover:bg-secondary/20 hover:text-secondary cursor-pointer rounded-full backdrop-blur-xl transition-colors duration-200 ease-out'
                    )}
                  >
                    <Icon className="size-5" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        {/* Divider line */}
        <div className="bg-border/60 mx-1 h-6 w-px" />

        {/* Social icons */}
        <div className="flex items-center gap-1">
          {Object.entries(contactData.social)
            .filter(([, social]) => social.navbar)
            .map(([name, social]) => {
              const Icon = social.icon;
              return (
                <Tooltip key={name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : undefined}
                      rel={social.url.startsWith('http') ? 'noreferrer' : undefined}
                      className={cn(
                        buttonVariants({ variant: 'ghost', size: 'icon-lg' }),
                        'bg-background/30 text-primary hover:bg-secondary/20 hover:text-secondary cursor-pointer rounded-full backdrop-blur-xl transition-colors duration-200 ease-out'
                      )}
                    >
                      <Icon className="size-5" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
        </div>

        {/* Divider line */}
        <div className="bg-border/60 mx-1 h-6 w-px" />

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </div>
  );
}
