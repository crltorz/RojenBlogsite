import type { Metadata } from "next";
import JournalCard from "@/components/JournalCard";
import JournalTimeline from "@/components/JournalTimeline";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { getAllEntries, getPublishedEntries } from "@/content/journal";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "Weekly internship journal entries by Rojen Oliveros at AECC Davao.",
};

export default function JourneyPage() {
  const published = getPublishedEntries();
  const allEntries = getAllEntries();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <ScrollReveal>
        <SectionHeading
          eyebrow="My Journey"
          title="Weekly Internship Journal"
          description="A chronological diary of my internship weeks — starting with documented accomplishments, with editable templates ready for the weeks still being written."
          className="mb-12 max-w-3xl"
        />
      </ScrollReveal>

      <div className="grid gap-6">
        {published.map((entry, index) => (
          <ScrollReveal key={entry.id} delayMs={index * 70}>
            <JournalCard entry={entry} featured={index === 0} />
          </ScrollReveal>
        ))}
      </div>

      <section className="mt-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Timeline"
            title="The weeks at a glance"
            description="Published entries open as full articles. Unpublished weeks are templates waiting for real dates and stories."
            className="mb-10"
          />
        </ScrollReveal>
        <ScrollReveal>
          <JournalTimeline entries={allEntries} />
        </ScrollReveal>
      </section>
    </div>
  );
}
