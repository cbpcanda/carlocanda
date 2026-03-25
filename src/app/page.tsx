import Link from "next/link";
import { EventParticipationBadges } from "@/components/event-participation-badges";
import { ProjectCard } from "@/components/project-card";
import { eventsSortedNewestFirst, featuredEvents } from "@/data/events";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

const featured = projects.filter(
  (p) => p.slug === "teks" || p.slug === "bidbird",
);

export default function Home() {
  const previewEvents = eventsSortedNewestFirst().slice(0, 4);

  return (
    <main className="flex-1">
      <section className="border-b border-zinc-200/80 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-teal-700 dark:text-teal-400">
            {site.title}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
            {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {site.tagline}
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            {site.location}
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Living project repository: what I&apos;m building, what&apos;s next,
            and what I&apos;ve already shipped — with snapshots and links on each
            entry.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Browse repository
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Features &amp; events
            </Link>
            <a
              href={site.social[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          About
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          {site.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200/80 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Features
              </h2>
              <p className="mt-2 max-w-lg text-sm text-zinc-600 dark:text-zinc-400">
                Events I&apos;ve been invited to and where I&apos;ve joined —
                summits, talks, and community appearances.
              </p>
            </div>
            <Link
              href="/features"
              className="text-sm font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-400"
            >
              Full list →
            </Link>
          </div>

          {featuredEvents.length === 0 ? (
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Add your events in{" "}
              <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                src/data/events.ts
              </code>{" "}
              to populate this section and the Features page.
            </p>
          ) : (
            <ul className="mt-10 divide-y divide-zinc-200 dark:divide-zinc-800">
              {previewEvents.map((event) => (
                <li
                  key={event.slug}
                  className="flex flex-col gap-3 py-6 first:pt-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {event.dateLabel}
                      {event.location ? ` · ${event.location}` : ""}
                    </p>
                    <p className="font-display mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                      {event.title}
                    </p>
                    {event.host ? (
                      <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                        {event.host}
                      </p>
                    ) : null}
                  </div>
                  <EventParticipationBadges event={event} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="border-t border-zinc-200/80 bg-zinc-50/80 py-16 dark:border-zinc-800 dark:bg-zinc-950/40 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                From the repository
              </h2>
              <p className="mt-2 max-w-lg text-sm text-zinc-600 dark:text-zinc-400">
                Status, phase (working / upcoming / worked), links, and snapshots
                on each project page.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-400"
            >
              All projects →
            </Link>
          </div>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {featured.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
