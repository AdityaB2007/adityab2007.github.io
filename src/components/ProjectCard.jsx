import { ArrowUpRightIcon } from './Icons';

export function ProjectCard({ project }) {
  const note = project.badge || project.status;

  return (
    <article className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-5 transition-colors hover:border-stone-300 dark:border-[#262b36] dark:bg-[#161920] dark:hover:border-zinc-600">
      <div>
        <div className="flex items-start justify-between gap-3">
          <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-base font-semibold text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400">
            <span>{project.title}</span>
            <ArrowUpRightIcon />
          </a>
          {note && (
            <span className="shrink-0 rounded-md bg-blue-50 px-2 py-0.5 font-mono text-[11px] font-medium text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
              {note}
            </span>
          )}
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{project.summary}</p>
      </div>
      <div className="mt-4 space-y-2.5 pt-2">
        <p className="font-mono text-xs font-medium text-zinc-800 dark:text-zinc-200">{project.metric}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded bg-stone-100 px-2 py-0.5 font-mono text-[11px] text-zinc-600 dark:bg-[#1f242e] dark:text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
