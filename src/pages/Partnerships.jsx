import { Building2, GraduationCap, Mic, Landmark, Handshake, Palette } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import EnquiryForm from "../components/EnquiryForm";
import { heroImages } from "../data/images";

const partnerTypes = [
  { icon: Building2, label: "Businesses" },
  { icon: GraduationCap, label: "Educational institutions" },
  { icon: Mic, label: "Trainers & facilitators" },
  { icon: Handshake, label: "Community organisations" },
  { icon: Landmark, label: "Event venues" },
  { icon: Palette, label: "Cultural organisations" },
];

export default function Partnerships() {
  return (
    <>
      <PageHero
        kicker="Partnerships"
        title="Working together on career, learning and cultural work"
        supporting="We welcome opportunities to collaborate with organisations and professionals who share our commitment to education, career development, culture and community impact."
        image={heroImages.partnerships}
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeading title="Who we partner with" />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {partnerTypes.map((p, i) => (
              <Reveal
                key={p.label}
                delay={i * 0.05}
                className="flex flex-col items-start gap-4 border border-line bg-surface p-6"
              >
                <p.icon size={22} className="text-secondary-dark" />
                <span className="font-display text-base font-medium text-primary">{p.label}</span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-prose text-sm leading-relaxed text-ink-soft">
              We're also glad to hear from speakers and corporate sponsors
              interested in our conference and events programme. No
              organisation is displayed as a SOPConnect partner without its
              permission.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-surface">
        <Container className="py-20 sm:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                title="Start a partnership conversation"
                supporting="Tell us about your organisation and what kind of collaboration you have in mind — training delivery, event sponsorship, venue partnership or something else."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <EnquiryForm defaultCategory="Partnership" />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
