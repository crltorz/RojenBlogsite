import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site";

type HeroProps = {
  imageSrc: string;
  imageAlt: string;
};

export default function Hero({ imageSrc, imageAlt }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-dusty/30">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/88 to-ivory/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-ivory/40" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8 lg:py-28">
        <div className="max-w-xl animate-fade-up space-y-6">
          <p className="font-serif text-sm italic tracking-[0.2em] text-mauve uppercase">
            The Internship Diaries
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="font-serif text-lg italic text-mauve sm:text-xl">
            My Internship Journey at AECC Davao
          </p>
          <p className="max-w-md text-base leading-relaxed text-charcoal-soft sm:text-lg">
            Hi, I&apos;m Rojen! Welcome to a little corner of my journey, where I
            share the experiences, memories, and lessons that shaped my
            internship days at AECC Davao.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/journey"
              className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm tracking-wide text-ivory transition hover:bg-mauve"
            >
              Explore My Journey
            </Link>
            <Link
              href="/photos"
              className="inline-flex items-center justify-center rounded-full border border-dusty bg-ivory/70 px-6 py-3 text-sm tracking-wide text-charcoal transition hover:border-mauve hover:bg-blush/70"
            >
              View Photo Diary
            </Link>
          </div>
        </div>

        <a
          href="#welcome"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-[0.18em] text-mauve uppercase"
          aria-label="Scroll to welcome section"
        >
          <span className="hidden sm:inline">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-float" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
