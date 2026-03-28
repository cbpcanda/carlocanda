import type { FeaturedEvent } from "@/types/event";

function Pill({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "invited" | "joined";
}) {
  const cls =
    variant === "joined"
      ? "bg-teal-500/15 text-teal-800 ring-teal-500/25 dark:text-teal-200"
      : "bg-sky-500/15 text-sky-800 ring-sky-500/25 dark:text-sky-200";
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${cls}`}
    >
      {children}
    </span>
  );
}

function SpeakerPill() {
  return (
    <span className="inline-flex rounded-full bg-indigo-500/15 px-2 py-0.5 text-xs font-medium text-indigo-900 ring-1 ring-inset ring-indigo-500/25 dark:text-indigo-200">
      Speaker
    </span>
  );
}

export function EventParticipationBadges({
  event,
}: {
  event: Pick<FeaturedEvent, "kind" | "invited" | "joined" | "speaker">;
}) {
  if (event.kind === "press") {
    return (
      <span className="flex flex-wrap gap-1.5">
        <span className="inline-flex rounded-full bg-violet-500/15 px-2 py-0.5 text-xs font-medium text-violet-800 ring-1 ring-inset ring-violet-500/25 dark:text-violet-200">
          Press
        </span>
      </span>
    );
  }

  if (event.kind === "highlight") {
    return (
      <span className="flex flex-wrap gap-1.5">
        <span className="inline-flex rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-900 ring-1 ring-inset ring-amber-500/25 dark:text-amber-200">
          Highlight
        </span>
      </span>
    );
  }

  if (event.kind === "feature") {
    return (
      <span className="flex flex-wrap gap-1.5">
        <span className="inline-flex rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-900 ring-1 ring-inset ring-emerald-500/25 dark:text-emerald-200">
          Feature
        </span>
      </span>
    );
  }

  return (
    <span className="flex flex-wrap gap-1.5">
      {event.speaker ? <SpeakerPill /> : null}
      {event.invited ? <Pill variant="invited">Invited</Pill> : null}
      {event.joined ? <Pill variant="joined">Joined</Pill> : null}
      {!event.invited && !event.joined ? (
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          Participation TBD
        </span>
      ) : null}
    </span>
  );
}
