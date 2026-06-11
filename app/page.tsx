import { Suspense } from 'react';
import { About } from '@/components/about';
import { CurrentGame } from '@/components/current-game';
import { CurrentlyListening } from '@/components/currently-listening';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';
import { MediaCardSkeleton } from '@/components/media-card-skeleton';
import { Projects } from '@/components/projects';
import { Reveal } from '@/components/reveal';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col gap-10">
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal className="grid gap-10 md:grid-cols-2">
        <Suspense fallback={<MediaCardSkeleton label="Currently Playing" />}>
          <CurrentGame />
        </Suspense>
        <Suspense fallback={<MediaCardSkeleton label="Currently Listening To" />}>
          <CurrentlyListening />
        </Suspense>
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
    </main>
  );
}
