'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import * as TabsPrimitive from '@radix-ui/react-tabs';

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn('flex flex-col gap-2', className)} {...props} />;
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn('bg-muted text-muted-foreground rounded-lg p-[3px]', className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'text-foreground dark:text-muted-foreground data-[state=active]:text-primary dark:data-[state=active]:text-primary data-[state=active]:bg-primary/10 dark:data-[state=active]:bg-primary/20 data-[state=active]:border-primary/50 data-[state=inactive]:hover:text-foreground dark:data-[state=inactive]:hover:text-accent-foreground data-[state=inactive]:hover:bg-background dark:data-[state=inactive]:hover:bg-accent/50 focus-visible:outline-ring inline-flex h-[calc(100%-1px)] flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:font-semibold [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      forceMount
      className={cn('flex-1 outline-none data-[state=inactive]:hidden', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
