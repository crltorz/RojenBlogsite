import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-dusty/40 bg-blush/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <p className="font-serif text-2xl text-charcoal">
            {siteConfig.title}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-charcoal-soft">
            A personal internship journal by {siteConfig.owner} — documenting
            growth, memories, and lessons from {siteConfig.companyShort}.
          </p>
          <p className="font-serif text-sm italic text-mauve">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-xs tracking-[0.18em] text-mauve uppercase">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-charcoal-soft">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-charcoal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs tracking-[0.18em] text-mauve uppercase">
              Internship
            </p>
            <ul className="space-y-2 text-sm text-charcoal-soft">
              <li>{siteConfig.owner}</li>
              <li>{siteConfig.position}</li>
              <li>{siteConfig.company}</li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-dusty/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-charcoal-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © 2026 {siteConfig.owner}. Personal project — not an official AECC
            website.
          </p>
          <p className="font-serif italic">Made with care from the diary pages.</p>
        </div>
      </div>
    </footer>
  );
}
