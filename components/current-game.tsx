import Image from 'next/image';
import { FaGamepad } from 'react-icons/fa';

interface Game {
  appid: number;
  name: string;
  img_icon_url: string;
  rtime_last_played: number;
}

interface SteamResponse {
  response: {
    game_count: number;
    games: Game[];
  };
}

async function getCurrentGame(): Promise<Game | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

    const response = await fetch(`${baseUrl}/api/steam`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const data: SteamResponse = await response.json();

    if (data.response?.games && data.response.games.length > 0) {
      const mostRecentGame = data.response.games.reduce((prev, current) => {
        return current.rtime_last_played > prev.rtime_last_played ? current : prev;
      });

      return mostRecentGame.rtime_last_played > 0 ? mostRecentGame : null;
    }

    return null;
  } catch (error) {
    console.error('Error fetching current game:', error);
    return null;
  }
}

export async function CurrentGame() {
  const game = await getCurrentGame();
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
