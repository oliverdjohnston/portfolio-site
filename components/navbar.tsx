'use client';

import { useState, type MouseEvent, type ReactNode } from 'react';

import Link from 'next/link';

import { navbarData } from '@/data/data';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';

import { ThemeToggle } from '@/components/theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const BASE_WIDTH = 40;
const EXPANDED_WIDTH = 52;
const WIDTH_SPRING = { type: 'spring', stiffness: 400, damping: 30 } as const;

const itemClass = cn(
  buttonVariants({ variant: 'ghost', size: 'icon-lg' }),
  'text-primary hover:text-secondary relative size-full cursor-pointer rounded-full transition-colors duration-200 ease-out hover:bg-transparent active:scale-95 dark:hover:bg-transparent'
);

function DockItem({ hovering, reduce, children }: { hovering: boolean; reduce: boolean | null; children: ReactNode }) {
  if (reduce) {
    return (
      <div data-dock-item className="size-10">
        {children}
      </div>
    );
  }

  return (
    <motion.div
      data-dock-item
      className="h-10 w-10"
      animate={{ width: hovering ? EXPANDED_WIDTH : BASE_WIDTH }}
      transition={WIDTH_SPRING}
    >
      {children}
    </motion.div>
  );
}

function NavItem({ item }: { item: (typeof navbarData)[number] }) {
  const Icon = item.icon;
  const isExternal = item.type === 'contact' && item.href.startsWith('http');

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={item.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
          className={itemClass}
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
}

export function Navbar() {
  const navItems = navbarData.filter((item) => item.type === 'nav');
  const contactItems = navbarData.filter((item) => item.type === 'contact');

  const reduce = useReducedMotion();
  const [highlightX, setHighlightX] = useState(0);
  const [hovering, setHovering] = useState(false);

  const moveHighlight = (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('[data-dock-item]');
    if (!target) return;
    setHighlightX(target.offsetLeft);
    setHovering(true);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center pb-4">
      <div className="bg-background/60 dark:bg-background/80 pointer-events-none fixed inset-x-0 bottom-0 h-16 to-transparent backdrop-blur-2xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />

      <motion.div
        onMouseEnter={() => setHovering(true)}
        onMouseMove={moveHighlight}
        onMouseLeave={() => setHovering(false)}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className={cn(
          'border-border/40 bg-card/80 pointer-events-auto relative flex w-auto max-w-2xl items-center gap-1 rounded-full border px-3 py-1.5 backdrop-blur-2xl',
          'dark:border-border/60 dark:bg-card/70 dark:shadow-md'
        )}
      >
        <motion.div
          aria-hidden
          className="bg-secondary/15 pointer-events-none absolute top-1.5 left-0 h-10 w-10 rounded-full"
          animate={{ x: highlightX, width: hovering ? EXPANDED_WIDTH : BASE_WIDTH, opacity: hovering ? 1 : 0 }}
          transition={
            reduce
              ? { duration: 0 }
              : {
                  x: { type: 'spring', stiffness: 500, damping: 35, mass: 0.8 },
                  width: WIDTH_SPRING,
                  opacity: { duration: 0.15 },
                }
          }
        />

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <DockItem key={item.href} hovering={hovering} reduce={reduce}>
              <NavItem item={item} />
            </DockItem>
          ))}
        </div>

        <Separator orientation="vertical" className="bg-border/60 mx-1 h-6 w-px" />

        <div className="flex items-center gap-1">
          {contactItems.map((item) => (
            <DockItem key={item.href} hovering={hovering} reduce={reduce}>
              <NavItem item={item} />
            </DockItem>
          ))}
        </div>

        <Separator orientation="vertical" className="bg-border/60 mx-1 h-6 w-px" />

        <DockItem hovering={hovering} reduce={reduce}>
          <ThemeToggle />
        </DockItem>
      </motion.div>
    </div>
  );
}
