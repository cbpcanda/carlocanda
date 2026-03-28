import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { groupProjectsByPhase } from "@/lib/projects-grouped";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project repository: work in progress, upcoming builds, and shipped past projects.",
};

export default function ProjectsPage() {
  const groups = groupProjectsByPhase(projects);

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          Project repository
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Everything I&apos;m actively building, planning next, and have already
          shipped — open a card for the full story, links, and snapshots.
        </p>

        <div className="mt-16 space-y-20">
          {groups.map(({ phase, label, projects: group }) => (
            <section key={phase} aria-labelledby={`phase-${phase}`}>
              <div className="flex flex-col gap-2 border-b border-zinc-200 pb-4 dark:border-zinc-800 sm:flex-row sm:items-end sm:justify-between">
                <h2
                  id={`phase-${phase}`}
                  className="font-display text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
                >
                  {label}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {group.length}{" "}
                  {group.length === 1 ? "entry" : "entries"}
                </p>
              </div>
              {group.length === 0 ? (
                <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-400">
                  {phase === "upcoming"
                    ? "Nothing queued here yet — check back for what’s next."
                    : "No projects in this section yet."}
                </p>
              ) : (
                <ul className="mt-10 grid gap-8 sm:grid-cols-2">
                  {group.map((project) => (
                    <li key={project.slug}>
                      <ProjectCard project={project} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
