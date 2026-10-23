import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Meet Rojen Oliveros — Computer Science student and IT Intern at AECC Davao.",
};

const experiences = [
  {
    title: "Zoho CRM & information updates",
    text: "Managing and updating information carefully through Zoho CRM, where accuracy truly mattered.",
  },
  {
    title: "Student-related administrative support",
    text: "Supporting student-related administrative tasks and follow-through in day-to-day operations.",
  },
  {
    title: "Front-desk & client interactions",
    text: "Assisting with front-desk responsibilities and learning how to welcome and help walk-in clients.",
  },
  {
    title: "Content creation",
    text: "Contributing ideas and participation in marketing content — including moments both behind and in front of the camera.",
  },
  {
    title: "Event preparation",
    text: "Helping prepare for events such as the Global Education Fair, where teamwork and pace were everything.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <ScrollReveal>
        <SectionHeading
          eyebrow="About Me"
          title="A Little About Me"
          description={`I'm ${siteConfig.owner}, a ${siteConfig.degree} student at ${siteConfig.university}. My internship at ${siteConfig.company} in ${siteConfig.location} introduced me to real-world responsibilities beyond the classroom.`}
          className="mb-14 max-w-3xl"
        />
      </ScrollReveal>

      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
            <Image
              src="/images/internship/photo-20.jpg"
              alt="Portrait of Rojen Oliveros with her AECC Certificate of Completion"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-serif text-sm italic text-mauve">
            {siteConfig.position} · {siteConfig.companyShort}
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={80}>
          <div className="space-y-6 text-base leading-8 text-charcoal-soft sm:text-lg">
            <h2 className="font-serif text-3xl text-charcoal">
              Get to Know Me
            </h2>
            <p>
              Before my internship, most of my learning lived in lectures,
              projects, and creative work I already loved — like editing and
              design. AECC Davao invited me into something different: the daily
              rhythm of a professional workplace where communication, patience,
              and careful systems matter as much as technical skill.
            </p>
            <p>
              As an IT Intern assigned to marketing- and operations-related
              support, I learned how tools, people, and processes come together.
              Some days were quiet and administrative. Others were full —
              webinars, calls, front-desk moments, content brainstorming, and
              event preparation. All of them taught me something about showing
              up.
            </p>
            <p>
              This website is my way of keeping those lessons close — told in my
              own voice, with photographs from the journey, and without
              pretending the experience was anything other than human: nervy at
              first, meaningful later, and full of growth in between.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <section className="mt-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Internship"
            title="What I Experienced"
            description="Grounded highlights from my time at AECC — real responsibilities, not invented software-engineering feats."
            className="mb-10"
          />
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((item, index) => (
            <ScrollReveal key={item.title} delayMs={index * 60}>
              <div className="soft-card h-full rounded-[1.4rem] p-6">
                <h3 className="font-serif text-xl text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft sm:text-base">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
