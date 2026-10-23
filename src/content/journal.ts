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
  /** When false, the entry is hidden from the public journal */
  published: boolean;
};

/**
 * Internship span from OLIVEROS_NARRATIVE.pdf Daily Time Record:
 * June 15, 2026 – August 12, 2026 (AECC Davao).
 *
 * Week 1 day-by-day details come from the written weekly report.
 * Weeks 2–7 use confirmed DTR dates plus ongoing internship responsibilities
 * described in the narrative (CRM, calls, front desk, content, teamwork),
 * without inventing undocumented one-off events for those weeks.
 * Weeks 8–9 include certificate-backed GEF and completion details.
 */
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

On Day 1 (June 15), I joined an orientation webinar with fellow interns from the Cebu branch. We learned about the company’s background, our responsibilities, and the tools used on the administrative side. I also met the marketing team and was asked to create and facilitate an icebreaker for the town hall session. It was a small assignment, but it already asked me to show up, speak up, and contribute.

On June 16, I helped facilitate the AECC town hall webinar as part of the technical team, making sure the session ran smoothly. I interacted with staff from different branches and started brainstorming ideas for marketing video content. Later, I was assigned to the front desk. Handling clients while feeling nervous was uncomfortable — and also exactly the kind of growth I needed.

On June 17 and 18, I joined shadow call sessions to prepare for assisting students with booking consultations and appointments. Listening carefully, I learned how to communicate more effectively and handle different client situations. Between calls, I kept refining marketing content ideas and planning for video production.

By June 19, another shadow call session and another front-desk shift helped the nerves settle a little. The day was lighter, and I found myself preparing for the weeks ahead with more curiosity than fear. Week 1 logged 37.5 hours — and taught me that confidence often begins with simply showing up.`,
    activities: [
      "Attended orientation with AECC interns from the Cebu branch (June 15)",
      "Learned company background, responsibilities, and administrative tools",
      "Created and facilitated an icebreaker for the town hall session",
      "Assisted as part of the technical team for the AECC town hall webinar (June 16)",
      "Brainstormed marketing video content ideas",
      "Shadowed consultation and appointment booking calls (June 17–19)",
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
    startDate: "2026-06-22",
    endDate: "2026-06-26",
    summary:
      "Settling into the workweek routine at AECC Davao — continuing office responsibilities while learning to pace myself, including a sick-leave day on June 24.",
    story: `Week 2 was about settling in. After the intensity of orientation and first-week firsts, June 22–26 asked me to keep showing up for the ordinary workdays that build real confidence.

I continued the internship responsibilities I was growing into — supporting office operations, practicing professional communication, and getting more comfortable with the flow of a regular schedule. Not every day needed to be dramatic to matter. Some days were simply about listening better, finishing tasks carefully, and becoming a little less nervous than the week before.

According to my Daily Time Record, June 24 was a sick-leave day. Resting when I needed to was part of the journey, too. By the end of the week, AECC Davao already felt a little more familiar — and that familiarity made room for growth.`,
    activities: [
      "Continued regular internship duty days (June 22–23, 25–26)",
      "Supported ongoing office and student-placement related tasks",
      "Practiced professional communication in day-to-day work",
      "Built familiarity with workplace routines after Week 1",
    ],
    challenges: [
      "June 24, 2026 — sick leave (per Daily Time Record)",
      "Staying consistent while still adjusting to professional expectations",
    ],
    reflections: [
      "Consistency is its own kind of courage.",
      "Rest days are part of finishing the journey well.",
      "Familiarity makes learning feel less scary.",
    ],
    coverImage: "/images/internship/photo-45.jpg",
    galleryImages: [
      "/images/internship/photo-45.jpg",
      "/images/internship/photo-53.jpg",
      "/images/internship/photo-30.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-45.jpg": "Focused work days at my desk.",
      "/images/internship/photo-53.jpg": "Teamwork in ordinary office tasks.",
      "/images/internship/photo-30.jpg": "Calls, keyboards, and careful listening.",
    },
    published: true,
  },
  {
    id: "week-3",
    slug: "week-3-growing-with-the-team",
    weekNumber: 3,
    title: "Growing with the Team",
    startDate: "2026-06-29",
    endDate: "2026-07-03",
    summary:
      "Crossing from June into July with the AECC Davao team — learning through collaboration, guidance, and shared workdays.",
    story: `Week 3 carried me from the end of June into the first days of July. By then, faces had names, routines had rhythm, and the office felt less like a new building and more like a place I belonged to for a season.

