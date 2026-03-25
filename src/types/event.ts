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
  invited: boolean;
  joined: boolean;
  notes?: string;
  link?: { label: string; href: string };
};
