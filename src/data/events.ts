import type { FeaturedEvent } from "@/types/event";

/**
 * Speaking, panels, summits, and other appearances.
 * Set `invited` / `joined` to reflect what actually happened.
 * Add rows here — newest first is recommended; the Features page sorts by `dateSort`.
 */
export const featuredEvents: FeaturedEvent[] = [
  // Example shape (remove or replace):
  // {
  //   slug: "example-summit-2025",
  //   title: "No-Code Tech Summit",
  //   host: "Community / organizer name",
  //   dateLabel: "Jan 2026",
  //   dateSort: "2026-01-15",
  //   location: "Online",
  //   invited: true,
  //   joined: true,
  //   notes: "Short context — talk, panel, attendee, etc.",
  //   link: { label: "Recap", href: "https://..." },
  // },
];

export function eventsSortedNewestFirst(): FeaturedEvent[] {
  return [...featuredEvents].sort(
    (a, b) => Date.parse(b.dateSort) - Date.parse(a.dateSort),
  );
}
