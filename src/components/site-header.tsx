import Link from "next/link";
import { site } from "@/data/site";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/features", label: "Features" },
  { href: "/blog", label: "Writing" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-12 max-w-lg items-center justify-between gap-4 px-5 sm:px-6">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
        >
          {site.name.split(" ")[0]}{" "}
          <span className="font-normal text-zinc-400 dark:text-zinc-500">Canda</span>
        </Link>
        <nav className="flex items-center gap-4 text-xs font-medium sm:text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
