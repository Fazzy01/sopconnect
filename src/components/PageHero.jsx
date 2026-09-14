import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHero({ kicker, title, supporting, image }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-primary">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/85" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/20 blur-[100px]" />
          <div className="absolute -bottom-16 right-1/4 h-56 w-56 rounded-full bg-accent/15 blur-[100px]" />
        </>
      )}
      <Container className="relative py-20 sm:py-24">
        <Reveal>
          {kicker && (
            <p className="mb-4 text-sm font-medium text-secondary-light">{kicker}</p>
          )}
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] text-paper sm:text-5xl">
            {title}
          </h1>
          {supporting && (
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/75">
              {supporting}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
