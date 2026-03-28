import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200/80 bg-zinc-50/90 dark:border-zinc-800 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-lg px-5 py-10 sm:px-6">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {site.social.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {s.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.contact.email}`}
            className="text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Email
          </a>
          <a
            href={`tel:${site.contact.phoneTel}`}
            className="text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            {site.contact.phoneLabel}
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
