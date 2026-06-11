import { cacheLife, cacheTag } from 'next/cache';

const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

export interface Game {
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

export async function getRecentGame(): Promise<Game | null> {
  'use cache';
  cacheLife('minutes');
  cacheTag('steam');

  if (!STEAM_API_KEY || !STEAM_ID) {
    return null;
  }

  try {
    const response = await fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=1&include_played_free_games=1&include_extended_appinfo=1`
    );

    if (!response.ok) {
      return null;
    }

    const data: SteamResponse = await response.json();
    const games = data.response?.games;
    if (!games?.length) {
      return null;
    }

    const mostRecent = games.reduce((prev, current) =>
      current.rtime_last_played > prev.rtime_last_played ? current : prev
    );

    return mostRecent.rtime_last_played > 0 ? mostRecent : null;
  } catch (error) {
    console.error('Error fetching current game:', error);
    return null;
  }
}
