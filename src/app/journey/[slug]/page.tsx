import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/BlogArticle";
import {
  getAdjacentEntries,
  getEntryBySlug,
  getPublishedEntries,
} from "@/content/journal";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry || !entry.published) {
    return { title: "Journal Entry" };
  }
  return {
    title: `Week ${entry.weekNumber}: ${entry.title}`,
    description: entry.summary,
  };
}

export default async function JournalEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);

  if (!entry || !entry.published) {
    notFound();
  }

  const { previous, next } = getAdjacentEntries(slug);

  return <BlogArticle entry={entry} previous={previous} next={next} />;
}
