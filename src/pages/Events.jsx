import { CalendarDays, MapPin } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { upcomingEvents } from "../data/content";
import { heroImages, eventImages } from "../data/images";

export default function Events() {
  return (
    <>
      <PageHero
        kicker="Events"
        title="Conferences, workshops and cultural programmes"
        supporting="We design and run professional, educational and community-focused events. Planned events are clearly marked as Upcoming or Proposed."
        image={heroImages.events}
      />

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            title="Upcoming & proposed events"
            supporting="Dates and venues are confirmed as arrangements are finalised."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {upcomingEvents.map((event, i) => (
              <Reveal
                key={event.title}
                delay={i * 0.07}
                className="group flex flex-col overflow-hidden border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/50 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={eventImages[i]}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                    event.status === "Upcoming"
                      ? "bg-accent/10 text-accent-dark"
                      : "bg-secondary/10 text-secondary-dark"
                  }`}
                >
                  {event.status}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium text-primary">
                  {event.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {event.description}
                </p>
                <div className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-ink-soft">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={15} className="text-secondary-dark" /> {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-secondary-dark" /> {event.location}
                  </div>
                </div>
                <Button to="/contact" variant="outline" withArrow className="mt-6 justify-center">
                  Register interest
                </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface">
        <Container className="py-20 sm:py-24">
          <SectionHeading title="Past events" />
          <div className="relative mt-8 overflow-hidden rounded-sm border border-dashed border-line">
            <img
              src={eventImages[0]}
              alt=""
              aria-hidden="true"
              className="h-56 w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/70 to-paper/10" />
            <p className="relative max-w-prose p-8 text-sm leading-relaxed text-ink-soft">
              Photographs and summaries from completed events will appear here
              once available. If you attended a recent SOPConnect event and
              would like to share feedback or images, please get in touch.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                title="Partner or sponsor an event"
                supporting="We work with businesses, educational institutions, venues and community organisations on upcoming programmes."
              />
            </Reveal>
            <Reveal delay={0.1} className="flex lg:justify-end">
              <Button to="/partnerships" variant="outline" withArrow>
                Explore partnerships
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to register for an event?"
        supporting="Let us know which event you're interested in and we'll confirm the details as they're finalised."
        primaryLabel="Register Interest"
      />
    </>
  );
}
