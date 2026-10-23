"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  photoCategories,
  type PhotoCategory,
  type PhotoItem,
} from "@/content/photos";
import PhotoLightbox from "@/components/PhotoLightbox";

type PhotoGridProps = {
  photos: PhotoItem[];
};

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [category, setCategory] = useState<PhotoCategory | "All">("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (category === "All") return photos;
    return photos.filter((photo) => photo.category === category);
  }, [category, photos]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Photograph categories"
      >
        {photoCategories.map((item) => {
          const selected = category === item;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                selected
                  ? "border-mauve bg-blush text-charcoal"
                  : "border-dusty/70 bg-ivory/70 text-charcoal-soft hover:border-mauve hover:text-charcoal"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-sm text-charcoal-soft">
        Showing {filtered.length} photograph
        {filtered.length === 1 ? "" : "s"}
        {category !== "All" ? ` in ${category}` : ""}.
      </p>

      <div className="photo-masonry mt-8">
        {filtered.map((photo, index) => {
          const portrait = photo.height >= photo.width;
          return (
            <button
              key={photo.id}
              type="button"
              className={`group relative block w-full overflow-hidden rounded-2xl border border-dusty/40 bg-blush/40 text-left transition hover:border-mauve focus-visible:outline-offset-4 ${
                portrait ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open photograph: ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent px-4 pt-12 pb-3 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                <span className="block font-serif text-sm italic text-ivory">
                  {photo.caption}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-charcoal-soft">
          No photographs in this category yet.
        </p>
      ) : null}

      <PhotoLightbox
        photos={filtered}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </div>
  );
}
