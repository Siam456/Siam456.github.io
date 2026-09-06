import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { ProjectEntry } from "../../lib/types";

interface ProjectCardProps { project: ProjectEntry; index: number; }

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.45, delay: Math.min(index, 3) * 0.05 }} className="group grid gap-8 border-t border-line py-10 md:grid-cols-[80px_1fr_1fr] md:gap-12 md:py-14">
      <p className="font-mono text-xs text-faint">{String(index + 1).padStart(2, "0")}</p>
      <div>
        <div className="flex items-start gap-3">
          <h3 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">{project.name}</h3>
          {project.current && <span className="mt-2 h-2 w-2 rounded-full bg-primary" title="Current project" />}
        </div>
        <p className="mt-3 max-w-md text-base font-medium leading-7 text-primary-dark">{project.tagline}</p>
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.12em] text-faint">{project.duration}</p>
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-faint">The system</p>
        <p className="mt-3 max-w-xl text-base leading-7 text-muted">{project.description}</p>
        <div className="mt-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-faint">What I owned</p>
          <ul className="mt-3 space-y-3">
            {project.highlights.slice(0, 2).map((highlight) => <li key={highlight} className="flex gap-3 text-sm font-medium leading-6 text-ink"><span className="mt-2.5 h-px w-3 shrink-0 bg-primary" />{highlight}</li>)}
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {project.stack.slice(0, 6).map((tech) => <span key={tech} className="font-mono text-[10px] text-faint">{tech}</span>)}
        </div>
        {project.url && <a href={project.url} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:text-primary">View project <FiArrowUpRight /></a>}
      </div>
    </motion.article>
  );
}
