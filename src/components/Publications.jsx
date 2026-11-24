import { PAPERS } from '../data/publications';
import { ArrowUpRightIcon } from './Icons';

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-20 border-b border-stone-200 py-12 dark:border-[#262b36]">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Publications</h2>
      <div className="mt-6 divide-y divide-stone-200 dark:divide-[#262b36]">
        {PAPERS.map((paper) => (
          <article key={paper.url} className={`py-6 first:pt-0 last:pb-0 ${paper.figure ? 'grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr] md:items-start' : ''}`}>
            {paper.figure && (
              <div className="rounded-lg border border-stone-200 bg-white p-2.5">
                <img src={paper.figure} alt={paper.figureAlt} className="mx-auto max-h-48 w-full object-contain" />
              </div>
            )}
            <div>
              <span className="inline-block rounded-md bg-stone-100 px-2 py-0.5 font-mono text-[11px] font-medium text-zinc-700 dark:bg-[#1f242e] dark:text-zinc-300">{paper.venue}</span>
              <h3 className="mt-2 text-base font-semibold leading-snug">
                <a href={paper.url} target="_blank" rel="noreferrer" className="inline-flex items-baseline gap-1 text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400">
                  <span>{paper.title}</span>
                  <ArrowUpRightIcon />
                </a>
              </h3>
              <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                {paper.authors.map((author, i) => (
                  <span key={author}>
                    {i > 0 && ', '}
                    <span className={author === 'A. Baisakh' ? 'font-semibold text-zinc-900 dark:text-zinc-100' : ''}>{author}</span>
                  </span>
                ))}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{paper.summary}</p>
              <p className="mt-2.5 font-mono text-xs text-zinc-600 dark:text-zinc-400">{paper.metrics}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
