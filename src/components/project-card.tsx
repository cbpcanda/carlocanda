import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const fit = project.snapshotsObjectFit ?? "cover";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-zinc-950/[0.04] ring-1 transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:ring-white/[0.06]"
    >
      <article className="flex gap-4">
        <div
          className="relative size-11 shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
          aria-hidden
        >
          <Image
            src={project.coverImage}
            alt=""
            fill
            className={
              fit === "contain" ? "object-contain p-1.5" : "object-cover"
            }
            sizes="44px"
            priority={project.slug === "teks" || project.slug === "bidbird"}
          />
        </div>
        <div className="min-w-0 flex-1 text-left">
          <h3 className="font-display text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            <span className="underline decoration-zinc-400/0 underline-offset-4 transition-colors group-hover:decoration-teal-700/40 group-hover:text-teal-900 dark:group-hover:text-teal-300">
              {project.title}
            </span>
          </h3>
          <p className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
            {project.tagline}
          </p>
        </div>
      </article>
    </Link>
  );
}
