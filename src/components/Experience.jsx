import { EXPERIENCE } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-stone-200 py-12 dark:border-[#262b36]">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Experience</h2>
      <div className="mt-6 divide-y divide-stone-200 dark:divide-[#262b36]">
        {EXPERIENCE.map((item) => (
          <article key={`${item.role}-${item.org}`} className="py-5 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{item.role}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.org} · {item.location}
                </p>
              </div>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{item.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
