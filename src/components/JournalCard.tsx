import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  formatDateRange,
  type JournalEntry,
} from "@/content/journal";

type JournalCardProps = {
  entry: JournalEntry;
  featured?: boolean;
};

export default function JournalCard({
  entry,
  featured = false,
}: JournalCardProps) {
  const href = entry.published
    ? `/journey/${entry.slug}`
    : `/journey#${entry.slug}`;

  return (
    <article
      className={`group soft-card overflow-hidden rounded-[1.6rem] transition duration-300 hover:-translate-y-1 ${
        featured ? "md:grid md:grid-cols-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "min-h-64 md:min-h-full" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={entry.coverImage}
          alt={`Cover for Week ${entry.weekNumber}: ${entry.title}`}
          fill
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-ivory/90 px-3 py-1 text-xs tracking-wide text-mauve">
          Week {entry.weekNumber}
        </span>
      </div>

      <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
        <div className="space-y-2">
          <p className="font-serif text-sm italic text-mauve">
            {formatDateRange(entry.startDate, entry.endDate)}
          </p>
          <h3 className="font-serif text-2xl text-charcoal sm:text-[1.7rem]">
            {entry.title}
          </h3>
          {!entry.published ? (
            <p className="inline-flex w-fit rounded-full bg-blush px-3 py-1 text-xs tracking-wide text-mauve">
              Template — ready to edit
            </p>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-charcoal-soft sm:text-base">
          {entry.summary}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm text-charcoal transition group-hover:text-mauve"
        >
          {entry.published ? "Read this week" : "View template"}
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
