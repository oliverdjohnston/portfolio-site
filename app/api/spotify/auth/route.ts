import { NextResponse } from 'next/server';

import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from '@/lib/spotify';

export async function GET() {
  if (!SPOTIFY_CLIENT_ID) {
    return NextResponse.json({ error: 'Spotify Client ID not configured' }, { status: 500 });
  }

  const scopes = ['user-read-currently-playing', 'user-read-recently-played', 'user-read-playback-state'].join(' ');

  const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
    response_type: 'code',
    client_id: SPOTIFY_CLIENT_ID,
    scope: scopes,
    redirect_uri: SPOTIFY_REDIRECT_URI,
  })}`;

  return NextResponse.redirect(authUrl);
}
