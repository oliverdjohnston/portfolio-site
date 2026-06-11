import type { IconType } from 'react-icons';

export function MediaCardSkeleton({ icon: Icon, label }: { icon: IconType; label?: string }) {
  return (
    <section aria-busy="true" aria-label={label ? `${label} loading` : 'Loading'}>
      <div className="pb-3">
        <h2 className="text-primary flex items-center gap-2 text-lg font-bold">
          <Icon className="size-5" />
          {label ?? <span className="bg-muted h-5 w-36 animate-pulse rounded" />}
        </h2>
      </div>
      <div className="flex items-center gap-3 pt-0">
        <div className="bg-muted size-12 shrink-0 animate-pulse rounded" />
        <div className="min-w-0 flex-1 space-y-2">
          <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
          <div className="bg-muted h-3 w-1/2 animate-pulse rounded" />
        </div>
      </div>
    </section>
  );
}
