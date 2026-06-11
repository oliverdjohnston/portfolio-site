import { Suspense } from 'react';
import { FaGamepad, FaHeadphones } from 'react-icons/fa';
import { About } from '@/components/about';
import { CurrentGame } from '@/components/current-game';
import { CurrentlyListening } from '@/components/currently-listening';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';
import { MediaCardSkeleton } from '@/components/media-card-skeleton';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';

// One continuous load cascade: each block reveals 80ms after the previous,
// picking up from the hero lines (0/80/160ms) so the whole page settles in
// top-to-bottom as a single sequence.
export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col gap-10">
      <Hero />
      <div className="animate-reveal" style={{ animationDelay: '240ms' }}>
        <About />
      </div>
      <div className="animate-reveal grid gap-10 md:grid-cols-2" style={{ animationDelay: '320ms' }}>
        <Suspense fallback={<MediaCardSkeleton icon={FaGamepad} label="Currently Playing" />}>
          <CurrentGame />
        </Suspense>
        <Suspense fallback={<MediaCardSkeleton icon={FaHeadphones} />}>
          <CurrentlyListening />
        </Suspense>
      </div>
      <div className="animate-reveal" style={{ animationDelay: '400ms' }}>
        <Experience />
      </div>
      <div className="animate-reveal" style={{ animationDelay: '480ms' }}>
        <Projects />
      </div>
      <div className="animate-reveal" style={{ animationDelay: '560ms' }}>
        <Skills />
      </div>
    </main>
  );
}
