import Image from 'next/image';

import { getRecentGame } from '@/lib/steam';
import { FaGamepad } from 'react-icons/fa';

import { MediaCard } from '@/components/media-card-skeleton';

export async function CurrentGame() {
  const game = await getRecentGame();

  return (
    <MediaCard id="current-game" icon={FaGamepad} heading="Currently Playing">
      {game ? (
        <div className="flex items-center gap-3">
          <div className="relative size-12 shrink-0 overflow-hidden rounded">
            <Image src={game.image} alt={game.name} width={48} height={48} className="object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="wrap-break-words font-semibold md:truncate">{game.name}</p>
          </div>
        </div>
      ) : (
        <p className="text-muted-foreground text-sm">Unable to load game data</p>
      )}
    </MediaCard>
  );
}
