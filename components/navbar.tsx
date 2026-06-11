'use client';

import { useRef, type ReactNode } from 'react';
import Link from 'next/link';
import { navbarData } from '@/data/data';
import { cn } from '@/lib/utils';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from 'motion/react';
import { ThemeToggle } from '@/components/theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const SPRING = { mass: 0.1, stiffness: 160, damping: 14 } as const;

// Widens each item as the cursor nears it (the dock fluidly expands and the
// container grows with it). Children must fill the item with `size-full`.
function DockItem({
  mouseX,
  reduce,
  children,
}: {
  mouseX: MotionValue<number>;
  reduce: boolean | null;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return Infinity;
    return val - bounds.x - bounds.width / 2;
  });
  const width = useSpring(useTransform(distance, [-140, 0, 140], [40, 64, 40]), SPRING);

  if (reduce) {
    return (
      <div ref={ref} className="size-10">
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ width }} className="h-10">
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
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon-lg' }),
            'bg-background/40 text-primary hover:bg-secondary/20 hover:text-secondary size-full cursor-pointer rounded-full backdrop-blur-xl transition-colors duration-200 ease-out active:scale-95'
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
}

export function Navbar() {
  const navItems = navbarData.filter((item) => item.type === 'nav');
  const contactItems = navbarData.filter((item) => item.type === 'contact');

  const reduce = useReducedMotion();
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center pb-4">
      <div className="bg-background/60 dark:bg-background/80 pointer-events-none fixed inset-x-0 bottom-0 h-16 to-transparent backdrop-blur-2xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />

      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          'border-border/40 bg-card/80 pointer-events-auto relative flex w-auto max-w-2xl items-center gap-1 rounded-full border px-3 py-1.5 backdrop-blur-2xl',
          'dark:border-border/60 dark:bg-card/70 dark:shadow-md'
        )}
      >
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <DockItem key={item.href} mouseX={mouseX} reduce={reduce}>
              <NavItem item={item} />
            </DockItem>
          ))}
        </div>

        <Separator orientation="vertical" className="bg-border/60 mx-1 h-6 w-px" />

        <div className="flex items-center gap-1">
          {contactItems.map((item) => (
            <DockItem key={item.href} mouseX={mouseX} reduce={reduce}>
              <NavItem item={item} />
            </DockItem>
          ))}
        </div>

        <Separator orientation="vertical" className="bg-border/60 mx-1 h-6 w-px" />

        <DockItem mouseX={mouseX} reduce={reduce}>
          <ThemeToggle />
        </DockItem>
      </motion.div>
    </div>
  );
}
