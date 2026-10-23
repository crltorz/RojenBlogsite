import Link from "next/link";
import {
  formatDateRange,
  type JournalEntry,
} from "@/content/journal";

type JournalTimelineProps = {
  entries: JournalEntry[];
};

export default function JournalTimeline({ entries }: JournalTimelineProps) {
  return (
    <ol className="relative space-y-0 border-l border-dusty/70 pl-8">
      {entries.map((entry) => (
        <li key={entry.id} id={entry.slug} className="relative pb-10 last:pb-0">
          <span
            className="absolute top-1.5 -left-[2.4rem] flex h-5 w-5 items-center justify-center rounded-full border border-dusty bg-ivory"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-mauve" />
          </span>
          <div className="soft-card rounded-2xl p-5 sm:p-6">
            <p className="text-xs tracking-[0.16em] text-mauve uppercase">
              Week {entry.weekNumber}
            </p>
            <h3 className="mt-2 font-serif text-xl text-charcoal">
              {entry.published ? (
                <Link
                  href={`/journey/${entry.slug}`}
                  className="transition hover:text-mauve"
                >
                  {entry.title}
                </Link>
              ) : (
                entry.title
              )}
            </h3>
            <p className="mt-1 font-serif text-sm italic text-charcoal-soft">
              {formatDateRange(entry.startDate, entry.endDate)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
              {entry.summary}
            </p>
            {entry.published ? (
              <Link
                href={`/journey/${entry.slug}`}
                className="mt-4 inline-block text-sm text-mauve transition hover:text-charcoal"
              >
                Open journal entry →
              </Link>
            ) : (
              <p className="mt-4 text-xs tracking-wide text-mauve">
                Unpublished template — edit in{" "}
                <code className="rounded bg-blush px-1.5 py-0.5">
                  src/content/journal.ts
                </code>
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