Working alongside the AECC team — and with my co-interns — reminded me that growth rarely happens alone. Mentorship, patience, and small shared tasks taught me as much as any checklist. I kept developing the soft skills my narrative later named clearly: communication, teamwork, time management, and adaptability.

This week was quieter than a highlight reel, but important. It was the kind of week where confidence grows in the background — through showing up, asking questions, and becoming someone the team could count on.`,
    activities: [
      "Reported for duty across June 29–July 3 (per Daily Time Record)",
      "Collaborated with teammates and co-interns on daily responsibilities",
      "Continued administrative and communication-related internship tasks",
      "Practiced adaptability in a professional workplace setting",
    ],
    challenges: [
      "Keeping momentum across a full workweek",
      "Balancing independence with asking for guidance when needed",
    ],
    reflections: [
      "Teamwork makes ordinary days meaningful.",
      "Good mentors make hard skills feel learnable.",
      "Belonging grows one shared workday at a time.",
    ],
    coverImage: "/images/internship/photo-10.jpg",
    galleryImages: [
      "/images/internship/photo-10.jpg",
      "/images/internship/photo-47.jpg",
      "/images/internship/photo-14.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-10.jpg": "The people who made workdays lighter.",
      "/images/internship/photo-47.jpg": "Arriving together. Leaving with stories.",
      "/images/internship/photo-14.jpg": "Team memories from the journey.",
    },
    published: true,
  },
  {
    id: "week-4",
    slug: "week-4-steady-through-the-week",
    weekNumber: 4,
    title: "Steady Through the Week",
    startDate: "2026-07-06",
    endDate: "2026-07-10",
    summary:
      "A shorter stretch of duty days (July 6–8), with July 9–10 recorded as sick leave — learning that steadiness includes knowing when to pause.",
    story: `Week 4 was a reminder that internship life is human. My Daily Time Record shows duty days at the start of the week, then sick leave on July 9 and 10.

The days I was present, I continued the responsibilities that defined so much of my OJT: careful work with information and systems, communication practice, and support for student-related and office tasks. Accuracy mattered — especially when updating records and handling real data through tools like Zoho CRM.

Missing two days was not the story I wanted, but it became part of my honesty about the journey. Coming back after rest meant choosing steadiness again — not perfection, just presence.`,
    activities: [
      "Reported for duty on July 6–8 (per Daily Time Record)",
      "Continued CRM, administrative, and communication support tasks",
      "Practiced careful handling of student-related information",
      "Returned focus to workplace responsibilities after sick leave",
    ],
    challenges: [
      "July 9–10, 2026 — sick leave (per Daily Time Record)",
      "Regaining rhythm after unexpected days away",
    ],
    reflections: [
      "Steadiness includes rest.",
      "Accuracy is a form of respect for real people behind the data.",
      "Showing up again is part of professionalism.",
    ],
    coverImage: "/images/internship/photo-30.jpg",
    galleryImages: [
      "/images/internship/photo-30.jpg",
      "/images/internship/photo-04.jpg",
      "/images/internship/photo-11.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-30.jpg": "Learning the rhythm of calls and careful work.",
      "/images/internship/photo-04.jpg": "Hands-on help with everyday office tasks.",
      "/images/internship/photo-11.jpg": "The AECC Davao office in motion.",
    },
    published: true,
  },
  {
    id: "week-5",
    slug: "week-5-longer-days",
    weekNumber: 5,
    title: "Longer Days",
    startDate: "2026-07-13",
    endDate: "2026-07-17",
    summary:
      "A fuller week with extended hours on July 13, 15, and 16 — stretching my stamina, focus, and time management.",
    story: `Week 5 asked more of my schedule. The Daily Time Record shows extended afternoon hours on July 13, 15, and 16 — days that ran past the usual 4:30 PM out-time.

Those longer days taught me something classroom deadlines never quite could: professional work sometimes expands, and you learn to manage energy as carefully as tasks. I kept supporting the operations side of internship life — follow-through, communication, and the kind of administrative care my reflection later named as essential.

