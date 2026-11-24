import { PROFILE } from '../data/profile';
import { ArrowUpRightIcon } from './Icons';

const linkClass =
  'inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 transition-colors hover:border-stone-300 hover:bg-stone-100 dark:border-[#262b36] dark:bg-[#161920] dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-[#1f242e]';

export function Hero() {
  const links = [
    { label: 'Email', href: `mailto:${PROFILE.email}`, external: false },
    { label: 'GitHub', href: PROFILE.github, external: true },
    { label: 'LinkedIn', href: PROFILE.linkedin, external: true },
  ];

  return (
    <section id="top" className="flex flex-col gap-7 pt-12 pb-10 sm:flex-row sm:items-start">
      <img
        src={PROFILE.photo}
        alt={PROFILE.name}
        className="h-32 w-32 shrink-0 rounded-2xl border border-stone-200 object-cover sm:h-36 sm:w-36 dark:border-[#262b36]"
      />
      <div className="min-w-0">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">{PROFILE.name}</h1>
        <p className="mt-1.5 font-mono text-xs text-zinc-500 sm:text-sm dark:text-zinc-400">{PROFILE.subtitle}</p>
        <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
          {PROFILE.bio.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {links.map((item) => (
            <a key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined} className={linkClass}>
              {item.label}
              {item.external && <ArrowUpRightIcon />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
