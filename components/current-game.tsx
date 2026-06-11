import Image from 'next/image';
import { getRecentGame } from '@/lib/steam';
import { FaGamepad } from 'react-icons/fa';

export async function CurrentGame() {
  const game = await getRecentGame();
  const imageUrl = game
    ? `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`
    : null;

  return (
    <section id="current-game">
      <div className="pb-3">
        <h3 className="text-primary flex items-center gap-2 text-lg font-bold">
          <FaGamepad className="size-5" />
          Currently Playing
        </h3>
      </div>
      <div className="pt-0">
        {game ? (
          <div className="flex items-center gap-3">
            <div className="relative size-12 shrink-0 overflow-hidden rounded">
              <Image src={imageUrl!} alt={game.name} width={48} height={48} className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="wrap-break-words font-semibold md:truncate">{game.name}</h3>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">Unable to load game data</p>
        )}
      </div>
    </section>
  );
}
