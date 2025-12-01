import { personalData } from '@/data/data';
import ReactMarkdown from 'react-markdown';

export function About() {
  return (
    <section id="about">
      <h2 className="text-xl font-bold">About</h2>
      <div className="text-muted-foreground dark:prose-invert [&_strong]:text-foreground max-w-full font-sans text-pretty dark:[&_strong]:text-white">
        <ReactMarkdown>{personalData.summary()}</ReactMarkdown>
      </div>
    </section>
  );
}
