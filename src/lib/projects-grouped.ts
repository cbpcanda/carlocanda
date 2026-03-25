import type { Project, ProjectRepositoryPhase } from "@/types/project";

const phaseOrder: ProjectRepositoryPhase[] = [
  "working",
  "upcoming",
  "worked",
];

const phaseLabels: Record<ProjectRepositoryPhase, string> = {
  working: "Working on",
  upcoming: "Will work on",
  worked: "Worked on",
};

export function groupProjectsByPhase(projects: Project[]) {
  const map: Record<ProjectRepositoryPhase, Project[]> = {
    working: [],
    upcoming: [],
    worked: [],
  };
  for (const p of projects) {
    map[p.repositoryPhase].push(p);
  }
  return phaseOrder.map((phase) => ({
    phase,
    label: phaseLabels[phase],
    projects: map[phase],
  }));
}
