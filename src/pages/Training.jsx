import { Clock, Users, BarChart3 } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import DisclaimerBanner from "../components/DisclaimerBanner";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { trainingProgrammes } from "../data/content";
import { heroImages } from "../data/images";

const faqs = [
  {
    q: "Are your programmes accredited?",
    a: "Where a programme carries genuine, verifiable accreditation, this is stated clearly on its listing. Programmes without formal accreditation are described as training, workshops, masterclasses or professional-development courses.",
  },
  {
    q: "Can training be delivered to my organisation?",
    a: "Yes — we design bespoke group and individual sessions for organisations. Get in touch with your team size, topics of interest and preferred delivery format.",
  },
  {
    q: "How do I register?",
    a: "Select 'Register interest' on a programme, or use the general enquiry form and choose 'Training Programme' as the category.",
  },
];

export default function Training() {
  return (
    <>
      <PageHero
        kicker="Training & programmes"
        title="Practical training for real workplace skills"
        supporting="From exam preparation to workplace communication, our programmes are built to be used immediately — individually, in groups, or bespoke for organisations."
        image={heroImages.training}
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            title="Current programmes"
            supporting="Delivery format, duration and entry requirements are listed on each programme."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {trainingProgrammes.map((programme, i) => (
              <Reveal
                key={programme.title}
                delay={i * 0.06}
                className="flex flex-col border border-line bg-surface p-7"
              >
                <h3 className="font-display text-xl font-medium text-primary">
                  {programme.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {programme.description}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5 text-xs text-ink-soft">
                  <div className="flex flex-col gap-1.5">
                    <Users size={15} className="text-secondary-dark" />
                    {programme.mode}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Clock size={15} className="text-secondary-dark" />
                    {programme.duration}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <BarChart3 size={15} className="text-secondary-dark" />
                    {programme.level}
                  </div>
                </div>
                <Button to="/contact" variant="outline" withArrow className="mt-6 justify-center">
                  Register interest
                </Button>
              </Reveal>
            ))}
          </div>
          <DisclaimerBanner
            className="mt-10"
            text="Any course described as accredited carries genuine, verifiable accreditation. Programmes without accreditation are described as training, workshops, masterclasses or professional-development courses."
          />
        </Container>
      </section>

      <section className="border-t border-line bg-surface">
        <Container className="py-20 sm:py-24">
          <SectionHeading title="Frequently asked questions" />
          <div className="mt-10 max-w-prose divide-y divide-line">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05} className="py-6">
                <h3 className="font-display text-lg font-medium text-primary">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Looking for something not listed here?"
        supporting="New programmes are added regularly. Let us know what you need and we'll advise on the best fit."
      />
    </>
  );
}
