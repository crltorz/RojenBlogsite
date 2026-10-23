import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <p className="font-serif text-sm italic tracking-[0.18em] text-mauve uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl text-charcoal">
        This page wandered off the diary
      </h1>
      <p className="mt-4 text-charcoal-soft">
        The page you&apos;re looking for isn&apos;t here. Let&apos;s go back to
        the beginning.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm text-ivory transition hover:bg-mauve"
      >
        Return home
      </Link>
    </div>
  );
}
