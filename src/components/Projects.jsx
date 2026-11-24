import { useState } from 'react';
import { PROJECT_FILTERS, PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="scroll-mt-20 border-b border-stone-200 py-12 dark:border-[#262b36]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Projects</h2>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter projects">
          {PROJECT_FILTERS.map((label) => {
            const active = filter === label;
            const style = active
              ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
              : 'border-stone-200 bg-white text-zinc-600 hover:text-zinc-900 dark:border-[#262b36] dark:bg-[#161920] dark:text-zinc-400 dark:hover:text-zinc-100';
            return (
              <button key={label} type="button" onClick={() => setFilter(label)} aria-pressed={active} className={`cursor-pointer rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${style}`}>
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
