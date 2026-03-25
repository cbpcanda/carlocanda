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

export function EventParticipationBadges({
  event,
}: {
  event: Pick<FeaturedEvent, "invited" | "joined">;
}) {
  return (
    <span className="flex flex-wrap gap-1.5">
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
