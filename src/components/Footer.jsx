import { PROFILE } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-stone-200 py-8 dark:border-[#262b36]">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-5 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:text-zinc-400">
        <p>{PROFILE.name} · LSU · Baton Rouge, LA</p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${PROFILE.email}`} className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">Email</a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
