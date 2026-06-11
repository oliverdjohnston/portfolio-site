import { cacheLife, cacheTag } from 'next/cache';

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

interface TokenCache {
  access_token: string;
  expires_at: number;
}

let userTokenCache: TokenCache | null = null;

async function getSpotifyUserAccessToken(): Promise<string | null> {
  if (!SPOTIFY_REFRESH_TOKEN || !SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    return null;
  }

  if (userTokenCache && Date.now() < userTokenCache.expires_at) {
    return userTokenCache.access_token;
  }

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      },
      body: `grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}`,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Spotify token refresh error:', errorText);
      return null;
    }

    const data = await response.json();
    userTokenCache = {
      access_token: data.access_token,
      expires_at: Date.now() + (data.expires_in - 60) * 1000,
    };

    return userTokenCache.access_token;
  } catch (error) {
    console.error('Error refreshing user token:', error);
    return null;
  }
}

export interface Track {
  name: string;
  artist: string;
  album: string;
  image: string | null;
  url: string;
  is_playing: boolean;
}

interface SpotifyTrack {
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  external_urls: {
    spotify: string;
  };
}

function toTrack(track: SpotifyTrack, isPlaying: boolean): Track {
  return {
    name: track.name,
    artist: track.artists.map((a) => a.name).join(', '),
    album: track.album.name,
    image: track.album.images[0]?.url || track.album.images[1]?.url || null,
    url: track.external_urls.spotify,
    is_playing: isPlaying,
  };
}

export async function getCurrentlyPlaying(): Promise<Track | null> {
  'use cache';
  cacheLife('minutes');
  cacheTag('spotify');

  const accessToken = await getSpotifyUserAccessToken();
  if (!accessToken) {
    return null;
  }

  try {
    const currentlyPlaying = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (currentlyPlaying.status === 200) {
      const data = await currentlyPlaying.json();
      if (data.item) {
        return toTrack(data.item, data.is_playing);
      }
    }

    const recentlyPlayed = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (recentlyPlayed.status === 200) {
      const data = await recentlyPlayed.json();
      if (data.items?.[0]?.track) {
        return toTrack(data.items[0].track, false);
      }
    }

    return null;
  } catch (error) {
    console.error('Error fetching Spotify track:', error);
    return null;
  }
}
