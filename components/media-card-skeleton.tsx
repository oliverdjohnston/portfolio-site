export function MediaCardSkeleton({ label }: { label: string }) {
  return (
    <section aria-busy="true" aria-label={`${label} loading`}>
      <div className="pb-3">
        <h3 className="text-primary flex items-center gap-2 text-lg font-bold">
          <span className="bg-primary/30 size-5 shrink-0 animate-pulse rounded" />
          {label}
        </h3>
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
