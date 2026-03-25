import type { ProjectRepositoryPhase } from "@/types/project";

const copy: Record<ProjectRepositoryPhase, string> = {
  working: "Working on",
  worked: "Worked on",
  upcoming: "Will work on",
};

export function RepositoryPhaseLabel({
  phase,
}: {
  phase: ProjectRepositoryPhase;
}) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
      {copy[phase]}
    </span>
  );
}
