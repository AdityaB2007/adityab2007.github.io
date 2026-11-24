import { MoonIcon, SunIcon } from './Icons';

const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' },
  { href: '#education', label: 'Education' },
];

export function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-stone-50/85 backdrop-blur dark:border-[#262b36] dark:bg-[#0f1115]/85">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-4 px-5 sm:px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Aditya Baisakh
        </a>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-5 text-sm text-zinc-600 sm:flex dark:text-zinc-400">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-stone-200 bg-white text-zinc-700 transition-colors hover:bg-stone-100 dark:border-[#262b36] dark:bg-[#161920] dark:text-zinc-300 dark:hover:bg-[#1f242e]"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
