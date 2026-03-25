import type { ProjectStatus } from "@/types/project";

const styles: Record<ProjectStatus, string> = {
  live: "bg-emerald-500/15 text-emerald-700 ring-emerald-500/25 dark:text-emerald-300",
  "in-progress":
    "bg-amber-500/15 text-amber-800 ring-amber-500/25 dark:text-amber-200",
  paused: "bg-zinc-500/15 text-zinc-700 ring-zinc-500/20 dark:text-zinc-300",
  archived:
    "bg-slate-500/15 text-slate-700 ring-slate-500/20 dark:text-slate-300",
  acquired:
    "bg-violet-500/15 text-violet-800 ring-violet-500/25 dark:text-violet-200",
};

const labels: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In progress",
  paused: "Paused",
  archived: "Past / archived",
  acquired: "Acquired",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
