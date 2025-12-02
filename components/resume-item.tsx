'use client';

import { cn } from '@/lib/utils';
import { FaChevronRight } from 'react-icons/fa6';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar } from '@/components/ui/avatar';

interface ResumeItemProps {
  logoUrl: string;
  altText: string;
  company: string;
  title: string;
  start: string;
  end: string;
  description?: readonly string[];
  value: string;
}

export function ResumeItem({ logoUrl, altText, company, title, start, end, description, value }: ResumeItemProps) {
  const period = `${start} - ${end}`;

  if (description) {
    return (
      <AccordionItem value={value} className="mb-6 border-none last:mb-0">
        <AccordionTrigger
          className="group cursor-pointer py-0 hover:no-underline data-[state=open]:[&_svg]:rotate-90 data-[state=open]:[&_svg]:opacity-100 [&>svg]:ml-auto"
          hideDefaultChevron
        >
          <div className="flex w-full items-center gap-4">
            <div className="flex-none">
              <Avatar src={logoUrl} alt={altText} size={48} className="size-12" />
            </div>
            <div className="flex min-w-0 grow items-center justify-between gap-x-2">
              <div className="flex min-w-0 flex-col">
                <h3 className="text-xs leading-none font-semibold sm:text-sm">{company}</h3>
                <div className="text-muted-foreground mt-1 font-sans text-xs">{title}</div>
              </div>
              <div className="text-muted-foreground shrink-0 text-right text-xs tabular-nums sm:text-sm">{period}</div>
            </div>
            <FaChevronRight
              className={cn(
                'pointer-events-none size-3 shrink-0 transition-all duration-200',
                'text-black dark:text-white',
                'opacity-0 group-hover:opacity-100'
              )}
            />
          </div>
        </AccordionTrigger>
        <AccordionContent className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="mt-2 ml-16">
            <ul className="ml-4 list-outside list-disc space-y-1 text-xs sm:text-sm">
              {description.map((item, idx) => (
                <li key={idx} className="transition-opacity duration-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <div className="flex gap-4">
      <div className="flex-none">
        <Avatar src={logoUrl} alt={altText} size={48} className="size-12" />
      </div>
      <div className="flex min-w-0 grow items-center justify-between gap-x-2">
        <div className="flex min-w-0 flex-col">
          <h3 className="text-xs leading-none font-semibold sm:text-sm">{company}</h3>
          <div className="text-muted-foreground mt-1 font-sans text-xs">{title}</div>
        </div>
        <div className="text-muted-foreground shrink-0 text-right text-xs tabular-nums sm:text-sm">{period}</div>
      </div>
    </div>
  );
}
