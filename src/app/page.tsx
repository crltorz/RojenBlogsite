import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import JournalCard from "@/components/JournalCard";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { getPublishedEntries } from "@/content/journal";
import { getFeaturedPhotos } from "@/content/photos";
import { siteConfig } from "@/content/site";

const growthHighlights = [
  {
    title: "Professional communication",
    text: "From nervous front-desk moments to clearer conversations with students and teammates.",
  },
  {
    title: "Systems & accuracy",
    text: "Working with Zoho CRM taught me how careful data work supports real people.",
  },
  {
    title: "Creativity in motion",
    text: "Content ideas, camera days, and event support helped me use creativity with purpose.",
  },
];

export default function HomePage() {
  const featuredEntries = getPublishedEntries().slice(0, 3);
  const featuredPhotos = getFeaturedPhotos(6);

  return (
    <>
      <Hero
        imageSrc="/images/internship/photo-02.jpg"
        imageAlt="Rojen smiling during an outdoor moment from her AECC internship"
      />

      <section
        id="welcome"
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      >
        <ScrollReveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Welcome"
                title="A journal of becoming"
                description="This site is my personal internship diary — not a company brochure. Here you’ll find weekly stories, photographs, and reflections from my time as an IT Intern at AECC Study Abroad Consultants in Davao City."
              />
              <p className="text-base leading-relaxed text-charcoal-soft">
                I am {siteConfig.owner}, a {siteConfig.degree} student at{" "}
                {siteConfig.university}. These pages hold the soft details and
                hard lessons that shaped my days — the ones that rarely fit into
                a formal report.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
              <Image
                src="/images/internship/photo-20.jpg"
                alt="Rojen holding her AECC Certificate of Completion"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="border-y border-dusty/40 bg-blush/25 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Journal"
                title="Featured weekly entries"
                description="Start with Week 1 — New Beginnings. More weeks can be added as your reports and photographs are ready."
              />
              <Link
                href="/journey"
                className="text-sm text-mauve transition hover:text-charcoal"
              >
                View full journey →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            {featuredEntries.map((entry, index) => (
              <ScrollReveal key={entry.id} delayMs={index * 80}>
                <JournalCard entry={entry} featured={index === 0} />
              </ScrollReveal>
            ))}
            {featuredEntries.length === 0 ? (
              <p className="text-charcoal-soft">
                Published journal entries will appear here.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Photo Diary"
              title="Captured Moments"
              description="A preview of memories from office days, team moments, and event preparation."
            />
            <Link
              href="/photos"
              className="text-sm text-mauve transition hover:text-charcoal"
            >
              Open photo diary →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {featuredPhotos.map((photo, index) => (
            <ScrollReveal
              key={photo.id}
              delayMs={index * 60}
              className={index === 0 ? "col-span-2 row-span-2" : ""}
            >
              <Link
                href="/photos"
                className={`group relative block overflow-hidden rounded-2xl ${
                  index === 0 ? "aspect-[4/3] md:aspect-square" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent opacity-80" />
                <span className="absolute right-0 bottom-0 left-0 p-4 font-serif text-sm italic text-ivory">
                  {photo.caption}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-dusty/40 bg-ivory/60 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Growth"
              title="Beyond the Classroom"
              description="My internship introduced me to real workplace rhythms — communication, accuracy, teamwork, and creative contribution."
              className="mb-10"
            />
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-3">
            {growthHighlights.map((item, index) => (
              <ScrollReveal key={item.title} delayMs={index * 90}>
                <div className="soft-card h-full rounded-[1.5rem] p-6">
                  <p className="font-serif text-xl text-charcoal">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <ScrollReveal>
          <p className="font-serif text-sm italic tracking-[0.18em] text-mauve uppercase">
            A quiet note
          </p>
          <blockquote className="mt-5 font-serif text-3xl leading-snug text-charcoal sm:text-4xl">
            “{siteConfig.quote}”
          </blockquote>
          <p className="mt-6 text-sm text-charcoal-soft">— {siteConfig.owner}</p>
        </ScrollReveal>
      </section>
    </>
  );
}
