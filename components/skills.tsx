'use client';

import { skillsData } from '@/data/data';
import { Icons } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Skills() {
  return (
    <section id="skills">
      <h2 className="text-primary mb-4 text-xl font-bold">Skills</h2>
      <Tabs defaultValue={skillsData[0].category} className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-2 items-stretch gap-[3px] sm:grid-cols-3 lg:grid-cols-5">
          {skillsData.map((category) => (
            <TabsTrigger key={category.category} value={category.category}>
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>
        {skillsData.map((category) => (
          <TabsContent key={category.category} value={category.category}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {category.skills.map((skill) => {
                const Icon = Icons[skill.icon as keyof typeof Icons];
                return (
                  <Card key={skill.name} className="hover:border-primary/50 hover:bg-accent/50 transition-all">
                    <CardContent className="flex min-h-[100px] flex-col items-center justify-center gap-2 p-4">
                      {Icon && <Icon className="size-8 shrink-0" />}
                      <span className="text-center text-sm leading-tight font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
