'use client';

import Image from 'next/image';
import Link from 'next/link';
import { badgeConfig, projectsData } from '@/data/data';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function Projects() {
  return (
    <section id="projects">
      <h2 className="text-primary mb-4 text-xl font-bold">Projects</h2>
      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="hover:border-primary/50 hover:bg-accent/50 cursor-pointer transition-all">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col justify-between p-6 md:w-1/2">
                      <div>
                        <h3 className="mb-1 text-lg font-semibold">{project.title}</h3>
                        <p className="text-muted-foreground mb-3 text-sm">{project.dates}</p>
                        <p className="mb-4 text-sm">{project.description}</p>
                      </div>
                      {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {project.links.map((link, linkIndex) => {
                            const badgeInfo = badgeConfig[link.type as keyof typeof badgeConfig];
                            const Icon = badgeInfo?.icon;
                            return (
                              <Link
                                key={linkIndex}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className={cn(
                                  'bg-background inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors',
                                  'hover:bg-accent hover:text-accent-foreground'
                                )}
                              >
                                {Icon && <Icon className="h-4 w-4" />}
                                <span>{badgeInfo?.name || link.type}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <div className="relative hidden aspect-square w-full md:block md:w-1/2">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="rounded-b-lg object-cover md:rounded-r-lg md:rounded-bl-none"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>

            <DialogContent className="scrollbar-stable max-h-[90vh] max-w-3xl overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{project.dates}</DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                {project.image && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
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
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, linkIndex) => {
                        const badgeInfo = badgeConfig[link.type as keyof typeof badgeConfig];
                        const Icon = badgeInfo?.icon;
                        return (
                          <Link
                            key={linkIndex}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              'bg-background inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors',
                              'hover:bg-accent hover:text-accent-foreground'
                            )}
                          >
                            {Icon && <Icon className="h-4 w-4" />}
                            <span>{badgeInfo?.name || link.type}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
