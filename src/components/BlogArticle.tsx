import Image from "next/image";
import Link from "next/link";
import {
  formatDateRange,
  type JournalEntry,
} from "@/content/journal";

type BlogArticleProps = {
  entry: JournalEntry;
  previous: JournalEntry | null;
  next: JournalEntry | null;
};

export default function BlogArticle({
  entry,
  previous,
  next,
}: BlogArticleProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <Link
        href="/journey"
        className="text-sm text-mauve transition hover:text-charcoal"
      >
        ← Back to My Journey
      </Link>

      <header className="mt-8 space-y-4">
        <p className="text-xs tracking-[0.2em] text-mauve uppercase">
          Week {entry.weekNumber}
        </p>
        <h1 className="font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
          {entry.title}
        </h1>
        <p className="font-serif text-base italic text-charcoal-soft">
          {formatDateRange(entry.startDate, entry.endDate)}
        </p>
        <p className="max-w-2xl text-lg leading-relaxed text-charcoal-soft">
          {entry.summary}
        </p>
      </header>

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[1.6rem]">
        <Image
          src={entry.coverImage}
          alt={`Cover photograph for ${entry.title}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <section className="mt-12 space-y-5 text-base leading-8 text-charcoal-soft sm:text-lg">
        {entry.story.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </section>

      <section className="mt-14 soft-card rounded-[1.5rem] p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-charcoal">
          Activities & Responsibilities
        </h2>
        <ul className="mt-5 space-y-3">
          {entry.activities.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-charcoal-soft sm:text-base"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mauve" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="rounded-[1.5rem] border border-dusty/50 bg-blush/40 p-6">
          <h2 className="font-serif text-xl text-charcoal">Challenges</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal-soft">
            {entry.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-[1.5rem] border border-dusty/50 bg-ivory p-6">
          <h2 className="font-serif text-xl text-charcoal">Lessons Learned</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal-soft">
            {entry.reflections.map((item) => (
              <li key={item} className="font-serif italic">
                “{item}”
              </li>
            ))}
          </ul>
        </section>
      </div>

      {entry.galleryImages.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-serif text-2xl text-charcoal">
            Related Photographs
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {entry.galleryImages.map((src, index) => (
              <figure
                key={src}
                className={`relative overflow-hidden rounded-2xl ${
                  index === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={src}
                  alt={
                    entry.photoCaptions[src] ??
                    `Gallery photograph from Week ${entry.weekNumber}`
                  }
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                {entry.photoCaptions[src] ? (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent px-4 pt-10 pb-3 text-sm text-ivory">
                    {entry.photoCaptions[src]}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <nav
        className="mt-16 flex flex-col gap-4 border-t border-dusty/50 pt-8 sm:flex-row sm:justify-between"
        aria-label="Journal entry navigation"
      >
        {previous ? (
          <Link
            href={`/journey/${previous.slug}`}
            className="group soft-card rounded-2xl p-5 transition hover:border-mauve sm:max-w-[48%]"
          >
            <p className="text-xs tracking-wide text-mauve uppercase">
              Previous
            </p>
            <p className="mt-2 font-serif text-lg text-charcoal group-hover:text-mauve">
              Week {previous.weekNumber}: {previous.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/journey/${next.slug}`}
            className="group soft-card rounded-2xl p-5 text-right transition hover:border-mauve sm:ml-auto sm:max-w-[48%]"
          >
            <p className="text-xs tracking-wide text-mauve uppercase">Next</p>
            <p className="mt-2 font-serif text-lg text-charcoal group-hover:text-mauve">
              Week {next.weekNumber}: {next.title}
            </p>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