By Friday, I felt the difference between being busy and being purposeful. The extra hours were tiring, but they also made me more adaptable — a skill I would need even more as event season approached.`,
    activities: [
      "Completed a full duty week from July 13–17",
      "Worked extended hours on July 13, 15, and 16 (per Daily Time Record)",
      "Continued administrative, CRM, and communication support",
      "Practiced time management during longer workdays",
    ],
    challenges: [
      "Staying focused through extended afternoon hours",
      "Managing energy across a demanding week",
    ],
    reflections: [
      "Time management is a professional skill, not just a student skill.",
      "Longer days teach you what to prioritize.",
      "Adaptability grows when the schedule stretches.",
    ],
    coverImage: "/images/internship/photo-11.jpg",
    galleryImages: [
      "/images/internship/photo-11.jpg",
      "/images/internship/photo-45.jpg",
      "/images/internship/photo-03.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-11.jpg": "Busy hours inside the office.",
      "/images/internship/photo-45.jpg": "Deep focus at the desk.",
      "/images/internship/photo-03.jpg": "Hands-on moments with the team.",
    },
    published: true,
  },
  {
    id: "week-6",
    slug: "week-6-building-consistency",
    weekNumber: 6,
    title: "Building Consistency",
    startDate: "2026-07-20",
    endDate: "2026-07-24",
    summary:
      "Another full week of showing up — strengthening habits in communication, accuracy, and everyday teamwork at AECC Davao.",
    story: `By Week 6, the internship no longer felt brand new. July 20–24 became a week of consistency: the quiet strength of doing the work well, again.

I continued the mix of responsibilities that shaped my OJT — updating and managing information carefully, supporting student-related follow-through, assisting with client-facing moments when assigned, and contributing where creative or operational help was needed. These were the days that turned nervous effort into practiced confidence.

Looking back, weeks like this one are easy to skip in a highlight reel. But they are where growth settles in. Consistency made me more ready for the louder weeks still ahead.`,
    activities: [
      "Reported for duty across July 20–24 (per Daily Time Record)",
      "Maintained CRM and administrative accuracy in daily tasks",
      "Supported communication and student-related follow-ups",
      "Continued collaborating with the AECC Davao team",
    ],
    challenges: [
      "Avoiding complacency during familiar routines",
      "Keeping quality high even on ordinary days",
    ],
    reflections: [
      "Ordinary weeks build extraordinary confidence.",
      "Consistency is how skills become second nature.",
      "The middle of the journey matters as much as the milestones.",
    ],
    coverImage: "/images/internship/photo-03.jpg",
    galleryImages: [
      "/images/internship/photo-03.jpg",
      "/images/internship/photo-53.jpg",
      "/images/internship/photo-45.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-03.jpg": "Collaborative work in the office.",
      "/images/internship/photo-53.jpg": "Getting things done together.",
      "/images/internship/photo-45.jpg": "Quiet focus between bigger milestones.",
    },
    published: true,
  },
  {
    id: "week-7",
    slug: "week-7-preparing-for-more",
    weekNumber: 7,
    title: "Preparing for More",
    startDate: "2026-07-27",
    endDate: "2026-07-31",
    summary:
      "The final July week — finishing strong on duty days, then rendering Saturday overtime on August 1 for Global Education Fair preparation.",
    story: `Week 7 closed the month of July with purpose. July 27–31 were regular duty days on my Daily Time Record, but the weekend that followed made the week feel bigger than five workdays.

On Saturday, August 1, 2026, I rendered overtime from 8:30 AM to 5:30 PM — with no break recorded — to make up for previous absences and complete assigned tasks in preparation for the Global Education Fair. That certificate of overtime later became proof of something I felt that day: I was willing to go beyond the comfort of a standard schedule when the team needed it.

This week was the bridge between everyday internship work and event season. Preparation does not always look glamorous — but it is where reliability shows.`,
    activities: [
      "Completed duty days from July 27–31 (per Daily Time Record)",
      "Supported ongoing internship and pre-event responsibilities",
      "Rendered overtime on August 1, 2026 (8:30 AM–5:30 PM) for GEF preparation",
      "Helped complete assigned tasks ahead of the Global Education Fair",
    ],
    challenges: [
      "Balancing regular weekdays with weekend overtime preparation",
      "Making up for earlier absences while staying useful to the team",
    ],
    reflections: [
      "Preparation is part of professionalism.",
      "Showing up on a Saturday says as much as any resume line.",
      "The fair’s success starts long before event day.",
    ],
    coverImage: "/images/internship/photo-54.jpg",
    galleryImages: [
      "/images/internship/photo-54.jpg",
      "/images/internship/photo-44.jpg",
      "/images/internship/photo-21.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-54.jpg": "Getting ready for event days ahead.",
      "/images/internship/photo-44.jpg": "Team energy leading into the fair.",
      "/images/internship/photo-21.jpg": "Promotion and preparation in motion.",
    },
    published: true,
  },
  {
    id: "week-8",
    slug: "week-8-global-education-fair",
    weekNumber: 8,
    title: "Global Education Fair",
    startDate: "2026-08-03",
    endDate: "2026-08-08",
    summary:
      "A landmark week — finishing GEF preparations and serving at the AECC Global Education Fair on August 8 at Seda Abreeza Hotel, Davao City.",
    story: `By early August, the pace of internship life felt different. The Daily Time Record shows longer days leading into the event, after Saturday, August 1 had already been spent on overtime for Global Education Fair preparation.

