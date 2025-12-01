import { About } from '@/components/about';
import { CurrentGame } from '@/components/current-game';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col gap-10">
      <Hero />
      <About />
      <CurrentGame />
      <Experience />
    </main>
  );
}
