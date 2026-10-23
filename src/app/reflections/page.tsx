import type { Metadata } from "next";
import Image from "next/image";
import ReflectionSection from "@/components/ReflectionSection";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Reflections",
  description:
    "Growing Through Every Experience — personal reflections from Rojen Oliveros’s internship at AECC Davao.",
};

export default function ReflectionsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Reflections"
          title="Growing Through Every Experience"
          description="A thoughtful look back at the lessons that stayed with me — written warmly, honestly, and without the stiffness of a formal report."
          className="mb-10 max-w-3xl"
        />
      </ScrollReveal>

      <ScrollReveal>
        <div className="relative mb-6 aspect-[21/9] overflow-hidden rounded-[1.8rem]">
          <Image
            src="/images/internship/photo-14.jpg"
            alt="Team group photograph from Rojen’s internship journey"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
        </div>
      </ScrollReveal>

      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="font-serif text-xl leading-relaxed text-charcoal-soft italic sm:text-2xl">
            My On-the-Job Training at AECC Study Abroad Consultants became one
            of the most meaningful parts of my college journey — not because
            everything felt easy, but because I grew through the parts that
            didn’t.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <ReflectionSection
            eyebrow="01"
            title="Stepping outside my comfort zone"
          >
            <p>
              At first, I felt nervous and unsure of myself — especially when I
              began handling tasks like calling students and assisting clients.
              It was new, and it asked me to step outside what felt safe. Those
              early moments were uncomfortable, but they were also the
              beginning of courage.
            </p>
          </ReflectionSection>
        </ScrollReveal>

        <ScrollReveal>
          <ReflectionSection
            eyebrow="02"
            title="Developing confidence in professional communication"
          >
            <p>
              As the days went by, I slowly gained confidence and became more
              comfortable with my responsibilities. Shadow calls, front-desk
              shifts, and everyday conversations taught me how to listen
              carefully, speak more clearly, and carry myself with quiet
              professionalism — even when I was still learning.
            </p>
          </ReflectionSection>
        </ScrollReveal>

        <ScrollReveal>
          <ReflectionSection
            eyebrow="03"
            title="Learning teamwork and adaptability"
          >
            <p>
              Working with the AECC team — and alongside co-interns — showed me
              how much smoother work becomes when people support each other. I
              learned to adapt to a fast-paced environment, adjust when plans
              shifted, and contribute in ways that helped the whole room move
              forward.
            </p>
          </ReflectionSection>
        </ScrollReveal>

        <ScrollReveal>
          <ReflectionSection
            eyebrow="04"
            title="Understanding the importance of accuracy in data management"
          >
            <p>
              Administrative tasks like updating Zoho CRM and handling records
              helped me realize how important accuracy and organization are when
              dealing with real information. Behind every field and follow-up
              was a student journey. Carefulness was not optional — it was
              respect.
            </p>
          </ReflectionSection>
        </ScrollReveal>

        <ScrollReveal>
          <ReflectionSection
            eyebrow="05"
            title="Discovering creative and professional strengths"
          >
            <p>
              One of the most memorable parts of my internship was being
              involved in content creation and the Global Education Fair. I had
              the chance to participate not only behind the scenes but also in
              front of the camera. It was exciting and challenging — and it
              reminded me that creativity belongs in professional spaces, too.
            </p>
            <p>
              During the GEF event, I experienced how busy and fast-paced real
              work can be. It taught me how to multitask, stay focused under
              pressure, and keep showing up even when the day felt full.
            </p>
          </ReflectionSection>
        </ScrollReveal>

        <ScrollReveal>
          <ReflectionSection
            eyebrow="06"
            title="Connecting Computer Science with real workplace operations"
          >
            <p>
              As a Computer Science student, this experience helped me
              appreciate how technology and systems are used in real life —
              especially in managing data and communication. I realized my
              course is not only about coding. It is also about problem-solving,
              adaptability, and continuous learning in different environments.
            </p>
          </ReflectionSection>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mt-8 rounded-[1.8rem] border border-dusty/50 bg-blush/40 p-8 sm:p-10">
            <p className="font-serif text-sm italic tracking-[0.16em] text-mauve uppercase">
              Closing reflection
            </p>
            <h2 className="mt-3 font-serif text-3xl text-charcoal">
              Becoming more ready for what comes next
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-charcoal-soft sm:text-lg">
              <p>
                Overall, my internship experience was fun, challenging, and full
                of learning. I met amazing people, gained new skills, and became
                more confident in myself. This journey helped me grow not just as
                a student, but as someone preparing for the real world.
              </p>
              <p>
                If these pages feel personal, that is intentional.{" "}
                {siteConfig.title} is my way of remembering that growth often
                looks like ordinary days done with care — until one day, you look
                back and realize you are no longer the same person who walked in
                nervous on Week 1.
              </p>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
