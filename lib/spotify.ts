const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

interface TokenCache {
  access_token: string;
  expires_at: number;
}

let userTokenCache: TokenCache | null = null;

export async function getSpotifyUserAccessToken(): Promise<string | null> {
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
