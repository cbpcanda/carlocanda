import Image from "next/image";
import Link from "next/link";
import { StatusBadge } from "@/components/status-badge";
import { eventsSortedNewestFirst } from "@/data/events";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

function projectHref(p: Project): string {
  const web = p.links.find((l) => l.label === "Website");
  if (web) return web.href;
  return `/projects/${p.slug}`;
}

function isExternal(p: Project): boolean {
  return p.links.some((l) => l.label === "Website");
}

const phaseRank: Record<Project["repositoryPhase"], number> = {
  working: 0,
  upcoming: 1,
  worked: 2,
};

const sortedProjects = [...projects].sort(
  (a, b) => phaseRank[a.repositoryPhase] - phaseRank[b.repositoryPhase],
);

export default function Home() {
  const previewEvents = eventsSortedNewestFirst().slice(0, 3);

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-lg px-5 pb-20 pt-12 sm:px-6 sm:pt-16">
        {/* Profile */}
        <div className="flex justify-center">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full shadow-lg ring-4 ring-white dark:ring-zinc-950">
            <Image
              src="/carlo-canda.png"
              alt={site.name}
              width={96}
              height={96}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="font-display mt-8 text-center text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          {site.name}
        </h1>
        <p className="mt-1 text-center text-lg text-zinc-500 dark:text-zinc-400">
          {site.location}
        </p>
        <p className="font-display mt-2 text-center text-sm font-medium text-zinc-600 dark:text-zinc-300">
          {site.title}
        </p>

        <p className="mt-8 text-center text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
          <span className="font-semibold text-zinc-950 dark:text-zinc-50">
            {site.hook.lead}
          </span>
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/projects"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:w-auto dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Browse all projects
          </Link>
          <a
            href={site.social[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 sm:w-auto dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            LinkedIn
          </a>
        </div>

        <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <li>
            <Link href="/features" className="hover:text-zinc-950 dark:hover:text-zinc-50">
              Features
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-zinc-950 dark:hover:text-zinc-50">
              Writing
            </Link>
          </li>
          <li>
            <a
              href={site.company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              {site.company.label}
            </a>
          </li>
        </ul>

        {/* Product list — Indie Page style */}
        <ul className="mt-14 space-y-0 divide-y divide-zinc-200 dark:divide-zinc-800">
          {sortedProjects.map((p) => (
            <li key={p.slug} className="py-5 first:pt-0">
              <Link
                href={projectHref(p)}
                target={isExternal(p) ? "_blank" : undefined}
                rel={isExternal(p) ? "noopener noreferrer" : undefined}
                className="group flex gap-4"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-200/80 dark:bg-zinc-800 dark:ring-zinc-700">
                  <Image
                    src={p.coverImage}
                    alt=""
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-display font-semibold text-zinc-950 group-hover:text-teal-700 dark:text-zinc-50 dark:group-hover:text-teal-400">
                      {p.title}
                    </p>
                    <StatusBadge status={p.status} />
                  </div>
                  <p className="mt-0.5 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
                    {p.tagline}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {previewEvents.length > 0 ? (
          <section className="mt-16 border-t border-zinc-200 pt-10 dark:border-zinc-800">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Appearances
              </h2>
              <Link
                href="/features"
                className="text-xs font-medium text-teal-700 hover:underline dark:text-teal-400"
              >
                All →
              </Link>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              {previewEvents.map((e) => (
                <li key={e.slug}>
                  <span className="text-zinc-400 dark:text-zinc-500">
                    {e.dateLabel}
                    {e.location ? ` · ${e.location}` : ""} —{" "}
                  </span>
                  {e.title}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-16 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <h2 className="font-display text-center text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-center text-sm">
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-400"
              >
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phoneTel}`}
                className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-400"
              >
                {site.contact.phoneLabel}
              </a>
            </li>
          </ul>
        </section>

        <p className="mt-16 text-center text-xs text-zinc-400 dark:text-zinc-500">
          More on the{" "}
          <Link href="/projects" className="underline underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-300">
            projects
          </Link>{" "}
          page — status, snapshots, and links per build.
        </p>
      </div>
    </main>
  );
}
