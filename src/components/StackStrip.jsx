import { STACK_GROUPS } from '../data/profile';

export function StackStrip() {
  return (
    <section aria-label="Technical stack" className="border-y border-stone-200 py-5 dark:border-[#262b36]">
      <div className="space-y-2.5">
        {STACK_GROUPS.map((group) => (
          <div key={group.label} className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="w-28 shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">{group.label}</span>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-stone-200 bg-white px-2 py-0.5 font-mono text-xs text-zinc-700 dark:border-[#262b36] dark:bg-[#161920] dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
