'use client';

import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  function handleToggle() {
    setTheme(isDark ? 'light' : 'dark');
  }

  const SunIcon = Icons.sun;
  const MoonIcon = Icons.moon;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={handleToggle}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon-lg' }),
            'text-primary hover:text-secondary relative cursor-pointer rounded-full transition-[transform,color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-transparent active:scale-95'
          )}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Theme</p>
      </TooltipContent>
    </Tooltip>
  );
}
