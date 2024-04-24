import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionTitle from '../SectionTitle';
import ExperinceTabSection from './ExperinceTabSection';
import EducationTabSection from './EducationTabSection';

export default function ExperienceSection() {
  return (
    <section
      id="experiences"
      className="container relative
  items-center justify-between gap-10 space-y-2"
    >
      <div>
        <SectionTitle
          title="Experinces"
          description="My work experience and education background."
        />

        <Tabs className="mx-auto xl:w-5/6" defaultValue="experience">
          <TabsList className="mx-auto grid w-full max-w-xl grid-cols-2">
            <TabsTrigger value="experience">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <ExperinceTabSection />
          </TabsContent>
          <TabsContent value="education">
            <EducationTabSection />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
