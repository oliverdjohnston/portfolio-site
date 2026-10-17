import type { ComponentProps, ReactNode } from 'react';

import type { IconType } from 'react-icons';

export function MediaCard({
  icon: Icon,
  heading,
  headingAs: Heading = 'h2',
  children,
  ...props
}: ComponentProps<'section'> & { icon: IconType; heading: ReactNode; headingAs?: 'h2' | 'div' }) {
  return (
    <section data-nosnippet {...props}>
      <Heading className="text-primary mb-3 flex items-center gap-2 text-lg font-bold">
        <Icon className="size-5" />
        {heading}
      </Heading>
      {children}
    </section>
  );
}

export function MediaCardSkeleton({ icon, label }: { icon: IconType; label?: string }) {
  return (
    <MediaCard
      icon={icon}
      headingAs={label ? 'h2' : 'div'}
      heading={label ?? <span className="bg-muted h-5 w-36 animate-pulse rounded" />}
      aria-busy="true"
      aria-label={label ? `${label} loading` : 'Loading'}
    >
      <div className="flex items-center gap-3">
        <div className="bg-muted size-12 shrink-0 animate-pulse rounded" />
        <div className="min-w-0 flex-1 space-y-2">
          <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
          <div className="bg-muted h-3 w-1/2 animate-pulse rounded" />
        </div>
      </div>
    </MediaCard>
  );
}
