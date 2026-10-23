import type { ReactNode } from "react";

type ReflectionSectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export default function ReflectionSection({
  eyebrow,
  title,
  children,
}: ReflectionSectionProps) {
  return (
    <section className="grid gap-6 border-t border-dusty/40 py-12 md:grid-cols-[0.9fr_1.4fr] md:gap-12">
      <div>
        {eyebrow ? (
          <p className="font-serif text-sm italic tracking-[0.16em] text-mauve uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-base leading-8 text-charcoal-soft sm:text-lg">
        {children}
      </div>
    </section>
  );
}
