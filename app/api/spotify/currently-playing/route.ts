import { NextResponse } from 'next/server';
import { getSpotifyUserAccessToken } from '@/lib/spotify';

interface Track {
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

const getTrackData = (track: Track, isPlaying: boolean) => ({
  name: track.name,
  artist: track.artists.map((a) => a.name).join(', '),
  album: track.album.name,
  image: track.album.images[0]?.url || track.album.images[1]?.url || null,
  url: track.external_urls.spotify,
  is_playing: isPlaying,
});

export async function GET() {
  try {
    const accessToken = await getSpotifyUserAccessToken();

    if (!accessToken) {
      return NextResponse.json({ error: 'Spotify not configured' }, { status: 401 });
    }

    // fetch currently playing data
    const currentlyPlaying = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (currentlyPlaying.status === 200) {
      const data = await currentlyPlaying.json();
      if (data.item) {
        return NextResponse.json({ track: getTrackData(data.item, data.is_playing) });
      }
    }

    // fetch recently played data if currently playing is not available
    const recentlyPlayed = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (recentlyPlayed.status === 200) {
      const data = await recentlyPlayed.json();
      if (data.items?.[0]?.track) {
        return NextResponse.json({ track: getTrackData(data.items[0].track, false) });
      }
    }

    return NextResponse.json({ track: null });
  } catch (error) {
    console.error('Error fetching Spotify track:', error);
    return NextResponse.json({ error: 'Failed to fetch Spotify track' }, { status: 500 });
  }
}
