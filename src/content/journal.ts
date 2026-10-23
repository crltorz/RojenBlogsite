export type JournalEntry = {
  id: string;
  slug: string;
  weekNumber: number;
  title: string;
  /** ISO date string, or null when not yet documented */
  startDate: string | null;
  endDate: string | null;
  summary: string;
  story: string;
  activities: string[];
  challenges: string[];
  reflections: string[];
  coverImage: string;
  galleryImages: string[];
  photoCaptions: Record<string, string>;
  /** When false, the entry is a ready-to-edit template (not published as a full story) */
  published: boolean;
};

export const journalEntries: JournalEntry[] = [
  {
    id: "week-1",
    slug: "week-1-new-beginnings",
    weekNumber: 1,
    title: "New Beginnings",
    startDate: "2026-06-15",
    endDate: "2026-06-19",
    summary:
      "My first week at AECC Davao — orientation, a town hall webinar, shadow calls, front-desk shifts, and finding my footing in a brand-new professional world.",
    story: `Walking into AECC Davao for the first time, I carried a mix of excitement and quiet nerves. Everything felt new — the office energy, the faces I would soon work with, and the reality that my Computer Science journey was stepping into an actual workplace.

On Day 1, I joined an orientation webinar with fellow interns from the Cebu branch. We learned about the company’s background, our responsibilities, and the tools used on the administrative side. I also met the marketing team and was asked to create and facilitate an icebreaker for the town hall session. It was a small assignment, but it already asked me to show up, speak up, and contribute.

The next day, I helped facilitate the AECC town hall webinar as part of the technical team, making sure the session ran smoothly. I interacted with staff from different branches and started brainstorming ideas for marketing video content. Later, I was assigned to the front desk. Handling clients while feeling nervous was uncomfortable — and also exactly the kind of growth I needed.

Midweek, I joined shadow call sessions to prepare for assisting students with booking consultations and appointments. Listening carefully, I learned how to communicate more effectively and handle different client situations. Between calls, I kept refining marketing content ideas and planning for video production.

By Friday, another shadow call session and another front-desk shift helped the nerves settle a little. The day was lighter, and I found myself preparing for the weeks ahead with more curiosity than fear. Week 1 did not make me an expert overnight — but it taught me that confidence often begins with simply showing up.`,
    activities: [
      "Attended orientation with AECC interns from the Cebu branch",
      "Learned company background, responsibilities, and administrative tools",
      "Created and facilitated an icebreaker for the town hall session",
      "Assisted as part of the technical team for the AECC town hall webinar",
      "Brainstormed marketing video content ideas",
      "Shadowed consultation and appointment booking calls",
      "Experienced front-desk responsibilities and client interactions",
    ],
    challenges: [
      "Feeling nervous while handling clients at the front desk",
      "Adjusting to professional communication during calls and webinars",
      "Stepping into unfamiliar responsibilities on the first week",
    ],
    reflections: [
      "Nerves are normal — consistency makes them quieter.",
      "Listening carefully during shadow calls is as valuable as speaking.",
      "Small contributions, like an icebreaker, still matter to a team.",
      "Confidence grows through practice, not perfection.",
    ],
    coverImage: "/images/internship/photo-11.jpg",
    galleryImages: [
      "/images/internship/photo-11.jpg",
      "/images/internship/photo-03.jpg",
      "/images/internship/photo-04.jpg",
      "/images/internship/photo-45.jpg",
      "/images/internship/photo-30.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-11.jpg": "Everyday energy inside the AECC Davao office.",
      "/images/internship/photo-03.jpg": "Hands-on moments — helping set up and settle into the workspace.",
      "/images/internship/photo-04.jpg": "Teamwork in action during ordinary office tasks.",
      "/images/internship/photo-45.jpg": "Focused work days at my desk.",
      "/images/internship/photo-30.jpg": "Learning the rhythm of calls, headsets, and professional conversations.",
    },
    published: true,
  },
  {
    id: "week-2",
    slug: "week-2-finding-my-rhythm",
    weekNumber: 2,
    title: "Finding My Rhythm",
    startDate: null,
    endDate: null,
    summary:
      "Template ready — add your Week 2 date range, story, and photographs when your accomplishment report is available.",
    story: `Replace this paragraph with your Week 2 narrative.

Write about what felt different after the first week — routines that started to form, tasks that became clearer, and moments that surprised you. Keep the tone warm and honest: what you did, how it felt, and what you noticed about yourself.`,
    activities: [
      "Add activity 1 from your weekly report",
      "Add activity 2 from your weekly report",
      "Add activity 3 from your weekly report",
    ],
    challenges: [
      "Add a real challenge from this week",
    ],
    reflections: [
      "Add a lesson you genuinely learned this week",
    ],
    coverImage: "/images/internship/photo-45.jpg",
    galleryImages: [
      "/images/internship/photo-45.jpg",
      "/images/internship/photo-53.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-45.jpg": "Replace with a caption for this week’s cover photo.",
      "/images/internship/photo-53.jpg": "Replace with a caption for a related photo.",
    },
    published: false,
  },
  {
    id: "week-3",
    slug: "week-3-growing-with-the-team",
    weekNumber: 3,
    title: "Growing with the Team",
    startDate: null,
    endDate: null,
    summary:
      "Template ready — document Week 3 once your dates and accomplishments are confirmed.",
    story: `Replace this paragraph with your Week 3 narrative.

Focus on collaboration, mentorship, and how working with the AECC team shaped your confidence. Mention only activities that actually happened this week.`,
    activities: [
      "Add activity 1 from your weekly report",
      "Add activity 2 from your weekly report",
    ],
    challenges: ["Add a real challenge from this week"],
    reflections: ["Add a lesson you genuinely learned this week"],
    coverImage: "/images/internship/photo-10.jpg",
    galleryImages: [
      "/images/internship/photo-10.jpg",
      "/images/internship/photo-25.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-10.jpg": "Replace with a caption for this week’s cover photo.",
      "/images/internship/photo-25.jpg": "Replace with a caption for a related photo.",
    },
    published: false,
  },
  {
    id: "week-4",
    slug: "week-4-beyond-the-desk",
    weekNumber: 4,
    title: "Beyond the Desk",
    startDate: null,
    endDate: null,
    summary:
      "Template ready — use this entry for event work, content creation, or another documented week.",
    story: `Replace this paragraph with your Week 4 narrative.

If this week included content creation, event support, or the Global Education Fair, describe what you prepared, how the day felt, and what you learned under pressure. Leave dates blank until confirmed.`,
    activities: [
      "Add activity 1 from your weekly report",
      "Add activity 2 from your weekly report",
    ],
    challenges: ["Add a real challenge from this week"],
    reflections: ["Add a lesson you genuinely learned this week"],
    coverImage: "/images/internship/photo-44.jpg",
    galleryImages: [
      "/images/internship/photo-44.jpg",
      "/images/internship/photo-21.jpg",
      "/images/internship/photo-54.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-44.jpg": "Replace with a caption for this week’s cover photo.",
      "/images/internship/photo-21.jpg": "Replace with a caption for a related photo.",
      "/images/internship/photo-54.jpg": "Replace with a caption for a related photo.",
    },
    published: false,
  },
];

