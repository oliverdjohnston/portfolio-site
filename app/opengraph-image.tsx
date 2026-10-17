import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { personalData } from '@/data/data';

export const alt = `${personalData.name}, Full Stack Web Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// colours mirror the dark theme
const background = '#121212';
const foreground = '#fafafa';
const muted = '#a1a1a1';
const primary = '#4ade80';

export default async function Image() {
  const avatar = await readFile(join(process.cwd(), 'public', personalData.avatarUrl));
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 64,
        padding: '0 96px',
        background,
        color: foreground,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>{personalData.name}</div>
        <div style={{ fontSize: 40, color: primary }}>Full Stack Web Developer</div>
        <div style={{ fontSize: 30, color: muted }}>{`${personalData.location} · oliver.cool`}</div>
      </div>
      <img
        src={avatarSrc}
        alt=""
        width={280}
        height={280}
        style={{ borderRadius: 9999, border: `6px solid ${primary}`, objectFit: 'cover' }}
      />
    </div>,
    size
  );
}
