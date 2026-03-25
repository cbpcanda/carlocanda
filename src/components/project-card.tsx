import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { RepositoryPhaseLabel } from "./repository-phase-label";
import { StatusBadge } from "./status-badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40">
      <Link href={`/projects/${project.slug}`} className="relative aspect-[16/9] bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={project.coverImage}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 640px"
          priority={project.slug === "teks" || project.slug === "bidbird"}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {project.period}
          </span>
        </div>
        <div>
          <RepositoryPhaseLabel phase={project.repositoryPhase} />
          <Link
            href={`/projects/${project.slug}`}
            className="mt-1 block font-display text-xl font-semibold text-zinc-950 decoration-zinc-400/0 underline-offset-4 transition-colors hover:text-teal-800 hover:underline dark:text-zinc-50 dark:hover:text-teal-300"
          >
            {project.title}
          </Link>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {project.tagline}
          </p>
        </div>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.links.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-teal-700 underline-offset-4 hover:underline dark:text-teal-400"
            >
              {link.label} ↗
            </a>
          ))}
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-medium text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
          >
            Details &amp; snapshots
          </Link>
        </div>
      </div>
    </article>
  );
}
