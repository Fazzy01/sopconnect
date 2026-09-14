import { Target, Eye } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { values } from "../data/content";
import { heroImages } from "../data/images";

export default function About() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="A multidisciplinary team behind career, learning and community work"
        supporting="SOPConnect Consultancy Limited supports personal development, professional growth, learning and meaningful community engagement."
        image={heroImages.about}
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <Reveal className="max-w-prose">
            <SectionHeading title="Who we are" />
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
              SOPConnect Consultancy Limited is a multidisciplinary
              career-development, training, educational-support and events
              company. We help individuals develop practical career and
              workplace skills through independent employability support,
              professional training and educational guidance. Alongside this,
              we organise conferences, seminars, workshops, networking
              programmes, cultural events and creative community experiences.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              We work with individuals, professionals, organisations,
              educational partners and corporate clients — offering each the
              same clear, evidence-based approach to what we do and don't
              provide.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-surface">
        <Container className="py-20 sm:py-24">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <Reveal className="border border-line bg-paper p-8">
              <Target size={24} className="text-secondary-dark" />
              <h3 className="mt-5 font-display text-xl font-medium text-primary">Our mission</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                To equip individuals and organisations with practical
                knowledge, professional skills and meaningful development
                opportunities through training, educational support and
                engaging events.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="border border-line bg-paper p-8">
              <Eye size={24} className="text-secondary-dark" />
              <h3 className="mt-5 font-display text-xl font-medium text-primary">Our vision</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                To become a trusted platform for career development, lifelong
                learning, professional growth and inclusive cultural
                engagement.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            title="What we value"
            supporting="These principles shape how every programme, event and piece of guidance is delivered."
          />
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 3) * 0.06}>
                <h3 className="font-display text-lg font-medium text-primary">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface">
        <Container className="py-20 sm:py-24">
          <Reveal className="max-w-prose">
            <SectionHeading title="Who we work with" />
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
              We support job seekers and career changers, professionals
              building new skills, students and prospective students
              navigating education processes, organisations commissioning
              workplace training, and community and cultural groups looking
              for a reliable events partner. Every relationship starts with
              an honest conversation about what we can and can't help with.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Want to know more about how we work?"
        supporting="Get in touch and we'll talk through what you need and how we can help."
      />
    </>
  );
}
