"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import type { PhotoItem } from "@/content/photos";

type PhotoLightboxProps = {
  photos: PhotoItem[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export default function PhotoLightbox({
  photos,
  index,
  onClose,
  onChange,
}: PhotoLightboxProps) {
  const open = index !== null && photos[index];
  const photo = open ? photos[index] : null;

  const showPrevious = useCallback(() => {
    if (index === null || photos.length === 0) return;
    onChange((index - 1 + photos.length) % photos.length);
  }, [index, onChange, photos.length]);

  const showNext = useCallback(() => {
    if (index === null || photos.length === 0) return;
    onChange((index + 1) % photos.length);
  }, [index, onChange, photos.length]);

  useEffect(() => {
    if (index === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, onClose, showNext, showPrevious]);

  if (!photo || index === null) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/88 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Photograph lightbox"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close lightbox"
        className="absolute top-4 right-4 z-10 rounded-full border border-ivory/30 bg-charcoal/40 p-2 text-ivory transition hover:bg-charcoal/70"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Previous photograph"
        className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full border border-ivory/30 bg-charcoal/40 p-2 text-ivory transition hover:bg-charcoal/70 sm:left-6"
        onClick={(event) => {
          event.stopPropagation();
          showPrevious();
        }}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Next photograph"
        className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full border border-ivory/30 bg-charcoal/40 p-2 text-ivory transition hover:bg-charcoal/70 sm:right-6"
        onClick={(event) => {
          event.stopPropagation();
          showNext();
        }}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <figure
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-[70vh] w-full sm:h-[78vh]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
        <figcaption className="mt-4 max-w-2xl text-center text-sm text-ivory/90 sm:text-base">
          <span className="font-serif italic">{photo.caption}</span>
          <span className="mt-1 block text-xs tracking-wide text-ivory/60 uppercase">
            {photo.category} · {index + 1} / {photos.length}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
