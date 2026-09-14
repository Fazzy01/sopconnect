import Container from "./Container";
import Reveal from "./Reveal";
import Button from "./Button";

export default function CTASection({
  title = "Ready to take the next step?",
  supporting = "Tell us what you're looking for and we'll point you to the right programme, service or event.",
  primaryLabel = "Make an Enquiry",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="bg-primary">
      <Container className="py-20 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-medium text-paper sm:text-4xl">{title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-paper/75">{supporting}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to={primaryTo} variant="primary" withArrow>
              {primaryLabel}
            </Button>
            {secondaryLabel && (
              <Button to={secondaryTo} variant="inverse">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
