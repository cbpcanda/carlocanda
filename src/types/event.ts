export type FeaturedEvent = {
  /** Stable id for keys */
  slug: string;
  title: string;
  host?: string;
  /** Shown in the UI */
  dateLabel: string;
  /** ISO `YYYY-MM-DD` for sorting (use 1st of month if only month known) */
  dateSort: string;
  location?: string;
  /**
   * `appearance` uses `invited` / `joined` for badges.
   * `press` / `highlight` / `feature` show a single badge (`invited` / `joined` ignored).
   */
  kind?: "appearance" | "press" | "highlight" | "feature";
  invited: boolean;
  joined: boolean;
  /** When true, show a “Speaker” badge (typical for talks / sessions). */
  speaker?: boolean;
  /** og:image or local `/...` path for the Features list */
  image?: string;
  notes?: string;
  link?: { label: string; href: string };
};
