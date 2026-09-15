import { Check, Clapperboard } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import DisclaimerBanner from "../components/DisclaimerBanner";
import CTASection from "../components/CTASection";
import Button from "../components/Button";
import { services, productions } from "../data/content";
import { heroImages, serviceImages, productionImages } from "../data/images";

const statusStyles = {
  Released: "bg-leaf/10 text-leaf-dark",
  "In production": "bg-accent/10 text-accent-dark",
  "Pre-production": "bg-secondary/10 text-secondary-dark",
  "In development": "bg-line text-ink-soft",
  Upcoming: "bg-primary/10 text-primary",
};

export default function Services() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Five disciplines, one consistent standard"
        supporting="Career support, training, educational guidance, business events and cultural programmes — each explained plainly, with no guaranteed-outcome language."
        image={heroImages.services}
      />

      {/* Quick nav */}
      <section className="border-b border-line bg-surface">
        <Container className="flex flex-wrap gap-x-8 gap-y-3 py-6">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              {s.letter}. {s.title}
            </a>
          ))}
        </Container>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-20 border-b border-line ${isEven ? "bg-surface" : "bg-paper"}`}
          >
            <Container className="py-16 sm:py-20">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                <Reveal>
                  <div className="relative mb-6 h-44 overflow-hidden rounded-sm sm:h-52">
                    <img
                      src={serviceImages[service.id]}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/10 to-transparent" />
                    <span className="absolute bottom-3 left-4 font-display text-4xl text-secondary-light">
                      {service.letter}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon size={22} className="text-primary" />
                    <h2 className="font-display text-2xl font-medium text-primary sm:text-[1.75rem]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <Button to="/contact" variant="outline" withArrow className="mt-7">
                    Enquire about this service
                  </Button>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="mb-4 text-sm font-medium text-primary">What this includes</p>
                  <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <Check size={16} className="mt-0.5 shrink-0 text-leaf-dark" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.disclaimer && (
                    <DisclaimerBanner text={service.disclaimer} className="mt-7" />
                  )}
                </Reveal>
              </div>

              {service.id === "sopentertainment" && (
                <Reveal delay={0.15} className="mt-14 border-t border-line pt-12">
                  <p className="mb-6 text-sm font-medium text-primary">Our productions</p>
                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                    {productions.map((production) => {
                      const poster = productionImages[production.title];
                      const badgeClasses =
                        statusStyles[production.status] ?? "bg-line text-ink-soft";
                      return (
                        <div key={production.title} className="group overflow-hidden border border-line bg-surface">
                          <div className="relative aspect-[2/3] overflow-hidden bg-primary/5">
                            {poster ? (
                              <img
                                src={poster}
                                alt={production.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center">
                                <Clapperboard size={28} className="text-primary/25" />
                              </div>
                            )}
                          </div>
                          <div className="p-3">
                            <span className={`inline-block w-fit rounded-full px-2.5 py-0.5 text-[11px] font-medium ${badgeClasses}`}>
                              {production.status}
                            </span>
                            <p className="mt-2 text-sm font-medium leading-snug text-primary">
                              {production.title}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Reveal>
              )}
            </Container>
          </section>
        );
      })}

      <CTASection
        title="Not sure which service is right for you?"
        supporting="Tell us a little about your situation and we'll point you towards the right service or programme."
      />
    </>
  );
}
