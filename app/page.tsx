import { About } from '@/components/about';
import { CurrentGame } from '@/components/current-game';
import { CurrentlyListening } from '@/components/currently-listening';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col gap-10">
      <Hero />
      <About />
      <div className="grid gap-10 md:grid-cols-2">
        <CurrentGame />
        <CurrentlyListening />
      </div>
      <Experience />
    </main>
  );
}
