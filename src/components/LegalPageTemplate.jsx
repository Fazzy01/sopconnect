import Container from "./Container";
import Reveal from "./Reveal";
import PageHero from "./PageHero";

export default function LegalPageTemplate({ title, updated, sections }) {
  return (
    <>
      <PageHero kicker="Legal & policies" title={title} />
      <Container className="py-16 sm:py-20">
        <Reveal className="max-w-prose">
          {updated && (
            <p className="mb-10 text-sm text-ink-soft">Last updated: {updated}</p>
          )}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-medium text-primary">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-soft">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </>
  );
}
