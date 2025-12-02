import Image from 'next/image';
import { FaHeadphones } from 'react-icons/fa';

interface Track {
  name: string;
  artist: string;
  album: string;
  image: string | null;
  url: string;
  is_playing: boolean;
}

interface SpotifyResponse {
  track: Track | null;
  error?: string;
}

async function getCurrentlyListening(): Promise<Track | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

    const response = await fetch(`${baseUrl}/api/spotify/currently-playing`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const data: SpotifyResponse = await response.json();

    return data.track || null;
  } catch (error) {
    console.error('Error fetching currently listening:', error);
    return null;
  }
}

export async function CurrentlyListening() {
  const track = await getCurrentlyListening();

  return (
    <section id="currently-listening">
      <div className="pb-3">
        <h3 className="text-primary flex items-center gap-2 text-lg font-bold">
          <FaHeadphones className="size-5" />
          {track?.is_playing ? 'Currently Listening To' : 'Recently Played'}
        </h3>
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
              <h3 className="truncate font-semibold">{track.name}</h3>
              <p className="text-muted-foreground truncate text-sm">{track.artist}</p>
            </div>
          </a>
        ) : (
          <p className="text-muted-foreground text-sm">Unable to load listening data</p>
        )}
      </div>
    </section>
  );
}
