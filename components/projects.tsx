'use client';

import Image from 'next/image';
import Link from 'next/link';

import { badgeConfig, projectsData } from '@/data/data';
import { cn } from '@/lib/utils';

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const linkClass = cn(
  buttonVariants({ variant: 'outline', size: 'sm' }),
  'hover:border-primary/50 hover:bg-primary/10 hover:text-primary dark:hover:border-primary/50 dark:hover:bg-primary/15 duration-200 ease-hover'
);

export function Projects() {
  return (
    <section id="projects">
      <h2 className="text-primary mb-4 text-xl font-bold">Projects</h2>
      <ul className="flex flex-col gap-6">
        {projectsData.map((project) => (
          <li key={project.title}>
            <Dialog>
              <Card
                className={cn(
                  'group hover:border-primary/50 hover:bg-accent/50 relative overflow-hidden',
                  'ease-hover transition-[background-color,border-color,scale] duration-200 has-[button:active]:scale-[0.99]'
                )}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col justify-between p-6 md:w-1/2">
                      <div>
                        <h3 className="mb-1 text-lg font-semibold">
                          <DialogTrigger className="focus-visible:after:ring-ring cursor-pointer text-left outline-none after:absolute after:inset-0 after:rounded-lg focus-visible:after:ring-2">
                            {project.title}
                          </DialogTrigger>
                        </h3>
                        <p className="text-muted-foreground mb-3 text-sm">{project.dates}</p>
                        <p className="mb-4 text-sm">{project.description}</p>
                      </div>
                      {project.links && project.links.length > 0 && (
                        <ul className="relative z-10 flex flex-wrap gap-3">
                          {project.links.map((link) => {
                            const badgeInfo = badgeConfig[link.type as keyof typeof badgeConfig];
                            const Icon = badgeInfo?.icon;
                            return (
                              <li key={link.href}>
                                <Link href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                  {Icon && (
                                    <Icon aria-hidden className={link.type === 'external' ? 'size-3' : 'size-3.5'} />
                                  )}
                                  <span>{badgeInfo?.name || link.type}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                    <div className="relative hidden aspect-square w-full overflow-hidden md:block md:w-1/2">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 336px, 100vw"
                        className="object-cover transition-[scale] duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <DialogContent className="scrollbar-stable max-h-[90vh] max-w-3xl overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.dates}</DialogDescription>
                </DialogHeader>
                <div className="stagger-in space-y-6">
                  {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 768px) 720px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}

                  {project.detailedDescription && (
                    <div>
                      <p className="text-sm leading-relaxed">{project.detailedDescription}</p>
                    </div>
                  )}

                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-sm font-semibold">Key Features</h3>
                      <ul className="ml-4 list-disc space-y-1 text-sm">
                        {project.keyFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-sm font-semibold">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((techKey, techIndex) => {
                          const techInfo = badgeConfig[techKey as keyof typeof badgeConfig];
                          const TechIcon = techInfo?.icon;
                          return (
                            <Badge key={techIndex} variant="secondary" className="inline-flex items-center gap-1.5">
                              {TechIcon && <TechIcon className="h-3.5 w-3.5" />}
                              {techInfo?.name || techKey}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {project.links && project.links.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-sm font-semibold">Links</h3>
                      <ul className="flex flex-wrap gap-3">
                        {project.links.map((link) => {
                          const badgeInfo = badgeConfig[link.type as keyof typeof badgeConfig];
                          const Icon = badgeInfo?.icon;
                          return (
                            <li key={link.href}>
                              <Link href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                {Icon && (
                                  <Icon aria-hidden className={link.type === 'external' ? 'size-3' : 'size-3.5'} />
                                )}
                                <span>{badgeInfo?.name || link.type}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </li>
        ))}
      </ul>
    </section>
  );
}
