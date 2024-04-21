import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import ProjectData from '@/utils/projects';
import SectionTitle from '../SectionTitle';

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="container relative
items-center justify-between gap-10 space-y-2"
    >
      <SectionTitle
        title="Projects"
        description="Some of my recent projects. Click on the cards to view the live project or the source code."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ">
        {ProjectData.map((project, idx) => (
          <Card key={`project-${idx + 1}`} className="card flex-1 shadow">
            <CardContent className="group overflow-hidden rounded-lg p-0">
              <img
                src={project.img}
                alt="avatar"
                className="h-60 w-full rounded-lg object-cover duration-300 group-hover:scale-105"
              />
              <div className="h-full p-6">
                <div className="space-y-2 ">
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-gray-500">{project.description}</p>
                  {project.stack && project.stack.length > 0 && (
                    <div className=" flex flex-wrap gap-2">
                      {project.stack.map((tech, index) => (
                        <span
                          key={`tech-${index + 1}`}
                          className="rounded-md bg-accent-foreground bg-opacity-10 px-2 py-1 text-xs text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border p-2 px-6 text-blue-500 shadow-sm transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
                  >
                    # Live
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
