import type { Metadata } from "next";
import JournalCard from "@/components/JournalCard";
import JournalTimeline from "@/components/JournalTimeline";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { getPublishedEntries } from "@/content/journal";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "Weekly internship journal entries by Rojen Oliveros at AECC Davao — June 15 to August 12, 2026.",
};

export default function JourneyPage() {
  const entries = getPublishedEntries();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <ScrollReveal>
        <SectionHeading
          eyebrow="My Journey"
          title="Weekly Internship Journal"
          description="Nine weeks at AECC Davao — from June 15 to August 12, 2026. Follow the full timeline below, or open any week to read the story."
          className="mb-12 max-w-3xl"
        />
      </ScrollReveal>

      <section className="mb-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Timeline"
            title="June 15 – August 12, 2026"
            description="Every week of my internship, in order — from New Beginnings to Closing the Chapter."
            className="mb-10"
          />
        </ScrollReveal>
        <ScrollReveal>
          <JournalTimeline entries={entries} />
        </ScrollReveal>
      </section>

      <section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Journal entries"
            title="Read each week"
            description="Open a full article for activities, challenges, lessons, and photographs from that week."
            className="mb-10"
          />
        </ScrollReveal>
        <div className="grid gap-6">
          {entries.map((entry, index) => (
            <ScrollReveal key={entry.id} delayMs={Math.min(index, 4) * 50}>
              <JournalCard entry={entry} featured={index === 0} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