export function getPublishedEntries(): JournalEntry[] {
  return journalEntries
    .filter((entry) => entry.published)
    .sort((a, b) => a.weekNumber - b.weekNumber);
}

export function getAllEntries(): JournalEntry[] {
  return [...journalEntries].sort((a, b) => a.weekNumber - b.weekNumber);
}

export function getEntryBySlug(slug: string): JournalEntry | undefined {
  return journalEntries.find((entry) => entry.slug === slug);
}

export function getAdjacentEntries(slug: string): {
  previous: JournalEntry | null;
  next: JournalEntry | null;
} {
  const published = getPublishedEntries();
  const index = published.findIndex((entry) => entry.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return {
    previous: index > 0 ? published[index - 1] : null,
    next: index < published.length - 1 ? published[index + 1] : null,
  };
}

export function formatDateRange(
  startDate: string | null,
  endDate: string | null,
): string {
  if (!startDate || !endDate) {
    return "Dates to be added";
  }
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  const sameMonth =
    start.getMonth() === end.getMonth() &&
    start.getFullYear() === end.getFullYear();

  const monthDay = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  });
  const dayOnly = new Intl.DateTimeFormat("en-US", { day: "numeric" });
  const withYear = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (sameMonth) {
    return `${monthDay.format(start)}–${dayOnly.format(end)}, ${start.getFullYear()}`;
  }
  return `${withYear.format(start)} – ${withYear.format(end)}`;
}
