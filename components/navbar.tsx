import Link from 'next/link';

import { navbarData } from '@/data/data';
import { cn } from '@/lib/utils';

import { ThemeToggle } from '@/components/theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const dockItemClass = cn(
  buttonVariants({ variant: 'ghost', size: 'icon-lg' }),
  'text-primary hover:text-secondary hover:bg-secondary/15 dark:hover:bg-secondary/15 size-full cursor-pointer rounded-full'
);

function NavItem({ item }: { item: (typeof navbarData)[number] }) {
  const Icon = item.icon;
  const isExternal = item.type === 'contact' && item.href.startsWith('http');

  return (
    <li data-dock-item className="size-10">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={item.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            className={dockItemClass}
          >
            <Icon className="size-5" />
            <span className="sr-only">{item.label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{item.label}</p>
        </TooltipContent>
      </Tooltip>
    </li>
  );
}

export function Navbar() {
  const navItems = navbarData.filter((item) => item.type === 'nav');
  const contactItems = navbarData.filter((item) => item.type === 'contact');

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center pb-4">
      <div className="bg-background/60 dark:bg-background/80 pointer-events-none fixed inset-x-0 bottom-0 h-16 to-transparent backdrop-blur-2xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />

      <TooltipProvider>
        <nav
          aria-label="Main"
          data-intro-dock
          className={cn(
            'border-border/40 bg-card/80 pointer-events-auto flex w-auto max-w-2xl items-center gap-1 rounded-full border px-3 py-1.5 backdrop-blur-2xl',
            'dark:border-border/60 dark:bg-card/70 dark:shadow-md'
          )}
        >
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </ul>

          <Separator orientation="vertical" className="bg-border/60 mx-1 h-6 w-px" />

          <ul className="flex items-center gap-1">
            {contactItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </ul>

          <Separator orientation="vertical" className="bg-border/60 mx-1 h-6 w-px" />

          <div data-dock-item className="size-10">
            <ThemeToggle className={dockItemClass} />
          </div>
        </nav>
      </TooltipProvider>
    </div>
  );
}
