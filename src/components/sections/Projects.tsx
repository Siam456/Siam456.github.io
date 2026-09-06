import { Section } from "../layout/Section";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../lib/data";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Systems with" titleMuted="real operational stakes" description="A chronological selection of products and platforms I've helped take from requirements to production.">
      <div className="mt-4">
        {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
      </div>
    </Section>
  );
}