Then came August 8, 2026: the AECC Global Education Fair at Seda Abreeza Hotel in Davao City. My Certificate of Completion for the event records eight hours of participation. It was one of the most memorable parts of my OJT — busy, fast-paced, and full of teamwork.

I got to take part not only behind the scenes but also in moments in front of the camera, which was exciting and challenging at the same time. The fair taught me how real event work asks you to multitask, stay focused under pressure, and keep showing up for the team.

This week sits at the heart of my tagline — more than an intern, and definitely beyond my comfort zone.`,
    activities: [
      "Continued internship duties during August 3–7 (per Daily Time Record)",
      "Supported final preparation leading into the Global Education Fair",
      "Participated in the AECC Global Education Fair on August 8, 2026 (8 hours)",
      "Supported event work at Seda Abreeza Hotel, Davao City",
      "Contributed to content and on-site teamwork during the fair",
    ],
    challenges: [
      "Keeping focus during a fast-paced event day",
      "Balancing preparation tasks with regular internship responsibilities",
      "Stepping in front of the camera while still learning",
    ],
    reflections: [
      "Event days reveal how teamwork turns pressure into progress.",
      "Creativity belongs in professional spaces, too.",
      "Showing up prepared makes the busy hours feel purposeful.",
    ],
    coverImage: "/images/internship/photo-44.jpg",
    galleryImages: [
      "/images/internship/photo-44.jpg",
      "/images/internship/photo-21.jpg",
      "/images/internship/photo-54.jpg",
      "/images/internship/photo-25.jpg",
      "/images/internship/photo-35.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-44.jpg": "With the team for Global Education Fair days.",
      "/images/internship/photo-21.jpg": "Out promoting the Global Education Fair.",
      "/images/internship/photo-54.jpg": "Ready for the fair setup.",
      "/images/internship/photo-25.jpg": "Event tables, shared work, and good company.",
      "/images/internship/photo-35.jpg": "Outside the venue — ready for the day.",
    },
    published: true,
  },
  {
    id: "week-9",
    slug: "week-9-closing-the-chapter",
    weekNumber: 9,
    title: "Closing the Chapter",
    startDate: "2026-08-10",
    endDate: "2026-08-12",
    summary:
      "The final internship days (August 10–12) — wrapping up responsibilities and completing my On-the-Job Training at AECC Davao.",
    story: `The last stretch of my internship was short, but meaningful. According to my Daily Time Record, August 10 to 12, 2026 were my final duty days at AECC Davao, with the record signed on August 12.

Looking back from these closing days, the journey felt full: from a nervous first week in June, through CRM work, front-desk conversations, content creation, and the Global Education Fair, to standing with a Certificate of Completion.

I met people who guided me — including Ma’am Riva, Sir Maynard, and Sir Robinson — and shared the experience with co-interns Joseph and Angelica. More than a requirement for CS331, this chapter helped me grow as a student and as someone preparing for the real world.

Ending the internship did not feel like finishing a checklist. It felt like closing a chapter I will keep returning to — especially whenever I need the reminder that growth often begins just outside the comfort zone.`,
    activities: [
      "Completed final internship duty days on August 10–12, 2026",
      "Wrapped up On-the-Job Training requirements for CS331",
      "Received Certificate of Completion from AECC Study Abroad Consultants",
    ],
    challenges: [
      "Saying goodbye to a routine and team that had become familiar",
      "Carrying forward the confidence built over two months of real work",
    ],
    reflections: [
      "Every week — even the quiet ones — added up to real growth.",
      "Professional confidence is built through practice, not a single perfect day.",
      "I leave AECC Davao more ready for what comes next.",
    ],
    coverImage: "/images/internship/photo-48.jpg",
    galleryImages: [
      "/images/internship/photo-48.jpg",
      "/images/internship/photo-20.jpg",
      "/images/internship/photo-14.jpg",
      "/images/internship/photo-10.jpg",
    ],
    photoCaptions: {
      "/images/internship/photo-48.jpg": "Certificate day with the AECC team.",
      "/images/internship/photo-20.jpg": "Holding my Certificate of Completion.",
      "/images/internship/photo-14.jpg": "Team memories from the journey.",
      "/images/internship/photo-10.jpg": "The people who made workdays lighter.",
    },
    published: true,
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
