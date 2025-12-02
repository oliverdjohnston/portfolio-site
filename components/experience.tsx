'use client';

import { experiencesData } from '@/data/data';
import { ResumeItem } from '@/components/resume-item';
import { Accordion } from '@/components/ui/accordion';

export function Experience() {
  return (
    <section id="experience">
      <h2 className="mb-4 text-xl font-bold text-primary">Work Experience</h2>
      <Accordion type="single" collapsible className="w-full">
        {experiencesData.toReversed().map((experience) => (
          <ResumeItem
            key={`${experience.company}-${experience.start}`}
            logoUrl={experience.logoUrl}
            altText={experience.company}
            company={experience.company}
            title={experience.title}
            start={experience.start}
            end={experience.end}
            description={experience.description}
            value={`${experience.company}-${experience.start}`}
          />
        ))}
      </Accordion>
    </section>
  );
}
