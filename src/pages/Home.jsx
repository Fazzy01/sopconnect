import { CalendarDays, MapPin, ArrowRight, ShieldCheck, Users2, Sparkles } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { services, trainingProgrammes, upcomingEvents } from "../data/content";
import { heroImages, serviceImages } from "../data/images";

const whyPoints = [
  {
    icon: ShieldCheck,
    title: "Independent & transparent",
    description: "We describe our services plainly and never guarantee outcomes we can't deliver.",
  },
  {
    icon: Users2,
    title: "Built for real people",
    description: "Programmes and events designed around practical, everyday career and learning needs.",
  },
  {
    icon: Sparkles,
    title: "Genuinely multidisciplinary",
    description: "Career support, training, education guidance, conferences and culture, under one roof.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-primary">
        <img
          src={heroImages.home}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/96 to-primary/85" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary/25 blur-[100px]" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-leaf/20 blur-[100px]" />
        <Container className="relative grid grid-cols-1 items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <Reveal>
            <h1 className="font-display text-4xl font-medium leading-[1.08] text-paper sm:text-5xl lg:text-[3.4rem]">
              Developing Skills. Creating Opportunities. Producing Stories.
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-paper/75">
              SOPConnect Consultancy Limited provides career-development
              support, professional training, educational guidance,
              conferences, cultural events and movie-production services.
              Through SOPEntertainment, we create and support original film,
              entertainment and artist-development projects.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/services" variant="primary" withArrow>
                Explore Our Services
              </Button>
              <Button to="/training" variant="inverse">
                View Training Programmes
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`/services#${s.id}`}
                  className="group relative flex flex-col justify-between overflow-hidden border border-paper/15 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-xl hover:shadow-primary-dark/40"
                >
                  <img
                    src={serviceImages[s.id]}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full scale-100 object-cover opacity-40 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-primary-dark/40 transition-colors duration-300 group-hover:from-primary-dark/95" />
                  <span className="relative font-display text-2xl text-secondary-light">{s.letter}</span>
                  <span className="relative mt-6 text-sm font-medium leading-snug text-paper">
                    {s.title}
                  </span>
                </a>
              ))}
              <a
                href="/events"
                className="flex flex-col justify-between border border-secondary/40 bg-secondary/10 p-5 transition-colors duration-300 hover:bg-secondary/20"
              >
                <ArrowRight size={20} className="text-secondary-light" />
                <span className="mt-6 text-sm font-medium leading-snug text-paper/90">
                  See what's coming up
                </span>
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Why choose SOPConnect */}
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            title="Why choose SOPConnect"
            supporting="A single, accountable partner for career development, learning and the events that bring people together."
          />
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
            {whyPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <point.icon size={22} className="text-secondary-dark" />
                <h3 className="mt-4 font-display text-lg font-medium text-primary">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services overview */}
      <section className="border-t border-line bg-surface">
        <Container className="py-20 sm:py-24">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              title="Five ways we work with you"
              supporting="Each division stands on its own, and each is delivered to the same professional standard."
            />
            <Button to="/services" variant="ghost" withArrow className="shrink-0 px-0">
              View all services
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 0.06} />
            ))}
          </div>
        </Container>
      </section>

      {/* Training highlight */}
      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              title="Featured training programmes"
              supporting="Practical, structured learning — delivered individually, in groups, or bespoke for your organisation."
            />
            <Button to="/training" variant="ghost" withArrow className="shrink-0 px-0">
              View all programmes
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {trainingProgrammes.slice(0, 4).map((programme, i) => (
              <Reveal
                key={programme.title}
                delay={i * 0.06}
                className="border border-line p-6 transition-colors duration-300 hover:border-primary/30"
              >
                <h3 className="font-display text-lg font-medium text-primary">
                  {programme.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {programme.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft/80">
                  <span>{programme.mode}</span>
                  <span>·</span>
                  <span>{programme.duration}</span>
                  <span>·</span>
                  <span>{programme.level}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Events highlight */}
      <section className="border-t border-line bg-surface">
        <Container className="py-20 sm:py-24">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              title="Upcoming events"
              supporting="Conferences, workshops and cultural programmes — open for registration or proposed for the year ahead."
            />
            <Button to="/events" variant="ghost" withArrow className="shrink-0 px-0">
              View all events
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {upcomingEvents.map((event, i) => (
              <Reveal
                key={event.title}
                delay={i * 0.06}
                className="flex h-full flex-col border border-line bg-paper p-6"
              >
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                    event.status === "Upcoming"
                      ? "bg-accent/10 text-accent-dark"
                      : "bg-secondary/10 text-secondary-dark"
                  }`}
                >
                  {event.status}
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-primary">
                  {event.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {event.description}
                </p>
                <div className="mt-5 space-y-1.5 text-xs text-ink-soft/80">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={14} /> {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} /> {event.location}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
