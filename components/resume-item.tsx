import type { experiencesData } from '@/data/data';
import { cn } from '@/lib/utils';
import { FaChevronRight } from 'react-icons/fa6';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar } from '@/components/ui/avatar';

export function ResumeItem({ experience }: { experience: (typeof experiencesData)[number] }) {
  const { logoUrl, company, title, start, end, description } = experience;

  return (
    <AccordionItem value={`${company}-${start}`} className="mb-6 border-none last:mb-0">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2">
        <AccordionTrigger
          className="group cursor-pointer py-0 hover:no-underline data-[state=open]:[&_svg]:rotate-90 data-[state=open]:[&_svg]:opacity-100 [&>svg]:ml-auto"
          hideDefaultChevron
        >
          <div className="flex w-full min-w-0 items-center gap-4">
            <div className="flex-none">
              <Avatar src={logoUrl} alt={company} className="size-12" />
            </div>
            <div className="flex min-w-0 flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs leading-none font-semibold sm:text-sm">{company}</span>
                <FaChevronRight
                  className={cn(
                    'pointer-events-none size-2.5 shrink-0 transition-[opacity,rotate] duration-200 ease-out',
                    'text-black dark:text-white',
                    'opacity-0 group-hover:opacity-100'
                  )}
                />
              </div>
              <p className="text-muted-foreground mt-1 font-sans text-xs">{title}</p>
            </div>
          </div>
        </AccordionTrigger>
        <p className="text-muted-foreground shrink-0 text-right text-xs tabular-nums sm:text-sm">
          {start} - {end}
        </p>
      </div>
      <AccordionContent>
        <div className="mt-2 ml-16">
          <ul className="ml-4 list-outside list-disc space-y-1 text-xs sm:text-sm">
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
