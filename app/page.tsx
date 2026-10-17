import { Suspense } from 'react';

import { FaGamepad, FaHeadphones } from 'react-icons/fa';

import { About } from '@/components/about';
import { CurrentGame } from '@/components/current-game';
import { CurrentlyListening } from '@/components/currently-listening';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';
import { Intro } from '@/components/intro';
import { MediaCardSkeleton } from '@/components/media-card-skeleton';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col gap-10">
      <Hero />
      <div data-intro="section">
        <About />
      </div>
      <div data-intro="section" className="grid gap-10 md:grid-cols-2">
        <Suspense fallback={<MediaCardSkeleton icon={FaGamepad} label="Currently Playing" />}>
          <CurrentGame />
        </Suspense>
        <Suspense fallback={<MediaCardSkeleton icon={FaHeadphones} />}>
          <CurrentlyListening />
        </Suspense>
      </div>
      <div data-intro="section">
        <Experience />
      </div>
      <div data-intro="section">
        <Projects />
      </div>
      <div data-intro="section">
        <Skills />
      </div>
      <Intro />
    </main>
  );
}
