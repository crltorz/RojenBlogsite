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
      {entries.map((entry, index) => (
        <li key={entry.id} id={entry.slug} className="relative pb-10 last:pb-0">
          <span
            className="absolute top-1.5 -left-[2.4rem] flex h-5 w-5 items-center justify-center rounded-full border border-dusty bg-ivory"
            aria-hidden="true"
          >
            <span
              className={`h-2 w-2 rounded-full ${
                index === 0 || index === entries.length - 1
                  ? "bg-mauve"
                  : "bg-dusty"
              }`}
            />
          </span>
          <div className="soft-card rounded-2xl p-5 transition hover:border-mauve/50 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-xs tracking-[0.16em] text-mauve uppercase">
                Week {entry.weekNumber}
                <span className="mx-2 text-dusty">·</span>
                <span className="tracking-normal normal-case">
                  {formatDateRange(entry.startDate, entry.endDate)}
                </span>
              </p>
            </div>
            <h3 className="mt-2 font-serif text-xl text-charcoal">
              <Link
                href={`/journey/${entry.slug}`}
                className="transition hover:text-mauve"
              >
                {entry.title}
              </Link>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
              {entry.summary}
            </p>
            <Link
              href={`/journey/${entry.slug}`}
              className="mt-4 inline-block text-sm text-mauve transition hover:text-charcoal"
            >
              Open Week {entry.weekNumber} →
            </Link>
          </div>
        </li>
      ))}
    </ol>
  );
}
