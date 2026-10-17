import { personalData } from '@/data/data';

import { Avatar } from '@/components/ui/avatar';

export function Hero() {
  return (
    <section id="hero">
      <div className="flex justify-between gap-2">
        <div className="flex flex-1 flex-col space-y-1.5">
          <h1
            data-intro="hero"
            className="text-3xl font-semibold tracking-tighter text-pretty sm:text-5xl xl:text-6xl/none"
          >
            Hi, I&apos;m <span className="text-primary font-bold">{personalData.name.split(' ')[0]}</span>
          </h1>
          <p data-intro="hero" className="text-pretty md:text-xl">
            {personalData.description}
          </p>
          <p data-intro="hero" className="text-muted-foreground text-sm">
            {personalData.location}
          </p>
        </div>
        <Avatar
          src={personalData.avatarUrl}
          initials={personalData.initials}
          alt={personalData.name}
          data-intro="hero"
          className="border-secondary size-24 shrink-0 border-2 sm:size-28"
        />
      </div>
    </section>
  );
}
