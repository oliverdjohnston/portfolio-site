'use client';

import { useTheme } from 'next-themes';

import { FaMoon, FaSun } from 'react-icons/fa';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className={className}
        >
          <FaSun className="animate-icon-in h-[1.2rem] w-[1.2rem] dark:hidden" />
          <FaMoon className="animate-icon-in hidden h-[1.2rem] w-[1.2rem] dark:block" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Theme</p>
      </TooltipContent>
    </Tooltip>
  );
}
