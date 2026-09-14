import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import EnquiryForm from "../components/EnquiryForm";
import DisclaimerBanner from "../components/DisclaimerBanner";
import { fullDisclaimer } from "../data/content";

const details = [
  { icon: Mail, label: "Email", value: "info@sopconnect.co.uk" },
  { icon: Phone, label: "Phone", value: "+44 (0)00 0000 0000" },
  { icon: MapPin, label: "Address", value: "Registered office address, United Kingdom" },
  { icon: Clock, label: "Hours", value: "Monday–Friday, 9:00–17:00" },
];

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Tell us what you need help with"
        supporting="Whether it's career support, a training enquiry, an event registration or a partnership idea — send us a message and we'll get back to you within two working days."
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <h2 className="font-display text-2xl font-medium text-primary">
                Get in touch directly
              </h2>
              <ul className="mt-7 space-y-6">
                {details.map((d) => (
                  <li key={d.label} className="flex items-start gap-3.5">
                    <d.icon size={19} className="mt-0.5 shrink-0 text-secondary-dark" />
                    <div>
                      <p className="text-sm font-medium text-primary">{d.label}</p>
                      <p className="text-sm text-ink-soft">{d.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <DisclaimerBanner text={fullDisclaimer} className="mt-10" />
            </Reveal>

            <Reveal delay={0.1}>
              <EnquiryForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
