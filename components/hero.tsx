import { personalData } from '@/data/data';
import { Avatar } from '@/components/ui/avatar';

export function Hero() {
  return (
    <section id="hero">
      <div className="flex justify-between gap-2">
        <div className="flex flex-1 flex-col space-y-1.5">
          <h1
            className="animate-reveal text-3xl font-semibold tracking-tighter text-pretty sm:text-5xl xl:text-6xl/none"
            style={{ animationDelay: '0ms' }}
          >
            Hi, I&apos;m <span className="text-primary font-bold">{personalData.name.split(' ')[0]}</span>
          </h1>
          <p className="animate-reveal text-pretty md:text-xl" style={{ animationDelay: '80ms' }}>
            {personalData.description}
          </p>
          <p className="text-muted-foreground animate-reveal text-sm" style={{ animationDelay: '160ms' }}>
            {personalData.location}
          </p>
        </div>
        <Avatar
          src={personalData.avatarUrl}
          initials={personalData.initials}
          alt={personalData.name}
          className="border-secondary animate-reveal size-24 shrink-0 border-2 sm:size-28"
          style={{ animationDelay: '80ms' }}
        />
      </div>
    </section>
  );
}
