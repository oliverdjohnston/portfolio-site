'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { navbarData } from '@/data/data';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import { ThemeToggle } from '@/components/theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const itemClass = cn(
  buttonVariants({ variant: 'ghost', size: 'icon-lg' }),
  'text-primary hover:text-secondary relative cursor-pointer rounded-full transition-[transform,color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-transparent active:scale-95'
);

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightX, setHighlightX] = useState(0);
  const [hovering, setHovering] = useState(false);

  // Slide a single highlight pill behind whichever item the cursor is over.
  const moveHighlight = (e: React.MouseEvent) => {
    const container = containerRef.current;
    const target = (e.target as HTMLElement).closest<HTMLElement>('[data-dock-item]');
    if (!container || !target) return;
    setHighlightX(target.getBoundingClientRect().left - container.getBoundingClientRect().left);
    setHovering(true);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center pb-4">
      <div className="bg-background/60 dark:bg-background/80 pointer-events-none fixed inset-x-0 bottom-0 h-16 to-transparent backdrop-blur-2xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />

      <motion.div
        ref={containerRef}
        onMouseMove={moveHighlight}
        onMouseLeave={() => setHovering(false)}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className={cn(
          'border-border/40 bg-card/80 pointer-events-auto relative flex w-auto max-w-2xl items-center gap-1 rounded-full border px-3 py-1.5 backdrop-blur-2xl',
          'dark:border-border/60 dark:bg-card/70 dark:shadow-md'
        )}
      >
        <motion.div
          aria-hidden
          className="bg-secondary/15 pointer-events-none absolute top-1.5 left-0 size-10 rounded-full"
          animate={{ x: highlightX, opacity: hovering ? 1 : 0 }}
          transition={
            reduce
              ? { duration: 0 }
              : { x: { type: 'spring', stiffness: 500, damping: 35, mass: 0.8 }, opacity: { duration: 0.15 } }
          }
        />

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.href} data-dock-item>
              <NavItem item={item} />
            </div>
          ))}
        </div>

        <Separator orientation="vertical" className="bg-border/60 mx-1 h-6 w-px" />

        <div className="flex items-center gap-1">
          {contactItems.map((item) => (
            <div key={item.href} data-dock-item>
              <NavItem item={item} />
            </div>
          ))}
        </div>

        <Separator orientation="vertical" className="bg-border/60 mx-1 h-6 w-px" />

        <div data-dock-item>
          <ThemeToggle />
        </div>
      </motion.div>
    </div>
  );
}
