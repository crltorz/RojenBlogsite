import type { Metadata } from "next";
import PhotoGrid from "@/components/PhotoGrid";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "Photo Diary",
  description:
    "Moments Worth Keeping — a photography gallery from Rojen Oliveros’s internship at AECC Davao.",
};

export default function PhotosPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Photo Diary"
          title="Moments Worth Keeping"
          description="A collection of memories, experiences, and little moments from my internship journey."
          className="mb-12 max-w-3xl"
        />
      </ScrollReveal>

      {/* Do not wrap the grid in ScrollReveal — tall content stayed opacity:0 */}
      <PhotoGrid photos={photos} />
    </div>
  );
}
