import { NextResponse } from 'next/server';

const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

export async function GET() {
  if (!STEAM_API_KEY) {
    return NextResponse.json({ error: 'Steam API key not configured' }, { status: 500 });
  }

  if (!STEAM_ID) {
    return NextResponse.json({ error: 'Steam ID not configured' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=1&include_played_free_games=1&include_extended_appinfo=1`
    );

    if (!response.ok) {
      throw new Error(`Steam API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Steam data:', error);
    return NextResponse.json({ error: 'Failed to fetch Steam data' }, { status: 500 });
  }
}
