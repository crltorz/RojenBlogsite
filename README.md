# The Internship Diaries

A personal internship journal website for **Rojen Oliveros** — documenting weekly stories, photographs, and reflections from an IT internship at **AECC Study Abroad Consultants (Davao City)**.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide React**.

This is a personal lifestyle-style journal / portfolio site — **not** an official AECC corporate website.

---

## 1. Installation

Requirements:

- Node.js 20+ recommended
- npm

From the project root:

```bash
npm install
```

---

## 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

---

## 3. Adding a new weekly journal entry

Edit:

```text
src/content/journal.ts
```

1. Copy an unpublished template entry (Week 2–4) or add a new object to `journalEntries`.
2. Fill in real fields only:
   - `weekNumber`, `title`, `slug`
   - `startDate` / `endDate` as `YYYY-MM-DD` (or leave `null` until known)
   - `summary`, `story`, `activities`, `challenges`, `reflections`
   - `coverImage`, `galleryImages`, `photoCaptions`
3. Set `published: true` when the entry is ready.
4. Keep `slug` unique and URL-friendly (example: `week-5-steady-hands`).

Published entries automatically appear on:

- Home → Featured weekly entries
- `/journey`
- `/journey/[slug]`

**Do not invent dates, activities, or people.** Leave templates unpublished until your accomplishment report confirms the details.

---

## 4. Adding or replacing photographs

### Where photos live

Place optimized images in:

```text
public/images/internship/
```

Suggested naming:

```text
photo-56.jpg
week-2-cover.jpg
gef-team-01.jpg
```

Use descriptive filenames. Prefer `.jpg` / `.webp`. Avoid publishing confidential screens (client CRM records, student data, private documents).

### Register photos in content

Edit:

```text
src/content/photos.ts
```

Add an object to the `photos` array:

```ts
{
  id: "p56",
  src: "/images/internship/photo-56.jpg",
  alt: "Short accessible description",
  caption: "Optional soft caption",
  category: "Team Memories",
  width: 1536,
  height: 2048,
}
```

Categories currently used:

- Everyday Office Life
- Working & Learning
- Team Memories
- Events & Activities
- Little Highlights

To feature a photo on the homepage preview, add its `id` to the `preferred` list inside `getFeaturedPhotos()`.

### Linking photos to a journal week

In `src/content/journal.ts`, set:

- `coverImage`
- `galleryImages`
- `photoCaptions`

### Source photos in this workspace

Original internship photographs were imported from the local `Pictures/` folder into `public/images/internship/` as optimized JPEGs.

Additional assets may also live in the Google Drive folder shared for this project; download them locally and place them in `public/images/internship/` rather than hotlinking Drive preview URLs.

---

## 5. Deploying on Vercel

1. Push this project to GitHub (or connect the folder in the Vercel dashboard).
2. Import the repository in [Vercel](https://vercel.com).
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build`
5. Output: default Next.js output (no extra config required).
6. Deploy.

After deploy, re-run production builds whenever you add journal entries or photographs.

---

## Project structure (high level)

```text
src/
  app/                 # routes: home, journey, photos, about, reflections
  components/          # Navbar, Hero, JournalCard, PhotoGrid, etc.
  content/             # editable site, journal, and photo data
public/
  images/internship/   # local internship photographs
  favicon.svg          # RO monogram
```

---

## Notes on content integrity

- Week 1 is based on the documented June 15–19, 2026 accomplishment report.
- Later weeks ship as editable templates until real dates/activities are available.
- Photos that clearly displayed readable client CRM fields were excluded from the public gallery.
- No private contact details, student records, or confidential documents are published on the site.
