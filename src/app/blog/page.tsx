import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description: "Posts and notes — coming soon.",
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          Writing
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Posts and longer notes will live here. For now, explore{" "}
          <Link
            href="/projects"
            className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-400"
          >
            projects
          </Link>{" "}
          or{" "}
          <Link
            href="/features"
            className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-400"
          >
            features
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
