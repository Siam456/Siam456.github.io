// import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import React from 'react';
import SectionTitle from '../SectionTitle';

export default function TechnologyExpertise() {
  return (
    <section
      className="container relative
  items-center justify-between gap-10 space-y-2"
    >
      <SectionTitle
        title="Technologies Expertise"
        description="I have experience working with a wide range of technologies and
    tools."
      />

      <div className="flex flex-wrap gap-3">
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-xl font-semibold">Frontend</h2>
          <ul>
            <li className="list-disc">HTML</li>
            <li className="list-disc">CSS</li>
            <li className="list-disc"> JavaScript</li>
            <li className="list-disc"> React</li>
            <li className="list-disc">Next.js</li>
            <li className="list-disc">Tailwind CSS</li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-xl font-semibold">Backend</h2>
          <ul className=" ml-5">
            <li className="list-disc">Node.js</li>
            <li className="list-disc">Express</li>
            <li className="list-disc">Nest.js</li>
            <li className="list-disc">Flask</li>
            <li className="list-disc">RESTful APIs</li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-xl font-semibold">Cloud Solutions</h2>
          <ul className=" ml-5">
            <li className="list-disc">AWS (Amazon Web Services)</li>
            <li className="list-disc">Google Cloud Platform (GCP)</li>
            <li className="list-disc">Azure</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Database Management</h2>
          <ul className=" ml-5">
            <li className="list-disc">Database Design</li>
            <li className="list-disc">Database Administration</li>
            <li className="list-disc">Database Optimization</li>
            <li className="list-disc">MongoDB</li>
            <li className="list-disc">PostgreSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
