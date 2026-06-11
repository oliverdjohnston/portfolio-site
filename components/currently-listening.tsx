import Image from 'next/image';

import { getCurrentlyPlaying } from '@/lib/spotify';
import { FaHeadphones } from 'react-icons/fa';

function Equalizer() {
  return (
    <span aria-hidden className="ml-0.5 flex h-4 items-end gap-[3px]">
      {[0, 180, 360, 120].map((delay, i) => (
        <span
          key={i}
          className="equalizer-bar bg-primary block h-full w-[3px] rounded-full"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </span>
  );
}

export async function CurrentlyListening() {
  const track = await getCurrentlyPlaying();

  return (
    <section id="currently-listening">
      <div className="pb-3">
        <h2 className="text-primary flex items-center gap-2 text-lg font-bold">
          <FaHeadphones className="size-5" />
          {track?.is_playing ? 'Currently Listening To' : 'Recently Played'}
          {track?.is_playing && <Equalizer />}
        </h2>
      </div>
      <div className="pt-0">
        {track ? (
          <a
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            {track.image && (
              <div className="relative size-12 shrink-0 overflow-hidden rounded">
                <Image
                  src={track.image}
                  alt={`${track.name} by ${track.artist}`}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="wrap-break-words font-semibold md:truncate">{track.name}</p>
              <p className="text-muted-foreground wrap-break-words text-sm md:truncate">{track.artist}</p>
            </div>
          </a>
        ) : (
          <p className="text-muted-foreground text-sm">Unable to load listening data</p>
        )}
      </div>
    </section>
  );
}
