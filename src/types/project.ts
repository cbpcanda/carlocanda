export type ProjectStatus =
  | "live"
  | "in-progress"
  | "paused"
  | "archived"
  | "acquired";

/** Where this entry sits in your project repository */
export type ProjectRepositoryPhase = "working" | "worked" | "upcoming";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  /** Working on · Worked on · Upcoming — for the project repository */
  repositoryPhase: ProjectRepositoryPhase;
  period: string;
  description: string;
  role: string;
  links: ProjectLink[];
  /** Primary card image (path under /public) */
  coverImage: string;
  /** Additional screenshots or media */
  snapshots: string[];
  /** Gallery fit: `contain` suits square app icons; default `cover` for screenshots. */
  snapshotsObjectFit?: "cover" | "contain";
};
