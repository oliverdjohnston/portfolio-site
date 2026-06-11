import { Suspense } from 'react';
import { FaGamepad, FaHeadphones } from 'react-icons/fa';
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
      <Reveal delay={0.15}>
        <About />
      </Reveal>
      <Reveal delay={0.25} className="grid gap-10 md:grid-cols-2">
        <Suspense fallback={<MediaCardSkeleton icon={FaGamepad} label="Currently Playing" />}>
          <CurrentGame />
        </Suspense>
        <Suspense fallback={<MediaCardSkeleton icon={FaHeadphones} />}>
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
