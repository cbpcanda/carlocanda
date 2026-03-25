import type { Metadata } from "next";
import Link from "next/link";
import { EventParticipationBadges } from "@/components/event-participation-badges";
import { eventsSortedNewestFirst, featuredEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Events, summits, and appearances — invited and joined — in one place.",
};

export default function FeaturesPage() {
  const events = eventsSortedNewestFirst();

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          Features
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          A running list of events I&apos;ve been invited to and where I&apos;ve
          actually shown up — panels, summits, community meetups, and similar.
          It grows as new invites come in.
        </p>

        {featuredEvents.length === 0 ? (
          <div className="mt-14 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/80 p-8 dark:border-zinc-700 dark:bg-zinc-900/40">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              No entries yet. Add objects to{" "}
              <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                src/data/events.ts
              </code>{" "}
              (array{" "}
              <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                featuredEvents
              </code>
              ). Use{" "}
              <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                invited
              </code>{" "}
              and{" "}
              <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
                joined
              </code>{" "}
              to reflect each row.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block text-sm font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-400"
            >
              ← Home
            </Link>
          </div>
        ) : (
          <ol className="mt-14 space-y-10 border-l border-zinc-200 pl-8 dark:border-zinc-800">
            {events.map((event) => (
              <li key={event.slug} className="relative">
                <span
                  className="absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-teal-500 ring-4 ring-zinc-50 dark:ring-zinc-950"
                  aria-hidden
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3">
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {event.dateLabel}
                    {event.location ? ` · ${event.location}` : ""}
                  </p>
                  <EventParticipationBadges event={event} />
                </div>
                <h2 className="font-display mt-2 text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                  {event.title}
                </h2>
                {event.host ? (
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {event.host}
                  </p>
                ) : null}
                {event.notes ? (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {event.notes}
                  </p>
                ) : null}
                {event.link ? (
                  <a
                    href={event.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-400"
                  >
                    {event.link.label} ↗
                  </a>
                ) : null}
              </li>
            ))}
          </ol>
        )}
      </div>
    </main>
  );
}
