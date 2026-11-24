import { CERTIFICATIONS, COURSEWORK, EDUCATION } from '../data/education';
import { ArrowUpRightIcon } from './Icons';

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-12">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Education &amp; Credentials</h2>
      <div className="mt-6 rounded-xl border border-stone-200 bg-white p-5 dark:border-[#262b36] dark:bg-[#161920]">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{EDUCATION.school}</h3>
          <span className="font-mono text-xs font-medium text-blue-600 dark:text-blue-400">{EDUCATION.gpa} · {EDUCATION.location}</span>
        </div>
        <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          {EDUCATION.degrees.map((deg) => <li key={deg}>{deg}</li>)}
        </ul>
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{EDUCATION.activities}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {COURSEWORK.map((course) => (
            <span key={course} className="rounded bg-stone-100 px-2 py-0.5 font-mono text-[11px] text-zinc-700 dark:bg-[#1f242e] dark:text-zinc-300">{course}</span>
          ))}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert) => (
          <a key={cert.url} href={cert.url} target="_blank" rel="noreferrer" className="flex items-start justify-between gap-3 rounded-xl border border-stone-200 bg-white p-4 transition-colors hover:border-stone-300 dark:border-[#262b36] dark:bg-[#161920] dark:hover:border-zinc-600">
            <div>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{cert.name}</p>
              <p className="mt-0.5 font-mono text-xs text-zinc-500 dark:text-zinc-400">{cert.issuer} · {cert.date}</p>
            </div>
            <ArrowUpRightIcon />
          </a>
        ))}
      </div>
    </section>
  );
}
