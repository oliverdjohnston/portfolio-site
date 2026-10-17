'use client';

import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  function handleToggle() {
    setTheme(isDark ? 'light' : 'dark');
  }

  const SunIcon = Icons.sun;
  const MoonIcon = Icons.moon;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button type="button" onClick={handleToggle} className={className}>
          <SunIcon className="animate-icon-in h-[1.2rem] w-[1.2rem] dark:hidden" />
          <MoonIcon className="animate-icon-in hidden h-[1.2rem] w-[1.2rem] dark:block" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Theme</p>
      </TooltipContent>
    </Tooltip>
  );
}
