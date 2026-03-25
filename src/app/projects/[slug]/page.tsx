import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { RepositoryPhaseLabel } from "@/components/repository-phase-label";
import { StatusBadge } from "@/components/status-badge";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="flex-1">
      <article className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <Link
          href="/projects"
          className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← All projects
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            <RepositoryPhaseLabel phase={project.repositoryPhase} />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {project.period} · {project.role}
            </span>
          </div>
          <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {project.tagline}
          </p>
        </header>

        {project.links.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:border-teal-500/40 hover:bg-teal-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-teal-500/30 dark:hover:bg-zinc-800"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        ) : null}

        <p
          className={`max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300 ${project.links.length > 0 ? "mt-12" : "mt-8"}`}
        >
          {project.description}
        </p>

        <section className="mt-16">
          <h2 className="font-display text-xl font-semibold text-zinc-950 dark:text-zinc-50">
            Snapshots
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Replace these placeholders under{" "}
            <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
              public/projects/
            </code>{" "}
            with PNG or WebP exports for sharper thumbnails.
          </p>
          <ul className="mt-8 space-y-8">
            {project.snapshots.map((src, i) => (
              <li
                key={src}
                className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={src}
                    alt={`${project.title} snapshot ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 896px"
                    priority={i === 0}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
